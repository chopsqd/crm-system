import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IAnalytics, IOverview} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AnalyticsService {
  constructor(private http: HttpClient) {}

  getOverview(): Observable<IOverview> {
    return this.http.get<IOverview>('/api/analytics/overview')
  }

  getAnalytics(): Observable<IAnalytics> {
    return this.http.get<IAnalytics>('/api/analytics/analytics')
  }
}
