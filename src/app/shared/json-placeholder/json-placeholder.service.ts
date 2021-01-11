import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { PlaceholderImage } from "./json-placeholder.model"

@Injectable()
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .pipe(
        catchError(this.handleErrors)
      )
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error));
    return throwError(error);
  }
}
