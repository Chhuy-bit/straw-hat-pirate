# TODO: Fix Responsive Issues

## Completed
- [x] Read and analyze Contact.jsx and Bounty.jsx components
- [x] Identify responsiveness issues

## In Progress
- [ ] Fix Contact.jsx - Replace absolute positioning with flexbox
- [ ] Fix Bounty.jsx - Replace fixed px values with responsive classes

## Issues Found

### Contact.jsx
1. `w-screen` causes horizontal overflow
2. Fixed absolute positioning with `left-50`, `top-70`, `left-140` that break on mobile
3. Fixed image height `h-140` and `h-100` don't scale properly

### Bounty.jsx
1. `px-20` padding causes overflow on small screens
2. Fixed positions like `top-70`, `left-90`, `top-30` don't scale
3. Fixed image sizes `lg:w-130 lg:h-120` are too large on mobile
4. `w-full` should be `max-w-full` with overflow handling
