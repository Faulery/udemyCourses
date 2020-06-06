import { RecipeStartComponent } from './recipe-start.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('RecipeStartComponent', () => {
  let component: RecipeStartComponent;
  let fixture: ComponentFixture<RecipeStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeStartComponent],
    });
    fixture = TestBed.createComponent(RecipeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an h3 tag', () => {
    const element = fixture.debugElement.query(By.css('h3'));
    expect(element.nativeElement.textContent).toBe('Please select a recipe!');
  });
});
