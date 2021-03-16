import { Routes } from "@angular/router"
import { ProductComponent } from "./components/product/product.component"

export const appRoutes : Routes = [
    { path:"products", component: ProductComponent },
	{ path: "**", redirectTo: "products", pathMatch: "full" }
]