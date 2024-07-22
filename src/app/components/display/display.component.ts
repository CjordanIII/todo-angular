import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { TodoDataService } from '../../services/todo-data.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [NgFor],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
  private todoDataService = inject(TodoDataService)
  data: string[] = []
  
  ngOnInit(): void {
    this.todoDataService.currentProfile.pipe(filter((myData: any) => !!myData)).subscribe(todo => {
     
      this.data.push(todo)
      console.log(this.data)
    })
    
  }
  onDelete(item:number):void{
    this.data.splice(item, 1)
  }
}
