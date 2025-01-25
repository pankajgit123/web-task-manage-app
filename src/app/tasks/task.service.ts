import { Injectable } from '@angular/core';
import { dummyTasks } from "../dummy-tasks";
import { NewTask } from './task/task.model';
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = dummyTasks;
  constructor() { }

  getTask(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks.unshift({
      id: uuidv4(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
