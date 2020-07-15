import { Component, OnInit } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emit: EmitterService;

  constructor(emitter: EmitterService) {
    this.emit = emitter;
  }

  ngOnInit(): void {
  }

}
