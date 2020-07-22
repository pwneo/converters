import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperatures',
  templateUrl: './temperatures.page.html',
  styleUrls: ['./temperatures.page.scss'],
})
export class TemperaturesPage implements OnInit {
  public temperatures = [
    { name: 'Celsius', value: 0 },
    { name: 'Fahrenheit', value: 0 },
  ];

  constructor() {}

  ngOnInit() {}

  /**
   * Quando um novo valor é inserido em um dos inputs, o método recebe um $event com
   * as informações de valor e nome da métrica.
   *
   * O nome pesquisado no array e se for diferente do comparado, quer dizer que é essa
   * a métrica que queremos calcular.
   *
   * Se o valor do input for negativo nada acontece e ele será zerado. Caso contrário,
   * o input da outra métrica receberá o valor convertido.
   *
   * @param $event
   */
  public calculate($event): void {
    const inputName: string = $event.target.name;
    const inputValue: number = $event.target.value;
    const otherTemperature = this.temperatures.find(
      (metric) => metric.name !== inputName
    );
    if (inputValue <= 0) {
      this.temperatures.map((metric) => (metric.value = 0));
      return;
    }

    const valueCalculated =
      otherTemperature.name === 'Celsius'
        ? (5.0 / 9.0) * (inputValue - 32.0)
        : (inputValue * 9.0) / 5.0 + 32.0;

    otherTemperature.value = parseFloat(valueCalculated.toFixed(3));
  }
}
