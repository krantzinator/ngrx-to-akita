import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CoreStore, CoreState } from './core.store';
import { Core } from './core.model';

@Injectable({
  providedIn: 'root'
})
export class CoreQuery extends QueryEntity<CoreState, Core> {

  constructor(protected store: CoreStore) {
    super(store);
  }

}
