import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFundosPage } from './lista-fundos.page';

describe('ListaFundosPage', () => {
  let component: ListaFundosPage;
  let fixture: ComponentFixture<ListaFundosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFundosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFundosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
