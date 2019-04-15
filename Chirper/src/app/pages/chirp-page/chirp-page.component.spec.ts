import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpPageComponent } from './chirp-page.component';

describe('ChirpPageComponent', () => {
  let component: ChirpPageComponent;
  let fixture: ComponentFixture<ChirpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
