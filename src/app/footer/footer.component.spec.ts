import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FooterComponent} from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer element', () => {
    expect(element.querySelector('footer')).toBeTruthy();
  });

  it('should render link to Extended Zodiac', () => {
    const anchorElement = element.querySelector('a');
    expect(anchorElement).withContext('query for link').toBeTruthy();
    expect(anchorElement?.getAttribute('target'))
      .withContext('target attribute')
      .toBe('_blank');
    expect(anchorElement?.getAttribute('href'))
      .withContext('href attribute')
      .toBe('http://hs.hiveswap.com/ezodiac/index.php');
  });
});
