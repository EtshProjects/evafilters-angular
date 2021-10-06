import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetempComponent } from './createtemp.component';

describe('CreatetempComponent', () => {
  let component: CreatetempComponent;
  let fixture: ComponentFixture<CreatetempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
