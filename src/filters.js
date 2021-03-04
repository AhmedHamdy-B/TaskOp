
// This is a global filter to use substring to shorten a text or any string value and add ... at the end of it used in PrankCard Component

import Vue from "vue";
export function truncate(value, strCount = 50) {
  if (!value) {
    return "";
  }

  return value.length > strCount
    ? value.substring(0, strCount) + "..."
    : value.substring(0, strCount);
}

Vue.filter("truncate", truncate);
