import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnbordingRoutes } from './onbording.routing';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ButtonComponent } from '../atoms/button/button.component';
import { FaceCaptureComponent } from '../pages/face-capture/face-capture.component';
import { OnbordingComponent } from './onbording.component';
import { InstructionsIdentifyComponent } from '../pages/instructions-identify/instructions-identify.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { HeaderComponent } from '../particle/header/header.component';
import { FaceReviewComponent } from '../pages/face-review/face-review.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';

import { RegisterUserComponent } from '../pages/register-user/register-user.component';





@NgModule({
  declarations: [
    OnbordingComponent,
    WelcomeComponent,
    FaceCaptureComponent,
    FaceReviewComponent,
    InstructionsIdentifyComponent,
    RegisterUserComponent
  ],
  imports: [
    ButtonComponent,
    CommonModule,
    OnbordingRoutes,
    ProgressSpinnerModule,
    HeaderComponent,
    RouterModule,
    HttpClientModule,
    TimelineModule,
    CardModule,
    CheckboxModule,
    FormsModule,
    InputNumberModule
  ],
  providers: [

  ],
})
export class OnbordingModule { }
