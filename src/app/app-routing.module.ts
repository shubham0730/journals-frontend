import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { AboutJournalComponent } from './pages/about-journal/about-journal.component';
import { LoginComponent } from './authentication/login-page/login-page.component';
import { AfiliatedSocietyComponent } from './pages/afiliated-society/afiliated-society.component';

const routes: Routes = [
  {path: '', component: HomeScreenComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'author/info', component: AuthorInfoComponent},
  {path: 'journal-info/editorial-board', component:EditorialBoardComponent},
  // {path: 'dynamic-table', component: DynamicTableComponent},
  {path: 'journal-info/about-journal', component: AboutJournalComponent},
  {path: 'journal-info/affiliated-society', component:AfiliatedSocietyComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
