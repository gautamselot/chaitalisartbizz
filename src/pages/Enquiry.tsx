import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Floral Preservation",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only Name and Phone are mandatory now
    if (!formData.name || !formData.phone) return;
    
    setStatus("sending");
    console.log("Enquiry submission started...");

    // Set a safety timeout in case the network request is silently blocked
    const timeoutId = setTimeout(() => {
      setStatus(prev => {
        if (prev === "sending") {
          console.error("EmailJS request timed out. This is often caused by an AdBlocker.");
          return "error";
        }
        return prev;
      });
    }, 15000); // 15 second timeout

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
          clearTimeout(timeoutId);
          console.error("CRITICAL: EmailJS Configuration is missing in Settings > Secrets.");
          console.log("Expected keys: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY");
          setStatus("error");
          return;
      }

      const templateParams = {
        from_name: formData.name,
        phone: formData.phone,
        reply_to: formData.email || "No email provided",
        interest: formData.interest,
        message: formData.message || "No message provided",
        to_email: "chaitalisartbizz@gmail.com"
      };

      console.log("Attempting to send email via EmailJS...");
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      clearTimeout(timeoutId);
      console.log("EmailJS Success Response:", response);
      setStatus("success");
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("EmailJS Error caught in handleSubmit:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-16 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Start Your Journey</h1>
          <p className="text-on-surface-variant text-lg">Tell us about your project or the memory you'd like to preserve.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-secondary/10 rounded-2xl text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-primary">Email Us</p>
                <p className="text-on-surface-variant">chaitalisartbizz@gmail.com</p>
              </div>
            </div>
            


            <div className="flex items-start gap-4">
              <div className="p-4 bg-secondary/10 rounded-2xl text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-primary">Studio Location</p>
                <p className="text-on-surface-variant">Ahilyangar 414001</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-surface-container rounded-[40px] p-8 md:p-12 shadow-inner min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-10"
                >
                  <div className="flex justify-center">
                    <div className="bg-secondary/20 p-6 rounded-full">
                      <CheckCircle2 className="text-secondary w-16 h-16" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary">Message Sent!</h3>
                  <p className="text-on-surface-variant max-w-sm mx-auto">Thank you for reaching out. Chaitali will personally review your enquiry and get back to you within 48 hours.</p>
                  <button 
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", phone: "", interest: "Floral Preservation", message: "" });
                    }}
                    className="text-secondary font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : status === "error" ? (
                <motion.div 
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-10"
                >
                  <div className="flex justify-center">
                    <div className="bg-red-100 p-6 rounded-full">
                      <AlertCircle className="text-red-500 w-16 h-16" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary">Something went wrong</h3>
                  <div className="space-y-4 max-w-sm mx-auto">
                    <p className="text-on-surface-variant">We couldn't send your enquiry. This usually happens because:</p>
                    <ul className="text-sm text-on-surface-variant text-left space-y-2 list-disc pl-5">
                      <li>An <strong>AdBlocker</strong> is blocking the email service.</li>
                      <li>The <strong>EmailJS Secrets</strong> are not configured in Settings.</li>
                      <li>Your internet connection is unstable.</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-secondary font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Full Name *</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-surface border-b-2 border-white/10 p-4 rounded-xl focus:border-secondary focus:outline-none transition-all shadow-sm text-primary" 
                        placeholder="Jane Doe" 
                        type="text" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Contact Number *</label>
                      <input 
                        required
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-surface border-b-2 border-white/10 p-4 rounded-xl focus:border-secondary focus:outline-none transition-all shadow-sm text-primary" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Email Address</label>
                      <input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-surface border-b-2 border-white/10 p-4 rounded-xl focus:border-secondary focus:outline-none transition-all shadow-sm text-primary" 
                        placeholder="jane@example.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Interest</label>
                      <select 
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-surface border-b-2 border-white/10 p-4 rounded-xl focus:border-secondary focus:outline-none transition-all appearance-none cursor-pointer shadow-sm text-primary"
                      >
                        <option>Floral Preservation</option>
                        <option>Large Wall Art / Geode</option>
                        <option>Functional Art (Clocks/Trays)</option>
                        <option>Workshops & Classes</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Your Vision</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      className="w-full bg-surface border-b-2 border-white/10 p-4 rounded-xl focus:border-secondary focus:outline-none transition-all shadow-sm text-primary" 
                      placeholder="Describe your dream piece..."
                    ></textarea>
                  </div>

                  <motion.button 
                    disabled={status === "sending"}
                    whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                    className="w-full bg-primary text-white py-6 rounded-2xl font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-teal-950 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>Processing <Loader2 className="animate-spin" size={18} /></>
                    ) : (
                      <>Send Enquiry <Send size={18} /></>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
