import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
    selector: 'modal',
    template: 
            `<div class="modal">
                <div class="modal-body">
                    <ng-content></ng-content>
                </div>
            </div>
            <div class="modal-background"></div>`
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }
    
    ngOnInit(): void {
        let modal = this;
        
        if(!this.id) {
            console.error('Modal must have an ID');
            return;
        }

        document.body.appendChild(this.element);
        this.element.addEventListener('click', function (e: any) {
            if(e.target.className === 'modal') {
                modal.close();
            }
        });

        this.modalService.add(modal);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    }

    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}