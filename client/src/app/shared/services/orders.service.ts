import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IOrder} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class OrdersService {
  constructor(private  http: HttpClient) {}

  fetch(params: any = {}): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('/api/order', {
      params: new HttpParams({
        fromObject: params
      })
    })
  }

  create(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>('/api/order', order)
  }
}
