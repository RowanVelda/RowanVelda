import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent implements OnInit{
  
  font = 'Arial';
  size = '18px';
  constructor() { }

  ngOnInit(): void { }

}
