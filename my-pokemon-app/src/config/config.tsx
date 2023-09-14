let config = {
    appName : "pokemon App",
    siteUrl: "http://pokeapi.co/api/v2/",
    apiUrl: "http://pokeapi.co/api/v2",
    environment: "development",
}

const isProd = false;
const deploymentTypes = isProd ? "production" : "development";

if (deploymentTypes === "production") {
    config = {
        ...config,
        siteUrl: "https://pokeapi.co/api/v2/",
        apiUrl: "https://pokeapi.co/api/v2/",
        environment: "production",
    }
} else if (deploymentTypes === "development"){
    config = {
        ...config,
        environment: "development"
    }
}

export default config;