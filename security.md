# Security Policy — mzainulabdin.xyz

**Project**: mzainulabdin.xyz — Personal Developer Portfolio with AI Chatbot
**Stack**: Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, server-side AI integration
**Document Status**: Draft — Pre-Implementation Security Specification
**Scope Note**: This document defines the security requirements, architecture, and practices for a personal portfolio website. It is intentionally scoped to what is proportionate for a small, single-owner project with a lightweight AI chatbot — not an enterprise system.

---

## 1. Security Objectives

This project's security posture is guided by the following core objectives:

1. Protect AI API credentials and all other secrets from exposure.
2. Prevent unauthorized or unintended use of the AI API.
3. Protect chatbot and API endpoints from abuse and automated attacks.
4. Validate and sanitize all user input, server-side.
5. Prevent common web vulnerabilities (XSS, injection, clickjacking, etc.).
6. Protect visitor privacy and minimize personal data collection.
7. Avoid unnecessary storage of personal or chat data.
8. Secure the production deployment environment.
9. Keep dependencies and third-party packages secure and up to date.
10. Prevent accidental exposure of server-side information (keys, internals, stack traces).

---

## 2. Security Architecture

### 2.1 Conceptual Data Flow

```
User (Browser)
      ↓
Next.js / React Frontend (Client Components)
      ↓
Chatbot UI (renders messages, sends user input)
      ↓
Next.js Server Layer (API Route / Server Action)
      ↓
AI Provider API (external service)
```

### 2.2 Architectural Principles

- **SEC-ARCH-01**: The browser SHALL NEVER receive, store, or have any code path exposing the private AI API key.
- **SEC-ARCH-02**: The AI API key SHALL remain server-side at all times — it SHALL only be read within server-executed code (API Routes, Server Actions, or server-only modules).
- **SEC-ARCH-03**: The frontend SHALL communicate exclusively with a controlled, first-party Next.js API endpoint (or Server Action); it SHALL NEVER call the AI provider directly from client code.
- **SEC-ARCH-04**: The server SHALL validate, sanitize, and rate-limit every incoming request **before** forwarding it to the AI provider.
- **SEC-ARCH-05**: All secrets SHALL be stored using environment variables, never in source code.
- **SEC-ARCH-06**: Production secrets SHALL be configured exclusively through the deployment platform's secure environment-variable system (e.g., Vercel Project Environment Variables), not through files committed to the repository.

This architecture ensures a single, auditable trust boundary: the Next.js server layer. Everything on the client side is treated as untrusted input.

---

## 3. Secret Management

| ID | Requirement | Priority |
|---|---|---|
| **SEC-001** | AI API keys and all other credentials SHALL NEVER be hardcoded in source files. | Critical |
| **SEC-002** | API keys and secrets SHALL NEVER be committed to Git, including in commit history, branches, or tags. | Critical |
| **SEC-003** | `.env.local` (and any other file containing real secrets) SHALL be listed in `.gitignore` and excluded from version control. | Critical |
| **SEC-004** | A `.env.example` file SHALL be maintained containing only placeholder values, committed to the repository as a reference for required variables. | High |
| **SEC-005** | Secrets SHALL NEVER be exposed through `NEXT_PUBLIC_*` environment variables, since these are inlined into the client-side JavaScript bundle. | Critical |
| **SEC-006** | API keys SHALL NEVER be sent to, or be readable by, the browser under any circumstance (network response, HTML source, inline scripts). | Critical |
| **SEC-007** | Secrets SHALL NEVER appear in logs, error messages, screenshots, documentation, commit messages, or client-side bundles. | Critical |
| **SEC-008** | If a credential is suspected or confirmed compromised, it SHALL be rotated immediately (see Section 20). | Critical |
| **SEC-009** | Separate credentials/configuration SHOULD be used for development and production where practically supported by the provider. | Medium |

### 3.1 Example `.env.example`

```
AI_API_KEY=your_private_key_here
```

