import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';

@NgModule({
  imports: [CommonModule],
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent]
})
export class LibModule { }
