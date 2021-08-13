import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  {Rates} from '../app/rates';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
 name:string="Kranthi Dodla";
 title:string = "MoneyExchanger";
 countries!: string[] ;
 rates:Rates[] | any;
  myControl = new FormControl();
  constructor(private http:HttpClient) {}
  convertedValue :number | undefined;
  yousendValue :number= 0;
  convertedCurrency:string ="";
  getfooterdate: any;

  ngOnInit(){
    this.getfooterdate = new Date().getFullYear();
   
    this.http.get('https://api.exchangerate-api.com/v4/latest/USD').subscribe((data:any) =>{
    this.rates = data.rates;
    this.countries= Object.keys(data.rates);
    
    });
    
  }
    
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(option => option.toLowerCase().includes(filterValue));
  }

    onSelectionChange(event: { option: { value: any; }; })
    {
    this.convertedCurrency = event.option.value
    this.convertedValue = this.yousendValue*(this.rates[event.option.value]);
    }

    onChangeEvent(event: any){
  this.yousendValue = event.target.value
    }

}

