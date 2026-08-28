# Transport Logistic — Freight & Logistics Support Website

A public-facing marketing and customer-support website for a road, air, and ocean freight logistics company, built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. The site presents the company's services, pricing, and story across four core pages, backed by a **Socket.IO real-time support chat** and an inherited **admin dashboard (CMS)**.

---

## Overview

| | |
|---|---|
| **Type** | Frontend (Next.js) consuming a REST API |
| **Audience** | Public marketing site (freight quotes & customer support) + internal content-management dashboard |
| **Stack** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Redux Toolkit |
| **Rendering** | App Router with route groups for layout separation |

The codebase is organized into two clearly separated experiences under a single Next.js App Router instance:

- **`(withCommonLayout)`** — the public site: **Home**, **About**, **Services** (with pricing), **Contact**, plus a CMS-driven **Blog** and legal pages (Privacy Policy, Terms & Conditions, Refund Policy).
- **`(dashboardLayout)`** — the internal CMS: authenticated staff tooling inherited from an earlier version of this product. It still manages content types such as hero sections, testimonials, FAQs, employees, blog, gallery, bookings, and payments. **Note:** the four public marketing pages currently ship static, hardcoded content and are *not* wired to this dashboard — see [Known Limitations](#known-limitations--roadmap) below.

This route-group pattern keeps public and authenticated experiences on independent layouts, navigation, and data-fetching strategies while sharing the same build and deployment pipeline.

---

## Tech Stack

**Core**
- [Next.js 16](https://nextjs.org/) — App Router, file-based routing, image optimization, server/client component split
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/) — strict typing across pages, components, hooks, and API layer

**State & Data**
- [Redux Toolkit](https://redux-toolkit.js.org/) + `react-redux` — global state, RTK Query API slices
- `redux-persist` — persisted client state (e.g. auth session)
- [Axios](https://axios-http.com/) — typed HTTP client / API service layer
- `js-cookie` / `cookies-next` — cookie-based session handling
- `jwt-decode` — client-side token inspection

**Real-Time**
- [Socket.IO Client](https://socket.io/) — persistent WebSocket connection (`/chat` namespace) powering the live support chat widget on the public site and a staff inbox in the dashboard, with typing indicators, read receipts, and presence

**UI & Forms**
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling, with the site's teal/navy brand theme defined via `@theme` tokens in `globals.css`
- [react-hook-form](https://react-hook-form.com/) — form state and validation
- [react-datepicker](https://reactdatepicker.com/), `react-paginate`, `lucide-react`, `react-icons`
- `sweetalert2`, `react-toastify` — user feedback / alerts
- `recharts` — dashboard analytics and charts
- `html2canvas` + `jspdf` — client-side document/PDF export tooling (dashboard)

**Tooling**
- ESLint 9 (flat config) with `eslint-config-next`
- `date-fns` for date formatting/manipulation

---

## Project Structure

```
src/
├── app/
│   ├── (withCommonLayout)/
│   │   ├── page.tsx            # Home
│   │   ├── about/               # About Us
│   │   ├── services/            # Services + pricing
│   │   ├── contact/             # Contact form + info
│   │   ├── blog/ blog/[slug]/   # CMS-driven blog listing & detail
│   │   └── privacy-policy/ terms-conditions/ refund-policy/
│   ├── (dashboardLayout)/
│   │   └── dashboard/           # Inherited CMS modules (see note above)
│   └── login/ signup/ otp/      # Authentication flows
├── components/
│   ├── Common/                  # Shared form controls, modals, auth UI
│   ├── Shared/
│   │   ├── MessageWidget/       # Floating real-time chat widget (public site)
│   │   ├── Navbar/ MobileMenuSheet/ MobileBottomNav/ Footer/ PageHero/ Logo/
│   │   └── CtaBand/              # Reusable closing call-to-action band (About/Services)
│   └── Ui/
│       ├── HomePage/            # Hero, About teaser, Services teaser, Why-Choose,
│       │                        # Projects, Testimonials, FAQ, Blog teaser, Newsletter
│       ├── AboutPage/           # Story, Milestones, Values/Stats, Coverage, Team,
│       │                        # Certifications, Careers
│       ├── ServicesPage/        # Service detail grid, Industries, Process, Pricing,
│       │                        # Guarantees, FAQ
│       ├── ContactPage/         # Contact form
│       └── Dashboard/           # One module per CMS content type
├── redux/
│   ├── api/                     # RTK Query API slices (incl. chatApi)
│   └── features/auth/           # Auth state slice
├── services/                    # API service functions (Axios)
├── hooks/
│   └── useChatSocket.ts         # Socket.IO connection, message state, typing/read-receipt logic
├── helpers/ lib/ utils/         # Utilities, providers, shared constants/data
└── types/                       # Shared TypeScript types
```

---

## Key Features

- **Four-page responsive marketing site** — Home, About, Services, and Contact, fully mobile/tablet/desktop responsive, covering the company's story, service catalog (road/air/ocean freight, warehousing), pricing tiers, process, team, and social proof.
- **Services & pricing** — a detailed service breakdown by mode of transport, an industries-served overview, a 3-tier pricing table (Starter / Business / Enterprise), service guarantees, and a pricing-focused FAQ.
- **Company story & trust-building (About)** — mission/vision, a company milestones timeline, global coverage stats, team profiles, certifications, and a careers teaser.
- **Real-time support chat (Socket.IO)** — a floating chat widget on the public site for visitors, and a live inbox in the staff dashboard, with typing indicators, read receipts, unread badges, and online presence over a persistent WebSocket connection authenticated off the existing session cookie.
- **Contact & lead capture** — a contact form with service-type selection, direct contact details, and an embedded location map.
- **Authentication & accounts** — email/OTP-based signup and login, JWT session handling (HTTP-only cookies), used primarily to scope the persistent chat thread to a signed-in visitor.
- **Inherited CMS/admin dashboard** — role-based staff access to manage blog, testimonials, FAQs, employees, gallery, bookings, and payments. Retained from the platform this site was adapted from; not currently the source of content for the four public pages.
- **Optimized media delivery** — Next.js `Image` component with remote patterns configured for Unsplash imagery (current placeholder photography), Cloudinary, and other CDNs.

---

## Real-Time Chat

- `useChatSocket` (`src/hooks/useChatSocket.ts`) owns a single `socket.io-client` connection to the backend's `/chat` namespace, authenticated via the existing HTTP-only session cookie (`withCredentials: true`) — no extra login step for chat.
- **Visitors** get one persistent thread, surfaced through the floating `MessageWidget` on the public site (also reachable from the mobile bottom nav). **Staff** get a live inbox (`dashboard/support-chat`) of every open conversation, gated by the same role/permission system used elsewhere in the dashboard.
- The hook merges REST-fetched message history (for reload/reconnect) with live socket events (`message:new`, `typing`, `conversation:read`, `conversation:updated`) so the UI never shows stale or duplicate messages, and tracks per-thread unread counts locally.

---

## Known Limitations / Roadmap

This site was adapted from an earlier yacht-charter product on the same codebase. A few things are worth knowing before extending it:

- **Public pages are static.** Home/About/Services content (copy, images, team, pricing) is hardcoded in the section components under `components/Ui/HomePage|AboutPage|ServicesPage`, not fetched from the CMS. Wiring them to the dashboard's content types would be the next step toward a fully editable site.
- **Placeholder content throughout.** Contact details (`+1 (234) 567-890`, `info@transportlog.com`, the Chicago address), team photos, testimonials, and pricing figures are placeholders — replace with real company data before launch.
- **Stock photography.** Section imagery is served from Unsplash (`images.unsplash.com`, already whitelisted in `next.config.js`) as placeholder photography.
- **Dashboard content types are inherited, not repurposed.** Modules like `yachts`, `destinations`, and `sustainability` still exist in the dashboard from the previous product and aren't relevant to a logistics business — they're unused by the public site but not yet removed.
- **No customer-facing booking/payment flow.** Dashboard modules for `bookings` and `payments` still exist (and Stripe-related code remains under `components/Ui/YachtDetail/` and `redux/api/paymentApi.ts`), but there is no public route that initiates a booking or payment on this site.

---

## Getting Started

### Prerequisites
- Node.js 18.18+ (recommended: latest LTS)
- npm (project is committed with `package-lock.json`)
- A running instance of the backend API

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_API_URL=https://your-api-host/api
```

The Socket.IO client derives its connection origin from this same variable (stripping the `/api/v1` suffix), so no separate chat/socket URL needs to be configured.

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for the public site (`/`, `/about`, `/services`, `/contact`, `/blog`), and `/dashboard` for the CMS (requires authentication).

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Deployment

The app builds as a standard Next.js application and deploys cleanly to [Vercel](https://vercel.com/) or any Node-compatible host. Ensure `NEXT_PUBLIC_API_URL` and any additional remote image hostnames (see `next.config.js` → `images.remotePatterns`) are configured per environment.

---

## Author

Built and maintained by **Zamirul Kabir** — frontend engineer specializing in Next.js/React platforms with integrated CMS tooling for non-technical stakeholders.
