import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraDatosComponent } from './muestra-datos.component';

describe('MuestraDatosComponent', () => {
  let component: MuestraDatosComponent;
  let fixture: ComponentFixture<MuestraDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
