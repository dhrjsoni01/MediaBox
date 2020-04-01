import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    templateUrl: './files.component.html',
})
export class FilesComponent implements OnInit {

    pathList = ['Home','Movies']
    constructor() {
        for (let path of this.pathList){
            console.log(path)
        }
     }

    ngOnInit(): void {

    }

}
