import {
  oAuthServiceGoogleIsSignedIn,
  oAuthServiceGoogleSignInAsync,
  oAuthServiceGoogleSignOutAsync,
  IOAuthServiceGoogleInit,
} from 'infrastructure/oauth/google/OAuthServiceGoogle';

export class OAuthService {
  static Google = class {
    isSignedIn = oAuthServiceGoogleIsSignedIn;
    signInAsync = oAuthServiceGoogleSignInAsync;
    signOutAsync = oAuthServiceGoogleSignOutAsync;
  };
}

export type {
  IOAuthServiceGoogleInit,
};
