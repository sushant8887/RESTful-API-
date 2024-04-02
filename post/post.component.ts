import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post!:any;
  postForm:FormGroup;
  constructor(private ps:PostService,private fb:FormBuilder){
    this.postForm=this.fb.group({
    id:['',Validators.required],
    title:['',Validators.required],
    content:['',Validators.required],
    author:['',Validators.required],
    date:['',Validators.required]
    });
  }

  ngOnInit ():void{
    this.ps.getPosts().subscribe((data: any)=>{
      this.post=data
    });}

    Add(){
      this.ps.addPost(this.postForm.value).subscribe((data)=>{
        console.log("Post Added");
      });
    }
    editPost(id:number, PostData:any){
      this.ps.updatePost(id,this.postForm.value).subscribe(()=>{
        console.log("Post Updated");
      })
    }

    deletePost(id:number){
      this.ps.deletePost(id).subscribe(()=>{
        console.log("Post Deleted");
      })
    }
} 
