import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaComponent } from './america.component';

describe('AmericaComponent', () => {
  let component: AmericaComponent;
  let fixture: ComponentFixture<AmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
