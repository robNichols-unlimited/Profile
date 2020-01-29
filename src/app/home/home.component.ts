import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../project-card/project-card.component';
import { ModalService } from '../services/modal.service';
import { HobbyService } from '../services/hobby.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Array<Project>;
  //hobbies: Array<Hobbies>;
  //hobbyIdList: string[];
  bodyText: string;
    
    constructor(private projectService: ProjectService, private modalService: ModalService, private hobbyService: HobbyService){}

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
        // this.hobbyService.getHobbies().then(result => {
        //     if(result !== null) {
        //         this.hobbies = result;
        //         this.hobbies.forEach(x => {
        //             if(x.id) this.hobbyIdList.push(x.id);
        //         });                
        //     } else {
        //         this.hobbies = [{
        //             id: "Oops",
        //             title: "Oops! My bad...",
        //             body: "We were not able to retrieve the information about this hobby/interest. Thanks!"
        //         }];
        //     }
        // });
    }

    openModal(id: string) {
        
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}

// //hobby model
// export class Hobbies {
//     id: string;
//     title: string;
//     body: string;
// }