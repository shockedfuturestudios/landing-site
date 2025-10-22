import React from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

function CTASection() {
  return (
    <section className="py-20 sm:py-32 mb-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          [SECTION UNAVAILABLE]
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          This section is currently unavailable as this section is under development. <br/>
          <strong>This section is going to be a contact section to allow people to easily contact us.</strong>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-12 px-8 rounded-lg transition-colors">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
