import ProductInCart from "@/components/cart/productInCart";
import SummaryCart from "@/components/cart/SummaryCart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Generated by create next app",
};

const ProductCart = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:px-16">
      <ProductInCart />
      <div className="border rounded-2xl md:h-60">
        <SummaryCart />
      </div>
    </div>
  );
};

export default ProductCart;
