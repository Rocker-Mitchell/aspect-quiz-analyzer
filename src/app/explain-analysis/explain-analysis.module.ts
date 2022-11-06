import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ExplainAnalysisRoutingModule} from './explain-analysis-routing.module';
import {ExplainAnalysisComponent} from './explain-analysis.component';

@NgModule({
  declarations: [ExplainAnalysisComponent],
  imports: [CommonModule, ExplainAnalysisRoutingModule],
  exports: [ExplainAnalysisComponent],
})
export class ExplainAnalysisModule {}
