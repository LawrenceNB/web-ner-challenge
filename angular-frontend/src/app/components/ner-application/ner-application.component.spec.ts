import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerApplicationComponent } from './ner-application.component';

describe('NerApplicationComponent', () => {
  let component: NerApplicationComponent;
  let fixture: ComponentFixture<NerApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NerApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
