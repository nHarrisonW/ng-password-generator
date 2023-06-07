import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocompComponent } from './herocomp.component';

describe('HerocompComponent', () => {
  let component: HerocompComponent;
  let fixture: ComponentFixture<HerocompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerocompComponent]
    });
    fixture = TestBed.createComponent(HerocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
