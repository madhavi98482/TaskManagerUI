import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
//import { HttpClient, HttpParams } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  };
 
@Injectable()
export class TaskService {
    tasks: string[] = [];
    private server: string = `http://localhost:8081`;
    constructor(private http: Http) {};
    
    getTasks(): Promise<any> {
        return this.http.get(`${this.server}/tasks`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
    getTask(index: number): Promise<any> {
        return this.http.get(`${this.server}/task/${index}`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
    createTask(requestObj): Promise<any> {
        return this.http.post(`${this.server}/task`, requestObj)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
    removeTask(index: number): Promise<any> {
        return this.http.delete(`${this.server}/task/${index}`)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
    updateTask(requestObj): Promise<any> {
        console.log("requestObj*****"+requestObj);
         return this.http.put(`${this.server}/update`, requestObj)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
    

}
