type AppError = {
  message: string | undefined | null,
  code: number | undefined | null,
  keyValue: number | string | undefined | null
}


export const signUpErrors = (err:AppError) => {
  let errors = { username: "", password: "", others: "" };

  if (err.message && err.message.includes("username"))
    errors.username = "Incorrect Username !";

  // if (err.message && err.message.includes("email")) errors.email = "Incorrect email !";

  if (err.message && err.message.includes("password"))
    errors.password = "Password must be 6 lenght or more";

  // if (err.code && err.keyValue && err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
  //   errors.email = "Email already used !";

  if (err.code && err.keyValue && err.code === 11000 && Object.keys(err.keyValue)[0].includes("username"))
    errors.username = "Username already used !";

  if (err.code && err.code !== 11000 && err.message && !err.message.includes('username') && !err.message.includes('password'))
    errors.others = String(err);

  return errors;
};

export const signInErrors = (err:AppError) => {
  let errors = { username: "", password: "", others: "" };

  if (err.message && err.message.includes("username")) errors.username = "Unknown username";

  if (err.message && err.message.includes("password")) errors.password = "Incorrect Password";

  if (err.message && !err.message.includes('username') && !err.message.includes('password'))
    errors.others = String(err);

  return errors;
};
