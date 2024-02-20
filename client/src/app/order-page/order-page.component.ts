import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {IMaterialInstance, MaterialService} from "../shared/classes/material.service";
import {OrderService} from "./order.service";
import {IOrder, IOrderPosition} from "../shared/interfaces";
import {OrdersService} from "../shared/services/orders.service";
import {Subscription} from "rxjs";

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
  pending = false
  oSub: Subscription

  constructor(
    private router: Router,
    protected order: OrderService,
    private ordersService: OrdersService
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
    if(this.oSub) {
      this.oSub.unsubscribe()
    }
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
    this.pending = true

    const order: IOrder = {
      list: this.order.list.map(item => {
        delete item._id
        return item
      })
    }

    this.oSub = this.ordersService.create(order).subscribe(
      newOrder => {
        MaterialService.toast(`Заказ №${newOrder.order} был добавлен!`)
        this.order.clear()
      },
      error => {
        MaterialService.toast(error.error.message)
      },
      () => {
        this.modal.close()
        this.pending = false
      }
    )
  }

  removePosition(item: IOrderPosition) {
    this.order.remove(item)
  }
}
