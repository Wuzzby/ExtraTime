# Auth Overview (Design Only)

## Objectives
- Allow users to create an account and sign in
- Tie ratings and reviews to a user identity
- Enable public profiles and community features
- Keep MVP behavior possible as a guest (optional)

## Non-Goals (for first auth release)
- Payments
- Complex moderation tooling
- Full social graph (followers)
- DMs

## Auth Options
### Option A: Email + password
Pros: universal, user-controlled
Cons: password storage risk, email delivery requirements

### Option B: OAuth only (Google, Apple)
Pros: fast sign-in, fewer passwords
Cons: platform dependency, requires OAuth setup

### Recommended for first release
OAuth only:
- Sign in with Google
- Sign in with Apple
Add email/password later if needed.

## Sessions
- Use secure, httpOnly session cookies
- Short-lived access + refresh strategy (implementation later)

## Guest Mode
- Users can browse matches without login
- Users can rate/review only when signed in
- Optional: allow guest ratings stored locally but not public