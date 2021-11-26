import { Component, OnInit } from '@angular/core';
import { StoredataService } from './services/storedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'siglasApp';

  constructor(private storeDataService: StoredataService){

  }

  ngOnInit(){
    this.storeDataService.getAllHistory();
  }
}
