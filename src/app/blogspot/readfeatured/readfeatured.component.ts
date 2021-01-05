import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readfeatured',
  templateUrl: './readfeatured.component.html',
  styleUrls: ['./readfeatured.component.css']
})
export class ReadfeaturedComponent implements OnInit {
  id=0;
  featuredblog:{};
  constructor(private Service:BlogService,private route:ActivatedRoute) { }

async ngOnInit() {
  this.id = this.route.snapshot.params.id;
  await this.Service.editblog(this.id).then(res => {
    this.featuredblog = res;
  })
  }

}
