import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStructureComponent } from './common-structure.component';

describe('CommonStructureComponent', () => {
  let component: CommonStructureComponent;
  let fixture: ComponentFixture<CommonStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
