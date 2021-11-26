import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SiglasService } from 'src/app/services/siglas.service';
import * as accionesSiglas from 'src/app/redux/actions';
import { StoredataService } from 'src/app/services/storedata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  formSiglas: FormGroup;
  history: string[];

  constructor(
    private siglasService: SiglasService,
    private store: Store<any>,
    private storeDataService: StoredataService
    ) { }

  ngOnInit(): void {
    this.initFormSiglas();
    this.history = new Array();
    this.store.subscribe( ({siglas}) => {
      this.history = siglas.history;
    }) 
  }

  initFormSiglas(){
    this.formSiglas = new FormGroup({
      'criteria': new FormControl('', Validators.required),
    })
  }

  async searchAcronime(){
    let criteria = this.formSiglas.controls['criteria'].value.trim();
    this.store.dispatch( new accionesSiglas.SetHistory( this.history ) );
    let data = {
      criteria: criteria
    }
    await this.siglasService.fetchAcronimes(criteria);
    await this.storeDataService.saveHistory(data);
    /* console.log(response) */
    


  }

}
