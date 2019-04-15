import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpListComponent } from './chirp-list.component';

describe('ChirpListComponent', () => {
  let component: ChirpListComponent;
  let fixture: ComponentFixture<ChirpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
