import { Injectable } from '@angular/core'; 
import {  HttpClient, } from '@angular/common/http';
import'rxjs'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Data } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {
  private username='craig-ke';
  private client_id = 'd9308aacf8b204d361fd';
  private client_secret='62551cc02cee983fff0bac41baf170eb5a312c1c';


  constructor(private _http:HttpClient){
    console.log('Github service has started ..... ');
  }
  getGithubPublicUser(){
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        // .map(res => res.json());
}

 getGithubPublicRepositories(){
  return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        // .map(res => res.json());
}

updateUsername(username:string){
    this.username = username;
}
}
