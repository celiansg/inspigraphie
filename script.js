const reveals = document.querySelectorAll('.reveal');
const revealDirections = ['up', 'left', 'right', 'down'];
reveals.forEach((element, index) => {
  if (!element.dataset.reveal) element.dataset.reveal = revealDirections[index % revealDirections.length];
});
document.querySelectorAll('.service-card, .skill-item, .profile-details article').forEach(element => { element.dataset.reveal = 'up'; });
document.querySelectorAll('.section-heading').forEach(element => { element.dataset.reveal = 'left'; });
document.querySelectorAll('.project-card').forEach((element, index) => { element.dataset.reveal = index % 2 ? 'right' : 'left'; });
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('visible');
  revealObserver.unobserve(entry.target);
}), { threshold: .12, rootMargin: '0px 0px -4% 0px' });
reveals.forEach(el => revealObserver.observe(el));

const menuButton = document.querySelector('.menu');
const mainNav = document.querySelector('.nav nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Ouvrir le menu' : 'Fermer le menu');
  mainNav.classList.toggle('open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false'); mainNav.classList.remove('open'); document.body.style.overflow = '';
}));

const sections = document.querySelectorAll('main > section[id]');
const navLinks = document.querySelectorAll('.nav nav a');
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => sectionObserver.observe(section));

const cases = {
  montis: { type:'Étude de cas · Concept de marque · 2026', title:'Montis Café', lead:'Conception d’une marque fictive de café artisanal pensée comme un projet complet, de l’identité à l’expérience numérique.', context:'Projet personnel conçu pour montrer ma capacité à construire un univers cohérent, de la stratégie visuelle à son application sur le web.', goal:'Faire ressentir la qualité artisanale et la proximité, sans reprendre les codes rustiques souvent utilisés par les marques de café.', answer:'Le système associe un symbole inspiré de la montagne et de la goutte, une palette naturelle contrastée et un langage visuel sobre, décliné sur le packaging et l’interface.', deliverables:'Logo · Système graphique · Packaging · Présentation de marque · Site responsive', tools:'Illustrator · Photoshop · HTML / CSS', image:'assets/montis.png' },
  croowkies: { type:'Étude de cas · Projet client · 2025–2026', title:'Les Croowkies', lead:'Création d’un ensemble de campagnes promotionnelles et de supports de vente pour une marque de cookies.', context:'Une collaboration menée sur plusieurs demandes, avec la nécessité de produire rapidement des supports variés tout en conservant une identité reconnaissable.', goal:'Mettre les produits en valeur, hiérarchiser immédiatement les offres et assurer une cohérence entre les réseaux sociaux et les supports imprimés.', answer:'Des compositions gourmandes et énergiques, structurées par une hiérarchie directe, des contrastes forts et des codes graphiques réutilisables.', deliverables:'17 visuels · Flyers · Carte de fidélité · Carte produits · Contenus sociaux', tools:'Photoshop · Illustrator · InDesign', image:'assets/croowkies.webp' },
  michael: { type:'Exploration personnelle · Affiche · 2026', title:'Michael Jackson', lead:'Création d’une affiche hommage inspirée de l’univers scénique et cinématographique de Michael Jackson.', context:'Une exploration personnelle destinée à travailler la narration par l’image, le photomontage et la construction d’une atmosphère.', goal:'Évoquer immédiatement l’artiste sans transformer l’affiche en simple accumulation de références visuelles.', answer:'Une composition centrée sur la silhouette, portée par la lumière, la profondeur et une hiérarchie typographique volontairement discrète.', deliverables:'Affiche principale · Adaptation numérique', tools:'Adobe Photoshop', image:'assets/archive/michael-jackson.webp' },
  world26: { type:'Étude de cas · Projet web personnel · 2026', title:'World26', lead:'Conception et développement d’une plateforme dédiée à la Coupe du monde FIFA 2026, réunissant matchs, groupes, classements, équipes et statistiques.', context:'Un projet complet pensé pour associer direction artistique, expérience utilisateur, intégration web et exploitation de données sportives.', goal:'Rendre une grande quantité d’informations claire, attractive et facile à consulter sur ordinateur comme sur téléphone.', answer:'Une interface colorée inspirée de l’identité visuelle de la compétition, structurée autour d’une navigation simple, de composants réutilisables et de données organisées par rubrique.', deliverables:'Direction artistique · UI responsive · Pages matchs, groupes, classement, tableau final et statistiques · Version mobile · Intégration des données', tools:'HTML · CSS · JavaScript · Python · CSV', image:'assets/project-gallery/world26-champion.webp', images:['assets/project-gallery/world26-champion.webp','assets/project-gallery/world26-matchs.webp','assets/project-gallery/world26-resultats.webp','assets/project-gallery/world26-tableau-a.webp','assets/project-gallery/world26-tableau-b.webp','assets/project-gallery/world26-groupes-detail.webp','assets/project-gallery/world26-classement-detail.webp','assets/project-gallery/world26-buteurs.webp','assets/project-gallery/world26-passeurs.webp','assets/project-gallery/world26-mobile.webp'], links:[{ label:'Visiter le site World26', url:'https://inspigraphie-hub.github.io/World26/', type:'site' }] }
};
const dialog = document.querySelector('.case-dialog');
cases.montis.images = ['montis7.png','montis2.png','montis3.png','montis1.png','montis4.png','montis5.png','montis6.png'].map(file => `assets/project-gallery/${file.replace(/\.(png|jpe?g)$/i, '.webp')}`);
cases.montis.links = [
  { label:'Voir la présentation Montis Café', url:'assets/documents/montis-cafe.pdf', type:'pdf' },
  { label:'Voir le site Montis Café', url:'https://inspigraphie-hub.github.io/Montis/', type:'site' }
];
cases.croowkies.images = [
  'assets/croowkies.webp',
  ...['mmscroowkies.jpg','oreocroowkies.jpg','tiramisucroowkies.jpg','croowkiespub.jpg','croowkiespub2.jpg','ramadan.png','carte fidelite v2.png','carte fidelite 2 v2.png','carte fide2.png','carte fide v2.png','cookies1.png','cookies2.png','COOKIES1v2.png','COOKIES5V2.png','COOKIES3v2.png','cookies4.png'].map(file => `assets/project-gallery/${file.replace(/\.(png|jpe?g)$/i, '.webp')}`)
];

