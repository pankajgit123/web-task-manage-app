import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Input({required: true}) userId!: string; // userId
  @Output() cancel = new EventEmitter<void>(); // no data emitted

  titleInput: string = '';
  summaryInput: string = '';
  dueDateInput: string = '';
  
  private taskService = inject(TaskService);

  onClose() {
    this.cancel.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.titleInput,
        summary: this.summaryInput,
        dueDate: this.dueDateInput,
      },
      this.userId
    );
  }

}
