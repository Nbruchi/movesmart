import * as yup from "yup";

export const validationSchema = [
  yup.object().shape({
    fullName: yup
      .string()
      .required("required")
      .test(
        "",
        "please enter fullname",
        (name: any) => name && name.split(" ").length > 1
      ),
    gender: yup.string().required("required"),
    category: yup.number().min(1, "Number to be positive"),
  }),
  yup.object().shape({
    progLang: yup.array().length(2, "Array must have at least 2 items"),
  }),
];
