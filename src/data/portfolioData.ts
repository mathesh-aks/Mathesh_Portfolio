import { CaseStudy, ExperienceItem, GalleryItem, PromptRecipe, StackCategory } from '../types';

export const PORTRAIT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBD5f-B6efTZNrxZA0L7hQv9iA1ybqZ6K3VMIsd8bKY-0iNi5XDIOmvvzE5bBKVmt75n8vUefypNKnuodYvDbodSrZwT1eMh4m7r8vvpPtxuXDJL1bLeIRHGDEJyXAe23n0JbYB8CG3e7buvC_XGT4OPcTC_SOXpXlHoXDpLC2vLgJoMAUI6u1rzS4pzG3Y2gEH8PU9Vd3DwtjckXDm1BW2W_JNqnS-chQF8nTuUMWLj_OAPlBSthYvPzWFKH7fPz57eA';

export const JKANS_HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCLETx1gkI_rSW2VmWdmHpi2ZzVzR3-AA3F_9ZEDttnCuyUuUMFSZvco9R7qZ1v_XylmkLI-3AYWt4qbq065firE1aeAncuep5yYc3hdtSh5PmE6XxY8WfY6bB2t6VWToM7JDa1IjLX36z9N3qdrTAQyWfPl5EPAU4lhi8R_SD-BUW5FMO26xXaErsPUXNRs9ic2FEJ_fuZUxVK9cjuBLGf_mOW14DlsyPgrT1aMxAX6BuhCtMFAQ1_kUYDChpJFGLJ5Q';

export const TEMPT_HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCCCFF87MFg6EDh2uU-RP-D1IGzrnY5yvaJEpsM-URJuQhGaV2Uvg7LRC-dvolO9YYNo-PgoAnGCpmNgQYHbWj8Tgbnz4gLhzalhuaC5Yq1YGho4K206QQpNQAKjp7ojMZ7qdGMFMlMpwJXtt1J3QKuXVVl9-cWon7cFmDJZp3L_2b1eaCz0-GXAibMPY3HekJaEzEqNNmsMfEb71Q7PUAqmh1KBcWo8HKgCA-UygJ29TggVjSMqQDGqJQjfZReioYlTw';

