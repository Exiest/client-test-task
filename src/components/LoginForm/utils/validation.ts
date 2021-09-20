import * as yup from "yup"

export const validationSchema = yup.object().shape({
  password: yup.string().required("Field is required"),
  username: yup.string().required("Field is required"),
})
