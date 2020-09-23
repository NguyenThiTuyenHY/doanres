import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareadminComponent } from './shareadmin.component';

describe('ShareadminComponent', () => {
  let component: ShareadminComponent;
  let fixture: ComponentFixture<ShareadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
