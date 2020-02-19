import {ADD_PRODUCT, ADD_PRODUCT_COUNT} from "./mutaition.type";

export default {
  [ADD_PRODUCT](state, product) {
    state.shoppingCartList.push(product);
  },
  [ADD_PRODUCT_COUNT](state, index) {
    state.shoppingCartList[index].count++;
  }
}
