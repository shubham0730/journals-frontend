import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AboutJournalComponent } from './pages/about-journal/about-journal.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeScreenComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AuthorInfoComponent,
    EditorialBoardComponent,
    DynamicTableComponent,
    AboutJournalComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
