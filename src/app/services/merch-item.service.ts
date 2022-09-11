import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MerchItem  } from '../models/merch-item';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MerchItemService {
  private dbUrl = "https://noble-syndicate-default-rtdb.firebaseio.com/MerchItems.json";
  constructor(
    private http: HttpClient)
    {

    }

    getMerchItems(): Observable<MerchItem[]> {
      var result = this.http.get<MerchItem[]>(this.dbUrl);
      return result;
    }


    putMerchItem(merchItem: MerchItem): void {
      var result = this.http.put<MerchItem>(this.dbUrl,merchItem);
    }
}
