export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal); //add modal to active array of modals
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id != id); //remove modal from active array of modals        
    }

    open(id: string) {
        let modal: any = this.modals.filter(x => x.id === id)[0];
        modal.open();
    }

    close(id: string) {
        let modal: any = this.modals.filter(x => x.id === id)[0];
        modal.close();
    }
}