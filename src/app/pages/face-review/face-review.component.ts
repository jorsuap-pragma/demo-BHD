import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FaceCapturedService } from '../../services/face-captured.service';
import { RegisterFaceUserService } from 'src/app/services/registerFaceUser/register-face-user.service';
import { UserIdService } from 'src/app/services/user-id.service';

@Component({
  selector: 'app-face-review',
  templateUrl: './face-review.component.html',
  styleUrls: ['./face-review.component.scss']
})
export class FaceReviewComponent implements OnInit {

  public imageCaptured: any;
  public currentStep = 'Comprueba tu selfie';
  private userId: string = '';

  constructor(
    private faceCapturedService : FaceCapturedService,
    private route: Router,
    private registerFaceUserService : RegisterFaceUserService,
    private userIdService: UserIdService
    ) {

    this.faceCapturedService.getValor().subscribe((data) => {
      this.imageCaptured = data;
    });
    this.userIdService.getIdUser().subscribe((data) => {
      this.userId = data;
    });
  }

  ngOnInit(): void {

  }

  findFace(){
    this.route.navigate(['/face-capture']);
  }

  sedImgFace(){
    this.registerFaceUserService.sendImgUser(this.imageCaptured.split(',')[1], this.userId)
    .subscribe( value => { console.log("'--------------------'", value);
    });
  }


}
