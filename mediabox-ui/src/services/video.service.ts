import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class VideoService {
    private videoSubject:BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getVideoSubject(){
        return this.videoSubject
    }

    setVideoFile(file:any){
        this.videoSubject.next(file)
    }

}