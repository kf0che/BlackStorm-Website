# Accessibility and Usability

BlackStorm onboarding and education should be usable by as many customers as possible.

Accessibility is not separate from good design. Clear labels, predictable layouts, readable text, and keyboard support help everyone.

## Accessibility Goals

The onboarding and education system should support:

- Keyboard navigation
- Screen reader-friendly headings and landmarks
- Visible focus states
- Form labels and descriptions
- Error messages that explain how to fix the issue
- Captions or transcripts for tutorial videos
- Text alternatives for diagrams and screenshots
- Responsive layouts on phones and tablets

## Usability Goals

The experience should:

- Use plain language
- Avoid overwhelming users with technical terms
- Break setup into small steps
- Keep primary actions visible
- Let users ask for help easily
- Preserve context when moving between learning and setup

## Screen Reader Considerations

Use semantic HTML:

- `main`
- `section`
- `nav`
- `article`
- `h1`, `h2`, and `h3`
- `button`
- `label`
- `fieldset` and `legend` where appropriate

Avoid using visual-only text or icon-only actions without accessible names.

## Keyboard Accessibility

All interactive elements should be reachable and usable by keyboard.

This includes:

- Wizard navigation
- Checklist items
- Tooltips or help buttons
- Walkthrough overlays
- Form controls
- Learning module navigation

## Progressive Disclosure

Progressive disclosure helps avoid overwhelm.

Use:

- Short summaries
- Optional "Learn more" sections
- Help panels
- Tooltips
- Step-by-step walkthroughs

Avoid:

- Long technical explanations before the user asks for them
- Hidden controls
- Modal traps that cannot be closed by keyboard
- Status indicators that rely only on color

## Mobile Usability Goals

On phones:

- Forms should be single column
- Buttons should be easy to tap
- Progress indicators should be compact
- Help content should not cover the entire task unless intentionally opened
- Walkthrough overlays should be dismissible and readable

## Future Scaling Goals

Accessibility and usability standards should support:

- Customer training systems
- Certification-style learning paths if later supported and reviewed
- Interactive troubleshooting
- Operational education modules
- Localization
- Future mobile applications

## Placeholder CTA

- Accessibility review checklist: [UPDATE: add future checklist]
- Tutorial transcript library: [UPDATE: add future transcript links]
- Support email: support@blackstorm.example
