import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent implements OnInit {
    @Input()
    inProject: Project;
    available: string;
    sourcePath: string;
    altText: string;

    ngOnInit(){
        if(this.inProject.public) {
            this.available = "Public";
        } else {
            this.available = "Private";
        }

        if(this.inProject.gallery) {
            this.inProject.gallery.forEach(image => {
                this.sourcePath = image.src;
                this.altText = image.alt;
            });            
        }
    }
}

//model
export class Project {
    name: string;
    tags: Array<string>;
    details: string;
    public: boolean;
    gallery: Array<Gallery>;//how to make this an array of images.
    link: string;
}

export class Gallery {
    src: string;
    alt: string;
}