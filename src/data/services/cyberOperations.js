// src/data/services/cyberOperations.js
// Data only: use `icon` keys and map to components in the page.
const cyberOperations = [
  {
    id: 'threat-monitoring',
    title: 'Threat Detection & Monitoring (SIEM/SOAR)',
    desc:
      'Engineering, tuning, and 24/7 monitoring of SIEM/SOAR pipelines for faster detection and automated response.',
    icon: 'RadarIcon',
  },
  {
    id: 'incident-response',
    title: 'Incident Response & DFIR',
    desc:
      'On-call containment, investigation, and remediation. Post-incident reports, lessons learned, and hardening.',
    icon: 'ShieldIcon',
  },
  {
    id: 'vuln-management',
    title: 'Vulnerability Management',
    desc:
      'Program design, scanning, prioritization, and remediation tracking across infra, apps, and dependencies.',
    icon: 'BugIcon',
  },
  {
    id: 'pen-test',
    title: 'Penetration Testing & Red Team',
    desc:
      'Adversary emulation, web/mobile/API testing, social engineering, and purple-team exercises with coaching.',
    icon: 'TargetIcon',
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security & Compliance',
    desc:
      'Guardrails and assessments for AWS/Azure/GCP. FedRAMP, DoD IL, CMMC, NIST 800-53, SOC2—evidence automation.',
    icon: 'CloudLockIcon',
  },
  {
    id: 'iam',
    title: 'Identity & Access Management',
    desc:
      'SSO, MFA, conditional access, least privilege, and zero-trust patterns across apps and cloud.',
    icon: 'IdIcon',
  },
  {
    id: 'awareness',
    title: 'Security Awareness & Phishing Sims',
    desc:
      'Role-based training, phishing simulations, and metrics to measurably raise security posture across teams.',
    icon: 'BookIcon',
  },
  {
    id: 'grc',
    title: 'Risk, Governance & DevSecOps (ATO)',
    desc:
      'Policy, risk registers, and continuous ATO. Embed SAST/DAST/IAST, SBOMs, and signed builds in CI/CD.',
    icon: 'ClipboardIcon',
  },
];

export default cyberOperations;
