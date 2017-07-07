import { Component, OnChanges, Input, 
        Output, EventEmitter } from '@angular/core';
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
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        // width: 86px
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}