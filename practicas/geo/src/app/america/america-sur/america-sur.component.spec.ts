import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaSurComponent } from './america-sur.component';

describe('AmericaSurComponent', () => {
  let component: AmericaSurComponent;
  let fixture: ComponentFixture<AmericaSurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaSurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
