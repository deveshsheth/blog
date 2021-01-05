import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listblogs',
  templateUrl: './listblogs.component.html',
  styleUrls: ['./listblogs.component.css']
})
export class ListblogsComponent implements OnInit {
list:{}
  constructor(private Service:BlogService,private rut:Router,private confirmationService: ConfirmationService,private messageService:MessageService) { }

 async ngOnInit() {
  await this.Service.listblog().then(res => {
    this.list = res;
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
      this.Service.deleteblog(value).subscribe(res => {
            console.log("res deleted....");
        })
         this.rut.navigate(['./admin/blog/listblogs']);
         
    },
    reject: () => {

      [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        
    }
 });
  
 }
}
