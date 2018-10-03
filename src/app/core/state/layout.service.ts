import { Injectable } from '@angular/core';
import { LayoutStore } from './layout.store';

@Injectable({ providedIn: 'root' })
export class LayoutService {

  constructor(private layoutStore: LayoutStore,) {
  }

  setSideNavState(status: boolean) {
    this.layoutStore.updateSideNavState(status);
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
      // this.{layoutStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity) => {
      // this.{layoutStore.add(entity);
    // });
  }

}
