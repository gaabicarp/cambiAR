import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { apiResponse } from './../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private API_URL = environment.API_URL;
  private KEY = '1aaace8ebc24b2d877e8751cbf3d4f49';
  constructor(private http: HttpClient ) { }

  getDivisas(): Observable<apiResponse>{
    return this.http.get<apiResponse>(
      'http://data.fixer.io/api/latest?access_key=1aaace8ebc24b2d877e8751cbf3d4f49&format=1'
    ).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    return throwError(error);
  }
}

