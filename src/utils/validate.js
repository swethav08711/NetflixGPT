export const checkValidData = (email, password) => {
  const isEmailVAlid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordVAlid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailVAlid) {
    return "Email ID is not valid";
  }
  if (!isPasswordVAlid) {
    return "Password is not valid";
  }

  return null;
};
