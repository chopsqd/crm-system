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
}
