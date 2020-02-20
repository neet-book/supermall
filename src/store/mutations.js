import {
  ADD_PRODUCT,
  ADD_PRODUCT_COUNT,
  CHANGE_CHECKED,
  CHANGE_ALL_CHECKED,
} from "./mutaition.type";

export default {
  [ADD_PRODUCT](state, product) {
    state.shoppingCartList.push(product);
  },
  [ADD_PRODUCT_COUNT](state, index) {
    state.shoppingCartList[index].count++;
  },
  [CHANGE_CHECKED](state, iid) {
    state.shoppingCartList.map((item) => {
      if(item.iid === iid) item.checked = !item.checked;
    });
  },
  [CHANGE_ALL_CHECKED](state, checked) {
    state.shoppingCartList.map( item => {
      item.checked = checked;
    })
  }
}
