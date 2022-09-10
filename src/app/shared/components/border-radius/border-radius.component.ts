import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-radius',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.scss']
})
export class BorderRadiusComponent implements OnInit, DoCheck {

  public disableType: string = "%";
  public onType: string = "px";

  public onTypeBx: string = "px"
  public disableTypeBx: string = "%"

  public rangeValue = 0;
  public brValue: string = "0";
  public colorValue: string = "";
  public bgInputValue: string = "";
  public bgColorTemplateDiv: string = "";
  public bdColorTDiv: string = "";
  public activeBdStyle: string = "solid";
  public bdWidth: string = "2";

  public bdStyles: Array<string> = ['solid', 'none', 'dashed'];

  public bxValueOne: string = "0";
  public bxValueTwo: string = "0";
  public bxValueThre: string = "0";

  public templateDivAux: any = null;
  public bodyDivAux: any = null;

  constructor() { }

  ngDoCheck(): void {
    if(this.templateDivAux != null){

      const boxShadowString: string = `${this.bxValueOne + this.onTypeBx}
        ${this.bxValueTwo + this.onTypeBx} ${this.bxValueThre + this.onTypeBx} ${this.colorValue}`;

      this.templateDivAux.style.boxShadow = boxShadowString;
      this.templateDivAux.style.backgroundColor = this.bgColorTemplateDiv;
      this.templateDivAux.style.borderColor = this.bdColorTDiv;
      this.templateDivAux.style.borderStyle = this.activeBdStyle;
      this.templateDivAux.style.borderWidth = this.bdWidth + "px";
    }

    if(this.bodyDivAux != null){
      this.bodyDivAux.style.backgroundColor = this.bgInputValue;
    }

    console.log('doCheck()')
  }

  ngOnInit() {
  }

  getTemplateDiv(div: any){
    this.templateDivAux = div;
    console.log('getTemplateDiv()')
  }

  changeBody(bodyDiv: any){
    bodyDiv.style.backgroundColor = this.bgInputValue;
    this.bodyDivAux = bodyDiv;
  }


  changeBorder(div: any, value: any){
    if(value === this.rangeValue){
      this.brValue = this.rangeValue.toString();
    }
    div.style.borderRadius = value + this.onType;
    this.templateDivAux = div;
  }

  changeType(div: any, input: any){
    if(this.disableType == "%"){
      this.disableType = "px";
      this.onType = "%";
    }else{
      this.disableType = "%";
      this.onType = "px";
    }

    this.changeBorder(div, input.value)
    this.templateDivAux = div;
  }

  changeTypeBx(div: any){
    if(this.onTypeBx == "%"){
      this.onTypeBx = "px"
    this.disableTypeBx = "%"
    }else{
      this.onTypeBx = "%"
      this.disableTypeBx = "px"
    }
    //this.changeBoxShadow(div)
    this.templateDivAux = div;
  }

  // changeBoxShadow(div: any){
  //   const boxShadowString: string = `${this.bxValueOne + this.onTypeBx}
  //    ${this.bxValueTwo + this.onTypeBx} ${this.bxValueThre + this.onTypeBx} ${this.colorValue}`;

  //   div.style.boxShadow = boxShadowString;
  //   this.templateDivAux = div;
  // }

}
