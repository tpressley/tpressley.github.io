import { Component, OnInit } from '@angular/core';
import { MerchItem } from 'src/app/models/merch-item';
import { MerchItemService } from 'src/app/services/merch-item.service';

@Component({
  selector: 'app-merch-add',
  templateUrl: './merch-add.component.html',
  styleUrls: ['./merch-add.component.css']
})
export class MerchAddComponent implements OnInit {

  merchItem: MerchItem = <MerchItem>{};
  constructor(private merchService: MerchItemService) { }

  ngOnInit(): void {
  }

  add()
  {
    this.merchItem.id = 2;
    this.merchService.putMerchItem(this.merchItem);
  }
}
