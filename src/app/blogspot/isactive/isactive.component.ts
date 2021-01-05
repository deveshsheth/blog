import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-isactive',
  templateUrl: './isactive.component.html',
  styleUrls: ['./isactive.component.css']
})
export class IsactiveComponent implements OnInit {
  activeblog:{};
  constructor(private Service:BlogService,private route:ActivatedRoute) { }

 async ngOnInit() {

  

    await this.Service.getblogactive().then(res => {
      this.activeblog=res;
    }) 
  }

}
