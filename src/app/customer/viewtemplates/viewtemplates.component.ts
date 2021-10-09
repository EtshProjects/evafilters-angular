import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewtemplates',
  templateUrl: './viewtemplates.component.html',
  styleUrls: ['./viewtemplates.component.scss']
})
export class ViewtemplatesComponent implements OnInit {

  images: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getimages();
  }

  getimages() {
    this.api.getimages().subscribe(data => {
      this.images = data;
      console.log(this.images);
    })
  }


}
