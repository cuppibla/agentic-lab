---
title: "Aria"
description: A voice assistant that browses the web for you, built for accessibility.
---

:::note[Private project · case study]
The code isn't public. This page shows what it does, how it's built, and what I'd
highlight.
:::

## What it is

**Aria** is a voice assistant that browses the web on your behalf. You speak a goal; Aria
navigates real sites, reads back what matters, and acts — designed first for people for
whom a mouse-and-screen workflow is a barrier.

## The problem

The web assumes you can see it and point at it. Voice interfaces usually stop at search
and weather. Aria closes the gap: a spoken request becomes real navigation and action in a
live browser.

## How it works

- **Voice in** — speech is transcribed into an intent.
- **Plan** — the agent decides the steps needed on the target site.
- **Browser use** — it drives a real browser: navigate, read the DOM, click, fill, extract.
- **Voice out** — results are summarised and spoken back, kept short and skimmable by ear.

```text
speech ─▶ intent ─▶ plan ─▶ [ browser: navigate · read · act ] ─▶ spoken summary
```

<!-- TODO: demo video (this one really wants a video), screenshots, latency notes -->

## What I'd highlight

- An **accessibility-first** framing that shapes every design choice, not a bolt-on.
- Combining **voice** and **browser/computer use** in one loop — two hard things together.
- Summarising for the *ear*, not the eye: different constraints than a chat UI.

## Stack

TypeScript · speech-to-text / text-to-speech · browser automation · LLM planning

## Related

- Public sibling: [BrowserMind](https://github.com/cuppibla/browsermind)
- Concepts: [Voice agents](/concepts/voice/) · [Browser & computer use](/concepts/browser-use/) · [Accessibility agents](/concepts/accessibility/)

*A walkthrough video goes here — this demo is much more convincing watched than read.*
