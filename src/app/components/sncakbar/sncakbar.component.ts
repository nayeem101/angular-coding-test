import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sncakbar',
  templateUrl: './sncakbar.component.html',
  styleUrls: ['./sncakbar.component.scss'],
})
export class SncakbarComponent implements OnInit {
  @Input() message!: string;
  constructor() {}

  ngOnInit(): void {}
}
