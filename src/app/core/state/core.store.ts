import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Core } from './core.model';

export interface CoreState extends EntityState<Core> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'core' })
export class CoreStore extends EntityStore<CoreState, Core> {

  constructor() {
    super();
  }

}

