import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor (private _http: HttpClient) {}

  getAllTasks(){
    return this._http.get("/tasks");
  }

  getTask(task) {
    return this._http.get("/tasks/" + task._id);
  }
}
