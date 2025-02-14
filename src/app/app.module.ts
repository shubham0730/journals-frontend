import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login-page/login-page.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { AuthorInfoComponent } from './pages/author-info/author-info.component';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AboutJournalComponent } from './pages/about-journal/about-journal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { AfiliatedSocietyComponent } from './pages/afiliated-society/afiliated-society.component';
import { DummySubmitComponent } from './dummy-submit/dummy-submit.component';
import { UploadManuscriptComponent } from './upload-manuscript/upload-manuscript.component';
import { SubmitManuscriptDetailsComponent } from './submit-manuscript-details/submit-manuscript-details.component';
import { SubmitManuscriptInstitutionDetailsComponent } from './submit-manuscript-institution-details/submit-manuscript-institution-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CompleteSubmitComponent } from './complete-submit/complete-submit.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
 // ✅ Import this


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeScreenComponent,
    FooterComponent,
    RegisterComponent,
    ProfileComponent,
    AuthorInfoComponent,
    EditorialBoardComponent,
    DynamicTableComponent,
    AboutJournalComponent,
    LoginComponent,
    AfiliatedSocietyComponent,
    UploadManuscriptComponent,
    SubmitManuscriptDetailsComponent,
    SubmitManuscriptInstitutionDetailsComponent,
    CompleteSubmitComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
