import { Component } from '@angular/core';
import { GithubRepoService } from './github-repos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GITSEARCH';

  gitHubRepos: any = [];
 constructor(private gitHubService:GithubRepoService){
  this.getRepos();
 }
 ngOnInit():void{
     this.getRepos();
 }

  getRepos(){
      this.gitHubService.getGithubPublicRepositories().subscribe(repos => {
          this.gitHubRepos =repos;
          console.log(JSON.stringify(this.gitHubRepos))
      });
  }
}
