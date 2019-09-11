import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'contact-request',
    templateUrl: './contact-request.component.html'
})

export class ContactRequestComponent {
    contactName = new FormControl('');
}