import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as accionesSiglas from 'src/app/redux/actions';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StoredataService {

  apiSiglasUrl = 'http://127.0.0.1:3050'

  constructor(
    private store: Store<any>,
  ) { }

  async getAllHistory() {
    let result = [];
    await axios.get(this.apiSiglasUrl + '/history')
      .then(function (response) {
        console.log(response.data)
        if (response.data.length > 0) {
          response.data.forEach(element => {
            result.push(element.criteria);
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
    if (result.length > 0) {
      this.store.dispatch(new accionesSiglas.SetHistory(result));
    }
  }

  async saveHistory(data) {
    let result = [];
    await axios.post(this.apiSiglasUrl + '/history', {
      criteria: data.criteria,
    },{headers: {'content-type': 'application/json'}})
      .then(function (response) {
        console.log(response.data)
        if (response.data.length > 0) {
          response.data.forEach(element => {
            result.push(element.criteria);
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
    if (result.length > 0) {
      this.store.dispatch(new accionesSiglas.SetHistory(result));
    }
  }
}
