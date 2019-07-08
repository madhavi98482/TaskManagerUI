import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	styles: [`
	`],
	templateUrl:'./viewTask.component.html',
    providers: [TaskService]
})

export class ViewTaskComponent implements OnInit {
    tasks:Array<any>=[];
     id: number;
 
     constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location ){ }
 
	ngOnInit() {
        this.getTasks();
    }

    deleteTask(index) {
        this.taskService.removeTask(index)
            .then(res => {
                console.log(res);
               // if (res.success == true) {
                    this.getTasks();
                //}
            }, err => {
                console.log('server err');
                console.log(err);
            })
            .catch(err => {
                console.log('client err');
                console.log(err);
            })
    }

    getTasks() {
        this.taskService.getTasks()
            .then(res => {
                console.log(res);
                    this.tasks = res;
            }, err => {
                console.log('server err');
                console.log(err);
            })
            .catch(err => {
                console.log('client err');
                console.log(err);
            })

    }

    
    goBack(){
        this.location.back();
    }

   

}