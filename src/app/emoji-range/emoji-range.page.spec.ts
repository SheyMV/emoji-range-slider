import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmojiRangePage } from './emoji-range.page';

describe('EmojiRangePage', () => {
  let component: EmojiRangePage;
  let fixture: ComponentFixture<EmojiRangePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmojiRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
