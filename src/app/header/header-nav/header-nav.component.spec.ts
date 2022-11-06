import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderNavComponent} from './header-nav.component';

describe('HeaderNavComponent', () => {
  let fixture: ComponentFixture<HeaderNavComponent>;
  let component: HeaderNavComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
      .withContext('query for unordered list')
      .toBeTruthy();
    const listItemNodeList = unorderedListElement?.querySelectorAll('li');
    const listItemElements = listItemNodeList
      ? Array.from(listItemNodeList)
      : [];
    for (let index = 0; index < listItemElements.length; index++) {
      expect(listItemElements[index].querySelector('a'))
        .withContext('query for link in list item')
        .toBeTruthy();
    }
  });

  it('should render link to take the quiz', () => {
    expect(element.querySelector('nav ul li a[href="/quiz"]')).toBeTruthy();
  });

  it('should render link to read about how the analysis works', () => {
    expect(element.querySelector('nav ul li a[href="/explain"]')).toBeTruthy();
  });
});
