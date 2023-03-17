import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product:any;


  constructor(private route:ActivatedRoute, private productService:ProductServiceService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
    


  }

  onSubmit(){
    this.productService.editProduct(this.product).subscribe(()=>{
      alert("Product updated successfully");

    });

  }

}
