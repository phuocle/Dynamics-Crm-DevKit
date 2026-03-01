# Walkthrough: CLI Test Suite Organization

## Test Structure

```
DynamicsCrm.DevKit.UnitTests/Cli/
├── Generator/                         # Generator-specific tests
│   ├── TaskGeneratorTests.cs          # 37 tests (Full RunAsync coverage!)
│   └── GeneratorIntegrationTests.cs   # 15 tests
├── CommandLineArgsTests.cs            # 12 tests
├── SpectreLogTests.cs                 # 9 tests
├── ExtensionsTests.cs                 # 11 tests
├── HelperTests.cs                     # 6 tests
├── Account.FormXrml.xml              # Mock data
└── Walkthrough.md                     # This file
```

## Key Points

1. **TaskGenerator Coverage**: Implemented `RunAsync` tests for ALL generator types (`jsform`, `tsform`, `jswebapi`, `tswebapi`, `csharp`).
2. **XrmHelper Optimization**: `GetEntitiesMetadataAsync` uses local cache (`EntitiesMetadata`) for offline testing.
3. **Integration Verification**: Verified correct namespace and class generation for each type.
4. **Framework**: net10.0, MSTest, FakeXrmEasy.v9

## Run Tests

```powershell
cd DynamicsCrm.DevKit.UnitTests
dotnet test --framework net10.0
```
