import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionInicioComponent } from './educacion-inicio.component';

describe('EducacionInicioComponent', () => {
  let component: EducacionInicioComponent;
  let fixture: ComponentFixture<EducacionInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
