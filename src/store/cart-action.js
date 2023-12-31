import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data !",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-curt-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Fetch Successfully ",
          message: "Fetch cart data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error !!!",
          message: "Fetching cart data Failed !",
        })
      );
    }
  };
};

export const sendCardData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data !",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-curt-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Send Successfully ",
          message: "Send cart data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error !!!",
          message: "Sending cart data Failed !",
        })
      );
    }
  };
};
