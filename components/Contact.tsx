import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

declare global {
  interface Window {
    turnstileCallback: () => void;
  }
}

function CTASection() {
  const [turnstileReady, setTurnstileReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    document.body.appendChild(script);

    window.turnstileCallback = function () {
      setTurnstileReady(true);
    };
  }, []);

  return (
    <section className="py-20 sm:py-32 mb-20 px-4" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Contact Us
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form
          action="https://formsubmit.co/5625c6a64f9871683c86c5abdca98a84"
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-6 items-center"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_honey" style={{ display: "none" }} />

          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:outline-none" />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:outline-none"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:outline-none"
          ></textarea>

          {/* Cloudflare Turnstile Widget */}
          
<div
  className="cf-turnstile"
  data-sitekey="0x4AAAAAAB5wVYIwvA5thKLK"
  data-theme="dark"
  data-callback="turnstileCallback"
></div>


          <Button
            type="submit"
            disabled={!turnstileReady}
            className={`bg-sky-500 hover:bg-sky-400 text-white font-semibold h-12 px-8 rounded-lg transition-colors flex items-center justify-center ${
              !turnstileReady ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CTASection;