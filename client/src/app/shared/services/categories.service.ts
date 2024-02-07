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

  getById(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(environment.API_LINK + `api/category/${id}`)
  }

  create(name: string, image?: File): Observable<ICategory> {
    const formData = new FormData()

    if(image) {
      formData.append('image', image, image.name)
    }
    formData.append('name', name)

    return this.http.post<ICategory>(environment.API_LINK + 'api/category', formData)
  }

  update(id: string, name: string, image?: File): Observable<ICategory> {
    const formData = new FormData()

    if(image) {
      formData.append('image', image, image.name)
    }
    formData.append('name', name)

    return this.http.patch<ICategory>(environment.API_LINK + `api/category/${id}`, formData)
  }
}
