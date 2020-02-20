import {ADD_PRODUCT, ADD_PRODUCT_COUNT} from "./mutaition.type";

export default {
  // 添加商品到购物车
  addProduceInCart({state, commit}, product) {
    let iid = product.iid;
    let index = 0;

    return new Promise(resolve => {
      // 判断购物车是否有相同商品
      let has = state.shoppingCartList.some((item, indey) => {
        if (item.iid === iid) {
          index = indey;
          return true;
        }
        return false;
      });

      if (!has) {
        commit(ADD_PRODUCT, product);
        resolve('添加商品成功');
      } else {
        commit(ADD_PRODUCT_COUNT, index);
        resolve('商品数量加 1');
      }
    })
  },
}
