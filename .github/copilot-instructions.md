<!-- Purpose: Give AI coding agents a short, actionable onboarding guide for this repository. -->
# Copilot / AI agent instructions — autosfactory-stock

This file gives concise, repository-specific guidance for an AI coding agent trying to become productive quickly.

Summary (quick):
- Repo currently contains only git metadata and an editor config (.vscode). No obvious source files were detected at the time this file was created. Start with automated discovery (commands below) and open a short PR describing findings before making functional changes.

Minimum contract for the agent
- Input: the repository root and git history.
- Output: a small, well-tested change or a short findings PR describing the code layout needed from the human if the code is missing.
- Error modes: if no build/test toolchain is detected, create a clear issue/PR describing what's missing and ask for guidance.

Repository discovery checklist (run before implementing features):
1. List top-level files and recent commits to understand intent:
   - git ls-files --others --exclude-standard --cached
   - git log -n 20 --name-only --pretty="%h %ad %s"
2. Locate project language/tooling (look for these files):
   - package.json, pnpm-lock.yaml, yarn.lock (Node)
   - pyproject.toml, requirements.txt (Python)
   - go.mod (Go)
   - Cargo.toml (Rust)

Key local files to inspect (examples found here):
- `.vscode/` — check workspace settings and recommended extensions. It may contain helpful launch/test tasks.
- `.gitignore` — contains patterns the developers exclude; useful for scaffolding.

Code change patterns and conventions (discoverable guidance)
- Keep changes minimal and well-scoped. If adding a new toolchain, add aREADME or CONTRIBUTING note that documents setup commands.
- Prefer small, orthogonal PRs that add one thing: tests, then implementation, then CI.

PR and commit guidance for agents
- Use conventional, descriptive commit messages. If creating code scaffolding, include a README snippet explaining how to run and test it locally.
- If uncertain about runtime or credentials, open a draft PR and request human review rather than guessing secrets or external endpoints.

If you make assumptions, document them in the PR body, including any commands you ran to validate.

Questions for maintainers (if you open a findings PR):
- Which language(s) should be present here?
- Is there an existing internal registry or private packages to install?
- Preferred CI and test runner?

End of file — update this when repository gains source code or CI config.
