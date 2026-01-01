import { useState, useEffect } from "react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 500);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:abid.rakha1@hotmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}\n\nReply to: ${
      formData.email
    }`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 1500);
  };

  if (!shouldRender) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 backdrop-blur transition-opacity duration-500 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal - Centered */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none">
        <div
          className={`bg-black border border-white/20 rounded-lg p-8 relative w-full max-w-md pointer-events-auto shadow-2xl transition-all duration-500 ${
            isAnimating
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-12"
          }`}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h3 className="text-2xl font-light tracking-widest mb-6">
            Get in Touch
          </h3>

          {submitted ? (
            <div className="text-center py-8">
              <svg
                className="w-12 h-12 mx-auto mb-4 text-white/40 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-300 font-light mb-2">
                Thank you for reaching out!
              </p>
              <p className="text-sm text-gray-500">
                Opening your email client...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-light tracking-wider mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white font-light focus:outline-none focus:border-white/50 transition-colors duration-300 placeholder-gray-600"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="block text-sm font-light tracking-wider mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white font-light focus:outline-none focus:border-white/50 transition-colors duration-300 placeholder-gray-600"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-sm font-light tracking-wider mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white font-light focus:outline-none focus:border-white/50 transition-colors duration-300 resize-none placeholder-gray-600"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 py-3 rounded font-light tracking-wider transition-all duration-300 mt-6 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
