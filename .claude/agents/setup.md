Step-by-Step: Using the Agents with Claude Code

Step 1 — Initialize the agents in your project
npx playwright init-agents --loop=claude-code
This adds Playwright Test Agent definitions to your project. These definitions should be regenerated whenever Playwright is updated to pick up new tools and instructions. Playwright

Step 2 — Create a seed test (tests/seed.spec.ts)
This is the bootstrapping test that sets up your environment — fixtures, auth, global setup etc. The Planner uses it as a template.

Step 3 — Run the Planner
In Claude Code, prompt it like:
"Generate a plan for guest checkout — use seed.spec.ts as the seed test"
The Planner runs the seed test to execute all initialization including global setup, project dependencies, and fixtures — then uses it as an example for all generated tests. Output lands in specs/.

Step 4 — Run the Generator
"Generate tests from specs/basic-operations.md — use seed.spec.ts as the seed"
The Generator produces executable test files under tests/, aligned one-to-one with the spec scenarios wherever feasible. Playwright

Step 5 — Run the tests
bashnpx playwright test

Step 6 — Run the Healer on failures
If tests fail, prompt:
"Heal the failing test: tests/create/add-valid-todo.spec.ts"
The Healer replays, inspects the accessibility tree, patches locators, and re-runs automatically.