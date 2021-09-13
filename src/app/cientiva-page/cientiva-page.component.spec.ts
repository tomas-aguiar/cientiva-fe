import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientivaPageComponent } from './cientiva-page.component';

describe('CientivaPageComponent', () => {
  let component: CientivaPageComponent;
  let fixture: ComponentFixture<CientivaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientivaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientivaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
