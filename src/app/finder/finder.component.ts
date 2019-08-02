import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

export interface IElementNode {
  name: string;
  files: IElementNode[];
  isFile: boolean;
}

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
})
export class FinderComponent implements OnInit {
  public data: IElementNode[] = data.files;
  public filesToShow: IElementNode[];

  constructor() {}

  public ngOnInit() {
    console.log(data);
  }

  public showFiles(node: IElementNode) {
    this.filesToShow = node.files;
  }
}
