import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from "./components/display/display.component";
import { InputComponent } from './components/input/input.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent,DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
}
