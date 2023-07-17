import { RouteComponentProps } from "react-router-dom";

export interface IRoute {
  id: number;
  path: string;
  component:
    | React.LazyExoticComponent<React.FC<{}>>
    | React.ComponentType<RouteComponentProps<{}>>
    | React.ComponentType<{}>
    | any;
  exact: boolean;
}