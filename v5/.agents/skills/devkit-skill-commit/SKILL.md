---
name: devkit-skill-commit
description: Prepare and create local Git commits for the DynamicsCrm.DevKit repository, including restoring build-date placeholders and deciding whether Published release artifacts belong in the commit. Use when the user asks to commit, prepare a commit, finalize finished work, or says "commit đi", "tạo commit", "commit hết tất cả", "commit all changes" — even when they don't mention the word commit but the intent is clearly to record changes.
---

# DevKit Skill Commit

Create local commit(s) that accurately represent the changes the user requested.

## When to run

- Run only when the user explicitly asks to prepare or create a commit. A request to inspect, build, test, or fix code is not permission to commit.
- The user trusts you to decide scope, file selection, and message wording. Do not pause to ask for confirmation before staging or committing — execute end-to-end and report the result.

## Review before staging

1. Read the repository's `AGENTS.md` plus the session context, then run `git status --short` and inspect EVERY changed/untracked file; also note the current branch, staged diff, and unstaged diff.
2. Read `.agents/skills/devkit-skill-shared/scripts/DevKit.ReleaseConfig.json` and check every `files.dateReplacement` entry. Restore the source placeholder `xxxx.yy.zz HH.mm.ss` if a build left a real timestamp behind; the stable version `4.44.44.44` never changes.
3. Select the files belonging to the requested change. **Never use `git add .` or `git add -A`** — this repository forbids it; always stage explicit paths.
   - When the user asks to commit everything ("hết tất cả các code", "tất cả", "all changes", or equivalent), treat the wording as full authorization: do not re-ask and do not restrict the scope to files edited by the current session. Review the entire diff and every eligible untracked file first, then stage each file as an explicit path.
   - When a release/build was part of the requested change and produced updated artifacts under `Published/<version>/`, include the artifacts produced by that release in the commit unless the user explicitly asks to keep build outputs local. Do not include unrelated or pre-existing Published files.
4. Review newly added files for secrets, generated output, and unrelated content. Never stage a local `.env` file or force-add an ignored credential; report every exclusion.
5. Do not modify Git author configuration. If the repository has no usable author identity, stop before committing and ask the user to configure one.

## Commit splitting

- For work-unit sized changes, split into logical commits (for example `feat` / `test` / `fixtures` / `docs` / `build(release)` for the artifacts) rather than one mega-commit. When a split could break the build mid-sequence, verify the intermediate commit still compiles (a temporary worktree build is enough).

## Commit message

- Conventional-commit type prefix in the title; imperative subject of at most 72 characters without a trailing period.
- Body: a concise summary of the WHY — not a restatement of the diff — plus the validation status (state when tests were not run; do not run tests unless the user asks).
- Use the configured Git author. Do not add a co-author trailer unless the user or repository convention requests it.
- Write the full message to a temporary file and commit with `git commit -F <file>` so multi-line bodies survive shell quoting.

## Commit and verify

- Create the local commit only. Never push or open a pull request unless the user separately asks for it.
- After committing, inspect the new commit (`git show --stat HEAD`) and `git status --short` to confirm the intended files were committed and no unexpected changes remain.
- Report the resulting commit hash(es), the files changed in each commit, and the final working-tree status.
