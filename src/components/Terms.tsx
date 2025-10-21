import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './ui/dialog';

export function TermsContent() {
  return (
    <div className="mt-4 space-y-6">
      <p>
        These Terms of Use govern your access to and use of Shocked Future Studios&apos; website, games, and services. By using our services, you agree to these terms.
      </p>

      <h3 className="font-bold">1. Acceptance of Terms</h3>
      <p>
        By accessing or using shockedfuturestudios.com (including all subdomains), downloading or playing our games, or contacting us through email or our contact form, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
      </p>

      <h3 className="font-bold">2. Age Restrictions</h3>
      <p>
        Users under the age of thirteen (13) are strongly recommended not to use our services, as they may contain sensitive content not suitable for minors.
      </p>

      <h3 className="font-bold">3. Intellectual Property Rights</h3>
      <p>
        All content, games, software, designs, graphics, text, and other materials provided by Shocked Future Studios LLC are the exclusive intellectual property of Shocked Future Studios LLC and are protected by copyright laws. All rights reserved.
      </p>

      <h3 className="font-bold">4. Prohibited Activities</h3>
      <p>Users are strictly prohibited from:</p>
      <ul className="list-disc ml-5">
        <li>Modifying, adapting, or creating derivative works of any Shocked Future Studios content, and commercializing it.</li>
      </ul>
      <p>Shocked Future Studios reserves the right to deny access to our content and services to any user who violates these prohibitions.</p>

      <h3 className="font-bold">5. Modifications and Derivative Works</h3>
      <p>
        Modifications made to Shocked Future Studios content, and attempts to commercialize it is <strong>STRICTLY PROHIBITED</strong>. This includes but is not limited to distributing modified versions of our content.
      </p>

      <h3 className="font-bold">6. Payment and Purchases</h3>
      <p>
        Certain services and content offered by Shocked Future Studios may require payment. This includes purchases made directly through our services or through authorized third-party platforms. By making a purchase, you agree to provide accurate payment information and authorize the transaction.
      </p>

      <h3 className="font-bold">7. Refund Policy</h3>
      <p>
        All commercial Shocked Future Studios content is <strong>NONREFUNDABLE</strong>. Refunds will not be issued past the point of sale. All purchases are final.
      </p>

      <h3 className="font-bold">8. Warranty Disclaimer</h3>
      <p>
        All Shocked Future Studios content is provided &quot;AS-IS&quot; with no warranty of any kind, either express or implied. This includes, but is not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement.
      </p>

      <h3 className="font-bold">9. Limitation of Liability</h3>
      <p>
        Shocked Future Studios LLC is not liable for any damages made to content, devices, or systems past the point of sale. This includes, but is not limited to direct, indirect, incidental, or consequential damages; loss of data or profits; hardware or software malfunctions; and any other damages arising from the use or inability to use our services.
      </p>

      <h3 className="font-bold">10. Changes to Terms</h3>
      <p>
        Shocked Future Studios reserves the right to modify these Terms of Use at any time. Continued use of our services after any such changes constitutes acceptance of the new terms.
      </p>

      <h3 className="font-bold">11. Contact Information</h3>
      <p>
        For questions or concerns regarding these Terms of Use, please contact us through the contact form on shockedfuturestudios.com or via email.
      </p>

      <h3 className="font-bold">12. Governing Law</h3>
      <p>
        These Terms of Use shall be governed by and construed in accordance with the laws applicable to Shocked Future Studios LLC, without regard to conflict of law principles.
      </p>

      <p className="text-sm text-muted-foreground">© 2025 Shocked Future Studios LLC. All rights reserved.</p>
    </div>
  );
}

export function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-muted-foreground hover:text-purple-400 transition-colors">Terms of Service</button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Terms of Use</DialogTitle>
        <DialogDescription>Last Updated: October 16, 2025</DialogDescription>

        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          <TermsContent />
        </div>

        <div className="mt-4 flex justify-end">
          <DialogClose className="px-4 py-2 rounded-md bg-muted/20 hover:bg-muted transition-colors">Close</DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TermsDialog;
