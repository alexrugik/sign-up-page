import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  public helloMessage = 'Welcome Home!';
  constructor() { }

  ngOnInit(): void {
  }

}
