import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  public peso: number = 0;
  public altura: number = 0;
  public message: string = '';

  constructor() {}

  ngOnInit() {
    this.peso = 0.0;
    this.altura = 0.0;
  }

  calculate($event) {
    if (
      this.peso === 0 ||
      this.peso === undefined ||
      this.altura === 0 ||
      this.altura === undefined
    ) {
      return;
    }
    const result = this.peso / Math.pow(this.altura, 2);
    console.log(result);
    if (result < 18.5) {
      this.message = 'Abaixo do Peso';
    } else if (result >= 18.5 && result < 24.9) {
      this.message = 'Peso Normal';
    } else if (result >= 25 && result < 29.9) {
      this.message = 'Sobrepeso';
    } else if (result >= 30 && result < 34.9) {
      this.message = 'Obsidade Grau 1';
    } else if (result >= 35 && result < 39.9) {
      this.message = 'Obsidade Grau 2';
    } else if (result >= 40) {
      this.message = 'Obsidade Grau 3';
    }
  }
}
