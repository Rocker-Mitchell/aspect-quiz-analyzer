import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ExplainAnalysisComponent} from './explain-analysis.component';

describe('ExplainAnalysisComponent', () => {
  let fixture: ComponentFixture<ExplainAnalysisComponent>;
  let component: ExplainAnalysisComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplainAnalysisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
