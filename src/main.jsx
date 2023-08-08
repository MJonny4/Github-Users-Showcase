import { render } from "preact";
import App from "./App";
import "./index.css";

import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

render(
    <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <GithubProvider>
            <App />
        </GithubProvider>
    </Auth0Provider>,

    document.getElementById("app")
);
