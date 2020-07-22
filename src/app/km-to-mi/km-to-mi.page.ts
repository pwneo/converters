import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-km-to-mi',
  templateUrl: './km-to-mi.page.html',
  styleUrls: ['./km-to-mi.page.scss'],
})
export class KmToMiPage implements OnInit {
  public metrics = [
    { name: 'Quilômetro', value: 0 },
    { name: 'Milha', value: 0 },
  ];

  constructor() {}

  ngOnInit() {}

  public calculate($event): void {
    const { value, name } = $event.target;
    if (value < 0) {
      this.metrics[0].value = 0;
      this.metrics[1].value = 0;
      return;
    }
    name === 'Quilômetro'
      ? (this.metrics[1].value = parseFloat((value * 0.621371).toFixed(2)))
      : (this.metrics[0].value = parseFloat((value * 1.609).toFixed(2)));
  }
}
