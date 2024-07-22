import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private profileSource = new BehaviorSubject<any>(null);
  currentProfile = this.profileSource.asObservable();
  constructor() { }
  changeProfile(profile: any) {
    this.profileSource.next(profile)
  }
}
