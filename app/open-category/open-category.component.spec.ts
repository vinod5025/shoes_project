import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCategoryComponent } from './open-category.component';

describe('OpenCategoryComponent', () => {
  let component: OpenCategoryComponent;
  let fixture: ComponentFixture<OpenCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
