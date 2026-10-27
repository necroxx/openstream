/*
  OpenStream movie catalog
  Add or edit films in this array. For Internet Archive items, use the identifier
  from the item page URL: https://archive.org/details/IDENTIFIER
  The embed player URL is then: https://archive.org/embed/IDENTIFIER

  IMPORTANT: Verify the rights/license for each title in your jurisdiction.
  These entries are starter examples; verify the source item and playback before publishing.
*/
window.MOVIES = [
  {
    id: "nosferatu",
    title: "Nosferatu",
    year: "1922",
    genre: "Horror",
    label: "Silent horror",
    mark: "N",
    colors: ["#29424d", "#080d15"],
    description: "F. W. Murnau's influential silent-era vampire film. Check the chosen source item's rights and version before publishing.",
    archiveId: "nosferatu",
    sourceUrl: "https://archive.org/details/nosferatu"
  },
  {
    id: "night-of-the-living-dead",
    title: "Night of the Living Dead",
    year: "1968",
    genre: "Horror",
    label: "Cult classic",
    mark: "N°",
    colors: ["#4a292d", "#100c14"],
    description: "A landmark independent horror film. Confirm the status of the particular print and source before publishing.",
    archiveId: "night_of_the_living_dead",
    sourceUrl: "https://archive.org/details/night_of_the_living_dead"
  },
  {
    id: "his-girl-friday",
    title: "His Girl Friday",
    year: "1940",
    genre: "Comedy",
    label: "Screwball comedy",
    mark: "H",
    colors: ["#4b4539", "#13131a"],
    description: "A fast-paced newsroom comedy starring Cary Grant and Rosalind Russell. Confirm the source item's rights and version.",
    archiveId: "HisGirlFriday",
    sourceUrl: "https://archive.org/details/HisGirlFriday"
  },
  {
    id: "charade",
    title: "Charade",
    year: "1963",
    genre: "Mystery",
    label: "Mystery",
    mark: "C",
    colors: ["#274b59", "#101521"],
    description: "A romantic mystery starring Audrey Hepburn and Cary Grant. Copyright status can depend on jurisdiction and version; verify before use.",
    archiveId: "charade",
    sourceUrl: "https://archive.org/details/charade"
  },
  {
    id: "the-general",
    title: "The General",
    year: "1926",
    genre: "Comedy",
    label: "Silent comedy",
    mark: "G",
    colors: ["#5b4b36", "#15171b"],
    description: "A celebrated silent comedy starring Buster Keaton. Check the chosen print, soundtrack, and source license.",
    archiveId: "TheGeneral",
    sourceUrl: "https://archive.org/details/TheGeneral"
  },
  {
    id: "sita-sings-the-blues",
    title: "Sita Sings the Blues",
    year: "2008",
    genre: "Animation",
    label: "Independent animation",
    mark: "S",
    colors: ["#69423e", "#1a1420"],
    description: "An independent animated feature released by its creator under a Creative Commons license. Read the specific license terms before reuse.",
    archiveId: "sita_sings_the_blues",
    sourceUrl: "https://archive.org/details/sita_sings_the_blues"
  },
  {
    id: "duck-and-cover",
    title: "Duck and Cover",
    year: "1951",
    genre: "Education",
    label: "Archive short",
    mark: "D",
    colors: ["#35554b", "#111a20"],
    description: "An educational civil-defense short preserved in online archives. Verify the source item's rights and playback options.",
    archiveId: "DuckandC1951",
    sourceUrl: "https://archive.org/details/DuckandC1951"
  },
  {
    id: "public-archive-pick",
    title: "Your next film",
    year: "Add year",
    genre: "Featured",
    label: "Your pick",
    mark: "+",
    colors: ["#28436a", "#101521"],
    description: "Replace this card with a film you have verified as public domain or openly licensed.",
    archiveId: "",
    sourceUrl: "https://archive.org/details/movies"
  }
];
