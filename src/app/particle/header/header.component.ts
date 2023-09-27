import { Component, OnInit } from '@angular/core';
import {ProgressBarModule} from 'primeng/progressbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ProgressBarModule]
})
export class HeaderComponent implements OnInit {

  value: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
