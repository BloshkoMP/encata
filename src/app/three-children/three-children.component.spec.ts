import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeChildrenComponent } from './three-children.component';

describe('ThreeChildrenComponent', () => {
  let component: ThreeChildrenComponent;
  let fixture: ComponentFixture<ThreeChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
