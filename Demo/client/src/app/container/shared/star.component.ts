import { Component, OnChanges, Input } from '@angular/core';
// component decorator
@Component({
    // Acme Inc
    selector: 'ai-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        // width: 86px
        this.starWidth = this.rating * 86/5;
    }
}