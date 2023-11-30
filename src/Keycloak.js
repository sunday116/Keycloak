import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "hype",
 clientId: "hypeclient",
});

export default keycloak;