**Note**: The value shown above is a placeholder only. The actual secret value SHALL exist only in local, untracked `.env.local` files and in the hosting provider's secure environment-variable configuration — never in source control, documentation, or this file.

---

## 4. AI Chatbot Security

The AI chatbot is the highest-risk component of this project, since it involves external API calls, user-generated input, and potential cost exposure. The following requirements apply specifically to it.

| ID | Requirement | Priority |
|---|---|---|
| **SEC-010** | All calls to the AI provider SHALL be made exclusively from server-side code (API Route or Server Action), never from the client. | Critical |
| **SEC-011** | All user input SHALL be validated server-side before being forwarded to the AI provider (type, presence, length). | Critical |
| **SEC-012** | A maximum message length SHALL be enforced server-side (e.g., a defined character cap) to limit payload size and cost exposure. | High |
| **SEC-013** | A maximum total request body size SHALL be enforced at the API layer to reject oversized payloads early. | High |
| **SEC-014** | Rate limiting SHALL be applied per IP/session/fingerprint to the chatbot endpoint to prevent abuse and cost overruns. | Critical |
| **SEC-015** | Basic abuse/spam prevention (e.g., request throttling, pattern detection for repeated identical requests) SHALL be implemented. | High |
| **SEC-016** | Requests to the AI provider SHALL have a defined timeout, after which the request is aborted and a safe error returned. | Medium |
| **SEC-017** | Errors returned by the AI provider SHALL be caught and handled gracefully; raw provider error payloads SHALL NOT be forwarded to the client. | High |
| **SEC-018** | Under no circumstance SHALL the AI API key be included in any response, error message, or client-visible artifact. | Critical |
| **SEC-019** | Controls SHALL exist (rate limits, message caps, context limits) to prevent excessive API usage and unexpected billing costs. | Critical |
| **SEC-020** | Chatbot conversations SHALL NOT be persisted beyond the active session/request unless a specific, documented feature requires it (see Section 9). | High |
| **SEC-021** | User-provided text SHALL be treated as untrusted at every layer — never interpolated into executable contexts (e.g., `eval`, dynamic imports, shell commands). | Critical |
| **SEC-022** | AI-generated content SHALL NEVER be treated as trusted or executable code; it SHALL NOT be `eval`'d, dynamically executed, or used to construct executable logic. | Critical |
| **SEC-023** | Chatbot responses SHALL NOT be allowed to execute arbitrary JavaScript or inject raw HTML into the DOM. | Critical |
| **SEC-024** | Chatbot messages (both user and AI-generated) SHALL be rendered as escaped text by default, relying on React's default escaping behavior. | Critical |
| **SEC-025** | If Markdown or rich-text rendering is supported for chatbot responses, the rendering pipeline SHALL use a sanitizing Markdown renderer, and raw/unsafe HTML tags SHALL be stripped or disallowed. | High |

---

## 5. API Security

Applies to all Next.js API Routes and Server Actions (chatbot endpoint, contact form endpoint, and any future endpoints).

| ID | Requirement | Priority |
|---|---|---|
| **SEC-026** | Endpoints that would ever require privileged access SHALL implement authentication before granting that access. (Not required for current public-facing endpoints unless privileged functionality is added.) | Medium |
| **SEC-027** | Authorization checks SHALL be applied wherever an endpoint distinguishes between permitted and non-permitted actions. | Medium |
| **SEC-028** | All request input SHALL be validated server-side (type, shape, required fields), regardless of any client-side validation already performed. | Critical |
| **SEC-029** | Request bodies SHALL be validated against an explicit schema (e.g., using a schema-validation library) rather than trusted implicitly. | High |
| **SEC-030** | Rate limiting SHALL be applied to all public-facing API endpoints, not only the chatbot. | High |
| **SEC-031** | Maximum request size limits SHALL be enforced to prevent oversized-payload abuse. | Medium |
| **SEC-032** | Each endpoint SHALL validate the HTTP method used and reject unsupported methods (e.g., reject `GET` on a mutation-only endpoint). | Medium |
| **SEC-033** | Error responses SHALL be generic and SHALL NOT leak internal details (stack traces, file paths, provider error payloads). | Critical |
| **SEC-034** | API responses SHALL contain only the data necessary for the client; no internal/system fields SHALL be included. | High |
| **SEC-035** | Endpoints SHALL include reasonable timeout handling to avoid hanging requests consuming server resources. | Medium |
| **SEC-036** | Server-side logs SHALL capture useful technical detail for debugging without including sensitive content (see Section 13). | High |

