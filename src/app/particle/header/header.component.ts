import { Component, Input, OnInit } from '@angular/core';
import {ProgressBarModule} from 'primeng/progressbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ProgressBarModule]
})
export class HeaderComponent implements OnInit {

  @Input() step!: string;
  @Input() value!: number;
  @Input() goToRoute!: string;

  constructor( private route : Router) { }

  ngOnInit(): void {
  }

  goTo(){
    this.route.navigate([this.goToRoute]);
  }

}
