import { Component, Input, OnInit } from '@angular/core';
import { IElementNode } from '../finder.component';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss'],
})
export class FileViewComponent implements OnInit {
  @Input() public data: IElementNode[];

  constructor() {}

  ngOnInit() {}
}
