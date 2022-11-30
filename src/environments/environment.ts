// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUri: 'http://localhost:3000',
  auth0:
  {
    domain: 'dev-htjrdxyu2p87zjsm.us.auth0.com',
    clientId: 'pXQeGXZ6zu8OspC2yd0IFp5NZgQk20tC',
    callback_URL: 'localhost:4200/callback',
    audience: 'books'
  }
};

// the domain and clientID are from books2022

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
