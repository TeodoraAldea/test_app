import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListImagesPage } from './list-images.page';

describe('ListImagesPage', () => {
  let component: ListImagesPage;
  let fixture: ComponentFixture<ListImagesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
