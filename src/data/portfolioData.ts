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
    'Transforming traditional food advertising into character-driven storytelling. By combining AI creative direction with Madurai culinary culture, we created a commercial visual series grounded in regional nostalgia and cinematic aesthetic.',
  client: 'JKANS Foods Madurai',
  year: '2025',
  heroImage: JKANS_HERO_IMAGE,
  accentColor: '#D4AF37',
  challenge:
    'Regional food branding frequently relies on generic stock imagery that fails to capture the cultural appetite of Tamil Nadu consumers. JKANS Foods needed an original visual campaign that would stand out on social media feeds, spark organic conversation in Madurai, and build immediate brand recall.',
  idea:
    'What if iconic Kollywood cinema archetypes were the culinary patrons of authentic local dishes? By pairing beloved cinema personalities with steaming signature items (from Thokku Biryani to Butter Naan), we transformed everyday food promotion into cinematic commercial posters.',
  executionSteps: [
    {
      title: 'Character Archetype Architecture',
      description: 'Established distinct emotional tones and lighting schemes for 7 cinema personalities paired with authentic flavor profiles.',
      tool: 'Prompt Strategy & Narrative Framing'
    },
    {
      title: 'Food Texture & Lighting Synthesis',
      description: 'Engineered prompt weights for specular highlights, rising steam, and appetizing textures using Midjourney v6.1 and FLUX.',
      tool: 'Midjourney v6.1 + LoRA Tuning'
    },
    {
      title: 'Editorial Typography & Brand Integration',
      description: 'Structured clean brand headers, cultural tagline hooks, and balanced negative space for social-first delivery.',
      tool: 'Photoshop & Typography Layout'
    }
  ],
  palette: ['#0A0A0A', '#D4AF37', '#E4E2E1', '#8E9192', '#c4a47c'],
  gallery: JKANS_GALLERY
};

export const TEMPT_CASE_STUDY: CaseStudy = {
  id: 'tempt',
  number: '02',
  category: 'SPORTS CULTURE CAMPAIGN',
  title: 'TEMPT GAMING CAFE',
  subtitle: 'ONE DRINK. A WHOLE STADIUM OF ENERGY.',
  summary:
    'An AI-assisted visual campaign exploring the intersection of football fan culture, gaming lounges, and social-first brand storytelling.',
  client: 'Tempt Gaming Cafe & Sports Lounge',
  year: '2025',
  heroImage: TEMPT_HERO_IMAGE,
  accentColor: '#a3e635',
  challenge:
    'The goal was to position Tempt Gaming Cafe inside the high-energy world of football fandom. The brand needed visuals that went beyond standard beverage product photography to place the drink directly at the center of live matchday energy.',
  idea:
    'The core visual concept positions the signature Tempt beverage as a visual beacon across floodlit stadiums—held by supporters, illuminated under arena lights, and anchoring the bridge between gaming culture and live sports fandom.',
  executionSteps: [
    {
      title: 'Stadium Environment Generation',
      description: 'Generated floodlit arena atmospheres, crowd depth of field, and pitch reflections with wide-angle camera prompts.',
      tool: 'Midjourney v6.1 + Prompt Engineering'
    },
    {
      title: 'Signature Asset Lighting',
      description: 'Preserved translucent luminescence and condensation detail on the signature green energy drink asset.',
      tool: 'ComfyUI Inpainting & Asset Tuning'
    },
    {
      title: 'Digital Campaign Assets',
      description: 'Created matchday countdown creatives, esports tournament banners, and social announcement layouts.',
      tool: 'Visual Direction & Motion Design'
    }
  ],
  palette: ['#0A0A0A', '#a3e635', '#c4a47c', '#1B1C1C', '#E4E2E1'],
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
      'Leading generative AI visual pipelines for multi-brand campaigns, art direction, marketing collateral, and character-driven commercial storytelling.',
    deliverables: ['Campaign Art Direction', 'Brand Strategy Synthesis', 'Generative Concept Decks']
  },
  {
    period: 'NOV 2025 — JAN 2026',
    role: 'Prompt Engineer',
    company: 'Beeyoond Gaming',
    focus: 'Prompt engineering for image/video/text',
    description:
      'Engineered structured prompting frameworks for gaming asset concepts, stylized environment rendering, and multimodal video generation workflows.',
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
    items: ['Concept Development', 'Visual Strategy', 'Art Direction', 'Cultural Resonance', 'Campaign Architecture'],
    description: 'Connecting cultural insight with clean editorial design to build memorable brand campaigns.'
  },
  {
    title: 'AI Creative & Prompts',
    highlightColor: '#c4a47c',
    items: ['Prompt Engineering', 'Midjourney v6.1', 'FLUX.1 Pro', 'Stable Diffusion / ComfyUI', 'Runway Gen-3', 'Character Consistency'],
    description: 'Structuring precise prompt parameters with controlled lighting, lens simulation, and texture rendering.'
  },
  {
    title: 'Visual & Motion Design',
    items: ['Adobe Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Spline 3D', 'Editorial Typography'],
    description: 'Post-generation refinement, color grading, typographic layout, and overall brand consistency.'
  },
  {
    title: 'Business & Growth',
    items: ['B2B Outreach', 'Social-First Distribution', 'Brand Positioning', 'Market Strategy', 'Client Communication'],
    description: 'Rooting creative experiments in business rationale, lead generation, and measurable brand growth.'
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
