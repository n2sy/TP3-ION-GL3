import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  taux;
  show: Boolean = false;
  constructor(private exchangeSer: ExchangeService) {}

  ngOnInit() {}

  convert(currency2) {
    let s = 'USD' + currency2.value;
    console.log(s);

    this.exchangeSer.getAllCurrencies().subscribe(
      (reponse) => {
        console.log(reponse['quotes']);
        console.log(reponse['quotes'][s]);
        this.taux = reponse['quotes'][s];
        this.show = true;
      },
      (error) => {
        console.log(error);
      }
      // () => {
      //   console.log('Flux terminé');
      // }
    );
    //console.log(currency2.value);
  }
}
