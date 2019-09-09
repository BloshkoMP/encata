import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenThreeComponent } from './children-three.component';

describe('ChildrenThreeComponent', () => {
  let component: ChildrenThreeComponent;
  let fixture: ComponentFixture<ChildrenThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