let caseImages = [];
let caseImageIndex = 0;
let lastCaseTrigger = null;
const caseImage = dialog.querySelector('.case-visual img');
const casePrevious = dialog.querySelector('.case-media-prev');
const caseNext = dialog.querySelector('.case-media-next');
const caseCount = dialog.querySelector('.case-media-count');
const updateCaseImage = () => {
  const source = caseImages[caseImageIndex];
  caseImage.classList.add('changing');
  caseImage.src = source;
  caseImage.onload = () => {
    const ratio = caseImage.naturalWidth / caseImage.naturalHeight;
    caseImage.closest('.case-visual').dataset.format = ratio > 1.18 ? 'landscape' : ratio < .82 ? 'portrait' : 'square';
    caseImage.classList.remove('changing');
    if (caseImages.length > 1) new Image().src = caseImages[(caseImageIndex + 1) % caseImages.length];
  };
  caseCount.textContent = caseImages.length > 1 ? `${caseImageIndex + 1} / ${caseImages.length}` : '';
  casePrevious.hidden = caseNext.hidden = caseImages.length < 2;
};
const showCaseDialog = data => {
  lastCaseTrigger = document.activeElement;
  dialog.querySelector('.case-type').textContent = data.type;
  dialog.querySelector('#case-title').textContent = data.title;
  dialog.querySelector('.case-lead').textContent = data.lead;
  dialog.querySelector('.case-context').textContent = data.context || 'Projet réalisé dans le cadre de mon parcours créatif, à partir d’un besoin, d’un sujet ou d’une contrainte de communication.';
  dialog.querySelector('.case-goal').textContent = data.goal;
  dialog.querySelector('.case-answer').textContent = data.answer;
  dialog.querySelector('.case-deliverables').textContent = data.deliverables;
  dialog.querySelector('.case-tools').textContent = data.tools;
  caseImages = data.images?.length ? data.images : [data.image];
  caseImageIndex = 0;
  caseImage.alt = `Présentation du projet ${data.title}`;
  updateCaseImage();
  const links = dialog.querySelector('.case-links');
  links.innerHTML = (data.links || []).map(link => `<a href="${link.url}" target="_blank" rel="noreferrer" class="case-resource ${link.type || ''}">${link.type === 'pdf' ? 'PDF' : '↗'} <span>${link.label}</span></a>`).join('');
  if (!dialog.open) dialog.showModal();
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => dialog.querySelector('.case-close').focus());
};
casePrevious.addEventListener('click', () => { caseImageIndex = (caseImageIndex - 1 + caseImages.length) % caseImages.length; updateCaseImage(); });
caseNext.addEventListener('click', () => { caseImageIndex = (caseImageIndex + 1) % caseImages.length; updateCaseImage(); });
document.querySelectorAll('.case-open').forEach(button => button.addEventListener('click', () => {
  const data = cases[button.dataset.case];
  showCaseDialog(data);
}));

