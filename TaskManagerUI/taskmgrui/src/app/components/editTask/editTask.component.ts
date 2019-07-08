import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({

    templateUrl: './editTask.component.html',
    providers: [TaskService],
    styles: [`
	`]
})

export class EditTaskComponent {
    task: any = {

    };
    message: string;
    title: string = "Update Task";
    id: number;

    constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        console.log(id);
        if (+id >= 0) {

            this.id = +id;
            this.getTask(this.id);
        }
    }

    editTask() {
        this.taskService.updateTask(this.formatPayload())
            .then(res => {
                console.log(res);
                alert("Updated successfully");
                    this.goBack();
            }, err => {
                console.log('server err');
                console.log(err);
            })
            .catch(err => {
                console.log('client err');
                console.log(err);
            })

    }



    getTask(index) {
        this.taskService.getTask(index)
            .then(res => {
                console.log(res);
                this.task = res;
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

    formatPayload() {

        let formatPayload = {

            "task_id": this.id,

            "name": this.task.name,

            "priority": this.task.priority,

            "startdate": this.task.startdate,

            "enddate": this.task.enddate,

            "parentTask": {

                " id ": this.task.parentTask.id,
                "parentTaskName": this.task.parentTask.parentTaskName,

            }
        };
        return formatPayload;
    }

}