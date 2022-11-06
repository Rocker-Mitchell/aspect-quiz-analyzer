import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TakeQuizComponent} from './take-quiz.component';

describe('TakeQuizComponent', () => {
  let fixture: ComponentFixture<TakeQuizComponent>;
  let component: TakeQuizComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakeQuizComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
