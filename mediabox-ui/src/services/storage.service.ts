import { Injectable } from '@angular/core';
import {  SessionStorageService } from 'angular-web-storage';

@Injectable()
export class AppStorageService {

    private pathList:any
    private currentFile:any

    constructor(private sessionStorage:SessionStorageService){
        this.pathList = sessionStorage.get('pathList')
        this.currentFile = sessionStorage.get('currentFile')
    }


    getPathList(){
        return  this.pathList
    }

    setPathList(pathList){
        this.pathList = pathList
        this.sessionStorage.set('pathList',this.pathList) 
    }

    getCurrentFile(){
        return  this.currentFile
    }

    setCurrentFile(currentFile){
        this.currentFile = currentFile
        this.sessionStorage.set('currentFile',this.currentFile) 
    }
 
    getcurrentPath(){
        
    }
}