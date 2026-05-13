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
),

-- SEO TOOLS (RankPill Style)
(
  'Keyword Clusterer', 
  'Group your keywords into logical clusters for better SEO strategy.', 
  'SEO', 
  'Layers', 
  'Cluster the following keywords into logical groups for an SEO strategy. For each group, provide a "Pillar Topic" and "Supporting Keywords". Keywords: {{keywords}}.', 
  '[
    {"name": "keywords", "label": "Keywords (one per line)", "type": "textarea", "required": true}
  ]'::jsonb,
  'text',
  true
),
(
  'SEO Keyword Research Tool', 
  'Discover high-potential keywords for your niche.', 
  'SEO', 
  'Search', 
  'Generate a list of 20 high-potential SEO keywords for the niche: {{niche}}. Include estimated difficulty and search intent for each.', 
  '[
    {"name": "niche", "label": "Niche", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'SEO Meta Description Generator', 
  'Generate optimized meta descriptions that drive clicks.', 
  'SEO', 
  'Search', 
  'Generate 3 variations of an SEO-optimized meta description for a page about {{page_topic}} targeting the keyword {{target_keyword}}. Tone: {{tone}}.', 
  '[
    {"name": "page_topic", "label": "Page Topic", "type": "text", "required": true},
    {"name": "target_keyword", "label": "Target Keyword", "type": "text", "required": true},
    {"name": "tone", "label": "Tone", "type": "select", "options": [
      {"label": "Professional", "value": "professional"},
      {"label": "Casual", "value": "casual"},
      {"label": "Urgent", "value": "urgent"}
    ], "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'SEO URL Slug Generator', 
  'Create clean and keyword-rich URL slugs.', 
  'SEO', 
  'Link', 
  'Generate 5 SEO-friendly URL slugs for a page with the title: "{{title}}".', 
  '[
    {"name": "title", "label": "Page Title", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Local SEO Property Description', 
  'Optimized descriptions for real estate listings.', 
  'SEO', 
  'Home', 
  'Write an SEO-optimized property description for a {{property_type}} in {{location}}. Key features: {{features}}.', 
  '[
    {"name": "property_type", "label": "Property Type", "type": "text", "required": true},
    {"name": "location", "label": "Location", "type": "text", "required": true},
    {"name": "features", "label": "Features", "type": "textarea", "required": true}
  ]'::jsonb,
  'text',
  false
),
(
  'Service Page Copywriter', 
  'Professional copy for medical and dentist service pages.', 
  'SEO', 
  'Stethoscope', 
  'Write professional and trust-building service page copy for {{service_name}} at {{practice_name}}. Include sections for "About the Service", "Why Choose Us", and a call to action.', 
  '[
    {"name": "service_name", "label": "Service Name", "type": "text", "required": true},
    {"name": "practice_name", "label": "Practice Name", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  true
),
(
  'AI Reddit Marketing Post', 
  'Engage with subreddits without sounding like an ad.', 
  'SEO', 
  'MessageCircle', 
  'Write a Reddit post for the r/{{subreddit}} subreddit discussing {{product_service}} as a solution to {{problem}}. The tone should be helpful and conversational, not salesy.', 
  '[
    {"name": "subreddit", "label": "Subreddit", "type": "text", "required": true},
    {"name": "product_service", "label": "Product/Service", "type": "text", "required": true},
    {"name": "problem", "label": "Problem it Solves", "type": "textarea", "required": true}
  ]'::jsonb,
  'text',
  false
),
-- SwipeStory.click TOOLS
(
  'Faceless AI Video Script Generator', 
  'Generate viral scripts for faceless YouTube or TikTok channels.', 
  'Video', 
  'Video', 
  'Write a viral script for a faceless {{niche}} video about {{topic}}. Include a hook, 3 main points, and a call to action. Style: {{style}}.', 
  '[
    {"name": "niche", "label": "Video Niche", "type": "text", "required": true},
    {"name": "topic", "label": "Video Topic", "type": "textarea", "required": true},
    {"name": "style", "label": "Video Style", "type": "select", "options": [
      {"label": "Documentary", "value": "documentary"},
      {"label": "Storytelling", "value": "storytelling"},
      {"label": "Educational", "value": "educational"},
      {"label": "Top 10", "value": "top10"}
    ], "required": true}
  ]'::jsonb,
  'text',
  true
),
(
  'TikTok Viral Series Planner', 
  'Plan a series of related TikToks to build an audience on autopilot.', 
  'Video', 
  'Zap', 
  'Plan a 5-part TikTok series for {{business_name}} about {{theme}}. For each part, provide a hook and a short script concept.', 
  '[
    {"name": "business_name", "label": "Business/Channel Name", "type": "text", "required": true},
    {"name": "theme", "label": "Series Theme", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
),
-- RankPill.com TOOLS
(
  'SEO Article Brief Generator', 
  'Generate comprehensive article briefs that RankPill can use to write content.', 
  'SEO', 
  'FileText', 
  'Create a detailed SEO article brief for the keyword "{{target_keyword}}". Include H1, H2 structure, target audience, and key points to cover for maximum search visibility.', 
  '[
    {"name": "target_keyword", "label": "Target Keyword", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  true
),
(
  'Semantic Keyword Expander', 
  'Find LSI and semantic keywords to improve your content depth.', 
  'SEO', 
  'Search', 
  'Generate a list of 15 semantic and LSI keywords related to {{main_keyword}} to help rank higher on Google and ChatGPT search.', 
  '[
    {"name": "main_keyword", "label": "Main Keyword", "type": "text", "required": true}
  ]'::jsonb,
  'text',
  false
);

