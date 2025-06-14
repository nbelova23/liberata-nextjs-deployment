# Liberata Onboarding

This repository contains a series of exercises and tutorials for learning web development, focusing on TypeScript and React.

## Structure

Each exercise directory is self-contained with its own dependencies and configuration:

```
exercises/
├── 02-typescript/    # TypeScript exercises
│   ├── src/          # Source files
│   ├── tests/        # Test files
│   └── package.json  # TypeScript exercise dependencies
│
└── 03-react/         # React exercises
    ├── src/          # Source files
    ├── tests/        # Test files
    └── package.json  # React exercise dependencies
```

## Getting Started

1. Navigate to the exercise directory you want to work on:
   ```bash
   cd exercises/02-typescript  # For TypeScript exercises
   # or
   cd exercises/03-react      # For React exercises
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Follow the exercise-specific README for instructions.

## Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)

## Exercise Documentation

Each exercise directory contains its own README with detailed instructions:

- [TypeScript Exercises](exercises/02-typescript/README.md)
- [React Exercises](exercises/03-react/README.md)

## Development

Each exercise directory is independent and contains:
- Its own `package.json` for dependencies
- Its own configuration files
- Its own test setup
- Its own documentation

This structure allows you to:
- Work on exercises independently
- Have different dependencies for each exercise
- Run tests and development servers separately
- Learn concepts in isolation

## Contributing

If you find any issues or have suggestions for improvements:
1. Check if the issue is already reported
2. Create a new issue with a clear description
3. Include steps to reproduce if applicable 