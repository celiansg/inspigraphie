window.PROJECT_MEDIA = {
  'World26 — Coupe du monde 2026': {
    images: [
      'assets/project-gallery/world26-champion.webp',
      'assets/project-gallery/world26-matchs.webp',
      'assets/project-gallery/world26-resultats.webp',
      'assets/project-gallery/world26-tableau-a.webp',
      'assets/project-gallery/world26-tableau-b.webp',
      'assets/project-gallery/world26-groupes-detail.webp',
      'assets/project-gallery/world26-classement-detail.webp',
      'assets/project-gallery/world26-buteurs.webp',
      'assets/project-gallery/world26-passeurs.webp',
      'assets/project-gallery/world26-mobile.webp'
    ],
    links: [{ label: 'Visiter le site World26', url: 'https://inspigraphie-hub.github.io/World26/', type: 'site' }]
  },
  'Création de site vitrine complet': {
    images: ['imgSunkiss1.png','imgSunkiss2.png','imgSunkiss3.png','imgSunkiss4.png','imgSunkiss5.png','imgSunkiss6.png'],
    links: [{ label: 'Visiter le site Sunkiss', url: 'https://sunkissjewelry.github.io/Boutique-de-bijoux/index.html', type: 'site' }]
  },
  'Visuels promotionnels (Bijoux)': { images: ['Sunkiss.jpg','SunkissNew.jpg'] },
  'Création et déclinaisons de logo': { images: ['sunkisslogo1.jpg','sunkisslogo2.jpg','sunkisslogo3.jpg','sunkisslogo4.jpg','sunkisspres.jpg'] },
  'Logo boutique de maillot de foot fictive': { images: ['jerzvf.jpg','jerzvf2.jpg'] },
  'Maillot e-sport': { images: ['maillotv2colrond.png','maillotv2back.png'] },
  'Logo - visuel - carte': { images: ['Plan de travail 2-100.jpg','tiram2.png','tiram.png'] },
  'Affiche publicitaire fictive': { images: ['posticetea_01.gif','posticetea_02.gif','posticetea_03.gif','posticetea_04.gif','posticetea_05.gif'] },
  'Visuel pour les Croowkies (pack2)': { images: ['mmscroowkies.jpg','oreocroowkies.jpg','tiramisucroowkies.jpg','croowkiespub.jpg','croowkiespub2.jpg','ramadan.png'] },
  'Carte de fidélité pour les Croowkies (pack2)': { images: ['carte fidelite v2.png','carte fidelite 2 v2.png','carte fide2.png','carte fide v2.png'] },
  'Flyers Croowkies (pack 1)': { images: ['cookies1.png','cookies2.png','COOKIES1v2.png','COOKIES5V2.png','COOKIES3v2.png','cookies4.png'] },
  'BUN DROP — Projet': { links: [{ label: 'Voir le projet Bun Drop en PDF (version web)', url: 'output/pdf/bun-drop-web.pdf', type: 'pdf' }] }
};

Object.values(window.PROJECT_MEDIA).forEach(project => {
  if (project.images) project.images = project.images.map(file => file.startsWith('assets/')
    ? file
    : `assets/project-gallery/${file.replace(/\.(png|jpe?g)$/i, '.webp')}`);
});
