import React, { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Send, Leaf } from 'lucide-react';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!fullName || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Transmitting your message...');

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        toast.success("Success! We will contact you soon.", {
          id: loadingToast,
          duration: 5000,
        });
        
        formRef.current?.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Submission failed. Please try again.", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  const inputBase = "w-full bg-white border border-gray-200 text-[#122338] px-4 py-3 rounded-xl focus:outline-none focus:border-[#2563eb] transition-all text-sm";

  return (
    <div className="max-w-xl mx-auto">
      <Toaster position="top-center" />

      <div className="bg-[#f8f9fb] border border-[#e9ecf0] rounded-2xl p-8 shadow-sm">
        <h3 className="text-xl font-bold text-[#122338] mb-7">Send a Message</h3>

        <form 
          ref={formRef} 
          name="contact-message" 
          onSubmit={handleSubmit} 
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-message" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9bb0]">Full Name</label>
              <input name="fullName" type="text" placeholder="Engineering Student" required className={inputBase} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9bb0]">Email Address</label>
              <input name="email" type="email" placeholder="example@sustech.edu" required className={inputBase} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mb-4">
            <label className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9bb0]">Subject</label>
            <input name="subject" type="text" placeholder="How can we help?" className={inputBase} />
          </div>

          <div className="flex flex-col gap-1.5 mb-6">
            <label className="text-[10px] font-semibold tracking-widest uppercase text-[#8a9bb0]">Message</label>
            <textarea name="message" rows={5} placeholder="Your technical inquiry..." required className={`${inputBase} resize-none`} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-sm font-semibold text-white transition-all duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#122338] hover:bg-[#1a3650] hover:-translate-y-0.5 hover:shadow-lg'}`}
          >
            {loading ? 'Processing...' : (
              <>
                <span>Transmit Message</span>
                <Send size={15} />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="flex items-start gap-3 bg-[#edfdf3] border border-[#b5e6c8] rounded-2xl px-5 py-4 mt-4">
        <span className="text-[#1a6b45] mt-0.5 shrink-0"><Leaf size={15} /></span>
        <p className="text-sm text-[#2e6b4a] leading-relaxed">
          Join our initiative for zero-carbon mechanical systems. <a href="/about" className="font-semibold underline underline-offset-2">Our mission.</a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;