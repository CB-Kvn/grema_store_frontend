import { MenuStore } from '../components/store/index_gre_sto'
import { ProductDetail } from '../components/store/product_detail'

export const ProductDetailStore = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://grema-store-frontend.vercel.app/images/backs8.png",
        backgroundSize: "cover",
      }}
    >
    <MenuStore></MenuStore>
    <ProductDetail></ProductDetail>
    </div>
  )
}
