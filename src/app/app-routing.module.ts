import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingPath} from './app-routing-path';

const routes: Routes = [
  {
    path: AppRoutingPath.TakeQuiz,
    loadChildren: () =>
      import('@app/take-quiz/take-quiz.module').then((m) => m.TakeQuizModule),
  },
  {
    path: AppRoutingPath.ExplainAnalysis,
    loadChildren: () =>
      import('@app/explain-analysis/explain-analysis.module').then(
        (m) => m.ExplainAnalysisModule
      ),
  },
  {
    path: AppRoutingPath.Homepage,
    loadChildren: () =>
      import('@app/homepage/homepage.module').then((m) => m.HomepageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
