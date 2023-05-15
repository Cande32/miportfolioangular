import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiInicioComponent } from './sobre-mi-inicio.component';

describe('SobreMiInicioComponent', () => {
  let component: SobreMiInicioComponent;
  let fixture: ComponentFixture<SobreMiInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMiInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMiInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
