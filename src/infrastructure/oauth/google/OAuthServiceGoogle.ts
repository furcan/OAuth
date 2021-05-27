// IOAuthServiceGoogle Interfaces: begin
interface IGoogleAuthResponse {
  access_token: string;
  expires_at: number;
  expires_in: number;
  first_issued_at: number;
  id_token: string;
  idpId: string;
  login_hint: string;
  scope: string;
  token_type: string;
  session_state: {
    extraQueryParams: {
      authuser: string;
    };
  };
}

interface IGoogleGetBasicProfile {
  getId: () => string;
  getName: () => string;
  getGivenName: () => string;
  getFamilyName: () => string;
  getImageUrl: () => string;
  getEmail: () => string;
}

interface IGoogleBasicProfile {
  id: string;
  name: string;
  given_name: string;
  family_name: string;
  image_url: string;
  email: string;
}

type TGoogleLoadCallback = (...args: []) => void;

type TGoogleLoadConfig = {
  callback: TGoogleLoadCallback,
  onerror?: () => void,
  timeout?: number,
  ontimeout?: () => void,
};

type TGoogleLoad = (apiName: string, callback: TGoogleLoadConfig | TGoogleLoadCallback) => void;

interface IGoogleInit {
  client_id: string;
  cookie_policy: string;
  fetch_basic_profile: boolean;
  scope: string;
  ux_mode?: string;
  redirect_uri?: string;
  response_type?: string;
}

type TGoogleInit = ({ }: IGoogleInit) => void;

type TGoogleAuth2 = {
  init: TGoogleInit;
  getAuthInstance: () => IGoogleOAuth2Instance;
};

interface IGoogleCurrentUserGet {
  getAuthResponse: () => IGoogleAuthResponse;
  getBasicProfile: () => IGoogleGetBasicProfile;
}

interface IGoogleCurrentUser {
  get: () => IGoogleCurrentUserGet;
}

interface IGoogleIsSignedIn {
  get: () => boolean;
}

interface IGoogleOAuth2Instance {
  currentUser: IGoogleCurrentUser;
  isSignedIn: IGoogleIsSignedIn;
  signIn: () => Promise<void>;
  signOut: () => Promise<undefined>;
}

interface IGoogleGapi {
  load: TGoogleLoad;
  auth2: TGoogleAuth2;
}

declare global {
  interface Window { gapi: IGoogleGapi; }
}
// IOAuthServiceGoogle Interfaces: end


// IOAuthServiceGoogle: begin
let googleOAuth2Instance: IGoogleOAuth2Instance | null = null;

interface IOAuthServiceGoogleInit {
  clientId: string;
  uxMode?: 'popup' | 'redirect';
  redirectUrl?: string;
}
const oAuthServiceGoogleInitAndLoadAndGetInstance = ({ clientId, uxMode, redirectUrl }: IOAuthServiceGoogleInit): Promise<boolean> => new Promise((resolve, reject) => {
  const scriptId = 'OAuthGoogleScriptElement';
  if (!window.document.getElementById(scriptId)) {
    // create script range and append to the doc head
    const script = `<script id="${scriptId}" src="https://apis.google.com/js/api:client.js"></script>`;
    const scriptRange = window.document.createRange();
    scriptRange.selectNode(window.document.head);
    const scriptFragment = scriptRange.createContextualFragment(script);
    window.document.head.appendChild(scriptFragment);

    // get script
    const getScript = window.document.getElementById(scriptId);

    // check script
    if (getScript) {
      // listen script onload
      getScript.onload = () => {
        // load gapi
        window.gapi.load('auth2', () => {
          // init gapi
          window.gapi.auth2.init({
            client_id: clientId,
            cookie_policy: 'single_host_origin',
            fetch_basic_profile: true,
            scope: 'profile email',
            ux_mode: uxMode || 'popup',
            redirect_uri: redirectUrl,
          });

          // set gapi instance
          googleOAuth2Instance = window.gapi.auth2.getAuthInstance();

          // resolve
          resolve(true);
        });
      };
    } else {
      reject(false);
    }
  } else if (googleOAuth2Instance) {
    resolve(true);
  } else {
    reject(false);
  }
});

type TOAuthServiceGoogleIsSignedIn = boolean;
export const oAuthServiceGoogleIsSignedIn = (): TOAuthServiceGoogleIsSignedIn => {
  return googleOAuth2Instance !== null && googleOAuth2Instance.isSignedIn.get();
};

type TOAuthServiceGoogleSignIn = {
  authResponse: IGoogleAuthResponse;
  basicProfile: IGoogleBasicProfile;
} | null;
const googleReturnData = (): TOAuthServiceGoogleSignIn => {
  if (googleOAuth2Instance) {
    const authResponse: IGoogleAuthResponse = googleOAuth2Instance.currentUser.get().getAuthResponse();
    const basicProfile: IGoogleGetBasicProfile = googleOAuth2Instance.currentUser.get().getBasicProfile();
    return {
      authResponse,
      basicProfile: {
        id: basicProfile.getId(),
        name: basicProfile.getName(),
        given_name: basicProfile.getGivenName(),
        family_name: basicProfile.getFamilyName(),
        image_url: basicProfile.getImageUrl(),
        email: basicProfile.getEmail(),
      },
    };
  }
  return null;
};

export const oAuthServiceGoogleSignInAsync = async ({ clientId, uxMode, redirectUrl }: IOAuthServiceGoogleInit): Promise<TOAuthServiceGoogleSignIn> => {
  if (!oAuthServiceGoogleIsSignedIn()) {
    try {
      const go = await oAuthServiceGoogleInitAndLoadAndGetInstance({ clientId, uxMode, redirectUrl });
      if (go && googleOAuth2Instance) {
        await googleOAuth2Instance.signIn();
        return googleReturnData();
      } else {
        throw Error();
      }
    } catch {
      return null;
    }
  } else if (googleOAuth2Instance) {
    return googleReturnData();
  }
  return null;
};

type TOAuthServiceGoogleSignOut = boolean;
export const oAuthServiceGoogleSignOutAsync = async (): Promise<TOAuthServiceGoogleSignOut> => {
  if (oAuthServiceGoogleIsSignedIn() && googleOAuth2Instance) {
    try {
      const signOut = await googleOAuth2Instance.signOut();
      if (signOut === undefined) {
        return true;
      } else {
        throw Error();
      }
    } catch {
      return false;
    }
  }
  return true;
};
// IOAuthServiceGoogle: end

// IOAuthServiceGoogle Types: begin
export type {
  IOAuthServiceGoogleInit,
  TOAuthServiceGoogleIsSignedIn,
  TOAuthServiceGoogleSignIn,
  TOAuthServiceGoogleSignOut,
};
// IOAuthServiceGoogle Types: end
