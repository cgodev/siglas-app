import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import axios from 'axios';

import * as accionesSiglas from 'src/app/redux/actions';

@Injectable({
  providedIn: 'root'
})
export class SiglasService {





  acromineApiUrl = 'http://www.nactem.ac.uk/software/acromine/dictionary.py'

  constructor(
    private store: Store<any>
  ) { }

  async fetchAcronimes(value: string) {
    let result = []
    await axios.get(this.acromineApiUrl, {
      params: {
        sf: value
      }
    })
      .then(function (response) {
        console.table(response)
        if (response.data.length > 0) {
          result = response.data[0].lfs
        }
      })
      .catch(function (error) {
        console.log(error);
        return result;
      })
      .then(function () {
        return result;
      });

    this.store.dispatch(new accionesSiglas.SetCurrentData(result));
  }
}
