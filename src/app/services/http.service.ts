import { Injectable } from '@angular/core';
import { Http, HttpOptions } from '@capacitor-community/http';
import { Method } from 'ionicons/dist/types/stencil-public-runtime';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() {   }

  doGet(url){
    const options : HttpOptions = {
      url
    };

    //Http.request({url, method:'GET'})

    return from(Http.get(options));
  }

  doPost(url):Observable<any>{
    const options : HttpOptions = {url, method:'POST'};
    
    return from(Http.post(options));
  }

}
