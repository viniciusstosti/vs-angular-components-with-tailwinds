import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsButtonComponent } from './vs-button.component';

describe('VsButtonComponent', () => {
  let component: VsButtonComponent;
  let fixture: ComponentFixture<VsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
