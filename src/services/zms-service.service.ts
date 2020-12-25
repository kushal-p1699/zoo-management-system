import { Animal } from './../app/Model/animal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZmsServiceService {

  constructor(private http: HttpClient) { }
  
  baseUrl = "http://localhost/ZooManagmentSystem";

  addAnimals(animalData): Observable<Animal[]> {
    return this.http.post<Animal[]>(`${this.baseUrl}/addAnimals.php`, animalData);
  }

  readAnimalData(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.baseUrl}/fetchAnimalData.php`);
  }
}
