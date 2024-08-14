import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEngineComponent } from './order-engine.component';

describe('OrderEngineComponent', () => {
  let component: OrderEngineComponent;
  let fixture: ComponentFixture<OrderEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
