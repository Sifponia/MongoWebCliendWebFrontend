import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conector} from "./conector";

@Injectable({
  providedIn: 'root'
})
export class WebclientService {


  private _url: string = "http://localhost:9092/client/all";

  private _des: string = "http://localhost:9092/client/des";

  private _url2: string = "http://localhost:9092/client";


  /*httpHeaders: HttpHeaders = ({ 'Content-Type': 'application/text/html',
  filename: 'file.html' });});
     //{ 'Content-Disposition': 'attachment; filename="file.txt" ', 'Content-Type': 'text/plain' };*/


  httHeaders = new HttpHeaders()


    //.set('Content-Type', 'application/x-www-form-urlencoded') -> {responseType: 'arraybuffer'}
    //.set('Content-Type', 'application/x-www-form-urlencoded')

    .set('Content-Disposition', 'attachment; filename="file.txt" ');


  constructor(private httpClient: HttpClient) {
  }


  public getAllClients(): Observable<Conector []> {
    return this.httpClient.get<Conector []>(this._url);
  }


  downloadLink(id: string): Observable<HttpResponse<Blob>> {
    return this.httpClient.get<Blob>(this._des + "/" + id, {
      observe: 'response',
      responseType: 'blob' as 'json'
    });

  }


  deleteConnector(id: string): Observable<Conector> {
    return this.httpClient.delete<Conector>(this._url2 + "/delete/" + id);
  }


  saveConector(conector: Conector): Observable<Conector> {
    return this.httpClient.post<Conector>(this._url2 + "/save", conector);
  }

}

/* public download(id: string): Observable<ArrayBuffer> {


   // @ts-ignore
   return this.httpClient.get<ArrayBuffer>(this._des + "/" + id, {responseType: 'arraybuffer'
   });

 }*/
