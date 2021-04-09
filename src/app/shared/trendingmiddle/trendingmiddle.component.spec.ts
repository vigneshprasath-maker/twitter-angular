import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingmiddleComponent } from './trendingmiddle.component';

describe('TrendingmiddleComponent', () => {
  let component: TrendingmiddleComponent;
  let fixture: ComponentFixture<TrendingmiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingmiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingmiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
