import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Output
} from "@angular/core";

declare var $:any;
@Directive({
  selector: "[CpfCnpj]"
})
export class CpfCnpjDirective {
  @Output() onPressEnter: EventEmitter<any> = new EventEmitter();

  input: any;

  arrayNumber: any[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  arrayFunction: any[] = [, "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.input = $($(this.el.nativeElement).find("input")[0]);
  }

  @HostListener("keyup", ["$event"])
  onKeyUp(event: KeyboardEvent) {
    if (event.key == "Enter") this.onPressEnter.emit();
    else if (this.arrayFunction.indexOf(event.key) < 0)
      this.input.val(this.convertToCpfCnpj(this.input.val()));
  }

  convertToCpfCnpj(num) {
    console.log(this.input.value)
    if (num) {
      num = num.toString();
      num = num.replace(/\D/g, "");

      switch (num.length) {
        case 4:
          num = num.replace(/(\d+)(\d{3})/, " $1.$2");
          break;
        case 5:
          num = num.replace(/(\d+)(\d{3})/, " $1.$2");
          break;
        case 6:
          num = num.replace(/(\d+)(\d{3})/, " $1.$2");
          break;
        case 7:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
          break;
        case 8:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
          break;
        case 9:
          num = num.replace(/(\d+)(\d{3})(\d{3})/, " $1.$2.$3");
          break;
        case 10:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{1})/, " $1.$2.$3-$4");
          break;
        case 11:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, " $1.$2.$3-$4");
          break;
        case 12:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{4})/, " $1.$2.$3/$4");
          break;
        case 13:
          num = num.replace(
            /(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/,
            " $1.$2.$3/$4-$5"
          );
          break;
        case 14:
          num = num.replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/,
            " $1.$2.$3/$4-$5"
          );
          break;
      }
    }
    return num;
  }
}
