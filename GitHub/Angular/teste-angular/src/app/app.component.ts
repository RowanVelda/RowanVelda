import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent  } from "./components/first-component/first-component.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FirstComponentComponent,
    ParentDataComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-angular';
  userName = 'Guiizera';
  userData = {
    email: 'gdspaduan@gmail.com',
    senha: '7355608'
  }
}
