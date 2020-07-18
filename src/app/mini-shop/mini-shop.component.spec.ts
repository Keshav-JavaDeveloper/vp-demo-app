import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniShopComponent } from './mini-shop.component';

describe('MiniShopComponent', () => {
  let component: MiniShopComponent;
  let fixture: ComponentFixture<MiniShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