export const JKANS_GALLERY: GalleryItem[] = [
  {
    id: 'rajini-naan',
    title: 'Legends Choose Flavour',
    characterOrStar: 'Superstar Rajinikanth',
    dishName: 'Butter Naan & Chicken Curry',
    tagline: 'Authentic. Timeless. Supreme Taste.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1XaI9_oA1L-lmu3o8VWO2Dc1G5jyORtHkQQPZxc_hQf58KtM6tZdLx3CtFawMGx-q_oKpkG8gMDMv7moL-57XZ1_mWJF-LXk8gtI-cWMtLH8k88XQyYxlBrZPVU76N5sshOb5zcVO1pVhidqBVq35qyRN0Xf71bkRGp1NO3NjvHdlorEcbE23eD8aVhWxlW1qCIEFjkvYpnT4axq_rMZ9PXxQPsracn05rkjRL5FfEGjG5CPsDnU8-w9y3p_a7kr7Sg',
    aspect: 'portrait',
    promptMetadata: {
      model: 'Midjourney v6.1 + LoRA Tuning',
      lighting: 'Golden hour dramatic rim light, moody copper undertones',
      aspectRatio: '9:16',
      styleKeywords: ['Cinematic Commercial', 'Charcoal & Amber', 'Food Photography', 'Kollywood Persona', '35mm anamorphic'],
      corePrompt: 'Cinematic commercial poster of iconic South Indian superstar breaking crisp butter naan with copper bowl of steaming rich chicken curry, warm atmospheric steam, rich depth of field, high-end food typography, 8k octan render style'
    }
  },
  {
    id: 'kamal-schezwan',
    title: 'A Taste Worth Remembering',
    characterOrStar: 'Ulaga Nayagan Kamal Haasan',
    dishName: 'JKANS Schezwan Delicacy',
    tagline: 'Bold. Artistic. Memorable.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDt6qnpNw7ex45IYTC0qIlJrbkaaPkOrHOc9cCGBMuBi9XqzEo5O4-qD0fmE_I0VU5dlHlVKOYfGrJDvx6JKFg2W06Q-C4JoFrLPUWQMojW70Kh-EvoDtAQTBU7qxNaCFf-Bn4hCjFycpDc6tTlufvME6ZE-XMpZlevL2ggsLo1l7SWFiGu7-Da9Bt_ROx4pQkzaHejRNnkthwBWYHXXbuK6Sar0fI3FDbCWJTT-dzhzLxc3ubjFZXp0gDrA1ljAvsZ0A',
    aspect: 'landscape',
    promptMetadata: {
      model: 'FLUX.1 Pro with Custom Prompt Weighting',
      lighting: 'Warm key light, studio shadow gradient',
      aspectRatio: '16:9',
      styleKeywords: ['Refined Master', 'Gourmet Spoon', 'Subtle Specular Highlights', 'Editorial Portrait'],
      corePrompt: 'Editorial food portrait of distinguished veteran actor tasting gourmet schezwan fried rice with silver spoon, intense expressive gaze, subtle steam, warm rim lighting on dark charcoal backdrop, commercial branding'
    }
  },
  {
    id: 'siva-biriyani',
    title: 'A Feast Worth Remembering',
    characterOrStar: 'Sivakarthikeyan',
    dishName: 'JKANS Chicken Thokku Biriyani',
    tagline: 'Bold. Authentic. Satisfying.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGcS94h883RRaUrhQkkGRWebE5T-Fmf_p667Hk3qErIrTsIjBB2KeAE2YmtkRP8SLaKX7YRQ-smyDDm37nz96fQnCxM_EvbdsfD78c6QO_YNFe2aPTC76ns_N7rY6bXIExRx30laN_0Y-CqR_RCA8qBHX31SoHYhkyzAB6_aVHh8GCujxfSROmuXndh3RnXaNJF9iwjXRoOfXEoTvAzP19T_BmESxFFZR5FfLmc7hZbHblhcQsd0V3kB7btEq9dEt_Wg',
    aspect: 'square',
    promptMetadata: {
      model: 'Midjourney v6.1',
      lighting: 'Top-down softbox, glowing saffron reflections',
      aspectRatio: '4:5',
      styleKeywords: ['Madurai Flavors', 'Handi Presentation', 'Warm Tones', 'Character Nostalgia'],
      corePrompt: 'High quality advertising poster of charming South Indian actor beside traditional brass handi of authentic Chicken Thokku Biryani with caramelized onions and aromatic spices, studio commercial grade lighting'
    }
  },
  {
    id: 'vijay-hariyali',
    title: 'Every Bite Is Worth The Wait',
    characterOrStar: 'Thalapathy Vijay',
    dishName: 'JKANS Hariyali Chicken',
    tagline: 'Fresh. Smoky. Flavourful.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwIJ8EF2yAOJHOfw8PEp2rmiB1JpEZbi8-qwCkn0EhjK2eoFFI6eh29fVYgZpBlwyqpjEcfVQhMUTqaSczNku0jWfEuSiu2PtwolIx3JE5XfJei_Rk0rppKceGhx4oNh6kCWaIk2wIgwoufejD0YdQUjETdfxlZLyiWxTYth5Y1yO65yulEYaxszlsO_7GcPoHj6iDW82DmY9bbJSS7fmO7Uf-ykIr9NjMlZoarQhdQSQe_9I03S-vtIXmFMbWlqw0sg',
    aspect: 'square',
    promptMetadata: {
      model: 'Midjourney v6.1 + Inpainting Touchups',
      lighting: 'Emerald green edge glow, crisp directional spotlight',
      aspectRatio: '4:5',
      styleKeywords: ['Hero Charisma', 'Herb Garnish', 'Mint Chutney', 'Charcoal Tabletop'],
      corePrompt: 'Commercial studio poster of charismatic Kollywood hero seated in black shirt with platter of sizzling green mint hariyali chicken skewers, mint chutney bowl, soft smoke wisps, premium brand layout'
    }
  },
  {
    id: 'dhanush-dragon',
    title: 'One Bite. Endless Cravings.',
    characterOrStar: 'Dhanush',
    dishName: 'JKANS Dragon Chicken',
    tagline: 'Bold. Fiery. Irresistible.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDvv2BlSNDEDYB-hiqaruokBT_b1BvXI-oy1bWsuEMlkjnNsmtVAOMXhnmDBZQxMGu9WsVftKAazikzNYPMsP233HvmKmx8p2UtwfKPRnv7gDTx3NqGAOcuQ_49aVGfi3B0WKwjidCzUIdXaxzIxLvNmMF0uVTnYV-qNkdOhd6QPsZKGeeFXU1dDOJkbNhK7E5ag1nDdE_4342f-r0OCi6z1PIosCpqT6SKG8nMVHxJrUucvc6pBQOI5Ao1-Hb6tfyaw',
    aspect: 'square',
    promptMetadata: {
      model: 'FLUX.1 Pro',
      lighting: 'Crimson fiery back-fill, high contrast key',
      aspectRatio: '1:1',
      styleKeywords: ['Fiery Red', 'Crispy Glaze', 'Intense Relish', 'Dark Food Styling'],
      corePrompt: 'Vibrant commercial food ad featuring expressive actor eating crunchy spicy dragon chicken with red chilies and sesame seeds, gloss texture, dramatic lighting, crisp typographic alignment'
    }
  },
  {
    id: 'suriya-feast',
    title: "Madurai's Favourite Feast",
    characterOrStar: 'Suriya',
    dishName: 'Dum Chicken Biryani',
    tagline: 'Slow-Cooked. Perfectly Layered. Unforgettable.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGb_c3jVVghJdhKmQWdRn_711roewFeYKRBb2Fgh-O-Dh5R7S4KiuBKwODiGfYYGo9PgAFvCZFKT6EZbm978LbqgdMbYDOHEhiJcFk6TQ9q-fenQu5L39d45upiqE3oxY6soJH-EdSdvUdVcxPxf5K86mA-DyegXj3rjWKqNbvkW8N27So5ThRyZG-_xDsoLSjLByVt_KWPpg-QPZsGd7fGYs1kif_Dp_VtnGmb9e7fJWjg-446mEpz2vEtcAPXPQtVw',
    aspect: 'square',
    promptMetadata: {
      model: 'Midjourney v6.1',
      lighting: 'Natural golden sunlight through window with brass bounce',
      aspectRatio: '1:1',
      styleKeywords: ['Joyful Smile', 'Steaming Dum Pot', 'Rich Basmati Rice', 'Heritage Madurai'],
      corePrompt: 'Warm commercial ad with cheerful handsome actor in ivory kurta serving layered chicken dum biryani from traditional brass degchi, golden basmati grains, whole spices, inviting atmosphere'
    }
  },
  {
    id: 'karthi-roll',
    title: 'Every Roll Tells A Story',
    characterOrStar: 'Karthi',
    dishName: 'Signature Chicken Roll',
    tagline: 'Loaded. Fresh. Satisfying.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGQDMH6BHS5ArckVWU4QBkwQPluU-jmLTe9gppI4coCNwBfbCipZnbHRjqEeFCq1UypQurQzjSlobfs9PfYmAQzwhkFmELn9ZLArYMbgGQCLMGZFoSAISQRnWv50z4dlSFQAE8PC170x5gO9E0QaMFI91_nMFYh722x1Qhu0m96LD2e1E-MsjILIlXoT4z4zvkTTenB2EmjNiwOjDOoeMpQ7TbV_Bqacai2KbtvOcjnaoLj5mYJHAJwf_J9ddwBiIQqA',
    aspect: 'square',
    promptMetadata: {
      model: 'Midjourney v6.1 + Custom Color Grading',
      lighting: 'Soft directional daylight, clean background separation',
      aspectRatio: '1:1',
      styleKeywords: ['Street Gourmet', 'Flaky Parotta Wrap', 'Crisp Salad', 'Engaging Glance'],
      corePrompt: 'Editorial food poster of actor holding warm grilled chicken roll with mint sauce, cut cross-section displaying tender spiced chicken chunks and crispy onions, clean typography layout'
    }
  }
];

