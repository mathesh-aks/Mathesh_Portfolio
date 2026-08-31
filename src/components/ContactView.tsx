import React, { useState, useRef } from 'react';
import { ViewType, ProjectScope } from '../types';
import { Mail, MessageSquare, Copy, Check, Sparkles, MapPin, Globe, Phone, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';
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
    const text = encodeURIComponent(
      `Hi Mathesh, I'm reaching out through your portfolio regarding an AI Creative / Brand Campaign project!`
    );
    window.open(`https://wa.me/919789611569?text=${text}`, '_blank');
  };

  // Client-side validation
  const validateForm = (data: FormFields): FormErrors => {
    const newErrors: FormErrors = {};

    // Name check
    const trimmedName = data.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Your name is required';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email check
    const trimmedEmail = data.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address (e.g. anand@brand.com)';
    }

    // Project Details check
    const trimmedDetails = data.projectDetails.trim();
    if (!trimmedDetails) {
      newErrors.projectDetails = 'Project details are required';
    } else if (trimmedDetails.length < 10) {
      newErrors.projectDetails = 'Please provide a few more details (minimum 10 characters)';
    }

    return newErrors;
  };

  const handleFieldChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific error as user types if already touched
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

    // Mark all as touched
    setTouched({
      name: true,
      email: true,
      projectScope: true,
      projectDetails: true,
    });

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first erroneous field
      if (validationErrors.name) {
        nameInputRef.current?.focus();
      } else if (validationErrors.email) {
        emailInputRef.current?.focus();
      } else if (validationErrors.projectDetails) {
        detailsTextareaRef.current?.focus();
      }
      return;
    }

    // Clear previous errors & start loading
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
          botcheck: formData.botcheck, // Honeypot
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || 'Your enquiry could not be delivered right now. Please try again.'
        );
      }

      // Success
      setIsSuccess(true);
      setSubmitError(null);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setSubmitError(
        err.message || "Your enquiry couldn't be sent right now. Please try again."
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
    setErrors({});
    setTouched({});
    setSubmitError(null);
    setIsSuccess(false);
  };

  // Direct mailto fallback link with pre-filled content
  const directMailtoHref = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    `Portfolio Inquiry: ${formData.projectScope || 'AI Campaign'}`
  )}&body=${encodeURIComponent(
    `Hi Mathesh,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\nProject Scope: ${
      formData.projectScope
    }\n\nProject Details:\n${formData.projectDetails || ''}\n`
  )}`;

  return (
    <div id="contact-view-container" className="w-full pt-[80px] pb-20 px-5 md:px-20 bg-[#080808] text-[#e5e5e5]">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="mb-10 md:mb-12 border-b border-[#222222] pb-6 md:pb-8">
            <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block mb-2.5">
              07 / GET IN TOUCH
            </span>
            <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#e5e5e5]">
              LET'S BUILD SOMETHING <span className="font-serif italic font-normal text-[#c4a47c]">CINEMATIC.</span>
            </h1>
            <p className="font-grotesk text-base sm:text-lg text-[#888888] max-w-2xl mt-3 leading-relaxed">
              Available for AI creative direction, prompt engineering pipelines, high-impact brand
              campaigns, and visual storytelling collaborations.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Left: Quick Connect & Details (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Direct Phone Card */}
              <ScrollReveal variant="fade-up" delay={100}>
                <div className="border border-[#222222] p-6 bg-[#121212]">
                  <span className="font-jetbrains text-xs text-[#888888] uppercase block mb-2 tracking-wider">
                    DIRECT CALL / CONTACT
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`tel:${phone}`}
                      className="font-syne text-lg font-bold text-[#e5e5e5] hover:text-[#c4a47c] transition-colors flex items-center gap-2"
                    >
                      <Phone size={18} className="text-[#c4a47c]" />
                      <span>{displayPhone}</span>
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 border border-[#222222] bg-[#080808] text-[#c4a47c] hover:border-[#c4a47c] transition-colors cursor-pointer"
                      title="Copy Phone Number"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Direct Email Card */}
              <ScrollReveal variant="fade-up" delay={150}>
                <div className="border border-[#222222] p-6 bg-[#121212]">
                  <span className="font-jetbrains text-xs text-[#888888] uppercase block mb-2 tracking-wider">
                    DIRECT EMAIL INQUIRY
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${recipientEmail}`}
                      className="font-syne text-lg font-bold text-[#e5e5e5] hover:text-[#c4a47c] transition-colors flex items-center gap-2"
                    >
                      <Mail size={18} className="text-[#c4a47c]" />
                      <span>{recipientEmail}</span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 border border-[#222222] bg-[#080808] text-[#c4a47c] hover:border-[#c4a47c] transition-colors cursor-pointer"
                      title="Copy Email"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* WhatsApp Quick Chat */}
              <ScrollReveal variant="fade-up" delay={200}>
                <div className="border border-[#222222] p-6 bg-[#121212]">
                  <span className="font-jetbrains text-xs text-[#c4a47c] uppercase block mb-2 tracking-wider">
                    INSTANT MESSAGING
                  </span>
                  <p className="font-grotesk text-sm text-[#888888] mb-4">
                    For rapid briefs, project scoping, or instant WhatsApp inquiries directly at {displayPhone}.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-transparent border border-[#c4a47c] text-[#c4a47c] font-jetbrains text-xs uppercase tracking-widest hover:bg-[#c4a47c] hover:text-[#080808] transition-all cursor-pointer shadow-[0_0_15px_rgba(196,164,124,0.15)]"
                  >
                    <MessageSquare size={16} />
                    <span>Start WhatsApp Conversation</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Location & Presence */}
              <ScrollReveal variant="fade-up" delay={250}>
                <div className="border border-[#222222] p-6 bg-[#121212] font-jetbrains text-xs text-[#888888] space-y-3">
                  <div className="flex items-center gap-2 text-[#c4c7c7]">
                    <MapPin size={14} className="text-[#c4a47c]" />
                    <span>Base: Madurai / Chennai, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#c4c7c7]">
                    <Globe size={14} className="text-[#c4a47c]" />
                    <span>Delivery: Remote Worldwide / IST Timezone</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Social / Professional Channels */}
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="border-t border-[#222222] pt-6 font-jetbrains text-xs">
                <span className="text-[#888888] uppercase block mb-3 tracking-wider">Professional Profile:</span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-[#c4a47c] bg-[#121212] text-[#c4a47c] hover:bg-[#c4a47c] hover:text-[#080808] transition-all tracking-wider font-semibold inline-flex items-center gap-2"
                  >
                    <span>Connect on LinkedIn</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Direct Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-up" delay={150}>
              <div className="border border-[#222222] p-8 md:p-10 bg-[#121212] relative">
                {/* Live Region for Screen Readers */}
                <div className="sr-only" aria-live="polite">
                  {isSubmitting && 'Sending your project inquiry...'}
                  {isSuccess && 'Inquiry received. Thank you for reaching out.'}
                  {submitError && `Submission error: ${submitError}`}
                </div>

                {isSuccess ? (
                  /* ==================================================
                     SUCCESS STATE (Kinetic Noir confirmation)
                     ================================================== */
                  <div
                    id="contact-success-state"
                    className="py-12 md:py-16 text-center space-y-6 animate-fadeIn"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#c4a47c]/10 border border-[#c4a47c] text-[#c4a47c] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(196,164,124,0.25)]">
                      <Check size={32} />
                    </div>

                    <div className="space-y-3">
                      <span className="font-jetbrains text-xs text-[#c4a47c] uppercase tracking-[0.25em] block">
                        STATUS: RECEIVED &amp; QUEUED
                      </span>
                      <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-[#e5e5e5] tracking-tight uppercase">
                        INQUIRY RECEIVED.
                      </h2>
                      <p className="font-grotesk text-base text-[#e5e5e5] max-w-md mx-auto leading-relaxed">
                        Thanks for reaching out.
                      </p>
                      <p className="font-grotesk text-sm text-[#888888] max-w-md mx-auto leading-relaxed">
                        I've received your project details and will review them shortly.
                      </p>
                    </div>

                    {/* Secondary Information */}
                    <div className="border-t border-b border-[#222222] py-4 max-w-sm mx-auto font-jetbrains text-xs">
                      <p className="text-[#e5e5e5] font-bold tracking-wider">Mathesh A K S</p>
                      <p className="text-[#888888] mt-0.5">AI Creative Designer · Prompt Engineer</p>
                    </div>

                    {/* Optional Action Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        id="send-another-inquiry-btn"
                        onClick={handleResetForm}
                        className="px-8 py-3.5 border border-[#c4a47c] text-[#c4a47c] font-jetbrains text-xs uppercase tracking-widest hover:bg-[#c4a47c] hover:text-[#080808] transition-all cursor-pointer shadow-[0_0_15px_rgba(196,164,124,0.15)] inline-flex items-center gap-2"
                      >
                        <RefreshCw size={14} />
                        <span>SEND ANOTHER INQUIRY</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* ==================================================
                     ACTIVE CONTACT FORM
                     ================================================== */
                  <div>
                    {/* Error Banner if submission failed */}
                    {submitError && (
                      <div
                        id="contact-error-banner"
                        className="mb-8 p-5 border border-red-500/40 bg-red-950/20 text-[#e5e5e5] space-y-3"
                        role="alert"
                      >
                        <div className="flex items-center gap-2.5 text-red-400 font-jetbrains text-xs uppercase font-bold tracking-wider">
                          <AlertCircle size={16} />
                          <span>SOMETHING WENT WRONG.</span>
                        </div>
                        <p className="font-grotesk text-sm text-[#c4c7c7]">
                          Your enquiry couldn't be sent right now. Please try again.
                        </p>
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <a
                            href={directMailtoHref}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-[#c4a47c] text-[#c4a47c] bg-[#080808] font-jetbrains text-xs uppercase hover:bg-[#c4a47c] hover:text-[#080808] transition-all font-semibold tracking-wider"
                          >
                            <Mail size={14} />
                            <span>EMAIL MATHESH DIRECTLY →</span>
                          </a>
                          <span className="font-jetbrains text-[11px] text-[#888888]">
                            (Your form input has been preserved below)
                          </span>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate className="space-y-6 font-jetbrains text-xs">
                      {/* Honeypot Field (Invisible to human users, bot trap) */}
                      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                        <label htmlFor="contact-botcheck">Leave this field blank</label>
                        <input
                          id="contact-botcheck"
                          type="text"
                          name="botcheck"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.botcheck}
                          onChange={(e) => handleFieldChange('botcheck', e.target.value)}
                        />
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* FIELD 01: YOUR NAME * */}
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-[#888888] uppercase mb-2 tracking-wider flex justify-between"
                          >
                            <span>YOUR NAME *</span>
                            {touched.name && errors.name && (
                              <span className="text-red-400 font-normal lowercase">{errors.name}</span>
                            )}
                          </label>
                          <input
                            ref={nameInputRef}
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            placeholder="e.g. Anand Kumar"
                            value={formData.name}
                            onChange={(e) => handleFieldChange('name', e.target.value)}
                            onBlur={() => handleBlur('name')}
                            aria-required="true"
                            aria-invalid={touched.name && !!errors.name}
                            aria-describedby={touched.name && errors.name ? 'contact-name-error' : undefined}
                            className={`w-full bg-[#080808] border p-3.5 text-[#e5e5e5] placeholder-[#444444] transition-colors focus:outline-none ${
                              touched.name && errors.name
                                ? 'border-red-500/70 focus:border-red-500'
                                : 'border-[#222222] focus:border-[#c4a47c]'
                            }`}
                          />
                          {touched.name && errors.name && (
                            <p id="contact-name-error" className="mt-1.5 text-[11px] text-red-400">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* FIELD 02: EMAIL ADDRESS * */}
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-[#888888] uppercase mb-2 tracking-wider flex justify-between"
                          >
                            <span>EMAIL ADDRESS *</span>
                            {touched.email && errors.email && (
                              <span className="text-red-400 font-normal lowercase">Invalid email</span>
                            )}
                          </label>
                          <input
                            ref={emailInputRef}
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            placeholder="e.g. anand@brand.com"
                            value={formData.email}
                            onChange={(e) => handleFieldChange('email', e.target.value)}
                            onBlur={() => handleBlur('email')}
                            aria-required="true"
                            aria-invalid={touched.email && !!errors.email}
                            aria-describedby={touched.email && errors.email ? 'contact-email-error' : undefined}
                            className={`w-full bg-[#080808] border p-3.5 text-[#e5e5e5] placeholder-[#444444] transition-colors focus:outline-none ${
                              touched.email && errors.email
                                ? 'border-red-500/70 focus:border-red-500'
                                : 'border-[#222222] focus:border-[#c4a47c]'
                            }`}
                          />
                          {touched.email && errors.email && (
                            <p id="contact-email-error" className="mt-1.5 text-[11px] text-red-400">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* FIELD 03: PROJECT SCOPE / ENGAGEMENT */}
                      <div>
                        <label
                          htmlFor="contact-scope"
                          className="block text-[#888888] uppercase mb-2 tracking-wider"
                        >
                          PROJECT SCOPE / ENGAGEMENT
                        </label>
                        <div className="relative">
                          <select
                            ref={scopeSelectRef}
                            id="contact-scope"
                            name="projectScope"
                            value={formData.projectScope}
                            onChange={(e) => handleFieldChange('projectScope', e.target.value as ProjectScope)}
                            className="w-full bg-[#080808] border border-[#222222] p-3.5 text-[#e5e5e5] focus:border-[#c4a47c] focus:outline-none appearance-none cursor-pointer pr-10"
                          >
                            {PROJECT_SCOPE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#121212] text-[#e5e5e5]">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#888888]">
                            <span className="text-[10px]">▼</span>
                          </div>
                        </div>
                      </div>

                      {/* FIELD 04: PROJECT DETAILS & TIMELINE * */}
                      <div>
                        <label
                          htmlFor="contact-details"
                          className="block text-[#888888] uppercase mb-2 tracking-wider flex justify-between"
                        >
                          <span>PROJECT DETAILS &amp; TIMELINE *</span>
                          {touched.projectDetails && errors.projectDetails && (
                            <span className="text-red-400 font-normal lowercase">{errors.projectDetails}</span>
                          )}
                        </label>
                        <textarea
                          ref={detailsTextareaRef}
                          id="contact-details"
                          name="projectDetails"
                          rows={5}
                          required
                          placeholder="Tell me about your brand, visual goals, target deliverables, or deadline..."
                          value={formData.projectDetails}
                          onChange={(e) => handleFieldChange('projectDetails', e.target.value)}
                          onBlur={() => handleBlur('projectDetails')}
                          aria-required="true"
                          aria-invalid={touched.projectDetails && !!errors.projectDetails}
                          aria-describedby={
                            touched.projectDetails && errors.projectDetails
                              ? 'contact-details-error'
                              : undefined
                          }
                          className={`w-full bg-[#080808] border p-3.5 text-[#e5e5e5] placeholder-[#444444] transition-colors focus:outline-none leading-relaxed ${
                            touched.projectDetails && errors.projectDetails
                              ? 'border-red-500/70 focus:border-red-500'
                              : 'border-[#222222] focus:border-[#c4a47c]'
                          }`}
                        ></textarea>
                        {touched.projectDetails && errors.projectDetails && (
                          <p id="contact-details-error" className="mt-1.5 text-[11px] text-red-400">
                            {errors.projectDetails}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        id="contact-submit-btn"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 border font-jetbrains text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                          isSubmitting
                            ? 'bg-[#1a1815] border-[#c4a47c]/50 text-[#c4a47c]/70 cursor-not-allowed'
                            : submitError
                            ? 'bg-transparent border-red-400 text-red-400 hover:bg-red-400 hover:text-[#080808] cursor-pointer'
                            : 'bg-transparent border-[#c4a47c] text-[#c4a47c] hover:bg-[#c4a47c] hover:text-[#080808] cursor-pointer shadow-[0_0_20px_rgba(196,164,124,0.15)]'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw size={14} className="animate-spin text-[#c4a47c]" />
                            <span>SENDING...</span>
                          </>
                        ) : submitError ? (
                          <>
                            <span>TRY AGAIN →</span>
                          </>
                        ) : (
                          <>
                            <span className="font-semibold">START A CONVERSATION</span>
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>

                      {/* Privacy Note */}
                      <div className="pt-2 text-center">
                        <p className="font-grotesk text-[11px] text-[#666666]">
                          Your details are used only to respond to this project enquiry.
                        </p>
                      </div>

                      {/* Secondary Direct Email Fallback */}
                      <div className="pt-3 border-t border-[#1e1e1e] flex items-center justify-between font-jetbrains text-[11px] text-[#888888]">
                        <span>Prefer direct email?</span>
                        <a
                          href={`mailto:${recipientEmail}`}
                          className="text-[#c4a47c] hover:underline font-semibold"
                        >
                          {recipientEmail}
                        </a>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};
