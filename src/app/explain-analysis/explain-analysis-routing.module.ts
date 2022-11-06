import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExplainAnalysisComponent} from './explain-analysis.component';

const routes: Routes = [{path: '', component: ExplainAnalysisComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplainAnalysisRoutingModule {}
