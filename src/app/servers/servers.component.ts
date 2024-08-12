import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "Test";
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2', 'Testserver 3'];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  // onUpdateServerName(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
