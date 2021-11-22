import { DAT_HANG } from "./constants";

export const DatHangAction = (van) => {
  return {
    type: DAT_HANG,
    van,
  };
};
