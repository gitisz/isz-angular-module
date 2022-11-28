import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'piral-ng/common';
import { PageComponent } from './page.component';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { MaterialModule } from './material.module';
import { ColorSchemeService } from './services/color-scheme.service';

@NgModule({
  bootstrap: [],
  declarations: [
    PageComponent,
  ],
  exports: [
    PageComponent,
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    RouterModule.forRoot([])
  ],
  providers: [ColorSchemeService]
})
export class AppModule { }
