import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const JoinSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loadingToast = toast.loading('Sending your application...');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        // في حالة النجاح:
        toast.success("Form successfully submitted!", {
          id: loadingToast,
        });
        
        formRef.current?.reset();
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.", {
          id: loadingToast,
        });
        console.error(error);
      });
  };

  return (
    <section id="join-section" className="py-16 px-6 lg:px-12">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto">
        <div className="bg-[#122338] rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
          
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[#2563eb] font-bold tracking-widest uppercase text-sm">Join Our Community</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">Ready to Shape the Future?</h2>
            
            <form
              ref={formRef}
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              data-netlify="true"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm font-medium ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#1a2d44] border border-gray-700 text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#2563eb] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm font-medium ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[#1a2d44] border border-gray-700 text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#2563eb] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-gray-300 text-sm font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Interests..."
                  className="w-full bg-[#1a2d44] border border-gray-700 text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-[#2563eb] transition-all resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-4 rounded-full font-bold text-lg transition-all"
                >
                  Send Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;