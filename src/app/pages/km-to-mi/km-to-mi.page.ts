import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-km-to-mi',
  templateUrl: './km-to-mi.page.html',
  styleUrls: ['./km-to-mi.page.scss'],
})
export class KmToMiPage implements OnInit {
  public metrics = [
    { name: 'Quilômetro', converted: 1.609, value: 0 },
    { name: 'Milha', converted: 0.621371, value: 0 },
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
    const inputName = $event.target.name;
    const inputValue = $event.target.value;
    const otherMetric = this.metrics.find( metric => metric.name !== inputName);
    if (inputValue <= 0) {
      this.metrics.map(metric => metric.value = 0);
      return;
    }
    otherMetric.value = parseFloat((inputValue * otherMetric.converted).toFixed(2));
  }
}
