import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedLinksComponent } from './related-links.component';

describe('RelatedLinksComponent', () => {
  let component: RelatedLinksComponent;
  let fixture: ComponentFixture<RelatedLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedLinksComponent]
    });
    fixture = TestBed.createComponent(RelatedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
