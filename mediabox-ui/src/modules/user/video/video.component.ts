import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    templateUrl: './video.component.html',
})
export class VideoComponent implements OnInit {
    @ViewChild('videoPlayer') videoPlayer: ElementRef
    constructor() { }

    ngOnInit(): void {

    }

    doSomthing() {
        console.log(this.videoPlayer.nativeElement.innerHTML.audioTracks)
        console.log(this.videoPlayer.nativeElement.innerHTML.videoTracks)
        console.log(this.videoPlayer.nativeElement.innerHTML)
    }
}
