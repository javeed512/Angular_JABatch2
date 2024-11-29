import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private e1:ElementRef , private renderer:Renderer2) { 



  }

  @HostListener("mouseover")
    onMouseOver(){


        this.renderer.setStyle(this.e1.nativeElement ,'backgroundColor','red');

        

        console.log(this.e1);
        console.log('mouseover() is called')

    }

   @HostListener('click')
      onClickEvent(){

            console.log('clickEvent() called..')

       let inputChild =   this.renderer.createElement('input' , null);

          this.renderer.setAttribute(inputChild,'type','text');
          this.renderer.setAttribute(inputChild , 'value' , "Hexaware");


          this.renderer.appendChild(this.e1.nativeElement.parentElement, inputChild);


      }


}
