import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  userName=' ';

  constructor() {



  }

  ngOnInit(): void {
  }
  onCreateServer()
  {
    this.serverCreationStatus = 'Server was created.!';
  }
  onUpdateServerName()
  {
    this.userName = " ";

  }

}
