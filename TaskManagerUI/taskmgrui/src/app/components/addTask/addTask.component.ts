import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({

    templateUrl: './addTask.component.html',
    providers: [TaskService],
    styles: [`
	`]
})

export class AddTaskComponent {
    task: any = {

    };
    message: string;
    title: string = "Create Task";
    id: number;

    constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');

    }

    addTask() {
        this.taskService.createTask(this.createPayload())
            .then(res => {
                console.log(res);
                if (res.success == true) {
                    this.goBack();
                }
            }, err => {
                console.log('server err');
                console.log(err);
            })
            .catch(err => {
                console.log('client err');
                console.log(err);
            })
    }



    goBack() {
        this.location.back();
    }
    resetForm(task) {
        this.task.task = null;
        this.task.priority = null;
        this.task.parentTask.parentTask = null;
        this.task.startDate = null;
        this.task.endDate = null;
    }

    createPayload() {

        let createPayLoad = {


            "name": this.task.name,

            "priority": this.task.priority,

            "startdate": this.task.startdate,

            "enddate": this.task.enddate,

            "parentTask": {

                "id": this.task.parentTask.id

            }
        };
        return createPayLoad;
    }



}