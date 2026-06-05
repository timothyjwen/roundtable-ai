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
      { n: "01", title: "Pick your agents", body: "Choose two to four specialists — pair a strategist with a finance mind, a founder with a product lead." },
      { n: "02", title: "Start the conversation", body: "Ask anything you want to hear people argue, react to, or explore. A hot take, a weird question, a creative problem, or something you're still figuring out — the more specific you are, the better the conversation gets." },
      { n: "03", title: "Watch them debate", body: "They challenge each other, then synthesise the useful parts into one clear direction." }
    ],
    whyTitle: "One question. Every angle.",
    whySub: "A single AI gives you one voice. Roundtable turns your question into a live discussion — so you hear the angles before you decide what you think.",
    why: [
      { title: "Generative discussion", body: "Not a static answer. Ideas get introduced, challenged, and refined in real time — easier to follow than a wall of text." },
      { title: "Expert perspectives", body: "Each specialist argues from a distinct point of view, so fewer angles slip past you." },
      { title: "Conversation. Follows your lead", body: "You can respond in real time, ask for another angle, or move the room toward what matters to you." }
    ],
    rosterTitle: "Assemble your panel",
    rosterSub: "A few specialists, each with their own point of view. Pick the ones your question needs.",
    demoTitle: "See a session unfold",
    closeTitle: "Pull up a chair.",
    closeSub: "Your first roundtable is free. No setup, no prompt-craft — just a question."
  },
  // Tech / startup panel for the fundraising story. Real personas, local avatars.
  roster: [
    { name: "James Wei",       role: "Fundraising",            img: "avatars/826d2db7-ad5e-40d8-a1d9-ff957066ca67-1778829273974.jpg" },
    { name: "Marco Reyes",     role: "Venture Capital",  img: "avatars/54102cdf-fd9f-487d-aaf8-256b0ff82e8a-1778829188973.jpg" },
    { name: "Eunji Choi",      role: "Startup Finance",         img: "avatars/1d3ee4e5-9b2c-4eda-ad2e-c7a9f4d71522-1778827713678.jpg" },
    { name: "Dana Mercer",     role: "Product",             img: "avatars/7a221697-9c33-44bd-ac9c-6a4eb0c90e6b-1778828297912.jpg" },
    { name: "Zhao Qihang",     role: "Founder",             img: "avatars/83be0439-c766-4eda-bc83-a534501f8337-1778827838980.jpg" },
    { name: "Elias Varga",     role: "AI Research",         img: "avatars/680343c8-ba7d-4bc4-8c24-554002301197-1778828752853.jpg" },
    { name: "Kavya Krishnan",  role: "Growth",              img: "avatars/972b8773-6639-4678-8601-9f0c210a2cce-1778827982228.jpg" },
    { name: "Nadia Farahani",  role: "Operations",          img: "avatars/d9fdb952-83d1-4d16-ab01-48d073716220-1778827773567.jpg" }
  ],
  demo: {
    q: "Should I raise funding before or after launching?",
    turns: [
      { name: "James Wei",   role: "Fundraising",           img: "avatars/826d2db7-ad5e-40d8-a1d9-ff957066ca67-1778829273974.jpg", short: "Raise after — land 10 paying customers first.",   text: "Raise after. Land your first ten paying customers — traction makes every investor conversation easier, and revenue is the best story you have." },
      { name: "Marco Reyes", role: "Venture Capital", img: "avatars/54102cdf-fd9f-487d-aaf8-256b0ff82e8a-1778829188973.jpg", short: "Capital-intensive? Raise before you launch.",      text: "I'd push back. If you're capital-intensive, raise before — waiting on revenue can mean shipping a weaker product into a closing window." },
      { name: "Eunji Choi",  role: "Startup Finance",        img: "avatars/1d3ee4e5-9b2c-4eda-ad2e-c7a9f4d71522-1778827713678.jpg", short: "Either way — prove real demand first.",            text: "Either way, get one real signal of demand first. That's what settles the question — not the timing." }
    ]
  }
};

/* Shared hero composition (used by every design): 4 floating agent cards
   around a centre "Live discussion" bubble. Each design styles
   .fcard / .livebubble / .pill in its own aesthetic. */
RT.heroCardsHTML = function(){
  const t = RT.demo.turns, pos = ['a','b','c'];   // 3 panels, each a different perspective
  const q = RT.demo.q.replace(/\b(before|after)\b/g, '<b>$1</b>');
  const cards = t.map((p,i) =>
    `<div class="fcard ${pos[i]}"><img class="ph" loading="lazy" src="${p.img}" alt="${p.name}"><div class="say">${p.short}</div><div class="meta"><b>${p.name}</b><span>${p.role}</span></div></div>`
  ).join('');
  const mini = t.map(p => `<img src="${p.img}" alt="">`).join('');
  const bubble = `<div class="livebubble"><div class="lab"><i></i>Live discussion</div><q>“${q}”</q><div class="resp"><span class="mini">${mini}</span>3 specialists responding…</div></div>`;
  return cards + bubble;
};
