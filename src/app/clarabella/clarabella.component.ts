import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero, TopolinoService } from '../services/topolino.service';

@Component({
  selector: 'app-clarabella',
  template: ` <button type="button" (click)="lightclicked()">Click me!</button>
    <span>{{ message }}</span>`,
  styleUrls: ['./clarabella.component.scss'],
})
export class ClarabellaComponent implements OnInit {
  isOn = false;

  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();
  constructor(private topolino: TopolinoService) {}

  ngOnInit(): void {}
  lightclicked() {
    this.isOn = !this.isOn;
  }

  heroClicked() {
    this.selected.emit(this.hero);
  }
}
