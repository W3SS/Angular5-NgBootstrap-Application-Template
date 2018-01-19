import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './routes/app.routes';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoadingComponent } from './components/loading/loading.component';


// Services

// Guards

// Directives

// Views
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UnauthorizedComponent } from './views/unauthorized/unauthorized.component';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LoadingComponent,
    DashboardComponent,
    UnauthorizedComponent,
    ErrorComponent,
    LoginComponent

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
