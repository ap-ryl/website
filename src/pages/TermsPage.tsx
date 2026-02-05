import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WaitlistModal } from "@/components/landing/WaitlistModal";

const LEGAL_TABS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

export function TermsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        isScrolled={isScrolled}
        onWaitlistClick={() => setIsWaitlistModalOpen(true)}
      />

      <main className="relative z-20 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-6 mb-12">
            {LEGAL_TABS.map((tab) => (
              <Link
                key={tab.label}
                to={tab.href}
                className={`text-sm font-medium transition-colors ${
                  tab.href === "/terms"
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm mb-16">
            Last updated: February 1, 2026
          </p>

          {/* Content */}
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use
                of the Apryl platform, website, APIs, and related services
                (collectively, the &quot;Service&quot;) provided by Apryl
                (&quot;Apryl,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using
                the Service, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By creating an account, accessing, or using the Service, you
                confirm that you are at least 16 years old, have the legal
                authority to enter into these Terms, and agree to comply with
                all applicable laws and regulations. If you are using the
                Service on behalf of an organization, you represent that you
                have authority to bind that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Description of Service
              </h2>
              <p className="mb-4">
                Apryl is an AI-powered DevOps platform that assists with
                infrastructure design, deployment, and management. The Service
                includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  AI-driven infrastructure planning and Terraform code generation
                </li>
                <li>
                  Automated deployment orchestration across cloud providers
                </li>
                <li>
                  Infrastructure monitoring, analysis, and optimization
                  recommendations
                </li>
                <li>
                  CI/CD pipeline integration and management
                </li>
                <li>
                  Collaboration tools for DevOps teams
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Account Responsibilities
              </h2>
              <p className="mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Maintaining the confidentiality of your account credentials,
                  API keys, and access tokens
                </li>
                <li>
                  All activities that occur under your account
                </li>
                <li>
                  Ensuring that your cloud provider credentials shared with
                  Apryl follow the principle of least privilege
                </li>
                <li>
                  Notifying us immediately of any unauthorized access to your
                  account
                </li>
                <li>
                  Keeping your account information accurate and up to date
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Acceptable Use
              </h2>
              <p className="mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Deploy infrastructure that violates any applicable laws or
                  regulations
                </li>
                <li>
                  Host, distribute, or facilitate malware, phishing, or other
                  malicious activities
                </li>
                <li>
                  Mine cryptocurrency or run compute-intensive workloads without
                  authorization
                </li>
                <li>
                  Attempt to gain unauthorized access to other users&apos; accounts,
                  data, or infrastructure
                </li>
                <li>
                  Reverse-engineer, decompile, or attempt to extract the source
                  code of our AI models or proprietary algorithms
                </li>
                <li>
                  Use the Service to circumvent security controls or exploit
                  vulnerabilities in third-party systems
                </li>
                <li>
                  Resell, sublicense, or provide the Service to third parties
                  without our written consent
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Intellectual Property
              </h2>
              <p className="mb-4">
                <span className="text-white font-medium">Your Content:</span>{" "}
                You retain all rights to your infrastructure configurations,
                code, and data that you provide to the Service. By using the
                Service, you grant us a limited license to process your content
                solely to provide and improve the Service.
              </p>
              <p className="mb-4">
                <span className="text-white font-medium">Our Platform:</span>{" "}
                The Service, including our AI models, algorithms, user interface,
                documentation, and all related intellectual property, is owned by
                Apryl and protected by applicable intellectual property laws.
              </p>
              <p>
                <span className="text-white font-medium">Generated Output:</span>{" "}
                Infrastructure code, deployment plans, and other outputs
                generated by our AI based on your inputs are owned by you,
                subject to our underlying intellectual property rights in the
                Service itself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Infrastructure &amp; Deployment Disclaimers
              </h2>
              <p className="mb-4">
                Apryl provides AI-assisted infrastructure management, but you
                acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  AI-generated recommendations and deployment plans should be
                  reviewed before applying to production environments
                </li>
                <li>
                  You are ultimately responsible for the infrastructure deployed
                  through the Service and any associated cloud provider costs
                </li>
                <li>
                  We do not guarantee that AI-generated configurations will be
                  free from errors or optimal for every use case
                </li>
                <li>
                  Cloud provider outages, API changes, or third-party service
                  disruptions may impact the Service
                </li>
                <li>
                  You should maintain independent backups and disaster recovery
                  plans for your infrastructure
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Service Availability &amp; Modifications
              </h2>
              <p className="mb-4">
                We strive to provide reliable and continuous access to the
                Service. However, we may modify, suspend, or discontinue any
                part of the Service at any time. We will provide reasonable
                notice for material changes that affect your use.
              </p>
              <p>
                Scheduled maintenance windows will be communicated in advance.
                We are not liable for any downtime or service interruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Fees &amp; Payment
              </h2>
              <p className="mb-4">
                Certain features of the Service may require payment. If
                applicable:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Fees are billed in advance on a monthly or annual basis as
                  selected during sign-up
                </li>
                <li>
                  All fees are non-refundable unless otherwise stated or required
                  by law
                </li>
                <li>
                  We may change pricing with 30 days&apos; notice before your next
                  billing cycle
                </li>
                <li>
                  You are responsible for all cloud provider costs incurred
                  through infrastructure deployed via the Service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Limitation of Liability
              </h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, APRYL SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Loss of data, revenue, or profits arising from infrastructure
                  deployments
                </li>
                <li>
                  Cloud provider costs resulting from AI-generated configurations
                </li>
                <li>
                  Downtime or service interruptions in your deployed
                  infrastructure
                </li>
                <li>
                  Security incidents resulting from configurations applied
                  through the Service
                </li>
              </ul>
              <p className="mt-4">
                Our total liability shall not exceed the amount you paid for the
                Service in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Apryl, its
                officers, directors, employees, and agents from any claims,
                liabilities, damages, losses, and expenses (including reasonable
                legal fees) arising from your use of the Service, violation of
                these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Termination
              </h2>
              <p className="mb-4">
                You may terminate your account at any time. We may suspend or
                terminate your access if you violate these Terms or if required
                by law.
              </p>
              <p>
                Upon termination, your right to use the Service ceases
                immediately. We will retain your data for 30 days after
                termination to allow you to export it, after which it will be
                permanently deleted. Sections that by their nature should survive
                termination (such as intellectual property, limitation of
                liability, and indemnification) will continue to apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                12. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the State of Delaware,
                United States, without regard to conflict of law principles. Any
                disputes arising from these Terms or the Service shall be
                resolved through binding arbitration in accordance with the
                rules of the American Arbitration Association, except that
                either party may seek injunctive relief in any court of
                competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                13. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify you
                of material changes by posting the updated Terms on this page
                and, where appropriate, by email. Your continued use of the
                Service after changes constitutes acceptance of the updated
                Terms. If you do not agree to the revised Terms, you must stop
                using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                14. Contact Us
              </h2>
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium">
                  Apryl
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:legal@apryl.dev"
                    className="text-white underline hover:text-gray-300 transition-colors"
                  >
                    legal@apryl.dev
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}
