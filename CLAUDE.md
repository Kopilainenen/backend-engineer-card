# Claude Code guide
Use Claude Code as an engineering pair: inspect the GraphQL contract first, preserve NestJS module boundaries, generate Prisma migrations explicitly, and run the TypeScript build before suggesting a commit.
## Verification
- `npm run build`
- review schema changes before applying migrations
- keep commits small and conventional
