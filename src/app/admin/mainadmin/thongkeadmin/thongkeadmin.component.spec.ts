import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongkeadminComponent } from './thongkeadmin.component';

describe('ThongkeadminComponent', () => {
  let component: ThongkeadminComponent;
  let fixture: ComponentFixture<ThongkeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongkeadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongkeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
