import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.css']
})
export class LogViewerComponent implements OnInit {

  logsTables: Array<any>;
  logEnvironments: Array<any>;
  logEntrys: Array<any>;
  logLevels: Array<any> = [{ name: 'Debug' }, { name: 'Info' }, { name: 'Warn' }, { name: 'Error' }, { name: 'Fatal' }];

  selectedLog: string = 'DataFeeds_Log';
  selectedEnvironment: string = 'Release';
  selectedSort: string = 'desc';
  selectedLevel: string = 'Info';
  showExceptions: boolean = false;
  totalRecords: number = 0;
  skip: number = 1;
  take: number = 10;
  _http: Http;

  constructor(private http: Http) {
    this._http = http;

    http.get(environment.apiUrl + '/api/table')
      .map(response => response.json())
      .subscribe(res => this.logsTables = res);

    this.loadEnvironments();

    this.loadLogData();
  }

  public setPage(pageNo: number): void {
    this.skip = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.skip = event.page;
    this.loadLogData();
  }

  onChangeLog(newValue) {
    console.log(newValue);
    this.selectedLog = newValue;
    // ... do other stuff here ...
    this.loadLogData();
    this.loadEnvironments();
  }

  onChangeEnvironment(newValue) {
    this.selectedEnvironment = newValue;
    this.loadLogData();
  }

  onChangeLevel(newValue) {
    this.selectedLevel = newValue;
    this.loadLogData();
  }

  loadLogData() {
    console.log('Loading Log data' + this.getUrl())
    this.loadLogCount();

    this._http.get(this.getUrl())
      .map(response => response.json())
      .subscribe(res => this.logEntrys = res);
  }

  loadLogCount() {
    this._http.get(this.getCount())
      .map(response => response.json())
      .subscribe(res => this.totalRecords = res);
  }

  getUrl() {
    return environment.apiUrl + '/api/Log/?tableName=' + this.selectedLog + '&level=' + this.selectedLevel + '&environment=' + this.selectedEnvironment + '&sort=' + this.selectedSort + '&skip=' + (this.skip -1) + '&take=' + this.take
  }

  getCount() {
    return environment.apiUrl + '/api/Log/Count/?tableName=' + this.selectedLog + '&level=' + this.selectedLevel + '&environment=' + this.selectedEnvironment
  }

  loadEnvironments() {
    this._http.get(environment.apiUrl + '/api/table/getenvironments/' + this.selectedLog)
      .map(response => response.json())
      .subscribe(res => this.logEnvironments = res);
  }

  // loadLogLevels() {
  //   this._http.get(environment.apiUrl + '/api/table/getlevels/' + this.selectedLog)
  //     .map(response => response.json())
  //     .subscribe(res => this.logLevels = res);
  // }

  ngOnInit() {
  }

}
