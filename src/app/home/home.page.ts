import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  readonly urlApiFeaturedCategories = 'http://store.steampowered.com/api/featuredcategories';
  //readonly urlApiFeaturedCategories = 'http://localhost:8080/featuredcategories.json'; //NAO FUNCIONOU
  //readonly urlApiFeaturedCategories = 'http://localhost:8100/assets/featuredcategories.json';
  data = null;
  myImage = null;

  constructor(private http: HttpClient, private httpService: HttpService) {   }

  //ESTUDANDO PROBLEMAS NO USO DO HTTP CLIENT CLÁSSICO
  //CORS PROBLEM
  standardCall (){
  this.http.get(this.urlApiFeaturedCategories).subscribe((res: any) => {
    console.log(res.specials);
  });
}

  nativeCall(){
    this.httpService.doGet(this.urlApiFeaturedCategories).subscribe((res:any) => {
        console.log(res);
        this.data = res.data.specials;
    });
  }

  downloadFile(){

  }

}
