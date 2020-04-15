import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CardService } from '../../shared/services/card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  backCard: string = 'disabled';

  registerForm: FormGroup;
  submitted = false;
  @Output() card: any;
  @Output() imageFlag: any;
  @Output() acceptedCreditCards: any;


  constructor(private formBuilder: FormBuilder, private cardService: CardService) { }


  enableCard() {
    this.backCard = 'enabled';
  }

  disableCard() {
    this.backCard = 'disabled';
  }

  getCard(): void {
    this.card = this.cardService.getCard();
  }

  getFlag(): void {
    this.imageFlag = this.cardService.getFlag();
  }

  getAcceptedCard(): void {
    this.acceptedCreditCards = this.cardService.getAcceptedCard();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      numberCard: new FormControl ('', Validators.required),
      nameCard: new FormControl ('', Validators.required),
      expiredCard: new FormControl ('', Validators.required),
      cvvCard: new FormControl ('', Validators.required),
      installmentCard: new FormControl ('', Validators.required),
    });

    this.getCard();

    this.getFlag();

    this.getAcceptedCard();
  }

  cardNumber(data) {
    this.card.number = data;
    data = data.replace(/\D/g, '');

    if (this.acceptedCreditCards.mastercard.test(data)) {
      this.card.flag = 'master';
      this.card.imageFlag = this.imageFlag.master;
      return true;
    } else if (this.acceptedCreditCards.visa.test(data)) {
      this.card.flag = 'visa';
      this.card.imageFlag = this.imageFlag.visa;
      return true;
    } else if (this.acceptedCreditCards.elo.test(data)) {
      this.card.flag  = 'elo';
      this.card.imageFlag = this.imageFlag.elo;
      return true;
    } else {
      this.card.flag  = '';
      this.card.imageFlag = '';
      return true;
    }
  }

  cardName(data) {
    this.card.name = data;
  }

  cardExpire(data) {
    this.card.expire = data;
  }

  cardCvv(data) {
    this.card.cvv = data;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    alert('SUCCESS!!');
  }

}
