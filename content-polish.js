(() => {
  if (!Array.isArray(window.ALL_PROJECTS)) return;

  const titleCorrections = {
    'Création de site vitrine complet':'Sunkiss · Site vitrine',
    'Visuels promotionnels (Bijoux)':'Sunkiss · Visuels promotionnels',
    'Création et déclinaisons de logo':'Sunkiss · Identité visuelle',
    'Affiche de film (Michael Jackson)':'Michael Jackson · Affiche hommage',
    'Affiche match BAYERN-PSG':'Bayern–PSG · Affiche sportive',
    'Dessin Berserk - dessin papier/numerique':'Berserk · Dessin traditionnel et numérique',
    'Logo - podcast':'Podcast · Création de logo',
    'Logo boutique de maillot de foot fictive':'JerZ · Identité visuelle',
    'Affiche match CHELSEA-PSG':'Chelsea–PSG · Affiche sportive',
    'Logo - visuel - carte':'Tiram · Identité et supports',
    'Affiche publicitaire fictive':'Embrace London · Campagne fictive',
    'Visuel pour les Croowkies (pack2)':'Les Croowkies · Campagne promotionnelle',
    'Carte de fidélité pour les Croowkies (pack2)':'Les Croowkies · Carte de fidélité',
    'Flyers Croowkies (pack 1)':'Les Croowkies · Première campagne',
    'BUN DROP — Projet':'Bun Drop · Concept de marque',
    'Flyer Fictif':'Flyer événementiel · Projet scolaire',
    'Couverture roman':'Couverture de roman fantasy',
    'La La Land':'La La Land · Affiche de film',
    'PSG - Tottenham':'PSG · Tottenham · Affiche sportive',
    'Affiche match PSG - Chelsea':'PSG · Chelsea · Affiche sportive',
    'France - Allemagne':'France · Allemagne · Affiche sportive',
    'France - Croatie':'France · Croatie · Affiche sportive',
    'PSG - OM':'PSG · OM · Affiche sportive',
    'World26 — Coupe du monde 2026':'World26 · Coupe du monde 2026',
    'Alcaras':'Carlos Alcaraz · Affiche conceptuelle'
  };

  const descriptionCorrections = {
    'Création de site vitrine complet':'Conception, intégration et mise en ligne d’un site vitrine pour une marque de bijoux, avec une interface adaptée à son identité.',
    'Visuels promotionnels (Bijoux)':'Création d’une série de visuels promotionnels pour mettre les produits d’une marque de bijoux en valeur sur ses différents canaux.',
    'Création et déclinaisons de logo':'Création d’un logo et de ses déclinaisons pour assurer une identité cohérente sur tous les supports.',
    'Affiche de film (Michael Jackson)':'Conception d’une affiche hommage à Michael Jackson, avec un travail sur la composition, la lumière et le traitement de l’image.',
    'Affiche match BAYERN-PSG':'Affiche conçue autour du match entre le Bayern Munich et le PSG.',
    'Dessin Berserk - dessin papier/numerique':'Dessin du personnage Guts, réalisé à la main puis retravaillé numériquement à l’aide d’une tablette graphique.',
    'Logo - podcast':'Création d’un logo conçu pour identifier rapidement un podcast.',
    'Logo boutique de maillot de foot fictive':'Création d’un logo pour une boutique fictive de maillots de football, avec une recherche sur la symbolique des couleurs.',
    'Affiche match CHELSEA-PSG':'Affiche conçue pour le match entre Chelsea et le PSG.',
    'Logo - visuel - carte':'Création d’un logo, d’un visuel et d’une carte pour un commerce de tiramisus.',
    'Cartes de jeu':'Conception d’une série d’une vingtaine de cartes inspirées des jeux de collection : génération des créatures avec l’IA, puis mise en page et fusion de données dans InDesign.',
    'La La Land':'Réinterprétation graphique de l’affiche du film La La Land.',
    'GP Explorer':'Affiche créée pour l’événement GP Explorer: The Last Race, organisé par Squeezie.',
    'PSG - Tottenham':'Affiche conçue pour la Supercoupe de l’UEFA entre le PSG et Tottenham.',
    'Affiche match PSG - Chelsea':'Affiche conçue pour la finale de la Coupe du monde des clubs entre le PSG et Chelsea.',
    'France - Allemagne':'Affiche conçue pour le match de l’équipe de France féminine contre l’Allemagne à l’Euro féminin.',
    'Maillot e-sport':'Conception d’un maillot pour une structure e-sport, avec une attention portée aux faces et aux détails de production.',
    'Affiche publicitaire fictive':'Création d’une affiche publicitaire fictive pour une boisson Embrace London.',
    'Signature de mail':'Création d’une signature mail pour une association organisatrice d’un festival de théâtre.',
    'Rocky':'Réinterprétation d’une affiche du film Rocky, avec un travail sur le reflet dans l’œil.',
    '1883':'Affiche fan art de la série 1883, construite autour d’une ambiance western et de tons sépia.',
    'Alcaras':'Affiche conceptuelle consacrée au joueur de tennis Carlos Alcaraz, autour de sa victoire à Roland-Garros.',
    'Anakin':'Affiche fan art d’Anakin, inspirée du tableau L’Ange déchu de Cabanel.',
    'Avatar':'Affiche fan art du film Avatar, avec un travail sur les teintes chaudes et les reflets.',
    'Fight Club':'Affiche inspirée du film Fight Club, avec un travail sur la double identité.',
    'Neves':'Affiche consacrée au joueur João Neves, dans un style minimaliste.',
    'PSG - OM':'Affiche consacrée au Classique PSG–OM, avec un travail sur la lumière et l’intensité.',
    'Logo':'Création d’un logo personnel, avec une recherche sur la forme et la lisibilité.',
    'Bannière':'Création d’une bannière pensée pour une identité visuelle cohérente sur les réseaux sociaux.',
    'Visuels maillots':'Création de visuels pour mettre en valeur des maillots de football sur TikTok.',
    'Miniature Fortnite 1':'Miniature YouTube conçue pour rester lisible et attractive en petit format.',
    'Miniature Fortnite 2':'Miniature YouTube conçue pour rester lisible et attractive en petit format.',
    'Miniature Fortnite 3':'Miniature YouTube conçue pour rester lisible et attractive en petit format.',
    'BUN DROP — Projet':'Création d’un concept de restauration et de son univers graphique, présenté dans un dossier de marque complet.',
    'Carte de visite':'Création de cartes de visite personnalisées pour chaque élève de la promotion, produites grâce à la fusion de données dans InDesign.',
    'Brochure 4 pages':'Création d’une brochure de quatre pages à la suite d’une visite de l’entreprise Mic Signaloc.',
    'Flyer Fictif':'Conception d’un flyer événementiel fictif avec un travail sur la hiérarchie, la lisibilité et la préparation du support imprimé.',
    'Couverture roman':'Création d’une couverture de roman fantasy pour une autrice, avec une attention particulière portée à l’atmosphère et à la lisibilité du titre.'
  };

  const selectedProjects = new Set([
    'Création de site vitrine complet', 'Création et déclinaisons de logo',
    'World26 — Coupe du monde 2026', 'Montis Café', 'Affiche match BAYERN-PSG',
    'GP Explorer', 'Interstellar', 'Visuel pour les Croowkies (pack2)'
  ]);
  const selectedCroowkiesCover = 'assets/all-projects/visuel-pour-les-croowkies-pack2.webp';

  if (!window.ALL_PROJECTS.some(project => project.title === 'World26 — Coupe du monde 2026')) {
    window.ALL_PROJECTS.unshift({
      title:'World26 — Coupe du monde 2026', category:'perso', date:'Juillet 2026', duration:'',
      description:'Conception et développement d’une plateforme responsive consacrée à la Coupe du monde FIFA 2026 : matchs, groupes, classements, équipes et statistiques.',
      image:'assets/project-gallery/world26-champion.webp'
    });
  }

  window.ALL_PROJECTS.forEach(project => {
    project.mediaKey = project.title;
    project.selected = selectedProjects.has(project.title)
      && (project.title !== 'Visuel pour les Croowkies (pack2)' || project.image === selectedCroowkiesCover);
    project.displayTitle = titleCorrections[project.title] || project.title;
    if (descriptionCorrections[project.title]) project.description = descriptionCorrections[project.title];
    if (project.duration === '30min') project.duration = '30 min';
    project.description = project.description
      .replace(/plusieurs visuel(?!s)/gi, 'plusieurs visuels')
      .replace(/fusion de donnée(?!s)/gi, 'fusion de données')
      .replace(/boutique de maillot de foot/gi, 'boutique de maillots de football')
      .replace(/écrivaine amatatrice/gi, 'autrice')
      .replace(/personnalisé pour chaque élève/gi, 'personnalisées pour chaque élève')
      .replace(/tiramisus\.\./gi, 'tiramisus.')
      .replace(/double identity/gi, 'double identité')
      .replace(/compte fortnite/gi, 'compte Fortnite')
      .replace(/cr\?ation/gi, 'création')
      .replace(/évènement/gi, 'événement')
      .replace(/fanmade/gi, 'fan art')
      .replace(/SuperCoupe/gi, 'Supercoupe')
      .replace(/compte tiktok/gi, 'compte TikTok');
  });
})();
