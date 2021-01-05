import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addblogs',
  templateUrl: './addblogs.component.html',
  styleUrls: ['./addblogs.component.css']
})
export class AddblogsComponent implements OnInit {
  cat: {};
  imagePath:string;
  fileToUpload: File = null;
  uploadFiles = []
  myForm: FormGroup;
  id = 0;
  updateblog: {}
  constructor(private service: CategoryService, private Service: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id)

    if (this.id) {
      this.Service.editblog(this.id).then(res => {
        this.updateblog=res;
        this.myForm = new FormGroup({
          bid:new FormControl(this.updateblog[0].bid,Validators.required),
          title: new FormControl(this.updateblog[0].title, Validators.required),
          cat_id: new FormControl(this.updateblog[0].cat_id, Validators.required),
          isfeatured: new FormControl(this.updateblog[0].isfeatured, Validators.required),
          isactive: new FormControl(this.updateblog[0].isactive, Validators.required),
          image: new FormControl(this.uploadFiles),
          created_at:new FormControl(new Date()),
          description: new FormControl(this.updateblog[0].description, Validators.required),
        })
          this.imagePath = this.updateblog[0].image;
      })
      }


    this.service.listcategory().then(res => {
      this.cat = res;
    })

    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      cat_id: new FormControl('', Validators.required),
      isfeatured: new FormControl('', Validators.required),
      isactive: new FormControl('', Validators.required),
      image: new FormControl(this.uploadFiles),
      description: new FormControl('', Validators.required),
      created_at:new FormControl(new Date())
    })
  }
  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.fileToUpload = files.item(0);
      this.Service.postFile(files.item(0)).subscribe(i => {
        console.log("imagename" + i["name"]);
        this.uploadFiles.push(i["name"]);
      })
    }
  }
  submit() {
    if(this.id) {
      this.Service.updateblog(this.myForm.value).subscribe(res => {
        console.log('updated');
      })
    }else{
    this.Service.addblog(this.myForm.value).subscribe(res => {
      console.log(res)
    })
  }
}
}
