import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageValidatorComponent } from './message-validator.component';

describe('MessageValidatorComponent', () => {
  let component: MessageValidatorComponent;
  let fixture: ComponentFixture<MessageValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
