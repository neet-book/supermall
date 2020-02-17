import { request } from './request';

export function getDetail (iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export class Goods {
  constructor(columns, itemInfo, shopInfo) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shop {
  constructor(shop) {
    this.name = shop.name;
    this.logo = shop.shopLogo;
    this.fans = shop.cFans;
    this.sells = shop.cSells;
    this.score = shop.score;
    this.goodsCounts = shop.cGoods;
  }
}
