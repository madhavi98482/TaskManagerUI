import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/addTask/addTask.component';
import { ViewTaskComponent } from './components/viewTask/viewTask.component';
import {EditTaskComponent} from './components/editTask/editTask.component'

const routes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'addTask', component: AddTaskComponent },
    { path: 'tasks', component: ViewTaskComponent },
    { path: 'task/:id', component: EditTaskComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule
  ],
  exports: [ RouterModule ],
  declarations: [AddTaskComponent, ViewTaskComponent,EditTaskComponent]
})
export class AppRoutingModule { }