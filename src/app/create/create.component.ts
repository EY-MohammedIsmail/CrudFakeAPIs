import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  name = "";
  price = 0;


  constructor(private productService: ProductServiceService) { }

    onSubmit() {
      const product = { name: this.name, price: this.price };
      this.productService.addProduct(product).subscribe(() => {
        alert('Product added successfully!');
      });
    }

    nametest(){
      console.log("Hello");
    }
    

  }


