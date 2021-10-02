import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {
  id!: number;
  name!: string;
  description!: string;
  previewimage!: string;
  constructor() { }
}
