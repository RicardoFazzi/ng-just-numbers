import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNumbersInputComponent } from './only-numbers-input.component';

describe('OnlyNumbersInputComponent', () => {
  let component: OnlyNumbersInputComponent;
  let fixture: ComponentFixture<OnlyNumbersInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyNumbersInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyNumbersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
