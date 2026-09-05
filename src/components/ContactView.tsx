import React, { useState, useRef } from 'react';
import { ViewType, ProjectScope } from '../types';
import { Mail, MessageSquare, Copy, Check, MapPin, Phone, ArrowRight, Linkedin, AlertCircle, RefreshCw } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ContactViewProps {
  onNavigate: (view: ViewType) => void;
}

const PROJECT_SCOPE_OPTIONS: ProjectScope[] = [
  'AI Campaign',
  'Visual Storytelling',
  'AI Image Generation',
  'AI Video',
  'Branding / Creative Design',
  'Social Media Creative',
  'Prompt Engineering',
  'Creative Consultation',
  'Other',
];

interface FormFields {
  name: string;
  email: string;
  projectScope: ProjectScope;
  projectDetails: string;
  botcheck: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectScope?: string;
  projectDetails?: string;
  general?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate: _onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    projectScope: 'AI Campaign',
    projectDetails: '',
    botcheck: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Input refs for focus management
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const scopeSelectRef = useRef<HTMLSelectElement>(null);
  const detailsTextareaRef = useRef<HTMLTextAreaElement>(null);

  const recipientEmail = 'mathesh.aks@gmail.com';
  const phone = '+919789611569';
  const displayPhone = '+91 97896 11569';
  const linkedInUrl = 'https://www.linkedin.com/in/mathesh-a-k-s-1333241b9';
  const whatsAppUrl = 'https://wa.me/919789611569';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleWhatsAppClick = () => {
    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  // Client-side validation
  const validateForm = (data: FormFields): FormErrors => {
    const newErrors: FormErrors = {};

    const trimmedName = data.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Your name is required';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const trimmedEmail = data.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address (e.g. director@brand.com)';
    }

    const trimmedDetails = data.projectDetails.trim();
    if (!trimmedDetails) {
      newErrors.projectDetails = 'Project brief / overview is required';
    } else if (trimmedDetails.length < 10) {
      newErrors.projectDetails = 'Please provide a few more details (minimum 10 characters)';
    }

    return newErrors;
  };

