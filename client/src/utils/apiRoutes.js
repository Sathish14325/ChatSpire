const apiRoutes = {
  signupURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/signup`,
  loginURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/login`,
  resetpasswordURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/resetpassword`,
  userprofileURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/userprofile`,
  updateUserProfileURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/updateuser`,
  getAllUserURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/alluserprofile`,
  deleteUserProfileURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/deleteuser`,
  changeProfileImageURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/uploadprofilepic`,
  deleteProfileImageURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/user/deleteprofilepic`,

  selectedUserMessages: `${import.meta.env.VITE_APP_API_KEY}/api/v1/message/receive`,
  sendMessages: `${import.meta.env.VITE_APP_API_KEY}/api/v1/message/send`,

  aiURI: `${import.meta.env.VITE_APP_API_KEY}/api/v1/ai/ask`,
};

export { apiRoutes };
