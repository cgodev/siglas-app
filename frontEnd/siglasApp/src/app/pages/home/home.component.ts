import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SiglasService } from 'src/app/services/siglas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentData: any;
  history: any;

  constructor(
    private store: Store<any>,
    private siglasService: SiglasService
  ) { }

  ngOnInit(): void {
    this.store.subscribe(({siglas}) => {
      this.currentData = siglas.currentData;
      this.history = siglas.history;
      /* console.log('Resultados consulta actual', this.currentData); */
    })
  }

  async fetchData(value: string){
    await this.siglasService.fetchAcronimes(value);
  }


}
