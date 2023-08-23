import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';


@Component({
    selector: 'app-schema-panel',
    templateUrl: './schema-panel.component.html',
    styleUrls: ['./schema-panel.component.scss'],

})
export class SchemaPanelComponent implements OnInit {
    menuItems$: Observable<string[]> = this.dataservice.fetchSchemaClasses();
    @Input() dataSource: string[] = new Array<string>;
    // menuItems: string[] = this.setMenuItems();

    constructor(private dataservice: DataService) { }

    private _transformer = (node: string, level: number) => {
        return {
            expandable: !!node && node.length > 0,
            name: node,
            level: level,
        };
    }

    treeControl = new FlatTreeControl<string>(
        node => 1,
        node => true,
    );



    // setMenuItems(): string[] {
    //     let tempArray: string[] = [];
    //     this.dataservice.fetchSchemaClasses()
    //         .pipe()
    //         .subscribe(schemaClasses => {
    //             this.menuItems = schemaClasses.sort((a, b) => a.localeCompare(b));
    //         })
    //     return tempArray;
    // }

    ngOnInit() {
        console.log(this.menuItems$)

    }
}

function Import(): (target: SchemaPanelComponent, propertyKey: "dataSource") => void {
    throw new Error('Function not implemented.');
}


