import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
myForm:FormGroup;
  constructor(private service:CategoryService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      cname:new FormControl('',Validators.required)
    })
  }
submit()
{
  this.service.addcategory(this.myForm.value).subscribe(res =>{
    console.log(res)
  })
  
}
}