> **Key Principle**: Client-side validation exists for user experience only (immediate feedback, form usability). It provides **no security guarantee**. Server-side validation is mandatory and is the only validation that can be trusted.

---

## 6. Common Web Security

| Risk | Relevance to This Project | Mitigation |
|---|---|---|
| **XSS (Cross-Site Scripting)** | High — chatbot renders AI/user-generated text | React's default JSX escaping; sanitized Markdown rendering if rich text is supported (SEC-024, SEC-025); avoid `dangerouslySetInnerHTML`. |
| **CSRF (Cross-Site Request Forgery)** | Low–Medium — no authenticated session/state-changing account actions by default | Next.js API routes SHOULD verify request origin for state-changing requests (e.g., contact form, chatbot) using same-site cookies or origin checks where applicable. |
| **Injection attacks** | Low — no direct database/SQL layer in the current scope | Strict input validation (SEC-028/029); avoid constructing any dynamic queries or commands from user input if a database is introduced later. |
| **Open redirects** | Low | Avoid redirect logic driven by unvalidated user-supplied URLs; if used, validate against an allow-list. |
| **Clickjacking** | Medium | Frame-protection via CSP `frame-ancestors` and/or `X-Frame-Options` (Section 7). |
| **Malicious file uploads** | Not applicable — no upload functionality in current scope | If uploads are added later, strict type/size validation and storage isolation SHALL be implemented at that time. |
| **Unsafe HTML rendering** | High — relevant to chatbot output | Never use `dangerouslySetInnerHTML` with unsanitized content; sanitize any Markdown-to-HTML conversion (SEC-025). |
| **Prototype pollution** | Low | Use well-maintained, updated parsing/validation libraries; avoid unsafe deep-merge utilities on untrusted input. |
| **Dependency vulnerabilities** | Medium | Regular `npm audit` and dependency review (Section 11). |

Next.js and React provide strong secure-by-default behavior (e.g., automatic JSX escaping, no direct DOM string injection by default). However, **these defaults do not eliminate the need for secure implementation** — deliberate misuse (e.g., `dangerouslySetInnerHTML`, unvalidated input passed into sensitive contexts) can still introduce vulnerabilities.

---

## 7. Security Headers

The following headers SHOULD be configured at the framework/hosting level for production:

| Header | Purpose | Guidance |
|---|---|---|
| **Content-Security-Policy** | Restricts which sources scripts, styles, fonts, images, and connections may load from | SHALL be scoped to the application's actual resources (self-hosted assets, Google Fonts if used, the AI provider's API domain for any client-side status calls, analytics domain if used). Wildcard (`*`) source policies SHALL NOT be used. |
| **X-Content-Type-Options** | Prevents MIME-type sniffing | Set to `nosniff`. |
| **Referrer-Policy** | Controls how much referrer information is sent | Recommended: `strict-origin-when-cross-origin`. |
| **Strict-Transport-Security** | Enforces HTTPS at the browser level | Recommended: `max-age=63072000; includeSubDomains; preload` (once HTTPS is confirmed stable). |
| **Permissions-Policy** | Disables unused browser features/APIs | Restrict unused features (e.g., camera, microphone, geolocation) unless explicitly required. |
| **Frame protection** | Prevents clickjacking | Achieved via CSP `frame-ancestors 'none'` (or `'self'` if self-framing is needed); `X-Frame-Options: DENY` may be used as a legacy fallback. |

