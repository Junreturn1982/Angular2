
// component decorator
import { Component } from '@angular/core';
// component metadata
@Component({
    // cl: contact list
    selector: 'cl-app',
    template: `
        <h3>contact list ContactListComponent</h3>
    `
})
export class ContactListComponent {
    pageTitle: string = `Demo page`;
}