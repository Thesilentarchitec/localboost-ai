import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import { PromptEngine } from '@/services/prompt-engine';

export async function POST(req: NextRequest) {
  try {
    const { prompt_template, variables } = await req.json();

    if (!prompt_template) {
      return NextResponse.json(
        { error: 'Prompt template is required' },
        { status: 400 }
      );
    }

    const builtPrompt = PromptEngine.buildPrompt(prompt_template, variables);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // or gpt-4-turbo
      messages: [
        {
          role: 'system',
          content: 'You are a professional marketing assistant and content creator. Your goal is to generate high-quality, engaging content based on the provided prompt.',
        },
        {
          role: 'user',
          content: builtPrompt,
        },
      ],
      temperature: 0.7,
    });

    const output_data = response.choices[0].message.content;

    return NextResponse.json({ output_data });
  } catch (error) {
    console.error('Error generating content:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate content';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
