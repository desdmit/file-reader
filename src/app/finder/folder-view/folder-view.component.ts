import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { IElementNode } from '../finder.component';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss'],
})
export class FolderViewComponent implements OnInit {
  @Input() public data;

  public treeControl = new NestedTreeControl<IElementNode>(node => node.files);
  public dataSource = new MatTreeNestedDataSource<IElementNode>();

  constructor() {}

  public hasChild = (_: number, node: IElementNode) =>
    !!node.files && node.files.length > 0;

  public ngOnInit() {
    this.dataSource.data = this.data;
  }
}
