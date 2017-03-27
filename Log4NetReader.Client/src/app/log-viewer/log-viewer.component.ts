import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.css']
})
export class LogViewerComponent implements OnInit {

logsTables: Array<any>;
  selectedLog: string = 'SeedTable_do_not_delete_Log';
  _http: Http;

  constructor(private http: Http) {
    this._http = http;

     http.get('http://localhost:14798/api/table')
      .map(response => response.json())
      .subscribe(res => this.logsTables = res);

  }

  ngOnInit() {
  }

}
