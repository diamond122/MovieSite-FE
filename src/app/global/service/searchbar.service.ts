import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {
  public searchText: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
