import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { VideoService } from 'src/services/video.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppStorageService } from 'src/services/storage.service';

@Component({
    templateUrl: './files.component.html',
    styleUrls: ['files.component.css']
})
export class FilesComponent implements OnInit {
    files: any[] = [];
    currentPath: any;
    localPathList:any[] = []

    constructor(private api: ApiService,
        private videoService: VideoService,
        private router: Router,
        private cuurentRoute: ActivatedRoute,
        private storage: AppStorageService) {
        // this.parseUrl("http://192.168.43.18:8000/api/user/test/D:/video hey there (2012) @ ")
    }
    ngOnInit(): void {
        if (this.storage.pathList == null) {
            this.api.getBasePaths().subscribe(response => {
                console.log(response)
                // this.currentPath = response.roots[0];
              
                this.files = response.files
                let currentPath = this.files[0].dirPath
                this.localPathList = [{
                    'name': "Home",
                    'path': currentPath
                }]
                this.storage.pathList = this.localPathList

            }, err => {
                console.log(err)
            })
        }else{
            this.localPathList = this.storage.pathList
            this.loadFiles(this.storage.getCurrentPath())
        }
    }


    loadFiles(path: string) {
        this.api.getFilesInPath(path).subscribe(
            response => {
                this.files = response.files
            }
        )
    }

    handleClick(fileItem) {
        if (fileItem.fileType == 'dir') {
            this.currentPath = fileItem.filePath
            this.localPathList.push({
                'name': fileItem.fileName,
                'path': this.currentPath
            })
            this.storage.pathList = this.localPathList

            this.loadFiles(this.currentPath)
        } else {
            if (fileItem.mime && fileItem.mime.split("/")[0] == 'video') {
                this.playVideo(fileItem)
            }
        }
    }

    moveDir(path:any){
        let found:boolean = false
        let value = 'name'
        for(var temp of this.localPathList){
            if(found){
                this.localPathList.pop()
            }
            
            if(path.name==temp.name){
                console.log(temp)
                found=true
            }
            
            
        }
        this.storage.pathList = this.localPathList
        this.loadFiles(this.storage.getCurrentPath())

    }


    playVideo(file: any) {
        this.storage.currentFile = file
        this.router.navigate(["../video"], { relativeTo: this.cuurentRoute })
    }
}
