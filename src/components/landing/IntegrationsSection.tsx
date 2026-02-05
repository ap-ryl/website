import React from "react";

// Pyramid: 3 rows — top (3), middle (5), bottom (7 faded)
const ROW_TOP = [
  { name: "AWS", icon: AwsIcon, status: "supported" },
  { name: "Google Cloud", icon: GcpIcon, status: "coming" },
  { name: "Azure", icon: AzureIcon, status: "coming" },
];

const ROW_MID = [
  { name: "Terraform", icon: TerraformIcon, status: "supported" },
  { name: "Docker", icon: DockerIcon, status: "supported" },
  { name: "Kubernetes", icon: KubernetesIcon, status: "supported" },
  { name: "GitHub", icon: GitHubIcon, status: "supported" },
  { name: "DigitalOcean", icon: DigitalOceanIcon, status: "coming" },
];

const ROW_BOTTOM = [
  { name: "Pulumi", icon: PulumiIcon, status: "coming" },
  { name: "Ansible", icon: AnsibleIcon, status: "coming" },
  { name: "GitLab", icon: GitLabIcon, status: "coming" },
  { name: "Jenkins", icon: JenkinsIcon, status: "coming" },
  { name: "Datadog", icon: DatadogIcon, status: "coming" },
  { name: "Prometheus", icon: PrometheusIcon, status: "coming" },
  { name: "Slack", icon: SlackIcon, status: "coming" },
];

function AwsIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#252F3E" d="M20.15 28.6c0 .87.09 1.57.25 2.1.18.53.41 1.1.72 1.72.11.18.16.37.16.53 0 .23-.14.46-.44.69l-1.46.97c-.21.14-.41.21-.6.21-.23 0-.46-.12-.69-.34a7.13 7.13 0 0 1-.83-1.08 18.4 18.4 0 0 1-.71-1.36c-1.78 2.1-4.02 3.15-6.71 3.15-1.92 0-3.44-.55-4.56-1.64-1.12-1.1-1.69-2.56-1.69-4.39 0-1.94.68-3.52 2.07-4.72 1.39-1.2 3.24-1.8 5.58-1.8.78 0 1.57.06 2.4.17.83.11 1.69.28 2.58.48v-1.67c0-1.74-.36-2.95-1.08-3.66-.73-.71-1.96-1.06-3.71-1.06-.8 0-1.62.1-2.47.3-.85.2-1.67.46-2.47.78-.37.16-.64.25-.8.29-.17.04-.29.06-.37.06-.32 0-.48-.23-.48-.71v-1.14c0-.37.04-.64.14-.81.1-.16.3-.32.6-.48.8-.41 1.75-.76 2.86-1.03a13.2 13.2 0 0 1 3.53-.42c2.69 0 4.66.61 5.92 1.83 1.25 1.22 1.87 3.07 1.87 5.55v7.32zm-9.27 3.47c.75 0 1.53-.14 2.35-.41.82-.28 1.55-.78 2.16-1.47.37-.44.64-.92.8-1.47.16-.55.25-1.21.25-1.99v-.96a18.93 18.93 0 0 0-2.05-.37 16.8 16.8 0 0 0-2.1-.14c-1.52 0-2.64.3-3.37.91-.73.6-1.08 1.46-1.08 2.58 0 1.05.27 1.83.83 2.36.55.55 1.35.82 2.4.82zm18.35 2.49c-.42 0-.69-.07-.85-.23-.16-.14-.3-.46-.42-.9L23.7 17.2c-.12-.46-.18-.76-.18-.9 0-.37.18-.57.55-.57h2.27c.44 0 .73.07.87.23.16.14.28.46.41.9l3.21 12.68 2.99-12.68c.11-.46.23-.76.39-.9.16-.14.46-.23.87-.23h1.85c.44 0 .73.07.87.23.16.16.3.46.39.9l3.03 12.83 3.31-12.83c.14-.46.28-.76.42-.9.16-.14.46-.23.87-.23h2.15c.37 0 .57.18.57.57 0 .11-.02.23-.05.37-.02.14-.07.32-.14.55l-4.38 16.22c-.12.46-.26.76-.42.9-.16.14-.44.23-.85.23h-2c-.44 0-.73-.07-.87-.23-.16-.16-.3-.46-.39-.92l-2.97-12.35-2.95 12.33c-.11.46-.23.76-.39.92-.16.16-.46.23-.87.23h-2z"/>
      <path fill="#F90" d="M52.2 36.26c-5.04 3.72-12.35 5.7-18.65 5.7-8.82 0-16.77-3.26-22.78-8.69-.47-.42-.05-1.01.52-.68 6.49 3.78 14.52 6.05 22.82 6.05 5.6 0 11.74-1.16 17.39-3.56.85-.39 1.57.55.71 1.19z"/>
      <path fill="#F90" d="M54.23 33.91c-.64-.83-4.26-.39-5.88-.2-.49.06-.57-.37-.12-.69 2.88-2.03 7.61-1.44 8.16-.76.55.69-.16 5.43-2.85 7.7-.41.35-.8.16-.62-.3.6-1.49 1.94-4.92 1.31-5.75z"/>
    </svg>
  );
}

function GcpIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#4285F4" d="M40.27 23.56l3.93-3.93.2-1.66A18.98 18.98 0 0 0 32 13a19.02 19.02 0 0 0-17.07 10.6l1.42-.19 7.86-1.3s.4-.66.6-.62a11.1 11.1 0 0 1 7.19-2.63 11.16 11.16 0 0 1 8.27 3.7z"/>
      <path fill="#EA4335" d="M51.36 23.6A19.1 19.1 0 0 0 44.4 17.97l-4.13 4.13a11.11 11.11 0 0 1 4.08 8.82v1.11c3.08 0 5.57 2.49 5.57 5.57s-2.5 5.57-5.57 5.57H32.47l-1.11 1.12v6.68l1.11 1.11h11.88A13.44 13.44 0 0 0 57.78 38.6a13.44 13.44 0 0 0-6.42-15z"/>
      <path fill="#34A853" d="M20.59 52.08h11.88v-7.86H20.59a5.52 5.52 0 0 1-2.3-.5l-1.58.49-3.95 3.93-.39 1.53a13.34 13.34 0 0 0 8.22 2.8z"/>
      <path fill="#FBBC05" d="M20.59 24.83A13.44 13.44 0 0 0 7.15 38.27a13.44 13.44 0 0 0 5.22 10.6l5.93-5.93a5.57 5.57 0 0 1-3.28-5.07 5.57 5.57 0 0 1 5.57-5.57 5.57 5.57 0 0 1 5.07 3.28l5.93-5.93a13.38 13.38 0 0 0-10.6-5.22z"/>
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#0078D4" d="M24.2 10h13.6L23.8 53.2c-.2.5-.7.8-1.2.8H11.3c-.8 0-1.4-.7-1.2-1.5L23 10.8c.2-.5.6-.8 1.2-.8z"/>
      <path fill="#0078D4" d="M43.6 36.3H22.1c-.4 0-.6.4-.4.7l12.3 12c.3.3.6.4 1 .4h12.1z"/>
      <path fill="#50E6FF" d="M24.2 10c-.6 0-1.1.4-1.2.9L9.9 52.5c-.2.8.4 1.5 1.2 1.5h12.2c.5 0 .9-.3 1.1-.8l3.9-11.1 8.1 7.5c.3.2.6.4 1 .4h12L37.8 10z"/>
      <path fill="url(#azure-int)" d="M40.5 10.8c-.2-.5-.7-.8-1.2-.8H24.5c.6 0 1 .3 1.2.8l13 41.7c.2.8-.4 1.5-1.2 1.5h14.8c.8 0 1.5-.7 1.2-1.5z"/>
      <defs>
        <linearGradient id="azure-int" x1="30" y1="10" x2="45" y2="54">
          <stop offset="0%" stopColor="#0078D4"/>
          <stop offset="100%" stopColor="#50E6FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function DigitalOceanIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#0080FF" d="M32 52v-7.6a10.4 10.4 0 0 0 10.4-10.4A10.4 10.4 0 0 0 32 23.6a10.4 10.4 0 0 0-10.4 10.4H14a18 18 0 1 1 18 18z"/>
      <path fill="#0080FF" d="M32 52v-6h-6v6h6z"/>
      <path fill="#0080FF" d="M26 52v-4.4h-4.4V52H26z"/>
      <path fill="#0080FF" d="M21.6 47.6v-4H18v4h3.6z"/>
    </svg>
  );
}

function TerraformIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#7B42BC" d="M22.8 11.2l13.6 7.8v15.7l-13.6-7.8z"/>
      <path fill="#7B42BC" d="M38.4 19l13.6 7.8V42.6L38.4 34.8z"/>
      <path fill="#7B42BC" d="M38.4 37.2l13.6 7.8v15.8L38.4 53z"/>
      <path fill="#4040B2" d="M7.2 19L20.8 26.8V42.6L7.2 34.8z"/>
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#2496ED" d="M55.4 26.2c-1.4-.9-4.6-1.3-7.1-.8-.3-2.4-1.7-4.4-4.1-6.3l-1.4-.9-1 1.4c-1.2 1.8-1.8 4.3-1.6 6.4.1 1.1.5 2.5 1.2 3.5-.9.5-2.5 1.2-4.8 1.2H4.3c-.8 0-1.4.6-1.5 1.4-.2 2.7.2 5.4 1.2 8 1.2 2.8 3 4.9 5.5 6.2 2.8 1.4 7.3 2.3 12.4 2.3 3.7 0 7.1-.5 10.3-1.5 2.5-.8 4.8-2 6.8-3.5 2.6-2.1 4.5-4.6 5.9-7.4 1.2 0 3.8 0 5.1-2.5.03-.06.4-.7.4-.7l-1-.7zM12.5 30.3h5.3v-5.3h-5.3v5.3zm6.6 0h5.3v-5.3h-5.3v5.3zm6.6 0h5.3v-5.3h-5.3v5.3zm-6.6-6.6h5.3V18.5h-5.3v5.3zm6.6 0h5.3V18.5h-5.3v5.3zm6.6 0h5.3V18.5h-5.3v5.3zm0 6.6h5.3v-5.3h-5.3v5.3zm6.6 0h5.3v-5.3h-5.3v5.3z"/>
    </svg>
  );
}

function KubernetesIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#326CE5" d="M32 8a2.4 2.4 0 0 0-1.1.3L12.3 18.1c-.7.4-1.2 1.1-1.4 1.9L7 39.1c-.2.8 0 1.6.5 2.3l12.6 13.8c.6.6 1.4 1 2.2 1h17.4c.8 0 1.6-.4 2.2-1l12.6-13.8c.5-.6.7-1.5.5-2.3L51.1 20c-.2-.8-.7-1.5-1.4-1.9L31.1 8.3A2.4 2.4 0 0 0 32 8z"/>
      <path fill="#fff" d="M32 18.7c-.5 0-.9.4-1 .9l-.7 5.5-.2.1-4-3.8c-.4-.4-1-.4-1.3 0-.2.2-.3.5-.2.8l1.4 5.4-.2.1-5-2.3c-.5-.2-1 0-1.2.4-.2.5 0 1 .4 1.2l5 2.3-.1.2-5.5 1c-.5.1-.8.6-.7 1.1.1.4.5.7 1 .7h.1l5.5-1 .1.2-3.2 4.4c-.3.4-.2 1 .2 1.3.2.2.5.2.7.2.2 0 .4-.1.6-.3l3.2-4.4.2.1-.4 5.6c0 .5.3 1 .8 1 .5.1 1-.3 1-.8l.4-5.6h.2l2.2 5.1c.2.5.7.7 1.2.5.4-.2.7-.7.5-1.2l-2.2-5.1.2-.1 4.1 3.7c.2.2.4.2.6.2.3 0 .5-.1.7-.3.3-.4.3-1-.1-1.3l-4.1-3.7.1-.2 5.4 1.2h.2c.4 0 .8-.3.9-.7.1-.5-.2-1-.7-1.1l-5.4-1.2v-.2l4.8-2.8c.4-.3.6-.8.3-1.2-.2-.5-.8-.6-1.2-.4l-4.8 2.8-.1-.2 2-5.2c.2-.5-.1-1-.6-1.2-.1 0-.2 0-.3 0-.4 0-.8.2-.9.6l-2 5.2-.2-.1.1-5.6c0-.5-.4-1-.9-1z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#fff" d="M32 6C17.6 6 6 17.6 6 32c0 11.5 7.4 21.2 17.7 24.7 1.3.2 1.8-.6 1.8-1.2v-4.4c-7.2 1.6-8.7-3.5-8.7-3.5-1.2-3-2.9-3.8-2.9-3.8-2.3-1.6.2-1.6.2-1.6 2.6.2 3.9 2.6 3.9 2.6 2.3 3.9 6 2.8 7.5 2.1.2-1.7.9-2.8 1.6-3.4-5.7-.7-11.7-2.9-11.7-12.7 0-2.8 1-5.1 2.6-6.9-.3-.6-1.1-3.3.2-6.8 0 0 2.1-.7 7 2.6a24 24 0 0 1 12.8 0c4.9-3.3 7-2.6 7-2.6 1.4 3.5.5 6.1.3 6.8 1.6 1.8 2.6 4.1 2.6 6.9 0 9.9-6 12-11.7 12.6.9.8 1.7 2.4 1.7 4.7V56c0 .7.5 1.5 1.8 1.2C50.6 53.2 58 43.5 58 32 58 17.6 46.4 6 32 6z"/>
    </svg>
  );
}

function GitLabIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#E24329" d="M32 55.4L41.5 26H22.5z"/>
      <path fill="#FC6D26" d="M32 55.4L22.5 26H8.3z"/>
      <path fill="#FCA326" d="M8.3 26L5 36.1c-.3.9 0 1.9.8 2.5L32 55.4z"/>
      <path fill="#E24329" d="M8.3 26h14.2L16.3 8.5c-.3-1-1.8-1-2.1 0z"/>
      <path fill="#FC6D26" d="M32 55.4L41.5 26h14.2z"/>
      <path fill="#FCA326" d="M55.7 26l3.3 10.1c.3.9 0 1.9-.8 2.5L32 55.4z"/>
      <path fill="#E24329" d="M55.7 26H41.5l6.2-17.5c.3-1 1.8-1 2.1 0z"/>
    </svg>
  );
}

function PulumiIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <circle cx="24" cy="20" r="5.5" fill="#F7BF2A"/>
      <circle cx="40" cy="20" r="5.5" fill="#8A3391"/>
      <circle cx="24" cy="36" r="5.5" fill="#E33E2B"/>
      <circle cx="40" cy="36" r="5.5" fill="#0DBDDF"/>
      <circle cx="32" cy="48" r="5.5" fill="#8A3391"/>
    </svg>
  );
}

function AnsibleIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <circle cx="32" cy="32" r="26" fill="#1A1918"/>
      <path fill="#fff" d="M32 16.5l12.5 24.5h-5.2L32 27.5l-7.3 13.5h14.8L32 16.5zm0 4l5.5 10.8H26.5L32 20.5z"/>
    </svg>
  );
}

function JenkinsIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#D33833" d="M32 6C17.6 6 6 17.6 6 32s11.6 26 26 26 26-11.6 26-26S46.4 6 32 6z"/>
      <path fill="#fff" d="M32 14c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm-2 28c-2.2 0-4-1.8-4-4h2c0 1.1.9 2 2 2s2-.9 2-2h2c0 2.2-1.8 4-4 4zm8-8H24v-2h14v2zm0-4H24c0-3.9 3.1-7 7-7s7 3.1 7 7z"/>
    </svg>
  );
}

function DatadogIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#632CA6" d="M44.8 26.3L42 23.8l2.3-3.2-5.3-4.3-3.7 1.7-3.4-2.3-5.5 1.5-1.2 4.8-4.4 2.3.5 6.3-3.3 4 4.5 5.5-.2 3.2 5.8 3.2 4.2-2.8 4.5 1.3 4-4.8 3.6.7 2.8-6.2z"/>
      <path fill="#fff" d="M32.8 28.5c1.2-.8 3-.4 3.8.8.9 1.2.6 2.9-.5 3.7-1.1.8-2.8.5-3.7-.7-.9-1.2-.7-3 .4-3.8zm-6 4c.8-1.2 2.5-1.5 3.7-.7 1.2.9 1.5 2.5.7 3.7-.9 1.2-2.5 1.5-3.7.7-1.2-.8-1.5-2.5-.7-3.7z"/>
    </svg>
  );
}

function PrometheusIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#E6522C" d="M32 6C17.6 6 6 17.6 6 32s11.6 26 26 26c3.4 0 6.2-.4 6.2-.4v-5.3s-2.6.4-6.2.4c-11.5 0-20.7-9.3-20.7-20.7S20.5 11.3 32 11.3 52.7 20.5 52.7 32c0 5.8-2.3 11-6.1 14.8l3.7 3.8C55.1 45.7 58 39.2 58 32c0-14.4-11.6-26-26-26z"/>
      <path fill="#E6522C" d="M32 18c-1.4 0-2.5.3-2.5.3v4.2s1 .2 2.5.2 2.5-.2 2.5-.2v-4.2s-1.1-.3-2.5-.3zm-6.5 3l-3 3 3 3 3-3zm13 0l-3 3 3 3 3-3zM32 27c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm-8.5 6l-3 3 3 3 3-3zm17 0l-3 3 3 3 3-3zM32 40c-1.4 0-2.5.2-2.5.2v4.3s1.1.3 2.5.3 2.5-.3 2.5-.3v-4.3s-1.1-.2-2.5-.2z"/>
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path fill="#E01E5A" d="M22.3 38.1a3.6 3.6 0 0 1-3.6 3.6 3.6 3.6 0 0 1-3.6-3.6 3.6 3.6 0 0 1 3.6-3.6h3.6zm1.8 0a3.6 3.6 0 0 1 3.6-3.6 3.6 3.6 0 0 1 3.6 3.6v9a3.6 3.6 0 0 1-3.6 3.6 3.6 3.6 0 0 1-3.6-3.6z"/>
      <path fill="#36C5F0" d="M27.7 22.3a3.6 3.6 0 0 1-3.6-3.6 3.6 3.6 0 0 1 3.6-3.6 3.6 3.6 0 0 1 3.6 3.6v3.6zm0 1.8a3.6 3.6 0 0 1 3.6 3.6 3.6 3.6 0 0 1-3.6 3.6h-9a3.6 3.6 0 0 1-3.6-3.6 3.6 3.6 0 0 1 3.6-3.6z"/>
      <path fill="#2EB67D" d="M43.5 27.7a3.6 3.6 0 0 1 3.6-3.6 3.6 3.6 0 0 1 3.6 3.6 3.6 3.6 0 0 1-3.6 3.6h-3.6zm-1.8 0a3.6 3.6 0 0 1-3.6 3.6 3.6 3.6 0 0 1-3.6-3.6v-9a3.6 3.6 0 0 1 3.6-3.6 3.6 3.6 0 0 1 3.6 3.6z"/>
      <path fill="#ECB22E" d="M38.1 43.5a3.6 3.6 0 0 1 3.6 3.6 3.6 3.6 0 0 1-3.6 3.6 3.6 3.6 0 0 1-3.6-3.6v-3.6zm0-1.8a3.6 3.6 0 0 1-3.6-3.6 3.6 3.6 0 0 1 3.6-3.6h9a3.6 3.6 0 0 1 3.6 3.6 3.6 3.6 0 0 1-3.6 3.6z"/>
    </svg>
  );
}

function IntegrationCard({
  item,
  faded,
}: {
  item: { name: string; icon: () => React.ReactNode; status: string };
  faded?: boolean;
}) {
  return (
    <div
      className={`crystal-card group relative flex items-center gap-3 px-5 py-3 rounded-2xl border overflow-hidden transition-all duration-500 cursor-default ${
        faded
          ? "bg-white/[0.02] border-white/[0.06] opacity-50"
          : "bg-white/[0.03] border-white/10"
      }`}
    >
      {/* Crystal shimmer overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.03)_30%,rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.03)_55%,transparent_60%)] bg-[length:250%_100%] group-hover:animate-crystal-shimmer" />
      {/* Prismatic edge glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_16px_rgba(255,255,255,0.04),0_0_24px_rgba(255,255,255,0.04)]" />

      <div className="relative w-7 h-7 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
        <item.icon />
      </div>
      <span className="relative text-sm text-gray-300 font-medium whitespace-nowrap transition-colors duration-500 group-hover:text-white">
        {item.name}
      </span>
      {item.status === "coming" && (
        <span className="relative text-[10px] uppercase tracking-wider text-gray-600 bg-white/5 px-2 py-0.5 rounded-full">
          Soon
        </span>
      )}
    </div>
  );
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="px-6 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Works with your stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Apryl integrates with the tools you already use.
          </p>
        </div>

        {/* Pyramid grid */}
        <div className="flex flex-col items-center gap-4">
          {/* Row 1 — 3 items */}
          <div className="flex justify-center gap-4">
            {ROW_TOP.map((item) => (
              <IntegrationCard key={item.name} item={item} />
            ))}
          </div>

          {/* Row 2 — 5 items */}
          <div className="flex justify-center gap-4">
            {ROW_MID.map((item) => (
              <IntegrationCard key={item.name} item={item} />
            ))}
          </div>

          {/* Row 3 — 7 coming soon (faded) */}
          <div className="flex justify-center gap-4 flex-wrap">
            {ROW_BOTTOM.map((item) => (
              <IntegrationCard key={item.name} item={item} faded />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
