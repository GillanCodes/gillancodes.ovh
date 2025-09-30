type AppError = {
  message: string | undefined | null,
  code: number | undefined | null,
  keyValue: number | string | undefined | null
}


export const editUserErrors = (err:AppError) => {
  let errors = { username: "", picture: "" };

  if (err.message && err.message.includes("username")){
    if (err.message.includes("shorter")) {
      errors.username = "Username must be at least 4 lenght";
    } else {
      errors.username = "This username is invalid !";
    }

  }

  if (err.message && err.message.includes("picture"))
    errors.picture = "This picture can not be used.";

  if (err.code && err.keyValue && err.code === 11000 && Object.keys(err.keyValue)[0].includes("username"))
    errors.username = "Username already used !";

  return errors;
};

