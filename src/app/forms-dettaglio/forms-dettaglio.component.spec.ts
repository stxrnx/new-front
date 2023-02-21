import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDettaglioComponent } from './forms-dettaglio.component';

describe('FormsDettaglioComponent', () => {
  let component: FormsDettaglioComponent;
  let fixture: ComponentFixture<FormsDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDettaglioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
