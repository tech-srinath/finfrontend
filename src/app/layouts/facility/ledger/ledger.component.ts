import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransSidebarComponent, LedgerData } from '../../transactions/trans-sidebar/trans-sidebar.component';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent {

  constructor(
    public _ledgerRef: MatDialogRef<TransSidebarComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: LedgerData
  ) { }

  onNoClick(): void {
    this._ledgerRef.close();
  }

}
