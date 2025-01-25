import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from "@angular/common";
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task!: Task;

  private taskService = inject(TaskService);

  onTaskComplete(taskId: string) {
    this.taskService.removeTask(taskId);
  }

}
