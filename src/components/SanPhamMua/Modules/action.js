import { DAT_HANG, GIAM_VAN, HUY_HANG } from "./constants";

export const DatHangAction = (van) => {
  return {
    type: DAT_HANG,
    van,
  };
};
export const GiamSoLuong = (van) => {
  return {
    type: GIAM_VAN,
    van,
  };
};
export const TangSoLuong = (van) => {
  return {
    type: DAT_HANG,
    van,
  };
};
export const HuySanPham = (van) => {
  return {
    type: HUY_HANG,
    van,
  };
};
