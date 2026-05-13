export type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  prompt_template: string;
  input_fields: InputField[];
  output_type: string;
  is_premium: boolean;
  created_at: string;
};

export type InputField = {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'number';
  placeholder?: string;
  options?: { label: string; value: string }[]; // for select type
  required?: boolean;
};

export type ToolRun = {
  id: string;
  user_id: string;
  tool_id: string;
  input_data: Record<string, string | number | boolean | undefined>;
  output_data: string;
  created_at: string;
};
