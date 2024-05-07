import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutimageComponent } from './cutimage.component';

describe('CutimageComponent', () => {
  let component: CutimageComponent;
  let fixture: ComponentFixture<CutimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
