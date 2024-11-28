const bookList = [
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "description": "A young, impoverished former student in Saint Petersburg, Russia, formulates a plan to kill an unscrupulous pawnbroker to redistribute her wealth among the needy. However, after carrying out the act, he is consumed by guilt and paranoia, leading to a psychological battle within himself. As he grapples with his actions, he also navigates complex relationships with a variety of characters, including a virtuous prostitute, his sister, and a relentless detective. The narrative explores themes of morality, redemption, and the psychological impacts of crime.",
        "genres": [
            "crime",
            "fiction",
            "mystery",
            "thrillers"
        ],
        "id": 1
    },
    {
        "title": "The Stranger",
        "author": "Albert Camus",
        "description": "The narrative follows a man who, after the death of his mother, falls into a routine of indifference and emotional detachment, leading him to commit an act of violence on a sun-drenched beach. His subsequent trial becomes less about the act itself and more about his inability to conform to societal norms and expectations, ultimately exploring themes of existentialism, absurdism, and the human condition.",
        "genres": [
            "crime",
            "fiction"
        ],
        "id": 2
    },
    {
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "description": "This classic novel explores the complex, passionate, and troubled relationship between four brothers and their father in 19th century Russia. The narrative delves into the themes of faith, doubt, morality, and redemption, as each brother grapples with personal dilemmas and family conflicts. The story culminates in a dramatic trial following a murder, which serves as a microcosm of the moral and philosophical struggles faced by each character, and by extension, humanity itself.",
        "genres": [
            "crime",
            "fiction"
        ],
        "id": 3
    },
    {
        "title": "Great Expectations",
        "author": "Charles Dickens",
        "description": "A young orphan boy, living with his cruel older sister and her kind blacksmith husband, has an encounter with an escaped convict that changes his life. Later, he becomes the protégé of a wealthy but reclusive woman and falls in love with her adopted daughter. He then learns that an anonymous benefactor has left him a fortune, leading him to believe that his benefactor is the reclusive woman and that she intends for him to marry her adopted daughter. He moves to London to become a gentleman, but his great expectations are ultimately shattered when he learns the true identity of his benefactor and the reality of his love interest.",
        "genres": [
            "crime"
        ],
        "id": 4
    },
    {
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "description": "Set in early 19th-century France, the narrative follows the lives and interactions of several characters, particularly the struggles of ex-convict Jean Valjean and his journey towards redemption. The story touches upon the nature of law and grace, and elaborates upon the history of France, architecture of Paris, politics, moral philosophy, antimonarchism, justice, religion, and the types and nature of romantic and familial love. It is known for its vivid and relatable characters, and its exploration of societal and moral issues.",
        "genres": [
            "crime",
            "historical-fiction"
        ],
        "id": 5
    },
    {
        "title": "In Cold Blood",
        "author": "Truman Capote",
        "description": "This true crime novel tells the story of the brutal 1959 murder of a wealthy farmer, his wife and two of their children in Holcomb, Kansas. The narrative follows the investigation led by the Kansas Bureau of Investigation that ultimately leads to the capture, trial, and execution of the killers. The book explores the circumstances surrounding this horrific crime and the effects it had on the community and the people involved.",
        "genres": [
            "crime",
            "mystery",
            "nonfiction",
            "thrillers"
        ],
        "id": 6
    },
    {
        "title": "Rebecca",
        "author": "Daphne du Maurier",
        "description": "A young woman marries a wealthy widower and moves into his large English country house. She quickly realizes that the memory of her husband's first wife, Rebecca, haunts every corner of the estate. The housekeeper's obsessive devotion to Rebecca and the mysterious circumstances of her death continue to overshadow the second wife's attempts to make a happy life with her husband. As secrets about Rebecca's life and death are revealed, the new wife must grapple with her own identity and place within the household.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 7
    },
    {
        "title": "Native Son",
        "author": "Richard Wright",
        "description": "This novel tells the story of Bigger Thomas, a young African-American man living in Chicago's South Side during the 1930s. Bigger's life takes a tragic turn when he accidentally kills a young white woman. The incident leads to his arrest and trial, revealing the deep-seated racial prejudices and injustices prevalent in American society at the time. The narrative explores themes of poverty, systemic racism, fear, and the effects of oppression.",
        "genres": [
            "crime"
        ],
        "id": 8
    },
    {
        "title": "The Long Goodbye",
        "author": "Raymond Chandler",
        "description": "This novel follows the story of a hard-boiled detective in Los Angeles who becomes embroiled in a complex case when he befriends a drunk named Terry Lennox. After Lennox's wife is found dead, Lennox disappears to Mexico and the detective is left to unravel the mystery. The detective then takes on another case of a missing husband, which becomes intertwined with the Lennox case, leading to a web of deceit, corruption, and murder. The detective's pursuit of the truth leads him through a gritty and corrupt world, testing his resolve and morality.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 9
    },
    {
        "title": "The Complete Tales and Poems of Edgar Allan Poe",
        "author": "Edgar Allan Poe",
        "description": "This collection brings together all of the author's most famous works, including poems, short stories, and novellas. Known for his macabre and gothic storytelling, the author's works are filled with themes of death, love lost, and human frailty. Notable inclusions are the haunting poem \"The Raven,\" the chilling stories \"The Tell-Tale Heart\" and \"The Fall of the House of Usher,\" and his only complete novel, \"The Narrative of Arthur Gordon Pym.\"",
        "genres": [
            "crime",
            "horror",
            "mystery"
        ],
        "id": 10
    },
    {
        "title": "The Hound of the Baskervilles",
        "author": "Arthur Conan Doyle",
        "description": "This classic mystery novel follows a detective and his partner as they investigate a supernatural hound that has been haunting the Baskerville family for generations, supposedly causing the death of the recent family head. As the pair navigate the eerie moors surrounding the Baskerville estate, they unravel a plot of deception and murder, all while trying to protect the new heir from the same grisly fate. The story is a thrilling blend of mystery, suspense, and horror.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 11
    },
    {
        "title": "The Big Sleep",
        "author": "Raymond Chandler",
        "description": "In this classic detective novel, a private investigator is hired by a wealthy family to resolve a blackmail issue involving the younger daughter. As he delves deeper into the case, he uncovers a web of deceit, murder, and organized crime. The detective's investigation is further complicated by his growing attraction to the older daughter, adding a layer of personal involvement to an already complex case. The novel is renowned for its gritty depiction of 1930s Los Angeles and its sharp, witty dialogue.",
        "genres": [
            "crime",
            "mystery"
        ],
        "id": 12
    },
    {
        "title": "A Clockwork Orange",
        "author": "Anthony Burgess",
        "description": "This novel follows the life of a violent young man named Alex, who is part of a youth subculture in a dystopian future England. Alex and his gang engage in a nightmarish spree of rape, assault, and robbery, until he is arrested and subjected to a psychological experiment by the government to \"cure\" him of his violent tendencies. The novel explores themes of free will, morality, and the nature of evil, while using a unique slang language invented by the author.",
        "genres": [
            "crime"
        ],
        "id": 13
    },
    {
        "title": "The Maltese Falcon",
        "author": "Dashiell Hammett",
        "description": "This classic detective novel follows a private investigator who is hired by a mysterious woman to track down her missing sister. The case quickly becomes complicated when the investigator is caught up in a dangerous hunt for a priceless artifact, the Maltese Falcon. As he navigates a world of treachery, deceit, and murder, he must use his wit and courage to outsmart his enemies and solve the mystery.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 14
    },
    {
        "title": "The Talented Mr. Ripley",
        "author": "Patricia Highsmith",
        "description": "The Talented Mr. Ripley is a psychological thriller that follows the story of Tom Ripley, a young man struggling to make ends meet in New York City. When a wealthy shipbuilder mistakes Tom for a close friend of his son, Dickie Greenleaf, he offers him an all-expenses-paid trip to Italy to persuade his wayward son to return home. Instead, Tom becomes obsessed with the luxurious lifestyle of Dickie and his girlfriend, Marge, and goes to extreme lengths to make it his own, including identity theft and murder.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 15
    },
    {
        "title": "The Woman in White",
        "author": "Wilkie Collins",
        "description": "A captivating tale of mystery and suspense, \"The Woman in White\" follows the story of a young art teacher, Walter Hartright, who encounters a mysterious woman dressed in white on a moonlit road. The woman is revealed to be a mental asylum escapee, and as Hartright delves into her story, he uncovers a web of deceit, madness, and dangerous secrets involving a wealthy, titled family. The narrative explores themes of identity, insanity, and the abuse of power, with a complex plot filled with twists and turns.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 16
    },
    {
        "title": "The Name of the Rose",
        "author": "Umberto Eco",
        "description": "Set in a wealthy Italian monastery in the 14th century, the novel follows a Franciscan friar and his young apprentice as they investigate a series of mysterious deaths within the monastery. As they navigate the labyrinthine library and decipher cryptic manuscripts, they uncover a complex plot involving forbidden books, secret societies, and the Inquisition. The novel is a blend of historical fiction, mystery, and philosophical exploration, delving into themes of truth, knowledge, and the power of the written word.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 17
    },
    {
        "title": "And Then There Were None",
        "author": "Agatha Christie",
        "description": "In this classic mystery novel, ten strangers are invited to a secluded mansion on a private island by a mysterious host who is nowhere to be found. As the guests begin to die one by one, mirroring a creepy nursery rhyme that hangs in each of their rooms, they realize that the killer is among them. As suspicion and fear escalate, they must uncover the murderer before no one remains.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 18
    },
    {
        "title": "The Complete Sherlock Holmes",
        "author": "Arthur Conan Doyle",
        "description": "This book is a comprehensive collection of all 56 short stories and four novels centered around the brilliant detective, Sherlock Holmes, and his loyal friend, Dr. John Watson. Set in late 19th and early 20th century London, the stories follow Holmes as he uses his exceptional deductive reasoning and astute observation skills to solve a variety of complex and intriguing mysteries. From murder and theft to espionage and the supernatural, no case is too challenging for this iconic detective.",
        "genres": [
            "crime",
            "mystery"
        ],
        "id": 19
    },
    {
        "title": "Brighton Rock",
        "author": "Graham Greene",
        "description": "\"Brighton Rock\" is a thrilling crime novel set in 1930s Brighton, revolving around the life of a young gangster, who is involved in a series of violent acts and murders. The narrative also explores the themes of Catholicism, morality, and the nature of sin, as the protagonist struggles with his religious beliefs and the guilt of his actions. The story is further complicated by the involvement of a naive young woman who falls in love with the gangster, unaware of his dark side.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 20
    },
    {
        "title": "An American Tragedy",
        "author": "Theodore Dreiser",
        "description": "This classic novel explores the dark side of the American Dream through the story of a young man who, despite his humble beginnings, aspires to climb the social ladder. He becomes involved with two women, one wealthy and one from a working-class background. His ambition and desire for status lead him to commit a crime that ultimately results in his downfall. The novel is a stark examination of the destructive power of unchecked ambition and the moral compromises people are willing to make in pursuit of wealth and status.",
        "genres": [
            "crime"
        ],
        "id": 21
    },
    {
        "title": "A Good Man Is Hard to Find",
        "author": "Flannery O'Connor",
        "description": "This collection of short stories is set in the American South and explores themes of morality, ethics, and the complexity of human nature. The stories feature a variety of characters, each grappling with their own moral dilemmas and personal struggles. The title story centers around a family's disastrous road trip, during which they encounter a notorious escaped convict. Through these narratives, the book examines the concept of \"goodness\" and the capacity for redemption and grace in a flawed world.",
        "genres": [
            "crime"
        ],
        "id": 22
    },
    {
        "title": "The Spy Who Came in From the Cold",
        "author": "John le Carré",
        "description": "This novel is a fascinating tale of espionage during the Cold War, centered around a British intelligence officer who is seemingly ready to end his spy career. However, he is given one last mission before his retirement: to bring down the head of East German Intelligence. As he navigates the dangerous world of spies and double agents, he is forced to confront his own past and the sacrifices he has made for his country. The story is a complex exploration of morality, loyalty, and the personal cost of political conflict.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 23
    },
    {
        "title": "East of Eden",
        "author": "John Steinbeck",
        "description": "This novel is a multi-generational epic that follows the lives of the Trask and Hamilton families in the Salinas Valley in California. The story is deeply rooted in biblical allegory, particularly the tale of Cain and Abel, as it explores themes of love, guilt, freedom, and the inherent good and evil in human nature. The narrative provides a profound, complex portrayal of family and individual struggles with morality and love, while also reflecting on the social changes affecting America during the late 19th and early 20th centuries.",
        "genres": [
            "crime"
        ],
        "id": 24
    },
    {
        "title": "The Godfather",
        "author": "Mario Puzo",
        "description": "The book revolves around the powerful Italian-American crime family of Don Vito Corleone. When the don's youngest son, Michael, reluctantly joins the mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay, he is drawn deeper into the family business. The narrative follows the Corleone family's struggle to hold onto power in a rapidly changing world, as well as Michael's transformation from reluctant family outsider to ruthless mafia boss.",
        "genres": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "id": 25
    },
    {
        "title": "The Lord of the Rings",
        "author": "J. R. R. Tolkien",
        "description": "This epic high-fantasy novel centers around a modest hobbit who is entrusted with the task of destroying a powerful ring that could enable the dark lord to conquer the world. Accompanied by a diverse group of companions, the hobbit embarks on a perilous journey across Middle-earth, battling evil forces and facing numerous challenges. The narrative, rich in mythology and complex themes of good versus evil, friendship, and heroism, has had a profound influence on the fantasy genre.",
        "genres": [
            "fantasy",
            "fiction"
        ],
        "id": 26
    },
    {
        "title": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "description": "This novel follows the story of a young girl named Alice who falls down a rabbit hole into a fantastical world full of peculiar creatures and bizarre experiences. As she navigates through this strange land, she encounters a series of nonsensical events, including a tea party with a Mad Hatter, a pool of tears, and a trial over stolen tarts. The book is renowned for its playful use of language, logic, and its exploration of the boundaries of reality.",
        "genres": [
            "fantasy"
        ],
        "id": 27
    },
    {
        "title": "One Thousand and One Nights",
        "author": "Unknown",
        "description": "This is a collection of Middle Eastern folk tales compiled during the Islamic Golden Age. The stories are told by a young woman, who must weave a new tale each night for her husband, a king, to delay her execution. The tales are filled with magic, adventure, love, and betrayal, and include well-known stories such as \"Aladdin's Wonderful Lamp\", \"Ali Baba and the Forty Thieves\", and \"The Seven Voyages of Sinbad the Sailor\".",
        "genres": [
            "fantasy"
        ],
        "id": 28
    },
    {
        "title": "Harry Potter And The Philosopher's Stone",
        "author": "J. K. Rowling",
        "description": "The story follows a young boy, Harry Potter, who learns on his 11th birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths, the dark wizard who wants to kill him, and the magical stone that holds immense power.",
        "genres": [
            "fantasy"
        ],
        "id": 29
    },
    {
        "title": "A Wrinkle In Time",
        "author": "Madeleine L'Engle",
        "description": "The novel follows the story of a young girl named Meg Murry, her younger brother Charles Wallace, and their friend Calvin O'Keefe as they embark on a cosmic journey to rescue Meg and Charles Wallace's father. The father, a scientist, has been missing since he discovered a new planet using the concept of Tesseract, which is a wrinkle in time. Guided by three mysterious celestial beings, the children travel across different dimensions, face evil forces, and learn about the power of love and self-sacrifice.",
        "genres": [
            "fantasy"
        ],
        "id": 30
    },
    {
        "title": "The Lion, The Witch and the Wardrobe",
        "author": "C. S. Lewis",
        "description": "Four siblings are evacuated from London during World War II and sent to live with an old professor in the countryside. In his house, they discover a magical wardrobe that serves as a portal to the land of Narnia, a world filled with mythical creatures and ruled by an evil White Witch. The children are soon caught up in a struggle to free Narnia from the witch's eternal winter, aided by the majestic lion Aslan. The story combines elements of fantasy, adventure, and Christian allegory.",
        "genres": [
            "fantasy"
        ],
        "id": 31
    },
    {
        "title": "The Once and Future King",
        "author": "T. H. White",
        "description": "This novel is a retelling of the Arthurian legend, from Arthur's childhood tutelage under the wizard Merlyn to his eventual death. The story follows Arthur's journey from a naive boy to a wise and just king, his establishment of the Round Table, his marriage to Guinevere, and his complex relationship with his illegitimate son, Mordred. The narrative explores themes of power, justice, war, and human nature, offering a nuanced and humanizing portrayal of a well-known mythical figure.",
        "genres": [
            "fantasy"
        ],
        "id": 32
    },
    {
        "title": "The Hobbit",
        "author": "J. R. R. Tolkien",
        "description": "In this fantasy novel, a timid and unadventurous hobbit named Bilbo Baggins is whisked away on a grand adventure by a wizard and a group of dwarves. Their mission is to reclaim the dwarves' homeland and treasure from a fearsome dragon. Throughout the journey, Bilbo grows in courage and cunning, proving himself a true hero as he encounters trolls, goblins, giant spiders, and other perils. The novel culminates with a great battle involving various races of Middle Earth, after which Bilbo returns home, forever changed by his experiences.",
        "genres": [
            "fantasy"
        ],
        "id": 33
    },
    {
        "title": "Watership Down",
        "author": "Richard Adams",
        "description": "This novel follows a group of rabbits as they flee their warren due to a foreseen catastrophe. The rabbits, led by Hazel and his psychic brother Fiver, face numerous challenges and adventures as they search for a new home. They encounter predators, hostile rabbit communities, and human threats. The book explores themes of leadership, survival, and freedom, all set within the natural world and its inherent dangers.",
        "genres": [
            "fantasy"
        ],
        "id": 34
    },
    {
        "title": "A Wizard of Earthsea",
        "author": "Ursula K. Le Guin",
        "description": "This fantasy novel follows the story of a young boy named Ged who lives in a world of islands called Earthsea. Ged discovers he has a natural talent for magic and is sent to a school for wizards on the island of Roke. As he grows and learns, his arrogance leads him to unleash a shadow creature that he must then spend years trying to defeat. The book explores themes of balance, power, and the danger of hubris, as Ged learns to control his abilities and accept responsibility for his actions.",
        "genres": [
            "fantasy"
        ],
        "id": 35
    },
    {
        "title": "Where the Wild Things Are",
        "author": "Maurice Sendak",
        "description": "A young boy named Max, dressed in his wolf costume, wreaks such havoc through his household that he is sent to bed without his supper. In his room, a mysterious, wild forest and sea grows out of his imagination, and Max sails to the land of the Wild Things. The Wild Things are fearsome-looking monsters, but Max conquers them by “staring into their yellow eyes without blinking once”, and he is made the king of all wild things. However, he soon finds himself lonely and homesick and returns home to his bedroom where he finds his supper waiting for him, still hot.",
        "genres": [
            "fantasy"
        ],
        "id": 36
    },
    {
        "title": "Peter And Wendy",
        "author": "J. M. Barrie",
        "description": "\"Peter And Wendy\" by JM Barrie is a beloved children's classic that tells the enchanting story of a young girl named Wendy Darling who, along with her two brothers, embarks on a magical adventure to the whimsical world of Neverland. There, they encounter the mischievous and eternal boy, Peter Pan, and his fairy companion, Tinker Bell. Together, they face thrilling escapades, battles with the villainous Captain Hook, and discover the importance of imagination, friendship, and the power of never growing up.",
        "genres": [
            "fantasy"
        ],
        "id": 37
    },
    {
        "title": "The Brief Wondrous Life of Oscar Wao",
        "author": "Junot Diaz",
        "description": "This novel tells the story of Oscar de Leon, an overweight Dominican boy growing up in New Jersey who is obsessed with science fiction, fantasy novels, and falling in love, but is perpetually unlucky in his romantic endeavors. The narrative not only explores Oscar's life but also delves into the lives of his family members, each affected by the curse that has plagued their family for generations. The book is a blend of magical realism and historical fiction, providing a detailed account of the brutal Trujillo regime in the Dominican Republic and its impact on the country's people and diaspora.",
        "genres": [
            "fantasy"
        ],
        "id": 38
    },
    {
        "title": "The Chronicles of Narnia",
        "author": "C. S. Lewis",
        "description": "This seven-part series follows the adventures of various children who play central roles in the unfolding history of the fantastical realm of Narnia. The children are magically transported to Narnia from our world, where they aid the noble lion Aslan in his struggles against evil forces in order to restore peace and justice. The series explores themes of good versus evil, the nature of faith, and the power of sacrifice, all set against a richly imagined magical world full of diverse creatures and landscapes.",
        "genres": [
            "fantasy"
        ],
        "id": 39
    },
    {
        "title": "The Phantom Tollbooth",
        "author": "Norton Juster",
        "description": "A young boy named Milo, who is always bored and uninterested in the world around him, unexpectedly receives a magic tollbooth. When he drives through it in his toy car, he is transported to the Kingdom of Wisdom. Here, he embarks on a quest to rescue the princesses Rhyme and Reason, who have been exiled by the warring brothers, King Azaz of Dictionopolis (where words are supremely important) and the Mathemagician of Digitopolis (where numbers are most valued). Along his journey, Milo learns the value of learning and the excitement that can be found in the world around him.",
        "genres": [
            "fantasy"
        ],
        "id": 40
    },
    {
        "title": "Cloud Atlas",
        "author": "David Mitchell",
        "description": "This novel is a unique blend of six different stories, each set in a different time and place, spanning from the 19th century South Pacific to a post-apocalyptic future. Each tale is written in a different style, reflecting the time and setting it represents, and they are all connected through shared themes and recurring motifs. The stories are nested within each other, with each interrupted by the next, only to be concluded in the second half of the book. The novel explores themes of predacity, civilization, reincarnation and the eternal recurrence of the same behaviors throughout history.",
        "genres": [
            "fantasy"
        ],
        "id": 41
    },
    {
        "title": "His Dark Materials",
        "author": "Philip Pullman",
        "description": "\"His Dark Materials\" is a fantasy trilogy that follows the journey of a young girl named Lyra Belacqua and her daemon, Pantalaimon, across parallel universes. Throughout their adventures, they encounter a variety of mythical creatures, confront religious and political systems, and grapple with complex themes such as free will, original sin, and the nature of consciousness. The series also delves into the mysteries of Dust, a strange particle integral to the multiverse's function.",
        "genres": [
            "fantasy"
        ],
        "id": 42
    },
    {
        "title": "Gormenghast",
        "author": "Mervyn Peake",
        "description": "Set in a vast, crumbling castle named Gormenghast, the story follows the life of Titus Groan, the heir to the Earl of Groan. The narrative explores the complex, rigidly structured society within the castle and the struggles and intrigues of its eccentric characters, particularly the scheming kitchen boy Steerpike. As Titus grows older, he begins to rebel against the stifling traditions of Gormenghast, setting the stage for a dramatic clash between the old and the new.",
        "genres": [
            "fantasy",
            "horror"
        ],
        "id": 43
    },
    {
        "title": "Journey to the West",
        "author": "Wu Cheng'en",
        "description": "\"Journey to the West\" is a classic Chinese novel that follows the adventures of a Buddhist monk and his three disciples, a monkey, a pig, and a river monster, as they travel from China to India in search of sacred Buddhist scriptures. Along the way, they face a series of challenges and obstacles, including battling demons and overcoming their own personal weaknesses. This epic tale is a blend of mythology, folklore, and fantasy, and is also a commentary on the practice and principles of Buddhism.",
        "genres": [
            "fantasy"
        ],
        "id": 44
    },
    {
        "title": "The Wonderful Wizard of Oz",
        "author": "L. Frank Baum",
        "description": "A young girl from Kansas is swept away by a tornado to a fantastical land called Oz. To return home, she must find the mysterious Wizard in the Emerald City, and on her journey, she befriends a Scarecrow in need of a brain, a Tin Woodman longing for a heart, and a Cowardly Lion seeking courage. They all hope the Wizard can grant their wishes, but they must first overcome the Wicked Witch of the West who poses a great danger to them.",
        "genres": [
            "fantasy"
        ],
        "id": 45
    },
    {
        "title": "Perfume",
        "author": "Patrick Suskind",
        "description": "Set in 18th-century France, this novel tells the story of Jean-Baptiste Grenouille, a man born with an extraordinary sense of smell but no personal scent of his own. He becomes an apprentice to a prominent perfumer and learns to create the world's most intoxicating perfumes. However, his obsession with capturing the perfect scent leads him down a dark path, as he begins to kill young women to extract their scent. The book is a chilling exploration of obsession, identity, and the power of scent.",
        "genres": [
            "fantasy",
            "horror"
        ],
        "id": 46
    },
    {
        "title": "Titus Groan",
        "author": "Mervyn Peake",
        "description": "The novel is a gothic fantasy set in the bizarre and intricate world of Gormenghast Castle, home to the ancient and eccentric Groan family. The story begins with the birth of Titus Groan, the seventy-seventh Earl, who stands to inherit the castle and its strange traditions. The narrative follows the castle's eccentric characters and their bizarre rituals, including the ambitious kitchen boy, Steerpike, who seeks to manipulate the castle's traditions for his own gain. It's a dark and surreal exploration of ritual, power, and madness.",
        "genres": [
            "fantasy"
        ],
        "id": 47
    },
    {
        "title": "Froth on the daydream",
        "author": "Boris Vian",
        "description": "\"Froth on the Daydream\" is a tragic love story set in a surreal world. The protagonist is a wealthy young man who marries a woman he loves deeply. However, their bliss is short-lived when she develops a strange illness - a water lily growing in her lung. As her health deteriorates, so does their wealth and social standing, leading to a bleak and heartbreaking end. This novel is a poignant exploration of love, loss, and the harsh realities of life, all set within a fantastical and dreamlike landscape.",
        "genres": [
            "fantasy"
        ],
        "id": 48
    },
    {
        "title": "The Princess Bride",
        "author": "William Goldman",
        "description": "This book is an illustrated edition of a classic tale of true love and high adventure. It tells the story of a beautiful princess and her one true love. After he is reportedly killed, she agrees to marry a wicked prince instead, only to be kidnapped and face numerous dangers. The story is filled with humor, romance, and swashbuckling action, all brought to life by vivid illustrations.",
        "genres": [
            "fantasy"
        ],
        "id": 49
    },
    {
        "title": "The Crying of Lot 49",
        "author": "Thomas Pynchon",
        "description": "The novel follows the journey of a woman who stumbles upon a centuries-old conflict between two mail distribution companies when she is appointed the executor of her ex-lover's will. As she delves deeper into the mystery, she begins to question her own sanity and the reality of the conspiracy itself. The story explores themes of communication, interpretation, and the struggle to find meaning in a chaotic world.",
        "genres": [
            "fantasy"
        ],
        "id": 50
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "description": "Set in the summer of 1922, the novel follows the life of a young and mysterious millionaire, his extravagant lifestyle in Long Island, and his obsessive love for a beautiful former debutante. As the story unfolds, the millionaire's dark secrets and the corrupt reality of the American dream during the Jazz Age are revealed. The narrative is a critique of the hedonistic excess and moral decay of the era, ultimately leading to tragic consequences.",
        "genres": [
            "fiction"
        ],
        "id": 51
    },
    {
        "title": "Ulysses",
        "author": "James Joyce",
        "description": "Set in Dublin, the novel follows a day in the life of Leopold Bloom, an advertising salesman, as he navigates the city. The narrative, heavily influenced by Homer's Odyssey, explores themes of identity, heroism, and the complexities of everyday life. It is renowned for its stream-of-consciousness style and complex structure, making it a challenging but rewarding read.",
        "genres": [
            "fiction"
        ],
        "id": 52
    },
    {
        "title": "In Search of Lost Time",
        "author": "Marcel Proust",
        "description": "This renowned novel is a sweeping exploration of memory, love, art, and the passage of time, told through the narrator's recollections of his childhood and experiences into adulthood in the late 19th and early 20th century aristocratic France. The narrative is notable for its lengthy and intricate involuntary memory episodes, the most famous being the \"madeleine episode\". It explores the themes of time, space and memory, but also raises questions about the nature of art and literature, and the complex relationships between love, sexuality, and possession.",
        "genres": [
            "fiction"
        ],
        "id": 53
    },
    {
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "description": "This novel is a multi-generational saga that focuses on the Buendía family, who founded the fictional town of Macondo. It explores themes of love, loss, family, and the cyclical nature of history. The story is filled with magical realism, blending the supernatural with the ordinary, as it chronicles the family's experiences, including civil war, marriages, births, and deaths. The book is renowned for its narrative style and its exploration of solitude, fate, and the inevitability of repetition in history.",
        "genres": [
            "fiction"
        ],
        "id": 54
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J. D. Salinger",
        "description": "The novel follows the story of a teenager named Holden Caulfield, who has just been expelled from his prep school. The narrative unfolds over the course of three days, during which Holden experiences various forms of alienation and his mental state continues to unravel. He criticizes the adult world as \"phony\" and struggles with his own transition into adulthood. The book is a profound exploration of teenage rebellion, alienation, and the loss of innocence.",
        "genres": [
            "fiction"
        ],
        "id": 55
    },
    {
        "title": "Lolita",
        "author": "Vladimir Nabokov",
        "description": "The novel tells the story of Humbert Humbert, a man with a disturbing obsession for young girls, or \"nymphets\" as he calls them. His obsession leads him to engage in a manipulative and destructive relationship with his 12-year-old stepdaughter, Lolita. The narrative is a controversial exploration of manipulation, obsession, and unreliable narration, as Humbert attempts to justify his actions and feelings throughout the story.",
        "genres": [
            "fiction"
        ],
        "id": 56
    },
    {
        "title": "Nineteen Eighty Four",
        "author": "George Orwell",
        "description": "Set in a dystopian future, the novel presents a society under the total control of a totalitarian regime, led by the omnipresent Big Brother. The protagonist, a low-ranking member of 'the Party', begins to question the regime and falls in love with a woman, an act of rebellion in a world where independent thought, dissent, and love are prohibited. The novel explores themes of surveillance, censorship, and the manipulation of truth.",
        "genres": [
            "fiction"
        ],
        "id": 57
    },
    {
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "description": "Set in 19th-century Russia, this novel revolves around the life of Anna Karenina, a high-society woman who, dissatisfied with her loveless marriage, embarks on a passionate affair with a charming officer named Count Vronsky. This scandalous affair leads to her social downfall, while parallel to this, the novel also explores the rural life and struggles of Levin, a landowner who seeks the meaning of life and true happiness. The book explores themes such as love, marriage, fidelity, societal norms, and the human quest for happiness.",
        "genres": [
            "fiction"
        ],
        "id": 58
    },
    {
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "description": "The novel is a detailed narrative of a vengeful sea captain's obsessive quest to hunt down a giant white sperm whale that bit off his leg. The captain's relentless pursuit, despite the warnings and concerns of his crew, leads them on a dangerous journey across the seas. The story is a complex exploration of good and evil, obsession, and the nature of reality, filled with rich descriptions of whaling and the sea.",
        "genres": [
            "fiction"
        ],
        "id": 59
    },
    {
        "title": "Wuthering Heights",
        "author": "Emily Brontë",
        "description": "This classic novel is a tale of love, revenge and social class set in the Yorkshire moors. It revolves around the intense, complex relationship between Catherine Earnshaw and Heathcliff, an orphan adopted by Catherine's father. Despite their deep affection for each other, Catherine marries Edgar Linton, a wealthy neighbor, leading Heathcliff to seek revenge on the two families. The story unfolds over two generations, reflecting the consequences of their choices and the destructive power of obsessive love.",
        "genres": [
            "fiction"
        ],
        "id": 60
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "description": "Set in the racially charged South during the Depression, the novel follows a young girl and her older brother as they navigate their small town's societal norms and prejudices. Their father, a lawyer, is appointed to defend a black man falsely accused of raping a white woman, forcing the children to confront the harsh realities of racism and injustice. The story explores themes of morality, innocence, and the loss of innocence through the eyes of the young protagonists.",
        "genres": [
            "fiction",
            "historical-fiction",
            "mystery"
        ],
        "id": 61
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "description": "Set in early 19th-century England, this classic novel revolves around the lives of the Bennet family, particularly the five unmarried daughters. The narrative explores themes of manners, upbringing, morality, education, and marriage within the society of the landed gentry. It follows the romantic entanglements of Elizabeth Bennet, the second eldest daughter, who is intelligent, lively, and quick-witted, and her tumultuous relationship with the proud, wealthy, and seemingly aloof Mr. Darcy. Their story unfolds as they navigate societal expectations, personal misunderstandings, and their own pride and prejudice.",
        "genres": [
            "fiction"
        ],
        "id": 62
    },
    {
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "description": "This classic novel follows the adventures of a man who, driven mad by reading too many chivalric romances, decides to become a knight-errant and roam the world righting wrongs under the name Don Quixote. Accompanied by his loyal squire, Sancho Panza, he battles windmills he believes to be giants and champions the virtuous lady Dulcinea, who is in reality a simple peasant girl. The book is a richly layered critique of the popular literature of Cervantes' time and a profound exploration of reality and illusion, madness and sanity.",
        "genres": [
            "fiction"
        ],
        "id": 63
    },
    {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "description": "Set in the backdrop of the Napoleonic era, the novel presents a panorama of Russian society and its descent into the chaos of war. It follows the interconnected lives of five aristocratic families, their struggles, romances, and personal journeys through the tumultuous period of history. The narrative explores themes of love, war, and the meaning of life, as it weaves together historical events with the personal stories of its characters.",
        "genres": [
            "fiction",
            "historical-fiction"
        ],
        "id": 64
    },
    {
        "title": "The Sound and the Fury",
        "author": "William Faulkner",
        "description": "The novel is a complex exploration of the tragic Compson family from the American South. Told from four distinct perspectives, the story unfolds through stream of consciousness narratives, each revealing their own understanding of the family's decline. The characters grapple with post-Civil War societal changes, personal loss, and their own mental instability. The narrative is marked by themes of time, innocence, and the burdens of the past.",
        "genres": [
            "fiction",
            "historical-fiction"
        ],
        "id": 65
    },
    {
        "title": "Madame Bovary",
        "author": "Gustave Flaubert",
        "description": "Madame Bovary is a tragic novel about a young woman, Emma Bovary, who is married to a dull, but kind-hearted doctor. Dissatisfied with her life, she embarks on a series of extramarital affairs and indulges in a luxurious lifestyle in an attempt to escape the banalities and emptiness of provincial life. Her desire for passion and excitement leads her down a path of financial ruin and despair, ultimately resulting in a tragic end.",
        "genres": [
            "fiction"
        ],
        "id": 66
    },
    {
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "description": "The book follows the Joad family, Oklahoma farmers displaced from their land during the Great Depression. The family, alongside thousands of other \"Okies,\" travel to California in search of work and a better life. Throughout their journey, they face numerous hardships and injustices, yet maintain their humanity through unity and shared sacrifice. The narrative explores themes of man's inhumanity to man, the dignity of wrath, and the power of family and friendship, offering a stark and moving portrayal of the harsh realities of American migrant laborers during the 1930s.",
        "genres": [
            "fiction",
            "historical-fiction"
        ],
        "id": 67
    },
    {
        "title": "The Odyssey",
        "author": "Homer",
        "description": "This epic poem follows the Greek hero Odysseus on his journey home after the fall of Troy. It takes Odysseus ten years to reach Ithaca after the ten-year Trojan War. Along the way, he encounters many obstacles including mythical creatures, divine beings, and natural disasters. Meanwhile, back in Ithaca, his wife Penelope and son Telemachus fend off suitors vying for Penelope's hand in marriage, believing Odysseus to be dead. The story concludes with Odysseus's return, his slaughter of the suitors, and his reunion with his family.",
        "genres": [
            "fiction"
        ],
        "id": 68
    },
    {
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "description": "The novel follows the life of Jane Eyre, an orphan who is mistreated by her relatives and sent to a charity school. As she grows up, Jane becomes a governess at Thornfield Hall, where she falls in love with the brooding and mysterious Mr. Rochester. However, she soon learns of a dark secret in his past that threatens their future together. The story is a profound exploration of a woman's self-discovery and her struggle for independence and love in a rigid Victorian society.",
        "genres": [
            "fiction"
        ],
        "id": 69
    },
    {
        "title": "Heart of Darkness",
        "author": "Joseph Conrad",
        "description": "This classic novel follows the journey of a seaman who travels up the Congo River into the African interior to meet a mysterious ivory trader. Throughout his journey, he encounters the harsh realities of imperialism, the brutal treatment of native Africans, and the depths of human cruelty and madness. The protagonist's journey into the 'heart of darkness' serves as both a physical exploration of the African continent and a metaphorical exploration into the depths of human nature.",
        "genres": [
            "fiction"
        ],
        "id": 70
    },
    {
        "title": "To the Lighthouse",
        "author": "Virginia Woolf",
        "description": "This novel is a pioneering work of modernist literature that explores the Ramsay family's experiences at their summer home on the Isle of Skye in Scotland. The narrative is divided into three sections, focusing on a day in the family's life, a description of the house during their absence, and their return after ten years. The book is known for its stream of consciousness narrative technique and its exploration of topics such as the passage of time, the nature of art, and the female experience.",
        "genres": [
            "fiction"
        ],
        "id": 71
    },
    {
        "title": "Middlemarch",
        "author": "George Eliot",
        "description": "Set in the fictitious English town of Middlemarch during the early 19th century, the novel explores the complex web of relationships in a close-knit society. It follows the lives of several characters, primarily Dorothea Brooke, a young woman of idealistic fervor, and Tertius Lydgate, an ambitious young doctor, who both grapple with societal expectations, personal desires, and moral dilemmas. Their stories intertwine with a rich tapestry of other townsfolk, reflecting themes of love, marriage, ambition, and reform, making a profound commentary on the human condition.",
        "genres": [
            "historical-fiction"
        ],
        "id": 72
    },
    {
        "title": "Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "description": "The novel follows the journey of a young boy named Huckleberry Finn and a runaway slave named Jim as they travel down the Mississippi River on a raft. Set in the American South before the Civil War, the story explores themes of friendship, freedom, and the hypocrisy of society. Through various adventures and encounters with a host of colorful characters, Huck grapples with his personal values, often clashing with the societal norms of the time.",
        "genres": [
            "historical-fiction"
        ],
        "id": 73
    },
    {
        "title": "The Magic Mountain",
        "author": "Thomas Mann",
        "description": "In this novel, the protagonist, a young, ordinary man, visits his cousin at a tuberculosis sanatorium in the Swiss Alps. Intending to stay for only a few weeks, he ends up remaining there for seven years, becoming a patient himself. The book explores his experiences and relationships with other patients and staff, delving into philosophical discussions on life, time, and the nature of disease. It also provides a vivid portrayal of the European society and intellectual life on the eve of World War I.",
        "genres": [
            "historical-fiction"
        ],
        "id": 74
    },
    {
        "title": "Midnight's Children",
        "author": "Salman Rushdie",
        "description": "The novel tells the story of Saleem Sinai, who was born at the exact moment when India gained its independence. As a result, he shares a mystical connection with other children born at the same time, all of whom possess unique, magical abilities. As Saleem grows up, his life mirrors the political and cultural changes happening in his country, from the partition of India and Pakistan, to the Bangladesh War of Independence. The story is a blend of historical fiction and magical realism, exploring themes of identity, fate, and the power of storytelling.",
        "genres": [
            "historical-fiction"
        ],
        "id": 75
    },
    {
        "title": "The Red and the Black",
        "author": "Stendhal",
        "description": "The novel is a detailed psychological portrait of Julien Sorel, a young man from a provincial background who aspires to rise above his humble beginnings. He uses his intelligence and hypocrisy to advance in the post-Napoleonic French society, which is deeply divided by class and political loyalties. The story is a critique of the society's materialism and hypocrisy as Julien's ambitions lead him to a tragic end. The title refers to the contrasting uniforms of the army and the church, the two routes available to him for upward mobility.",
        "genres": [
            "historical-fiction"
        ],
        "id": 76
    },
    {
        "title": "Things Fall Apart",
        "author": "Chinua Achebe",
        "description": "This novel explores the life of Okonkwo, a respected warrior in the Umuofia clan of the Igbo tribe in Nigeria during the late 1800s. Okonkwo's world is disrupted by the arrival of European missionaries and the subsequent clash of cultures. The story examines the effects of colonialism on African societies, the clash between tradition and change, and the struggle between individual and society. Despite his efforts to resist the changes, Okonkwo's life, like his society, falls apart.",
        "genres": [
            "historical-fiction"
        ],
        "id": 77
    },
    {
        "title": "Beloved",
        "author": "Toni Morrison",
        "description": "This novel tells the story of a former African-American slave woman who, after escaping to Ohio, is haunted by the ghost of her deceased daughter. The protagonist is forced to confront her repressed memories and the horrific realities of her past, including the desperate act she committed to protect her children from a life of slavery. The narrative is a poignant exploration of the physical, emotional, and psychological scars inflicted by the institution of slavery, and the struggle for identity and self-acceptance in its aftermath.",
        "genres": [
            "historical-fiction"
        ],
        "id": 78
    },
    {
        "title": "Absalom, Absalom!",
        "author": "William Faulkner",
        "description": "This novel is a complex narrative about Thomas Sutpen, a poor white man who rises to power in the South, aiming to create a dynasty that would rival the old aristocratic families. However, his ambitions are thwarted by his own flawed decisions and the overarching racial and societal tensions of the era. The story is not told in a linear fashion but rather through a series of interconnected flashbacks and narratives, offering different perspectives on the same events. The book explores themes of family, class, race, and the destructive power of obsession.",
        "genres": [
            "historical-fiction"
        ],
        "id": 79
    },
    {
        "title": "A Passage to India",
        "author": "E. M. Forster",
        "description": "The novel takes place in British-ruled India, where the cultural divide between the British and the Indians is explored. The story focuses on the experiences of an Indian Muslim, Dr. Aziz, and his interactions with an English woman, Miss Quested, and her elderly friend, Mrs. Moore. After an expedition to the Marabar Caves, Miss Quested accuses Dr. Aziz of assault, leading to a trial that deepens the racial tensions and prejudices between the colonizers and the colonized. The novel is a critique of British imperialism and a study of the cultural and racial misunderstandings and ill-will between the British and the Indian people.",
        "genres": [
            "historical-fiction"
        ],
        "id": 80
    },
    {
        "title": "Gone With the Wind",
        "author": "Margaret Mitchell",
        "description": "Set against the backdrop of the American Civil War and Reconstruction era, this novel follows the life of a young Southern belle, who is known for her beauty and charm. Her life takes a turn when she is forced to make drastic changes to survive the war and its aftermath. The story revolves around her struggle to maintain her family's plantation and her complicated love life, especially her unrequited love for a married man, and her tumultuous relationship with a roguish blockade runner.",
        "genres": [
            "historical-fiction"
        ],
        "id": 81
    },
    {
        "title": "The Good Soldier",
        "author": "Ford Madox Ford",
        "description": "\"The Good Soldier\" is a tragic tale of two seemingly perfect couples: an American couple and an English couple, who meet at a German spa and share a nine-year friendship. However, underneath the surface, their relationships are far from ideal, filled with infidelity, lies, and deceit. The story is narrated by the American husband, who is the last to realize the intricate web of affairs and betrayals amongst the group. The novel explores themes of love, passion, and the destruction that can result from suppressed emotions and societal pressures.",
        "genres": [
            "historical-fiction"
        ],
        "id": 82
    },
    {
        "title": "All Quiet on the Western Front",
        "author": "Erich Maria Remarque",
        "description": "The novel tells the story of a young German soldier, Paul Bäumer, and his experiences during World War I. The narrative explores the physical and emotional toll of war, the camaraderie between soldiers, and the disillusionment of a generation thrown into a brutal conflict. The protagonist and his friends grapple with survival, fear, and the loss of innocence, providing a stark and poignant critique of the futility and destructiveness of war.",
        "genres": [
            "historical-fiction"
        ],
        "id": 83
    },
    {
        "title": "The Age of Innocence",
        "author": "Edith Wharton",
        "description": "Set in the 1870s, the novel revolves around Newland Archer, a young lawyer from New York's high society, who is engaged to the beautiful and conventional May Welland. His life takes a turn when he meets May's cousin, the Countess Ellen Olenska, who has returned from Europe after leaving her scandalous husband. Torn between his duty and passion, Archer struggles with the constraints of the society he is a part of. The book offers a vivid portrayal of the struggle between individual desires and societal expectations in the upper-class New York society of the late 19th century.",
        "genres": [
            "historical-fiction"
        ],
        "id": 84
    },
    {
        "title": "The Leopard",
        "author": "Giuseppe Tomasi di Lampedusa",
        "description": "\"The Leopard\" is a historical novel set in 19th-century Sicily, during the time of the Italian unification or Risorgimento. It centers on an aging, aristocratic protagonist who is coming to terms with the decline of his class and the rise of a new social order. The narrative weaves together personal drama with the larger political and social upheaval of the time, providing a rich, nuanced portrait of a society in transition. Despite his resistance to change, the protagonist ultimately recognizes its inevitability and the futility of his efforts to preserve the old ways.",
        "genres": [
            "historical-fiction"
        ],
        "id": 85
    },
    {
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "description": "A young sailor, unjustly accused of treason, is imprisoned without trial in a grim fortress. After a daring escape, he uncovers a hidden treasure and transforms himself into the mysterious and wealthy Count of Monte Cristo. He then sets out to exact revenge on those who wronged him, using his newfound power and influence. Throughout his journey, he grapples with questions about justice, vengeance, and whether ultimate power can ultimately corrupt.",
        "genres": [
            "historical-fiction",
            "mystery",
            "thrillers"
        ],
        "id": 86
    },
    {
        "title": "The Scarlet Letter",
        "author": "Nathaniel Hawthorne",
        "description": "Set in 17th-century Puritan Boston, this novel tells the story of a woman who conceives a daughter through an affair and struggles to create a new life of repentance and dignity. She is forced to wear a scarlet \"A\" on her dress as a sign of her adultery while her lover, a revered local minister, remains unnamed and unpunished. Throughout the book, themes of sin, legalism, and guilt are explored.",
        "genres": [
            "historical-fiction"
        ],
        "id": 87
    },
    {
        "title": "The Tin Drum",
        "author": "Günter Grass",
        "description": "The novel tells the story of Oskar Matzerath, a boy who decides on his third birthday that he will stop growing and remain a three-year-old forever. Oskar is gifted with a tin drum by his mother, which he uses to express his emotions and thoughts. Living in Danzig during the rise of Nazi Germany, Oskar's refusal to grow is a form of protest against the adult world. The book is a blend of magical realism and historical fiction, providing a unique perspective on the horrors of World War II and the post-war era in Germany.",
        "genres": [
            "historical-fiction"
        ],
        "id": 88
    },
    {
        "title": "Buddenbrooks",
        "author": "Thomas Mann",
        "description": "\"Buddenbrooks\" is a novel that chronicles the decline of a wealthy north German merchant family over the course of four generations. The narrative focuses on the fluctuating fortunes and internal struggles of the family, reflecting the societal changes and economic decline of the period. The family's personal and business relationships, their moral values, and their struggle to maintain social status are all explored against the backdrop of the changing political and social landscape.",
        "genres": [
            "historical-fiction"
        ],
        "id": 89
    },
    {
        "title": "Dead Souls",
        "author": "Nikolai Gogol",
        "description": "In this satirical novel, a man travels through Russia buying up the titles to deceased serfs (or \"souls\") from their naive landowners, under the guise of a get-rich-quick scheme. However, his real plan is to use these \"dead souls\" to create a phantom estate and secure a massive loan. The story explores the corruption and greed prevalent in 19th-century Russian society and provides a unique perspective on the human condition.",
        "genres": [
            "historical-fiction"
        ],
        "id": 90
    },
    {
        "title": "Vanity Fair",
        "author": "William Makepeace Thackeray",
        "description": "This classic novel follows the lives of two contrasting women, the cunning and ruthless Becky Sharp and the sweet and naive Amelia Sedley, against the backdrop of English society during the Napoleonic Wars. The book is a satirical exploration of the obsession with wealth, status, and social climbing, and the moral bankruptcy that can result from such pursuits. The narrative weaves an intricate tale of love, betrayal, and redemption, exposing the vanity and hypocrisy of high society.",
        "genres": [
            "historical-fiction"
        ],
        "id": 91
    },
    {
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "description": "This classic novel tells the story of a young scientist who creates a grotesque but sentient creature in an unorthodox scientific experiment. The scientist, horrified by his creation, abandons it, leading the creature to seek revenge. The novel explores themes of ambition, responsibility, guilt, and the potential consequences of playing God.",
        "genres": [
            "horror"
        ],
        "id": 92
    },
    {
        "title": "Dracula",
        "author": "Bram Stoker",
        "description": "This classic horror novel tells the story of Count Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and a small group of people led by Professor Abraham Van Helsing. The narrative is composed of journal entries, letters, and telegrams written by the novel's protagonists, providing different perspectives on the gruesome events unfolding. The book touches on themes of sexuality, gender roles, and the clash of modern science with traditional superstition.",
        "genres": [
            "horror",
            "mystery",
            "thrillers"
        ],
        "id": 93
    },
    {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "description": "The novel follows the life of a handsome young man who, after having his portrait painted, is upset to realize that the painting will remain beautiful while he ages. After expressing a wish that the painting would age instead of him, he is shocked to find that his wish comes true. As he indulges in a life of hedonism and immoral acts, his portrait becomes increasingly grotesque, reflecting the damage his actions have on his soul. The story serves as a cautionary tale about the dangers of vanity, selfishness, and the pursuit of pleasure without regard for consequences.",
        "genres": [
            "horror"
        ],
        "id": 94
    },
    {
        "title": "Macbeth",
        "author": "William Shakespeare",
        "description": "This classic play follows the tragic tale of Macbeth, a Scottish general whose ambition is sparked by a prophecy from three witches that he will one day become King of Scotland. Consumed by ambition and spurred on by his wife, Macbeth murders King Duncan and takes the throne. However, guilt and paranoia plague him, leading to a reign of terror and further bloodshed. His desperate attempts to cling onto power lead to his downfall, illustrating the destructive power of unchecked ambition.",
        "genres": [
            "horror"
        ],
        "id": 95
    },
    {
        "title": "The Turn of the Screw",
        "author": "Henry James",
        "description": "A young governess is hired to care for two children at a remote English estate. However, she soon becomes convinced that the grounds are haunted by two former employees who have taken control of the children. As she fights to free the children from these apparitions, the line between reality and her own fears becomes increasingly blurred, leading to a chilling and ambiguous conclusion.",
        "genres": [
            "horror",
            "mystery"
        ],
        "id": 96
    },
    {
        "title": "The Haunting of Hill House",
        "author": "Shirley Jackson",
        "description": "The book is a chilling tale that revolves around a group of four individuals who decide to stay in a notoriously haunted mansion to conduct a paranormal investigation. The main character, a shy, reclusive woman with a troubled past, becomes increasingly unstable as she experiences terrifying phenomena and becomes obsessed with the house. As the supernatural events escalate, the lines between reality and imagination blur, leading to a shocking and tragic conclusion.",
        "genres": [
            "horror"
        ],
        "id": 97
    },
    {
        "title": "The Stand",
        "author": "Stephen King",
        "description": "This post-apocalyptic horror/fantasy novel presents a world devastated by a deadly plague, killing 99% of the population. The survivors, drawn together by dreams of a charismatic and benevolent figure, gather in Boulder, Colorado to form a new society. However, a malevolent figure also emerges, attracting a following of his own and setting the stage for a classic battle between good and evil. The story delves into themes of community, morality, and the capacity for both destruction and regeneration within humanity.",
        "genres": [
            "horror",
            "thrillers"
        ],
        "id": 98
    },
    {
        "title": "The Shining",
        "author": "Stephen King",
        "description": "A recovering alcoholic accepts a job as a winter caretaker at a remote Colorado hotel, hoping the isolation will help him reconnect with his wife and young son, and work on his writing. However, the hotel has a dark history and a powerful malevolent presence that influences him into violence, while his psychic son sees horrific forebodings from both past and future. As the winter weather leaves them snowbound, the father's sanity deteriorates, leading to a terrifying climax.",
        "genres": [
            "horror",
            "thrillers"
        ],
        "id": 99
    },
    {
        "title": "The Private Memoirs and Confessions of a Justified Sinner",
        "author": "James Hogg",
        "description": "Set in 18th century Scotland, the novel explores the psychological downfall of a deeply religious man who believes he is predestined for salvation and thus justified in committing a series of murders. He is driven to this path of self-destruction by a mysterious stranger who may be either a devilish tempter or a manifestation of his own deranged mind. The book serves as a critique of religious fanaticism and a chilling exploration of the dark side of human nature.",
        "genres": [
            "horror"
        ],
        "id": 100
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "author": "Robert Louis Stevenson",
        "description": "This classic novel explores the duality of human nature through the story of a respected London doctor who creates a potion that transforms him into a sinister, violent alter ego. As the doctor increasingly loses control over when the transformations occur, his alter ego's evil deeds escalate, causing havoc in the community. The narrative is a chilling exploration of humanity's capacity for evil and the struggle for individuals to reconcile their public personas with their private desires.",
        "genres": [
            "horror"
        ],
        "id": 101
    },
    {
        "title": "Melmoth the Wanderer",
        "author": "Charles Robert Maturin",
        "description": "\"Melmoth the Wanderer\" is a gothic novel that tells the story of John Melmoth, a man who sells his soul to the devil for 150 extra years of life, and spends that time wandering the earth in search of someone who will take over the pact for him. The narrative is a complex series of nested stories, told by many different characters, and it explores themes of guilt, redemption, and the inherent evil of mankind.",
        "genres": [
            "horror"
        ],
        "id": 102
    },
    {
        "title": "The Silence of the Lambs",
        "author": "Thomas Harris",
        "description": "In this gripping psychological thriller, a young FBI trainee is enlisted to interview an incarcerated and manipulative cannibalistic serial killer to gain insight into the mind of another active serial murderer. The trainee must navigate a complex game of cat and mouse, using her own wits and the killer's insights to understand and anticipate the criminal's moves before he strikes again. As she delves deeper into the investigation, she confronts not only the horrors of the criminal mind but also the darkness within her own past, leading to a tense and chilling confrontation.",
        "genres": [
            "horror",
            "thrillers"
        ],
        "id": 103
    },
    {
        "title": "American Psycho",
        "author": "Bret Easton Ellis",
        "description": "The novel is a disturbing and graphic exploration of the mind of a wealthy, young and handsome Wall Street investment banker who is also a psychopathic serial killer. He leads a double life, appearing to be a charming and sophisticated businessman by day, while indulging in horrific acts of violence and murder by night. The narrative provides a satirical critique of 1980s American consumer culture, vanity, and excess, while also delving into the dark underbelly of human nature.",
        "genres": [
            "horror"
        ],
        "id": 104
    },
    {
        "title": "I Am Legend",
        "author": "Richard Matheson",
        "description": "The novel is a post-apocalyptic horror story that centers around a solitary man who may be the last human alive on earth after a pandemic has turned the rest of humanity into vampire-like creatures. He spends his days fortifying his home, hunting for food, and killing these creatures while they sleep. At night, he is tormented by their attempts to break into his home and kill him. His isolation drives him to the brink of insanity, and the novel explores themes of loneliness, survival, and the human capacity for hope in the face of utter despair.",
        "genres": [
            "horror"
        ],
        "id": 105
    },
    {
        "title": "The Castle of Otranto",
        "author": "Horace Walpole",
        "description": "\"The Castle of Otranto: A Gothic Story\" is a novel set in a medieval Italian castle and is considered the first gothic novel. The story revolves around the tyrannical Prince Manfred, who is determined to secure his family's reign in Otranto, despite the fact that his sickly son is killed by a giant helmet on his wedding day. The novel is filled with supernatural elements, including moving portraits, a bleeding statue, and a ghostly knight, as Manfred desperately tries to marry his late son's bride, leading to a series of tragic events. The novel is known for its exploration of the conflict between medieval and renaissance values, and its influence on the gothic literature genre.",
        "genres": [
            "horror"
        ],
        "id": 106
    },
    {
        "title": "The Monk",
        "author": "Matthew Lewis",
        "description": "\"The Monk\" is a gothic novel that explores the tragic downfall of a virtuous and respected monk who succumbs to temptation and sin. The protagonist is lured into a world of lust, greed, and pride by a woman who is actually Satan in disguise. His moral decay leads to a series of horrific events including murder, incest, and witchcraft. The novel serves as a cautionary tale about the dangers of excessive pride and the destructive power of unchecked desire.",
        "genres": [
            "horror"
        ],
        "id": 107
    },
    {
        "title": "Uncle Silas",
        "author": "Sheridan Le Fanu",
        "description": "\"Uncle Silas\" is a classic Gothic novel set in Victorian England that follows the story of a young, naive heiress who is left in the care of her mysterious and seemingly sinister Uncle Silas after her father's death. As she navigates her new life in his decrepit mansion, she uncovers dark family secrets, and begins to suspect her uncle may have ulterior motives. The novel explores themes of innocence, corruption, and the nature of evil, all set against the backdrop of a suspenseful and eerie atmosphere.",
        "genres": [
            "horror"
        ],
        "id": 108
    },
    {
        "title": "We Have Always Lived in the Castle",
        "author": "Shirley Jackson",
        "description": "This novel tells the story of the Blackwood sisters, Merricat and Constance, who live in isolation in their family mansion, following the mysterious death of their parents due to arsenic poisoning. The sisters' lives are disrupted when their estranged cousin, Charles, arrives with intentions of stealing their fortune. The story is a chilling exploration of family secrets, mental illness, and the destructive power of mob mentality.",
        "genres": [
            "horror"
        ],
        "id": 109
    },
    {
        "title": "At the Mountains of Madness",
        "author": "H. P. Lovecraft",
        "description": "In this chilling tale, an Antarctic expedition led by Dr. William Dyer from Miskatonic University uncovers ancient, alien ruins and a dangerous secret that forces them to question their understanding of the universe and their own sanity. As they delve deeper into the mystery, they encounter remnants of a prehistoric, monstrous civilization, which they believe could have been the original creators of life on Earth. The story is filled with Lovecraft's signature cosmic horror and themes of forbidden knowledge, non-human influences on humanity, and the insignificance of humans in the universe.",
        "genres": [
            "horror"
        ],
        "id": 110
    },
    {
        "title": "The Outsider And Others",
        "author": "H. P. Lovecraft",
        "description": "\"The Outsider And Others\" is a collection of chilling and macabre tales by H. P. Lovecraft. This anthology takes readers on a journey through the author's unique and unsettling imagination, exploring themes of cosmic horror, ancient gods, and the fragility of the human mind. With its atmospheric prose and nightmarish scenarios, this collection is a must-read for fans of Lovecraft's dark and haunting storytelling.",
        "genres": [
            "horror"
        ],
        "id": 111
    },
    {
        "title": "Rosemary's Baby",
        "author": "Ira Levin",
        "description": "The book revolves around a young couple, Rosemary and Guy Woodhouse, who move into an old New York City apartment building with a sinister reputation. Eager to start a family, Rosemary becomes pregnant under mysterious circumstances. As she becomes increasingly isolated and ill, she discovers that her husband and their eccentric neighbors have malevolent plans for her unborn child, which are tied to a diabolical pact with supernatural forces. Her paranoia and fear escalate as she uncovers the truth about a conspiracy that involves the birth of the Antichrist, leading to a chilling realization about the fate of her baby.",
        "genres": [
            "horror"
        ],
        "id": 112
    },
    {
        "title": "The Blind Owl",
        "author": "Ṣādiq Hidāyat",
        "description": "\"The Blind Owl\" is a haunting narrative that delves into the psyche of a tormented artist who is grappling with love, loss, and existential dread. The protagonist is a reclusive painter of pen cases who is haunted by the image of a mysterious woman, leading him down a spiral of obsession and madness. The story unfolds in a dreamlike narrative, blurring the lines between reality and illusion, and is steeped in Persian mysticism and symbolism. The novel explores themes of alienation, death, and the fragility of the human condition.",
        "genres": [
            "horror"
        ],
        "id": 113
    },
    {
        "title": "Bleak House",
        "author": "Charles Dickens",
        "description": "\"Bleak House\" is a complex narrative that critiques the British judiciary system through a long-running legal case known as Jarndyce and Jarndyce. The story follows the lives of numerous characters, including the kind-hearted Esther Summerson, her friends Richard and Ada, and their guardian, Mr. Jarndyce, who are all caught in the web of a legal dispute over an inheritance. The novel is known for its detailed depiction of the legal system, its vivid characters, and its exploration of social issues of the time.",
        "genres": [
            "mystery"
        ],
        "id": 114
    },
    {
        "title": "The Secret History",
        "author": "Donna Tartt",
        "description": "A group of six classics students at a small, elite Vermont college, led by a charismatic professor, become entranced by the study of Greek culture and decide to recreate a Dionysian ritual, which ends in a tragic accident. The group, bound by their shared secret, begins to unravel as paranoia and guilt take hold. The novel explores themes of beauty and terror, the allure of the esoteric, and the destructive consequences of obsession.",
        "genres": [
            "mystery",
            "thrillers"
        ],
        "id": 115
    },
    {
        "title": "The Murder of Roger Ackroyd",
        "author": "Agatha Christie",
        "description": "In a small English village, a wealthy man named Roger Ackroyd is found dead, stabbed with a dagger. The victim's friend, a retired detective, comes out of retirement to solve the murder. The detective uncovers a web of deceit, blackmail, and hidden relationships among the victim's family and employees. The shocking twist ending reveals the unlikely murderer and the ingenious method used to commit the crime.",
        "genres": [
            "mystery",
            "thrillers"
        ],
        "id": 116
    },
    {
        "title": "Never Let Me Go",
        "author": "Kazuo Ishiguro",
        "description": "The novel is a haunting tale of three friends, who grow up together at a seemingly idyllic English boarding school. As they mature, they discover a dark secret about their school and the purpose of their existence, which is to become organ donors for the rest of society. The story is a profound exploration of what it means to be human, the morality of scientific innovation, and the heartbreaking reality of love and loss.",
        "genres": [
            "mystery"
        ],
        "id": 117
    },
    {
        "title": "The Wind-Up Bird Chronicle",
        "author": "Haruki Murakami",
        "description": "A man's search for his wife's missing cat evolves into a surreal journey through Tokyo's underbelly, where he encounters a bizarre collection of characters with strange stories and peculiar obsessions. As he delves deeper, he finds himself entangled in a web of dreamlike scenarios, historical digressions, and metaphysical investigations. His reality becomes increasingly intertwined with the dream world as he grapples with themes of fate, identity, and the dark side of the human psyche.",
        "genres": [
            "mystery"
        ],
        "id": 118
    },
    {
        "title": "The Diary of a Young Girl",
        "author": "Anne Frank",
        "description": "This book is a real-life account of a young Jewish girl hiding from the Nazis during World War II, written in diary format. The girl and her family are forced to live in a secret annex in Amsterdam for two years, during which she writes about her experiences, fears, dreams, and the onset of adolescence. The diary provides a poignant and deeply personal insight into the horrors of the Holocaust, making it a powerful testament to the human spirit.",
        "genres": [
            "nonfiction"
        ],
        "id": 119
    },
    {
        "title": "Silent Spring",
        "author": "Rachel Carson",
        "description": "This influential environmental science book presents a detailed and passionate argument against the overuse of pesticides in the mid-20th century. The author meticulously describes the harmful effects of these chemicals on the environment, particularly on birds, hence the metaphor of a 'silent spring' without bird song. The book played a significant role in advancing the global environmental movement and led to a nationwide ban on DDT and other pesticides in the United States.",
        "genres": [
            "nonfiction"
        ],
        "id": 120
    },
    {
        "title": "Essays",
        "author": "Michel de Montaigne",
        "description": "This collection of essays explores a wide range of topics such as solitude, cannibals, the power of the imagination, the education of children, and the nature of friendship. The author employs a unique and personal approach to philosophy, using anecdotes and personal reflections to illustrate his points. The essays provide a profound insight into human nature and condition, and are considered a significant contribution to both literature and philosophy.",
        "genres": [
            "nonfiction"
        ],
        "id": 121
    },
    {
        "title": "The Second Sex",
        "author": "Simone de Beauvoir",
        "description": "This influential work explores the treatment and perception of women throughout history, arguing that women have been repressed and defined only in relation to men. The author presents a detailed analysis of women's roles in society, family, work, and in the creation of their own identities. She discusses the concept of 'the other' and how this has been used to suppress women, while also examining the biological, psychological, and societal impacts of this oppression. The book is a seminal text in feminist theory, challenging traditional notions of femininity and calling for equality and freedom for women.",
        "genres": [
            "nonfiction"
        ],
        "id": 122
    },
    {
        "title": "Walden",
        "author": "Henry David Thoreau",
        "description": "This work is a reflection upon simple living in natural surroundings, inspired by the author's two-year experience of living in a cabin near a woodland pond. Filled with philosophical insights, observations on nature, and declarations of independence from societal expectations, the book is a critique of the complexities of modern civilization and a call to appreciate the beauty and simplicity of the natural world. It explores themes such as self-reliance, solitude, and the individual's relationship with nature.",
        "genres": [
            "nonfiction"
        ],
        "id": 123
    },
    {
        "title": "The Prince",
        "author": "Niccolo Machiavelli",
        "description": "This classic work of political philosophy provides a pragmatic guide on political leadership and power, arguing that leaders must do whatever necessary to maintain authority and protect their states, even if it means compromising morality and ethics. The book explores various types of principalities, military affairs, the conduct of great leaders, and the virtues a prince should possess. It is known for its controversial thesis, which suggests that the ends justify the means in politics.",
        "genres": [
            "nonfiction"
        ],
        "id": 124
    },
    {
        "title": "The Interpretation of Dreams",
        "author": "Sigmund Freud",
        "description": "This groundbreaking work explores the theory that dreams are a reflection of the unconscious mind and a means of understanding our deepest desires, anxieties, and fantasies. The book delves into the symbolism of dreams and their connection to repressed thoughts and experiences, proposing that they are a form of wish fulfillment. The author also introduces the concept of \"dream work,\" which transforms these unconscious thoughts into the content of dreams, and discusses various methods of dream interpretation.",
        "genres": [
            "nonfiction"
        ],
        "id": 125
    },
    {
        "title": "On the Origin of Species",
        "author": "Charles Darwin",
        "description": "This groundbreaking work presents the theory of evolution, asserting that species evolve over generations through a process of natural selection. The book provides a comprehensive explanation of how the diversity of life on Earth developed over millions of years from a common ancestry. It includes detailed observations and arguments to support the idea that species evolve by adapting to their environments, challenging the prevailing belief of the time that species were unchanging parts of a designed hierarchy.",
        "genres": [
            "nonfiction"
        ],
        "id": 126
    },
    {
        "title": "A Room of One's Own",
        "author": "Virginia Woolf",
        "description": "This book is an extended essay that explores the topic of women in fiction, and the societal and economic hindrances that prevent them from achieving their full potential. The author uses a fictional narrator and narrative to explore the many difficulties that women writers faced throughout history, including the lack of education available to them and the societal expectations that limited their opportunities. The central argument is that a woman must have money and a room of her own if she is to write fiction.",
        "genres": [
            "nonfiction"
        ],
        "id": 127
    },
    {
        "title": "The Autobiography of Malcolm X",
        "author": "Alex Haley",
        "description": "This book is an autobiography narrating the life of a renowned African-American activist. It delves into his transformation from a young man involved in criminal activities to becoming one of the most influential voices in the fight against racial inequality in America. The book provides a deep insight into his philosophies, his time in prison, conversion to Islam, his role in the Nation of Islam, his pilgrimage to Mecca, and his eventual split from the Nation. It also addresses his assassination, making it a powerful account of resilience, redemption, and personal growth.",
        "genres": [
            "nonfiction"
        ],
        "id": 128
    },
    {
        "title": "Communist Manifesto",
        "author": "Karl Marx",
        "description": "This influential political pamphlet advocates for the abolition of private property, the rights of the proletariat, and the eventual establishment of a classless society. The authors argue that all of history is a record of class struggle, culminating in the conflict between the bourgeoisie, who control the means of production, and the proletariat, who provide the labor. They predict that this struggle will result in a revolution, leading to a society where property and wealth are communally controlled.",
        "genres": [
            "nonfiction"
        ],
        "id": 129
    },
    {
        "title": "Confessions",
        "author": "Augustine",
        "description": "\"Confessions\" is an autobiographical work by a renowned theologian, in which he outlines his sinful youth and his conversion to Christianity. It is written in the form of a long, introspective prayer directed to God, exploring the author's spiritual journey and deep philosophical ponderings. The book is renowned for its eloquent and deeply personal exploration of faith, making it a cornerstone of Christian theology and Western literature.",
        "genres": [
            "nonfiction"
        ],
        "id": 130
    },
    {
        "title": "The Double Helix",
        "author": "James D. Watson",
        "description": "This book is a personal account of the race to discover the structure of DNA, told from the perspective of one of the co-discoverers. It provides an insider's view of scientific research, the collaboration and competition, the dedication, the doubt, the exhilaration of discovery, and the often fraught relationship between science and the rest of life. The book also explores the personalities, quirks, and conflicts of the scientists involved in the groundbreaking discovery.",
        "genres": [
            "nonfiction"
        ],
        "id": 131
    },
    {
        "title": "Out of Africa",
        "author": "Isak Dinesen",
        "description": "The book is a memoir that recounts the author's experiences and observations living in Kenya, then British East Africa, from 1914 to 1931. It is a lyrical meditation on her life amongst the diverse cultures and wildlife of Africa. The author shares her trials and tribulations of running a coffee plantation, her deep respect for the people and land of Africa, and her intimate understanding of the subtle nuances of African culture and society.",
        "genres": [
            "nonfiction"
        ],
        "id": 132
    },
    {
        "title": "The Gulag Archipelago",
        "author": "Aleksandr Solzhenitsyn",
        "description": "\"The Gulag Archipelago\" is a comprehensive and stark account of the Soviet Union's forced labor camp system. The narrative, based on the author's own experiences as a prisoner and on extensive research, documents the history, operation, and life inside the Gulag system. It also provides a critical examination of the regime's legal system, police operations, and political leadership. The book is an intense indictment of the Soviet Union's totalitarian regime, revealing its brutality, inhumanity, and vast scale of its prison camp network.",
        "genres": [
            "nonfiction"
        ],
        "id": 133
    },
    {
        "title": "If This Is a Man",
        "author": "Primo Levi",
        "description": "This book is a deeply moving and insightful memoir of a survivor of Auschwitz, a Nazi concentration camp during World War II. The author, an Italian Jew, provides a detailed account of his life in the camp, the brutal conditions, the dehumanization, and the struggle for survival. The narrative is a profound exploration of the human spirit, resilience, and the will to live, despite unimaginable horror and suffering. It also raises profound questions about humanity, morality, and the capacity for evil.",
        "genres": [
            "nonfiction"
        ],
        "id": 134
    },
    {
        "title": "Democracy in America",
        "author": "Alexis de Tocqueville",
        "description": "This influential book offers an in-depth analysis of the strengths and weaknesses of 19th century American democracy. The author, a French political thinker, provides a detailed examination of the democratic process and its impact on society, politics, and the economy. The work highlights the importance of civil society, local institutions, and the spirit of equality in ensuring the stability of democracy. It also delves into the dangers of majority tyranny, the potential for democratic despotism, and the critical role of religion and morality in sustaining a democratic nation.",
        "genres": [
            "nonfiction"
        ],
        "id": 135
    },
    {
        "title": "The Republic",
        "author": "Plato",
        "description": "\"The Republic\" is a philosophical text that explores the concepts of justice, order, and character within the context of a just city-state and a just individual. It presents the idea of a utopian society ruled by philosopher-kings, who are the most wise and just. The dialogue also delves into theories of education, the nature of reality, and the role of the philosopher in society. It is a fundamental work in Western philosophy and political theory.",
        "genres": [
            "nonfiction"
        ],
        "id": 136
    },
    {
        "title": "Fear and Loathing in Las Vegas",
        "author": "Hunter S. Thompson",
        "description": "This book is a semi-autobiographical novel that chronicles the adventures of a journalist and his attorney as they embark on a drug-fueled trip to Las Vegas. The narrative is a wild and hallucinatory exploration of the American Dream, filled with biting social commentary and outrageous antics. The protagonist's quest for the American Dream quickly devolves into an exploration of the darker side of human nature, highlighting the excesses and depravities of 1960s American society.",
        "genres": [
            "nonfiction"
        ],
        "id": 137
    },
    {
        "title": "The Structure of Scientific Revolutions",
        "author": "Thomas Kuhn",
        "description": "This influential book examines the history of science, focusing on the process of scientific revolutions. The author argues that scientific progress is not a linear, continuous accumulation of knowledge, but rather a series of peaceful interludes punctuated by intellectually violent revolutions. During these revolutions, known as paradigm shifts, the old scientific worldview is replaced by a new one. The book also popularized the term 'paradigm shift' and challenged the previously accepted view of science as a steadily progressive discipline.",
        "genres": [
            "nonfiction"
        ],
        "id": 138
    },
    {
        "title": "The Life of Samuel Johnson",
        "author": "James Boswell",
        "description": "\"The Life of Samuel Johnson\" is a comprehensive biography that chronicles the life of one of the most prominent English literary figures of the 18th century. The book provides an in-depth account of Samuel Johnson's life, his literary works, and his significant contribution to English literature. It also offers a detailed portrait of his personality, his relationships, his struggles with depression and illness, and his views on a variety of subjects. The book is as much a biography of Johnson as it is a portrayal of 18th-century England.",
        "genres": [
            "nonfiction"
        ],
        "id": 139
    },
    {
        "title": "The Confessions of Jean-Jacques Rousseau",
        "author": "Jean-Jacques Rousseau",
        "description": "\"The Confessions of Jean-Jacques Rousseau\" is an autobiographical work by a prominent philosopher of the Enlightenment era, who candidly shares his life story, from his humble beginnings in Geneva to his later years in exile. The book delves into his personal struggles, his intellectual journey, and his relationships, all while exploring his philosophical ideas on education, politics, and morality. The author's introspective narrative provides a unique perspective on his life and times, making it a seminal work in the history of autobiography.",
        "genres": [
            "nonfiction"
        ],
        "id": 140
    },
    {
        "title": "Thus Spake Zarathustra",
        "author": "Friedrich Nietzsche",
        "description": "This philosophical novel explores the idea of the Übermensch, or \"Overman,\" a superior human being who has achieved self-mastery and created personal meaning in life. The protagonist, Zarathustra, descends from his solitary life in the mountains to share his wisdom with humanity. Through a series of speeches and encounters, he challenges traditional beliefs about good, evil, truth, and religion, and advocates for the transcendence of man into a higher form of existence. The book is noted for its critique of morality, its poetic and often cryptic language, and its exploration of complex philosophical concepts.",
        "genres": [
            "nonfiction"
        ],
        "id": 141
    },
    {
        "title": "Let Us Now Praise Famous Men",
        "author": "James Agee",
        "description": "This book is an in-depth examination of the lives of three tenant families in the South during the Great Depression. The author combines detailed descriptions, journalistic reporting, and poetic prose to capture the harsh realities of poverty, racial discrimination, and the struggle for survival. The book also includes evocative photographs that further illustrate the living conditions and daily lives of the families. The work is a profound exploration of the human condition, offering a raw and unflinching look at the effects of economic and social injustice.",
        "genres": [
            "nonfiction"
        ],
        "id": 142
    },
    {
        "title": "2666",
        "author": "Roberto Bolaño",
        "description": "The novel is a sprawling, ambitious work that spans continents and time periods, centering around an elusive, reclusive German author. It intertwines five different narratives: a group of European academics searching for the author, a professor in Mexico dealing with his own personal crises, a New York reporter sent to cover a boxing match in Mexico, an African-American journalist in Detroit, and the horrifying and unsolved murders of hundreds of women in a Mexican border town. The narratives are linked by themes of violence, mystery, and the search for meaning in a chaotic world.",
        "genres": [
            "thrillers"
        ],
        "id": 143
    },
    {
        "title": "The Daughter of Time",
        "author": "Josephine Tey",
        "description": "A detective, laid up in the hospital, becomes fascinated with a portrait of Richard III, the historical figure accused of murdering his nephews to secure his throne. He decides to apply his investigative skills to delve into the mystery, using historical documents and records as his clues. As he pieces together the puzzle, he begins to question the accepted narrative of Richard as a villain, suggesting that this image was a fabrication by the Tudors to legitimize their own claim to the throne.",
        "genres": [
            "thrillers"
        ],
        "id": 144
    },
    {
        "title": "The Quiet American",
        "author": "Graham Greene",
        "description": "Set during the French colonial war in Vietnam, this novel follows a British journalist and a young American idealist who become friends and find themselves in a love triangle with a Vietnamese woman. As the war escalates, the journalist becomes disillusioned with the American's naïve political views and the destructive impact of foreign intervention. The story is a critique of American involvement in Vietnam, exploring themes of love, friendship, and moral ambiguity.",
        "genres": [
            "thrillers"
        ],
        "id": 145
    },
    {
        "title": "The Postman Always Rings Twice",
        "author": "James M. Cain",
        "description": "This novel is a thrilling tale of passion, murder, and betrayal. The story revolves around a drifter who becomes involved in an adulterous affair with a married woman. Together, they plot to kill her older husband for the insurance money. However, their plan spirals out of control, leading to unexpected consequences and a shocking conclusion. The narrative explores themes of lust, greed, and the destructive power of obsession.",
        "genres": [
            "thrillers"
        ],
        "id": 146
    },
    {
        "title": "Casino Royale",
        "author": "Ian Fleming",
        "description": "A British secret agent is tasked with bankrupting a French communist and paymaster of a Russian secret agency at a high-stakes card game in a casino. As he navigates the dangerous world of espionage, he encounters a beautiful woman who is being blackmailed by the enemy. The agent must outwit his opponents and survive numerous attempts on his life, all while grappling with his growing feelings for the woman.",
        "genres": [
            "thrillers"
        ],
        "id": 147
    }
]

function getBookList() {
    return bookList;
}
