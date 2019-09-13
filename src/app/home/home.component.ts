import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../project-card/project-card.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Array<Project>;
    
    constructor(private projectService: ProjectService){}

    ngOnInit(){
        this.projectService.getProjects().then(result => {
            if(result !== null){
                this.projects = result;
            } else {
                this.projects = [{
                    name: "Failed to get REAL projects",
                    tags: ["TypeScript", "HTML", "CSS", "Angular", "VS Code"],
                    details: "Oops. There was a problem retrieving the projects from the file. Please double check.",
                    public: true,
                    gallery: [{src: "../../assets/images/oops.jpg", alt:"Oops!"}],
                    link: ""
                }]
            }            
        })
    }

}