import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})

export class InputComponent {
  
  constructor() {
  
  }
  private todoDataService = inject(TodoDataService)



inputValue :string = ""
outputValue :string=""
  onSubmit() {
    this.outputValue = this.inputValue
  
    this.todoDataService.changeProfile(this.outputValue)
 }
  
 
}


