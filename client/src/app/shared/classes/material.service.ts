declare const M

export class MaterialService {
  static toast(message: string) {
    M.toast({html: message})
  }
}
