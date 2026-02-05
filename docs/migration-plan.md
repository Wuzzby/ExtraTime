# Migration Plan: localStorage to Accounts (Design Only)

## Current State
- ratings and reviews stored in localStorage
- no user identity
- profile page reads from local storage

## Target State
- reviews stored in database tied to userId
- profile page queries by userId
- match page queries by matchId

## Migration Steps
1. Add auth and user creation
2. Add database tables for User and Review
3. Add API routes:
   - GET reviews by match
   - GET reviews by user
   - POST/PUT review
4. Update UI to read from API instead of localStorage
5. Optional one-time import:
   - if user has local reviews, offer "Import local reviews" after sign-in
   - map local entries into new Review records
6. Remove localStorage writes (or keep as offline cache)

## Import Strategy (optional)
- Only import when user explicitly clicks
- Show count of local reviews detected
- Allow user to preview before importing