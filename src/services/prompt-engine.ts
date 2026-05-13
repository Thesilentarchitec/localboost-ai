export type PromptVariables = Record<string, string | number | boolean>;

export class PromptEngine {
  /**
   * Replaces variables in a prompt template with provided values.
   * Variables should be in the format {{variable_name}}
   * 
   * @param template The prompt template string
   * @param variables An object containing variable names and their values
   * @returns The processed prompt string
   */
  static buildPrompt(template: string, variables: PromptVariables): string {
    let prompt = template;

    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      prompt = prompt.replace(regex, String(value));
    });

    return prompt;
  }

  /**
   * Extracts all variable names from a template.
   * Useful for validation or dynamic form generation.
   * 
   * @param template The prompt template string
   * @returns An array of variable names found in the template
   */
  static extractVariables(template: string): string[] {
    const regex = /{{(.*?)}}/g;
    const matches = template.matchAll(regex);
    const variables = new Set<string>();

    for (const match of matches) {
      variables.add(match[1].trim());
    }

    return Array.from(variables);
  }
}
