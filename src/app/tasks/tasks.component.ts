import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from "../dummy-tasks";
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTask } from './task/task.model';

import { TaskService } from './task.service';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, AddTaskComponent, TestComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string; // userId
  @Input({required: true}) name!: string;
  isAddNewTask = false;
  tasks = dummyTasks;

  constructor(private taskService: TaskService) {}

  selectedUserTasks() {
    return this.taskService.getTask(this.userId);
  }

  onTaskComplete(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  addTask() {
    this.isAddNewTask = true;
  }

  onCancelTask() {
    // this.romanToInt('I');
    // this.romanToInt('IX');
    // this.romanToInt('VII');
    // this.romanToInt('IL');
    this.romanToInt('IXXX');
    // this.romanToInt('CDII');
    // this.romanToInt('CDXVI');
    // this.romanToInt('CDI');
    this.isAddNewTask = false;

    this.intToRoman(401)
    this.intToRoman(402)
    this.intToRoman(416)
    this.intToRoman(19)
  }

  romanToInt(romanNumber: string) {
    const romanNumerals: Record<string, number>  = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }
//CDI, 401, CDII - 402, IX-9, CDXVI-416
    const inputNumberSize = romanNumber.length;
    let total: number = 0;
    for (let index = 0; index < inputNumberSize; index++) {
      const current = romanNumerals[romanNumber[index]];
      const next = romanNumerals[romanNumber[index + 1]];
      if (current < next) {
        console.log(total)
        total -= current;
      } else {
        console.log(total)
        total += current;
      }
    }
    console.log('Total: ', total);
  }

  intToRoman(inputNumber: number) {
    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" }
  ];

//CDI, 401, CDII - 402, IX-9, CDXVI-416
    let romanNumberString = '';

    for (let index = 0; index < romanNumerals.length; index++) {
      while (inputNumber >= romanNumerals[index].value) {
        romanNumberString += romanNumerals[index].symbol;
        inputNumber -= romanNumerals[index].value;
      }
      
    }
    
    console.log('Total: ', romanNumberString);
  }
}
