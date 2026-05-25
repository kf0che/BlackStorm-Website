# BlackStorm Launch Checklist

This checklist tracks the final items that must be verified before the public website is released.

## Required Before Public Release

- [ ] Add official BlackStorm, LLC logo
- [ ] Confirm business mailing address
- [ ] Confirm business phone number
- [ ] Create public email address through IONOS
- [ ] Add verified contact info to `src/config/business.ts`
- [ ] Re-run `npm run lint` and `npm run build`

## Contact Detail Status

The website should not publish fake address, phone, or email details. Until verified contact details are ready, blank values in `src/config/business.ts` should display:

`Contact information coming soon`
