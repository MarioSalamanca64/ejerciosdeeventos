import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {
  @Input() set customIf(condicion: boolean){
      // condicion para mostrar elemento o no 
      if(condicion){
        //mostrar
        this.viewContainer.createEmbeddedView(this.templeRef);
      }else{
        //ocultar
        this.viewContainer.clear();
      }
  }

  constructor(
    private templeRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef) 
    { 
    //mostrar si funciona
    //console.log('customIf');
    
  }
 
}
