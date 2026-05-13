-- Seed data for AI Tools Hub

INSERT INTO tools (name, description, category, icon, prompt_template, input_fields, output_type, is_premium)
VALUES 
-- SOCIAL MEDIA TOOLS
(
  'Instagram Caption Generator', 
  'Create engaging and viral captions for your Instagram posts.', 
  'Social Media', 
  'Instagram', 
  'Write a catchy Instagram caption for {{business_name}} about {{topic}}. Tone: {{tone}}. Include emojis and call to action.', 
  '[
    {"name": "business_name", "label": "Business Name", "type": "text", "required": true},
    {"name": "topic", "label": "Topic/Offer", "type": "textarea", "required": true},
    {"name": "tone", "label": "Tone", "type": "select", "options": [
      {"label": "Professional", "value": "professional"},
      {"label": "Witty", "value": "witty"},
      {"label": "Inspirational", "value": "inspirational"},
      {"label": "Friendly", "value": "friendly"}
    ], "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Viral Hook Generator', 
  'Generate scroll-stopping hooks for your videos and posts.', 
  'Social Media', 
  'Zap', 
  'Generate 5 viral scroll-stopping hooks for a {{content_type}} about {{topic}} targeting {{audience}}.', 
  '[
    {"name": "content_type", "label": "Content Type", "type": "select", "options": [
      {"label": "Video", "value": "video"},
      {"label": "Blog Post", "value": "blog"},
      {"label": "Ad Copy", "value": "ad"}
    ], "required": true},
    {"name": "topic", "label": "Topic", "type": "text", "required": true},
    {"name": "audience", "label": "Target Audience", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Hashtag Generator', 
  'Find the best hashtags to increase your reach.', 
  'Social Media', 
  'Hash', 
  'Generate a list of 30 relevant hashtags for {{topic}} categorized by reach (Small, Medium, Large).', 
  '[
    {"name": "topic", "label": "Topic", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Reels Idea Generator', 
  'Get creative ideas for your next Instagram Reel.', 
  'Social Media', 
  'Video', 
  'Give me 5 creative Instagram Reel ideas for {{business_type}} with trending audio suggestions and script concepts.', 
  '[
    {"name": "business_type", "label": "Business Type", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'TikTok Script Writer', 
  'Viral TikTok scripts that stop the scroll.', 
  'Social Media', 
  'Music', 
  'Write a high-energy TikTok script about {{topic}}. Hook: {{hook_type}}. Include visual cues and audio suggestions.', 
  '[
    {"name": "topic", "label": "Topic", "type": "textarea", "required": true},
    {"name": "hook_type", "label": "Hook Type", "type": "select", "options": [
      {"label": "Question", "value": "question"},
      {"label": "Myth", "value": "myth"},
      {"label": "Story", "value": "story"},
      {"label": "How-to", "value": "how-to"}
    ], "required": true}
  ]'::jsonb,
  'text',
  false
),

-- BUSINESS TOOLS
(
  'Google Business Post Generator', 
  'Optimized posts for your Google Business Profile.', 
  'Business', 
  'MapPin', 
  'Write a Google Business Profile post for {{business_name}} promoting {{offer}} in {{location}}. Include a call to action like ''Call Now'' or ''Visit Website''.', 
  '[
    {"name": "business_name", "label": "Business Name", "type": "text", "required": true},
    {"name": "offer", "label": "Offer/Promotion", "type": "textarea", "required": true},
    {"name": "location", "label": "Location", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Review Reply Generator', 
  'Respond to customer reviews professionally and efficiently.', 
  'Business', 
  'MessageSquare', 
  'Write a professional and appreciative reply to this customer review: ''{{review_text}}''. The tone should be {{tone}}.', 
  '[
    {"name": "review_text", "label": "Review Text", "type": "textarea", "required": true},
    {"name": "tone", "label": "Tone", "type": "select", "options": [
      {"label": "Professional", "value": "professional"},
      {"label": "Empathetic", "value": "empathetic"},
      {"label": "Enthusiastic", "value": "enthusiastic"}
    ], "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Promotion Offer Generator', 
  'Create irresistible offers for your customers.', 
  'Business', 
  'Tag', 
  'Create 3 different promotion offer ideas for {{business_type}} to achieve {{goal}} during {{season}}.', 
  '[
    {"name": "business_type", "label": "Business Type", "type": "text", "required": true},
    {"name": "goal", "label": "Goal", "type": "select", "options": [
      {"label": "New Customers", "value": "new_customers"},
      {"label": "Clear Stock", "value": "clear_stock"},
      {"label": "Loyalty", "value": "loyalty"}
    ], "required": true},
    {"name": "season", "label": "Season/Occasion", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),

-- MARKETING TOOLS
(
  'Ad Copy Generator (Facebook/Instagram)', 
  'High-converting ad copy for Meta Ads.', 
  'Marketing', 
  'Facebook', 
  'Write 3 variations of Facebook/Instagram ad copy for {{product_name}} targeting {{audience}}. Goal: {{goal}}.', 
  '[
    {"name": "product_name", "label": "Product Name", "type": "text", "required": true},
    {"name": "audience", "label": "Target Audience", "type": "text", "required": true},
    {"name": "goal", "label": "Campaign Goal", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  true
),
(
  'Landing Page Copy Generator', 
  'Persuasive copy for your landing pages.', 
  'Marketing', 
  'FileText', 
  'Write the headline, subheadline, and key benefits for a landing page about {{product_service}} for {{target_audience}}.', 
  '[
    {"name": "product_service", "label": "Product/Service", "type": "text", "required": true},
    {"name": "target_audience", "label": "Target Audience", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  true
),
(
  'Sales Email Generator', 
  'Effective sales emails that get replies.', 
  'Marketing', 
  'Mail', 
  'Write a cold sales email from {{sender_name}} at {{company}} to {{prospect_name}} about {{offer}}. Include a clear call to action.', 
  '[
    {"name": "sender_name", "label": "Sender Name", "type": "text", "required": true},
    {"name": "company", "label": "Company", "type": "text", "required": true},
    {"name": "prospect_name", "label": "Prospect Name", "type": "text", "required": true},
    {"name": "offer", "label": "Offer", "type": "textarea", "required": true}
  ]'::jsonb,
  'text',
  true
),

-- CONTENT STRATEGY TOOLS
(
  '7-Day Content Planner', 
  'A full week of content planned out for you.', 
  'Content Strategy', 
  'Calendar', 
  'Create a 7-day content plan for {{platform}} for {{business_name}}. Each day should have a topic, goal, and brief concept.', 
  '[
    {"name": "platform", "label": "Platform", "type": "select", "options": [
      {"label": "Instagram", "value": "instagram"},
      {"label": "LinkedIn", "value": "linkedin"},
      {"label": "Multi-channel", "value": "multi_channel"}
    ], "required": true},
    {"name": "business_name", "label": "Business Name", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  true
),
(
  'Monthly Content Calendar Generator', 
  'Plan your entire month of content in one go.', 
  'Content Strategy', 
  'Calendar', 
  'Generate a 30-day content calendar for {{niche}} with 3 posts per week. Include themes for each week.', 
  '[
    {"name": "niche", "label": "Niche/Topic", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  true
),
(
  'Content Repurposing Tool', 
  'Turn one piece of content into many.', 
  'Content Strategy', 
  'Repeat', 
  'Take this {{source_type}}: ''{{source_content}}'' and repurpose it into: 1. A LinkedIn post, 2. Three tweets, 3. An Instagram caption.', 
  '[
    {"name": "source_type", "label": "Source Type", "type": "select", "options": [
      {"label": "Blog Post", "value": "blog_post"},
      {"label": "Video Script", "value": "video_script"},
      {"label": "Podcast Transcript", "value": "podcast"}
    ], "required": true},
    {"name": "source_content", "label": "Source Content", "type": "textarea", "required": true}
  ]'::jsonb,
  'text',
  false
),

-- LOCAL BUSINESS TOOLS
(
  'Restaurant Promo Generator', 
  'Special promotions to fill your tables.', 
  'Local Business', 
  'Utensils', 
  'Create a promotional social media post for {{restaurant_name}} featuring our {{special_dish}}. Mention our {{deal}}.', 
  '[
    {"name": "restaurant_name", "label": "Restaurant Name", "type": "text", "required": true},
    {"name": "special_dish", "label": "Special Dish", "type": "text", "required": true},
    {"name": "deal", "label": "Deal/Offer", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Gym Marketing Posts Generator', 
  'Get more members into your fitness studio.', 
  'Local Business', 
  'Dumbbell', 
  'Write a motivational gym post for {{gym_name}} promoting our {{class_type}} classes for {{target_group}}.', 
  '[
    {"name": "gym_name", "label": "Gym Name", "type": "text", "required": true},
    {"name": "class_type", "label": "Class Type", "type": "text", "required": true},
    {"name": "target_group", "label": "Target Audience", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Salon Instagram Post Generator', 
  'Showcase your salon''s best work.', 
  'Local Business', 
  'Scissors', 
  'Write an Instagram post for {{salon_name}} showcasing a {{service_name}}. Focus on the {{benefit}} of this treatment.', 
  '[
    {"name": "salon_name", "label": "Salon Name", "type": "text", "required": true},
    {"name": "service_name", "label": "Service Name", "type": "text", "required": true},
    {"name": "benefit", "label": "Benefit", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
);
