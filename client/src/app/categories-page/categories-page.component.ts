import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../shared/services/categories.service";
import {ICategory} from "../shared/interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  categories$: Observable<ICategory[]>

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories$ = this.categoriesService.fetch()
  }

}
