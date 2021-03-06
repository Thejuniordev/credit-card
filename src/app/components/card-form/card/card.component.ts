import { Component, OnInit, Input } from '@angular/core';

import { CardService } from '../../../shared/services/card.service';
import { CardFormComponent } from '../card-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() backCard: any;
  @Input() card: any;

  constructor(private cardService: CardService) { }

  getCard(): void {
    this.card = this.cardService.getCard();
  }

  ngOnInit() {
    this.getCard();
  }

}
