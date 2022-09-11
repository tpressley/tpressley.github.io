import { Component, OnInit } from '@angular/core';
import { MerchItemService } from '../services/merch-item.service';
import { MerchItem } from '../models/merch-item';
import { MerchItemComponent } from '../merch-item/merch-item.component';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  merchItems: MerchItem[] = [];
  constructor(private merchService: MerchItemService) { }

  ngOnInit(): void {
    this.merchService.getMerchItems().subscribe(merchItems => this.merchItems = merchItems);
  }
}
