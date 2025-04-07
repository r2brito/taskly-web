import { isValid } from "date-fns";
import * as yup from "yup";

let TasksSchema = yup.object().shape({
  title: yup.string().required("O nome é obrigatório"),
  description: yup.string(),
  dueDate: yup
    .date()
    .nullable()
    .transform((value, originalValue) => {
      if (originalValue === "" || originalValue === null) return null;
      const date = new Date(originalValue);
      return isValid(date) ? date : new Date("");
    })
    .typeError("Data inválida")
    .notRequired(),
  priority: yup.string().required("A prioridade é obrigatória"),
  completed: yup.boolean().required("O status é obrigatório")
});

export default TasksSchema;
