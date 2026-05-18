// data.js
// VERRE = tracking / archival platform.
// No attendance claims unless explicitly marked.

window.VERRE_DATA = {
  lastUpdated: "2026-03-25",

  /* ---------- AREAS ---------- */
  areas: [
    { id: "la", name: "Los Angeles" },
    { id: "ocie", name: "OC / IE" },
    { id: "sd", name: "San Diego" },
    { id: "bay", name: "Bay Area" },
    { id: "ny", name: "New York City" },
    { id: "tx", name: "Texas" },
    { id: "fl", name: "Florida" },
    { id: "wi", name: "Wisconsin" }
  ],

  /* ---------- ARTISTS ---------- */
  artists: [
    {
      id: "suzy-sheer",
      name: "Suzy Sheer",
      tags: ["electro", "club", "underground"],
      links: { instagram: "https://www.instagram.com/boysinblush/" },
      blurb: "LA underground DJ presence—dark, fast, and built for after-hours rooms.",
      origin: "Los Angeles, California",
      background: "Underground club/after-hours selector with a strong visual identity and fashion-adjacent nightlife overlap.",
      image: "assets/artists/artist-Suzy-Sheer.jpg",
      relatedPosts: []
    },
    {
      id: "mgna-crrrta",
      name: "MGNA CRRRTA",
      tags: ["hyper", "alt", "experimental"],
      links: { instagram: "https://www.instagram.com/mgnacrrrta/" },
      blurb: "Distortion-forward sets with a chaos-pop edge—warehouse pressure and hard transitions.",
      origin: "Berlin, Germany",
      background: "Berlin-rooted underground club energy; often adjacent to DIY rave ecosystems and art-forward lineups.",
      image: "assets/artists/artist-MGNA-Crrrta.jpg",
      relatedPosts: []
    },
    {
      id: "10cust",
      name: "10cust",
      tags: ["deconstructed", "bass", "club"],
      links: { instagram: "https://www.instagram.com/10cust/" },
      blurb: "Harsh, metallic club pressure built for warehouse rooms—fast and physical.",
      origin: "",
      background: "Underground rave/warehouse lean; more word-of-mouth than mainstream, with high-intensity DJ sets.",
      image: "assets/artists/artist-10cust.jpg",
      relatedPosts: []
    },
    {
      id: "damon-r",
      name: "Damon R.",
      tags: ["dj", "electro", "indie-club"],
      links: { instagram: "https://www.instagram.com/damonrsh/" },
      blurb: "Emotional tension meets club pressure—distorted dance rhythms with melodic bite.",
      origin: "Los Angeles, California",
      background: "Hybrid DJ/producer energy; shows up on underground lineups bridging club momentum and pop-adjacent sound design.",
      image: "assets/artists/artist-Damon-R.jpg",
      relatedPosts: []
    },
    {
      id: "the-hellp",
      name: "The Hellp",
      tags: ["indie sleaze", "electro", "club"],
      links: { instagram: "https://www.instagram.com/thehellp/" },
      blurb: "Indie-sleaze revival pressure with club energy and sharp visuals.",
      origin: "Los Angeles, California",
      background: "Cult-following sleaze-era aesthetics; their orbit overlaps with alternative nightlife and after-parties as much as formal shows.",
      image: "assets/artists/artist-the-hellp.jpg",
      relatedPosts: []
    },
    {
      id: "2hollis",
      name: "2hollis",
      tags: ["alt pop", "club", "scene"],
      links: { instagram: "https://www.instagram.com/2hollis/" },
      blurb: "High-gloss alt-pop and club crossover anchoring the current scene.",
      origin: "",
      background: "",
      image: "assets/artists/artist-2hollis.jpg",
      relatedPosts: []
    },
    {
      id: "nate-sib",
      name: "Nate Sib",
      tags: ["hyperpop", "alt", "emo"],
      links: { instagram: "https://www.instagram.com/nate_sib/" },
      blurb: "LA-rooted hyperpop/alt voice with heavy scene overlap.",
      origin: "",
      background: "",
      image: "assets/artists/artist-nate-sib.jpg",
      relatedPosts: []
    },
    {
      id: "underscores",
      name: "underscores",
      tags: ["hyperpop", "pop-punk", "alt"],
      links: { instagram: "https://www.instagram.com/underscores/" },
      blurb: "Sincere songwriting fused with club-ready production—DIY room gravity with loud emotion.",
      origin: "San Francisco Bay Area",
      background: "Internet-native rise; blurs live-set energy and DJ intensity with community-first DIY appeal.",
      image: "assets/artists/artist-underscores.jpg",
      relatedPosts: []
    },
    {
      id: "frost-children",
      name: "Frost Children",
      tags: ["hyperpop", "electro", "chaos"],
      links: { instagram: "https://www.instagram.com/thefrostchildren/" },
      blurb: "Sibling duo channeling rave chaos, glitch-pop, and internet energy.",
      origin: "St. Louis, Missouri → New York City",
      background: "Maximalist club-pop chaos; sets feel like pop DJ parties turned inside out—fast, loud, unpredictable.",
      image: "assets/artists/artist-Frost-Children.jpg",
      relatedPosts: []
    },
    {
      id: "snow-strippers",
      name: "Snow Strippers",
      tags: ["indie sleaze", "electronic", "club"],
      links: { instagram: "https://www.instagram.com/snowstrippers/" },
      blurb: "Dark pop minimalism with sleaze-era club aesthetics.",
      origin: "",
      background: "",
      image: "assets/artists/artist-Snow-Strippers.jpg",
      relatedPosts: []
    },
    {
      id: "dres",
      name: "DRES",
      tags: ["indie", "alt", "band"],
      links: { instagram: "https://www.instagram.com/dresxoxo/" },
      blurb: "Alt band with crossover appeal into electronic-adjacent scenes.",
      origin: "",
      background: "",
      image: "assets/artists/artist-DRES.jpg",
      relatedPosts: []
    },
    {
      id: "umru",
      name: "umru",
      tags: ["hyperpop", "club", "dj"],
      links: { instagram: "https://www.instagram.com/umru/" },
      blurb: "Hyperpop architect with club-rooted DJ sets—rapid transitions and high-BPM pressure.",
      origin: "New York City",
      background: "Key bridge between hyperpop and underground club; producer brain with DJ-room aggression.",
      image: "assets/artists/artist-umru.jpg",
      relatedPosts: []
    },
    {
      id: "petal-supply",
      name: "Petal Supply",
      tags: ["hyperpop", "dj", "internet"],
      links: { instagram: "https://www.instagram.com/petalsupplyco/" },
      blurb: "Internet-era producer blending pop melody and club pressure—scene-native and DIY-coded.",
      origin: "United States (internet-native)",
      background: "Hyperpop-forward producer world with playful textures and hard emotional punch; built from internet communities and DIY releases.",
      image: "assets/artists/artist-Petal-Supply.jpg",
      relatedPosts: []
    },
    {
      id: "ninajirachi",
      name: "Ninajirachi",
      tags: ["club", "hyperpop", "electronic"],
      links: { instagram: "https://www.instagram.com/ninajirachi/" },
      blurb: "Emotional electronic built for late-night momentum—melodic edges with club structure.",
      origin: "Central Coast, Australia",
      background: "Moves between intimate rooms and bigger electronic stages; after-hours friendly energy and clean-but-punchy production.",
      image: "assets/artists/artist-Ninajirachi.jpg",
      relatedPosts: []
    },
    {
      id: "the-dare",
      name: "The Dare",
      tags: ["indie sleaze", "dance-punk", "club"],
      links: { instagram: "https://www.instagram.com/itsthedare/" },
      blurb: "Indie sleaze reboot for the club—sharp, cheeky, and built for sweaty rooms.",
      origin: "New York City",
      background: "A key thread in the newer NYC nightlife wave where DJ nights feel like bands again.",
      image: "assets/artists/artist-The-Dare.jpg",
      relatedPosts: []
    },
    {
      id: "atlgrandma",
      name: "atlgrandma",
      tags: ["underground", "dj", "scene"],
      links: { instagram: "https://www.instagram.com/atlgrandma/" },
      blurb: "DIY club presence tied to underground circuits and regional scenes.",
      origin: "",
      background: "",
      image: "assets/artists/artist-atlgrandma.jpg",
      relatedPosts: []
    },
    {
      id: "perto",
      name: "Perto",
      tags: ["underground", "electronic", "experimental"],
      links: { instagram: "https://www.instagram.com/iamperto/" },
      blurb: "Underground electronic project with club-forward crossover energy.",
      origin: "",
      background: "",
      image: "assets/artists/artist-Perto.jpg",
      relatedPosts: []
    },
    {
      id: "kimj",
      name: "kimj",
      tags: ["dj", "club", "experimental"],
      links: { instagram: "https://www.instagram.com/youngkimj/" },
      blurb: "DJ/producer appearing across underground and hybrid club lineups.",
      origin: "",
      background: "",
      image: "assets/artists/artist-kimj.jpg",
      relatedPosts: []
    },
    {
      id: "extra-small",
      name: "Extra Small",
      tags: ["electronic", "underground", "dj"],
      links: { instagram: "https://www.instagram.com/extrsmll/" },
      blurb: "DIY electronic project with low-profile underground reach.",
      origin: "",
      background: "",
      image: "assets/artists/artist-Extra-Small.jpg",
      relatedPosts: []
    },
    {
      id: "effie",
      name: "Effie",
      tags: ["electroclash", "club", "icon"],
      links: { instagram: "https://www.instagram.com/effi3e/" },
      blurb: "Electroclash-era icon whose influence still echoes in modern club spaces.",
      origin: "",
      background: "",
      image: "assets/artists/artist-Effie.jpg",
      relatedPosts: []
    },
    {
      id: "the-deep",
      name: "The Deep",
      tags: ["underground", "electronic", "collective"],
      links: { instagram: "https://www.instagram.com/thedeeeep/" },
      blurb: "Underground electronic project/collective with scene-driven presence.",
      origin: "",
      background: "",
      image: "assets/artists/artist-The-Deep.jpg",
      relatedPosts: []
    },
    {
      id: "sebii",
      name: "SEBii",
      tags: ["hyperpop", "emo", "internet"],
      links: { instagram: "https://www.instagram.com/sebseb122/" },
      blurb: "High-energy internet rap/hyperpop crossover—elastic flows and bright chaos.",
      origin: "United States",
      background: "Internet-native rise with heavy youth pull; lives in the same ecosystem as modern underground hyperpop nights.",
      image: "assets/artists/artist-SEBii.jpg",
      relatedPosts: []
    },
    {
      id: "alice-glass",
      name: "Alice Glass",
      tags: ["electronic", "punk", "icon"],
      links: { instagram: "https://www.instagram.com/_alice_glass/" },
      blurb: "Electronic punk icon bridging blog-era chaos and modern club energy.",
      origin: "Toronto, Canada",
      background: "High-voltage industrial-pop attitude with goth/club edges; legacy energy still maps onto modern underground nights.",
      image: "assets/artists/artist-Alice-Glass.jpg",
      relatedPosts: []
    },
    {
      id: "jane-remover",
      name: "Jane Remover",
      tags: ["hyperpop", "shoegaze", "experimental"],
      links: { instagram: "https://www.instagram.com/janeremover/" },
      blurb: "Genre-defying artist moving between hyperpop, emo, and shoegaze.",
      origin: "",
      background: "",
      image: "assets/artists/artist-Jane-Remover.jpg",
      relatedPosts: []
    },
    {
      id: "tommy-fleece",
      name: "Tommy Fleece",
      tags: ["indie", "alt", "scene"],
      links: { instagram: "https://www.instagram.com/tommysfleece/" },
      blurb: "Alt-indie songwriter orbiting the current NY/LA crossover scene.",
      origin: "",
      background: "",
      image: "assets/artists/artist-Tommy-Fleece.jpg",
      relatedPosts: []
    },
    {
      id: "charli-xcx",
      name: "Charli XCX",
      tags: ["hyperpop", "pop", "club-culture"],
      links: { instagram: "https://www.instagram.com/charli_xcx/" },
      blurb: "A bridge between mainstream pop and underground club experimentation—scene-shaping influence.",
      origin: "Cambridge, England",
      background: "Closely tied to the hyperpop lineage through collaborations and taste; amplified club-adjacent sounds into global pop culture.",
      image: "assets/artists/artist-Charli-XCX.jpg",
      relatedPosts: []
    },
    {
      id: "sophie",
      name: "SOPHIE",
      tags: ["legacy", "avant-club", "sound-design"],
      links: { instagram: "https://www.instagram.com/sophmsmsmsm/" },
      blurb: "Foundational architect of modern avant-club and experimental pop—tactile, sculptural sound design.",
      origin: "Glasgow, Scotland",
      background: "Defined a blueprint for modern experimental pop/club sound; her influence runs through today’s hyperpop and underground electronic scenes.",
      image: "assets/artists/artist-SOPHIE.jpg",
      relatedPosts: []
    },
    {
      id: "techg1rls",
      name: "techg1rls",
      tags: ["underground", "club", "scene"],
      links: { instagram: "" },
      blurb: "Underground club-adjacent project tied to the modern sleaze / internet nightlife overlap.",
      origin: "",
      background: "",
      image: "assets/artists/artist-techg1rls.jpg",
      relatedPosts: []
    },
    {
      id: "contact-sports",
      name: "Contact Sports",
      tags: ["live", "electronic", "underground"],
      links: { instagram: "https://www.instagram.com/contactspoorts/" },
      blurb: "",
      origin: "",
      background: "",
      image: "assets/artists/artist-contact-sports.jpg",
      relatedPosts: []
    },
    {
      id: "queenie",
      name: "Queenie",
      tags: ["dj", "club", "underground"],
      links: { instagram: "https://www.instagram.com/cafeconpostre/" },
      blurb: "",
      origin: "",
      background: "",
      image: "assets/artists/artist-queenie.jpg",
      relatedPosts: []
    },
    {
      id: "cobrasnake",
      name: "The Cobrasnake",
      tags: ["media", "photography", "blog-era"],
      links: { instagram: "https://www.instagram.com/thecobrasnake/" },
      blurb: "Blog-era nightlife lens—credited on the flyer/visuals.",
      origin: "",
      background: "",
      image: "assets/artists/artist-thecobrasnake.jpg",
      relatedPosts: []
    },
    {
      id: "alaska",
      name: "ALASKA",
      tags: ["alt", "electronic", "underground"],
      links: { instagram: "https://www.instagram.com/cosmicgirlalaska/" },
      blurb: "Alt-electronic artist appearing on underground lineups.",
      origin: "",
      background: "",
      image: "assets/artists/artist-ALASKA.jpg",
      relatedPosts: []
    },
    {
      id: "loveghost",
      name: "LOVEGHOST",
      tags: ["alt", "emo", "rock"],
      links: { instagram: "https://www.instagram.com/loveghostj/" },
      blurb: "Alt-rock project with crossover into underground and youth scenes.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "kroaisha",
      name: "KROAISHA",
      tags: ["underground", "experimental"],
      links: { instagram: "https://www.instagram.com/1kroaisha/" },
      blurb: "Experimental underground artist appearing on DIY lineups.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "femb0tz",
      name: "FEMB0TZ",
      tags: ["electronic", "underground", "club"],
      links: { instagram: "https://www.instagram.com/femb0tz/" },
      blurb: "Electronic underground project tied to modern club-adjacent scenes.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "tears-of-eros",
      name: "TEARS OF EROS",
      tags: ["dark", "alt", "underground"],
      links: { instagram: "https://www.instagram.com/tears.of.eros/" },
      blurb: "Dark alt project operating in underground performance spaces.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "joey-cash",
      name: "Joey Cash",
      tags: ["underground", "alt", "live"],
      links: { instagram: "https://www.instagram.com/joeyyy.cashhh/" },
      blurb: "Underground live act appearing across Slumber Party–adjacent lineups.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "circuttbabii",
      name: "Circuttbabii",
      tags: ["experimental", "underground"],
      links: { instagram: "https://www.instagram.com/circuttbabiiarchive/" },
      blurb: "Experimental underground project tied to DIY show circuits.",
      origin: "",
      background: "",
      image: "assets/artists/artist-circuttbabii.jpg",
      relatedPosts: []
    },
    {
      id: "excalibur",
      name: "Excalibur",
      tags: ["alt", "duo", "underground"],
      links: { instagram: "https://www.instagram.com/excalibur.duo/" },
      blurb: "Alt underground duo appearing on mixed-genre lineups.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "french-ethics",
      name: "French Ethics",
      tags: ["alt", "underground"],
      links: { instagram: "https://www.instagram.com/frenchethics/" },
      blurb: "Alt project operating within underground live show spaces.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "crrdr",
      name: "CRRDR",
      tags: ["club", "underground"],
      links: { instagram: "https://www.instagram.com/c0rred0r/" },
      blurb: "",
      origin: "",
      background: "",
      image: "assets/artists/artist-CRRDR.jpg",
      relatedPosts: []
    },
    {
      id: "sissy",
      name: "Sissy",
      tags: ["club", "underground"],
      links: { instagram: "https://www.instagram.com/uluvsissy/" },
      blurb: "Underground club act tied to DIY nightlife lineups.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "joanna-kuchta",
      name: "Joanna Kuchta",
      tags: ["underground", "live"],
      links: { instagram: "https://www.instagram.com/joannakuchta/" },
      blurb: "Artist appearing across underground show circuits.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "nico-nastii",
      name: "Nico Nastii",
      tags: ["dj", "club", "underground"],
      links: { instagram: "https://www.instagram.com/nico.nastii/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "dj-thank-you",
      name: "DJ Thank You",
      tags: ["dj", "underground", "club"],
      links: { instagram: "https://www.instagram.com/djthankyou/" },
      blurb: "Underground DJ appearing on multi-artist bills.",
      origin: "",
      background: "",
      image: "assets/artists/artist-DJ-Thank-You.jpg",
      relatedPosts: []
    },
    {
      id: "dreaminslow",
      name: "DREAMINSLOW",
      tags: ["underground", "club"],
      links: { instagram: "https://www.instagram.com/dreaminslow/" },
      blurb: "Underground project appearing across nightlife lineups.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "pinponpanpon",
      name: "pinponpanpon",
      tags: ["dj", "underground", "bay-area"],
      links: { instagram: "https://www.instagram.com/pinponpanpon9/" },
      blurb: "Bay Area underground DJ project tied to club-forward and internet-adjacent scenes.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "eviemoon",
      name: "Eviemoon",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/eviemoonn/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "birdybirdybirdy",
      name: "BirdyBirdyBirdy",
      tags: ["dj", "underground", "experimental"],
      links: { instagram: "https://www.instagram.com/birdybirdybirdybirdybirdymp3/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "1999seiji",
      name: "1999Seiji",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/1999seiji/" },
      blurb: "",
      origin: "",
      background: "",
      image: "assets/artists/artist-1999Seiji.jpg",
      relatedPosts: []
    },
    {
      id: "denpa",
      name: "Denpa",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/denpagrafx/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "fakethias",
      name: "FAKETHIAS",
      tags: ["underground", "dj"],
      links: { instagram: "https://www.instagram.com/fakethias/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "touriszt",
      name: "TOURISZT",
      tags: ["underground", "dj"],
      links: { instagram: "https://www.instagram.com/touriszt/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "corridosketamina",
      name: "CORRIDOSKETAMINA",
      tags: ["underground", "dj"],
      links: { instagram: "https://www.instagram.com/corridosketamina/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "axxcer",
      name: "AXXCER",
      tags: ["underground", "dj"],
      links: { instagram: "https://www.instagram.com/axxcer/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "eera",
      name: "EERA",
      tags: ["dj", "underground", "club"],
      links: { instagram: "https://www.instagram.com/eera_1/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "jaeychino",
      name: "JAEYCHINO",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/jaeychino/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "sjr",
      name: "SJR",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/sjr2800/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "certified-trapper",
      name: "Certified Trapper",
      tags: ["dj", "underground", "club"],
      links: { instagram: "https://www.instagram.com/imcertifiedtrapper/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "ss3bby",
      name: "SS3BBY",
      tags: ["dj", "underground", "club"],
      links: { instagram: "https://www.instagram.com/ss3bby/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "pyro",
      name: "PYRO",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/itspyromusic/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "bitchesplaymusic",
      name: "BITCHESPLAYMUSIC",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/bitchesplaymusic/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "junejoy",
      name: "junejoy",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/jun3j0y/" },
      blurb: "",
      origin: "Los Angeles, California",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "atwbc",
      name: "atwbc",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/allthewaybitcrushed/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "cen",
      name: "cen",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/shadowsdanceagain/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "gellofever",
      name: "gellofever",
      tags: ["dj", "underground"],
      links: { instagram: "https://www.instagram.com/gellofever/" },
      blurb: "",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "mp3girl",
      name: "mp3girl",
      tags: ["dj", "underground", "scene"],
      links: { instagram: "https://www.instagram.com/eviesomewhere/" },
      blurb: "Underground DJ / scene presence tied to current nightlife and internet-adjacent spaces.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "american-recycling",
      name: "American Recycling",
      tags: ["dj", "collective", "underground"],
      links: { instagram: "https://www.instagram.com/americanrecycling/" },
      blurb: "Underground DJ / collective presence connected to current LA nightlife and community events.",
      origin: "Los Angeles, California",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "crushh",
      name: "Crushh",
      tags: ["underground", "live", "scene"],
      links: { instagram: "https://www.instagram.com/crushhxo/" },
      blurb: "Underground artist tied to the current LA scene and adjacent live/event spaces.",
      origin: "",
      background: "",
      image: "",
      relatedPosts: []
    },
    {
      id: "marco-alexis-maria",
      name: "Marco Alexis Maria",
      tags: ["artist", "dj", "verre"],
      links: { instagram: "https://www.instagram.com/marcoalexismaria/" },
      blurb: "Artist, DJ, and VERRE-connected creative operating across music, visuals, and scene documentation.",
      origin: "Southern California",
      background: "",
      image: "",
      relatedPosts: []
    }
  ],

  /* ---------- NEWS ---------- */
  news: [],

  /* ---------- EVENTS ---------- */
  events: []
};
