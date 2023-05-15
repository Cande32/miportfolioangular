import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesInicioComponent } from './habilidades-inicio.component';

describe('HabilidadesInicioComponent', () => {
  let component: HabilidadesInicioComponent;
  let fixture: ComponentFixture<HabilidadesInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
