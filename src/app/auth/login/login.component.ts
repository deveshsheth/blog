import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:FormGroup;
loginerror:{};

  constructor(private service:AuthService,private router: Router,private messageService: MessageService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
           username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }
submit()
{
  
    
  this.service.getadmin(this.myForm.value).subscribe(res => {
    console.log(res);
    if(res['data']!='')
    {
      sessionStorage.setItem('islogin','true');
      const redirect = this.service.redirectUrl ? this.service.redirectUrl:'/admin';
      this.router.navigate([redirect]);
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Welcome to Admin'});
    }
    else{
      this.messageService.add({severity:'error', summary: 'Error Message', detail:'Enter Correct Data'});
      this.loginerror = 'Username or password is incorrect.';
      this.router.navigate(['/login']);
    }
  })


}
}
