import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class PrdouctService {
  products: Product[] = [];

  constructor() {
    const products = localStorage.getItem('ngproducts');
    if (products) this.products = JSON.parse(products);
  }

  private getItem(id: string) {
    return this.products.find((Product) => Product.id === id);
  }
  private getIndex(id: string) {
    return this.products.findIndex((Product) => Product.id === id);
  }

  private updateLocalStorage() {
    localStorage.setItem('ngproducts', JSON.stringify(this.products));
  }

  private ProductCreatedSource = new BehaviorSubject<boolean>(false);
  ProductCreated$ = this.ProductCreatedSource.asObservable();
  confirmProductCreated(confirmed: boolean) {
    this.ProductCreatedSource.next(confirmed);
  }

  private ProductDeletedSource = new BehaviorSubject<boolean>(false);
  ProductDeleted$ = this.ProductDeletedSource.asObservable();
  confirmProductDeleted(confirmed: boolean) {
    this.ProductDeletedSource.next(confirmed);
  }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: string): Observable<Product | null> {
    const item = this.getItem(id);
    if (item) return of(item);
    else return of(null);
  }

  createProduct(product: Product): Observable<Product> {
    const newProduct = {
      ...product,
      id: nanoid(4),
    };
    this.products.push(newProduct);
    this.updateLocalStorage();
    return of(newProduct);
  }

  updateProduct(Product: Product): Observable<string> {
    const index = this.getIndex(Product.id);
    this.products.splice(index, 1, Product);
    this.updateLocalStorage();
    return of('Product updated');
  }

  deleteProduct(id: string): Observable<string> {
    const index = this.getIndex(id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.updateLocalStorage();
    return of(id);
  }
}
