import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

class StoreMock {}

describe('RecipeListComponent', () => {
	let component: RecipeListComponent;
	let fixture: ComponentFixture<RecipeListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ RecipeListComponent, RecipeItemComponent, RecipeEditComponent ],
				imports: [
					RouterTestingModule.withRoutes([ { path: 'new', component: RecipeEditComponent } ]),
					ReactiveFormsModule,
				],
				providers: [ { provide: Store, useClass: StoreMock } ],
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(RecipeListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create component', () => {
		expect(component).toBeTruthy();
	});

	it(
		'should navigate to /new on click "New Recipe" button',
		async(() => {
			const button = fixture.debugElement.query(By.css('.btn')).nativeElement;
			const location = TestBed.get(Location);
			button.click();
			fixture.detectChanges();
			fixture.whenStable().then(() => {
				expect(location.path()).toBe('/new');
			});
		})
	);

	it('should show no list item initially', () => {
		const recipesList = fixture.debugElement.queryAll(By.css('a'));
		expect(recipesList.length).toBe(0);
	});

	it('should show recipes if recipes are available', () => {
		component.recipes = [
			{
				name: 'Burger',
				imagePath:
					'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
				description: 'Desc',
				ingredients: [],
			},
		];
		fixture.detectChanges();
		const recipesList = fixture.debugElement.queryAll(By.css('a'));
		expect(recipesList.length).toBe(1);
	});
});
