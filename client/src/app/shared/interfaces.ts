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
