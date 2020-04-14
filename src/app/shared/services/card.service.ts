import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  imageFlag: any = {
    visa: '../../../assets/images/visa_flag.png',
    master: '../../../assets/images/master_flag.png',
    elo: '../../../assets/images/elo_flag.png',
  };

  acceptedCreditCards: any = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})$/
  };

  card = {
    flag: '',
    number: '**** **** **** ****',
    name: 'Nome do Titular',
    expire: '00/00',
    cvv: null,
    installments: '12x',
    class: 'disabled',
    active: false
  };

  getFlag() {
    return this.imageFlag;
  }

  getAcceptedCard() {
    return this.acceptedCreditCards;
  }

  getCard() {
    return this.card;
  }
}
