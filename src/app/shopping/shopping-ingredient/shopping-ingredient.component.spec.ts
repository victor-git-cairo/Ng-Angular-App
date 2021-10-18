import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingIngredientComponent } from './shopping-ingredient.component';

describe('ShoppingIngredientComponent', () => {
  let component: ShoppingIngredientComponent;
  let fixture: ComponentFixture<ShoppingIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
