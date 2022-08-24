import { Component, OnInit } from '@angular/core';
import { MerchItemService } from '../merch-item.service';
import { MerchItem } from '../models/merch-item';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  merchItems: MerchItem[] = [];
  constructor(private merchService: MerchItemService) { }

  ngOnInit(): void {
  }
  //TODO: Get merch item data from merch item service
}
