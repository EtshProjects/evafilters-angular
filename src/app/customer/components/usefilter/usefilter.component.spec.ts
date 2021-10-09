import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefilterComponent } from './usefilter.component';

describe('UsefilterComponent', () => {
  let component: UsefilterComponent;
  let fixture: ComponentFixture<UsefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
