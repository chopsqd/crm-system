import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IMaterialInstance, MaterialService} from "../shared/classes/material.service";
import {OrdersService} from "../shared/services/orders.service";
import {Subscription} from "rxjs";
import {IOrder} from "../shared/interfaces";

const STEP = 2

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('tooltip') tooltipRef: ElementRef
  tooltip: IMaterialInstance
  isFilterVisible = false
  orders: IOrder[] = []
  oSub: Subscription

  offset = 0
  limit = STEP

  loading = false
  reloading = false
  noMoreOrders = false

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.reloading = true
    this.fetch()
  }

  ngOnDestroy() {
    this.tooltip.destroy()
    this.oSub.unsubscribe()
  }

  ngAfterViewInit() {
    this.tooltip = MaterialService.initTooltip(this.tooltipRef)
  }

  private fetch() {
    const params = {
      offset: this.offset,
      limit: this.limit
    }

    this.oSub = this.ordersService.fetch(params).subscribe(
      orders => {
        this.orders = this.orders.concat(orders)
        this.noMoreOrders = orders.length < STEP
        this.loading = false
        this.reloading = false
      }
    )
  }

  loadMore() {
    this.offset += STEP
    this.loading = true
    this.fetch()
  }
}
