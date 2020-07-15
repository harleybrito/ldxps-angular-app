import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  private url = 'http://localhost:8080/ldxps-restful-api/api/vendedor/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<any>(this.url).pipe(take(1));
  }

  loadByCDVEND(CDVEND){
    return this.http.get<any>(this.url + CDVEND).pipe(take(1));
  }

  private create(record){
    return this.http.post(this.url, record).pipe(take(1));
  }

  private update(record){
    return this.http.put(this.url + record['CDVEND'], record).pipe(take(1));
  }

  save(record, create){
    if(!create){
      return this.update(record);
    }else{
      return this.create(record);
    }
  }

  remove(CDVEND){
    console.log(this.url + CDVEND);
    return this.http.delete(this.url + CDVEND).pipe(take(1));
  }
}
