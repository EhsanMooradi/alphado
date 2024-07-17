import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosterComponent } from './hoster.component';

describe('HosterComponent', () => {
  let component: HosterComponent;
  let fixture: ComponentFixture<HosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
