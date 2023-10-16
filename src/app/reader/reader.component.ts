import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { information } from '../interfaces/interfaces.information';
import { CallerService } from '../service/service.caller';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})

export class ReaderComponent {
  personInfo:information;

  arrayPerson:information[];
  idArray: number;

  lenght:number;

  constructor(
    private router: Router,
    private CallerService: CallerService
    ) { 
      this.arrayPerson=this.CallerService.mockedCall();
      this.idArray=0;
      this.personInfo=this.arrayPerson[this.idArray];
      this.lenght=this.arrayPerson.length;
    }

  returnInsert():void{
    this.router.navigate(['']);
  }
  
  isSelected(data: information):boolean{
    return data===this.personInfo;
  }

  checkAll(): boolean{
     if(!this.personInfo.culture.college &&
      !this.personInfo.culture.highSchool &&
      !this.personInfo.work.salary &&
      !this.personInfo.work.rank){
        return false;
      }else return true;
  }

  selectID(id:number): void{
    this.idArray=id;
    this.personInfo=this.arrayPerson[id];
  }
}
