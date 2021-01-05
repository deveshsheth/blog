import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-editblogs',
  templateUrl: './editblogs.component.html',
  styleUrls: ['./editblogs.component.css']
})
export class EditblogsComponent implements OnInit {
  myForm:FormGroup;
  blog ={};
  blogid = 0;
  cat:{}
  constructor(private Service:BlogService,private route:ActivatedRoute,private rut:Router,private service:CategoryService) { }

 async ngOnInit() {
  this.service.listcategory().then(res => {
    this.cat = res;
  })
    this. blogid= this.route.snapshot.params.id;
    console.log("blogid "+ this.blogid);
    await this.Service.editblog(this.blogid).then(res => {
      this.blog =res;
    })
    
    this.myForm = new FormGroup({
      bid:new FormControl(this.blog[0].bid,Validators.required),
      title:new FormControl(this.blog[0].title,Validators.required),
      cat_id:new FormControl(this.blog[0].cat_id,Validators.required),
      isfeatured:new FormControl(this.blog[0].isfeatured,Validators.required),
      isactive:new FormControl(this.blog[0].isactive,Validators.required),
      description:new FormControl(this.blog[0].description,Validators.required),
    })
  }
  submit()
  {
    
         this.Service.updateblog(this.myForm.value).subscribe(res => {
        console.log(res);
       })
       this.rut.navigate(['./admin/blogs/listblogs']);
 }
}
