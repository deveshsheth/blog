import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-isfeatured',
  templateUrl: './isfeatured.component.html',
  styleUrls: ['./isfeatured.component.css']
})
export class IsfeaturedComponent implements OnInit {
featuredblog:{};
Difference_In_time;
Difference_In_Days;
  constructor(private Service:BlogService,private route:ActivatedRoute) { }

 async ngOnInit() {
   var dat = new Date();

   this.Service.getblogfeatured().then(res => {
     console.log(res);
     this.featuredblog = res;
     console.log("d"+ res[0].created_at);
     for(var i = 0 ; i <= res.length; i++){
      var dt = new Date(res[i].created_at);
      this.Difference_In_time = dat.getTime() - dt.getTime();
      this.Difference_In_Days = Math.round(this.Difference_In_time / (1000 * 3600 * 24));
      if(this.Difference_In_Days > 3) 
      this.Service.blogupdate(res[i].bid).subscribe(res => {
        console.log("aaasd"+ res + "deleted")
      })
      this.ngOnInit();
     }
   })
  await this.Service.getblogfeatured().then(res => {
    this.featuredblog=res;
  })  
}

}
