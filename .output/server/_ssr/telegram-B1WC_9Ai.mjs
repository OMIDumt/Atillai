const TELEGRAM_USERNAME = "MahdiPourabdollah_Ai";
const TELEGRAM_URL = `https://t.me/${TELEGRAM_USERNAME}`;
const telegramBuyLink = (subject) => `${TELEGRAM_URL}?text=${encodeURIComponent(`سلام، برای خرید/سفارش «${subject}» در ATiLLAi.com تماس می‌گیرم.`)}`;
export {
  TELEGRAM_URL as T,
  telegramBuyLink as t
};
