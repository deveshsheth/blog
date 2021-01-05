import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {
 list:{};
  constructor(private service:CategoryService,private rut:Router,private confirmationService: ConfirmationService,private messageService:MessageService) { }

 async ngOnInit() {
  await this.service.listcategory().then(res =>{
    this.list=res;
  })  
}
delete(value)
  {
  this.confirmationService.confirm({
    message: 'Are you sure want to Delete?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.messageService.add({severity:'info', summary: 'Confirm Message', detail:'You have Successfully Deleted'});
      this.service.deletecategory(value).subscribe(res => {
            console.log("res deleted....");
        })
         this.rut.navigate(['./admin/categories/listcategory']);
         
    },
    reject: () => {

      [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        
    }
 });
  
 }
}
