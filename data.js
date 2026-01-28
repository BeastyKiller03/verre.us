// data.js
// VERRE = tracking / archival platform.
// No attendance claims unless explicitly marked.
// Events require real sources or ticket links.

window.VERRE_DATA = {
  lastUpdated: "01-28-26",

  /* ---------- AREAS ---------- */
  // Added "Bay Area" so Oakland events have a clean, non-confusing label.
  // If you prefer "SF Bay Area" just rename the `name` string.
  areas: [
    { id: "la", name: "Los Angeles" },
    { id: "ocie", name: "OC / IE" },
    { id: "sd", name: "San Diego" },
    { id: "bay", name: "Bay Area" },
    { id: "nyc", name: "New York City" },
    { id: "tx", name: "Texas" }
    
  ],

  /* ---------- ARTISTS ---------- */
  // Kept your existing artists. Fixed a few consistency bugs:
  // - normalized IDs that had caps (Petal-Supply, The-Dare, Perto, Effie, The-Deep, SEBii, Jane-Remover, Tommy-Fleece)
  // - standardized the "SEBii" id to "sebii" (matches your earlier app.js assumptions)
  // - left image filenames exactly as you wrote them (except removed the Damon newline bug)
  artists: [
    {
      id: "suzy-sheer",
      name: "Suzy Sheer",
      tags: ["electro", "club", "underground"],
      links: { instagram: "https://www.instagram.com/boysinblush/" },
      blurb: "LA underground DJ presence—dark, fast, and built for after-hours rooms.",
      origin: "Los Angeles, California",
      background:
        "Underground club/after-hours selector with a strong visual identity and fashion-adjacent nightlife overlap.",
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
      background:
        "Berlin-rooted underground club energy; often adjacent to DIY rave ecosystems and art-forward lineups.",
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
      background:
        "Underground rave/warehouse lean; more word-of-mouth than mainstream, with high-intensity DJ sets.",
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
      background:
        "Hybrid DJ/producer energy; shows up on underground lineups bridging club momentum and pop-adjacent sound design.",
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
      background:
        "Cult-following sleaze-era aesthetics; their orbit overlaps with alternative nightlife and after-parties as much as formal shows.",
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
      background:
        "Internet-native rise; blurs live-set energy and DJ intensity with community-first DIY appeal.",
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
      background:
        "Maximalist club-pop chaos; sets feel like pop DJ parties turned inside out—fast, loud, unpredictable.",
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
      links: { instagram: "https://www.instagram.com/wearedres_/" },
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
      background:
        "Key bridge between hyperpop and underground club; producer brain with DJ-room aggression.",
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
      background:
        "Hyperpop-forward producer world with playful textures and hard emotional punch; built from internet communities and DIY releases.",
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
      background:
        "Moves between intimate rooms and bigger electronic stages; after-hours friendly energy and clean-but-punchy production.",
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
      background:
        "A key thread in the newer NYC nightlife wave where DJ nights feel like bands again.",
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
      background:
        "Internet-native rise with heavy youth pull; lives in the same ecosystem as modern underground hyperpop nights.",
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
      background:
        "High-voltage industrial-pop attitude with goth/club edges; legacy energy still maps onto modern underground nights.",
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
      background:
        "Closely tied to the hyperpop lineage through collaborations and taste; amplified club-adjacent sounds into global pop culture.",
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
      background:
        "Defined a blueprint for modern experimental pop/club sound; her influence runs through today’s hyperpop and underground electronic scenes.",
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

    /* --- NEW (from flyer + your notes) --- */
    {
      id: "cannelle",
      name: "Cannelle",
      tags: ["live", "electronic", "underground"],
      links: { instagram: "https://www.instagram.com/cannelle/" },
      blurb: "",
      origin: "",
      background: "",
      image: "assets/artists/artist-cannelle.jpg",
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
  id: "eurohead",
  name: "EUROHEAD",
  tags: ["underground", "alt", "live"],
  links: { instagram: "https://www.instagram.com/eurohead_____/" },
  blurb: "Underground project operating within the modern alt / live-show circuit.",
  origin: "",
  background: "",
  image: "",
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
  image: "",
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
  image: "",
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
  blurb: "Underground club project appearing on NYC lineups.",
  origin: "",
  background: "",
  image: "",
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
  id: "muerte-lenta",
  name: "Muerte Lenta",
  tags: ["underground", "club"],
  links: { instagram: "" },
  blurb: "Underground act appearing on multi-genre nightlife bills.",
  origin: "",
  background: "",
  image: "",
  relatedPosts: []
},
{
  id: "andres-garcil",
  name: "Andrés Garcil",
  tags: ["underground", "live"],
  links: { instagram: "https://www.instagram.com/andresgarcil/" },
  blurb: "Underground artist appearing across NYC-area lineups.",
  origin: "",
  background: "",
  image: "",
  relatedPosts: []
},
{
  id: "junkfile",
  name: "Junkfile",
  tags: ["underground", "club"],
  links: { instagram: "https://www.instagram.com/junkfile___/" },
  blurb: "Underground club project tied to DIY nightlife bills.",
  origin: "",
  background: "",
  image: "",
  relatedPosts: []
},
{
  id: "nico-nasti",
  name: "nico nasti",
  tags: ["club", "underground"],
  links: { instagram: "https://www.instagram.com/nico.nastii/" },
  blurb: "Underground DJ/artist appearing on NYC lineups.",
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
  image: "",
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
}
  ],

  /* ---------- NEWS ---------- */
  news: [],

  /* ---------- EVENTS ---------- */
  events: [
    {
      id: "party-like-2016-2026-01-30",
      title: "Party Like It's 2016",
      date: "2026-01-30",
      time: "9:00 PM",
      area: "bay",
      venue: "Continental Club",
      address: "Oakland, CA",
      ticketUrl: "https://oaklandcontinentalclub.com/cc_events/party-like-2016-2026-01-30/?ref=ig_social_none_none",
      sourceUrl: "https://oaklandcontinentalclub.com/cc_events/party-like-2016-2026-01-30/?ref=ig_social_none_none",
      flyerUrl: "assets/flyers/flyer-party-like-2016-2026-01-30.jpg",
      lineup: ["Cannelle", "Suzy Sheer", "Contact Sports", "10cust", "Queenie"],
      verreAttending: false,
      notes: "18+ • Oakland • 9:00 PM–2:00 AM (from flyer)"
    },
    {
  id: "swampdem-miami-2026-02-07",
  title: "Techg1rls — Miami",
  date: "2026-02-07",
  time: "8:00 PM–3:00 AM",
  area: "miami",
  venue: "",
  address: "Miami, Florida",
  ticketUrl: "https://posh.vip/e/techg1rls-doecaine-sipper-technopagan?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  sourceUrl: "https://posh.vip/e/techg1rls-doecaine-sipper-technopagan?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  flyerUrl: "assets/flyers/flyer-swampdem-miami-2026-02-07.jpg",
  lineup: [
    "techg1rls",
    "Doecaine",
    "Sipper",
    "Technopagan",
    "35oteric",
    "Hoodwitchhh",
    "Mason Norrisss",
    "Sugarc0de",
    "Cellar",
    "HTTP Rapture"
  ],
  verreAttending: false,
  notes: "DJ • hosted by @swampdem • debuts noted on flyer"
},
    {
  id: "eurohead-dallas-2026-01-30",
  title: "EUROHEAD",
  date: "2026-01-30",
  time: "9:00 PM–2:00 AM",
  area: "tx",
  venue: "",
  address: "9205 Skillman St, Dallas, TX",
  ticketUrl: "https://posh.vip/e/slumber-party-january-30th-featuring-?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnBPzBrtvlmGJGJSQ5C-_gdc3LUg4f5IVstsTwp_sgMKqgMxLLIGgPrSctKR0_aem_Zayj3OwGTjLSSqhRVKPjVA",
  sourceUrl: "https://posh.vip/e/slumber-party-january-30th-featuring-?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnBPzBrtvlmGJGJSQ5C-_gdc3LUg4f5IVstsTwp_sgMKqgMxLLIGgPrSctKR0_aem_Zayj3OwGTjLSSqhRVKPjVA",
  flyerUrl: "assets/flyers/flyer-eurohead-dallas-2026-01-30.jpg",
  lineup: [
    "EUROHEAD",
    "ALASKA",
    "LOVEGHOST",
    "KROAISHA",
    "FEMB0TZ",
    "TEARS OF EROS"
  ],
  verreAttending: false,
  notes: "18+ • Dallas • indie / alt / underground show"
},
    {
  id: "ru-kissin-any-joey-cash-2026-02-13",
  title: "r u kissin any1?",
  date: "2026-02-13",
  time: "9:00 PM–2:00 AM",
  area: "dallas",
  venue: "Puzzles Deep Ellum",
  address: "Dallas, Texas",
  ticketUrl: "https://www.eventim.us/wafform.aspx?_act=eventtickets&_pky=679091&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnDfuqKE535gg5yoH2gDlamn0cJ_GCzXkz771bAGPEViGIapFCsELZWYBWmdw_aem_oaRcsw6GY1FMtj_LGbokKQ",
  sourceUrl: "https://www.eventim.us/wafform.aspx?_act=eventtickets&_pky=679091&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnDfuqKE535gg5yoH2gDlamn0cJ_GCzXkz771bAGPEViGIapFCsELZWYBWmdw_aem_oaRcsw6GY1FMtj_LGbokKQ",
  flyerUrl: "assets/flyers/flyer-ru-kissin-any-joey-cash-2026-02-13.jpg",
  lineup: [
    "Joey Cash",
    "Alaska",
    "Loveghost",
    "Circuttbabii",
    "Excalibur",
    "French Ethics"
  ],
  verreAttending: false,
  notes: "18+ • Slumber Party presents • Dallas"
},
    {
  id: "fuck-cupid-h0l0-nyc-2026-02-15",
  title: "Fuck Cupid",
  date: "2026-02-15",
  time: "10:00 PM–5:00 AM",
  area: "nyc",
  venue: "h0l0",
  address: "1090 Wyckoff Ave, Queens, NY 11385, United States",
  ticketUrl: "",
  sourceUrl: "",
  flyerUrl: "assets/flyers/flyer-fuck-cupid-h0l0-nyc-2026-02-15.jpg",
  lineup: [
    "CRRDR",
    "Sissy",
    "Joanna Kuchta",
    "Muerte Lenta",
    "Andrés Garcil",
    "Junkfile",
    "nico nasti",
    "DJ Thank You",
    "DREAMINSLOW"
  ],
  verreAttending: false,
  notes: "21+ • FEB 15 • @h0l0.nyc"
}
  ]
};
