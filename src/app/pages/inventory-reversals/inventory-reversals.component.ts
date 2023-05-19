import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuComponent} from "../../components/tab-menu/tab-menu.component";
import { ReversalTableComponent } from "../../components/reversal-table/reversal-table.component";
import { FullComponent } from "../../layout/full/full.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";

@Component({
    selector: 'app-inventory-reversals',
    standalone: true,
    templateUrl: './inventory-reversals.component.html',
    styleUrls: ['./inventory-reversals.component.scss'],
  imports: [CommonModule, TabMenuComponent, ReversalTableComponent, FullComponent, ButtonModule, RippleModule, CardModule, InputTextModule]
})
export class InventoryReversalsComponent {

}
