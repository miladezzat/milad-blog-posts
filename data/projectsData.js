const projectsData = [
  {
    title: 'Sakneen',
    description: `Sakneen Valuation™ is based on a unique pricing algorithm that we built to bring information & transparency to the real estate industry in Egypt.`,
    imgSrc: '/static/projects/sakneen.png',
    href: 'https://www.sakneen.com/en',
  },
  {
    title: 'Error Handler E2',
    description: 'This is an open source package for nodejs error handler.',
    imgSrc: '/static/projects/error-handler-e2.png',
    href: 'https://miladezzat.github.io/error-handler-e2',
  },
  {
    title: 'Encrypt By RSA Algorithm',
    description: 'This is an open source package for encrypt.',
    imgSrc: '/static/projects/error-handler-e2.png',
    href: 'https://miladezzat.github.io/encrypt-rsa',
  },
  {
    title: 'Memoz',
    description: 'Memoz is an in-memory database that persists on disk.',
    imgSrc: '/static/projects/memoz.jpg',
    href: 'https://memoz.js.org',
  },
  {
    title: 'Gen TOTP',
    description:
      'Time-based One-Time Password: Time-based One-time Password is a computer algorithm that generates a one-time password which uses the current time as a source of uniqueness',
    imgSrc: '/static/projects/totp.jpeg',
    href: 'https://60-min-code.github.io/gen-totp',
  },
  {
    title: 'Image Processing Service',
    description: 'This website, compression, and processes images and convert their format live',
    imgSrc: '/static/projects/image-proccessing.png',
    href: 'https://images-process.herokuapp.com/',
  },
  {
    title: 'Sakneen Master Plan Tool',
    description: 'The cool project built on top of map box',
    imgSrc: '/static/projects/sakneen-master-plan-tool.png',
    href: 'https://sakneen-masterplan-tool.herokuapp.com/',
  },
  {
    title: 'The App by Babyation®',
    description:
      'Control your pump…all from the palm of your hand. The App by Babyation® is a one-stop-shop for discreetly adjusting your pump, viewing real-time milk expression, monitoring your stash of pumped milk, and tracking your baby’s feedings, whether they’re from pumping, nursing, or bottle feeding.',
    imgSrc: '/static/projects/babyation.png',
    href: 'https://play.google.com/store/apps/details?id=com.babyation.pump',
  },
  {
    title: 'Sakneen App (Android)',
    description: `Sakneen Valuation™ is based on a unique pricing algorithm that we built to bring information & transparency to the real estate industry in Egypt.`,
    imgSrc: '/static/projects/sakneen-app-android.png',
    href: 'https://play.google.com/store/apps/details?id=com.sakneen.App',
  },
  {
    title: 'Sakneen App (IOS)',
    description: `Sakneen Valuation™ is based on a unique pricing algorithm that we built to bring information & transparency to the real estate industry in Egypt.`,
    imgSrc: '/static/projects/sakneen-app-ios.png',
    href: 'https://apps.apple.com/us/app/sakneen-%D8%B3%D8%A7%D9%83%D9%86%D9%8A%D9%86/id1631737791',
  },
  {
    title: 'Shariiky',
    description: `Shariiky is a relationship specialist that empowers life partners to strengthen their relations with their soulmates.`,
    imgSrc: '/static/projects/shariiky.png',
    href: 'https://apps.apple.com/eg/app/shariiky-%D8%B4-%D8%B1%D9%8A%D9%83%D9%8A/id1624373780',
  },
  {
    title: 'Values Co Market',
    description: `ValuesCo is the social token platform that gives a damn. Our platform enables community leaders and members to easily co-create value, while accomplishing impact missions.`,
    imgSrc: '/static/projects/values-co-market-place.png',
    href: 'https://app.values.co/login',
  },
  {
    title: 'Values Co Dashboard',
    description: `ValuesCo is the social token platform that gives a damn. Our platform enables community leaders and members to easily co-create value, while accomplishing impact missions.`,
    imgSrc: '/static/projects/values-co-admin.png',
    href: 'https://admin.values.co/login',
  },
  {
    title: 'Monolith Brands',
    description: `Monolith Brands Group invests in consumer product businesses and provides them with the capital and resources needed for growth.`,
    imgSrc: '/static/projects/monolithbrands.png',
    href: 'https://www.monolithbrands.com/',
  },
  {
    title: 'Derived Art Market',
    description: `NFT art of remixed key historical moments co-created by the world's leading artists and cultural institutions`,
    imgSrc: '/static/projects/delivered-art-user.png',
    href: 'https://derived.art',
  },
  {
    title: 'Derived Art Admin Board',
    description: `NFT art of remixed key historical moments co-created by the world's leading artists and cultural institutions`,
    imgSrc: '/static/projects/delivered-art-admin.png',
    href: 'https://admin.derived.art/',
  },
  {
    title: 'Derived Art Museum Board',
    description: `NFT art of remixed key historical moments co-created by the world's leading artists and cultural institutions`,
    imgSrc: '/static/projects/delivered-art-musuem.png',
    href: 'https://museum.derived.art/login',
  },
  {
    title: 'NestJs DB Seeder',
    description:
      'This library does not depend on the database type that you use. to seeding fake or real data',
    imgSrc: '/static/projects/nestjs-db-seeder.png',
    href: 'https://www.npmjs.com/package/nestjs-db-seeder',
  },
  {
    title: 'PuraVida Marketplace',
    description:
      "Pura Vida Bitcoin Services. Pura Vida Bitcoin's platform has all the services necessary for Costa Ricans to entirely adopt Bitcoin as their daily currency.",
    imgSrc: '/static/projects/puravida-market.png',
    href: 'https://market.puravidabitcoin.io',
  },
  {
    title: 'PuraVida Dashboard',
    description:
      "Pura Vida Bitcoin Services. Pura Vida Bitcoin's platform has all the services necessary for Costa Ricans to entirely adopt Bitcoin as their daily currency.",
    imgSrc: '/static/projects/puravida-dashboard.png',
    href: 'https://admin.market.puravidabitcoin.io/login',
  },
  {
    title: 'Time.Cards',
    description:
      "This app is a time tracking app, that helps you to track your time and your team time. it's multi-tenant app, and it's free for now.",
    imgSrc: '/static/projects/time-cards.png',
    href: 'https://dasix.time.cards',
  },
  {
    title: 'PuraVida Bitcoin App on Google Play',
    description: 'An easy to use Custodial Bitcoin and Lightning wallet geared for Costa Rica.',
    imgSrc: '/static/projects/puravida-bitcoin-app.png',
    href: 'https://play.google.com/store/apps/details?id=io.puravidabitcoin.app',
  },
  {
    title: 'PuraVida Bitcoin App on Apple Store',
    description: 'An easy to use Custodial Bitcoin and Lightning wallet geared for Costa Rica.',
    imgSrc: '/static/projects/puravida-bitcoin-app.png',
    href: 'https://apps.apple.com/us/app/pura-vida-bitcoin/id6443837514',
  },
]

export default projectsData
