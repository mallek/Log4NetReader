import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    logEntrys: Array<any>;
    logsTables: Array<any>;
    selectedLog: string = 'TestLog';
    _http: Http;

    constructor(private http: Http) {
        this._http = http;
        // http.get('data.json')
        //   .map(response => response.json().screenshots)
        //   .subscribe(res => this.spaceScreens = res);

        //  http.get('http://localhost:20136/api/Log/GetLogsForTable/?tableName='+this.selectedLog+'&environment=local&sort=desc&skip=0&take=100')
        //   .map(response => response.json())
        //   .subscribe(res => this.logEntrys = res);

        //  http.get('http://localhost:20136/api/Log/GetTables')
        //   .map(response => response.json())
        //   .subscribe(res => this.logsTables = res);

        this.logsTables = [
            {
                "Name": "TestLog"
            },
            {
                "Name": "TestLog2"
            }
        ]

        this.logEntrys = [
            {
                "Logger": "assets/images/space1.jpg",
                "Message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Exception": "0"
            },
             {
                "Logger": "assets/images/space2.jpg",
                "Message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Exception": "1122"
            }
        ]


    }

    onChange(newValue) {
        console.log(newValue);
        this.selectedLog = newValue;
        // ... do other stuff here ...

    }
}
