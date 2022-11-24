import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavLinkRouteData} from '@app/nav-link/nav-link-route-data';
import {AppRoutingPath} from './app-routing-path';

const quizRouteData: NavLinkRouteData = {
  navLinkLabel: 'Take the Quiz',
  navLinkOrder: 1,
};

const explainRouteData: NavLinkRouteData = {
  navLinkLabel: 'How it Works',
  navLinkOrder: 2,
};

const routes: Routes = [
  {
    path: AppRoutingPath.TakeQuiz,
    loadChildren: () =>
      import('@app/take-quiz/take-quiz.module').then((m) => m.TakeQuizModule),
    data: quizRouteData,
  },
  {
    path: AppRoutingPath.ExplainAnalysis,
    loadChildren: () =>
      import('@app/explain-analysis/explain-analysis.module').then(
        (m) => m.ExplainAnalysisModule
      ),
    data: explainRouteData,
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