  const handleFieldChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleBlur = (field: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateForm(formData);
    if (validationErrors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validationErrors[field as keyof FormErrors],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      projectScope: true,
      projectDetails: true,
    });

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      if (validationErrors.name) {
        nameInputRef.current?.focus();
      } else if (validationErrors.email) {
        emailInputRef.current?.focus();
      } else if (validationErrors.projectDetails) {
        detailsTextareaRef.current?.focus();
      }
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          projectScope: formData.projectScope,
          projectDetails: formData.projectDetails.trim(),
          botcheck: formData.botcheck,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || 'Your brief could not be dispatched at this moment. Please try again or email directly.'
        );
      }

      setIsSuccess(true);
      setSubmitError(null);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setSubmitError(
        err.message || 'Your message could not be sent right now. Please email mathesh.aks@gmail.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectScope: 'AI Campaign',
      projectDetails: '',
      botcheck: '',
    });
    setTouched({});
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
  };

  return (
    <div id="contact-view-container" className="w-full pt-[75px] pb-20 px-5 md:px-20 bg-[#fbfbf9] text-[#141414]">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="mb-12 md:mb-16 border-b border-[#e5e2da] pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.25em] block mb-2.5 font-semibold">
                06 / DIRECT ENGAGEMENT
              </span>
              <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#141414]">
                INITIATE AN <span className="font-serif italic font-normal text-[#6b654c]">EXECUTIVE BRIEF.</span>
              </h1>
            </div>

            <div className="hidden sm:flex items-center gap-3 border border-[#e5e2da] bg-[#ffffff] px-4 py-2.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
              <span className="font-jetbrains text-xs text-[#141414] font-semibold">ACCEPTING Q1/Q2 COMMISSIONS</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Founder Channels & Perspective (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal variant="fade-up" delay={100}>
              <div className="space-y-4">
                <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#141414]">
                  High-Impact Visual Direction for Serious Brands
                </h3>
                <p className="font-grotesk text-base text-[#5c5950] leading-relaxed">
                  Whether you are planning an AI-directed commercial campaign, establishing high-fidelity character continuity, or scaling your prompt engineering workflows, I work directly with founders, creative directors, and brand teams.
                </p>
              </div>
            </ScrollReveal>

            {/* Direct Contact Cards */}
            <ScrollReveal variant="fade-up" delay={150}>
              <div className="space-y-3">
                {/* Email Direct */}
                <div className="p-4 bg-[#ffffff] border border-[#e5e2da] flex items-center justify-between group hover:border-[#dad6cc] transition-colors shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#f4f2eb] border border-[#e5e2da] text-[#6b654c]">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-wider block">
                        Official Direct Email
                      </span>
                      <a
                        href={`mailto:${recipientEmail}`}
                        className="font-jetbrains text-xs sm:text-sm text-[#141414] hover:text-[#6b654c] transition-colors font-medium break-all"
                      >
                        {recipientEmail}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-[#827e74] hover:text-[#141414] hover:bg-[#f4f2eb] transition-colors cursor-pointer border border-transparent hover:border-[#e5e2da]"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-[#6b654c]" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone & Direct Dial */}
                <div className="p-4 bg-[#ffffff] border border-[#e5e2da] flex items-center justify-between group hover:border-[#dad6cc] transition-colors shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#f4f2eb] border border-[#e5e2da] text-[#6b654c]">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-wider block">
                        Direct Phone / Call
                      </span>
                      <a
                        href={`tel:${phone}`}
                        className="font-jetbrains text-xs sm:text-sm text-[#141414] hover:text-[#6b654c] transition-colors font-medium"
                      >
                        {displayPhone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-[#827e74] hover:text-[#141414] hover:bg-[#f4f2eb] transition-colors cursor-pointer border border-transparent hover:border-[#e5e2da]"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check size={16} className="text-[#6b654c]" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* WhatsApp Quick Connect */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#ffffff] border border-[#e5e2da] flex items-center justify-between group hover:border-[#dad6cc] transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#f4f2eb] border border-[#e5e2da] text-[#6b654c]">
                      <MessageSquare size={16} />
                    </div>
                    <div>
                      <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-wider block">
                        Instant Messaging (WhatsApp)
                      </span>
                      <span className="font-jetbrains text-xs sm:text-sm text-[#141414] group-hover:text-[#6b654c] transition-colors font-medium">
                        Chat on WhatsApp ({displayPhone})
                      </span>
                    </div>
                  </div>

                  <ArrowRight size={16} className="text-[#827e74] group-hover:translate-x-1 transition-transform" />
                </a>

                {/* LinkedIn Profile */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#ffffff] border border-[#e5e2da] flex items-center justify-between group hover:border-[#dad6cc] transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#f4f2eb] border border-[#e5e2da] text-[#6b654c]">
                      <Linkedin size={16} />
                    </div>
                    <div>
                      <span className="font-jetbrains text-[10px] text-[#827e74] uppercase tracking-wider block">
                        Professional Network
                      </span>
                      <span className="font-jetbrains text-xs sm:text-sm text-[#141414] group-hover:text-[#6b654c] transition-colors font-medium break-all">
                        linkedin.com/in/mathesh-a-k-s-1333241b9
                      </span>
                    </div>
                  </div>

                  <ArrowRight size={16} className="text-[#827e74] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

            {/* Geographical Base & Turnaround */}
            <ScrollReveal variant="fade-up" delay={200}>
              <div className="p-5 border border-[#e5e2da] bg-[#ffffff] space-y-3 shadow-sm">
                <div className="flex items-center gap-2 font-jetbrains text-xs text-[#141414] font-semibold">
                  <MapPin size={14} className="text-[#6b654c]" />
                  <span>PRIMARY HUBS: MADURAI · CHENNAI, TAMIL NADU</span>
                </div>
                <p className="font-grotesk text-xs text-[#5c5950] leading-relaxed">
                  Available for global remote engagements, creative residencies, and hybrid on-site workshops across India and internationally.
                </p>
                <div className="pt-2 border-t border-[#e5e2da] flex items-center justify-between font-jetbrains text-[10px] text-[#827e74]">
                  <span>RESPONSE SLA</span>
                  <span className="text-[#141414] font-semibold">UNDER 24 HOURS</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Executive Project Brief Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-up" delay={150}>
              <div className="border border-[#e5e2da] p-6 sm:p-10 bg-[#ffffff] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                {isSuccess ? (
                  /* Success Confirmation State */
                  <div className="py-8 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#f4f2eb] border border-[#6b654c] flex items-center justify-center text-[#6b654c]">
                      <Check size={28} />
                    </div>

                    <div className="space-y-2">
                      <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-widest font-semibold">
                        BRIEF TRANSMITTED SUCCESSFULLY
                      </span>
                      <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[#141414]">
                        Thank you, {formData.name}.
                      </h3>
                      <p className="font-grotesk text-sm text-[#5c5950] max-w-md mx-auto">
                        Your project overview has been received directly. I will review the scope and reach out to {formData.email} within 24 hours.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#e5e2da] flex justify-center">
                      <button
                        onClick={handleResetForm}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] text-[#ffffff] font-jetbrains text-xs uppercase tracking-wider hover:bg-[#33302a] transition-colors cursor-pointer"
                      >
                        <RefreshCw size={13} />
                        <span>Submit Another Brief</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Executive Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <span className="font-jetbrains text-xs text-[#6b654c] uppercase tracking-[0.2em] block mb-1 font-semibold">
                        PROJECT INTAKE
                      </span>
                      <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#141414]">
                        Submit a Project Specification
                      </h3>
                    </div>

                    {/* Honeypot field (hidden from genuine users) */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="botcheck"
                        tabIndex={-1}
                        value={formData.botcheck}
                        onChange={(e) => handleFieldChange('botcheck', e.target.value)}
                        autoComplete="off"
                      />
                    </div>

                    {/* General error message */}
                    {submitError && (
                      <div className="p-3.5 bg-[#fef2f2] border border-[#fecaca] text-[#991b1b] flex items-start gap-2 text-xs font-grotesk">
                        <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block font-jetbrains text-xs uppercase tracking-wider text-[#141414] mb-2 font-semibold"
                        >
                          Full Name <span className="text-[#b91c1c]">*</span>
                        </label>
                        <input
                          ref={nameInputRef}
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleFieldChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          placeholder="e.g. Vikramaditya Rathore"
                          className={`w-full px-4 py-3 bg-[#fbfbf9] border text-sm text-[#141414] placeholder-[#a8a29e] transition-colors outline-none ${
                            touched.name && errors.name
                              ? 'border-[#b91c1c] focus:border-[#b91c1c]'
                              : 'border-[#e5e2da] focus:border-[#141414] focus:bg-[#ffffff]'
                          }`}
                        />
                        {touched.name && errors.name && (
                          <p className="mt-1.5 font-grotesk text-xs text-[#b91c1c]">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block font-jetbrains text-xs uppercase tracking-wider text-[#141414] mb-2 font-semibold"
                        >
                          Professional Email <span className="text-[#b91c1c]">*</span>
                        </label>
                        <input
                          ref={emailInputRef}
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleFieldChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          placeholder="e.g. vikram@studio.com"
                          className={`w-full px-4 py-3 bg-[#fbfbf9] border text-sm text-[#141414] placeholder-[#a8a29e] transition-colors outline-none ${
                            touched.email && errors.email
                              ? 'border-[#b91c1c] focus:border-[#b91c1c]'
                              : 'border-[#e5e2da] focus:border-[#141414] focus:bg-[#ffffff]'
                          }`}
                        />
                        {touched.email && errors.email && (
                          <p className="mt-1.5 font-grotesk text-xs text-[#b91c1c]">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Scope Select */}
                    <div>
                      <label
                        htmlFor="contact-scope"
                        className="block font-jetbrains text-xs uppercase tracking-wider text-[#141414] mb-2 font-semibold"
                      >
                        Project Scope / Engagement Type <span className="text-[#b91c1c]">*</span>
                      </label>
                      <select
                        ref={scopeSelectRef}
                        id="contact-scope"
                        value={formData.projectScope}
                        onChange={(e) => handleFieldChange('projectScope', e.target.value as ProjectScope)}
                        className="w-full px-4 py-3 bg-[#fbfbf9] border border-[#e5e2da] text-sm text-[#141414] transition-colors outline-none focus:border-[#141414] focus:bg-[#ffffff]"
                      >
                        {PROJECT_SCOPE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#ffffff] text-[#141414]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Details Textarea */}
                    <div>
                      <label
                        htmlFor="contact-details"
                        className="block font-jetbrains text-xs uppercase tracking-wider text-[#141414] mb-2 font-semibold"
                      >
                        Project Brief &amp; Strategic Objectives <span className="text-[#b91c1c]">*</span>
                      </label>
                      <textarea
                        ref={detailsTextareaRef}
                        id="contact-details"
                        rows={5}
                        required
                        value={formData.projectDetails}
                        onChange={(e) => handleFieldChange('projectDetails', e.target.value)}
                        onBlur={() => handleBlur('projectDetails')}
                        placeholder="Outline the brand background, target aesthetic, timeline, and primary deliverables..."
                        className={`w-full px-4 py-3 bg-[#fbfbf9] border text-sm text-[#141414] placeholder-[#a8a29e] transition-colors outline-none resize-y ${
                          touched.projectDetails && errors.projectDetails
                            ? 'border-[#b91c1c] focus:border-[#b91c1c]'
                            : 'border-[#e5e2da] focus:border-[#141414] focus:bg-[#ffffff]'
                        }`}
                      ></textarea>
                      {touched.projectDetails && errors.projectDetails && (
                        <p className="mt-1.5 font-grotesk text-xs text-[#b91c1c]">{errors.projectDetails}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#141414] text-[#ffffff] font-jetbrains text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#33302a] transition-all cursor-pointer shadow-[0_2px_10px_rgba(20,20,20,0.08)] ${
                          isSubmitting ? 'opacity-70 cursor-wait' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw size={14} className="animate-spin" />
                            <span>TRANSMITTING BRIEF...</span>
                          </>
                        ) : (
                          <>
                            <span>DISPATCH PROJECT BRIEF</span>
                            <ArrowRight size={14} />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="font-jetbrains text-[11px] text-[#827e74] text-center">
                      Confidentiality guaranteed. All intellectual property remains protected.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
