interface IConstants {
  apiUrl: string;
  apiUrlPathAuth: string;
  oAuthGoogleClientId: string;
  oAuthGoogleUxMode: 'popup' | 'redirect';
  oAuthGoogleRedirectUrl: string;
}

export const constants: IConstants = {
  apiUrl: 'https://api.furcan.net/',
  apiUrlPathAuth: 'authentication',
  oAuthGoogleClientId: '998329239587-roe4rd0tdif2j6ia7r1qjgugf4mut1vg.apps.googleusercontent.com',
  oAuthGoogleUxMode: 'popup',
  oAuthGoogleRedirectUrl: process.env.PUBLIC_URL,
};
