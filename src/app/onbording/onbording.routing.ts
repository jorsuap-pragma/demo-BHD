import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { FaceCaptureComponent } from '../pages/face-capture/face-capture.component';
import { OnbordingComponent } from './onbording.component';

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
      }
    ]
  },
];

export const OnbordingRoutes = RouterModule.forChild(routes);
