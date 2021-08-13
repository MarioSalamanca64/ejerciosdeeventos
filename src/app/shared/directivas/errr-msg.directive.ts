import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges{

  private _color:  string = 'red';
  private _mensaje:string = 'Este campo es requerido';
;
  htmlElement:ElementRef<HTMLElement>;
  //si no se pone nada estara por defecto en rojo
  //usando onchenges @Input()  color: string = 'red';
  //setcolor es cada que cambia el color en este caso
  @Input() set color( valor:string ){
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    //OPTIMISADO  
    this.setColor()
  }

  //PRIMERA PARTE ONCHANGES
  //@Input() mensaje: string = 'Debe de ingresar este campo';
  //SET que esta avierto a cual quier cambio
  @Input() set mensaje(valor: string){
    // this.htmlElement.nativeElement.innerHTML =  valor;
    //para que caiga el valor de mensaje
    this._mensaje = valor;
    //OPTIMISADO
    this.setMensaje();
  }

  @Input() set valido(valor: boolean){
      if(valor){
       this.htmlElement.nativeElement.classList.add('hidden');
      }else{
        this.htmlElement.nativeElement.classList.remove('hidden')
      }
      console.log(valor);
  }
  //elementeRef hace referencia alos elementos de html donde esta la directiva
  constructor( private el: ElementRef<HTMLElement> ) {
    // console.log('constructor directive');
    // console.log(el);
    //hace referencia al mismo objeto 
    this.htmlElement = el;
   }
  ngOnChanges(changes: SimpleChanges): void {
    //PRIMERAFORMA
    // if(changes.mensaje){
    //       const mensaje = changes.mensaje?.currentValue;
    //       this.htmlElement.nativeElement.innerHTML =  this.mensaje;
    //       // console.log(mensaje); 
    //     }
    // if(changes.color){
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = this.color;
    // }
    //     console.log(changes);
  }

   ngOnInit(){
     this.setEstilo();
     this.setColor(); //en este punto undefined
     //sellama a qui la funcion 
     this.setMensaje(); //en este punto undefined
   }
   //es establese el cambio al dom desde aqui 

   setEstilo():void{
    this.htmlElement.nativeElement.classList.add('form-text');
   }

    setColor(): void {
      this.htmlElement.nativeElement.style.color = this._color;
      //vanilla js agrenado la parte del boostrap aqui 
      //this.htmlElement.nativeElement.classList.add('form-text');
    }
    setMensaje(): void {
      //_ por que es el elemento por defecto de la parametro pribado
       this.htmlElement.nativeElement.innerHTML =  this._mensaje;
    }  


  

}
