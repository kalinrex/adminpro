import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styleUrls: ["./incrementador.component.css"]
})
export class IncrementadorComponent implements OnInit {
  @ViewChild("txtprogress") txtprogress: ElementRef;
  @Input("nombre") leyenda = "Leyenda";
  @Input() porcentaje = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onChanges(newValue: number) {
    // const elemHTML: any = document.getElementsByName("porcentaje")[0];
    // console.log(elemHTML.value);
    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    // elemHTML.value = this.porcentaje;
    this.txtprogress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
    this.txtprogress.nativeElement.focus();
  }
  cambiarValor(valor) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
  }
}
