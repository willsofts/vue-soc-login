const appVariables = {
    CHAT_URL: "",
    MULTI_LANGUAGES: ["EN","TH","VN"],
    ALLOW_AUTHEN_SAML: "false",
};
function getAppConfigs() {
    return appVariables;
}
function getAppConfig(key) {
    return appVariables[key];
}
console.log("appVariables",appVariables);
