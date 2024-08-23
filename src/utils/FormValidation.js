import { object, string, ref } from "yup";

let userSchema = object({
  name: string().required("A valid Name is required"),
  telephone: string().required("A valid Phone number is required"),
  email: string()
    .email("Incorrect format for an Email address")
    .required("A valid Email address is required"),
  confirmEmail: string()
    .oneOf([ref('email'), null], 'Emails must match')
    .required("Please confirm your email address")
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm, { abortEarly: false });
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.errors.join(", ") };
  }
};

export default validateForm;
