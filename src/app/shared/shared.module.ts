import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrMsgDirective } from './directivas/errr-msg.directive';
import { CustomIfDirective } from './directivas/custom-if.directive';



@NgModule({
  declarations: [
    ErrMsgDirective,
    CustomIfDirective,
    
    
    
  ],
 exports: [
   ErrMsgDirective,
   CustomIfDirective
 ]
})
export class SharedModule { }
