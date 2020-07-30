import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data: Object[];
  public chartTitle: string;
  public chartLabel: Object;
  public legend: Object;
  public tooltipSettings: Object;
  constructor(){
    this.chartTitle='Fruits Consumption Statistics'
    this.data=[

      {name: 'Apple', value: 37, text: '37%'},
      {name: 'Orange', value: 17, text: '17%'},
      {name: 'Mango', value: 19, text: '19%'},
      {name: 'Banana', value: 4, text: '4%'},
      {name: 'Grapes', value: 11, text: '11%'},
      {name: 'Pineapple', value: 12, text: '12%'},
    ];
    this.tooltipSettings={
        enable: true,
        format: '${point.x} : <b>${point.y}%</b>'
    };
    this.chartLabel={
      visible: true,
      position: 'Inside',
      name:'text'
    };
    this.legend={
      visible: true,
      position: 'Bottom',
      height: '8%',
      width: '35%'
    }
  }
}
