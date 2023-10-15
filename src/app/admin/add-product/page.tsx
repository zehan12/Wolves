import Breadcrumbs from "@/app/components/Breadcrumbs"
import Navbar from "@/app/components/Navbar"
import ProductFrom from "./ProductForm"

export default function AddProduct() {
    return (
        <div>
            <Navbar />
            <Breadcrumbs />
            <ProductFrom />
        </div>
    )
}