import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string
  password:string
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  login(){
    this.api.login(this.username,this.password).subscribe(
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
