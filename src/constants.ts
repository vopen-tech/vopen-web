const loginRedirectUri = "https%3A%2F%2Fvopen.tech%2Flogin-oidc";
const clientId = "2bb15913-064f-4bd9-8850-04d5b2a96869";
const b2cBaseUrl = "https://vopentechweb.b2clogin.com/vopentechweb.onmicrosoft.com/oauth2/v2.0/authorize?";
const constants = {
  globalSpeakerCallUrl: "https://sessionize.com/vopen-2020/",
  speakerCallUrl: "https://forms.gle/knXD5HcBpYvz4XGDA",
  sponsorsCallUrl: "https://forms.gle/nmMnpHZa3wDytZVbA",
  rsvpUrl: "https://forms.gle/jpackr1z3NoGnpyt7",
  countryRequestUrl: "https://forms.gle/F2cT1dN5EkYYjE6t9",
  loginUrl: `${b2cBaseUrl}p=B2C_1_signinsignup&client_id=${clientId}&nonce=defaultNonce&redirect_uri=${loginRedirectUri}&scope=openid&response_type=id_token&prompt=login&response_mode=query`,
  editProfileUrl: `${b2cBaseUrl}p=B2C_1_profile_editing&client_id=${clientId}&nonce=defaultNonce&redirect_uri=${loginRedirectUri}&scope=openid&response_type=id_token&response_mode=query`
};

export default constants;
