import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBottoniComponent } from './lista-bottoni.component';

describe('ListaBottoniComponent', () => {
  let component: ListaBottoniComponent;
  let fixture: ComponentFixture<ListaBottoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBottoniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBottoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
