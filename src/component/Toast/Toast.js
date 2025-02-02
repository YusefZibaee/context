import React, { useContext } from "react";
import productsContext from "../../Contexts/productsContext";

export default function Toast() {
  const contextData = useContext(productsContext);
  // const { isShowToast, setisShowToast } = useContext(productsContext);
  
  return (
    contextData.isShowToast && (
      <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
        <div className="toast align-items-center d-flex text-white bg-primary">
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn-close btn-close-white ms-3"
              onClick={() => contextData.setisShowToast(false)}
            ></button>
            <div className="toast-body">محصول با موفقیت به سبد اضافه شد</div>
          </div>
        </div>
      </div>
    )
  );
}
