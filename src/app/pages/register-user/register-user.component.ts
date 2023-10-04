import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegisterFaceUserService } from 'src/app/services/registerFaceUser/register-face-user.service';
import { UserIdService } from 'src/app/services/user-id.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  currentStep:string = 'Concentimiento';
  selectedValues: boolean = false;
  idNumber!: number;
  idUser:string = '';

  constructor(
    private registerFaceUserService : RegisterFaceUserService,
    private router : Router,
    private userIdService: UserIdService
    ) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.registerFaceUserService.registerUser(this.idNumber.toString())
    .subscribe((response: any)=>{
        if(response.status === "ACTIVE"){
          this.userIdService.setIdUser(response.id);
          this.router.navigate(['/face-capture']);
        }
      }
    )
  }

}
