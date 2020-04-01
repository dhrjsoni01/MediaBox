import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { VideoComponent } from './video/video.component';
import { FilesComponent } from './files/files.component';


const routes: Routes = [
    {path:'user',component:UserComponent,
    children:[
        {path:'' , redirectTo:'files',pathMatch:'full'},
        {path:'files',component:FilesComponent},
        {path:'video',component:VideoComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