**SEC-037**: CSP and other headers SHALL be defined based on the application's actual, documented list of external resources (fonts, AI provider endpoint, analytics if added) — not copied as a generic permissive template. | Priority: High

---

## 8. HTTPS and Transport Security

| ID | Requirement | Priority |
|---|---|---|
| **SEC-038** | The production website SHALL be served exclusively over HTTPS. | Critical |
| **SEC-039** | Any HTTP request SHALL be redirected to HTTPS where the hosting platform supports it. | High |
| **SEC-040** | No sensitive communication (chatbot requests, contact form submissions) SHALL ever occur over plain HTTP. | Critical |
| **SEC-041** | All server-to-AI-provider communication SHALL occur over HTTPS. | Critical |
| **SEC-042** | Secrets or sensitive data SHALL NEVER be transmitted via URL query parameters (which can be logged by intermediaries, browsers, or proxies). | Critical |

---

## 9. User Privacy

| ID | Requirement | Priority |
|---|---|---|
| **SEC-043** | The website SHALL NOT collect personal information beyond what is strictly necessary (e.g., contact form fields the visitor voluntarily submits). | High |
| **SEC-044** | Chatbot conversations SHALL NOT be stored persistently unless a specific, documented feature requires it and the user is informed. | High |
| **SEC-045** | If conversation storage is introduced in the future, a clear retention period and deletion policy SHALL be defined and documented before implementation. | Medium |
| **SEC-046** | User messages SHALL NOT be logged in full/verbatim unless strictly necessary for debugging, and any such logging SHALL be time-limited and access-restricted. | High |
| **SEC-047** | No user data (contact submissions, chatbot content) SHALL be exposed publicly or made accessible without authorization. | Critical |
| **SEC-048** | Contact form information SHALL be used only for its stated purpose (responding to the inquiry) and SHALL NOT be repurposed or shared with third parties. | High |
| **SEC-049** | Before production use, the AI provider's data handling and retention policies SHALL be reviewed to confirm they are acceptable for this project's privacy posture. | High |

---

## 10. Contact Form Security

| ID | Requirement | Priority |
|---|---|---|
| **SEC-050** | All contact form input SHALL be validated server-side, regardless of client-side validation. | Critical |
| **SEC-051** | Input length limits SHALL be enforced on all fields (name, email, message). | Medium |
| **SEC-052** | The email field SHALL be validated against a standard email format pattern server-side. | Medium |
| **SEC-053** | Spam protection SHALL be implemented (e.g., a honeypot field and/or a lightweight challenge such as Turnstile/CAPTCHA). | High |
| **SEC-054** | The contact endpoint SHALL be rate-limited per IP/session to prevent flooding. | High |
| **SEC-055** | Abuse prevention measures (e.g., duplicate-submission detection) SHOULD be implemented. | Medium |
| **SEC-056** | Error messages returned to the user SHALL be generic and SHALL NOT reveal backend/service details. | High |
| **SEC-057** | Submitted message content SHALL NOT be logged in full unless necessary, and logs SHALL avoid storing sensitive personal content. | Medium |
| **SEC-058** | Hidden form fields SHALL NOT be trusted as a security or validation mechanism — all values SHALL be validated server-side regardless of visibility. | Medium |
| **SEC-059** | Any credentials used for email delivery or a third-party form-handling API SHALL be protected per Section 3 (Secret Management). | Critical |

---

## 11. Dependency Security

