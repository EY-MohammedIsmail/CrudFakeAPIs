import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id:string): Observable<any[]>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addProduct(product : any):Observable<any>{
    
    return this.http.post<any>(this.apiUrl, product);
  }

  editProduct(product:any):Observable<any>{
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<any>(url, product);
  }



  

}
