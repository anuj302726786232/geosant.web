import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionidetailsComponent } from './solutionidetails.component';

describe('SolutionidetailsComponent', () => {
  let component: SolutionidetailsComponent;
  let fixture: ComponentFixture<SolutionidetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionidetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
