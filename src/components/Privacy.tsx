import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './ui/dialog';

export function PrivacyContent() {
  return (
    <div className="mt-4 space-y-6">
      <p>
        At Shocked Future Studios, we are committed to respecting and protecting the
        privacy of our users. This Privacy Policy explains how we collect, use, and
        safeguard your personal information when you interact with our services.
      </p>

      <section id="core" aria-labelledby="privacy-core-heading">
        <div className="mt-4 p-6 rounded-lg border border-red-700 bg-gradient-to-br from-[#2b0b0b] to-[#160707] shadow-lg">
          <h3 id="privacy-core-heading" className="text-orange-400 text-xl font-bold mb-3">Our Core Privacy Commitment</h3>

          <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-md">
            <p className="text-white text-lg font-semibold leading-relaxed">
              We will <span className="text-cyan-300 decoration-cyan-400 decoration-2 font-bold">NEVER</span> sell your personal information to third parties.
            </p>
            <p className="mt-3 text-muted-foreground">
              Your trust is paramount to us, and we take this commitment seriously. Any data we collect is used solely to improve your experience with our services and will not be monetized through third-party sales.
            </p>
          </div>
        </div>
      </section>

  <h3 id="collect" className="font-bold">Information We Collect</h3>
      <ul className="list-disc ml-5">
        <li>
          <strong>Personal Information:</strong> Name, email address, and other contact
          details you provide when creating an account or contacting us.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with our
          services, including gameplay statistics, preferences, and technical data.
        </li>
        <li>
          <strong>Device Information:</strong> Hardware specifications, operating system,
          and browser type.
        </li>
      </ul>

  <h3 id="use" className="font-bold">How We Use Your Information</h3>
      <ul className="list-disc ml-5">
        <li>Provide and maintain our services</li>
        <li>Improve user experience and develop new features</li>
        <li>Communicate with you about updates, support, and promotional content</li>
        <li>Ensure security and prevent fraud</li>
        <li>Comply with legal obligations</li>
      </ul>

  <h3 id="thirdparty" className="font-bold">Third-Party Services</h3>
      <p>
        <strong>Important Notice:</strong> While we are committed to protecting your
        privacy directly, we cannot guarantee privacy and safety when you use
        third-party services affiliated with or integrated into our offerings.
      </p>
      <p>These third-party services include, but are not limited to:</p>
      <ul className="list-disc ml-5">
        <li><strong>itch.io</strong> - For game distribution and purchases</li>
        <li><strong>Patreon</strong> - For supporter subscriptions and rewards</li>
        <li><strong>Nexus Mods</strong> - For mod hosting and community features</li>
        <li><strong>GitHub</strong> - For development collaboration and version control</li>
      </ul>

  <h3 id="sharing" className="font-bold">Data Sharing and Disclosure</h3>
      <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
      <ul className="list-disc ml-5">
        <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information.</li>
        <li><strong>With Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating our business (e.g., hosting, analytics), under strict confidentiality agreements.</li>
        <li><strong>For Legal Reasons:</strong> When required by law, legal process, or to protect our rights and safety or that of others.</li>
        <li><strong>Through Third-Party Platforms:</strong> When you choose to use affiliated third-party services, your data may be shared according to their policies.</li>
      </ul>

      <h3 className="font-bold">Data Security</h3>
      <p>
        We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

  <h3 id="rights" className="font-bold">Your Rights</h3>
      <p>You have the right to:</p>
      <ul className="list-disc ml-5">
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your personal information (subject to legal obligations)</li>
        <li>Opt-out of marketing communications</li>
        <li>Withdraw consent where we rely on consent to process your data</li>
      </ul>

      <h3 className="font-bold">Children&apos;s Privacy</h3>
      <p>
        Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
      </p>

      <h3 className="font-bold">Changes to This Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
      </p>

      <h3 className="font-bold">Contact Us</h3>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
      </p>
      <p className="font-medium">Shocked Future Studios
      <br /><a href="mailto:contact@shockedfuturestudios.com">contact@shockedfuturestudios.com</a></p>

      <p className="italic font-bold">By using Shocked Future Studios&apos; services, you acknowledge that you have read and understood this Privacy Policy.</p>
    </div>
  );
}

export function PrivacyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-muted-foreground hover:text-purple-400 transition-colors">
          Privacy Policy
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Privacy Policy for Shocked Future Studios</DialogTitle>
        <DialogDescription>Last Updated: October 16, 2025</DialogDescription>

        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          <PrivacyContent />
        </div>

        <div className="mt-4 flex justify-end">
          <DialogClose className="px-4 py-2 rounded-md bg-muted/20 hover:bg-muted transition-colors">Close</DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PrivacyDialog;
