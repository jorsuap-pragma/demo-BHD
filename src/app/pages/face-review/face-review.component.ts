import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FaceCapturedService } from '../../services/face-captured.service';
import { RegisterFaceUserService } from 'src/app/services/registerFaceUser/register-face-user.service';

@Component({
  selector: 'app-face-review',
  templateUrl: './face-review.component.html',
  styleUrls: ['./face-review.component.scss']
})
export class FaceReviewComponent implements OnInit {

  public imageCaptured: any;
  public currentStep = 'Comprueba tu selfie'

  constructor(
    private faceCapturedService : FaceCapturedService,
    private route: Router,
    private registerFaceUserService : RegisterFaceUserService
    ) {

    this.faceCapturedService.getValor().subscribe((data) => {
      this.imageCaptured = data;
    });
  }

  ngOnInit(): void {

  }

  findFace(){
    this.route.navigate(['/face-capture']);
  }

  sedImgFace(){
    this.registerFaceUserService.setImgUser(this.imageCaptured.split(',')[1], 'postman-test-1131');
  }


}
