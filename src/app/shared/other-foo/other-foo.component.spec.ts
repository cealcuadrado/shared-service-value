import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFooComponent } from './other-foo.component';

describe('OtherFooComponent', () => {
  let component: OtherFooComponent;
  let fixture: ComponentFixture<OtherFooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherFooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