| ID | Requirement | Priority |
|---|---|---|
| **SEC-060** | Next.js, React, and all other dependencies SHALL be kept reasonably up to date. | High |
| **SEC-061** | `npm audit` (or an equivalent security-scanning tool) SHALL be run periodically and before major releases. | High |
| **SEC-062** | High-severity vulnerabilities reported by dependency audits SHALL be reviewed and addressed promptly. | High |
| **SEC-063** | Unused packages SHALL be removed from the project. | Medium |
| **SEC-064** | New dependencies SHALL be added only when genuinely necessary, consistent with the "avoid unnecessary dependencies" principle from the project's SRS. | Medium |
| **SEC-065** | Preference SHALL be given to actively maintained, widely used packages over unmaintained or obscure alternatives. | Medium |
| **SEC-066** | Dependency versions SHALL be locked via the package lock file (`package-lock.json` or equivalent) and the lock file SHALL be committed. | High |
| **SEC-067** | New dependencies SHOULD be briefly reviewed (maintenance status, download volume, known issues) before being added to the project. | Medium |

---

## 12. Environment Security

The project SHALL recognize three distinct environments:

| Environment | Purpose |
|---|---|
| **Local development** | Developer's local machine, using `.env.local` with development-only credentials where possible. |
| **Preview/staging** | Deployment platform preview builds (e.g., Vercel preview deployments) used for pre-production verification. |
| **Production** | The live `mzainulabdin.xyz` deployment. |

| ID | Requirement | Priority |
|---|---|---|
| **SEC-068** | Development secrets SHALL NOT be reused in production where separate credentials are practically obtainable. | Medium |
| **SEC-069** | Production secrets SHALL exist only within the hosting platform's secure environment-variable configuration — never in the repository. | Critical |
| **SEC-070** | `.env.local` SHALL NOT be committed to version control under any circumstance. | Critical |
| **SEC-071** | Debug information, verbose logging, and development-only tooling SHALL be disabled or minimized in the production build. | High |
| **SEC-072** | Preview deployments SHALL NOT expose production secrets; where possible, preview environments SHALL use separate, lower-privilege credentials. | High |

---

## 13. Error Handling and Logging

| ID | Requirement | Priority |
|---|---|---|
| **SEC-073** | Stack traces SHALL NOT be exposed to end users in production. | Critical |
| **SEC-074** | API keys SHALL NEVER appear in any error response, log line visible to the client, or thrown exception message surfaced to the browser. | Critical |
| **SEC-075** | Database credentials (if a database is introduced later) SHALL NEVER be exposed in errors or logs. | Critical |
| **SEC-076** | Internal filesystem paths SHALL NOT be exposed in user-facing error messages. | High |
| **SEC-077** | Internal infrastructure details (hosting internals, internal service names, provider account details) SHALL NOT be exposed to end users. | High |
| **SEC-078** | User-facing errors SHALL be generic and actionable (e.g., "Something went wrong. Please try again.") rather than technical. | High |
| **SEC-079** | Server-side logs MAY capture useful technical detail for debugging (error type, endpoint, timestamp) but SHALL avoid storing unnecessary sensitive content (full user messages, secrets, personal data). | High |

---

## 14. AI Cost and Abuse Protection

Because the chatbot depends on a paid, external AI API, cost and abuse control is a first-class security concern for this project.

