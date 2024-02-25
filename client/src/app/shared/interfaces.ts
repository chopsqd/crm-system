export interface IUser {
  email: string
  password: string
}

export interface ICategory {
  name: string
  imgSrc?: string
  user?: string
  _id?: string
}

export interface IMessage {
  message: string
}

export interface IPosition {
  name: string
  cost: number
  category: string
  _id?: string
  user?: string
  quantity?: number
}

export interface IOrder {
  list: IOrderPosition[]
  _id?: string
  date?: Date
  order?: number
  user?: string
}

export interface IOrderPosition {
  name: string
  cost: number
  quantity: number
  _id?: string
}

export interface IFilter {
  start?: Date
  end?: Date
  order?: number
}

export interface IOverview {
  gain: IOverviewItem
  orders: IOverviewItem
}

export interface IOverviewItem {
  percent: number
  compare: number
  yesterday: number
  isHigher: number
}
