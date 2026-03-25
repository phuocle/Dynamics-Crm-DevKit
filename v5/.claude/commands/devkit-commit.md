---
description: Generate commit message and commit changes
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git log:*), Bash(git branch:*)
---

# Commit Command

Create well-structured git commits for staged and unstaged changes.

## Process

### 1. Check current state

```bash
git branch --show-current
git status
git diff --stat
git diff --cached --stat
```

If there are no changes, inform the user and stop.

### 2. Review changes

- Run `git diff HEAD` to understand what changed
- Run `git log --oneline -5` to see recent commit style

### 3. Stage changes

- Stage modified and new files relevant to this commit
- If unrelated changes exist, group them into separate commits
- Never stage `.env` files or files containing credentials
- Prefer `git add <specific-files>` over `git add -A`

### 4. Generate commit message

Draft a commit message following **Conventional Commits** format:

```
type(scope): short description

Optional body explaining why this change was made.

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:** feat, fix, docs, test, refactor, style, perf, chore, ci, build
**Scope examples:** cli, vsix, analyzer, shared, mcp, tool

**Rules:**
- Imperative mood: "add feature" not "added feature"
- No ending period in subject line
- Keep subject under 72 characters
- Body explains **why**, not **what**

### 5. Confirm with user

Show the proposed commit message and list of files to be committed. Ask:
> "Commit with this message? (yes / no / edit)"

- If **yes**: proceed to commit
- If **no**: stop
- If **edit** or user provides alternative text: use their version

### 6. Commit

```bash
git commit -m "<message>"
```

If pre-commit hooks fail, show the output and ask user how to proceed.

### 7. Report

Show:
- The commit hash (`git log --oneline -1`)
- Files committed
- DO NOT push unless explicitly asked

## Examples

```
feat(cli): add support for managed identity authentication

Enables service principal auth with managed identity for Azure-hosted
CI/CD pipelines without client secrets.

Co-Authored-By: Claude <noreply@anthropic.com>
```

```
fix(analyzer): correct false positive in DEVKIT1003 for pre-images

Pre-images on Delete message were incorrectly flagged as invalid.

Co-Authored-By: Claude <noreply@anthropic.com>
```

```
refactor(shared): simplify ConnectionBuilderFactory registration

Co-Authored-By: Claude <noreply@anthropic.com>
```
