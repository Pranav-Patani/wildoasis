import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const now = new Date();

  // Create a new Date with local day boundaries (midnight local time)
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    options?.end ? 23 : 0,
    options?.end ? 59 : 0,
    options?.end ? 59 : 0,
    options?.end ? 999 : 0
  );

  return today.toISOString(); // This still gives UTC string, but based on local time
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
