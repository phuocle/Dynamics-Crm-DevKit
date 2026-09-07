# Commit

Run this workflow only when the user explicitly asks to prepare or create a commit. A request to inspect, build, test, or fix code is not permission to commit.

The user trusts the AI to make reasonable decisions about scope, file selection, and commit message wording. Do not pause to ask for confirmation before staging or committing — execute the workflow end-to-end and report the result.

1. Run `git status --short` and inspect every changed/untracked file.
2. Read `DynamicsCrm.DevKit.Scripts/DevKit.ReleaseConfig.json` and check every `files.dateReplacement` entry. Restore the source placeholder `xxxx.yy.zz HH.mm.ss` if a build left a real timestamp behind; keep stable version `4.44.44.44` unchanged.
3. Select only files belonging to the requested change. Never use `git add .` or `git add -A`.
4. Stage explicit paths and create a concise commit with a conventional-commit title and a brief explanatory body that summarizes the why (not a re-statement of the diff).
5. Report the resulting commit hash, files changed, and final working-tree status. Never push unless separately requested.
