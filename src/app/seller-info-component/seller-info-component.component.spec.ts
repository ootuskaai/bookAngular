import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerInfoComponentComponent } from './seller-info-component.component';

describe('SellerInfoComponentComponent', () => {
  let component: SellerInfoComponentComponent;
  let fixture: ComponentFixture<SellerInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
