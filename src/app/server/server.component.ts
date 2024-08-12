import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent { 
  serverID = 10;
  serverStatus = "Offline";

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  getServerStatus(){
    return this.serverStatus;
  }

 getColor(){
  return this.serverStatus === 'Online' ? 'darkseagreen' : 'red';
 }
}
