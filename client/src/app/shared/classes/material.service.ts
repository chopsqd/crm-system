import {ElementRef} from "@angular/core";

declare const M

export interface IMaterialInstance {
  open?(): void
  close?(): void
  destroy?(): void
}

export interface IMaterialDatepicker extends IMaterialInstance {
  date?: Date
}

export class MaterialService {
  static toast(message: string) {
    M.toast({html: message})
  }

  static initializeFloatingBtn(ref: ElementRef) {
    M.FloatingActionButton.init(ref.nativeElement)
  }

  static updateTextInputs() {
    M.updateTextFields()
  }

  static initModal(ref: ElementRef): IMaterialInstance {
    return M.Modal.init(ref.nativeElement)
  }

  static initTooltip(ref: ElementRef): IMaterialInstance {
    return M.Tooltip.init(ref.nativeElement)
  }

  static initDatepicker(ref: ElementRef, onClose: Function): IMaterialDatepicker {
    return M.Datepicker.init(ref.nativeElement, {
      format: 'dd.mm.yyyy',
      showClearBtn: true,
      onClose
    })
  }

  static initTapTarget(ref: ElementRef): IMaterialInstance {
    return M.TapTarget.init(ref.nativeElement)
  }
}
