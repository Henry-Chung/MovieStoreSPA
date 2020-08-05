import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPipeComponent } from './overview-pipe.component';

describe('OverviewPipeComponent', () => {
  let component: OverviewPipeComponent;
  let fixture: ComponentFixture<OverviewPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
