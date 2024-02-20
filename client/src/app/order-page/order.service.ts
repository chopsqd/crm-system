import {Injectable} from "@angular/core";
import {IOrderPosition, IPosition} from "../shared/interfaces";

@Injectable()
export class OrderService {
  list: Array<IOrderPosition> = []
  price = 0

  add(position: IPosition) {
    const {name, cost, quantity, _id} = position
    const orderPosition: IOrderPosition = Object.assign({}, {
      name, cost, quantity, _id
    })

    const candidate = this.list.find(pos => pos._id === orderPosition._id)
    if (candidate) {
      candidate.quantity += orderPosition.quantity
    } else {
      this.list.push(orderPosition)
    }

    this.computePrice()
  }

  remove(position: IOrderPosition) {
    const idx = this.list.findIndex(p => p._id === position._id)
    this.list.splice(idx, 1)

    this.computePrice()
  }

  clear() {
    this.list = []
    this.price = 0
  }

  private computePrice() {
    this.price = this.list.reduce((total: number, item: IOrderPosition) => {
      return total += item.quantity * item.cost
    }, 0)
  }
}