export const JKANS_CASE_STUDY: CaseStudy = {
  id: 'jkans',
  number: '01',
  category: 'AI CREATIVE MARKETING',
  title: 'JKANS FOODS',
  subtitle: 'WHAT IF FOOD COULD FEEL CINEMATIC?',
  summary:
    'Transforming traditional food advertising into character-driven storytelling. By leveraging AI creative direction, we elevated a local Madurai food brand into a premium, cinematic experience that resonates with cultural nostalgia and high-end aesthetics.',
  client: 'JKANS Foods Madurai',
  year: '2025',
  heroImage: JKANS_HERO_IMAGE,
  accentColor: '#D4AF37',
  challenge:
    'Regional food branding often suffers from repetitive, flat stock imagery that fails to capture the soul and cultural appetite of Tamil Nadu consumers. JKANS Foods needed a landmark visual campaign that would stop social media feeds, spark massive local conversation in Madurai, and establish instant emotional prestige.',
  idea:
    'What if Kollywood cinema giants were the culinary patrons of authentic local dishes? By pairing beloved cinema archetypes with steaming, hyper-detailed signature items (from Thokku Biryani to Flame-charred Butter Naan), we turned everyday food menus into blockbuster cinematic posters.',
  executionSteps: [
    {
      title: 'Character Archetype Architecture',
      description: 'Defined distinct emotional notes for 7 iconic cinema personalities paired with flavor profiles.',
      tool: 'Prompt Strategy & Narrative Framing'
    },
    {
      title: 'Hyper-Realistic Food Texture Synthesis',
      description: 'Used customized Midjourney & FLUX weighting for specular grease, rising aromatic steam, and crispy textures.',
      tool: 'Midjourney v6.1 + LoRA weights'
    },
    {
      title: 'Editorial Typography & Brand Integration',
      description: 'Engineered sharp brand headers, Tamil cultural hooks, and balanced negative space for social-first delivery.',
      tool: 'Photoshop & Typography Systems'
    }
  ],
  palette: ['#0A0A0A', '#D4AF37', '#E4E2E1', '#8E9192', '#00F5FF'],
  gallery: JKANS_GALLERY
};

