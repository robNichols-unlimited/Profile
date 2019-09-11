import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'contact-request',
    templateUrl: './contact-request.component.html',
    styleUrls: ['./contact-request.component.css']
})

export class ContactRequestComponent {
    contactForm = new FormGroup({
        contactName: new FormControl(''),
        contactEmail: new FormControl(''),
        requestType: new FormControl(''),
        requestMessage: new FormControl('')
    });
    
}