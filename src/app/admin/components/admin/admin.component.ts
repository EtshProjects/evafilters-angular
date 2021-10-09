import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TemplatesService } from '../../services/templates.service';


  @Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  myDate = new Date();

  constructor() { 


  }

  ngOnInit(): void {
  }

}
