import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosInicioComponent } from './proyectos-inicio.component';

describe('ProyectosInicioComponent', () => {
  let component: ProyectosInicioComponent;
  let fixture: ComponentFixture<ProyectosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
