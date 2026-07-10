# Commit

Run this workflow only when the user explicitly asks to prepare or create a commit. A request to inspect, build, test, or fix code is not permission to commit.

1. Run `git status --short` and inspect every changed/untracked file.
2. Read `DynamicsCrm.DevKit.Scripts/DevKit.ReleaseConfig.json` and check every `files.dateReplacement` entry. Restore the source placeholder `xxxx.yy.zz HH.mm.ss` if a build left a real timestamp behind; keep stable version `4.44.44.44` unchanged.
3. Select only files belonging to the requested change. Never use `git add .` or `git add -A`.
4. Show the proposed scope and commit message before any staging or commit unless the user already gave exact instructions.
5. Stage explicit paths and create a concise commit with a title and explanatory body.
6. Report the resulting commit and final working-tree status. Never push unless separately requested.
