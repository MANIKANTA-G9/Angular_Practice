import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { debounceTime, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products?:any;
  filterValue?:string = ""
   @ViewChild("findProductByName") findProductByNameInput?: ElementRef;
  
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:(res:any)=>this.products=res["products"],
      error:(err:any)=>window.alert(err.messsage),
      complete:()=>console.info("Data fetched successfully")
    })
    }

    ngAfterViewInit(): void {
    fromEvent(this.findProductByNameInput?.nativeElement, "input")
      .pipe(
        map((event: any) => {
          return (event.target as HTMLInputElement).value;
        }),
        debounceTime(1000)
      )
      .subscribe((res: any) => {
        this.filterValue = res;
      })
  }




}
