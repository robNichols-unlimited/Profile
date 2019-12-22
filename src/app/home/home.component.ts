import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../project-card/project-card.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Array<Project>;
  bodyText: string;
    
    constructor(private projectService: ProjectService, private modalService: ModalService){}

    ngOnInit(){
        this.projectService.getProjects().then(result => {
            if(result !== null){
                this.projects = result;
            } else {
                this.projects = [{
                    name: "Failed to get REAL projects",
                    tags: ["TypeScript", "HTML", "CSS", "Angular", "VS Code"],
                    details: "Oops. There was a problem retrieving the projects from the file. Please double check.",
                    public: false,
                    gallery: [{src: "../../assets/images/oops.jpg", alt:"Oops!"}],
                    link: ""
                }]
            }            
        });
        this.bodyText = 'Test Modal';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}