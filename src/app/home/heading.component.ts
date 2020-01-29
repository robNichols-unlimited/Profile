import { Component, OnInit } from '@angular/core';
import { HobbyService } from '../services/hobby.service';
import { ModalService } from '../services/modal.service';
import { Hobbies } from '../models/hobbies';

@Component({
    selector: 'heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./home.component.css']
})
export class HeadingComponent implements OnInit {
    welcome = "";
    content = "";
    hobbies: Array<Hobbies>;
    hobbyIdList: string[];

    constructor(private hobbyService: HobbyService, private modalService: ModalService){

    }

    ngOnInit(){
        this.welcome = "Hello and Welcome to my profile page!";
        this.content = "My name is Rob Nichols, I am a software developer. My experience has been in full-stack, web development using .NET and Angular. I have had some passing experience with other frameworks and technologies and I enjoy learning as much as I can.";

        this.hobbyService.getHobbies().then(result => {
            if(result !== null) {
                this.hobbies = result;
                this.hobbies.forEach(x => {
                    if(x.id) this.hobbyIdList.push(x.id);
                });                
            } else {
                this.hobbies = [{
                    id: "Oops",
                    img: "",
                    title: "Oops! My bad...",
                    desc: "We were not able to retrieve the information about this hobby/interest. Thanks!"
                }];
            }
        });
    }

    openModal(hobby: any) {
        this.modalService.open(hobby);
    }
}