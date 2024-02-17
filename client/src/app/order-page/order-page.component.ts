import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {IMaterialInstance, MaterialService} from "../shared/classes/material.service";
import {OrderService} from "./order.service";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
  providers: [OrderService]
})
export class OrderPageComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('modal') modalRef: ElementRef
  modal: IMaterialInstance;
  isRoot: boolean

  constructor(
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.isRoot = this.router.url === '/order'
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isRoot = this.router.url === '/order'
      }
    })
  }

  ngOnDestroy() {
    this.modal.destroy()
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }

  openModal() {
    this.modal.open()
  }

  closeModal() {
    this.modal.close()
  }

  submitModal() {
    this.modal.close()
  }
}
