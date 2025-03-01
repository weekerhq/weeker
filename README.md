# Weeker

Weeker is a calendar application that automatically schedules **appointments and tasks** using **rules**.

## Directives
- Avoid vendor lock-in
- Use open standards (if available)
- Focus on publishing a [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product)
- "Share nothing" between packages
  - E.g. use standalone lock file for each package 

## Concepts
- Use [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
- Investigate [Event Sourcing](https://en.wikipedia.org/wiki/Event_sourcing)
- Investigate [CQRS](https://en.wikipedia.org/wiki/Command-query_separation)
- Investigate [Hexagonal architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))
- Modular monolith

## Development
- [x] Use [GitHub Actions](https://github.com/features/actions) for CI
- [ ] Use [GitHub Actions](https://github.com/features/actions) for CD
- [x] Use [Development container](https://containers.dev/) for deterministic development environment
- [x] Use [Nix with flakes](https://zero-to-nix.com/concepts/flakes) as package manager
- [x] Support x86_64 and arm64
- [x] Support Linux, MacOS, and Windows (via WSL2) 
- [x] Use Renovate to keep dependencies up to date
