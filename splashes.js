var splashes = [
  "you suck at programming",
  "What is the meaning of my Existence...",
  "Certified Dummy.",
  "<span style='color:ff007f;'>3... 2... 1... GO!!!</span>",
  "<span style='color:ff007f;'>Get out of my way, hammer guy!!</span>",
  "<span style='color:ff007f;'>CONGRATULATIONS</span> <span style='color:red;'>You did it...</span>",
  "what.",
  "Created by GlitchyZorua",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "click those circles",
  "AND HIS NAME IS JOHN CEEEEEENNNAAA",
  "ITS RAINING TACOS",
  "Welcome!",
  "asbestos",
  "Contains no DNI list!",
  "Meow :3",
  "sus",
  "test",
  "Bork",
  "i love hugs :3",
  "Hello!",
  "Hi!",
  "egg",
  "eg",
  "Firefox > Chrome",
  "if you're feeling useless, just remember that social media exists",
  "<span style='color:ff007f'>Welcome to Kitty Kart! Beep beep!</span>",
  "Tim Sweeny is in your walls.",
  "The Talking Flower is in your walls.",
  "I don't even have anything to say here",
  "Heyo!",
  "Full of satire.",
  "Not by Google!",
  "- Removed Herobrine",
  "the drum has been awoken.",
  "A wild zorua appeared!",
  ":)",
  "As seen on <span style='color:yellow'>Ironfacebuster</span>",
  "As seen on <b>TV!</b>",
  "As seen on NeoNet!",
  "Donate to Internet Archive!",
  "12345 is a bad password!",
  "Motivation posters SUCK.",
  "Have you checked your refrigerator is running?",
  "Don't solve your problems with violence. Solve them with money",
  "Advertisers don't deserve cookies",
  "Serving as the founder of a religion at least once is part of being a man",
  "Download more RAM",
  "1 of your 5 a day",
  "Asbestos free!",
  "Chromium is for losers",
  "Hello World!",
  "Computer is my favourite flavour of chip",
    "That drop!",
    "Let's Roll!",
    "Booyah!",
    "Whatever.",
    "As If!",
    "Whatever Trevor",
    "Yum Yum Pigs Bum",
    "Go Home Roger!",
    "I Double Dare You.",
    "Who Loves <span style='color:orange;'>Orange</span> Soda?",
    "Score!",
    "Dibs!",
    "Sup b?",
    "Bling-Bling",
    "Damn Skippy",
    "Sup Home Skillet",
    "OMFG",
    "Yo yo homie Joe",
    "How's it hanging?",
    "Shazing!",
    "Totally Tubular!",
    "Where's The Beef?",
    "You look mahhhvellous!",
    "Frankie says RELAX",
    "Like Oh My God!",
    "How much longer Papa Smurf?",
    "Look Ma! I Caught a Fraggle!",
    "Lordy Lordy Lordy!",
    "Mama Mia!",
    "Meep-Meep!",
    "Resistance is futile!",
    "1.21 GIGAWATTS!",
    "Let's Rock!!!",
    "Great Scott!",
    "Bubble Yum keeps it poppin!",
    "Wocka Wocka Wocka",
    "Zoinks!",
    "Jinkys!",
    "Righteous!",
    "Live long and prosper!",
    "<span style='color:d4ffff;'>Hey all, Scott here!</span>",
    "Life of the <a href='https://www.youtube.com/watch?v=MR5Ep0EmAMw'><span style='color:yellow;'>Worry Cat</span>, Sorry Cat.</a>",
    "I (<a href='https://youtu.be/j9QdFU0NxEE'>used to</a>) love Animal Jam!",
    "<a href='https://www.youtube.com/watch?v=deaBNCkwWGs'>Yep, you're banned.</a>",
    "Mod Adam.",
    "Anim\"<b>EA</b>\"l J\"<b>EA</b>\"m",
    "Existence Invalid",
    "<a href='https://www.youtube.com/watch?v=5MYX6R2fuwE'>Pineapple doesn't belong on pizza. Fight me.</a>",
    "<a href='https://www.youtube.com/watch?v=4iQP8C1sAG'>...and what the HELL is that smell?</a>",
    "As seen on Melonland Forum... and Wiki!",
];
var splashess = splashes[Math.floor(Math.random() * splashes.length)];
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let c of ca) {
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
        }
        return null;
    }

    if (getCookie('feature8') === "false") {
         document.write("<i>"+splashess+"</i>");
    }
 
