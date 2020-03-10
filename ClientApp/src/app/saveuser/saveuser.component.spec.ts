import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAVEUSERComponent } from './saveuser.component';

describe('SAVEUSERComponent', () => {
  let component: SAVEUSERComponent;
  let fixture: ComponentFixture<SAVEUSERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAVEUSERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAVEUSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
