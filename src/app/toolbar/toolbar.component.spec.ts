import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {By} from '@angular/platform-browser';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [MatToolbarModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toolbar', () => {
    const compiled = fixture.debugElement;
    const name = compiled.query(By.css('[test-id="toolbar-title"]'));
    expect(name.nativeElement.textContent).toEqual('Cientiva');
  });

  it('toolbar should have inicio', () => {
    const compiled = fixture.debugElement;
    const name = compiled.query(By.css('[test-id="toolbar-begin"]'));
    expect(name.nativeElement.textContent).toEqual('Início');
  });
});
