import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundfComponent } from './backgroundf.component';

describe('BackgroundfComponent', () => {
  let component: BackgroundfComponent;
  let fixture: ComponentFixture<BackgroundfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
