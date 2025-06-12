import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  @Input() task?: any;
  @Output() saveTask = new EventEmitter();

  condition = false;
  taskForm!: FormGroup;

  onEdit(){
    this.condition = true;
    this.onForm();
  }


  onForm(){
    this.taskForm = new FormGroup({
    title: new FormControl(this.task.title, Validators.required),
    // description: new FormControl("", Validators.required),
    dueDate: new FormControl(this.task.dueDate, Validators.required )
  })
  }
  onTaskEditSubmit(){
    const taskMeta = {
      id: this.task.id,
      title: this.taskForm.value?.title ? this.taskForm.value.title : "",
      dueDate: this.taskForm.value?.dueDate ? new Date(this.taskForm.value.dueDate) : new Date(),
      description :"From FOrm Data",
      status: "Incomplete",
      priority: "High"
    };

    this.saveTask.emit(taskMeta);
    this.condition = false;
    // this.tasks.
  }
}