export const TEMPT_CASE_STUDY: CaseStudy = {
  id: 'tempt',
  number: '02',
  category: 'AI-POWERED SPORTS CULTURE CAMPAIGN',
  title: 'TEMPT GAMING CAFE',
  subtitle: 'ONE DRINK. A WHOLE STADIUM OF ENERGY.',
  summary:
    'An AI-assisted visual campaign exploring the intersection of football culture, gaming, and social-first brand storytelling.',
  client: 'Tempt Gaming Cafe & Sports Lounge',
  year: '2025',
  heroImage: TEMPT_HERO_IMAGE,
  accentColor: '#a3e635',
  challenge:
    "The challenge was to seamlessly integrate the Tempt Gaming Cafe brand into the high-energy, passionate world of football culture. We needed visuals that didn't just show a drink, but placed it at the center of the fan experience.",
  idea:
    'The core visual concept uses the iconic bright green Tempt drink as a recurring hero element—a beacon across stadiums, held by fans, and present in iconic sports moments, acting as a visual anchor connecting gaming culture to live sports.',
  executionSteps: [
    {
      title: 'Stadium Environment Generation',
      description: 'Synthesized bird-eye floodlit arena views, neon pitch reflections, and electric stadium crowd atmospheres.',
      tool: 'Midjourney v6.1 + Camera Control'
    },
    {
      title: 'Signature Asset Anchor',
      description: 'Maintained exact luminescence and translucent glass aesthetics for the signature acid-green energy blend.',
      tool: 'ComfyUI ControlNet & Inpainting'
    },
    {
      title: 'Social & Digital Campaign Rollout',
      description: 'Generated matchday countdown cards, esports tournament banners, and motion teaser storyboards.',
      tool: 'Prompt Architecture + Motion'
    }
  ],
  palette: ['#0A0A0A', '#a3e635', '#00F5FF', '#1B1C1C', '#E4E2E1'],
  gallery: []
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2026 — PRESENT',
    isCurrent: true,
    role: 'AI Creative Designer',
    company: 'JNT Marketing',
    focus: 'AI-powered marketing, branding, visuals',
    description:
      'Leading generative AI visual pipelines for multi-brand social campaigns, art direction, high-impact marketing collateral, and character-driven commercial storytelling.',
    deliverables: ['Campaign Art Direction', 'Brand Strategy Synthesis', 'Generative Concept Decks']
  },
  {
    period: 'NOV 2025 — JAN 2026',
    role: 'Prompt Engineer',
    company: 'Beeyoond Gaming',
    focus: 'Prompt engineering for image/video/text',
    description:
      'Engineered structured prompting frameworks for gaming asset concepts, stylized environment rendering, motion keyframes, and video generation workflows.',
    deliverables: ['Custom Prompt Pipelines', 'Asset Style Consistency', 'Video Model Orchestration']
  },
  {
    period: 'JUN 2025 — SEP 2025',
    role: 'Junior BDE',
    company: 'Dot Com Infoway',
    focus: 'B2B leads, outreach',
    description:
      'Drove targeted business development, technology solution positioning, client outreach, and market research for digital transformation initiatives.',
    deliverables: ['Client Communication', 'Strategic Outreach', 'Digital Solution Mapping']
  }
];

