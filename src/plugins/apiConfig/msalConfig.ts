
import { PublicClientApplication, type AccountInfo, type RedirectRequest } from '@azure/msal-browser';
import { reactive } from 'vue';
export const msalConfig = {
    auth: {
    clientId: "3c597909-2ef8-4e62-b43b-6b3493857fb8",
    authority: "https://login.microsoftonline.com/509e9f09-231d-4d91-ba4a-bbe87d51d16d",
    redirectUri: window.location.origin, // Replace with your actual redirect URI
    postLogoutUri: window.location.origin,
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false
    }
}


export const graphScopes: RedirectRequest={
    scopes: ['user.read', 'openid', 'profile']
};
    export const state = reactive({
        isAuthenticated: false,
        user: null as AccountInfo | null
    });

export const myMSALObj = new PublicClientApplication(msalConfig)