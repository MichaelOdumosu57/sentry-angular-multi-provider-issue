// angular
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


// misc

// i18n

// rxjs


// interceptors

// sentry
import * as Sentry from "@sentry/angular-ivy";
import { Router } from '@angular/router';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,


  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true
      }),
      multi:true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    // even uncommented the issue is with sentry
    // {
    //   provide:ErrorHandler,
    //   useClass:GlobalErrorHandler,
    //   multi:true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
