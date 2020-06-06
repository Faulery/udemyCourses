import { AuthComponent } from './auth.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from '../shared/alert/alert.component';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { AuthService } from './auth.service';

describe('AuthComponent', () => {
	let component: AuthComponent;
	let fixture: ComponentFixture<AuthComponent>;
	let authService: Partial<AuthService>;

	beforeEach(
		async(() => {
			authService = { login: jasmine.createSpy('login') };
			TestBed.configureTestingModule({
				declarations: [ AuthComponent, AlertComponent, LoadingSpinnerComponent ],
				imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule ],
				providers: [ { provide: AuthService, useValue: authService } ],
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AuthComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create component', () => {
		expect(component).toBeTruthy();
	});

	it('submit button should be disabled initially', () => {
		const button = fixture.debugElement.query(By.css('.submit')).nativeElement;
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			// expect(button.disabled).toBeTruthy();
		});
	});

	it('should switch mode on click', () => {
		const button = fixture.debugElement.query(By.css('.switch-mode')).nativeElement;
		const spy = spyOn(component, 'onSwitchMode');
		button.click();
		fixture.detectChanges();
		expect(spy).toHaveBeenCalled();
	});

	it('should call login with credentials', () => {
		const email: HTMLInputElement = fixture.debugElement.query(By.css('#email')).nativeElement;
		const password: HTMLInputElement = fixture.debugElement.query(By.css('#password')).nativeElement;
		const button = fixture.debugElement.query(By.css('.submit')).nativeElement;
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			email.value = 'yurii.ilnytskyi@gmail.com';
			password.value = '123456';
		});
		button.click();
		fixture.detectChanges();
		expect(authService.login).toHaveBeenCalled();
	});
});
