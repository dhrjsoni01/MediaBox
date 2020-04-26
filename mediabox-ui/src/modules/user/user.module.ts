import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { VideoComponent } from './video/video.component';
import { FilesComponent } from './files/files.component';
import { VideoService } from 'src/services/video.service';


@NgModule({
    declarations: [
        UserComponent,
        FilesComponent,
        VideoComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
    ],
    providers:[VideoService],
    exports:[]
})
export class UserModule {
    constructor() {

    }
}