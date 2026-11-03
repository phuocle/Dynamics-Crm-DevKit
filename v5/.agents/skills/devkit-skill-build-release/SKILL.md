---
name: devkit-skill-build-release
description: Full configured release of DynamicsCrm.DevKit — the four Analyzer/CLI/Tool/VSIX artifacts with the annual build date from DevKit.ReleaseConfig.json, plus the complete verification pass. Use when the user asks for a full release, "release đầy đủ", or a configured release with verification.
---

# DevKit Skill Build Release (Full Configured Release)

Run only when the user explicitly requests a full configured release:

```powershell
& ".\.agents\skills\devkit-skill-shared\scripts\Release-DynamicsCrm-DevKit.ps1"
```

Wait until completion. Verify the installed CLI and Tool versions and all four
Analyzer/CLI/Tool/VSIX artifacts under `Published/<version>/`. Confirm the
working tree contains no temporary date replacements.

The full release verification also includes the code coverage pass — run the
devkit-skill-code-coverage skill next (all five suites, roughly 5 minutes)
and report its results before declaring the release verified.
