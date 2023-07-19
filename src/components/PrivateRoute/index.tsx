import { Route, Switch } from "react-router-dom";
import { IRoute } from "../../utils/interfaces/route";
import { AppRoutes } from "../../utils/enums/app-routes";
import Products from "../../pages/Products";
import Cart from "../../pages/Cart";
import ProductGrid from "../../pages/ProductGrid";
import CartGrid from "../../pages/CartGrid";

const Routes : React.FC = () => {

    const routes : IRoute[] = [
        {
            id:1,
            path:AppRoutes.Products,
            component: Products,
            exact:true
        },
        {
            id:2,
            path: AppRoutes.Cart,
            component: Cart,
            exact:true
        },
        {
            id:3,
            path: AppRoutes.ProductGrid,
            component: ProductGrid,
            exact: true
        },
        {
            id:4,
            path: AppRoutes.CartGrid,
            component: CartGrid,
            exact: true
        }
    ];

    return (
        <Switch>
            {routes
            .map((route: IRoute) => (
            <Route
                key={route.id}
                exact={route.exact}
                path={route.path}
                component={route.component}
            />
            ))}
        </Switch>
    );
};

export default Routes;