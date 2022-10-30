import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiResponse, People } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = environment.swApiUrl;

  getPeople(
    search?: string,
    url = `${this.baseUrl}people`
  ): Observable<ApiResponse<People>> {
    if (search) {
      url += `?search=${search}`;
    }
    return this.getCall<ApiResponse<People>>(url);
  }

  private getCall<T>(url: string) {
    return this.http
      .get<T>(url)
      .pipe(
        catchError(({ message }) => throwError(message))
      );
  }
}
