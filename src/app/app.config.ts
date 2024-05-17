import { provideRouter } from '@angular/router';
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { routes } from './app.routes';
import { BrowserModule,} from '@angular/platform-browser';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth'
import { getAuth } from 'firebase/auth'
import { environment } from './environment/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule,
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth())
    ), provideAnimationsAsync()
  ]
};