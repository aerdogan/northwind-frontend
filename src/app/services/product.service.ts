import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  apiUrl = 'https://localhost:44308/api/products/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "getlistbycategory?categoryId=" + categoryId;
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getById(productId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "getbyid?productId=" + productId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

}
