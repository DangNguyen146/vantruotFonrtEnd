const sateDefault = {
  dangSachVanDangDat: [],
};
const datHangReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "DAT_HANG": {
      let dangSachHangUpDate = [...state.dangSachVanDangDat];
      let index = dangSachHangUpDate.findIndex(
        (van) => van._id === action.van._id
      );
      if (index !== -1) {
        state.dangSachVanDangDat[index].soLuong++;
      } else {
        dangSachHangUpDate.push(action.van);
      }
      //cập nhật lại state
      state.dangSachVanDangDat = dangSachHangUpDate;
      localStorage.setItem("hangDat", JSON.stringify(dangSachHangUpDate));
      return { ...state };
    }
    case "LOAD_LAI": {
      let dangSachHangUpDate = [...state.dangSachVanDangDat];

      dangSachHangUpDate.push(action.van);
      //cập nhật lại state
      state.dangSachVanDangDat = dangSachHangUpDate;
      return { ...state };
    }
    case "GIAM_VAN": {
      let dangSachHangUpDate = [...state.dangSachVanDangDat];
      let index = dangSachHangUpDate.findIndex(
        (van) => van._id === action.van._id
      );
      if (index !== -1) {
        state.dangSachVanDangDat[index].soLuong--;
        if (state.dangSachVanDangDat[index].soLuong == 0)
          dangSachHangUpDate.splice(index, 1);
      }
      //cập nhật lại state
      state.dangSachVanDangDat = dangSachHangUpDate;
      return { ...state };
    }
    case "HUY_HANG": {
      let dangSachHangUpDate = [...state.dangSachVanDangDat];
      let index = dangSachHangUpDate.findIndex(
        (van) => van._id === action.van._id
      );
      if (index !== -1) {
        dangSachHangUpDate.splice(index, 1);
      }
      //cập nhật lại state
      state.dangSachVanDangDat = dangSachHangUpDate;
      localStorage.setItem("hangDat", JSON.stringify(dangSachHangUpDate));
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default datHangReducer;
