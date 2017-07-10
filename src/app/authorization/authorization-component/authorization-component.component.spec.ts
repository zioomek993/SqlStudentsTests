import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthorizationComponentComponent} from './authorization-component.component';

describe('AuthorizationComponentComponent', () => {
    let component: AuthorizationComponentComponent;
    let fixture: ComponentFixture<AuthorizationComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorizationComponentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizationComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
