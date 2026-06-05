/* Shared content for all 5 design directions.
   Copy is lightly-tightened from the Cher Landing Page.
   Avatars are bundled locally in ./avatars/ (already online in the repo) — no external calls. */
window.RT = {
  copy: {
    eyebrow: "Beta · Free to try",
    h1: "Your personal expert roundtable, on demand.",
    sub: "Pick two or three AI specialists. Ask anything. Watch them discuss, debate, and reach a better answer than any single AI could give you.",
    ctaPrimary: "Meet the agents",
    ctaSecondary: "Watch demo",
    steps: [
      { n: "01", title: "Pick your agents", body: "Choose two to four specialists. Mix a strategist with a lawyer, a creative with a finance mind." },
      { n: "02", title: "Ask your question", body: "Plain language. A decision, a creative problem, a grey area — the sharper the question, the richer the debate." },
      { n: "03", title: "Watch them debate", body: "They challenge each other, then synthesise the useful parts into one clear direction." }
    ],
    rosterTitle: "Assemble your panel",
    rosterSub: "A few specialists, each with their own point of view. Pick the ones your question needs.",
    demoTitle: "See a session unfold",
    closeTitle: "Pull up a chair.",
    closeSub: "Your first roundtable is free. No setup, no prompt-craft — just a question."
  },
  // Real personas, local avatars. Roles kept descriptive of the roundtable concept.
  roster: [
    { name: "James Wei",   role: "Strategy",            img: "avatars/826d2db7-ad5e-40d8-a1d9-ff957066ca67-1778829273974.jpg" },
    { name: "Marco Reyes", role: "Finance & Ventures",  img: "avatars/54102cdf-fd9f-487d-aaf8-256b0ff82e8a-1778829188973.jpg" },
    { name: "Frida Kahlo", role: "Creative",            img: "avatars/a23f4b21-0384-4bd9-9af9-777b71f5b85a-1779101568128.jpg" },
    { name: "da Vinci",    role: "Design & Invention",  img: "avatars/092e295d-3b0d-4fe8-894c-ce09de8503e3-1779101557820.jpg" },
    { name: "Vivienne",    role: "Brand & Culture",     img: "avatars/5d1eeb06-cd43-4b79-b227-1570efb0fe7a-1779118893633.jpg" },
    { name: "Eunji Choi",  role: "Technology",          img: "avatars/1d3ee4e5-9b2c-4eda-ad2e-c7a9f4d71522-1778827713678.jpg" },
    { name: "Dana Mercer", role: "Media",               img: "avatars/7a221697-9c33-44bd-ac9c-6a4eb0c90e6b-1778828297912.jpg" },
    { name: "Clara Hsu",   role: "Moderator",           img: "avatars/d605529a-5bd1-4df9-a74b-b54f69d491a7-1779101561622.jpg" }
  ],
  demo: {
    q: "Should I raise funding before or after launching?",
    turns: [
      { name: "James Wei",   role: "Strategy",           img: "avatars/826d2db7-ad5e-40d8-a1d9-ff957066ca67-1778829273974.jpg", text: "Raise after. Land your first ten paying customers — traction makes every investor conversation easier, and revenue is the best story you have." },
      { name: "Marco Reyes", role: "Finance & Ventures", img: "avatars/54102cdf-fd9f-487d-aaf8-256b0ff82e8a-1778829188973.jpg", text: "I'd push back. If you're capital-intensive, raise before — waiting on revenue can mean shipping a weaker product into a closing window." },
      { name: "Eunji Choi",  role: "Technology",         img: "avatars/1d3ee4e5-9b2c-4eda-ad2e-c7a9f4d71522-1778827713678.jpg", text: "Either way, get one real signal of demand first. That's what settles the question — not the timing." }
    ]
  }
};
