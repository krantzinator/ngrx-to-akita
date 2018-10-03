import { Injectable } from '@angular/core';
import { CoreStore } from './core.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CoreService {

  constructor(private coreStore: CoreStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
      // this.{coreStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity) => {
      // this.{coreStore.add(entity);
    // });
  }

}
