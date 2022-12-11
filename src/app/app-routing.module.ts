import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {WithNavLinkRouteData} from '@app/nav-link/nav-link-route-data';
import {AppRoutingPath} from './app-routing-path';

const routes: Array<Route & WithNavLinkRouteData> = [
  {
    path: AppRoutingPath.TakeQuiz,
    loadChildren: () =>
      import('@app/take-quiz/take-quiz.module').then((m) => m.TakeQuizModule),
    data: {
      navLink: {
        label: 'Take the Quiz',
        order: 1,
      },
    },
  },
  {
    path: AppRoutingPath.ExplainAnalysis,
    loadChildren: () =>
      import('@app/explain-analysis/explain-analysis.module').then(
        (m) => m.ExplainAnalysisModule
      ),
    data: {
      navLink: {
        label: 'How it Works',
        order: 2,
      },
    },
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
