# DynamicsCrm.DevKit Documentation

Centralized documentation for all DynamicsCrm.DevKit components.

---

## Folder Structure

```
DynamicsCrm.DevKit.Docs/
├── README.md                              ← This file
├── DynamicsCrm.DevKit/                    ← VSIX Extension docs
├── DynamicsCrm.DevKit.Analyzers/          ← Roslyn Analyzers docs (DEVKIT1001-1021)
├── DynamicsCrm.DevKit.Cli/               ← CLI Tool docs (14 commands)
├── DynamicsCrm.DevKit.CrmSvcUtilExtensions/ ← CrmSvcUtil extension docs
├── DynamicsCrm.DevKit.Scripts/            ← Build/Release scripts docs
├── DynamicsCrm.DevKit.Tool/              ← Utility Tool docs (5 commands)
└── Others/                                ← Miscellaneous notes & guides
```

---

## Documentation Index

### VSIX Extension (`DynamicsCrm.DevKit/`)

- [T4.md](./DynamicsCrm.DevKit/T4.md) - T4 template development guide
- [T4EndUser.md](./DynamicsCrm.DevKit/T4EndUser.md) - T4 template user guide

### Analyzers (`DynamicsCrm.DevKit.Analyzers/`)

- [ANALYZERS_ROADMAP.md](./DynamicsCrm.DevKit.Analyzers/ANALYZERS_ROADMAP.md) - Analyzer development roadmap
- [DEVKIT1001.md](./DynamicsCrm.DevKit.Analyzers/DEVKIT1001.md) → [DEVKIT1021.md](./DynamicsCrm.DevKit.Analyzers/DEVKIT1021.md) - Individual analyzer documentation (21 analyzers)
- [DEVKIT.template.md](./DynamicsCrm.DevKit.Analyzers/DEVKIT.template.md) - Template for new analyzer docs

### CLI Tool (`DynamicsCrm.DevKit.Cli/`)

- [cli.md](./DynamicsCrm.DevKit.Cli/cli.md) - CLI overview
- [cli.task.template.md](./DynamicsCrm.DevKit.Cli/cli.task.template.md) - Template for new task docs
- [TaskGenerator.md](./DynamicsCrm.DevKit.Cli/TaskGenerator.md) - Code generation (form/webapi js/ts/csharp)
- [TaskServer.md](./DynamicsCrm.DevKit.Cli/TaskServer.md) - Deploy plugins, workflows, dataproviders
- [TaskWebResource.md](./DynamicsCrm.DevKit.Cli/TaskWebResource.md) - Deploy web resources
- [TaskModelBuilder.md](./DynamicsCrm.DevKit.Cli/TaskModelBuilder.md) - Generate early-bound using PAC ModelBuilder
- [TaskPacSolutionPackager.md](./DynamicsCrm.DevKit.Cli/TaskPacSolutionPackager.md) - Pack/unpack solutions using PAC CLI
- [TaskProxyType.md](./DynamicsCrm.DevKit.Cli/TaskProxyType.md) - Legacy proxy type generation (deprecated)
- [TaskSolutionPackager.md](./DynamicsCrm.DevKit.Cli/TaskSolutionPackager.md) - Legacy solution packager (deprecated)
- [TaskDataSource.md](./DynamicsCrm.DevKit.Cli/TaskDataSource.md) - Create data source entities
- [TaskDownloadReport.md](./DynamicsCrm.DevKit.Cli/TaskDownloadReport.md) - Download reports
- [TaskUploadReport.md](./DynamicsCrm.DevKit.Cli/TaskUploadReport.md) - Upload reports
- [TaskDownloadWebResource.md](./DynamicsCrm.DevKit.Cli/TaskDownloadWebResource.md) - Download web resources
- [managed-identity/](./DynamicsCrm.DevKit.Cli/managed-identity/) - Managed Identity research & notes

### CrmSvcUtil Extensions (`DynamicsCrm.DevKit.CrmSvcUtilExtensions/`)

- [README.md](./DynamicsCrm.DevKit.CrmSvcUtilExtensions/README.md) - CrmSvcUtil entity filter extension (legacy, used by `proxytype` command)

### Utility Tool (`DynamicsCrm.DevKit.Tool/`)

- [README.md](./DynamicsCrm.DevKit.Tool/README.md) - 5 utility commands: documentgenerator, documentcodegenerator, coveragetoxml, nuglify, decrypt

### Build & Release Scripts (`DynamicsCrm.DevKit.Scripts/`)

- [README.md](./DynamicsCrm.DevKit.Scripts/README.md) - 10 PowerShell scripts for building, releasing, and maintenance

### Others (`Others/`)

- [DynamicsCrm.DevKit.Notes.txt](./Others/DynamicsCrm.DevKit.Notes.txt) - Project notes, quick reference, solution structure overview
- [batch-file-update-guide.md](./Others/batch-file-update-guide.md) - Guide for updating batch files to CliArgsBuilder pattern
- [CLI-Migration-Guide-v4-to-v5.md](./Others/CLI-Migration-Guide-v4-to-v5.md) - Comprehensive v4 → v5 migration guide
