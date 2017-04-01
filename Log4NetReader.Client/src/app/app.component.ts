import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Log4Net Reader version ' + environment.version;
  currentEnv: string = environment.apiUrl;
  logViewers: Array<any> = ['Main'];

  addViewer() {
    console.log('adding Viewer');
    this.logViewers.push('Next');
  }

    removeViewer() {
    console.log('Removing Viewer');
    this.logViewers.pop();
  }

}
