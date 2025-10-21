import React from 'react';
import { TermsContent } from './Terms';

export default function TermsPage() {
  return (
    <div className="bg-black min-h-screen text-foreground pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-prose bg-muted/5 p-8 rounded-md shadow-sm">
          <h1 className="text-2xl font-bold mb-2">Terms of Use</h1>
          <p className="text-sm text-muted-foreground">Last Updated: October 16, 2025</p>

          <div className="mt-6">
            <TermsContent />
          </div>
        </div>
      </div>
    </div>
  );
}
