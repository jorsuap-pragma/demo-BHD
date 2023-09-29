import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { FaceCaptureComponent } from '../pages/face-capture/face-capture.component';
import { OnbordingComponent } from './onbording.component';
import { FaceReviewComponent } from '../pages/face-review/face-review.component';

const routes: Routes = [
  {
    path: '',
    component: OnbordingComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'face-capture',
        component: FaceCaptureComponent
      },
      {
        path: 'face-review',
        component: FaceReviewComponent
      }
    ]
  },
];

export const OnbordingRoutes = RouterModule.forChild(routes);
