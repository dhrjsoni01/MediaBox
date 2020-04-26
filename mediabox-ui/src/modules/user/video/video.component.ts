import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VideoService } from 'src/services/video.service';
import { AppStorageService } from 'src/services/storage.service';

@Component({
    templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit {
    videoBaseUrl = "http://192.168.43.18:8000/api/video/"
    videoUrl: URL
    file: any
    constructor(private storage: AppStorageService) {

        this.file = this.storage.currentFile
        this.videoUrl = this.parseUrl(this.videoBaseUrl + this.file.filePath)

    }

    ngOnInit(): void {


    }
    parseUrl(urlString: string) {
        return new URL(urlString)
    }
}
