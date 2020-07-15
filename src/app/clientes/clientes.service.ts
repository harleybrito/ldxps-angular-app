import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'http://localhost:8080/ldxps-restful-api/api/cliente/';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<any>(this.url).pipe(take(1));
  }

  loadByCDVEND(CDVEND){
    return this.http.get<any>(this.url + "byVendedor/" + CDVEND).pipe(take(1));
  }

  loadByCDCL(CDCL){
    return this.http.get<any>(this.url + CDCL).pipe(take(1));
  }

  private create(record){
    return this.http.post(this.url, record).pipe(take(1));
  }

  private update(record){
    return this.http.put(this.url + record['CDCL'], record).pipe(take(1));
  }

  save(record, create){
    if(!create){
      return this.update(record);
    }else{
      return this.create(record);
    }
  }

  remove(CDCL){
    return this.http.delete(this.url + CDCL).pipe(take(1));
  }
}
