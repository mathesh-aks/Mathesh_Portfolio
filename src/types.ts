export type ViewType = 
  | 'home'
  | 'work'
  | 'jkans'
  | 'tempt'
  | 'about'
  | 'contact';

export interface GalleryItem {
  id: string;
  title: string;
  characterOrStar: string;
  dishName: string;
  tagline: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  promptMetadata: {
    model: string;
    lighting: string;
    aspectRatio: string;
    styleKeywords: string[];
    corePrompt: string;
  };
}

export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  client: string;
  year: string;
  heroImage: string;
  accentColor: string; // e.g. '#00F5FF' or '#a3e635' or '#D4AF37'
  challenge: string;
  idea: string;
  executionSteps: {
    title: string;
    description: string;
    tool: string;
  }[];
  palette: string[];
  gallery: GalleryItem[];
}

export interface ExperienceItem {
  period: string;
  isCurrent?: boolean;
  role: string;
  company: string;
  focus: string;
  description?: string;
  deliverables?: string[];
}

export interface StackCategory {
  title: string;
  highlightColor?: string;
  items: string[];
  description?: string;
}

export interface PromptRecipe {
  id: string;
  title: string;
  category: 'Cinematic Portrait' | 'Commercial Food' | 'Sports Energy' | 'Brand Identity';
  model: 'Midjourney v6.1' | 'FLUX.1 Pro' | 'SDXL Turbo';
  basePrompt: string;
  modifiers: string[];
  parameters: {
    aspectRatio: string;
    stylize?: number;
    chaos?: number;
    guidanceScale?: number;
    steps?: number;
  };
  sampleImageUrl: string;
}

export type ProjectScope =
  | 'AI Campaign'
  | 'Visual Storytelling'
  | 'AI Image Generation'
  | 'AI Video'
  | 'Branding / Creative Design'
  | 'Social Media Creative'
  | 'Prompt Engineering'
  | 'Creative Consultation'
  | 'Other';

export interface ContactFormData {
  name: string;
  email: string;
  projectScope: ProjectScope;
  projectDetails: string;
  honeypot?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  error?: string;
  details?: Record<string, string>;
  provider?: string;
}

