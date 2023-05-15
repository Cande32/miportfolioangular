import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaInicioComponent } from './experiencia-inicio.component';

describe('ExperienciaInicioComponent', () => {
  let component: ExperienciaInicioComponent;
  let fixture: ComponentFixture<ExperienciaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
