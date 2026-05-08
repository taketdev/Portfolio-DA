import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollIndicator } from './scroll-indicator';

describe('ScrollIndicator', () => {
  let component: ScrollIndicator;
  let fixture: ComponentFixture<ScrollIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollIndicator],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollIndicator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
