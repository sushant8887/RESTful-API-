import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url="http://localhost:4000";
  constructor(private http:HttpClient) { }
  getPosts():Observable<any>{
    return this.http.get(`${this.url}/posts/showAll`);
  }

  addPost(post:any):Observable<any>{
    return  this.http.post(`${this.url}/posts/add`, post);
  }

  deletePost(id:any):Observable<any> {
    return this.http.delete(`${this.url}/posts/delete/${id}`);
  }
  
  updatePost(id:any,post:any) :Observable<any> {
    return this.http.put(`${this.url}/posts/update/${id}`,post);
  }
}