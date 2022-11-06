import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderComponent} from './header.component';

@Component({selector: 'app-header-nav', template: ''})
class HeaderNavStubComponent {}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent, HeaderNavStubComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header element', () => {
    expect(element.querySelector('header')).toBeTruthy();
  });

  it('should render heading with link to home page', () => {
    const headingElement = element.querySelector('h1');
    expect(headingElement).withContext('query for heading').toBeTruthy();
    const anchorElement = headingElement?.querySelector('a');
    expect(anchorElement).withContext('query for link').toBeTruthy();
    expect(anchorElement?.getAttribute('href')).toBe('/');
  });

  it('should render header nav component', () => {
    expect(
      debugElement.query(By.directive(HeaderNavStubComponent))
    ).toBeTruthy();
  });
});
