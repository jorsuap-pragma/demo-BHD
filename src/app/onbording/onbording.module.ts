import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnbordingRoutes } from './onbording.routing';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ButtonComponent } from '../atoms/button/button.component';
import { FaceCaptureComponent } from '../pages/face-capture/face-capture.component';
import { OnbordingComponent } from './onbording.component';



@NgModule({
  declarations: [
    OnbordingComponent,
    WelcomeComponent,
    FaceCaptureComponent,
  ],
  imports: [
    ButtonComponent,
    CommonModule,
    OnbordingRoutes
  ]
})
export class OnbordingModule { }
