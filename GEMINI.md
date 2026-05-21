# Elmiko Transport - Project Instructions

## Tech Stack
- **Framework:** Next.js with App Router (`app/`).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **Database/Backend:** Next.js API Routes, Prisma ORM (PostgreSQL).

## Architecture & File Structure
- **Public Site:** Grouped under `src/app/(client)` (shares layout with Navbar & Footer).
  - Routes: `/` (Homepage), `/o-nas`, `/sluzby`, `/vozovy-park`, `/poptavka`.
- **CMS/Admin:** Grouped under `src/app/(admin)` (password protected).
  - Routes: `/admin/login`, `/admin/fleet`, `/admin`.
- **API:** Backend routes in `src/app/api/` (e.g., `/fleet`, `/send-inquiry`, `/auth`).
- **Components:** Reusable UI in `src/components/` (e.g., `ui/`, `Navbar.tsx`, `InquiryForm.tsx`).
- **Database Schema:** Defined in `prisma/schema.prisma`.
- **Lib:** Helpers in `src/lib/` (e.g., Prisma client, Mailer).

## Visual Identity & Design
- **Colors:** Deep anthracite/black backgrounds (`#121212`), pure white or light gray for text.
- **Accents:** Aggressive red (`#D90429`) for Call-to-Action (CTA) and interactive elements. (No blue).
- **Style:** Modern, sharp, clean, geometric, industrial. Use minimal or NO rounded corners (e.g., `rounded-none`). The design must feel reliable and dynamic.

## Key Content & Components
- **Homepage:** Strong Hero section (truck photo, logo, main title "Mezinárodní doprava a logistika", prominent red CTA), dynamic services icons.
- **Fleet (Vozový park):** Vehicle cards with photo, name, specs, visual badges, sourced from Prisma DB.
- **Inquiry Form:** Complex form (Sender, Company, Cargo details, Locations, Vehicle dropdown), fully responsive.

## Development Guidelines
- Write clean, modular, and fully responsive components (Mobile-first Tailwind).
- Keep components focused and maintain strict type safety.
- Proactively suggest best practices, especially concerning database design and project architecture.
- Maintain a concise, practical, no-fluff tone in communication.