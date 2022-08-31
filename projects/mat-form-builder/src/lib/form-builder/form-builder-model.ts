export interface FormBuilderInterface {
  type: TypeEnums,
  label?: string;
  formControlName: string;
  validators?: any[]; // array or null;
  hint?: any;
  options?: FormBuilderSelectOption[]; // array or null;
  required: boolean;
  isTextArea?: boolean;
  isMultiple?: boolean;
  disabled: boolean;
  isFile: boolean;
}

export class FormBuilderSelectOption {
  name: any;
  value: any;
}


export enum TypeEnums {
  select,
  number,
  text,
  tel,
  date,
  hidden
}
