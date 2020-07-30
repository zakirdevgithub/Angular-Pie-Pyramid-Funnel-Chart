import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// For Pie , Donate Service Chart
// import {AccumulationChartModule, PieSeriesService, AccumulationDataLabelService, 
//   AccumulationLegendService, AccumulationTooltipService} from '@syncfusion/ej2-angular-charts';

// For Funnel Chart
// import {AccumulationChartModule, PieSeriesService, AccumulationDataLabelService, 
//   AccumulationLegendService, AccumulationTooltipService, FunnelSeriesService} from '@syncfusion/ej2-angular-charts';

  // For Pyramid Chart
import {AccumulationChartModule, PieSeriesService, AccumulationDataLabelService, 
  AccumulationLegendService, AccumulationTooltipService, FunnelSeriesService, PyramidSeriesService} from '@syncfusion/ej2-angular-charts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccumulationChartModule
  ],
  providers: [PieSeriesService,AccumulationDataLabelService,AccumulationLegendService, AccumulationTooltipService, FunnelSeriesService, PyramidSeriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
