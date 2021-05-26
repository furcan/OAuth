import { Auth } from 'application/api/Authentication';

interface IApiResponse {
  success: boolean;
  message: string
  innderData: string; // etc...
}

export {
  Auth,
};

export type {
  IApiResponse,
};
