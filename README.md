# Spring Website

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required environment variables:
- `SENDGRID_API_KEY`: Your SendGrid API key for sending contact form emails
- `TO_EMAIL`: Primary recipient email address
- `TO_EMAIL_2`: (Optional) Secondary recipient email address
- `TO_EMAIL_3`: (Optional) Third recipient email address

### 3. Local development

#### Option A: Development with Cloudflare Functions (Recommended for testing contact form)

```bash
# Terminal 1: Build and watch for changes
npm run build -- --watch

# Terminal 2: Run Wrangler Pages dev server with Functions support
npx wrangler pages dev dist --compatibility-date=2024-01-01
```

This will:
- Watch for file changes and rebuild automatically (Terminal 1)
- Serve the built files with Cloudflare Functions at `http://localhost:8788` (Terminal 2)
- Enable the contact form email sending via `/api/contact` endpoint

**Note**: Make sure `.env.local` exists with your SendGrid API key before running.

#### Option B: Standard Vite development (Faster, but no Functions)

```bash
npm run dev
```

This is faster for UI development but the contact form won't actually send emails (no `/api/contact` endpoint).

### 4. Build

```bash
npm run build
```

## Contact Form

The contact form at `/contact` uses Cloudflare Functions and SendGrid API to send emails.

### API Endpoint

- **Endpoint**: `/api/contact`
- **Method**: POST
- **Content-Type**: application/json

### Request Body

```json
{
  "companyName": "string (required)",
  "department": "string (required)",
  "fullName": "string (required)",
  "address": "string (optional)",
  "telephone": "string (optional)",
  "email": "string (required)",
  "specification": "string (required, max 500 chars)",
  "preferredDeliveryDate": "string (optional)",
  "preferredUnitPrice": "string (optional)"
}
```

## Deployment

Deploy to Cloudflare Pages:

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Add environment variables in Cloudflare Pages dashboard:
   - `SENDGRID_API_KEY`
   - `TO_EMAIL`
   - `TO_EMAIL_2` (optional)
   - `TO_EMAIL_3` (optional)
