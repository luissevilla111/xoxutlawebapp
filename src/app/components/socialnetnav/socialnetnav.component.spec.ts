import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialnetnavComponent } from './socialnetnav.component';

describe('SocialnetnavComponent', () => {
  let component: SocialnetnavComponent;
  let fixture: ComponentFixture<SocialnetnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialnetnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialnetnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