/* Les cartes de l'archive doivent ouvrir la même étude de cas que la sélection. */
const archiveProjectMatches = {
  'Michael Jackson': 'Affiche de film (Michael Jackson)',
  'Dessin Berserk': 'Dessin Berserk - dessin papier/numerique',
  'Logo podcast': 'Logo - podcast',
  'Identité JerZ': 'Logo boutique de maillot de foot fictive',
  'Maillot e-sport': 'Maillot e-sport',
  'Cartes de jeu': 'Cartes de jeu',
  'Campagne Ice Tea': 'Affiche publicitaire fictive',
  'GP Explorer': 'GP Explorer',
  'Interstellar': 'Interstellar',
  'Kobe Bryant': 'Kobe Bryant',
  'Bun Drop': 'BUN DROP — Projet',
  'Carte de visite': 'Carte de visite',
  'Brochure 4 pages': 'Brochure 4 pages',
  'Flyer événementiel': 'Flyer Fictif',
  'Couverture de roman': 'Couverture roman',
  'Miniature Fortnite': 'Miniature Fortnite 1',
  'PNL': 'PNL',
  'PSG — OM': 'PSG - OM'
};
const openArchiveCard = card => {
  const title = card.querySelector('h4')?.textContent.trim() || 'Projet';
  const image = card.querySelector('img')?.getAttribute('src') || '';
  const categoryLabel = card.querySelector('span')?.textContent.trim() || 'Projet sélectionné';
  const matchedTitle = archiveProjectMatches[title];
  const project = window.ALL_PROJECTS?.find(item => item.title === matchedTitle)
    || window.ALL_PROJECTS?.find(item => item.mediaKey === card.dataset.mediaKey)
    || window.ALL_PROJECTS?.find(item => item.displayTitle === title)
    || window.ALL_PROJECTS?.find(item => item.title === title)
    || null;

  if (title.startsWith('Michael Jackson') && cases.michael) {
    showCaseDialog(cases.michael);
    return;
  }

  const category = project?.category === 'client' ? 'Projet client' : project?.category === 'scolaire' ? 'Projet scolaire' : 'Projet personnel';
  const narrative = getProjectNarrative(project?.displayTitle || project?.title || title, project?.category || 'perso');
  showCaseDialog({
    type: `${category} · ${project?.date || categoryLabel.split('·').pop()?.trim() || 'Sélection'}`,
    title: project?.displayTitle || project?.title || title,
    lead: project?.description || `Présentation du projet ${title}.`,
    goal: narrative.goal,
    answer: narrative.answer,
    deliverables: narrative.deliverables,
    tools: narrative.tools,
    image: project?.image || image
  });
};
const bindArchiveCard = card => {
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Ouvrir les informations de ${card.querySelector('h4')?.textContent.trim() || 'ce projet'}`);
  card.addEventListener('click', event => {
    if (event.target.closest('a, button')) return;
    openArchiveCard(card);
  });
  card.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openArchiveCard(card);
  });
};
document.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', event => {
  if (window.innerWidth > 800 || event.target.closest('button, a')) return;
  card.querySelector('.case-open')?.click();
}));
const closeDialog = () => {
  if (dialog.open) dialog.close();
  document.body.style.overflow = '';
  if (lastCaseTrigger instanceof HTMLElement) lastCaseTrigger.focus();
};
dialog.querySelector('.case-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(); });
dialog.addEventListener('keydown', event => {
  if (caseImages.length < 2) return;
  if (event.key === 'ArrowLeft') { event.preventDefault(); casePrevious.click(); }
  if (event.key === 'ArrowRight') { event.preventDefault(); caseNext.click(); }
});
dialog.querySelector('.case-contact').addEventListener('click', closeDialog);

const copyEmailButton = document.querySelector('.copy-email');
if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async event => {
    const button = event.currentTarget;
    try { await navigator.clipboard.writeText(button.dataset.email); button.textContent = 'Copié !'; }
    catch { button.textContent = button.dataset.email; }
    setTimeout(() => { button.textContent = 'Copier'; }, 1800);
  });
}

const contactIcons = {
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m5 8 7 5 7-5"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="6"/><circle cx="12" cy="12" r="4"/><circle class="icon-dot" cx="17.4" cy="6.7" r="1"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.2a4.2 4.2 0 1 1-3.4-4.1"/><path d="M14 4c.7 2.2 2.2 3.5 4.6 3.8"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4l14 16M19 4 5 20"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="9" width="3" height="11" rx="1"/><circle cx="5.5" cy="5.5" r="1.6"/><path d="M11 20V9h3v1.8c.9-1.3 2.1-2 3.5-2 2.2 0 3.5 1.5 3.5 4.4V20h-3v-6.1c0-1.6-.6-2.4-1.8-2.4-1.4 0-2.2 1-2.2 2.9V20z"/></svg>'
};
document.querySelectorAll('.contact-network a').forEach(link => {
  const href = link.getAttribute('href') || '';
  const type = href.startsWith('mailto:') ? 'mail' : href.includes('instagram') ? 'instagram' : href.includes('tiktok') ? 'tiktok' : href.includes('linkedin') ? 'linkedin' : 'x';
  const icon = link.querySelector('.contact-bubble-icon');
  if (icon) { icon.classList.add(`contact-bubble-icon-${type}`); icon.innerHTML = contactIcons[type]; }
});

document.querySelectorAll('.project-grid, .service-grid, .skills-grid, .profile-details').forEach(rail => {
  const hint = document.createElement('p');
  hint.className = 'mobile-swipe-hint';
  hint.setAttribute('aria-hidden', 'true');
  hint.innerHTML = '<span>←</span> Faites glisser <span>→</span>';
  rail.insertAdjacentElement('afterend', hint);
});

const archiveRail = document.querySelector('.archive-grid');
if (Array.isArray(window.ALL_PROJECTS) && window.ALL_PROJECTS.length) {
  const projectCardsMarkup = window.ALL_PROJECTS.map(project => `
    <article class="archive-card" data-category="${project.category}" data-selected="${project.selected ? 'true' : 'false'}" data-media-key="${(project.mediaKey || project.title).replaceAll('&','&amp;').replaceAll('"','&quot;')}" data-date="${project.date}" data-duration="${project.duration}" data-description="${project.description.replaceAll('&','&amp;').replaceAll('"','&quot;')}">
      <img loading="lazy" src="${project.image}" alt="${(project.displayTitle || project.title).replaceAll('&','&amp;').replaceAll('"','&quot;')}">
      <span>${project.category === 'client' ? 'Client' : project.category === 'scolaire' ? 'Scolaire' : 'Personnel'} · ${project.date}</span>
      <h4>${project.displayTitle || project.title}</h4>
    </article>`).join('');
  archiveRail.innerHTML = projectCardsMarkup;
  archiveRail.querySelectorAll('.archive-card').forEach(card => {
    const resources = window.PROJECT_MEDIA?.[card.dataset.mediaKey]?.links || [];
    if (resources.some(resource => resource.type === 'pdf')) card.classList.add('has-pdf');
  });
  document.querySelector('.rail-hint').firstChild.textContent = `${window.ALL_PROJECTS.length} projets · Glissez ou utilisez les flèches `;
}
archiveRail?.querySelectorAll('.archive-card').forEach(bindArchiveCard);

const filterButtons = document.querySelectorAll('.filters button');
const archiveCards = document.querySelectorAll('.archive-card');
let activeArchiveFilter = 'selected';
if (Array.isArray(window.ALL_PROJECTS)) {
  const filterLabels = { selected:'Sélection', all:'Tous', client:'Clients', perso:'Personnels', scolaire:'Scolaires' };
  const filterCounts = window.ALL_PROJECTS.reduce((counts, project) => {
    counts.all += 1; counts[project.category] = (counts[project.category] || 0) + 1; return counts;
  }, { all:0, client:0, perso:0, scolaire:0 });
  filterCounts.selected = window.ALL_PROJECTS.filter(project => project.selected).length;
  filterButtons.forEach(button => {
    const filter = button.dataset.filter;
    button.innerHTML = `${filterLabels[filter]} <small>${filterCounts[filter]}</small>`;
  });
}
const applyArchiveFilter = filter => {
  activeArchiveFilter = filter;
  filterButtons.forEach(item => item.classList.toggle('active', item.dataset.filter === filter));
  archiveCards.forEach(card => {
    const visible = filter === 'all' || (filter === 'selected'
      ? card.dataset.selected === 'true'
      : card.dataset.category === filter);
    card.classList.toggle('hidden', !visible);
  });
  archiveGrid.scrollLeft = 0;
};
filterButtons.forEach(button => button.addEventListener('click', () => {
  applyArchiveFilter(button.dataset.filter);
}));

const progressBar = document.querySelector('.scroll-progress');
const pageNav = document.querySelector('.nav');
const updateScrollEffects = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  pageNav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', updateScrollEffects, { passive: true });
updateScrollEffects();

const archiveGrid = document.querySelector('.archive-grid');
applyArchiveFilter(activeArchiveFilter);
const archiveObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('in-view');
  archiveObserver.unobserve(entry.target);
}), { threshold: .08 });
archiveObserver.observe(archiveGrid);

const moveProjectRail = direction => {
  const max = Math.max(0, archiveGrid.scrollWidth - archiveGrid.clientWidth);
  const step = archiveGrid.clientWidth * .82;
  let target = archiveGrid.scrollLeft + direction * step;
  if (direction > 0 && archiveGrid.scrollLeft >= max - 8) target = 0;
  if (direction < 0 && archiveGrid.scrollLeft <= 8) target = max;
  archiveGrid.scrollTo({ left: Math.max(0, Math.min(max, target)), behavior: 'smooth' });
};
document.querySelector('.rail-prev').addEventListener('click', () => moveProjectRail(-1));
document.querySelector('.rail-next').addEventListener('click', () => moveProjectRail(1));

let dragging = false, dragMoved = false, dragStart = 0, scrollStart = 0;
const pauseProjectRail = () => {};
const resumeProjectRail = () => {};
archiveGrid.addEventListener('pointerdown', event => {
  pauseProjectRail();
  dragging = true; dragMoved = false; dragStart = event.clientX; scrollStart = archiveGrid.scrollLeft;
  archiveGrid.classList.add('dragging');
});
archiveGrid.addEventListener('pointermove', event => { if (dragging) { dragMoved = Math.abs(event.clientX - dragStart) > 6; archiveGrid.scrollLeft = scrollStart - (event.clientX - dragStart); } });
archiveGrid.addEventListener('pointerup', () => { dragging = false; archiveGrid.classList.remove('dragging'); resumeProjectRail(); });
archiveGrid.addEventListener('pointercancel', () => { dragging = false; archiveGrid.classList.remove('dragging'); resumeProjectRail(); });

archiveGrid.addEventListener('focusin', pauseProjectRail);

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('.form-status');
const optionalFormToggle = document.querySelector('.form-optional-toggle');
if (contactForm && optionalFormToggle) {
  optionalFormToggle.addEventListener('click', () => {
    const open = contactForm.classList.toggle('show-optional');
    optionalFormToggle.setAttribute('aria-expanded', String(open));
    optionalFormToggle.querySelector('span').textContent = open ? '−' : '＋';
    optionalFormToggle.querySelector('b').textContent = open ? 'Masquer les précisions' : 'Ajouter des précisions';
  });
}
if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalLabel = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = 'Envoi en cours…';
    formStatus.className = 'form-status is-visible';
    formStatus.textContent = 'Votre message est en cours d’envoi.';
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST', body: new FormData(contactForm), headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Form submission failed');
      contactForm.reset();
      formStatus.className = 'form-status is-visible is-success';
      formStatus.textContent = 'Merci ! Votre message a bien été envoyé. Je vous répondrai sous 48 h.';
    } catch {
      formStatus.className = 'form-status is-visible is-error';
      formStatus.innerHTML = 'L’envoi n’a pas abouti. Vous pouvez aussi m’écrire à <a href="mailto:celianseguingosselin.laf@gmail.com">celianseguingosselin.laf@gmail.com</a>.';
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalLabel;
    }
  });
}

const archiveDescriptions = {
  'Michael Jackson':'Affiche de film réalisée autour de l’univers visuel et scénique de Michael Jackson.',
  'Dessin Berserk':'Dessin papier puis numérique consacré au personnage de Guts, avec un travail sur les ombres.',
  'Logo podcast':'Création d’un signe graphique destiné à identifier rapidement un podcast.',
  'Identité JerZ':'Recherche de logo pour une boutique fictive spécialisée dans les maillots de football.',
  'Maillot e-sport':'Conception graphique d’un maillot e-sport et préparation de ses différentes faces.',
  'Cartes de jeu':'Création d’une série de cartes cohérentes et préparation d’un système graphique déclinable.',
  'Campagne Ice Tea':'Campagne publicitaire fictive déclinée en plusieurs visuels animés.',
  'GP Explorer':'Affiche créée pour le GP Explorer The Last Race, autour de la vitesse et du spectacle.',
  'Interstellar':'Réinterprétation personnelle de l’affiche du film, centrée sur la lumière et l’espace.',
  'Kobe Bryant':'Affiche hommage utilisant les couleurs iconiques violettes et dorées.',
  'Bun Drop':'Projet d’identité complet pour un concept de restauration fictif.',
  'Carte de visite':'Cartes personnalisées pour une promotion de BTS ERPC avec fusion de données InDesign.',
  'Brochure 4 pages':'Brochure réalisée après une visite d’entreprise, avec travail de grille et de hiérarchie.',
  'Flyer événementiel':'Flyer conçu dans un cadre scolaire pour un événement fictif.',
  'Couverture de roman':'Couverture fantasy créée pour une autrice.',
  'Miniature Fortnite':'Miniature YouTube pensée pour rester lisible et attractive en petit format.',
  'PNL':'Affiche personnelle réunissant plusieurs codes visuels de l’univers du groupe.',
  'PSG — OM':'Affiche sportive consacrée au Classico, avec un travail de contraste et d’intensité.'
};
const getProjectNarrative = (title, category) => {
  const value = title.toLowerCase();
  if (/site|web/.test(value)) return { goal:'Présenter l’activité clairement et guider le visiteur vers les informations essentielles.', answer:'Une interface responsive structurée par une hiérarchie simple, des repères visuels cohérents et des appels à l’action visibles.', deliverables:'Interface web responsive', tools:'HTML · CSS · Photoshop' };
  if (/logo|identité|marque|jerz|bun drop/.test(value)) return { goal:'Créer un territoire visuel reconnaissable et suffisamment souple pour être décliné.', answer:'Un travail de recherche sur le symbole, la typographie, les couleurs et leurs usages sur différents supports.', deliverables:'Logo · Système graphique · Déclinaisons', tools:'Illustrator · Photoshop' };
  if (/brochure|flyer|carte|couverture|print/.test(value)) return { goal:'Organiser les informations pour obtenir un support imprimé clair, attractif et prêt à produire.', answer:'Une mise en page fondée sur la grille, la hiérarchie typographique et la préparation technique du document.', deliverables:'Support imprimé finalisé', tools:'InDesign · Illustrator · Photoshop' };
  if (/miniature|bannière|visuel|réseaux|croowkies/.test(value)) return { goal:'Attirer l’attention rapidement tout en conservant une lecture efficace sur les écrans et les réseaux sociaux.', answer:'Une composition directe, contrastée et pensée pour rester identifiable dans un format réduit.', deliverables:'Visuel digital optimisé', tools:'Photoshop · Illustrator' };
  if (/affiche|psg|france|bayern|chelsea|kobe|interstellar|michael|rocky|avatar|pnl/.test(value)) return { goal:'Créer une image immédiatement lisible qui restitue l’intensité et l’atmosphère du sujet.', answer:'Un photomontage construit autour du contraste, de la lumière, de la profondeur et d’une hiérarchie typographique forte.', deliverables:'Affiche principale · Format digital', tools:'Adobe Photoshop' };
  return category === 'scolaire'
    ? { goal:'Répondre à un exercice de création en respectant les contraintes de contenu et de production.', answer:'Une proposition structurée à partir de recherches graphiques, de tests de composition et d’une exécution soignée.', deliverables:'Création finalisée', tools:'Photoshop · Illustrator · InDesign' }
    : { goal:'Transformer le sujet en une proposition visuelle personnelle, claire et mémorable.', answer:'Une exploration de la composition, de la couleur et du rythme adaptée au support final.', deliverables:'Création digitale finalisée', tools:'Adobe Photoshop' };
};
archiveCards.forEach(card => {
  const title = card.querySelector('h4').textContent.trim();
  card.tabIndex = 0; card.setAttribute('role', 'button'); card.setAttribute('aria-label', `Découvrir le projet ${title}`);
  const openArchive = () => {
    if (dragMoved) { dragMoved = false; return; }
    const category = card.dataset.category === 'client' ? 'Projet client' : card.dataset.category === 'scolaire' ? 'Projet scolaire' : 'Projet personnel';
    const media = window.PROJECT_MEDIA?.[card.dataset.mediaKey || title] || {};
    const narrative = getProjectNarrative(title, card.dataset.category);
    showCaseDialog({
      type: `${category} · ${card.dataset.date || 'Archive créative'}`,
      title,
      lead: card.dataset.description || archiveDescriptions[title] || 'Exploration graphique issue de mon parcours créatif.',
      goal: narrative.goal,
      answer: narrative.answer,
      deliverables: media.images?.length > 1 ? `${media.images.length} visuels et déclinaisons` : narrative.deliverables,
      tools: narrative.tools,
      image: card.querySelector('img').src,
      images: media.images,
      links: media.links
    });
  };
  card.addEventListener('click', openArchive);
  card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openArchive(); } });
  card.addEventListener('mouseenter', pauseProjectRail);
  card.addEventListener('mouseleave', () => resumeProjectRail(700));
});

const glowSkillCards = document.querySelectorAll('.skill-item[data-glow], .service-card[data-glow], .profile-details article[data-glow]');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  glowSkillCards.forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--glow-x', '50%');
      card.style.setProperty('--glow-y', '28%');
    });
  });
}

/*
 * 21st.dev-inspired interaction patterns, adapted to the static site:
 * - magnetic CTAs use a small pointer offset with a spring-like CSS return;
 * - text reveal keeps the original copy accessible while revealing words on view;
 * - the selected-project wheel gets a restrained spotlight instead of another
 *   decorative layer.
 */
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const pointerQuery = window.matchMedia('(pointer: fine)');

const magneticTargets = document.querySelectorAll('.hero-actions .pill, .hero-actions .secondary-pill, .nav > .pill, .services > .pill, .form-footer .pill');
if (pointerQuery.matches && !motionQuery.matches) {
  magneticTargets.forEach(target => {
    target.classList.add('magnetic-target');
    target.addEventListener('pointermove', event => {
      const rect = target.getBoundingClientRect();
      const strength = target.matches('.hero-actions .pill, .hero-actions .secondary-pill') ? .12 : .08;
      const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
      target.style.setProperty('--magnetic-x', `${x.toFixed(2)}px`);
      target.style.setProperty('--magnetic-y', `${y.toFixed(2)}px`);
      target.classList.add('is-magnetic');
    });
    target.addEventListener('pointerleave', () => {
      target.classList.remove('is-magnetic');
      target.style.setProperty('--magnetic-x', '0px');
      target.style.setProperty('--magnetic-y', '0px');
    });
  });
}

const wordRevealTargets = document.querySelectorAll('.hero-intro, .section-intro, .archive-intro');
wordRevealTargets.forEach(element => {
  const text = element.textContent.trim();
  if (!text || element.dataset.wordRevealReady) return;
  element.dataset.wordRevealReady = 'true';
  element.setAttribute('aria-label', text);
  const copy = document.createElement('span');
  copy.className = 'word-reveal-copy';
  copy.setAttribute('aria-hidden', 'true');
  text.split(/\s+/).forEach((word, index, words) => {
    const span = document.createElement('span');
    span.className = 'word-reveal-word';
    span.style.setProperty('--word-index', String(index));
    span.textContent = word;
    copy.append(span);
    if (index < words.length - 1) copy.append(' ');
  });
  element.textContent = '';
  element.append(copy);
});
const wordRevealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('word-reveal-visible');
  wordRevealObserver.unobserve(entry.target);
}), { threshold: .25, rootMargin: '0px 0px -6% 0px' });
wordRevealTargets.forEach(element => wordRevealObserver.observe(element));

const wheelSurface = document.querySelector('[data-works-wheel]');
if (wheelSurface && pointerQuery.matches && !motionQuery.matches) {
  wheelSurface.addEventListener('pointermove', event => {
    const face = event.target.closest('.works-wheel-card-face');
    if (!face) return;
    const rect = face.getBoundingClientRect();
    face.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    face.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
    face.classList.add('is-spotlight-active');
  });
  wheelSurface.addEventListener('pointerout', event => {
    const face = event.target.closest('.works-wheel-card-face');
    if (face && !face.contains(event.relatedTarget)) face.classList.remove('is-spotlight-active');
  });
}

const methodStepper = document.querySelector('[data-method-stepper]');
if (methodStepper) {
  const methodButtons = [...methodStepper.querySelectorAll('.method-stepper button')];
  const methodProgress = methodStepper.querySelector('.method-stepper');
  const methodCurrent = methodStepper.querySelector('.method-current');
  const methodDetail = methodStepper.querySelector('.method-detail');
  const detailLabel = methodDetail.querySelector('span');
  const detailTitle = methodDetail.querySelector('h4');
  const detailCopy = methodDetail.querySelector('p');

  const activateMethodStep = (button, focus = false) => {
    const index = Number(button.dataset.step);

    methodButtons.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
      item.classList.toggle('is-complete', itemIndex < index);
      item.setAttribute('aria-selected', String(itemIndex === index));
      item.tabIndex = itemIndex === index ? 0 : -1;
    });

    methodProgress.style.setProperty('--method-progress', `${(index / (methodButtons.length - 1)) * 100}%`);
    methodCurrent.textContent = `Étape ${String(index + 1).padStart(2, '0')} / ${String(methodButtons.length).padStart(2, '0')}`;
    detailLabel.textContent = `${String(index + 1).padStart(2, '0')} · ${button.querySelector('span').textContent}`;
    detailTitle.textContent = button.dataset.title;
    detailCopy.textContent = button.dataset.copy;

    methodDetail.classList.remove('is-updating');
    void methodDetail.offsetWidth;
    methodDetail.classList.add('is-updating');
    if (focus) button.focus();
  };

  methodButtons.forEach((button, index) => {
    button.addEventListener('click', () => activateMethodStep(button));
    button.addEventListener('keydown', event => {
      let nextIndex = null;
      if (event.key === 'ArrowRight') nextIndex = Math.min(methodButtons.length - 1, index + 1);
      if (event.key === 'ArrowLeft') nextIndex = Math.max(0, index - 1);
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = methodButtons.length - 1;
      if (nextIndex !== null) {
        event.preventDefault();
        activateMethodStep(methodButtons[nextIndex], true);
      }
    });
  });

  activateMethodStep(methodButtons[0]);
}

/* Sélection resserrée de 9 projets : roue interactive adaptée au site statique. */
(() => {
  const root = document.querySelector('[data-works-wheel]');
  if (!root) return;

  const stage = root.querySelector('.works-wheel-stage');
  const track = root.querySelector('.works-wheel-track');
  const wheelLabel = root.querySelector('.works-wheel-label');
  const frontTitle = root.querySelector('.works-wheel-front-title');
  const indexList = root.querySelector('.works-wheel-index');
  const currentLabel = root.querySelector('.works-wheel-footer > span');
  const previousButton = root.querySelector('.works-wheel-prev');
  const nextButton = root.querySelector('.works-wheel-next');
  if (!stage || !track || !wheelLabel || !frontTitle || !indexList) return;

  const findProject = (title, image) => window.ALL_PROJECTS?.find(project => project.title === title && (!image || project.image === image));
  const definitions = [
    { id:'world26', title:'World26', sourceTitle:'World26 — Coupe du monde 2026', image:'assets/project-gallery/world26-champion.webp', caseKey:'world26' },
    { id:'montis', title:'Montis Café', image:'assets/montis.png', caseKey:'montis' },
    { id:'sunkiss-site', sourceTitle:'Création de site vitrine complet', image:'assets/all-projects/creation-de-site-vitrine-complet.webp' },
    { id:'sunkiss-brand', sourceTitle:'Création et déclinaisons de logo', image:'assets/all-projects/creation-et-declinaisons-de-logo.webp' },
    { id:'croowkies', title:'Les Croowkies', sourceTitle:'Visuel pour les Croowkies (pack2)', image:'assets/all-projects/visuel-pour-les-croowkies-pack2.webp', caseKey:'croowkies' },
    { id:'bayern-psg', sourceTitle:'Affiche match BAYERN-PSG', image:'assets/all-projects/affiche-match-bayern-psg.webp' },
    { id:'gp-explorer', sourceTitle:'GP Explorer', image:'assets/all-projects/gp-explorer.webp' },
    { id:'interstellar', sourceTitle:'Interstellar', image:'assets/all-projects/interstellar.webp' },
    { id:'avatar', sourceTitle:'Avatar', image:'assets/all-projects/avatar.webp' }
  ];
  const items = definitions.map(definition => ({
    ...definition,
    project: definition.sourceTitle ? findProject(definition.sourceTitle, definition.image) : null,
    displayTitle: definition.title || (findProject(definition.sourceTitle, definition.image)?.displayTitle || definition.sourceTitle)
  })).filter(item => item.image && (item.project || item.caseKey));
  if (!items.length) return;

  const count = items.length;
  const last = count - 1;
  const cards = [];
  const indexButtons = [];
  let turn = 0;
  let target = 0;
  let active = 0;
  let metrics = { cardW:0, cardH:0, ringR:0, ringScale:1, drumR:0, bow:0, depth:900 };
  let reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let settling = 0;
  let dragging = false;
  let dragMoved = false;
  let dragStart = 0;
  let dragTarget = 0;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const rad = degrees => degrees * Math.PI / 180;
  const bowAt = (degrees, bow) => -bow * (1 - Math.cos(rad(degrees)));

  track.innerHTML = '';
  indexList.innerHTML = '';
  items.forEach((item, index) => {
    const card = document.createElement('article');
    card.id = `works-wheel-${index}`;
    card.className = 'works-wheel-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'option');
    card.setAttribute('aria-selected', String(index === 0));
    card.setAttribute('aria-label', `Découvrir le projet ${item.displayTitle}`);
    card.innerHTML = `<div class="works-wheel-card-face"><img src="${item.image}" alt="${item.displayTitle.replaceAll('"','&quot;')}" loading="${index ? 'lazy' : 'eager'}" draggable="false"><span class="works-wheel-card-name">${item.displayTitle}</span><button type="button" class="works-wheel-card-action" aria-label="Voir les informations de ${item.displayTitle.replaceAll('"','&quot;')}">↗</button></div>`;
    track.append(card);
    cards.push(card);

    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = item.displayTitle;
    button.setAttribute('aria-label', `Ouvrir les informations de ${item.displayTitle}`);
    button.addEventListener('click', () => { navigate(index + 1); openItem(items[index]); stage.focus(); });
    li.append(button);
    indexList.append(li);
    indexButtons.push(button);
  });

  const openItem = item => {
    if (item.caseKey && cases[item.caseKey]) {
      showCaseDialog(cases[item.caseKey]);
      return;
    }
    const project = item.project;
    if (!project) return;
    const media = window.PROJECT_MEDIA?.[project.title] || {};
    const category = project.category === 'client' ? 'Projet client' : project.category === 'scolaire' ? 'Projet scolaire' : 'Projet personnel';
    const narrative = getProjectNarrative(project.displayTitle || project.title, project.category);
    showCaseDialog({
      type: `${category} · ${project.date || 'Sélection'}`,
      title: project.displayTitle || project.title,
      lead: project.description,
      goal: narrative.goal,
      answer: narrative.answer,
      deliverables: narrative.deliverables,
      tools: narrative.tools,
      image: project.image,
      images: media.images,
      links: media.links
    });
  };

  const settle = () => {
    window.clearTimeout(settling);
    settling = window.setTimeout(() => navigate(Math.round(target)), 140);
  };
  function navigate(next) { target = clamp(next, 0, count); }

  cards.forEach((card, index) => {
    const openCard = () => {
      if (dragMoved) return;
      navigate(index + 1);
      openItem(items[index]);
    };
    let pointerOpened = false;
    card.querySelector('.works-wheel-card-action')?.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      dragMoved = false;
      pointerOpened = true;
      openCard();
      window.setTimeout(() => { pointerOpened = false; }, 250);
    });
    card.addEventListener('pointerup', event => {
      if (event.button !== 0 || dragMoved || event.target.closest('.works-wheel-card-action')) return;
      pointerOpened = true;
      openCard();
      window.setTimeout(() => { pointerOpened = false; }, 250);
    });
    card.addEventListener('click', () => {
      if (pointerOpened) return;
      openCard();
    });
    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      navigate(index + 1);
      openItem(items[index]);
    });
  });

  const measure = () => {
    const rect = stage.getBoundingClientRect();
    const cardW = Math.min(rect.height * .38 * 1.45, rect.width * .34);
    const cardH = cardW / 1.45;
    const ringR = cardH * 1.14;
    const ringScale = clamp(((2 * Math.PI * ringR / count) * .82) / cardW, .18, 1);
    metrics = { cardW, cardH, ringR, ringScale, drumR:cardH * 2.22, bow:cardH * 1.82, depth:cardH * 2.7 };
    stage.style.perspective = `${metrics.depth}px`;
    cards.forEach(card => {
      card.style.width = `${cardW}px`;
      card.style.height = `${cardH}px`;
      card.style.marginLeft = `${-cardW / 2}px`;
      card.style.marginTop = `${-cardH / 2}px`;
    });
  };

  const updateLabels = (near, mix) => {
    cards.forEach((card, index) => card.setAttribute('aria-selected', String(index === near)));
    indexButtons.forEach((button, index) => button.classList.toggle('is-active', index === near));
    stage.setAttribute('aria-activedescendant', `works-wheel-${near}`);
    wheelLabel.style.opacity = String(1 - mix);
    frontTitle.textContent = items[near].displayTitle;
    frontTitle.style.opacity = String(mix);
    if (currentLabel) currentLabel.innerHTML = `<b>${String(near + 1).padStart(2, '0')}</b> / <b>${String(count).padStart(2, '0')}</b>`;
  };

  const draw = () => {
    const gap = target - turn;
    turn = Math.abs(gap) < .0005 ? target : turn + gap * (reduced ? 1 : .12);
    const mix = clamp(turn, 0, 1);
    const position = Math.max(0, turn - 1);
    track.style.transform = `translateZ(${-mix * metrics.drumR}px)`;
    cards.forEach((card, index) => {
      const distance = index - position;
      const ringDegrees = distance * (360 / count);
      const drumDegrees = distance * 40;
      card.style.transform = `translateX(${mix * bowAt(drumDegrees, metrics.bow)}px) rotateZ(${(1 - mix) * ringDegrees}deg) translateY(${-(1 - mix) * metrics.ringR}px) rotateX(${mix * drumDegrees}deg) translateZ(${mix * metrics.drumR}px)`;
      card.querySelector('.works-wheel-card-face').style.transform = `scale(${metrics.ringScale + (1 - metrics.ringScale) * mix})`;
      card.style.opacity = mix > .5 && Math.abs(distance) > 1.6 ? '0' : '1';
      card.style.pointerEvents = card.style.opacity === '0' ? 'none' : 'auto';
      card.style.zIndex = String(Math.round(100 - Math.abs(distance) * 2));
    });
    const near = clamp(Math.round(position), 0, last);
    if (near !== active || Math.abs(gap) > .001) { active = near; updateLabels(near, mix); }
    requestAnimationFrame(draw);
  };

  stage.addEventListener('wheel', event => {
    const next = target + event.deltaY / 520;
    if (next > 0 && next < count) event.preventDefault();
    navigate(next);
    settle();
  }, { passive:false });
  stage.addEventListener('pointerdown', event => { dragging = true; dragMoved = false; dragStart = event.clientY; dragTarget = target; });
  stage.addEventListener('pointermove', event => {
    if (!dragging) return;
    if (Math.abs(event.clientY - dragStart) > 6) {
      dragMoved = true;
      if (!stage.hasPointerCapture?.(event.pointerId)) stage.setPointerCapture?.(event.pointerId);
    }
    navigate(dragTarget + (dragStart - event.clientY) / 420);
  });
  const endDrag = () => { if (!dragging) return; dragging = false; if (dragMoved) settle(); window.setTimeout(() => { dragMoved = false; }, 0); };
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);
  stage.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') { event.preventDefault(); navigate(Math.round(target) + 1); }
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') { event.preventDefault(); navigate(Math.round(target) - 1); }
    else if (event.key === 'Home') { event.preventDefault(); navigate(0); }
    else if (event.key === 'End') { event.preventDefault(); navigate(count); }
  });
  previousButton?.addEventListener('click', () => navigate(Math.round(target) - 1));
  nextButton?.addEventListener('click', () => navigate(Math.round(target) + 1));
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', event => { reduced = event.matches; });
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(stage);
  else window.addEventListener('resize', measure);
  measure();
  updateLabels(0, 0);
  requestAnimationFrame(draw);
})();

/* Les halos violets se déplacent librement dans tout le hero.
   Chaque point reçoit une nouvelle destination et une durée différentes,
   pour éviter l'effet de va-et-vient synchronisé des keyframes classiques. */
(() => {
  const hero = document.querySelector('.hero');
  const dots = [...document.querySelectorAll('.hero-violet-dot')];
  if (!hero || !dots.length) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const timers = new Map();
  let resizeFrame = 0;

  const randomBetween = (min, max) => min + Math.random() * (max - min);
  const getBounds = dot => {
    const heroHeight = hero.clientHeight;
    const dotHeight = dot.offsetHeight || 180;
    return {
      minY: -heroHeight * .1,
      maxY: heroHeight - dotHeight * .55
    };
  };

  const setDotPosition = (dot, immediate = false) => {
    const bounds = getBounds(dot);
    const y = randomBetween(bounds.minY, bounds.maxY);
    const isLeftDot = dot.classList.contains('hero-violet-dot--one');
    const scale = randomBetween(.92, 1.08);
    const rotation = randomBetween(-7, 7);
    const duration = randomBetween(7.5, 13.5);

    dot.style.animation = 'none';
    dot.style.left = isLeftDot ? '-4%' : 'auto';
    dot.style.right = isLeftDot ? 'auto' : '-4%';
    dot.style.top = `${y}px`;
    dot.style.transition = immediate ? 'none' : `top ${duration}s cubic-bezier(.37,0,.63,1), transform ${duration}s cubic-bezier(.37,0,.63,1)`;
    dot.style.transform = `translate3d(0,0,0) scale(${scale}) rotate(${rotation}deg)`;
    dot.classList.add('is-roaming');

    if (!immediate) {
      const timer = window.setTimeout(() => setDotPosition(dot), duration * 1000 + randomBetween(250, 1100));
      timers.set(dot, timer);
    }
  };

  const stopRoaming = () => {
    timers.forEach(timer => window.clearTimeout(timer));
    timers.clear();
    dots.forEach(dot => {
      dot.classList.remove('is-roaming');
      dot.style.animation = 'none';
      dot.style.transition = 'none';
      dot.style.left = '';
      dot.style.right = '';
      dot.style.top = '';
      dot.style.transform = '';
    });
  };

  const startRoaming = () => {
    stopRoaming();
    if (motionQuery.matches) return;
    dots.forEach((dot, index) => {
      window.setTimeout(() => setDotPosition(dot, true), index * 180);
      window.setTimeout(() => setDotPosition(dot), index * 180 + 220);
    });
  };

  startRoaming();
  motionQuery.addEventListener?.('change', startRoaming);
  window.addEventListener('resize', () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(startRoaming);
  }, { passive: true });
})();
