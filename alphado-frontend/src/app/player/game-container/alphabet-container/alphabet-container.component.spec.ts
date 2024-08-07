import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetContainerComponent } from './alphabet-container.component';

describe('AlphabetContainerComponent', () => {
  let component: AlphabetContainerComponent;
  let fixture: ComponentFixture<AlphabetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabetContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphabetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
