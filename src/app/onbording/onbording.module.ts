import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnbordingRoutes } from './onbording.routing';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ButtonComponent } from '../atoms/button/button.component';
import { FaceCaptureComponent } from '../pages/face-capture/face-capture.component';
import { OnbordingComponent } from './onbording.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { HeaderComponent } from '../particle/header/header.component';
import { FaceReviewComponent } from '../pages/face-review/face-review.component';
import { RouterModule } from '@angular/router';
import { RegisterFaceUserService } from '../services/registerFaceUser/register-face-user.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    OnbordingComponent,
    WelcomeComponent,
    FaceCaptureComponent,
    FaceReviewComponent
  ],
  imports: [
    ButtonComponent,
    CommonModule,
    OnbordingRoutes,
    ProgressSpinnerModule,
    HeaderComponent,
    RouterModule,
    HttpClientModule

  ],
  providers: [
    
  ],
})
export class OnbordingModule { }
