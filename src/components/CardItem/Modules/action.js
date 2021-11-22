import { DAT_HANG, LOAD_LAI } from "./constants";

export const DatHangAction = (van) => {
  return {
    type: DAT_HANG,
    van,
  };
};
export const LoadLaiAction = (van) => {
  return {
    type: LOAD_LAI,
    van,
  };
};
