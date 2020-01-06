import { database } from "firebase";

export const defaultRecord = {
  "2019-12-01": "",
  "2019-12-02": "",
  "2019-12-03": "",
  "2019-12-04": "",
  "2019-12-05": "",
  "2019-12-06": "",
  "2019-12-07": "",
  "2019-12-08": "",
  "2019-12-09": "",
  "2019-12-10": "",
  "2019-12-11": "",
  "2019-12-12": "",
  "2019-12-13": "",
  "2019-12-14": "",
  modified: false,
  totalScore: 0
};

export const defaultPlayerRecord = {
  badges: [],
  months_won: 0,
  scores: [],
  total_score: 0,
  user_id: 0,
  weeks_won: 0
};

const databaseData = [
  {
    date: "01/01/20",
    category: "A NEW YEAR'S BABY",
    value: 1000,
    jeopardy: "SINGLE",
    text:
      "TURNS OUT NEW YEAR'S DAY IN 1752 WAS A PRECURSOR OF FLAG DAY DUE TO HER BIRTH IN PENNSYLVANIA",
    question: "BETSY ROSS",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/02/20",
    category: "ART CLASS",
    value: 400,
    jeopardy: "DOUBLE",
    text:
      "FROM THE FRENCH FOR “TO GLUE,” IT'S THE FORM OF ART IN WHICH PIECES OF PAPER OR OTHER MATERIALS ARE GLUED TO A CANVAS",
    question: "COLLAGE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/03/20",
    category: "ART CLASS",
    value: 1200,
    jeopardy: "DOUBLE",
    text:
      "STICKS OF THIS FOR DRAWING AND SKETCHING ARE OFTEN MADE FROM THE SLOW BURNING OF WILLOW BRANCHES",
    question: "CHARCOAL",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/04/20",
    category: "ART CLASS",
    value: 2000,
    jeopardy: "DOUBLE",
    text:
      "THE NAVAJO ARE KNOWN FOR THIS TYPE OF PAINTING USED IN HEALING RITES; COLORS ARE MADE BY GRINDING STONES FROM CLIFFS",
    question: "SAND PAINTING",
    is_final: "NO",
    alternative_questions: "DRY PAINTING"
  },
  {
    date: "01/05/20",
    category: "ASIA",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "THIS NARROW STRIP ON THE KOREAN PENINSULA ROUGHLY FOLLOWS 38 DEGREES NORTH LATITUDE",
    question: "THE DEMILITARIZED ZONE",
    is_final: "YES",
    alternative_questions: "THE DMZ"
  },
  {
    date: "01/06/20",
    category: "SOUNDS OF SILENCE",
    value: 200,
    jeopardy: "SINGLE",
    text: "A BUTTON ON YOUR REMOTE CONTROL, OR A PERSON INCAPABLE OF SPEECH",
    question: "MUTE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/07/20",
    category: "SOUNDS OF SILENCE",
    value: 600,
    jeopardy: "SINGLE",
    text: "THIS FOUR-LETTER TYPE OF “MONEY” IS A BRIBE TO KEEP SOMEONE SILENT",
    question: "HUSH",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/08/20",
    category: "SOUNDS OF SILENCE",
    value: 1000,
    jeopardy: "SINGLE",
    text:
      "A JUDGE MAY GIVE THIS THREE-LETTER ORDER TELLING THE PARTICIPANTS IN A CASE NOT TO TALK ABOUT IT",
    question: "GAG",
    is_final: "NO",
    alternative_questions: "GAG ORDER"
  },
  {
    date: "01/09/20",
    category: "HIS OWN MUSEUM",
    value: 400,
    jeopardy: "DOUBLE",
    text:
      "THIS POP ARTIST”S MUSEUM OPENED IN 1994 AND IS ONE OF THE 4 CARNEGIE MUSEUMS OF PITTSBURGH",
    question: "ANDY WARHOL",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/10/20",
    category: "HIS OWN MUSEUM",
    value: 1200,
    jeopardy: "DOUBLE",
    text:
      "A MUSEUM DEVOTED TO THIS SCIENTIST AND INVENTOR IS HOUSED IN WHAT WAS ORIGINALLY THE TUSKEGEE CAMPUS LAUNDRY",
    question: "GEORGE WASHINGTON CARVER",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/11/20",
    category: "HIS OWN MUSEUM",
    value: 2000,
    jeopardy: "DOUBLE",
    text:
      "THIS AUTHOR'S MUSEUM AND STORY CENTRE IN ENGLAND IS “FLUSHBUNKINGLY GLORIUMPTIOUS”; IT SAYS SO RIGHT OUTSIDE",
    question: "ROALD DAHL",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/12/20",
    category: "TECH LOGOS",
    value: "FINAL",
    jeopardy: "FINAL",
    text: "LARRY THE BIRD WAS THE ORIGINAL NAME OF THIS SITE'S LOGO",
    question: "TWITTER",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "01/13/20",
    category: "MOVIE STARS' REAL NAMES",
    value: "SINGLE",
    jeopardy: 200,
    text: "THE QUEEN PORTRAYER ILYENA LYDIA VASILIEVNA MIRONOV",
    question: "HELEN MIRREN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/14/20",
    category: "MOVIE STARS' REAL NAMES",
    value: "SINGLE",
    jeopardy: 600,
    text: "NATALIE HERSHLAG, LOVE INTEREST OF THOR",
    question: "NATALIE PORTMAN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/15/20",
    category: "MOVIE STARS' REAL NAMES",
    value: "SINGLE",
    jeopardy: 1000,
    text: "FAST AND FURIOUS STAR MARK SINCLAIR VINCENT",
    question: "VIN DIESEL",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/16/20",
    category: "AROUND THE VATICAN",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "THE VATICAN BANK IS UNIQUE IN ALLOWING ATM TRANSACTIONS TO BE CONDUCTED IN THIS LANGUAGE",
    question: "LATIN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/17/20",
    category: "AROUND THE VATICAN",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "THIS ROOM WITH A CEILING FRESCO IS WHERE THE CARDINALS VOTE FOR A NEW POPE",
    question: "THE SISTINE CHAPEL",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/18/20",
    category: "AROUND THE VATICAN",
    value: "DOUBLE",
    jeopardy: 2000,
    text: "IN 1506 POPE JULIUS II FOUNDED THIS VATICAN MILITARY GROUP",
    question: "THE SWISS GUARD",
    is_final: "NO",
    alternative_questions: "THE SWISS GUARDS"
  },
  {
    date: "01/19/20",
    category: "STATELY RIVERS",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "LOUISVILLE, KENTUCKY, LIES ON THIS RIVER THAT FORMS MOST OF THE STATE'S NORTHERN BORDER",
    question: "THE OHIO RIVER",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "01/20/20",
    category: "A “NON” CATEGORY",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "IN 1964 MARTIN LUTHER KING SAID THIS “IS THE ANSWER TO THE CRUCIAL POLITICAL AND MORAL QUESTIONS OF OUR TIME”",
    question: "NONVIOLENCE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/21/20",
    category: "A “NON” CATEGORY",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "FINANCIALLY SPEAKING, NPR, THE RED CROSS, AND THE GIRL SCOUTS ARE ALL CLASSIFIED AS THIS TYPE OF ORGANIZATION",
    question: "NON PROFIT",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/22/20",
    category: "A “NON” CATEGORY",
    value: "SINGLE",
    jeopardy: 1000,
    text: "FAVORING NEITHER THE REPUBLICANS NOR THE DEMOCRATS",
    question: "NONPARTISAN",
    is_final: "NO",
    alternative_questions: "NONCOMMITTAL/ECT."
  },
  {
    date: "01/23/20",
    category: "MARK YOUR CALENDARS",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "MUST WE TELL YOU OVER AND OVER AGAIN THAT THIS DAY, FEBRUARY 2, IS PARTLY BASED ON ANCIENT WEATHER SIGNS",
    question: "GROUNDHOG DAY",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/24/20",
    category: "MARK YOUR CALENDARS",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "THE ENVIRONMENTAL PROTECTION AGENCY WAS CREATED IN THE 1970, APPROPRIATELY THE SAME YEAR OF THE DEBUT OF THIS ANNUAL APRIL EVENT",
    question: "EARTH DAY",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/25/20",
    category: "MARK YOUR CALENDARS",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "JANUARY 25, 2020, IS CHINESE NEW YEAR AND BEGINS THE YEAR OF THIS ANIMAL",
    question: "THE RAT",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/26/20",
    category: "ECONOMICS",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "IN 1936 THIS BRITISH ECONOMIST SAID THE WAY TO BEAT A RECESSION WAS A GOVERNMENT-SPONSORED POLICY OF FULL EMPLOYMENT",
    question: "JOHN MAYNARD KEY",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "01/27/20",
    category: "BOXER BRIEFS",
    value: "SINGLE",
    jeopardy: 200,
    text: "FATHER OF 5 SONS NAMED FOR HIM AND A LEAN, MEAN, GRILLING MACHINE",
    question: "GEORGE FOREMAN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/28/20",
    category: "BOXER BRIEFS",
    value: "SINGLE",
    jeopardy: 600,
    text: "1992 GOLD MEDALIST KNOWN AS “THE GOLDEN BOY”",
    question: "OSCAR DE LA HOYA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/29/20",
    category: "BOXER BRIEFS",
    value: "SINGLE",
    jeopardy: 1000,
    text: "THIS $300 MILLION MAN IS NICKNAMED “MONEY” AS WELL AS “PRETTY BOY”",
    question: "FLOYD MAYWEATHER JR.",
    is_final: "NO",
    alternative_questions: "FLOYD MAYWEATHER"
  },
  {
    date: "01/30/20",
    category: "WOMEN AUTHORS",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "SHE DIVORCED HER HUSBAND AND MOVED TO FRANCE TO LOOK BACK AT AMERICA AND WRITE THE AGE OF INNOCENCE",
    question: "EDITH WHARTON",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/31/20",
    category: "WOMEN AUTHORS",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "THIS POET AND AUTHOR CALLED THE FIRST VOLUME OF HER AUTOBIOGRAPHY I KNOW WHY THE CAGED BIRD SINGS",
    question: "MAYA ANGELOU",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/01/20",
    category: "WOMEN AUTHORS",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "THIS BRITISH AUTHOR OF WHITE TEETH ALSO WROTE SWING TIME, A STORY OF 2 CHILDHOOD FRIENDS WHO DREAM OF BEING DANCERS",
    question: "ZADIE SMITH",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/02/20",
    category: "“P”s ON EARTH",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "A GROUNDHOG NAMED PHIL IS THE CENTER OF ATTENTION ON FEBRUARY 2 HERE",
    question: "PUNXSUTAWNEY, PENNSYLVANIA",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "02/03/20",
    category: "AFRICAN-AMERICAN HISTORY",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "IN 2014 SHE MADE HISTORY AS THE FIRST AFRICAN AMERICAN TO DANCE THE ROLE OF CLARA IN AMERICAN BALLET THEATRE'S PRODUCTION OF THE NUTCRACKER",
    question: "MISTY COPELAND",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/04/20",
    category: "AFRICAN-AMERICAN HISTORY",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "BEGINNING IN 1867, SCHOOL WAS IN SESSION FOR WHAT IS NOW MOREHOUSE COLLEGE AND THIS UNIVERSITY IN WASHINTON, D.C.",
    question: "HOWARD UNIVERSITY",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/05/20",
    category: "AFRICAN-AMERICAN HISTORY",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "2013 SAW THE FIRST CONGRESS WITH 2 AFRICAN-AMERICAN SENATORS WHEN MO COWAN OF MASSACHUSETTS SERVED WITH TIM SCOTT OF THIS STATE",
    question: "SOUTH CAROLINA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/06/20",
    category: "FABRICS AND TEXTILES",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "TWO-HUNDRED POUNDS OF MULBERRY LEAVES FED TO WORMS ARE USED TO PRODUCE ONE POUND OF THIS FABRIC",
    question: "SILK",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/07/20",
    category: "FABRICS AND TEXTILES",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "COTTON IS A TRADITIONAL FABRIC FOR THIS ACTIVITY OF MAKING BLANKETS INTO COLORFUL ART",
    question: "QUILTING",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/08/20",
    category: "FABRICS AND TEXTILES",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "THIS SHEER NET FABRIC WITH HEXAGONAL HOLES IS NAMED FOR A FRENCH CITY THAT BEGAN PRODUCING IT IN THE EARLY 1800s",
    question: "TULLE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/09/20",
    category: "STATE CAPITALS",
    value: "FINAL",
    jeopardy: "FINAL",
    text: "IT'S THE ONLY CAPITAL NAMED FOR A SIGNER OF THE CONSTITUTION",
    question: "MADISON, WISCONSIN",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "02/10/20",
    category: "AVIATION",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "THE MID-1930s TBD DEVASTATOR WAS THE FIRST AMERICAN NAVAL AIRCRAFT WITH ONE OF THESE THAT COULD BE TOTALLY ENCLOSED",
    question: "COCKPIT",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/11/20",
    category: "AVIATION",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "MEMBERS OF THE CATERPILLAR CLUB ARE THOSE WHOSE LIVES HAVE BEEN SAVED BY USING ONE OF THESE TO ESCAPE A DISABLED AIRCRAFT",
    question: "PARACHUTE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/12/20",
    category: "AVIATION",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "THIS INTERNATIONAL AIRPORT WAS NAMED FOR AN AGRICULTURAL VILLAGE NEAR LONDON INHABITED IN NEOLITHIC TIMES",
    question: "HEATHROW",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/13/20",
    category: "MOVIE ROMANCES",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "ZOE KAZAN PLAYS A GIRLFRIEND IN A COMA IN THIS 2017 FILM CO-STARRING AND CO-WRITTEN BY KUMAIL NANJIANI",
    question: "THE BIG SICK",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/14/20",
    category: "MOVIE ROMANCES",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "NEVER HAS MOLDING CLAY BEEN MORE PASSIONATE THAN WHEN PATRICK SWAYZE AND DEMI MOORE GOT MUDDY IN THIS FILM",
    question: "GHOST",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/15/20",
    category: "MOVIE ROMANCES",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "IN THIS FILM INGRID BERGMAN ASKS HUMPHREY BOGART, “WAS THAT CANNON FIRE, OR IS IT MY HEART POUNDING?”",
    question: "CASABLANCA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/16/20",
    category: "GREEK ALPHABET",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "IT'S THE ONLY LETTER OF THE GREEK ALPHABET WHOSE ENGLISH SPELLING COULD ALSO BE IDENTIFIED AS A NUMBER IN ROMAN NUMERALS",
    question: "XI",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "02/17/20",
    category: "PRESIDENTS 101",
    value: "SINGLE",
    jeopardy: 200,
    text: "THE FIRST TO HOLD AN INTERNET CHAT WITH THE PUBLIC",
    question: "BILL CLINTON",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/18/20",
    category: "PRESIDENTS 101",
    value: "SINGLE",
    jeopardy: 600,
    text: "THE FIRST PRESIDENT TO BE BORN IN A HOSPITAL; IT WAS OCTOBER 1924",
    question: "JIMMY CARTER",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/19/20",
    category: "PRESIDENTS 101",
    value: "SINGLE",
    jeopardy: 1000,
    text: "HE GOT THE JOB IN 1945 AFTER BEING VICE PRESIDENT FOR ONLY 83 DAYS",
    question: "HARRY S. TRUMAN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/20/20",
    category: "MUSICAL CHAIRS",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "BERRY GORDY WAS KNOWN AS “THE CHAIRMAN” WHILE RUNNING THIS SOUL MUSIC EMPIRE",
    question: "MOTOWN RECORDS",
    is_final: "NO",
    alternative_questions: "MOTOWN INDUSTRIES"
  },
  {
    date: "02/21/20",
    category: "MUSICAL CHAIRS",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "AHMET ERTEGUN WAS CO-FOUNDER AND CHAIRMAN OF THIS “OCEANIC” LABEL HOME TO ARETHA FRANKLIN AND LED ZEPPELIN",
    question: "ATLANTIC RECORDS",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/22/20",
    category: "MUSICAL CHAIRS",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "THIS MEDIA MOGUL WAS CHAIRMAN OF ELEKTRA/ASYLUM RECORDS BEFORE STARTING HIS OWN SELF-NAMED MUSIC AND FILM COMPANY",
    question: "DAVID GEFFEN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/23/20",
    category: "ARCHAEOLOGY",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "IN 1970 THE WRECK OF THE EL GRAN GRIFÓN, PART OF THIS FLEET, WAS FOUND OFF SCOTLAND 382 YEARS AFTER IT SANK",
    question: "THE SPANISH ARMADA",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "02/24/20",
    category: "BANKING",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "U.S. BANKS EARN MONEY BY GIVING LOANS AT INTEREST RATES REGULATED BY THIS BODY CREATED IN 1913",
    question: "FEDERAL RESERVE",
    is_final: "NO",
    alternative_questions: "FEDERAL RESERVE BOARD"
  },
  {
    date: "02/25/20",
    category: "BANKING",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "THE AMERICANS WITH DISABILITIES ACT SAYS THESE MUST HAVE BRAILLE, EVEN THE DRIVE-UP ONES",
    question: "ATMs",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/26/20",
    category: "BANKING",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "THIS FIVE-LETTER APP THAT STARTED IN 2009 ALLOWS YOU TO SEND MONEY TO FRIENDS, MAKING GROUP DINNERS LESS STRESSFUL",
    question: "VENMO",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/27/20",
    category: "LEAP DAY",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "ON FEBRUARY 29, 1904, TEDDY ROOSEVELT APPOINTED A COMMISSION TO OVERSEE CONSTRUCTION OF THIS WATERWAY",
    question: "THE PANAMA CANAL",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/28/20",
    category: "LEAP DAY",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "2008's LEAP DAY SAW THE VIRGINIA SUPREME COURT UPHOLD THE USA's FIRST FELONY CONVICTION FOR THIS PRACTICE OF FLOODING EMAILS",
    question: "SPAMMING",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "02/29/20",
    category: "LEAP DAY",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "IN 1712, TRYING TO GO FROM JULIAN TO GREGORIAN, THIS COUNTRY, HOME OF MALMO AND GOTHENBURG, HAD A FEBRUARY 29 AND 30",
    question: "SWEDEN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/01/20",
    category: "CANADA",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "ALPHABETICALLY LAST OF CANADA'S 3 TERRITORIES, IT CAN RANGE IN TEMPERATURES FROM 80s IN THE SUMMER TO -60s IN WINTER",
    question: "YUKON",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "03/02/20",
    category: "WOMEN ATHLETES",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "IN 2017 SHE WON THE AUSTRALIAN OPEN SINGLES TITLE WHILE SORT OF PLAYING DOUBLES—SHE WAS PREGNANT AT THE TIME",
    question: "SERENA WILLIAMS",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/03/20",
    category: "WOMEN ATHLETES",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "THIS MIXED MARTIAL ARTS CHAMP SAID, “WHAT MAKES ME SO CONFIDENT THAT I CAN WIN IS I'M THE GREATEST FIGHTER IN THE WORLD”",
    question: "RONDA ROUSEY",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/04/20",
    category: "WOMEN ATHLETES",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "IN 2016 SHE BECAME THE FIRST FEMALE GYMNAST IN OVER 30 YEARS TO WIN 4 GOLD MEDALS AT A SINGLE OLYMPICS",
    question: "SIMONE BILES",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/05/20",
    category: "CLASSIC COMIC STRIPS",
    value: "DOUBLE",
    jeopardy: 400,
    text: "IN 2018 THIS LASAGNA-LOVING CAT CELEBRATED HIS 40TH BIRTHDAY",
    question: "GARFIELD",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/06/20",
    category: "CLASSIC COMIC STRIPS",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "EVEN WITH INFLATION THIS PEANUTS CHARACTER WAS ALWAYS WILLING TO GIVE HER ADVICE FOR 5 CENTS",
    question: "LUCY",
    is_final: "NO",
    alternative_questions: "LUCY VAN PELT"
  },
  {
    date: "03/07/20",
    category: "CLASSIC COMIC STRIPS",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "IT FOLLOWED THE IMAGINATIVE ADVENTURES OF A SIX-YEAR OLD BOY AND HIS TRUSTY TOY TIGER",
    question: "CALVIN AND HOBBES",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/08/20",
    category: "NATURE'S WONDERS",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "HUMANS' NEAREST GENETIC COUSINS ARE THESE ANIMALS, WHO ARE ABOUT 99 PERCENT GENETICALLY SIMILAR TO US",
    question: "CHIMPANZEES",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "03/09/20",
    category: "LIKE A SMILE",
    value: "SINGLE",
    jeopardy: 200,
    text: "KEEP AN EYE ON SOMEONE WHO'S “SLY AS” OR “CRAZY LIKE” THIS ANIMAL",
    question: "FOX",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/10/20",
    category: "LIKE A SMILE",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "YOU WERE “SLEEPING LIKE” THIS, ALSO A TYPE OF DIARY FOR A SHIP'S CAPTAIN",
    question: "LOG",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/11/20",
    category: "LIKE A SMILE",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "A BORING ACTIVITY IS “LIKE WATCHING” THIS, WHICH HAPPENS EVEN SLOWER WITH OILS THAN WITH LATEX",
    question: "PAINT DRY",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/12/20",
    category: "PLAYING AT WOODSTOCK",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "THIS BAND PLAYED A 23-SONG SET THAT INCLUDED “MY GENERATION” AND “PINBALL WIZARD”",
    question: "THE WHO",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/13/20",
    category: "PLAYING AT WOODSTOCK",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "ON SUNDAY MORNING AT 2 A.M., THIS BIG-VOICED WOMAN GAVE THE CROWD A SHOT OF “KOZMIC BLUES” AND A “PIECE OF MY HEART”",
    question: "JANIS JOPLIN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/14/20",
    category: "PLAYING AT WOODSTOCK",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "O SAY CAN YOU SEE THIS GUITARIST WHO CLOSED THE SHOW AT WOODSTOCK AND WAS PAID $32,000 FOR THE GIG",
    question: "JIMI HENDRIX",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/15/20",
    category: "AWARDS AND HONORS",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "COMPUTER SCIENCE'S EQUIVALENT TO THE NOBEL PRIZE IS NAMED FOR THIS 20TH CENTURY BRITISH MATHEMATICIAN",
    question: "ALAN TURING",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "03/16/20",
    category: "FOUNDERS",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "THE “WAL” IN WALMART COMES FROM THIS LAST NAME OF THE CHAIN'S FOUNDER",
    question: "WALTON",
    is_final: "NO",
    alternative_questions: "SAM WALTON"
  },
  {
    date: "03/17/20",
    category: "FOUNDERS",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "LAST NAME OF ARTHUR, THE IRISH GENT WHO FOUNDED A BREWERY IN DUBLIN IN 1759",
    question: "GUINNESS",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/18/20",
    category: "FOUNDERS",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "IN 1945 JOHN H. JOHNSON FOUNDED THIS FIRST MASS-CIRCULATION AFRICAN-AMERICAN MAGAZINE; JET  CAME A FEW YEARS LATER",
    question: "EBONY",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/19/20",
    category: "NAME THAT ELEMENT",
    value: "DOUBLE",
    jeopardy: 400,
    text: "IT'S NUMBER 1",
    question: "HYDROGEN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/20/20",
    category: "NAME THAT ELEMENT",
    value: "DOUBLE",
    jeopardy: 1200,
    text: "ELEMENT NUMBER 18, IT'S EVERY PIRATE'S FAVORITE NOBLE GAS",
    question: "ARGON",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/21/20",
    category: "NAME THAT ELEMENT",
    value: "DOUBLE",
    jeopardy: 2000,
    text: "UNTIL 1957 IT WAS KNOWN AS GLUCINIUM, BUT WHATEVER WILL Be, WILL Be",
    question: "BERYLLIUM",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/22/20",
    category: "SPORTS",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "IN THE U.S., THOROUGHBRED HORSES ARE USUALLY BRED WITH QUARTER HORSES TO PRODUCE THE PONIES FOR THIS TEAM SPORT",
    question: "POLO",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "03/23/20",
    category: "KIDDY LIT",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "PETER AND THE STARCATCHERS IS DAVE BARRY'S AND RIDLEY PEARSON'S 2004 BACKSTORY TO THIS CHARACTER",
    question: "PETER PAN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/24/20",
    category: "KIDDY LIT",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "THE FIRST THING THIS DR. SEUSS CHARACTER SAYS TO SALLY AND HER BROTHER IS “WHY DO YOU SIT THERE LIKE THAT?”",
    question: "THE CAT IN THE HAT",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/25/20",
    category: "KIDDY LIT",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "IN WINNIE-THE-POOH, PIGLET TRIES TO CAPTURE ONE OF THESE IMAGINARY ELEPHANT-LIKE CREATURES",
    question: "HEFFALUMP",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/26/20",
    category: "WORLD GEOGRAPHY",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "IN 1961 THIS COUNTRY'S TUTSI MONARCHY WAS OVERTHROWN IN A HUTU REVOLUTION",
    question: "RWANDA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/27/20",
    category: "WORLD GEOGRAPHY",
    value: "DOUBLE",
    jeopardy: 1200,
    text: "ITS NEAREST NEIGHBOR IS GREENLAND, ABOUT 200 MILES TO THE NORTHWEST",
    question: "ICELAND",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/28/20",
    category: "WORLD GEOGRAPHY",
    value: "DOUBLE",
    jeopardy: 2000,
    text: "SCHELLENBERG AND VADUZ WERE UNITED TO FORM THIS TINY COUNTRY",
    question: "LIECHTENSTEIN",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/29/20",
    category: "LATE ENTERTAINERS",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "IN 2015 A STREET CONNECTING WITH FRANK SINATRA DRIVE AND DEAN MARTIN DRIVE IN LAS VEGAS WAS RENAMED IN HIS HONOR",
    question: "SAMMY DAVIS",
    is_final: "YES",
    alternative_questions: "SAMMY DAVIS JR."
  },
  {
    date: "03/30/20",
    category: "SURPRISE ME",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "THIS WASHINGTON IRVING SHORT STORY CHARACTER IS SURPRISED TO LEARN HE'S BEEN ASLEEP FOR 20 YEARS",
    question: "RIP VAN WINKLE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "03/31/20",
    category: "SURPRISE ME",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "IF YOU ORDER A PULLET SURPRISE IN A RESTAURANT, THEY'LL SERVE YOU THIS TYPE OF MEAT",
    question: "A CHICKEN",
    is_final: "NO",
    alternative_questions: "HEN/FOWL"
  },
  {
    date: "04/01/20",
    category: "SURPRISE ME",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "ON APRIL 1, 1996, NEWSPAPER READERS WERE SURPRISED TO LEARN THAT TACO BELL HAD BOUGHT THIS HISTORIC BELL; APRIL FOOL'S",
    question: "THE LIBERTY BELL",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/02/20",
    category: "OTHER SUMMER OLYMPIC CITIES",
    value: "DOUBLE",
    jeopardy: 400,
    text: "THIS CITY HOSTED THE SUMMER GAMES IN 1964, A FIRST FOR ASIA",
    question: "TOKYO",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/03/20",
    category: "OTHER SUMMER OLYMPIC CITIES",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "IN 2006, 30 YEARS LATE, THE DEBT WAS PAID OFF FOR THE STADIUM CALLED “THE BIG OWE” AND THE REST OF THIS CITY'S GAMES",
    question: "MONTREAL",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/04/20",
    category: "OTHER SUMMER OLYMPIC CITIES",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "IT TOOK UNTIL 1956, BUT FINALLY A SOUTHERN HEMISPHERE CITY HOSTED—THIS ONE",
    question: "MELBOURNE, AUSTRALIA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/05/20",
    category: "CEREMONIES",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "FOR ALMOST 1,000 YEARS, THIS RELIGIOUS OFFICIAL HAS PRESIDED OVER THE CORONATION OF A BRITISH SOVEREIGN",
    question: "THE ARCHBISHOP OF CATERBURY",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "04/06/20",
    category: "VICE PRESIDENTS",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "BEFORE HE BECAME NIXON'S FIRST VICE PRESIDENT, HE WON A BRONZE STAR FOR HIS SERVICE IN WORLD WAR II IN FRANCE",
    question: "SPIRO AGNEW",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/07/20",
    category: "VICE PRESIDENTS",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "THIS FORMER VEEP WON THE 2007 NOBEL PRIZE FOR HIS WORK ON CLIMATE CHANGE",
    question: "AL GORE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/08/20",
    category: "VICE PRESIDENTS",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "IN 1981 REAGAN SENT VICE PRESIDENT BUSH FOR A TÊTE-À-TÊTE WITH HIM, FRANCE'S NEW SOCIALIST PRESIDENT",
    question: "FRANÇOIS MITTERRAND",
    is_final: "NO",
    alternative_questions: "FRANCOIS MITTERRAND"
  },
  {
    date: "04/09/20",
    category: "FLOWERS",
    value: "DOUBLE",
    jeopardy: 400,
    text: "THE HYBRID TEA IS THE MOST POPULAR CLASS OF THIS FLOWER",
    question: "THE ROSE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/10/20",
    category: "FLOWERS",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "DOROTHY AND HER FRIENDS ENCOUNTERED A FIELD OF THESE FLOWERS THAT MADE THEM FALL ASLEEP",
    question: "POPPIES",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/11/20",
    category: "FLOWERS",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "THE NAME OF THIS AUTUMN BLOOMER IS FROM THE GREEK FOR “GOLD” AND “FLOWER”",
    question: "CHRYSANTHEMUM",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/12/20",
    category: "DESIGN",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "IN ADDITION TO JEWELED EASTER EGGS, THIS FAMOUS RUSSIAN GOLDSMITH DESIGNED CIGARETTE BOXES AND CARVED ANIMALS",
    question: "PETER CARL FABERGÉ",
    is_final: "YES",
    alternative_questions: "PETER CARL FABERGE"
  },
  {
    date: "04/13/20",
    category: "A TOUGH FOOD CATEGORY",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "BILTONG IS A SOUTH AFRICAN VERSION OF THIS TOUGH AND SALTY FIVE-LETTER FOOD, THIN STRIPS OF MEAT THAT'S BEEN DRIED",
    question: "JERKY",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/14/20",
    category: "A TOUGH FOOD CATEGORY",
    value: "SINGLE",
    jeopardy: 600,
    text:
      "EATING THIS ORGAN MEAT CAN BE TOUGH BUT DOES HELP WARD OFF ANEMIA; AN OIL IS ALSO MADE FROM THE COD'S",
    question: "LIVER",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/15/20",
    category: "A TOUGH FOOD CATEGORY",
    value: "SINGLE",
    jeopardy: 1000,
    text: "IT'S THE ITALIAN NAME FOR SQUID, WHOSE MEAT IS FIRM AND CHEWY",
    question: "CALAMARI",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/16/20",
    category: "JAPANESE POP CULTURE",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "PACHINKO IS A VARIETY OF THIS ARCADE GAME THAT ONE MIGHT FIND IN A TOKYO PARLOR",
    question: "PINBALL MACHINE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/17/20",
    category: "JAPANESE POP CULTURE",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "ON THE NEW YORK TIMES BESTSELLER LIST, THIS JAPANESE WORD HAS ITS OWN CATEGORY",
    question: "MANGA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/18/20",
    category: "JAPANESE POP CULTURE",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "SAY HELLO WHEN YOU SEE MANEKI NEKO, THESE CERAMIC ANIMALS THOUGHT TO BRING GOOD LUCK",
    question: "CATS",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/19/20",
    category: "PHYSICISTS",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "EINSTEIN WROTE A BOOK ON THIS BECAUSE “IF I DO NOT, THE THEORY WILL NOT BE UNDERSTOOD, SIMPLE THOUGH IT IS”",
    question: "RELATIVITY",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "04/20/20",
    category: "GOING GREEN",
    value: "SINGLE",
    jeopardy: 200,
    text:
      "WHEN GROCERY SHOPPING, FORGET THESE 2 COMMON OPTIONS AND TAKE ALONG A CANVAS TOTE BAG",
    question: "PAPER OR PLASTIC",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/21/20",
    category: "GOING GREEN",
    value: "SINGLE",
    jeopardy: 600,
    text: "GOING GREEN MEANS FOLLOWING THE 3 Rs: REDUCE, REUSE, AND THIS",
    question: "RECYCLE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/22/20",
    category: "GOING GREEN",
    value: "SINGLE",
    jeopardy: 1000,
    text:
      "THIRTEEN-LETTER WORD DESCRIBING SUSTANCES DESIGNED TO BE DECOMPOSED BY MICROORGANISMS",
    question: "BIODEGRADABLE",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/23/20",
    category: "ANIMATED MOVIE CHARACTERS",
    value: "DOUBLE",
    jeopardy: 400,
    text:
      "THIS LION “KING” IS BEFRIENDED BY A MEERKAT NAMED TIMON AND A WARTHOG NAMED PUMBAA",
    question: "SIMBA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/24/20",
    category: "ANIMATED MOVIE CHARACTERS",
    value: "DOUBLE",
    jeopardy: 1200,
    text:
      "THIS SULTRY BOMBSHELL FROM A 1988 HIT CLAIMED, “I'M NOT BAD, I'M JUST DRAWN THAT WAY”",
    question: "JESSICA RABBIT",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/25/20",
    category: "ANIMATED MOVIE CHARACTERS",
    value: "DOUBLE",
    jeopardy: 2000,
    text:
      "THIS FUNNY BUNNY IN BAMBI TEACHES BAMBI HOW TO SLIDE ON ICE AND TALK",
    question: "THUMPER",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "04/26/20",
    category: "MUSEUMS",
    value: "FINAL",
    jeopardy: "FINAL",
    text:
      "THE EGYPTIAN MUSEUM IN CAIRO HAS MUMMIES, SARCOPHAGI, AND, OF COURSE, THE SOLID GOLD FUNERAL MASK OF THIS BOY KING",
    question: "KING TUT",
    is_final: "YES",
    alternative_questions: ""
  },
  {
    date: "04/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "04/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "04/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "04/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/01/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/02/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/03/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/04/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/05/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/06/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/07/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/08/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/09/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/10/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/11/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/12/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/13/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/14/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/15/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/16/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/17/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/18/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/19/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/20/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/21/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/22/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/23/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/24/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/25/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/26/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "05/31/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/01/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/02/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/03/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/04/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/05/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/06/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/07/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/08/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/09/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/10/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/11/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/12/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/13/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/14/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/15/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/16/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/17/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/18/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/19/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/20/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/21/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/22/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/23/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/24/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/25/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/26/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "06/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/01/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/02/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/03/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/04/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/05/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/06/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/07/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/08/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/09/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/10/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/11/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/12/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/13/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/14/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/15/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/16/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/17/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/18/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/19/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/20/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/21/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/22/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/23/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/24/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/25/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/26/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "07/31/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/01/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/02/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/03/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/04/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/05/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/06/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/07/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/08/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/09/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/10/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/11/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/12/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/13/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/14/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/15/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/16/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/17/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/18/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/19/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/20/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/21/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/22/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/23/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/24/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/25/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/26/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "08/31/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/01/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/02/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/03/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/04/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/05/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/06/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/07/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/08/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/09/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/10/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/11/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/12/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/13/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/14/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/15/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/16/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/17/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/18/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/19/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/20/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/21/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/22/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/23/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/24/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/25/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/26/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "09/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/01/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/02/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/03/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/04/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/05/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/06/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/07/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/08/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/09/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/10/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/11/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/12/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/13/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/14/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/15/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/16/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/17/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/18/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/19/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/20/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/21/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/22/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/23/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/24/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/25/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/26/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "10/31/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/01/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/02/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/03/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/04/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/05/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/06/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/07/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/08/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/09/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/10/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/11/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/12/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/13/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/14/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/15/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/16/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/17/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/18/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/19/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/20/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/21/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/22/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/23/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/24/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/25/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/26/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "11/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/01/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/02/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/03/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/04/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/05/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/06/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/07/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/08/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/09/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/10/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/11/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/12/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/13/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/14/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/15/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/16/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/17/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/18/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/19/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/20/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/21/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/22/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/23/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/24/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/25/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/26/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/27/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/28/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/29/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/30/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  },
  {
    date: "12/31/20",
    category: "",
    value: "",
    jeopardy: "",
    text: "",
    question: "",
    is_final: "",
    alternative_questions: ""
  }
];

const clueAndResponseData = [
  {
    date: "01/01/20",
    category: "NINTENDO",
    value: 200,
    jeopardy: "SINGLE",
    text: "THIS PRINCESS IS NAMED AFTER A FRUIT",
    question: "PEACH",
    is_final: "NO",
    alternative_questions: "PRINCESS PEACH"
  },
  {
    date: "01/02/20",
    category: "NINTENDO",
    value: 600,
    jeopardy: "SINGLE",
    text: "A POPULAR MONSTER COLLECTING FRANCHISE ON NINTENDO PLATFORMS",
    question: "POKEMON",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/03/20",
    category: "NINTENDO",
    value: 1000,
    jeopardy: "SINGLE",
    text: "THE MOST RECENT HOME CONSOLE FROM NINTENDO",
    question: "SWITCH",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/04/20",
    category: "THE X-FILES",
    value: 400,
    jeopardy: "DOUBLE",
    text: "MULDER'S YOUNGER SISTER, WHO HE BELIEVE WAS ABDUCTED BY ALIENS",
    question: "SAMANTHA",
    is_final: "NO",
    alternative_questions: "SAMANTHA MULDER"
  },
  {
    date: "01/05/20",
    category: "THE X-FILES",
    value: 1200,
    jeopardy: "DOUBLE",
    text:
      "THE COLLECTIVE NAME OF MULDER'S THREE TECH AND CONSPIRACY-OBSESSED FRIENDS",
    question: "THE LONE GUNMEN",
    is_final: "NO",
    alternative_questions: "LONE GUNMEN"
  },
  {
    date: "01/06/20",
    category: "THE X-FILES",
    value: 2000,
    jeopardy: "DOUBLE",
    text: "THE FIRST EPISODE OF THE SHOW THAT AMANDA WATCHED",
    question: "BEYOND THE SEA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/07/20",
    category: "ITALIAN FOOD",
    value: "FINAL",
    jeopardy: "FINAL",
    text: "THE BEST PASTA DISH OF ALL TIME",
    question: "LASAGNA",
    is_final: "YES",
    alternative_questions: ""
  }
];

export const defaultClueAndResponse = {
  clue: { category: "", date: "", jeopardy: "", text: "", value: 0 },
  response: { alternative_questions: "", date: "", question: "" }
};

export const getClueData = () => {
  const clues = databaseData.map(item => ({
    category: item.category,
    date: item.date,
    jeopardy: item.jeopardy,
    text: item.text,
    value: item.value
  }));

  return clues;
};

export const getResponseData = () => {
  const responses = databaseData.map(item => ({
    alternative_questions: item.alternative_questions,
    date: item.date,
    question: item.question
  }));

  return responses;
};
