import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeePurchaseComponent } from './coffee-purchase.component';

describe('CoffeePurchaseComponent', () => {
  let component: CoffeePurchaseComponent;
  let fixture: ComponentFixture<CoffeePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
