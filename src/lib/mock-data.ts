import { Tool } from '@/types/database';

export const CATEGORIES = [
  'Social Media',
  'Business',
  'Marketing',
  'Content Strategy',
  'Local Business',
  'SEO',
  'Video'
];

export const MOCK_TOOLS: Tool[] = [
  {
    id: '1',
    name: 'Instagram Caption Generator',
    description: 'Create engaging and viral captions for your Instagram posts.',
    category: 'Social Media',
    icon: 'Instagram',
    prompt_template: 'Write a catchy Instagram caption for {{business_name}} about {{topic}}. Tone: {{tone}}. Include emojis and call to action.',
    input_fields: [
      { name: 'business_name', label: 'Business Name', type: 'text', required: true },
      { name: 'topic', label: 'Topic/Offer', type: 'textarea', required: true },
      { name: 'tone', label: 'Tone', type: 'select', options: [
        { label: 'Professional', value: 'professional' },
        { label: 'Witty', value: 'witty' },
        { label: 'Inspirational', value: 'inspirational' },
        { label: 'Friendly', value: 'friendly' }
      ], required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Viral Hook Generator',
    description: 'Generate scroll-stopping hooks for your videos and posts.',
    category: 'Social Media',
    icon: 'Zap',
    prompt_template: 'Generate 5 viral scroll-stopping hooks for a {{content_type}} about {{topic}} targeting {{audience}}.',
    input_fields: [
      { name: 'content_type', label: 'Content Type', type: 'select', options: [
        { label: 'Video', value: 'video' },
        { label: 'Blog Post', value: 'blog' },
        { label: 'Ad Copy', value: 'ad' }
      ], required: true },
      { name: 'topic', label: 'Topic', type: 'text', required: true },
      { name: 'audience', label: 'Target Audience', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Hashtag Generator',
    description: 'Find the best hashtags to increase your reach.',
    category: 'Social Media',
    icon: 'Hash',
    prompt_template: 'Generate a list of 30 relevant hashtags for {{topic}} categorized by reach (Small, Medium, Large).',
    input_fields: [
      { name: 'topic', label: 'Topic', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Google Business Post Generator',
    description: 'Optimized posts for your Google Business Profile.',
    category: 'Business',
    icon: 'MapPin',
    prompt_template: 'Write a Google Business Profile post for {{business_name}} promoting {{offer}} in {{location}}. Include a call to action like "Call Now" or "Visit Website".',
    input_fields: [
      { name: 'business_name', label: 'Business Name', type: 'text', required: true },
      { name: 'offer', label: 'Offer/Promotion', type: 'textarea', required: true },
      { name: 'location', label: 'Location', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Ad Copy Generator',
    description: 'High-converting ad copy for Meta Ads.',
    category: 'Marketing',
    icon: 'Facebook',
    prompt_template: 'Write 3 variations of Facebook/Instagram ad copy for {{product_name}} targeting {{audience}}. Goal: {{goal}}.',
    input_fields: [
      { name: 'product_name', label: 'Product Name', type: 'text', required: true },
      { name: 'audience', label: 'Target Audience', type: 'text', required: true },
      { name: 'goal', label: 'Campaign Goal', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: true,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: '7-Day Content Planner',
    description: 'A full week of content planned out for you.',
    category: 'Content Strategy',
    icon: 'Calendar',
    prompt_template: 'Create a 7-day content plan for {{platform}} for {{business_name}}. Each day should have a topic, goal, and brief concept.',
    input_fields: [
      { name: 'platform', label: 'Platform', type: 'select', options: [
        { label: 'Instagram', value: 'instagram' },
        { label: 'LinkedIn', value: 'linkedin' },
        { label: 'Multi-channel', value: 'multi_channel' }
      ], required: true },
      { name: 'business_name', label: 'Business Name', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: true,
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Restaurant Promo Generator',
    description: 'Special promotions to fill your tables.',
    category: 'Local Business',
    icon: 'Utensils',
    prompt_template: 'Create a promotional social media post for {{restaurant_name}} featuring our {{special_dish}}. Mention our {{deal}}.',
    input_fields: [
      { name: 'restaurant_name', label: 'Restaurant Name', type: 'text', required: true },
      { name: 'special_dish', label: 'Special Dish', type: 'text', required: true },
      { name: 'deal', label: 'Deal/Offer', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Keyword Clusterer',
    description: 'Group your keywords into logical clusters for better SEO strategy.',
    category: 'SEO',
    icon: 'Layers',
    prompt_template: 'Cluster the following keywords into logical groups for an SEO strategy. For each group, provide a "Pillar Topic" and "Supporting Keywords". Keywords: {{keywords}}.',
    input_fields: [
      { name: 'keywords', label: 'Keywords (one per line)', type: 'textarea', required: true }
    ],
    output_type: 'text',
    is_premium: true,
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    name: 'SEO Keyword Research Tool',
    description: 'Discover high-potential keywords for your niche.',
    category: 'SEO',
    icon: 'Search',
    prompt_template: 'Generate a list of 20 high-potential SEO keywords for the niche: {{niche}}. Include estimated difficulty and search intent for each.',
    input_fields: [
      { name: 'niche', label: 'Niche', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '10',
    name: 'SEO Meta Description Generator',
    description: 'Generate optimized meta descriptions that drive clicks.',
    category: 'SEO',
    icon: 'Search',
    prompt_template: 'Generate 3 variations of an SEO-optimized meta description for a page about {{page_topic}} targeting the keyword {{target_keyword}}. Tone: {{tone}}.',
    input_fields: [
      { name: 'page_topic', label: 'Page Topic', type: 'text', required: true },
      { name: 'target_keyword', label: 'Target Keyword', type: 'text', required: true },
      { name: 'tone', label: 'Tone', type: 'select', options: [
        { label: 'Professional', value: 'professional' },
        { label: 'Casual', value: 'casual' },
        { label: 'Urgent', value: 'urgent' }
      ], required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '11',
    name: 'AI Reddit Marketing Post',
    description: 'Engage with subreddits without sounding like an ad.',
    category: 'SEO',
    icon: 'MessageCircle',
    prompt_template: 'Write a Reddit post for the r/{{subreddit}} subreddit discussing {{product_service}} as a solution to {{problem}}. The tone should be helpful and conversational, not salesy.',
    input_fields: [
      { name: 'subreddit', label: 'Subreddit', type: 'text', required: true },
      { name: 'product_service', label: 'Product/Service', type: 'text', required: true },
      { name: 'problem', label: 'Problem it Solves', type: 'textarea', required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '12',
    name: 'Faceless AI Video Script Generator',
    description: 'Generate viral scripts for faceless YouTube or TikTok channels.',
    category: 'Video',
    icon: 'Video',
    prompt_template: 'Write a viral script for a faceless {{niche}} video about {{topic}}. Include a hook, 3 main points, and a call to action. Style: {{style}}.',
    input_fields: [
      { name: 'niche', label: 'Video Niche', type: 'text', required: true },
      { name: 'topic', label: 'Video Topic', type: 'textarea', required: true },
      { name: 'style', label: 'Video Style', type: 'select', options: [
        { label: 'Documentary', value: 'documentary' },
        { label: 'Storytelling', value: 'storytelling' },
        { label: 'Educational', value: 'educational' },
        { label: 'Top 10', value: 'top10' }
      ], required: true }
    ],
    output_type: 'text',
    is_premium: true,
    created_at: new Date().toISOString()
  },
  {
    id: '13',
    name: 'TikTok Viral Series Planner',
    description: 'Plan a series of related TikToks to build an audience on autopilot.',
    category: 'Video',
    icon: 'Zap',
    prompt_template: 'Plan a 5-part TikTok series for {{business_name}} about {{theme}}. For each part, provide a hook and a short script concept.',
    input_fields: [
      { name: 'business_name', label: 'Business/Channel Name', type: 'text', required: true },
      { name: 'theme', label: 'Series Theme', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  },
  {
    id: '14',
    name: 'SEO Article Brief Generator',
    description: 'Generate comprehensive article briefs that RankPill can use to write content.',
    category: 'SEO',
    icon: 'FileText',
    prompt_template: 'Create a detailed SEO article brief for the keyword "{{target_keyword}}". Include H1, H2 structure, target audience, and key points to cover for maximum search visibility.',
    input_fields: [
      { name: 'target_keyword', label: 'Target Keyword', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: true,
    created_at: new Date().toISOString()
  },
  {
    id: '15',
    name: 'Semantic Keyword Expander',
    description: 'Find LSI and semantic keywords to improve your content depth.',
    category: 'SEO',
    icon: 'Search',
    prompt_template: 'Generate a list of 15 semantic and LSI keywords related to {{main_keyword}} to help rank higher on Google and ChatGPT search.',
    input_fields: [
      { name: 'main_keyword', label: 'Main Keyword', type: 'text', required: true }
    ],
    output_type: 'text',
    is_premium: false,
    created_at: new Date().toISOString()
  }
];

