import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

 
  username:string
  password:string
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  register(){
    this.api.register(this.username,this.password).subscribe(
      response=>{
        console.log(response)
        this.api.testServer()
      },
      err=>{
        console.log(err)
      }
    )
  }


}
