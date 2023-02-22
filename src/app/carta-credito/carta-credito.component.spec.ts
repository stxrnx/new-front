import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCreditoComponent } from './carta-credito.component';

describe('CartaCreditoComponent', () => {
  let component: CartaCreditoComponent;
  let fixture: ComponentFixture<CartaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
