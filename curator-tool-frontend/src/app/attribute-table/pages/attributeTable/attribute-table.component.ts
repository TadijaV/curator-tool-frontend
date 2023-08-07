import { Component, OnInit, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DataService } from 'src/app/core/services/data.service';
import { AttributeData } from 'src/app/core/models/fetch-dataset.model';
import { AttributeDataState } from '../../state/attribute-table.reducers';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAttributeData } from '../../state/attribute-table.selectors';
import { AttributeTableActions } from '../../state/attribute-table.actions';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-attribute-table',
  templateUrl: './attribute-table.component.html',
  styleUrls: ['./attribute-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, NgIf, NgFor, RouterModule],
})
export class AttributeTableComponent implements OnInit {
  displayedColumns: string[] = ['attributeName', 'cardinality', 'valueType', 'attributeOrigin'];
  dataSource$: Observable<AttributeData[]> = this.store.select(selectAttributeData());
  constructor(
    private store: Store) { }
  @Input() className: string = "";

  ngOnInit(): void {
    this.store.dispatch({ type: AttributeTableActions.GET_ATTRIBUTE_DATA, className: "Polymer" });
  }
}
