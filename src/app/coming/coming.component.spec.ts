import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingComponent } from './coming.component';

describe('ComingComponent', () => {
  let component: ComingComponent;
  let fixture: ComponentFixture<ComingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
