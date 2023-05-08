import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsSrcButtonComponent } from './vs-angular-components-with-tailwinds-src-button.component';

describe('VsSrcButtonComponent', () => {
  let component: VsSrcButtonComponent;
  let fixture: ComponentFixture<VsSrcButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsSrcButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsSrcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
