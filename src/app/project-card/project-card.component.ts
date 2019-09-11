import { Component } from '@angular/core';

@Component({
    selector: 'project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent {
    
}

//model
class project {
    name: string;
    tags: Array<string>;
    details: string;
    public: boolean;
    gallery: Array<object>;//how to make this an array of images.
    link: string;
}