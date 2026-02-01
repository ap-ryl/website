import { useState, useEffect } from "react";
import { X, Sparkles, Heart } from "lucide-react";
import { Logo } from "./Logo";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Profession = "" | "student" | "working";

// Validation patterns to reject
const INVALID_PATTERNS = [
  // Keyboard sequences
  /qwerty/i,
  /asdfgh/i,
  /zxcvbn/i,
  /qazwsx/i,
  /!@#\$%/,
  // Alphabet sequences
  /abcdef/i,
  /bcdefg/i,
  /cdefgh/i,
  /defghi/i,
  /efghij/i,
  /fghijk/i,
  // Number sequences
  /123456/,
  /234567/,
  /345678/,
  /456789/,
  /567890/,
  /0987654/,
  /9876543/,
  // Common test values
  /^test$/i,
  /^testing$/i,
  /^test\s*user$/i,
  /^test\s*name$/i,
  /^dummy$/i,
  /^fake$/i,
  /^sample$/i,
  /^example$/i,
  /^asdf$/i,
  /^qwer$/i,
  /^aaa+$/i,
  /^bbb+$/i,
  /^xxx+$/i,
  /^zzz+$/i,
  /^abc$/i,
  /^xyz$/i,
  /^n\/a$/i,
  /^na$/i,
  /^none$/i,
  /^null$/i,
  /^undefined$/i,
];

function isValidInput(value: string): boolean {
  const trimmed = value.trim().toLowerCase();

  // Must be at least 2 characters
  if (trimmed.length < 2) return false;

  // Check against invalid patterns
  for (const pattern of INVALID_PATTERNS) {
    if (pattern.test(trimmed)) return false;
  }

  // Must contain at least one letter
  if (!/[a-zA-Z]/.test(trimmed)) return false;

  return true;
}

function isValidName(name: string): boolean {
  if (!isValidInput(name)) return false;

  // Name should have at least 2 parts (first and last name) or be reasonably long
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2 && name.trim().length < 4) return false;

  // Each part should be at least 2 characters
  for (const part of parts) {
    if (part.length < 2) return false;
  }

  return true;
}

const WAITLIST_STORAGE_KEY = "apryl_waitlist_emails";

function getStoredEmails(): string[] {
  try {
    const stored = localStorage.getItem(WAITLIST_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function isEmailAlreadyRegistered(email: string): boolean {
  const emails = getStoredEmails();
  return emails.includes(email.toLowerCase().trim());
}

function storeEmail(email: string): void {
  try {
    const emails = getStoredEmails();
    emails.push(email.toLowerCase().trim());
    localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(emails));
  } catch {
    // Ignore localStorage errors
  }
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    organisation: "",
    profession: "" as Profession,
    collegeName: "",
  });

  // Auto-close success modal after 3 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!isValidName(formData.name)) {
      newErrors.name = "Please enter a valid full name";
    }

    // Validate organisation
    if (!isValidInput(formData.organisation)) {
      newErrors.organisation = "Please enter a valid organisation name";
    }

    // Organisation should not be same as personal name
    if (formData.organisation.trim().toLowerCase() === formData.name.trim().toLowerCase()) {
      newErrors.organisation = "Organisation name cannot be the same as your name";
    }

    // Validate college name if student
    if (formData.profession === "student" && !isValidInput(formData.collegeName)) {
      newErrors.collegeName = "Please enter a valid college name";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check if email is already registered
    if (isEmailAlreadyRegistered(formData.email)) {
      setIsAlreadyRegistered(true);
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwHgkiykbRLCaxtbCOZzzOh4Wfw2nXPqDWpXM_UQ4eud0J_Ik6EBAwQ20DTN36tt1P1GQ/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organisation: formData.organisation,
          profession: formData.profession,
          collegeName: formData.collegeName,
          organisationType: "",
        }),
      });

      // Store email to prevent duplicate submissions
      storeEmail(formData.email);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsAlreadyRegistered(false);
    setErrors({});
    setFormData({
      email: "",
      phone: "",
      name: "",
      organisation: "",
      profession: "",
      collegeName: "",
    });
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={handleClose}
        />
        <div className="relative z-10 w-full max-w-md mx-4">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <Logo size={40} className="text-white" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-pulse" />
              </div>
            </div>

            {isAlreadyRegistered ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">
                  You're Already In!
                </h2>

                <div className="flex items-center justify-center gap-1 text-gray-400 mb-4">
                  <Heart className="h-4 w-4 text-red-400" />
                  <span className="text-sm">We haven't forgotten about you</span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  You're already on our waitlist with this email address.
                  Your spot is secure and we'll reach out as soon as your access is ready.
                  <br /><br />
                  <span className="text-gray-500 text-sm">
                    Thank you for your enthusiasm! We're working hard to get Apryl ready for you.
                  </span>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Welcome to Apryl!
                </h2>

                <div className="flex items-center justify-center gap-1 text-gray-400 mb-4">
                  <Heart className="h-4 w-4 text-red-400" />
                  <span className="text-sm">We're thrilled to have you</span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Thank you for joining our waitlist, {formData.name.split(" ")[0]}!
                  Your spot has been reserved and we can't wait to have you on board.
                  <br /><br />
                  <span className="text-gray-500 text-sm">
                    We'll reach out as soon as your access is ready.
                    Get ready to transform the way you build infrastructure.
                  </span>
                </p>
              </>
            )}

            {/* Progress bar for auto-close */}
            <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full animate-[shrink_3s_linear_forwards]"
                style={{ width: '100%' }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-2">Closing automatically...</p>
          </div>
        </div>

        <style>{`
          @keyframes shrink {
            from { width: 100%; }
            to { width: 0%; }
          }
        `}</style>
      </div>
    );
  }

  // Form Screen
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={handleClose}
      />

      <div className="relative z-10 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Join the Waitlist
            </h2>
            <p className="text-gray-400 text-sm">
              Get early access to Apryl and be among the first to experience
              AI-native DevOps.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                  errors.name ? "border-red-500" : "border-white/10 focus:border-white/30"
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Organisation */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Organisation *
              </label>
              <input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                required
                placeholder="Company or Institution name"
                className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                  errors.organisation ? "border-red-500" : "border-white/10 focus:border-white/30"
                }`}
              />
              {errors.organisation && (
                <p className="text-red-400 text-xs mt-1">{errors.organisation}</p>
              )}
            </div>

            {/* Profession */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Profession *
              </label>
              <select
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0a0a0a]">
                  Select your profession
                </option>
                <option value="student" className="bg-[#0a0a0a]">
                  Student
                </option>
                <option value="working" className="bg-[#0a0a0a]">
                  Working Professional
                </option>
              </select>
            </div>

            {/* Conditional: College Name */}
            {formData.profession === "student" && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  College/University Name *
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  required
                  placeholder="MIT, Stanford, etc."
                  className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.collegeName ? "border-red-500" : "border-white/10 focus:border-white/30"
                  }`}
                />
                {errors.collegeName && (
                  <p className="text-red-400 text-xs mt-1">{errors.collegeName}</p>
                )}
              </div>
            )}


            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Joining...
                </span>
              ) : (
                "Join Waitlist"
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-4">
            By joining, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
