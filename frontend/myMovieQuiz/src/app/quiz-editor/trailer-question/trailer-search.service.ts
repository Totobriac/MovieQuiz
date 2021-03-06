import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrailerSearchService {

  constructor(private httpClient: HttpClient) { }

  getTrailer(title, year){    
    return this.httpClient.get('http://127.0.0.1:8000/api/search_trailer/' + title + year)    
  }
}
