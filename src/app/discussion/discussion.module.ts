import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionWrapperComponent } from './discussion-wrapper/discussion-wrapper.component';



@NgModule({
  declarations: [DiscussionWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [DiscussionWrapperComponent]
})
export class DiscussionModule { }
