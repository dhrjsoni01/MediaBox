import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  some_list = [2,34,5,6,8]
  constructor() { }

  ngOnInit(): void {
  }

}
