import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { VideoComponent } from './video/video.component';
import { FilesComponent } from './files/files.component';


@NgModule({
    declarations: [
        UserComponent,
        FilesComponent,
        VideoComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    exports:[
        CommonModule
    ]
})
export class UserModule {
    constructor() {

    }
}