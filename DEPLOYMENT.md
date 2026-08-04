# Deployment Guide — Horizon Travels

Horizon Travels is built with Next.js 14 App Router and Prisma SQLite.

## Vercel Deployment

1. Connect GitHub repository to Vercel.
2. Build command: `npx prisma generate && npx prisma db push && next build`.
