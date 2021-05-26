import { OAuthService, IOAuthServiceGoogleInit } from 'infrastructure/oauth/OAuthServices';

// import { IApiResponse } from 'application/api';
import { constants } from 'application/constants';

export class Auth {
  signInWithGoogleAsync = async (): Promise<boolean> => {
    try {
      await new OAuthService.Google().signOutAsync();

      const oAuthInitGoogle: IOAuthServiceGoogleInit = {
        clientId: constants.oAuthGoogleClientId,
        uxMode: constants.oAuthGoogleUxMode,
        redirectUrl: process.env.PUBLIC_URL,
      };

      const googleResponse = await new OAuthService.Google().signInAsync(oAuthInitGoogle);

      if (googleResponse instanceof Object) {

        /*
        * Send the data to the API
        *
        const idToken = googleResponse.authResponse.id_token; // etc...
        const apiRequestBody = { idToken: idToken };
        const apiResponse = await window.fetch((constants.apiUrl + constants.apiUrlPathAuth), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiRequestBody),
        });
        const apiResponseData: IApiResponse | boolean = apiResponse.ok ? await apiResponse.json() : false;
        if (apiResponseData instanceof Object && apiResponseData.success) {
          // functions, etc...
          console.log(apiResponseData.innderData);
          return true;
        } else {
          throw Error();
        }
        */

        // Dummy: Begin
        window.localStorage.setItem('dummy_user_name', googleResponse.basicProfile.name);
        window.localStorage.setItem('dummy_user_avatar', googleResponse.basicProfile.image_url);
        return true;
        // Dummy: End

      } else {
        throw Error();
      }
    } catch {
      return false;
    }
  };

  signOutAsync = async (): Promise<boolean> => {
    try {
      await new OAuthService.Google().signOutAsync();

      const dummy = await new Promise((resolve) => setTimeout(() => resolve(true), 500)).then(() => {
        window.localStorage.setItem('dummy_user_name', '');
        window.localStorage.setItem('dummy_user_avatar', '');
        return true;
      });
      return dummy;

    } catch {
      return false;
    }
  };
}
