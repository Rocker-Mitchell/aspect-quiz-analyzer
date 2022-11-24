import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderNavComponent} from './header-nav.component';

@Component({selector: 'app-quiz-stub', template: ''})
class QuizStubComponent {}

@Component({selector: 'app-explain-stub', template: ''})
class ExplainStubComponent {}

@Component({selector: 'app-home-stub', template: ''})
class HomeStubComponent {}

describe('HeaderNavComponent', () => {
  let fixture: ComponentFixture<HeaderNavComponent>;
  let component: HeaderNavComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'quiz',
            component: QuizStubComponent,
            data: {
              navLinkLabel: 'Take the Quiz',
              navLinkOrder: 1,
            },
          },
          {
            path: 'explain',
            component: ExplainStubComponent,
            data: {
              navLinkLabel: 'How it Works',
              navLinkOrder: 2,
            },
          },
          {
            path: '',
            component: HomeStubComponent,
          },
        ]),
      ],
      declarations: [HeaderNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render nav element', () => {
    expect(element.querySelector('nav')).toBeTruthy();
  });

  it('should render links in unordered list in nav', () => {
    const unorderedListElement = element.querySelector('nav ul');
    expect(unorderedListElement)
      .withContext('failed query for unordered list')
      .toBeTruthy();
    const listItemNodeList = unorderedListElement?.querySelectorAll('li');
    const listItemElements = listItemNodeList
      ? Array.from(listItemNodeList)
      : [];
    expect(listItemElements.length)
      .withContext('no list items to test')
      .toBeGreaterThan(0);
    for (let index = 0; index < listItemElements.length; index++) {
      expect(listItemElements[index].querySelector('a'))
        .withContext('failed query for link in list item')
        .toBeTruthy();
    }
  });

  it('should render link to take the quiz', () => {
    const linkElement = element.querySelector('nav ul li a[href="/quiz"]');
    expect(linkElement).withContext('failed query for link').toBeTruthy();
    expect(linkElement?.textContent?.trim())
      .withContext('text content of link not correct')
      .toBe('Take the Quiz');
  });

  it('should render link to read about how the analysis works', () => {
    const linkElement = element.querySelector('nav ul li a[href="/explain"]');
    expect(linkElement).withContext('failed query for link').toBeTruthy();
    expect(linkElement?.textContent?.trim())
      .withContext('text content of link not correct')
      .toBe('How it Works');
  });
});
