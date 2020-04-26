import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {
    private BASE_URL = "http://localhost:8000/api"
    constructor(private httpClient: HttpClient) { 
        // this.testServer()
    }

    login(username:string,password:string){
        return this.httpClient.post(this.BASE_URL+'/login',{
            'username':username,
            'password':password
        },{
            withCredentials:true
        })
    }

    register(username:string,password:string){
        return this.httpClient.post(this.BASE_URL+'/register',{
            'username':username,
            'password':password
        },{
            withCredentials:true
        })
    }


    testServer(){
        this.httpClient.get<any>(this.BASE_URL,{
            withCredentials:true
        }).subscribe(
            response=>{
                console.log(response)
            }
        )
    }

    getBasePaths(){
        return this.httpClient.get<any>(this.BASE_URL+'/file/root')
    }

    getFilesInPath(path:string){
        return this.httpClient.post<any>(this.BASE_URL+'/file/ls',{
            'dir':path
        })
    }
    
}