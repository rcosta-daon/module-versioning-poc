import { jsxs as e, Fragment as i, jsx as t } from "react/jsx-runtime";
import { useState as u } from "react";
function c() {
  return "utils v3";
}
function l() {
  const [n, o] = u(0);
  return /* @__PURE__ */ e(i, { children: [
    /* @__PURE__ */ t("p", { children: "Introduction" }),
    /* @__PURE__ */ t("p", { children: c() }),
    /* @__PURE__ */ t("button", { onClick: () => o((r) => r + 1), children: n })
  ] });
}
export {
  l as Introduction,
  l as default
};
