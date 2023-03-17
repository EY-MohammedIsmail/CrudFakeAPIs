import { Component } from '@angular/core';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudFakeAPIs';

  products:any[] = [];
  constructor(private productService: ProductServiceService){}

  ngOnInit(){
    this.productService.getProducts().subscribe(products=>{
      this.products = products;
    });
  }
}
