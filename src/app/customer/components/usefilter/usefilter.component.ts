import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-usefilter',
  templateUrl: './usefilter.component.html',
  styleUrls: ['./usefilter.component.scss']
})
export class UsefilterComponent implements OnInit {
  [x: string]: any;

  constructor(private http: HttpClient, private api: ApiService) { }

  ngOnInit(): void {
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
      this.postId = data.id;
    })
  }
}
