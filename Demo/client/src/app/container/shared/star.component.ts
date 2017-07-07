import { Component, OnChanges } from '@angular/core';
// component decorator
@Component({
    // Acme Inc
    selector: 'ai-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    rating: number = 4;
    starWidth: number;

    ngOnChanges(): void {
        // width: 86px
        this.starWidth = this.rating * 86/5;
    }
}