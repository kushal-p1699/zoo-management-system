import { Animal } from './../app/Model/animal';
import { Injectable,  Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZmsServiceService {

  constructor(private http: HttpClient) { }
  
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  baseUrl = "http://localhost/ZooManagmentSystem";
  redirectUrl: string;

  addAnimals(animalData): Observable<Animal[]> {
    return this.http.post<Animal[]>(`${this.baseUrl}/addAnimals.php`, animalData);
  }

  readAnimalData(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.baseUrl}/fetchAnimalData.php`);
  }

  updateAnimalData(animals: Animal) {
    return this.http.put(`${this.baseUrl}/updateAnimals.php`, animals);
  }

  deleteAnimalData(id: number) {
    return this.http.delete<Animal>(`${this.baseUrl}/deleteAnimals.php/?id=${id}`);
  }

  onAdminLogin(name, pass): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/adminLogin.php`, { name, pass });
  }

  updateProfile(adminData) {
    return this.http.put(`${this.baseUrl}/adminProfileUpdate.php`, adminData);
  }

  readAdmindata(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/readAdminData.php`);
  }

  sendContactForm(fromData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/contactForm.php`, fromData);
  }

  readMessages(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/readMessages.php`);
  }
}
