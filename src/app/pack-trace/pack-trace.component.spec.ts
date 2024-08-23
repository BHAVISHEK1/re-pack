import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackTraceComponent } from './pack-trace.component';

describe('PackTraceComponent', () => {
  let component: PackTraceComponent;
  let fixture: ComponentFixture<PackTraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackTraceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