export const CREATIVE_STACK: StackCategory[] = [
  {
    title: 'Creative Direction',
    items: ['Concept Generation', 'Visual Strategy', 'Art Direction', 'Cultural Resonance', 'Campaign Architecture'],
    description: 'Bridging human cultural insight with high-end editorial aesthetics to create memorable brand stories.'
  },
  {
    title: 'AI Creative',
    highlightColor: '#00F5FF',
    items: ['Prompt Engineering', 'Midjourney v6.1', 'FLUX.1 Pro', 'Stable Diffusion / ComfyUI', 'Runway Gen-3', 'Character Consistency'],
    description: 'Transforming ideas into precise mathematical prompts with strict lighting, lens, and textural control.'
  },
  {
    title: 'Visual & Motion Design',
    items: ['Adobe Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Spline 3D', 'Editorial Typography'],
    description: 'Post-generation precision, color grading, typographic layout, and seamless brand cohesion.'
  },
  {
    title: 'Strategic Growth',
    items: ['Social-First Distribution', 'B2B Outreach', 'Audience Engagement', 'Brand Positioning', 'Creative Tech Prototyping'],
    description: 'Ensuring that every aesthetic experiment drives tangible commercial and engagement impact.'
  }
];

export const PROMPT_RECIPES: PromptRecipe[] = [
  {
    id: 'kollywood-cinematic',
    title: 'Cinematic Food Commercial with Star Archetype',
    category: 'Commercial Food',
    model: 'Midjourney v6.1',
    basePrompt:
      'Editorial commercial photography of [Star Archetype] holding a piping hot [Traditional Dish] in copper dish, warm saffron and charcoal lighting, cinematic shallow depth of field, rising aromatic steam, crisp specular reflection on food texture',
    modifiers: [
      '35mm anamorphic lens',
      'f/1.8 aperture',
      'copper and charcoal color grading',
      'commercial advertising standard',
      'hyper-realistic food styling',
      '8k octan render'
    ],
    parameters: {
      aspectRatio: '--ar 4:5',
      stylize: 250,
      chaos: 10
    },
    sampleImageUrl: JKANS_GALLERY[0].imageUrl
  },
  {
    id: 'stadium-energy',
    title: 'Electric Arena Sports Beverage Hero',
    category: 'Sports Energy',
    model: 'FLUX.1 Pro',
    basePrompt:
      'Ultra high angle bird-eye view of massive illuminated football stadium during championship final, glowing acid green neon energy drink held in foreground with condensation droplets, electric crowd floodlights, motion blur in pitch',
    modifiers: [
      'shot on Hasselblad H6D',
      'acid-green luminescence (#a3e635)',
      'stadium floodlight flares',
      'cinematic atmosphere',
      'volumetric smoke'
    ],
    parameters: {
      aspectRatio: '16:9',
      guidanceScale: 7.5,
      steps: 40
    },
    sampleImageUrl: TEMPT_HERO_IMAGE
  },
  {
    id: 'cyber-editorial',
    title: 'Kinetic Noir Technical Portrait',
    category: 'Cinematic Portrait',
    model: 'Midjourney v6.1',
    basePrompt:
      'Minimalist editorial monochrome portrait of creative technologist, deep black background #0A0A0A, soft electric cyan rim lighting on hair, sharp high-contrast lighting, thoughtful gaze, technical corner markers',
    modifiers: [
      'Kodak Tri-X 400 grain',
      'studio strobe key',
      'cyberpunk minimalism',
      'clean sharp focus'
    ],
    parameters: {
      aspectRatio: '--ar 3:4',
      stylize: 150
    },
    sampleImageUrl: PORTRAIT_IMAGE
  }
];
