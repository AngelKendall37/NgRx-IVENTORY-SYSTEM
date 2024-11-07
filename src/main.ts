import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './app/store/auth/auth.reducer';
import { AuthEffects } from './app/store/auth/auth.effects';
import { UserEffects } from './app/store/effects/user.effects';
import { userReducer } from './app/store/reducers/user.reducer';
import { CommonModule } from '@angular/common';
import { inventoryReducer } from './app/store/reducers/inventory.reducer';
import { InventoryEffects } from './app/store/effects/inventory.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    importProvidersFrom(
      CommonModule,
      StoreModule.forRoot({
        auth: authReducer,
        user: userReducer,
        inventory: inventoryReducer,
      }),
      EffectsModule.forRoot([AuthEffects, UserEffects, InventoryEffects])
    ),
  ],
}).catch((err) => console.error(err));