| ID | Requirement | Priority |
|---|---|---|
| **SEC-080** | Rate limits SHALL be applied per IP address and/or session to the chatbot endpoint. | Critical |
| **SEC-081** | A maximum message length SHALL be enforced server-side before forwarding any request to the AI provider. | High |
| **SEC-082** | A maximum conversation context size SHALL be enforced to prevent unbounded token growth and cost escalation. | High |
| **SEC-083** | Requests to the AI provider SHALL have an enforced timeout. | Medium |
| **SEC-084** | A reasonable usage limit (e.g., messages per visitor per time window) SHALL be enforced to prevent unbounded usage by a single source. | High |
| **SEC-085** | AI API usage SHOULD be monitored (via the provider's dashboard or logging) to detect abnormal spikes. | Medium |
| **SEC-086** | Provider-side spending limits or usage alerts SHOULD be configured where the AI provider supports them, as a backstop against misconfigured or bypassed application-level limits. | High |
| **SEC-087** | The chatbot endpoint SHALL include protections against automated request flooding (e.g., rate limiting, basic bot-pattern detection). | High |
| **SEC-088** | The chatbot SHALL NOT offer unlimited, unrestricted AI requests to anonymous users. | Critical |

**Explicit note**: Authentication is **not required** for the chatbot or any other endpoint in the current scope. Rate limiting, message caps, and usage limits are the primary control mechanisms — authentication SHALL only be introduced if a future feature genuinely requires it (see Section 23).

---

## 15. Security of Frontend

| ID | Requirement | Priority |
|---|---|---|
| **SEC-089** | Private API keys SHALL NEVER be stored in client-side JavaScript, including in bundled code, inline scripts, or component state. | Critical |
| **SEC-090** | `localStorage` and `sessionStorage` SHALL NOT be used to store any secret or sensitive credential. | Critical |
| **SEC-091** | Client-side state (including anything editable via browser dev tools) SHALL NEVER be trusted for security-relevant decisions; all such decisions SHALL be re-validated server-side. | Critical |
| **SEC-092** | Any dynamic HTML content SHALL be sanitized before rendering. | High |
| **SEC-093** | `dangerouslySetInnerHTML` SHALL be avoided; if it is ever genuinely necessary, the content SHALL be passed through a dedicated sanitization library first. | Critical |
| **SEC-094** | Internal API structure, endpoint naming conventions, or implementation details SHALL NOT be unnecessarily exposed in client-visible code/comments. | Low |
| **SEC-095** | Public configuration (`NEXT_PUBLIC_*` variables) SHALL be kept strictly separate from private/server-only configuration. | Critical |

---

## 16. Deployment Security

| ID | Requirement | Priority |
|---|---|---|
| **SEC-096** | HTTPS SHALL be enabled for the production deployment. | Critical |
| **SEC-097** | All secrets SHALL be configured through the hosting provider's secure environment-variable system. | Critical |
| **SEC-098** | Production secrets SHALL NOT be duplicated into preview/development environments unless explicitly necessary. | Medium |
| **SEC-099** | Debug/development mode SHALL be disabled in the production build. | High |
| **SEC-100** | Security headers (Section 7) SHALL be configured and verified in the production deployment. | High |
| **SEC-101** | Error monitoring (if used) SHALL be configured to avoid capturing sensitive data (API keys, full user messages). | High |
| **SEC-102** | Dependency checks (Section 11) SHALL be run before each production deployment. | Medium |
| **SEC-103** | Preview deployments SHALL NOT unnecessarily expose production-grade secrets or data. | High |

---

## 17. Security Testing

A lightweight, proportionate testing checklist for this project — not enterprise-grade penetration testing.

| Test | Description |
|---|---|
| **`npm audit`** | Run before each release to catch known dependency vulnerabilities. |
| **Dependency review** | Manually review any newly added dependency. |
| **API endpoint testing** | Verify each endpoint handles valid, invalid, and malformed input correctly. |
| **Input validation testing** | Confirm server-side validation rejects oversized, malformed, or unexpected input. |
| **Rate-limit testing** | Confirm chatbot and contact endpoints correctly throttle excessive requests. |
| **XSS testing** | Attempt to inject script/HTML via chatbot input and contact form fields; confirm safe rendering. |
| **Security header verification** | Use a header-scanning tool to confirm headers from Section 7 are present in production. |
| **HTTPS verification** | Confirm HTTPS is enforced and HTTP redirects correctly. |
| **Secret exposure checks** | Inspect the client bundle and network responses to confirm no secrets are present. |
| **Production build testing** | Run and manually verify the production build before deployment. |
| **Environment-variable checks** | Confirm required variables are set correctly per environment and no `NEXT_PUBLIC_*` variable contains a secret. |
| **Chatbot abuse testing** | Simulate rapid/repeated requests to confirm rate limiting and usage caps function as intended. |

**Note**: Formal, paid penetration testing is **not required** for the initial version of this portfolio project. The checklist above is sufficient for a proportionate security posture at this scale.

---

## 18. Security Requirement Summary

All requirements in this document follow the `SEC-XXX` numbering scheme introduced in Sections 3–16. Priorities are assigned as follows:

| Priority | Meaning |
|---|---|
| **Critical** | Direct risk of secret exposure, unauthorized access, or significant financial/security impact. Must be implemented before any production launch. |
| **High** | Meaningful security or privacy risk if omitted; should be implemented before production launch. |
| **Medium** | Reasonable hardening measure; recommended but not launch-blocking in all cases. |
| **Low** | Minor hardening or best-practice item. |

Critical severity is reserved for genuine risks (secret exposure, unauthenticated privileged access, unbounded cost exposure) — it is **not** applied to routine portfolio features.

---

## 19. Threat Model

| Threat | Attack Vector | Potential Impact | Mitigation |
|---|---|---|---|
| **API key theft** | Key accidentally committed to Git, exposed in client bundle, or leaked via logs/error messages | Unauthorized AI API usage, financial cost, potential provider account suspension | Server-only key storage (SEC-001–007), `.gitignore` enforcement, no `NEXT_PUBLIC_*` exposure, secret scanning before commits |
| **AI endpoint abuse** | Automated scripts sending excessive chatbot requests | Unexpected AI provider costs, degraded service for legitimate visitors | Rate limiting (SEC-014, SEC-080), message/context caps, provider-side spending limits (SEC-086) |
| **Automated spam** | Bots submitting contact form or chatbot requests at scale | Inbox/API flooding, wasted resources, potential cost impact | Honeypot/CAPTCHA (SEC-053), rate limiting (SEC-054, SEC-080) |
| **XSS through chatbot content** | Malicious script/HTML embedded in user input or reflected in AI-generated output | Execution of arbitrary script in a visitor's browser, session/data compromise | Escaped rendering by default (SEC-024), sanitized Markdown rendering (SEC-025), avoidance of `dangerouslySetInnerHTML` (SEC-093) |
| **Malicious input** | Crafted payloads sent to API routes (oversized, malformed, unexpected types) | Server errors, resource exhaustion, potential downstream issues with the AI provider | Server-side schema validation (SEC-028, SEC-029), size limits (SEC-013, SEC-031) |
| **Credential leakage** | Secrets exposed via logs, error messages, screenshots, or documentation | Same as API key theft; broader credential compromise | Logging discipline (Section 13), secret management rules (Section 3) |
| **Dependency vulnerability** | A third-party package used by the project has a known exploit | Potential code execution, data exposure, or supply-chain compromise | Regular `npm audit`, dependency review, minimal dependency footprint (Section 11) |
| **Contact form spam** | Automated or manual abuse of the public contact form | Inbox flooding, potential phishing vector if messages are displayed anywhere | Spam protection and rate limiting (Section 10) |
| **Excessive AI API usage** | Legitimate-looking but high-volume traffic (or a bug causing repeated calls) driving up cost | Unexpected billing, potential service disruption | Usage limits, monitoring, provider spending alerts (Section 14) |
| **Misconfigured deployment environment** | Secrets set incorrectly, debug mode left on, or headers not configured in production | Information disclosure, increased attack surface | Deployment checklist (Section 16), pre-launch security checklist (Section 21) |

---

## 20. Security Incident Response

A lightweight incident-response procedure appropriate for a single-maintainer project:

1. **Detect the issue** — via monitoring, error alerts, unusual AI provider billing, or manual discovery.
2. **Identify the affected component** — determine whether the issue is in the chatbot endpoint, contact form, deployment configuration, or a dependency.
3. **Disable or rotate compromised credentials immediately** — see Section 20.1 below for the AI API key procedure specifically.
4. **Stop abusive API access if necessary** — temporarily disable the affected endpoint or tighten rate limits while investigating.
5. **Patch the vulnerability** — implement and test a fix locally.
6. **Deploy the fix** — push the patched version to production as soon as it is verified.
7. **Verify the fix** — confirm the vulnerability is resolved and no regression was introduced.
8. **Review logs and impact** — assess what (if anything) was accessed, how long the exposure lasted, and whether any cost or data impact occurred.
9. **Document the incident** — record what happened, the root cause, and the remediation, for future reference.

### 20.1 Specific Procedure: Exposed AI API Key

1. Immediately revoke/rotate the exposed key through the AI provider's dashboard.
2. Generate a new key and update it only in the hosting platform's secure environment-variable configuration.
3. Redeploy the application so the new key takes effect.
4. Confirm (via `git log`/history search) how and where the key was exposed (e.g., committed file, log output, client bundle).
5. Remove the exposed key from Git history if it was committed, and treat the old key as permanently compromised even after rotation.
6. Review AI provider billing/usage during the exposure window for signs of abuse.
7. Add or strengthen safeguards (e.g., pre-commit secret scanning) to prevent recurrence.

---

## 21. Security Checklist (Pre-Production)

- [ ] HTTPS enabled
- [ ] AI API key stored server-side only
- [ ] No secrets present in Git (including history)
- [ ] `.env.local` correctly ignored via `.gitignore`
- [ ] `.env.example` contains placeholders only, no real values
- [ ] Server-side input validation implemented on all endpoints
- [ ] Chatbot rate limiting implemented
- [ ] Chatbot message length limits implemented
- [ ] AI usage/context limits configured
- [ ] Security headers configured (CSP, X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy)
- [ ] XSS protections reviewed (chatbot rendering, Markdown sanitization if applicable)
- [ ] Contact form protected (validation, spam protection, rate limiting)
- [ ] Dependencies audited (`npm audit` reviewed and addressed)
- [ ] Production error messages sanitized (no stack traces, no internal details)
- [ ] No sensitive information present in logs
- [ ] Production environment variables verified in hosting platform
- [ ] All API endpoints manually tested (valid/invalid/malformed input)
- [ ] Security testing checklist (Section 17) completed

---

## 22. Out of Scope

The following are explicitly **not required** for the initial version of this portfolio and SHALL NOT be treated as launch blockers:

- Enterprise identity management (SSO, IAM systems)
- Complex role-based access control (RBAC)
- A private admin dashboard (unless added in a future phase)
- Database encryption architecture (not applicable — no database in current scope)
- Enterprise SIEM (Security Information and Event Management) tooling
- Enterprise SOC (Security Operations Center) monitoring
- Advanced zero-trust network architecture
- Complex microservice-to-microservice security
- Dedicated, paid penetration-testing infrastructure

These items may become relevant if the project evolves to include user accounts, an admin panel, a database, or significantly higher traffic/risk exposure. They are intentionally excluded now to keep the security posture proportionate to the project's actual scale.

---

## 23. Future Security Improvements

The following are documented as **possible future enhancements**, to be evaluated and scoped separately if the project grows:

- User/admin authentication (if an admin dashboard or privileged feature is added)
- Admin dashboard-specific security controls
- Database security (if a database is introduced)
- CAPTCHA/Cloudflare Turnstile integration for stronger bot protection
- More advanced, distributed rate limiting (e.g., edge-based rate limiting)
- Web Application Firewall (WAF)
- More advanced application/error monitoring
- Audit logging for administrative actions
- Automated dependency vulnerability scanning in CI
- Security-focused CI/CD checks (e.g., secret-scanning pre-commit/pre-push hooks)

---

## 24. Document Notes

- This document defines **requirements and architecture only**. It does not contain, and SHALL NOT be interpreted as containing, application code, API implementation code, or chatbot implementation code.
- No credentials, API keys, or infrastructure details are included or implied anywhere in this document. All examples use placeholder values only.
- No statement in this document SHALL be read as an assertion that any control described here has already been implemented. This document is a specification to guide implementation, not a record of completed work.
- This document SHOULD be revisited and updated whenever the project's architecture changes materially (e.g., a database, authentication, or admin dashboard is introduced).

---

*End of SECURITY.md — MZAINULABDIN.xyz*