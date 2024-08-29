import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getImages(jsonFileName: string): Observable<string[]> {
    const url = `json/${jsonFileName}.json`;
    return this.http.get<string[]>(url).pipe(map((res) => res));
  }
}
