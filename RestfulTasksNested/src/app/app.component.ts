import { Component, OnInit} from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RestfulTasksNested';
  show: boolean = false;
  tasks = [];
  task: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasks();
  }

  showTasks() {
    this.show = true;
  }

  getTasks() {
    let t = this._httpService.getAllTasks();
    t.subscribe(data => {
      console.log("Got 'em all!", data);
      this.tasks = data["tasks"];
    })
  }

  getTask(task) {
    let t = this._httpService.getTask(task);
    t.subscribe(data => {
      console.log("Got it!", data);
      this.task = data["task"];
    })
  }
}
