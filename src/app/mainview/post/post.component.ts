import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  commentToggle:boolean=false;
  selectedRow:number;

  constructor(private UsersService:UsersService, private PostsService:PostsService) { }

  ngOnInit() {
  }

  toggleComments(index) {
    if(this.selectedRow === index){
      this.selectedRow = null;
    } else {
      this.selectedRow = index;
    }
  }
}
