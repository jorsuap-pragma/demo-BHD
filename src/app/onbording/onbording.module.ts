import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnbordingRoutes } from './onbording.routing';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ButtonComponent } from '../atoms/button/button.component';
import { FaceCaptureComponent } from '../pages/face-capture/face-capture.component';
import { OnbordingComponent } from './onbording.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { HeaderComponent } from '../particle/header/header.component';




@NgModule({
  declarations: [
    OnbordingComponent,
    WelcomeComponent,
    FaceCaptureComponent,
  ],
  imports: [
    ButtonComponent,
    CommonModule,
    OnbordingRoutes,
    ProgressSpinnerModule,
    HeaderComponent,
  ]
})
export class OnbordingModule { }
