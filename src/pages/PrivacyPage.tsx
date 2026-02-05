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

export function PrivacyPage() {
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
                  tab.href === "/privacy"
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-16">
            Last updated: February 1, 2026
          </p>

          {/* Content */}
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <p>
                Apryl (&quot;Apryl,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting the privacy of our users. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you use our AI-powered DevOps platform, website,
                and related services (collectively, the &quot;Service&quot;).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-lg font-medium text-white mb-2">
                Account Information
              </h3>
              <p className="mb-4">
                When you create an account or join our waitlist, we collect your
                name, email address, organization name, professional role, and
                other information you choose to provide.
              </p>

              <h3 className="text-lg font-medium text-white mb-2">
                Infrastructure &amp; Configuration Data
              </h3>
              <p className="mb-4">
                To provide our AI DevOps services, we process infrastructure
                configurations, deployment manifests, Terraform files, CI/CD
                pipeline definitions, cloud provider settings, and related
                metadata that you provide or authorize us to access.
              </p>

              <h3 className="text-lg font-medium text-white mb-2">
                Usage Data
              </h3>
              <p className="mb-4">
                We automatically collect information about how you interact with
                the Service, including commands executed, features used, session
                duration, error logs, and performance metrics.
              </p>

              <h3 className="text-lg font-medium text-white mb-2">
                Device &amp; Technical Data
              </h3>
              <p className="mb-4">
                We collect device type, operating system, browser type, IP
                address, and general location data derived from your IP address.
              </p>

              <h3 className="text-lg font-medium text-white mb-2">
                Cookies &amp; Tracking Technologies
              </h3>
              <p>
                We use cookies, web beacons, and similar technologies to maintain
                your session, remember preferences, and analyze usage patterns.
                You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Provide, maintain, and improve the Service, including AI-driven
                  infrastructure recommendations and automated deployments
                </li>
                <li>
                  Process your infrastructure configurations through our AI models
                  to generate deployment plans, detect issues, and suggest
                  optimizations
                </li>
                <li>
                  Send you technical notices, security alerts, and support
                  messages
                </li>
                <li>
                  Analyze usage patterns to improve our AI models and Service
                  quality
                </li>
                <li>
                  Respond to your requests, comments, and questions
                </li>
                <li>
                  Detect, investigate, and prevent fraudulent or unauthorized
                  activity
                </li>
                <li>
                  Comply with legal obligations and enforce our terms
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. AI Data Processing
              </h2>
              <p className="mb-4">
                Our AI engine processes your infrastructure data to provide
                intelligent DevOps assistance. This includes analyzing
                configurations, generating Terraform plans, and recommending
                deployment strategies.
              </p>
              <p className="mb-4">
                Your infrastructure data is processed in isolated environments
                and is not used to train our general AI models without your
                explicit consent. Each customer&apos;s data is logically separated
                and never shared across accounts.
              </p>
              <p>
                AI-generated outputs (such as deployment plans and
                recommendations) are treated as your confidential data and are
                subject to the same protections as your input data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Sharing &amp; Third Parties
              </h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your data
                with:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="text-white font-medium">Service Providers:</span>{" "}
                  Cloud hosting, analytics, and infrastructure providers who
                  process data on our behalf under strict contractual obligations
                </li>
                <li>
                  <span className="text-white font-medium">Cloud Providers:</span>{" "}
                  When you authorize Apryl to deploy or manage infrastructure on
                  your cloud accounts (AWS, GCP, Azure, etc.), we transmit
                  necessary configuration data to those providers
                </li>
                <li>
                  <span className="text-white font-medium">Legal Requirements:</span>{" "}
                  When required by law, legal process, or to protect rights,
                  safety, and property
                </li>
                <li>
                  <span className="text-white font-medium">Business Transfers:</span>{" "}
                  In connection with a merger, acquisition, or sale of assets,
                  your data may be transferred as part of that transaction
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Retention
              </h2>
              <p className="mb-4">
                We retain your account information for as long as your account is
                active. Infrastructure configurations and deployment history are
                retained for the duration of your subscription plus 30 days
                after account closure.
              </p>
              <p>
                Usage data and analytics are retained in anonymized form for up
                to 24 months. You may request deletion of your data at any time
                by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Your Rights
              </h2>
              <p className="mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Export your data in a portable format</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:privacy@apryl.dev"
                  className="text-white underline hover:text-gray-300 transition-colors"
                >
                  privacy@apryl.dev
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. International Data Transfers
              </h2>
              <p>
                Your data may be processed in countries other than your own. We
                use appropriate safeguards, including standard contractual
                clauses and equivalent mechanisms, to ensure your data receives
                adequate protection regardless of where it is processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Data Security
              </h2>
              <p>
                We implement security measures to protect your data, including
                encryption in transit (TLS 1.3) and at rest (AES-256), access
                controls, and audit logging. For more details, see our{" "}
                <Link
                  to="/security"
                  className="text-white underline hover:text-gray-300 transition-colors"
                >
                  Security page
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p>
                The Service is not intended for individuals under 16 years of
                age. We do not knowingly collect personal information from
                children. If we become aware that we have collected data from a
                child, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by posting the updated policy on
                this page and updating the &quot;Last updated&quot; date. Your continued
                use of the Service after changes constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-white font-medium">
                  Apryl
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:privacy@apryl.dev"
                    className="text-white underline hover:text-gray-300 transition-colors"
                  >
                    privacy@apryl.dev
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
