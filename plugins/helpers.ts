export default defineNuxtPlugin(() => {
  const helpers = {
    productPrice(price: number | string) {
      const currency = '$';
      const parsedPrice = parseFloat(price as string);
      return currency + (Math.floor(parsedPrice * 100) * 0.01).toFixed(2);
    },

    discountPrice(price: number | string, salePrice: number | string) {
      const p = parseFloat(price as string);
      const s = parseFloat(salePrice as string);
      if (p > s) {
        return parseInt(((p - s) / p * 100).toString());
      } else {
        return 0;
      }
    }
  }

  // Cung cấp các hàm này như một global helper
  return {
    provide: {
      helpers
    }
  }
})