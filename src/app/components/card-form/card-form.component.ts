import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  constructor() { }
  @Input() error: any;

  flag: any = {
    visa: '../../../../assets/images/brand.png',
    master: '../../../../assets/images/master_flag.png',
    elo: '../../../../assets/images/elo_flag.png',
  };

  acceptedCreditCards: any = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    amex: /^3[47][0-9]{13}$/,
    elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/
  };

  acceptedNameCard: any = {
    name: /^([A-Za-z]{3, })\s([A-Za-z]{3, })$/
  };

  acceptedValidate: any = {
    date: /^(((0)[0-9])|((1)[0-2]))(\/)\d{2}$/
  };

  card: any = {
    number: '**** **** **** ****',
    name: 'Nome do Titular',
    validate: '00/00',
    cvv: '****',
    class: 'disabled',
    flag: 'disabled',
    imageFlag: '',
    numberError: '',
    nameError: '',
    validateError: '',
    cvvError: '',
    selecterror: ''
  };

  date: any = new Date();



  cardNumber(data) {
    data = data.replace(/[^0-9]+/gi, '').replace(/(.{4})/g, '$1 ');
    this.card.number = data;
    data = data.replace(/\D/g, '');

    if (this.acceptedCreditCards.mastercard.test(data)) {
      this.card.flag = 'master';
      this.card.imageFlag = this.flag.master;
      this.card.numberError = '';
      return true;
    } else if (this.acceptedCreditCards.visa.test(data)) {
      this.card.flag = 'visa';
      this.card.imageFlag = this.flag.visa;
      this.card.numberError = '';
      return true;
    } else if (this.acceptedCreditCards.amex.test(data)) {
      this.card.flag = 'amex';
      this.card.numberError = '';
      return true;
    } else if (this.acceptedCreditCards.elo.test(data)) {
      this.card.flag = 'elo';
      this.card.imageFlag = this.flag.elo;
      this.card.numberError = '';
      return true;
    } else {
      this.card.imageFlag = '';
      this.card.flag = '';
      this.card.numberError = 'active';
    }
    return false;
  }

  cardName(data) {
    data = data.replace(/[^a-z]+/gi, ' ');
    this.card.name = data;

    // tslint:disable-next-line: triple-equals
    if (data != '' && data.length > 6) {
      console.log('Correto');
      this.card.nameError = '';
    } else {
      this.card.nameError = 'active';
    }
  }

  cardValidate(data) {
    this.card.validate = data;
    data = data.replace(/\D/g, '');
    console.log(this.date);
  }

  cardCvv(data) {
    this.card.cvv = data;
  }

  backCard() {
    this.card.class = 'enabled';
  }
  frontCard() {
    this.card.class = 'disabled';
  }

  onSubmit(form: any) {
  }

  ngOnInit() {
  }

}
