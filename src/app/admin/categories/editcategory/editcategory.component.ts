import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  myForm:FormGroup;
  category ={};
  categoryid = 0;
  constructor(private service:CategoryService,private route:ActivatedRoute,private rut:Router,private messageService:MessageService) { }

 async ngOnInit() {
   this.categoryid = this.route.snapshot.params.id;
   console.log("categoryid "+ this.categoryid);
   await this.service.editcategory(this.categoryid).then(res => {
     this.category =res;
   })
    this.myForm = new FormGroup({
      cid:new FormControl(this.category[0].cid,Validators.required),
      cname:new FormControl(this.category[0].cname,Validators.required)
    })
  }
submit()
{
  if(this.myForm.valid) {
    this.messageService.add({severity:'success', summary:'Success', detail:'Your Details Submited'});
  this.service.updatecategory(this.myForm.value).subscribe(res => {
    console.log(res);
  })
     this.rut.navigate(['./admin/categories/listcategory']);
}
else
{
    this.messageService.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
}
}
}