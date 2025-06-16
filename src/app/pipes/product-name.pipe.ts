import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(products: any[], name?:string) {
    if(!name)
        return products;
    name = name.toLowerCase();
    return products.filter((product)=>(product.title as string).toLowerCase().includes(name))
  }

}
