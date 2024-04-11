import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  
  BASE_URL = 'https://24091826.it.scu.edu.au';
  // 10.0.2.2:3060
  // BASE_URL = 'http://10.0.2.2:3060';


  constructor() { }

  
  getRegisterUserUrl(): string {
    return `${this.BASE_URL}/api1/regist`;
  }
}
