import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Observable services
import { TransactionsService } from '../transactions.service';
import { LedgerComponent } from '../../facility/ledger/ledger.component';

export interface LedgerData {
  _CID: string;
}

@Component({
  selector: 'app-trans-sidebar',
  templateUrl: './trans-sidebar.component.html',
  styleUrls: ['./trans-sidebar.component.scss']
})
export class TransSidebarComponent {
  CID: string = 'John Doe';
  public userName: string;
  myControl = new FormControl();
  custControl = new FormControl();
  options: string[] = ['112', '123', '321', '333'];
  cOptions: string[] = ['John', 'Arun', 'Gopi'];
  filteredOptions: Observable<string[]>;
  cfilteredOptions: Observable<string[]>;

  viewOptions: any = ["More", "Less"];
  toggleViewText: string = "More";
  viewDetails: boolean = false;
  
  constructor(private _transaction: TransactionsService, public _dialog: MatDialog) { }

  openLedger() {
    const ledgerRef = this._dialog.open(LedgerComponent, {
      width: '250px',
      data: { _CID: this.CID }
    })

    ledgerRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      this.CID = result;
    })
  }

  search() {
    this._transaction.getCustomer(this.CID);
  }

  viewTogglr() {
    this.toggleViewText = this.viewOptions.find(vOptions => vOptions !== this.toggleViewText);
    this.viewDetails = !this.viewDetails;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.cfilteredOptions = this.custControl.valueChanges.pipe(
      startWith(''),
      map(value => this._cfilter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _cfilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
