import { Component, OnInit } from '@angular/core';
import { MerchItem } from '../models/merch-item';

@Component({
  selector: 'app-merch-item',
  templateUrl: './merch-item.component.html',
  styleUrls: ['./merch-item.component.css']
})
export class MerchItemComponent implements OnInit {

  merchItem?: MerchItem;

  constructor() { }

  ngOnInit(): void {
  }
  //TODO: get single merch item data from merch item service
}
