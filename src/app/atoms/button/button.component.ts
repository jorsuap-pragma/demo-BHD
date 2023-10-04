import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [ CommonModule ]
})
export class ButtonComponent implements OnInit {

  @Input() label!: string;
  @Input() costumClass!: string;
  @Input() addClass: string = '';


  constructor() { }

  ngOnInit(): void {
    console.log(this.label);

  }

}
