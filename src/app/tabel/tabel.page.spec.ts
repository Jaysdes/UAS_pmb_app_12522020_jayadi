import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelPage } from './tabel.page';

describe('TabelPage', () => {
  let component: TabelPage;
  let fixture: ComponentFixture<TabelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
