import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true
})
export class ButtonComponent implements OnInit {

  @Input() label!: string;
  @Input() costumClass!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
