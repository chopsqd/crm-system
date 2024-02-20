import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IOrder} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class OrdersService {
  constructor(private  http: HttpClient) {}

  create(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>('/api/order', order)
  }
}
