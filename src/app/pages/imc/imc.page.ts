import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  public weight: number = 0;
  public height: number = 0;
  public message: string = '';

  constructor() {}

  ngOnInit() {
    this.weight = 0.0;
    this.height = 0.0;
  }

  calculate($event) {
    if (
      this.height === 0 ||
      this.height === null ||
      this.weight === 0 ||
      this.weight === null
    ) {
      return;
    }

    const { name, value } = $event.target;
    let result = null;
    if (name === 'height') {
      result = this.weight / Math.pow(value, 2);
    } else {
      result = value / Math.pow(this.height, 2);
    }

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
