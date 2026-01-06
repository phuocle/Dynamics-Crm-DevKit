# DevKitTs WebResource

TypeScript project template for Dynamics 365 WebResources.

## Build Commands

```bash
npm install              # Install dependencies (first time)
npm run debug            # Build all entities (debug mode)
npm run debug Account    # Build single entity (debug mode)
npm run release          # Build all entities (production)
npm run check            # TypeScript type checking
```

## Architecture

Uses **module-based pattern** with ES6 imports:

```typescript
import { FormAccount_DevKitV4 } from './Account.form';

const formAccount_DevKitV4 = (function () {
    let form: FormAccount_DevKitV4.Form;

    async function onLoad(executionContext: any): Promise<void> {
        form = new FormAccount_DevKitV4.Form(executionContext);
        // ...
    }

    return { OnLoad: onLoad };
})();

export { formAccount_DevKitV4 };
```

## Project Structure

```
Dev.DevKit.WebResourceTs/
├── entities/           # Entity TypeScript files
├── lib/                # DevKit core library
├── build/              # Compiled JS output
├── build.js            # Build script (esbuild)
├── tsconfig.json       # TypeScript config
└── package.json        # NPM configuration
```
