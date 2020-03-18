import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyHeaderComponent } from './easy-header.component';

describe('EasyHeaderComponent', () => {
  let component: EasyHeaderComponent;
  let fixture: ComponentFixture<EasyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
