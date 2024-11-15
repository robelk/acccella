import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiltComponent } from './mobilt.component';

describe('MobiltComponent', () => {
  let component: MobiltComponent;
  let fixture: ComponentFixture<MobiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobiltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
