# Fulbito App — User Manual

Welcome to **Fulbito**, the app for organizing pickup football matches, managing your player roster, and tracking results.

---

## App Overview

Fulbito is organized into four tabs along the bottom of the screen:

| Tab | What it does |
|-----|-------------|
| **Matches** | View upcoming and finished matches, track your ELO progression |
| **Players** | Browse, search, add, and edit your player roster |
| **New Match** | Set up a new match: pick a date, build teams, and review balance |
| **Settings** | Switch between light/dark theme and change language (English / Spanish) |

---

## 1. Managing Players

### Viewing Players

Tap the **Players** tab to see your full roster. Each player card shows:

- **Name**
- **ELO rating** — a number between 800 and 2,000 representing skill level
- **Rank badge** — Challenger, Master, Pro League, or Inactive
- **Progress bar** — a visual indicator of how far the player is within the ELO range

Use the **search bar** at the top to filter players by name. If the list is long, pagination controls appear at the bottom to navigate between pages.

### Adding a New Player

1. Tap the **add player** button on the Players page.
2. Fill in the form:
   - **Name** — required
   - **Skill tier** — choose one of: **Noob** (sets ELO to 800), **Average** (1,200), or **Pro** (2,000). You can also type a custom ELO value between 800 and 2,000.
3. Tap **Add** to save. The new player appears at the top of the list with a brief highlight animation.

### Editing a Player

1. Tap on any player card in the list.
2. The edit form opens pre-filled with the player's current name, ELO, and skill tier.
3. Make your changes and tap **Save**.
4. The updated player card highlights briefly to confirm the change.

> **Validation rules:** Name cannot be empty. ELO must be a number between 800 and 2,000.

---

## 2. Creating a New Match

Tap the **New Match** tab to start setting up a match.

### Step 1 — Pick a Date & Time

Tap the **date/time selector** at the top of the screen. Choose the date and time for your match. Once selected, the scheduled date and time are displayed prominently (e.g., "Fri, 25 Jul 2025 — 19:00").

### Step 2 — Build Your Teams

The match setup screen has two teams:

- **Team Alpha** (primary color accent)
- **Team Omega** (secondary color accent)

Each team section shows:
- Team name (uses the captain's name, or a default like "Team Alpha")
- Number of assigned players
- Median ELO of the team

**To add players manually:**

1. Tap the **"+" empty slot button** under a team.
2. A player pool dialog opens showing all available (unassigned) players.
3. Search by name if needed; use pagination to browse large pools.
4. Tap a player to assign them to the selected team.
5. Repeat for both teams.

**To auto-assign all players:**

Tap the **"Auto-Assign" button** (wand icon). The app distributes all available players across both teams using a snake-draft based on ELO, creating balanced rosters automatically. A glow animation plays while teams are being shuffled.

### Managing Team Rosters

- **Remove a player:** Tap the remove button on any player's team slot. They return to the available pool.
- **Set captain:** Tap the star icon on a player's slot to make them captain. The first player assigned is captain by default. The captain's name becomes the team display name.

### Match Balance Metrics

At the bottom of the New Match screen, a summary card shows:

- **ELO differential** — the gap between the two teams' median ELO (lower is more balanced)
- **Balance bar** — visual representation from "balanced" to "unbalanced"
- **Win probability** — estimated percentage chance for each team based on ELO difference

---

## 3. Match List & Tracking

### Upcoming Matches

The **Matches** tab shows upcoming matches at the top. Each card displays:
- Home team vs. Away team
- Venue
- Scheduled date/time (shown as "Today, 19:00", "Tomorrow, 14:30", or the weekday)
- Match category badge (Grand League, Friendly, Qualifier)

**Actions on upcoming matches:**
- **Tap** a match to view details
- Use the **edit menu** (three-dot icon) to:
  - **Edit** — opens the match score/roster editor
  - **Reschedule** — change the date/time
  - **Cancel** — mark the match as cancelled

### Finished Matches

Below the upcoming section, finished matches appear showing:
- Final score (e.g., "3 - 1")
- Result label: **WINNER**, **DRAW**, or **CANCELLED**
- Color-coded accent: green for a decisive result, grey for a draw, red for cancelled
- The winning team's row is bold; the losing side is slightly dimmed

Tap a finished match to see a summary dialog with the final score.

### Season Progression

At the bottom of the Matches tab, a progression card shows:
- Your current **ELO rating**
- Progress toward the **next tier** (shown as a progress bar)
- A message like "Win 2 more matches to reach the next tier"

---

## 4. Editing a Match & Adding the Final Score

When you tap **Edit** on an upcoming match, the **Match Score** screen opens.

### Setting the Score

The scoreboard shows two cards — one for each team:

1. Use the **+** and **−** buttons to increment or decrement each team's score.
2. Scores cannot go below zero.

### Reviewing & Editing Rosters

Tap the **Team Rosters** accordion section to expand it. From here you can:
- View the current players on each team
- Add or remove players (same pool dialog as the New Match screen)
- Auto-assign players to rebalance
- Set a different captain

### Finishing the Match

1. Set the final score for both teams.
2. Tap the **Finish Match** button at the bottom.
3. A confirmation dialog shows the final score (e.g., "Vanguard FC 3 - Stellaris IX 1"). Both teams must have at least one player.
4. Tap **OK** to confirm. The match moves from "Upcoming" to "Finished" on the Matches tab.

---

## 5. Settings

The **Settings** tab lets you customize the app:

- **Dark / Light mode** — toggle to switch themes. Your preference is saved automatically.
- **Language** — choose between English and Spanish. The app updates all text accordingly.

---

## Quick Reference

| I want to... | Go to... |
|---|---|
| Add a player | Players tab → Add button |
| Edit a player | Players tab → Tap player card |
| Create a match | New Match tab |
| Auto-balance teams | New Match tab → Auto-Assign button |
| Record a match score | Matches tab → Edit on upcoming match → Set score → Finish Match |
| Switch to dark mode | Settings tab → Dark mode toggle |
| Change language | Settings tab → Language picker |
