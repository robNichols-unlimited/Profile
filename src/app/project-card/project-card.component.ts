import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
    selector: 'project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent implements OnInit {
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
                    gallery: [{}],
                    link: ""
                }]
            }            
        })
    }
}

//model
export class Project {
    name: string;
    tags: Array<string>;
    details: string;
    public: boolean;
    gallery: Array<object>;//how to make this an array of images.
    link: string;
}