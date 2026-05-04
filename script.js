  /* ─── DATA ─── */
  const movies = [
    {
      title: "Deadpool &amp; Wolverine",
      desc: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
      rating: "8.4", year: "2024", runtime: "2h 7m", genre: "Action • Comedy"
    },
    {
      title: "The Amazing Spider-Man",
      desc: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
      rating: "7.0", year: "2012", runtime: "2h 16m", genre: "Action • Adventure"
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      desc: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      rating: "7.6", year: "2001", runtime: "2h 32m", genre: "Fantasy • Adventure"
    }
  ];

  let current = 0;

  function selectMovie(idx) {
    if (idx === current) return;

    // Fade out old bg
    document.getElementById(`bg-${current}`).className = 'spotlight-bg hidden';
    document.getElementById(`card-${current}`).classList.remove('active');

    current = idx;

    // Fade in new bg
    document.getElementById(`bg-${current}`).className = 'spotlight-bg active';
    document.getElementById(`card-${current}`).classList.add('active');

    // Update text with a quick fade
    const titleEl = document.getElementById('spotlightTitle');
    const descEl  = document.getElementById('spotlightDesc');

    titleEl.style.opacity = '0'; titleEl.style.transform = 'translateY(10px)';
    descEl.style.opacity  = '0'; descEl.style.transform  = 'translateY(10px)';

    setTimeout(() => {
      const m = movies[idx];
      titleEl.innerHTML = m.title;
      descEl.textContent = m.desc;

      // Update meta
      const metas = document.querySelectorAll('.meta-tag');
      metas[0].textContent = `★ ${m.rating}`;
      metas[1].textContent = m.year;
      metas[2].textContent = m.runtime;
      metas[3].textContent = m.genre;

      titleEl.style.transition = 'opacity 0.4s, transform 0.4s';
      descEl.style.transition  = 'opacity 0.4s, transform 0.4s';
      titleEl.style.opacity = '1'; titleEl.style.transform = 'translateY(0)';
      descEl.style.opacity  = '1'; descEl.style.transform  = 'translateY(0)';
    }, 200);
  }

  // Attach card listeners
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => selectMovie(+card.dataset.index));
  });

  /* ─── THEME TOGGLE ─── */
  const html = document.documentElement;
  document.getElementById('themeToggle').addEventListener('click', () => {
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', html.dataset.theme);
  });

  // Persist
  const saved = localStorage.getItem('theme');
  if (saved) html.dataset.theme = saved;

  /* ─── GENRE PILLS ─── */
  document.querySelectorAll('.genre-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  /* ─── TRANSITION INIT ─── */
  document.getElementById('spotlightTitle').style.transition = 'opacity 0.4s, transform 0.4s';
  document.getElementById('spotlightDesc').style.transition  = 'opacity 0.4s, transform 0.4s';
