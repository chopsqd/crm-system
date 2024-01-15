import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ICategory} from "../interfaces";
import {Observable} from "rxjs";

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  fetch(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(environment.API_LINK + 'api/category')
  }
}
