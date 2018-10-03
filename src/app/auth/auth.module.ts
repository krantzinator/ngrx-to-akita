import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginPageComponent } from '../auth/containers/login-page.component';
import { LoginFormComponent } from '../auth/components/login-form.component';
import { LogoutConfirmationDialogComponent } from '../auth/components/logout-confirmation-dialog.component';

import { AuthEffects } from '../auth/effects/auth.effects';
import { reducers } from '../auth/reducers';
import { MaterialModule } from '../material';
import { AuthRoutingModule } from '../auth/auth-routing.module';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent,
  LogoutConfirmationDialogComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    // StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
  entryComponents: [LogoutConfirmationDialogComponent],
})
export class AuthModule {}
