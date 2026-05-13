-- Create tools table
CREATE TABLE IF NOT EXISTS tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  icon TEXT,
  prompt_template TEXT NOT NULL,
  input_fields JSONB NOT NULL DEFAULT '[]'::jsonb,
  output_type TEXT DEFAULT 'text',
  is_premium BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create tool_runs table
CREATE TABLE IF NOT EXISTS tool_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID, -- Assuming auth.uid() if using Supabase Auth
  tool_id UUID REFERENCES tools(id) ON DELETE CASCADE,
  input_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  output_data TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Add some indexes for performance
CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category);
CREATE INDEX IF NOT EXISTS idx_tool_runs_user_id ON tool_runs(user_id);
CREATE INDEX IF NOT EXISTS idx_tool_runs_tool_id ON tool_runs(tool_id);
