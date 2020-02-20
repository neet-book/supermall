export default {
  // 购物车length
  getCartListLength(state) {
    return state.shoppingCartList.length;
  },
  // 购物车
  getCartList(state) {
    return state.shoppingCartList;
  },
  // 总价
  totalPrice(state) {
    let checkedProduct = state.shoppingCartList.filter(item => {
      return item.checked;
    });

    if (checkedProduct.length === 0) return 0;

    return checkedProduct.reduce((pre, item) => {
      return item.price * item.count + pre;
    }, 0).toFixed(2);
  },
  // checked商品数
  cartCheckedLength(state) {
    return state.shoppingCartList.filter(item => {
      return item.checked;
    }).length;
  },
  // 所有商品是否checked
  isAllChecked(state) {
    return !state.shoppingCartList.find(item => !item.checked);
  }
}
