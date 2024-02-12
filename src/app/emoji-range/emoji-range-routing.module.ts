import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmojiRangePage } from './emoji-range.page';

const routes: Routes = [
  {
    path: '',
    component: EmojiRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmojiRangePageRoutingModule {}
