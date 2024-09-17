import Cookies from "js-cookie";

export const saveTokenToCookie = (token) => {
  // Simpan token dengan masa berlaku 7 hari
  Cookies.set("accessToken", token, {
    expires: 1,
    secure: true,
    sameSite: "Lax",
  });
};

export const getTokenCookie = () => {
  return Cookies.get("accessToken");
};
