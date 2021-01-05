import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {
id=0;
activeblog:{};
  constructor(private Service:BlogService,private route:ActivatedRoute) { }

 async ngOnInit() {
    this.id = this.route.snapshot.params.id;
    await this.Service.editblog(this.id).then(res => {
      this.activeblog = res;
    })
  }

}
