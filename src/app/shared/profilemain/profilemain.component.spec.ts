import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemainComponent } from './profilemain.component';

describe('ProfilemainComponent', () => {
  let component: ProfilemainComponent;
  let fixture: ComponentFixture<ProfilemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilemainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
