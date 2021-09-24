import { render } from "@testing-library/react";
import App from "./App";
import 'semantic-ui-css/semantic.min.css'

const root=document.getElementById('root');

render(<App/>,root);