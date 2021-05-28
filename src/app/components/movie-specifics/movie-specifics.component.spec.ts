import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSpecificsComponent } from './movie-specifics.component';

describe('MovieSpecificsComponent', () => {
  let component: MovieSpecificsComponent;
  let fixture: ComponentFixture<MovieSpecificsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSpecificsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSpecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
