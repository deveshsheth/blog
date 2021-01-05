import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
count={}
activecount={}
featuredcount={}
  constructor(private Service:BlogService) { }

  ngOnInit() {
    this.Service.countblog().then(res=>{
      this.count=res[0].blogcount;
      console.log("blogs"+res[0].blogcount)
    });

    this.Service.countactiveblog().then(res=>{
      this.activecount=res[0].activeblogcount;
      console.log("activeblogs"+res[0].activeblogcount)
    });

    this.Service.countfeaturedblog().then(res=>{
      this.featuredcount=res[0].featuredblogcount;
      console.log("featuredblogs"+res[0].featuredblogcount)
    });
  }

}
