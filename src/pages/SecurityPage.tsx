import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Lock, Server, Eye, Bug, Mail } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WaitlistModal } from "@/components/landing/WaitlistModal";

const LEGAL_TABS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

export function SecurityPage() {
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
                  tab.href === "/security"
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
            Security
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Last updated: February 1, 2026
          </p>
          <p className="text-gray-300 leading-relaxed mb-16 max-w-3xl">
            Security is foundational to everything we build at Apryl. As an
            AI-powered DevOps platform that manages critical infrastructure, we
            are building security into every layer from the ground up. This page
            outlines our security practices and commitments.
          </p>

          {/* Security Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Lock className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                End-to-End Encryption
              </h3>
              <p className="text-gray-400 text-sm">
                All data is encrypted in transit with TLS 1.3 and at rest with
                AES-256. Infrastructure credentials are stored using
                envelope encryption with hardware-backed key management.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Server className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Isolated Environments
              </h3>
              <p className="text-gray-400 text-sm">
                Each customer&apos;s infrastructure operations run in isolated
                execution environments. Your data and configurations are never
                shared across accounts.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Eye className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Audit Logging
              </h3>
              <p className="text-gray-400 text-sm">
                Every action taken through Apryl is logged with immutable audit
                trails. Access comprehensive logs of all deployments, changes,
                and AI recommendations.
              </p>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Infrastructure Security
              </h2>
              <p className="mb-4">
                Our platform runs on enterprise-grade cloud infrastructure with
                multiple layers of protection:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Hosted on reputable cloud providers with multi-region
                  redundancy
                </li>
                <li>
                  Network segmentation with private subnets, VPC isolation, and
                  strict security group rules
                </li>
                <li>
                  DDoS protection on all public endpoints
                </li>
                <li>
                  Regular infrastructure patching and vulnerability scanning
                </li>
                <li>
                  Internal service communication is authenticated and encrypted
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Application Security
              </h2>
              <p className="mb-4">
                We follow secure development practices throughout our software
                lifecycle:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Secure authentication with multi-factor authentication (MFA)
                  and short-lived session tokens
                </li>
                <li>
                  API authentication via scoped tokens with configurable
                  permissions
                </li>
                <li>
                  Role-based access control (RBAC) with the principle of least
                  privilege
                </li>
                <li>
                  Code reviews required for all changes, with automated
                  dependency scanning in CI/CD
                </li>
                <li>
                  Responsible dependency management with alerts for known
                  vulnerabilities
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Protection
              </h2>
              <p className="mb-4">
                Your data is treated with the utmost care:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="text-white font-medium">Encryption in Transit:</span>{" "}
                  TLS 1.3 enforced on all connections. HSTS enabled with
                  preloading. Certificate transparency monitoring.
                </li>
                <li>
                  <span className="text-white font-medium">Encryption at Rest:</span>{" "}
                  AES-256 encryption for all stored data. Infrastructure
                  credentials use envelope encryption with AWS KMS / GCP Cloud
                  KMS.
                </li>
                <li>
                  <span className="text-white font-medium">Secrets Management:</span>{" "}
                  Cloud provider credentials and API keys are stored in
                  dedicated secrets managers — never in plaintext, logs, or
                  application code.
                </li>
                <li>
                  <span className="text-white font-medium">Data Backups:</span>{" "}
                  Automated encrypted backups with point-in-time recovery.
                  Backup integrity verified regularly.
                </li>
                <li>
                  <span className="text-white font-medium">Data Isolation:</span>{" "}
                  Strict logical separation between customer environments.
                  Tenant data is never co-mingled.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                AI &amp; ML Security
              </h2>
              <p className="mb-4">
                As an AI-powered platform, we take additional steps to secure
                our machine learning systems:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  AI model inference runs in isolated sandboxed environments with
                  no persistent state between requests
                </li>
                <li>
                  Customer infrastructure data is not used to train general
                  models without explicit opt-in consent
                </li>
                <li>
                  Input validation and output sanitization on all AI-generated
                  infrastructure code to prevent injection attacks
                </li>
                <li>
                  AI-generated deployment plans include safety checks and
                  require human confirmation before execution on production
                  environments
                </li>
                <li>
                  Rate limiting and anomaly detection on AI endpoints to prevent
                  abuse
                </li>
                <li>
                  Ongoing testing of our AI systems against prompt injection
                  and adversarial attack vectors
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Incident Response
              </h2>
              <p className="mb-4">
                We are building an incident response process that includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Security monitoring with automated alerting and escalation
                  procedures
                </li>
                <li>
                  Documented incident response plan with defined roles and
                  communication protocols
                </li>
                <li>
                  Timely notification to affected customers in the event of a
                  confirmed security incident involving their data
                </li>
                <li>
                  Post-incident reviews to identify root causes and track
                  remediation
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Responsible Disclosure
              </h2>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <Bug className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-2">
                      Found a vulnerability?
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      We value the security research community and welcome
                      responsible disclosure of vulnerabilities. If you believe
                      you have found a security issue in our platform, please
                      report it to us.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm mb-4">
                      <li>
                        Email your findings to{" "}
                        <a
                          href="mailto:security@apryl.dev"
                          className="text-white underline hover:text-gray-300 transition-colors"
                        >
                          security@apryl.dev
                        </a>
                      </li>
                      <li>Include steps to reproduce the vulnerability</li>
                      <li>
                        Allow us reasonable time to investigate and address the
                        issue before public disclosure
                      </li>
                      <li>
                        Do not access, modify, or delete other users&apos; data
                        during your research
                      </li>
                    </ul>
                    <p className="text-gray-400 text-sm">
                      We commit to acknowledging reports within 48 hours and
                      providing regular updates on remediation progress.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact
              </h2>
              <p>
                For security questions, concerns, or to request our latest
                security documentation, reach out to our security team:
              </p>
              <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <Mail className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Security Team</p>
                  <a
                    href="mailto:security@apryl.dev"
                    className="text-gray-400 text-sm underline hover:text-white transition-colors"
                  >
                    security@apryl.dev
                  </a>
                </div>
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
