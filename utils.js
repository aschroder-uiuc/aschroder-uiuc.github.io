const bookList = [
    {
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "description": "A young, impoverished former student in Saint Petersburg, Russia, formulates a plan to kill an unscrupulous pawnbroker to redistribute her wealth among the needy. However, after carrying out the act, he is consumed by guilt and paranoia, leading to a psychological battle within himself. As he grapples with his actions, he also navigates complex relationships with a variety of characters, including a virtuous prostitute, his sister, and a relentless detective. The narrative explores themes of morality, redemption, and the psychological impacts of crime.",
        "id": 1,
        "genre": [
            "crime",
            "fiction",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "religion"
        ]
    },
    {
        "title": "The Stranger",
        "author": "Albert Camus",
        "description": "The narrative follows a man who, after the death of his mother, falls into a routine of indifference and emotional detachment, leading him to commit an act of violence on a sun-drenched beach. His subsequent trial becomes less about the act itself and more about his inability to conform to societal norms and expectations, ultimately exploring themes of existentialism, absurdism, and the human condition.",
        "id": 2,
        "genre": [
            "crime",
            "fiction"
        ],
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "description": "This classic novel explores the complex, passionate, and troubled relationship between four brothers and their father in 19th century Russia. The narrative delves into the themes of faith, doubt, morality, and redemption, as each brother grapples with personal dilemmas and family conflicts. The story culminates in a dramatic trial following a murder, which serves as a microcosm of the moral and philosophical struggles faced by each character, and by extension, humanity itself.",
        "id": 3,
        "genre": [
            "crime",
            "fiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "love",
            "religion"
        ]
    },
    {
        "title": "Great Expectations",
        "author": "Charles Dickens",
        "description": "A young orphan boy, living with his cruel older sister and her kind blacksmith husband, has an encounter with an escaped convict that changes his life. Later, he becomes the protégé of a wealthy but reclusive woman and falls in love with her adopted daughter. He then learns that an anonymous benefactor has left him a fortune, leading him to believe that his benefactor is the reclusive woman and that she intends for him to marry her adopted daughter. He moves to London to become a gentleman, but his great expectations are ultimately shattered when he learns the true identity of his benefactor and the reality of his love interest.",
        "id": 4,
        "genre": [
            "crime"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "love",
            "relationships"
        ]
    },
    {
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "description": "Set in early 19th-century France, the narrative follows the lives and interactions of several characters, particularly the struggles of ex-convict Jean Valjean and his journey towards redemption. The story touches upon the nature of law and grace, and elaborates upon the history of France, architecture of Paris, politics, moral philosophy, antimonarchism, justice, religion, and the types and nature of romantic and familial love. It is known for its vivid and relatable characters, and its exploration of societal and moral issues.",
        "id": 5,
        "genre": [
            "crime",
            "historical-fiction"
        ],
        "setting": [
            "france"
        ],
        "subject": [
            "love"
        ]
    },
    {
        "title": "In Cold Blood",
        "author": "Truman Capote",
        "description": "This true crime novel tells the story of the brutal 1959 murder of a wealthy farmer, his wife and two of their children in Holcomb, Kansas. The narrative follows the investigation led by the Kansas Bureau of Investigation that ultimately leads to the capture, trial, and execution of the killers. The book explores the circumstances surrounding this horrific crime and the effects it had on the community and the people involved.",
        "id": 6,
        "genre": [
            "crime",
            "mystery",
            "nonfiction",
            "thrillers"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Rebecca",
        "author": "Daphne du Maurier",
        "description": "A young woman marries a wealthy widower and moves into his large English country house. She quickly realizes that the memory of her husband's first wife, Rebecca, haunts every corner of the estate. The housekeeper's obsessive devotion to Rebecca and the mysterious circumstances of her death continue to overshadow the second wife's attempts to make a happy life with her husband. As secrets about Rebecca's life and death are revealed, the new wife must grapple with her own identity and place within the household.",
        "id": 7,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "subject": [
            "love"
        ]
    },
    {
        "title": "Native Son",
        "author": "Richard Wright",
        "description": "This novel tells the story of Bigger Thomas, a young African-American man living in Chicago's South Side during the 1930s. Bigger's life takes a tragic turn when he accidentally kills a young white woman. The incident leads to his arrest and trial, revealing the deep-seated racial prejudices and injustices prevalent in American society at the time. The narrative explores themes of poverty, systemic racism, fear, and the effects of oppression.",
        "id": 8,
        "genre": [
            "crime"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "The Long Goodbye",
        "author": "Raymond Chandler",
        "description": "This novel follows the story of a hard-boiled detective in Los Angeles who becomes embroiled in a complex case when he befriends a drunk named Terry Lennox. After Lennox's wife is found dead, Lennox disappears to Mexico and the detective is left to unravel the mystery. The detective then takes on another case of a missing husband, which becomes intertwined with the Lennox case, leading to a web of deceit, corruption, and murder. The detective's pursuit of the truth leads him through a gritty and corrupt world, testing his resolve and morality.",
        "id": 9,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ]
    },
    {
        "title": "The Complete Tales and Poems of Edgar Allan Poe",
        "author": "Edgar Allan Poe",
        "description": "This collection brings together all of the author's most famous works, including poems, short stories, and novellas. Known for his macabre and gothic storytelling, the author's works are filled with themes of death, love lost, and human frailty. Notable inclusions are the haunting poem \"The Raven,\" the chilling stories \"The Tell-Tale Heart\" and \"The Fall of the House of Usher,\" and his only complete novel, \"The Narrative of Arthur Gordon Pym.\"",
        "id": 10,
        "genre": [
            "crime",
            "horror",
            "mystery"
        ],
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "The Hound of the Baskervilles",
        "author": "Arthur Conan Doyle",
        "description": "This classic mystery novel follows a detective and his partner as they investigate a supernatural hound that has been haunting the Baskerville family for generations, supposedly causing the death of the recent family head. As the pair navigate the eerie moors surrounding the Baskerville estate, they unravel a plot of deception and murder, all while trying to protect the new heir from the same grisly fate. The story is a thrilling blend of mystery, suspense, and horror.",
        "id": 11,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ]
    },
    {
        "title": "The Big Sleep",
        "author": "Raymond Chandler",
        "description": "In this classic detective novel, a private investigator is hired by a wealthy family to resolve a blackmail issue involving the younger daughter. As he delves deeper into the case, he uncovers a web of deceit, murder, and organized crime. The detective's investigation is further complicated by his growing attraction to the older daughter, adding a layer of personal involvement to an already complex case. The novel is renowned for its gritty depiction of 1930s Los Angeles and its sharp, witty dialogue.",
        "id": 12,
        "genre": [
            "crime",
            "mystery"
        ]
    },
    {
        "title": "A Clockwork Orange",
        "author": "Anthony Burgess",
        "description": "This novel follows the life of a violent young man named Alex, who is part of a youth subculture in a dystopian future England. Alex and his gang engage in a nightmarish spree of rape, assault, and robbery, until he is arrested and subjected to a psychological experiment by the government to \"cure\" him of his violent tendencies. The novel explores themes of free will, morality, and the nature of evil, while using a unique slang language invented by the author.",
        "id": 13,
        "genre": [
            "crime"
        ]
    },
    {
        "title": "The Maltese Falcon",
        "author": "Dashiell Hammett",
        "description": "This classic detective novel follows a private investigator who is hired by a mysterious woman to track down her missing sister. The case quickly becomes complicated when the investigator is caught up in a dangerous hunt for a priceless artifact, the Maltese Falcon. As he navigates a world of treachery, deceit, and murder, he must use his wit and courage to outsmart his enemies and solve the mystery.",
        "id": 14,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "The Talented Mr. Ripley",
        "author": "Patricia Highsmith",
        "description": "The Talented Mr. Ripley is a psychological thriller that follows the story of Tom Ripley, a young man struggling to make ends meet in New York City. When a wealthy shipbuilder mistakes Tom for a close friend of his son, Dickie Greenleaf, he offers him an all-expenses-paid trip to Italy to persuade his wayward son to return home. Instead, Tom becomes obsessed with the luxurious lifestyle of Dickie and his girlfriend, Marge, and goes to extreme lengths to make it his own, including identity theft and murder.",
        "id": 15,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "france",
            "italy"
        ]
    },
    {
        "title": "The Woman in White",
        "author": "Wilkie Collins",
        "description": "A captivating tale of mystery and suspense, \"The Woman in White\" follows the story of a young art teacher, Walter Hartright, who encounters a mysterious woman dressed in white on a moonlit road. The woman is revealed to be a mental asylum escapee, and as Hartright delves into her story, he uncovers a web of deceit, madness, and dangerous secrets involving a wealthy, titled family. The narrative explores themes of identity, insanity, and the abuse of power, with a complex plot filled with twists and turns.",
        "id": 16,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ]
    },
    {
        "title": "The Name of the Rose",
        "author": "Umberto Eco",
        "description": "Set in a wealthy Italian monastery in the 14th century, the novel follows a Franciscan friar and his young apprentice as they investigate a series of mysterious deaths within the monastery. As they navigate the labyrinthine library and decipher cryptic manuscripts, they uncover a complex plot involving forbidden books, secret societies, and the Inquisition. The novel is a blend of historical fiction, mystery, and philosophical exploration, delving into themes of truth, knowledge, and the power of the written word.",
        "id": 17,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "italy"
        ]
    },
    {
        "title": "And Then There Were None",
        "author": "Agatha Christie",
        "description": "In this classic mystery novel, ten strangers are invited to a secluded mansion on a private island by a mysterious host who is nowhere to be found. As the guests begin to die one by one, mirroring a creepy nursery rhyme that hangs in each of their rooms, they realize that the killer is among them. As suspicion and fear escalate, they must uncover the murderer before no one remains.",
        "id": 18,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "subject": [
            "survival"
        ]
    },
    {
        "title": "The Complete Sherlock Holmes",
        "author": "Arthur Conan Doyle",
        "description": "This book is a comprehensive collection of all 56 short stories and four novels centered around the brilliant detective, Sherlock Holmes, and his loyal friend, Dr. John Watson. Set in late 19th and early 20th century London, the stories follow Holmes as he uses his exceptional deductive reasoning and astute observation skills to solve a variety of complex and intriguing mysteries. From murder and theft to espionage and the supernatural, no case is too challenging for this iconic detective.",
        "id": 19,
        "genre": [
            "crime",
            "mystery"
        ]
    },
    {
        "title": "Brighton Rock",
        "author": "Graham Greene",
        "description": "\"Brighton Rock\" is a thrilling crime novel set in 1930s Brighton, revolving around the life of a young gangster, who is involved in a series of violent acts and murders. The narrative also explores the themes of Catholicism, morality, and the nature of sin, as the protagonist struggles with his religious beliefs and the guilt of his actions. The story is further complicated by the involvement of a naive young woman who falls in love with the gangster, unaware of his dark side.",
        "id": 20,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ]
    },
    {
        "title": "An American Tragedy",
        "author": "Theodore Dreiser",
        "description": "This classic novel explores the dark side of the American Dream through the story of a young man who, despite his humble beginnings, aspires to climb the social ladder. He becomes involved with two women, one wealthy and one from a working-class background. His ambition and desire for status lead him to commit a crime that ultimately results in his downfall. The novel is a stark examination of the destructive power of unchecked ambition and the moral compromises people are willing to make in pursuit of wealth and status.",
        "id": 21,
        "genre": [
            "crime"
        ]
    },
    {
        "title": "A Good Man Is Hard to Find",
        "author": "Flannery O'Connor",
        "description": "This collection of short stories is set in the American South and explores themes of morality, ethics, and the complexity of human nature. The stories feature a variety of characters, each grappling with their own moral dilemmas and personal struggles. The title story centers around a family's disastrous road trip, during which they encounter a notorious escaped convict. Through these narratives, the book examines the concept of \"goodness\" and the capacity for redemption and grace in a flawed world.",
        "id": 22,
        "genre": [
            "crime"
        ]
    },
    {
        "title": "The Spy Who Came in From the Cold",
        "author": "John le Carré",
        "description": "This novel is a fascinating tale of espionage during the Cold War, centered around a British intelligence officer who is seemingly ready to end his spy career. However, he is given one last mission before his retirement: to bring down the head of East German Intelligence. As he navigates the dangerous world of spies and double agents, he is forced to confront his own past and the sacrifices he has made for his country. The story is a complex exploration of morality, loyalty, and the personal cost of political conflict.",
        "id": 23,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "germany",
            "united-kingdom"
        ]
    },
    {
        "title": "East of Eden",
        "author": "John Steinbeck",
        "description": "This novel is a multi-generational epic that follows the lives of the Trask and Hamilton families in the Salinas Valley in California. The story is deeply rooted in biblical allegory, particularly the tale of Cain and Abel, as it explores themes of love, guilt, freedom, and the inherent good and evil in human nature. The narrative provides a profound, complex portrayal of family and individual struggles with morality and love, while also reflecting on the social changes affecting America during the late 19th and early 20th centuries.",
        "id": 24,
        "genre": [
            "crime"
        ]
    },
    {
        "title": "The Godfather",
        "author": "Mario Puzo",
        "description": "The book revolves around the powerful Italian-American crime family of Don Vito Corleone. When the don's youngest son, Michael, reluctantly joins the mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay, he is drawn deeper into the family business. The narrative follows the Corleone family's struggle to hold onto power in a rapidly changing world, as well as Michael's transformation from reluctant family outsider to ruthless mafia boss.",
        "id": 25,
        "genre": [
            "crime",
            "mystery",
            "thrillers"
        ]
    },
    {
        "title": "The Lord of the Rings",
        "author": "J. R. R. Tolkien",
        "description": "This epic high-fantasy novel centers around a modest hobbit who is entrusted with the task of destroying a powerful ring that could enable the dark lord to conquer the world. Accompanied by a diverse group of companions, the hobbit embarks on a perilous journey across Middle-earth, battling evil forces and facing numerous challenges. The narrative, rich in mythology and complex themes of good versus evil, friendship, and heroism, has had a profound influence on the fantasy genre.",
        "id": 26,
        "genre": [
            "fantasy",
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "war"
        ]
    },
    {
        "title": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "description": "This novel follows the story of a young girl named Alice who falls down a rabbit hole into a fantastical world full of peculiar creatures and bizarre experiences. As she navigates through this strange land, she encounters a series of nonsensical events, including a tea party with a Mad Hatter, a pool of tears, and a trial over stolen tarts. The book is renowned for its playful use of language, logic, and its exploration of the boundaries of reality.",
        "id": 27,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "One Thousand and One Nights",
        "author": "Unknown",
        "description": "This is a collection of Middle Eastern folk tales compiled during the Islamic Golden Age. The stories are told by a young woman, who must weave a new tale each night for her husband, a king, to delay her execution. The tales are filled with magic, adventure, love, and betrayal, and include well-known stories such as \"Aladdin's Wonderful Lamp\", \"Ali Baba and the Forty Thieves\", and \"The Seven Voyages of Sinbad the Sailor\".",
        "id": 28,
        "genre": [
            "fantasy"
        ],
        "subject": [
            "betrayal",
            "love"
        ]
    },
    {
        "title": "Harry Potter And The Philosopher's Stone",
        "author": "J. K. Rowling",
        "description": "The story follows a young boy, Harry Potter, who learns on his 11th birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths, the dark wizard who wants to kill him, and the magical stone that holds immense power.",
        "id": 29,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "A Wrinkle In Time",
        "author": "Madeleine L'Engle",
        "description": "The novel follows the story of a young girl named Meg Murry, her younger brother Charles Wallace, and their friend Calvin O'Keefe as they embark on a cosmic journey to rescue Meg and Charles Wallace's father. The father, a scientist, has been missing since he discovered a new planet using the concept of Tesseract, which is a wrinkle in time. Guided by three mysterious celestial beings, the children travel across different dimensions, face evil forces, and learn about the power of love and self-sacrifice.",
        "id": 30,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Lion, The Witch and the Wardrobe",
        "author": "C. S. Lewis",
        "description": "Four siblings are evacuated from London during World War II and sent to live with an old professor in the countryside. In his house, they discover a magical wardrobe that serves as a portal to the land of Narnia, a world filled with mythical creatures and ruled by an evil White Witch. The children are soon caught up in a struggle to free Narnia from the witch's eternal winter, aided by the majestic lion Aslan. The story combines elements of fantasy, adventure, and Christian allegory.",
        "id": 31,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Once and Future King",
        "author": "T. H. White",
        "description": "This novel is a retelling of the Arthurian legend, from Arthur's childhood tutelage under the wizard Merlyn to his eventual death. The story follows Arthur's journey from a naive boy to a wise and just king, his establishment of the Round Table, his marriage to Guinevere, and his complex relationship with his illegitimate son, Mordred. The narrative explores themes of power, justice, war, and human nature, offering a nuanced and humanizing portrayal of a well-known mythical figure.",
        "id": 32,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Hobbit",
        "author": "J. R. R. Tolkien",
        "description": "In this fantasy novel, a timid and unadventurous hobbit named Bilbo Baggins is whisked away on a grand adventure by a wizard and a group of dwarves. Their mission is to reclaim the dwarves' homeland and treasure from a fearsome dragon. Throughout the journey, Bilbo grows in courage and cunning, proving himself a true hero as he encounters trolls, goblins, giant spiders, and other perils. The novel culminates with a great battle involving various races of Middle Earth, after which Bilbo returns home, forever changed by his experiences.",
        "id": 33,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "Watership Down",
        "author": "Richard Adams",
        "description": "This novel follows a group of rabbits as they flee their warren due to a foreseen catastrophe. The rabbits, led by Hazel and his psychic brother Fiver, face numerous challenges and adventures as they search for a new home. They encounter predators, hostile rabbit communities, and human threats. The book explores themes of leadership, survival, and freedom, all set within the natural world and its inherent dangers.",
        "id": 34,
        "genre": [
            "fantasy"
        ],
        "subject": [
            "survival"
        ]
    },
    {
        "title": "A Wizard of Earthsea",
        "author": "Ursula K. Le Guin",
        "description": "This fantasy novel follows the story of a young boy named Ged who lives in a world of islands called Earthsea. Ged discovers he has a natural talent for magic and is sent to a school for wizards on the island of Roke. As he grows and learns, his arrogance leads him to unleash a shadow creature that he must then spend years trying to defeat. The book explores themes of balance, power, and the danger of hubris, as Ged learns to control his abilities and accept responsibility for his actions.",
        "id": 35,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "Where the Wild Things Are",
        "author": "Maurice Sendak",
        "description": "A young boy named Max, dressed in his wolf costume, wreaks such havoc through his household that he is sent to bed without his supper. In his room, a mysterious, wild forest and sea grows out of his imagination, and Max sails to the land of the Wild Things. The Wild Things are fearsome-looking monsters, but Max conquers them by “staring into their yellow eyes without blinking once”, and he is made the king of all wild things. However, he soon finds himself lonely and homesick and returns home to his bedroom where he finds his supper waiting for him, still hot.",
        "id": 36,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "Peter And Wendy",
        "author": "J. M. Barrie",
        "description": "\"Peter And Wendy\" by JM Barrie is a beloved children's classic that tells the enchanting story of a young girl named Wendy Darling who, along with her two brothers, embarks on a magical adventure to the whimsical world of Neverland. There, they encounter the mischievous and eternal boy, Peter Pan, and his fairy companion, Tinker Bell. Together, they face thrilling escapades, battles with the villainous Captain Hook, and discover the importance of imagination, friendship, and the power of never growing up.",
        "id": 37,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Brief Wondrous Life of Oscar Wao",
        "author": "Junot Diaz",
        "description": "This novel tells the story of Oscar de Leon, an overweight Dominican boy growing up in New Jersey who is obsessed with science fiction, fantasy novels, and falling in love, but is perpetually unlucky in his romantic endeavors. The narrative not only explores Oscar's life but also delves into the lives of his family members, each affected by the curse that has plagued their family for generations. The book is a blend of magical realism and historical fiction, providing a detailed account of the brutal Trujillo regime in the Dominican Republic and its impact on the country's people and diaspora.",
        "id": 38,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Chronicles of Narnia",
        "author": "C. S. Lewis",
        "description": "This seven-part series follows the adventures of various children who play central roles in the unfolding history of the fantastical realm of Narnia. The children are magically transported to Narnia from our world, where they aid the noble lion Aslan in his struggles against evil forces in order to restore peace and justice. The series explores themes of good versus evil, the nature of faith, and the power of sacrifice, all set against a richly imagined magical world full of diverse creatures and landscapes.",
        "id": 39,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Phantom Tollbooth",
        "author": "Norton Juster",
        "description": "A young boy named Milo, who is always bored and uninterested in the world around him, unexpectedly receives a magic tollbooth. When he drives through it in his toy car, he is transported to the Kingdom of Wisdom. Here, he embarks on a quest to rescue the princesses Rhyme and Reason, who have been exiled by the warring brothers, King Azaz of Dictionopolis (where words are supremely important) and the Mathemagician of Digitopolis (where numbers are most valued). Along his journey, Milo learns the value of learning and the excitement that can be found in the world around him.",
        "id": 40,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "Cloud Atlas",
        "author": "David Mitchell",
        "description": "This novel is a unique blend of six different stories, each set in a different time and place, spanning from the 19th century South Pacific to a post-apocalyptic future. Each tale is written in a different style, reflecting the time and setting it represents, and they are all connected through shared themes and recurring motifs. The stories are nested within each other, with each interrupted by the next, only to be concluded in the second half of the book. The novel explores themes of predacity, civilization, reincarnation and the eternal recurrence of the same behaviors throughout history.",
        "id": 41,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "His Dark Materials",
        "author": "Philip Pullman",
        "description": "\"His Dark Materials\" is a fantasy trilogy that follows the journey of a young girl named Lyra Belacqua and her daemon, Pantalaimon, across parallel universes. Throughout their adventures, they encounter a variety of mythical creatures, confront religious and political systems, and grapple with complex themes such as free will, original sin, and the nature of consciousness. The series also delves into the mysteries of Dust, a strange particle integral to the multiverse's function.",
        "id": 42,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "Gormenghast",
        "author": "Mervyn Peake",
        "description": "Set in a vast, crumbling castle named Gormenghast, the story follows the life of Titus Groan, the heir to the Earl of Groan. The narrative explores the complex, rigidly structured society within the castle and the struggles and intrigues of its eccentric characters, particularly the scheming kitchen boy Steerpike. As Titus grows older, he begins to rebel against the stifling traditions of Gormenghast, setting the stage for a dramatic clash between the old and the new.",
        "id": 43,
        "genre": [
            "fantasy",
            "horror"
        ]
    },
    {
        "title": "Journey to the West",
        "author": "Wu Cheng'en",
        "description": "\"Journey to the West\" is a classic Chinese novel that follows the adventures of a Buddhist monk and his three disciples, a monkey, a pig, and a river monster, as they travel from China to India in search of sacred Buddhist scriptures. Along the way, they face a series of challenges and obstacles, including battling demons and overcoming their own personal weaknesses. This epic tale is a blend of mythology, folklore, and fantasy, and is also a commentary on the practice and principles of Buddhism.",
        "id": 44,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Wonderful Wizard of Oz",
        "author": "L. Frank Baum",
        "description": "A young girl from Kansas is swept away by a tornado to a fantastical land called Oz. To return home, she must find the mysterious Wizard in the Emerald City, and on her journey, she befriends a Scarecrow in need of a brain, a Tin Woodman longing for a heart, and a Cowardly Lion seeking courage. They all hope the Wizard can grant their wishes, but they must first overcome the Wicked Witch of the West who poses a great danger to them.",
        "id": 45,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "Perfume",
        "author": "Patrick Suskind",
        "description": "Set in 18th-century France, this novel tells the story of Jean-Baptiste Grenouille, a man born with an extraordinary sense of smell but no personal scent of his own. He becomes an apprentice to a prominent perfumer and learns to create the world's most intoxicating perfumes. However, his obsession with capturing the perfect scent leads him down a dark path, as he begins to kill young women to extract their scent. The book is a chilling exploration of obsession, identity, and the power of scent.",
        "id": 46,
        "genre": [
            "fantasy",
            "horror"
        ]
    },
    {
        "title": "Titus Groan",
        "author": "Mervyn Peake",
        "description": "The novel is a gothic fantasy set in the bizarre and intricate world of Gormenghast Castle, home to the ancient and eccentric Groan family. The story begins with the birth of Titus Groan, the seventy-seventh Earl, who stands to inherit the castle and its strange traditions. The narrative follows the castle's eccentric characters and their bizarre rituals, including the ambitious kitchen boy, Steerpike, who seeks to manipulate the castle's traditions for his own gain. It's a dark and surreal exploration of ritual, power, and madness.",
        "id": 47,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "Froth on the daydream",
        "author": "Boris Vian",
        "description": "\"Froth on the Daydream\" is a tragic love story set in a surreal world. The protagonist is a wealthy young man who marries a woman he loves deeply. However, their bliss is short-lived when she develops a strange illness - a water lily growing in her lung. As her health deteriorates, so does their wealth and social standing, leading to a bleak and heartbreaking end. This novel is a poignant exploration of love, loss, and the harsh realities of life, all set within a fantastical and dreamlike landscape.",
        "id": 48,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Princess Bride",
        "author": "William Goldman",
        "description": "This book is an illustrated edition of a classic tale of true love and high adventure. It tells the story of a beautiful princess and her one true love. After he is reportedly killed, she agrees to marry a wicked prince instead, only to be kidnapped and face numerous dangers. The story is filled with humor, romance, and swashbuckling action, all brought to life by vivid illustrations.",
        "id": 49,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Crying of Lot 49",
        "author": "Thomas Pynchon",
        "description": "The novel follows the journey of a woman who stumbles upon a centuries-old conflict between two mail distribution companies when she is appointed the executor of her ex-lover's will. As she delves deeper into the mystery, she begins to question her own sanity and the reality of the conspiracy itself. The story explores themes of communication, interpretation, and the struggle to find meaning in a chaotic world.",
        "id": 50,
        "genre": [
            "fantasy"
        ]
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "description": "Set in the summer of 1922, the novel follows the life of a young and mysterious millionaire, his extravagant lifestyle in Long Island, and his obsessive love for a beautiful former debutante. As the story unfolds, the millionaire's dark secrets and the corrupt reality of the American dream during the Jazz Age are revealed. The narrative is a critique of the hedonistic excess and moral decay of the era, ultimately leading to tragic consequences.",
        "id": 51,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "love",
            "relationships"
        ]
    },
    {
        "title": "Ulysses",
        "author": "James Joyce",
        "description": "Set in Dublin, the novel follows a day in the life of Leopold Bloom, an advertising salesman, as he navigates the city. The narrative, heavily influenced by Homer's Odyssey, explores themes of identity, heroism, and the complexities of everyday life. It is renowned for its stream-of-consciousness style and complex structure, making it a challenging but rewarding read.",
        "id": 52,
        "genre": [
            "fiction"
        ],
        "subject": [
            "politics",
            "religion"
        ]
    },
    {
        "title": "In Search of Lost Time",
        "author": "Marcel Proust",
        "description": "This renowned novel is a sweeping exploration of memory, love, art, and the passage of time, told through the narrator's recollections of his childhood and experiences into adulthood in the late 19th and early 20th century aristocratic France. The narrative is notable for its lengthy and intricate involuntary memory episodes, the most famous being the \"madeleine episode\". It explores the themes of time, space and memory, but also raises questions about the nature of art and literature, and the complex relationships between love, sexuality, and possession.",
        "id": 53,
        "genre": [
            "fiction"
        ],
        "setting": [
            "france"
        ],
        "subject": [
            "love",
            "relationships"
        ]
    },
    {
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "description": "This novel is a multi-generational saga that focuses on the Buendía family, who founded the fictional town of Macondo. It explores themes of love, loss, family, and the cyclical nature of history. The story is filled with magical realism, blending the supernatural with the ordinary, as it chronicles the family's experiences, including civil war, marriages, births, and deaths. The book is renowned for its narrative style and its exploration of solitude, fate, and the inevitability of repetition in history.",
        "id": 54,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "love",
            "politics",
            "religion",
            "war"
        ]
    },
    {
        "title": "The Catcher in the Rye",
        "author": "J. D. Salinger",
        "description": "The novel follows the story of a teenager named Holden Caulfield, who has just been expelled from his prep school. The narrative unfolds over the course of three days, during which Holden experiences various forms of alienation and his mental state continues to unravel. He criticizes the adult world as \"phony\" and struggles with his own transition into adulthood. The book is a profound exploration of teenage rebellion, alienation, and the loss of innocence.",
        "id": 55,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Lolita",
        "author": "Vladimir Nabokov",
        "description": "The novel tells the story of Humbert Humbert, a man with a disturbing obsession for young girls, or \"nymphets\" as he calls them. His obsession leads him to engage in a manipulative and destructive relationship with his 12-year-old stepdaughter, Lolita. The narrative is a controversial exploration of manipulation, obsession, and unreliable narration, as Humbert attempts to justify his actions and feelings throughout the story.",
        "id": 56,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "Nineteen Eighty Four",
        "author": "George Orwell",
        "description": "Set in a dystopian future, the novel presents a society under the total control of a totalitarian regime, led by the omnipresent Big Brother. The protagonist, a low-ranking member of 'the Party', begins to question the regime and falls in love with a woman, an act of rebellion in a world where independent thought, dissent, and love are prohibited. The novel explores themes of surveillance, censorship, and the manipulation of truth.",
        "id": 57,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "description": "Set in 19th-century Russia, this novel revolves around the life of Anna Karenina, a high-society woman who, dissatisfied with her loveless marriage, embarks on a passionate affair with a charming officer named Count Vronsky. This scandalous affair leads to her social downfall, while parallel to this, the novel also explores the rural life and struggles of Levin, a landowner who seeks the meaning of life and true happiness. The book explores themes such as love, marriage, fidelity, societal norms, and the human quest for happiness.",
        "id": 58,
        "genre": [
            "fiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "love",
            "politics",
            "religion"
        ]
    },
    {
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "description": "The novel is a detailed narrative of a vengeful sea captain's obsessive quest to hunt down a giant white sperm whale that bit off his leg. The captain's relentless pursuit, despite the warnings and concerns of his crew, leads them on a dangerous journey across the seas. The story is a complex exploration of good and evil, obsession, and the nature of reality, filled with rich descriptions of whaling and the sea.",
        "id": 59,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Wuthering Heights",
        "author": "Emily Brontë",
        "description": "This classic novel is a tale of love, revenge and social class set in the Yorkshire moors. It revolves around the intense, complex relationship between Catherine Earnshaw and Heathcliff, an orphan adopted by Catherine's father. Despite their deep affection for each other, Catherine marries Edgar Linton, a wealthy neighbor, leading Heathcliff to seek revenge on the two families. The story unfolds over two generations, reflecting the consequences of their choices and the destructive power of obsessive love.",
        "id": 60,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "love",
            "relationships"
        ]
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "description": "Set in the racially charged South during the Depression, the novel follows a young girl and her older brother as they navigate their small town's societal norms and prejudices. Their father, a lawyer, is appointed to defend a black man falsely accused of raping a white woman, forcing the children to confront the harsh realities of racism and injustice. The story explores themes of morality, innocence, and the loss of innocence through the eyes of the young protagonists.",
        "id": 61,
        "genre": [
            "fiction",
            "historical-fiction",
            "mystery"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "description": "Set in early 19th-century England, this classic novel revolves around the lives of the Bennet family, particularly the five unmarried daughters. The narrative explores themes of manners, upbringing, morality, education, and marriage within the society of the landed gentry. It follows the romantic entanglements of Elizabeth Bennet, the second eldest daughter, who is intelligent, lively, and quick-witted, and her tumultuous relationship with the proud, wealthy, and seemingly aloof Mr. Darcy. Their story unfolds as they navigate societal expectations, personal misunderstandings, and their own pride and prejudice.",
        "id": 62,
        "genre": [
            "fiction"
        ],
        "subject": [
            "love",
            "relationships"
        ]
    },
    {
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "description": "This classic novel follows the adventures of a man who, driven mad by reading too many chivalric romances, decides to become a knight-errant and roam the world righting wrongs under the name Don Quixote. Accompanied by his loyal squire, Sancho Panza, he battles windmills he believes to be giants and champions the virtuous lady Dulcinea, who is in reality a simple peasant girl. The book is a richly layered critique of the popular literature of Cervantes' time and a profound exploration of reality and illusion, madness and sanity.",
        "id": 63,
        "genre": [
            "fiction"
        ]
    },
    {
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "description": "Set in the backdrop of the Napoleonic era, the novel presents a panorama of Russian society and its descent into the chaos of war. It follows the interconnected lives of five aristocratic families, their struggles, romances, and personal journeys through the tumultuous period of history. The narrative explores themes of love, war, and the meaning of life, as it weaves together historical events with the personal stories of its characters.",
        "id": 64,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "love",
            "politics",
            "religion",
            "war"
        ]
    },
    {
        "title": "The Sound and the Fury",
        "author": "William Faulkner",
        "description": "The novel is a complex exploration of the tragic Compson family from the American South. Told from four distinct perspectives, the story unfolds through stream of consciousness narratives, each revealing their own understanding of the family's decline. The characters grapple with post-Civil War societal changes, personal loss, and their own mental instability. The narrative is marked by themes of time, innocence, and the burdens of the past.",
        "id": 65,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Madame Bovary",
        "author": "Gustave Flaubert",
        "description": "Madame Bovary is a tragic novel about a young woman, Emma Bovary, who is married to a dull, but kind-hearted doctor. Dissatisfied with her life, she embarks on a series of extramarital affairs and indulges in a luxurious lifestyle in an attempt to escape the banalities and emptiness of provincial life. Her desire for passion and excitement leads her down a path of financial ruin and despair, ultimately resulting in a tragic end.",
        "id": 66,
        "genre": [
            "fiction"
        ],
        "setting": [
            "france"
        ]
    },
    {
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "description": "The book follows the Joad family, Oklahoma farmers displaced from their land during the Great Depression. The family, alongside thousands of other \"Okies,\" travel to California in search of work and a better life. Throughout their journey, they face numerous hardships and injustices, yet maintain their humanity through unity and shared sacrifice. The narrative explores themes of man's inhumanity to man, the dignity of wrath, and the power of family and friendship, offering a stark and moving portrayal of the harsh realities of American migrant laborers during the 1930s.",
        "id": 67,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "survival"
        ]
    },
    {
        "title": "The Odyssey",
        "author": "Homer",
        "description": "This epic poem follows the Greek hero Odysseus on his journey home after the fall of Troy. It takes Odysseus ten years to reach Ithaca after the ten-year Trojan War. Along the way, he encounters many obstacles including mythical creatures, divine beings, and natural disasters. Meanwhile, back in Ithaca, his wife Penelope and son Telemachus fend off suitors vying for Penelope's hand in marriage, believing Odysseus to be dead. The story concludes with Odysseus's return, his slaughter of the suitors, and his reunion with his family.",
        "id": 68,
        "genre": [
            "fiction"
        ],
        "subject": [
            "survival",
            "war"
        ]
    },
    {
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "description": "The novel follows the life of Jane Eyre, an orphan who is mistreated by her relatives and sent to a charity school. As she grows up, Jane becomes a governess at Thornfield Hall, where she falls in love with the brooding and mysterious Mr. Rochester. However, she soon learns of a dark secret in his past that threatens their future together. The story is a profound exploration of a woman's self-discovery and her struggle for independence and love in a rigid Victorian society.",
        "id": 69,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "love",
            "religion"
        ]
    },
    {
        "title": "Heart of Darkness",
        "author": "Joseph Conrad",
        "description": "This classic novel follows the journey of a seaman who travels up the Congo River into the African interior to meet a mysterious ivory trader. Throughout his journey, he encounters the harsh realities of imperialism, the brutal treatment of native Africans, and the depths of human cruelty and madness. The protagonist's journey into the 'heart of darkness' serves as both a physical exploration of the African continent and a metaphorical exploration into the depths of human nature.",
        "id": 70,
        "genre": [
            "fiction"
        ]
    },
    {
        "title": "To the Lighthouse",
        "author": "Virginia Woolf",
        "description": "This novel is a pioneering work of modernist literature that explores the Ramsay family's experiences at their summer home on the Isle of Skye in Scotland. The narrative is divided into three sections, focusing on a day in the family's life, a description of the house during their absence, and their return after ten years. The book is known for its stream of consciousness narrative technique and its exploration of topics such as the passage of time, the nature of art, and the female experience.",
        "id": 71,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Middlemarch",
        "author": "George Eliot",
        "description": "Set in the fictitious English town of Middlemarch during the early 19th century, the novel explores the complex web of relationships in a close-knit society. It follows the lives of several characters, primarily Dorothea Brooke, a young woman of idealistic fervor, and Tertius Lydgate, an ambitious young doctor, who both grapple with societal expectations, personal desires, and moral dilemmas. Their stories intertwine with a rich tapestry of other townsfolk, reflecting themes of love, marriage, ambition, and reform, making a profound commentary on the human condition.",
        "id": 72,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "love",
            "politics",
            "religion"
        ]
    },
    {
        "title": "Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "description": "The novel follows the journey of a young boy named Huckleberry Finn and a runaway slave named Jim as they travel down the Mississippi River on a raft. Set in the American South before the Civil War, the story explores themes of friendship, freedom, and the hypocrisy of society. Through various adventures and encounters with a host of colorful characters, Huck grapples with his personal values, often clashing with the societal norms of the time.",
        "id": 73,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "The Magic Mountain",
        "author": "Thomas Mann",
        "description": "In this novel, the protagonist, a young, ordinary man, visits his cousin at a tuberculosis sanatorium in the Swiss Alps. Intending to stay for only a few weeks, he ends up remaining there for seven years, becoming a patient himself. The book explores his experiences and relationships with other patients and staff, delving into philosophical discussions on life, time, and the nature of disease. It also provides a vivid portrayal of the European society and intellectual life on the eve of World War I.",
        "id": 74,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Midnight's Children",
        "author": "Salman Rushdie",
        "description": "The novel tells the story of Saleem Sinai, who was born at the exact moment when India gained its independence. As a result, he shares a mystical connection with other children born at the same time, all of whom possess unique, magical abilities. As Saleem grows up, his life mirrors the political and cultural changes happening in his country, from the partition of India and Pakistan, to the Bangladesh War of Independence. The story is a blend of historical fiction and magical realism, exploring themes of identity, fate, and the power of storytelling.",
        "id": 75,
        "genre": [
            "historical-fiction"
        ],
        "subject": [
            "politics",
            "religion"
        ]
    },
    {
        "title": "The Red and the Black",
        "author": "Stendhal",
        "description": "The novel is a detailed psychological portrait of Julien Sorel, a young man from a provincial background who aspires to rise above his humble beginnings. He uses his intelligence and hypocrisy to advance in the post-Napoleonic French society, which is deeply divided by class and political loyalties. The story is a critique of the society's materialism and hypocrisy as Julien's ambitions lead him to a tragic end. The title refers to the contrasting uniforms of the army and the church, the two routes available to him for upward mobility.",
        "id": 76,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "france"
        ],
        "subject": [
            "betrayal",
            "love",
            "politics",
            "religion"
        ]
    },
    {
        "title": "Things Fall Apart",
        "author": "Chinua Achebe",
        "description": "This novel explores the life of Okonkwo, a respected warrior in the Umuofia clan of the Igbo tribe in Nigeria during the late 1800s. Okonkwo's world is disrupted by the arrival of European missionaries and the subsequent clash of cultures. The story examines the effects of colonialism on African societies, the clash between tradition and change, and the struggle between individual and society. Despite his efforts to resist the changes, Okonkwo's life, like his society, falls apart.",
        "id": 77,
        "genre": [
            "historical-fiction"
        ],
        "subject": [
            "religion"
        ]
    },
    {
        "title": "Beloved",
        "author": "Toni Morrison",
        "description": "This novel tells the story of a former African-American slave woman who, after escaping to Ohio, is haunted by the ghost of her deceased daughter. The protagonist is forced to confront her repressed memories and the horrific realities of her past, including the desperate act she committed to protect her children from a life of slavery. The narrative is a poignant exploration of the physical, emotional, and psychological scars inflicted by the institution of slavery, and the struggle for identity and self-acceptance in its aftermath.",
        "id": 78,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Absalom, Absalom!",
        "author": "William Faulkner",
        "description": "This novel is a complex narrative about Thomas Sutpen, a poor white man who rises to power in the South, aiming to create a dynasty that would rival the old aristocratic families. However, his ambitions are thwarted by his own flawed decisions and the overarching racial and societal tensions of the era. The story is not told in a linear fashion but rather through a series of interconnected flashbacks and narratives, offering different perspectives on the same events. The book explores themes of family, class, race, and the destructive power of obsession.",
        "id": 79,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "A Passage to India",
        "author": "E. M. Forster",
        "description": "The novel takes place in British-ruled India, where the cultural divide between the British and the Indians is explored. The story focuses on the experiences of an Indian Muslim, Dr. Aziz, and his interactions with an English woman, Miss Quested, and her elderly friend, Mrs. Moore. After an expedition to the Marabar Caves, Miss Quested accuses Dr. Aziz of assault, leading to a trial that deepens the racial tensions and prejudices between the colonizers and the colonized. The novel is a critique of British imperialism and a study of the cultural and racial misunderstandings and ill-will between the British and the Indian people.",
        "id": 80,
        "genre": [
            "historical-fiction"
        ],
        "subject": [
            "religion"
        ]
    },
    {
        "title": "Gone With the Wind",
        "author": "Margaret Mitchell",
        "description": "Set against the backdrop of the American Civil War and Reconstruction era, this novel follows the life of a young Southern belle, who is known for her beauty and charm. Her life takes a turn when she is forced to make drastic changes to survive the war and its aftermath. The story revolves around her struggle to maintain her family's plantation and her complicated love life, especially her unrequited love for a married man, and her tumultuous relationship with a roguish blockade runner.",
        "id": 81,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "love",
            "survival",
            "war"
        ]
    },
    {
        "title": "The Good Soldier",
        "author": "Ford Madox Ford",
        "description": "\"The Good Soldier\" is a tragic tale of two seemingly perfect couples: an American couple and an English couple, who meet at a German spa and share a nine-year friendship. However, underneath the surface, their relationships are far from ideal, filled with infidelity, lies, and deceit. The story is narrated by the American husband, who is the last to realize the intricate web of affairs and betrayals amongst the group. The novel explores themes of love, passion, and the destruction that can result from suppressed emotions and societal pressures.",
        "id": 82,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "germany"
        ],
        "subject": [
            "betrayal",
            "love"
        ]
    },
    {
        "title": "All Quiet on the Western Front",
        "author": "Erich Maria Remarque",
        "description": "The novel tells the story of a young German soldier, Paul Bäumer, and his experiences during World War I. The narrative explores the physical and emotional toll of war, the camaraderie between soldiers, and the disillusionment of a generation thrown into a brutal conflict. The protagonist and his friends grapple with survival, fear, and the loss of innocence, providing a stark and poignant critique of the futility and destructiveness of war.",
        "id": 83,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "france",
            "germany"
        ],
        "subject": [
            "survival",
            "war"
        ]
    },
    {
        "title": "The Age of Innocence",
        "author": "Edith Wharton",
        "description": "Set in the 1870s, the novel revolves around Newland Archer, a young lawyer from New York's high society, who is engaged to the beautiful and conventional May Welland. His life takes a turn when he meets May's cousin, the Countess Ellen Olenska, who has returned from Europe after leaving her scandalous husband. Torn between his duty and passion, Archer struggles with the constraints of the society he is a part of. The book offers a vivid portrayal of the struggle between individual desires and societal expectations in the upper-class New York society of the late 19th century.",
        "id": 84,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "The Leopard",
        "author": "Giuseppe Tomasi di Lampedusa",
        "description": "\"The Leopard\" is a historical novel set in 19th-century Sicily, during the time of the Italian unification or Risorgimento. It centers on an aging, aristocratic protagonist who is coming to terms with the decline of his class and the rise of a new social order. The narrative weaves together personal drama with the larger political and social upheaval of the time, providing a rich, nuanced portrait of a society in transition. Despite his resistance to change, the protagonist ultimately recognizes its inevitability and the futility of his efforts to preserve the old ways.",
        "id": 85,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "italy"
        ],
        "subject": [
            "politics"
        ]
    },
    {
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "description": "A young sailor, unjustly accused of treason, is imprisoned without trial in a grim fortress. After a daring escape, he uncovers a hidden treasure and transforms himself into the mysterious and wealthy Count of Monte Cristo. He then sets out to exact revenge on those who wronged him, using his newfound power and influence. Throughout his journey, he grapples with questions about justice, vengeance, and whether ultimate power can ultimately corrupt.",
        "id": 86,
        "genre": [
            "historical-fiction",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "france"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "The Scarlet Letter",
        "author": "Nathaniel Hawthorne",
        "description": "Set in 17th-century Puritan Boston, this novel tells the story of a woman who conceives a daughter through an affair and struggles to create a new life of repentance and dignity. She is forced to wear a scarlet \"A\" on her dress as a sign of her adultery while her lover, a revered local minister, remains unnamed and unpunished. Throughout the book, themes of sin, legalism, and guilt are explored.",
        "id": 87,
        "genre": [
            "historical-fiction"
        ],
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "The Tin Drum",
        "author": "Günter Grass",
        "description": "The novel tells the story of Oskar Matzerath, a boy who decides on his third birthday that he will stop growing and remain a three-year-old forever. Oskar is gifted with a tin drum by his mother, which he uses to express his emotions and thoughts. Living in Danzig during the rise of Nazi Germany, Oskar's refusal to grow is a form of protest against the adult world. The book is a blend of magical realism and historical fiction, providing a unique perspective on the horrors of World War II and the post-war era in Germany.",
        "id": 88,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "germany"
        ],
        "subject": [
            "politics",
            "war"
        ]
    },
    {
        "title": "Buddenbrooks",
        "author": "Thomas Mann",
        "description": "\"Buddenbrooks\" is a novel that chronicles the decline of a wealthy north German merchant family over the course of four generations. The narrative focuses on the fluctuating fortunes and internal struggles of the family, reflecting the societal changes and economic decline of the period. The family's personal and business relationships, their moral values, and their struggle to maintain social status are all explored against the backdrop of the changing political and social landscape.",
        "id": 89,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "germany"
        ],
        "subject": [
            "religion"
        ]
    },
    {
        "title": "Dead Souls",
        "author": "Nikolai Gogol",
        "description": "In this satirical novel, a man travels through Russia buying up the titles to deceased serfs (or \"souls\") from their naive landowners, under the guise of a get-rich-quick scheme. However, his real plan is to use these \"dead souls\" to create a phantom estate and secure a massive loan. The story explores the corruption and greed prevalent in 19th-century Russian society and provides a unique perspective on the human condition.",
        "id": 90,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "russia"
        ]
    },
    {
        "title": "Vanity Fair",
        "author": "William Makepeace Thackeray",
        "description": "This classic novel follows the lives of two contrasting women, the cunning and ruthless Becky Sharp and the sweet and naive Amelia Sedley, against the backdrop of English society during the Napoleonic Wars. The book is a satirical exploration of the obsession with wealth, status, and social climbing, and the moral bankruptcy that can result from such pursuits. The narrative weaves an intricate tale of love, betrayal, and redemption, exposing the vanity and hypocrisy of high society.",
        "id": 91,
        "genre": [
            "historical-fiction"
        ],
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "description": "This classic novel tells the story of a young scientist who creates a grotesque but sentient creature in an unorthodox scientific experiment. The scientist, horrified by his creation, abandons it, leading the creature to seek revenge. The novel explores themes of ambition, responsibility, guilt, and the potential consequences of playing God.",
        "id": 92,
        "genre": [
            "horror"
        ],
        "setting": [
            "fictional-location",
            "germany"
        ]
    },
    {
        "title": "Dracula",
        "author": "Bram Stoker",
        "description": "This classic horror novel tells the story of Count Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and a small group of people led by Professor Abraham Van Helsing. The narrative is composed of journal entries, letters, and telegrams written by the novel's protagonists, providing different perspectives on the gruesome events unfolding. The book touches on themes of sexuality, gender roles, and the clash of modern science with traditional superstition.",
        "id": 93,
        "genre": [
            "horror",
            "mystery",
            "thrillers"
        ],
        "subject": [
            "religion"
        ]
    },
    {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "description": "The novel follows the life of a handsome young man who, after having his portrait painted, is upset to realize that the painting will remain beautiful while he ages. After expressing a wish that the painting would age instead of him, he is shocked to find that his wish comes true. As he indulges in a life of hedonism and immoral acts, his portrait becomes increasingly grotesque, reflecting the damage his actions have on his soul. The story serves as a cautionary tale about the dangers of vanity, selfishness, and the pursuit of pleasure without regard for consequences.",
        "id": 94,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "Macbeth",
        "author": "William Shakespeare",
        "description": "This classic play follows the tragic tale of Macbeth, a Scottish general whose ambition is sparked by a prophecy from three witches that he will one day become King of Scotland. Consumed by ambition and spurred on by his wife, Macbeth murders King Duncan and takes the throne. However, guilt and paranoia plague him, leading to a reign of terror and further bloodshed. His desperate attempts to cling onto power lead to his downfall, illustrating the destructive power of unchecked ambition.",
        "id": 95,
        "genre": [
            "horror"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "The Turn of the Screw",
        "author": "Henry James",
        "description": "A young governess is hired to care for two children at a remote English estate. However, she soon becomes convinced that the grounds are haunted by two former employees who have taken control of the children. As she fights to free the children from these apparitions, the line between reality and her own fears becomes increasingly blurred, leading to a chilling and ambiguous conclusion.",
        "id": 96,
        "genre": [
            "horror",
            "mystery"
        ]
    },
    {
        "title": "The Haunting of Hill House",
        "author": "Shirley Jackson",
        "description": "The book is a chilling tale that revolves around a group of four individuals who decide to stay in a notoriously haunted mansion to conduct a paranormal investigation. The main character, a shy, reclusive woman with a troubled past, becomes increasingly unstable as she experiences terrifying phenomena and becomes obsessed with the house. As the supernatural events escalate, the lines between reality and imagination blur, leading to a shocking and tragic conclusion.",
        "id": 97,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "The Stand",
        "author": "Stephen King",
        "description": "This post-apocalyptic horror/fantasy novel presents a world devastated by a deadly plague, killing 99% of the population. The survivors, drawn together by dreams of a charismatic and benevolent figure, gather in Boulder, Colorado to form a new society. However, a malevolent figure also emerges, attracting a following of his own and setting the stage for a classic battle between good and evil. The story delves into themes of community, morality, and the capacity for both destruction and regeneration within humanity.",
        "id": 98,
        "genre": [
            "horror",
            "thrillers"
        ],
        "subject": [
            "survival"
        ]
    },
    {
        "title": "The Shining",
        "author": "Stephen King",
        "description": "A recovering alcoholic accepts a job as a winter caretaker at a remote Colorado hotel, hoping the isolation will help him reconnect with his wife and young son, and work on his writing. However, the hotel has a dark history and a powerful malevolent presence that influences him into violence, while his psychic son sees horrific forebodings from both past and future. As the winter weather leaves them snowbound, the father's sanity deteriorates, leading to a terrifying climax.",
        "id": 99,
        "genre": [
            "horror",
            "thrillers"
        ]
    },
    {
        "title": "The Private Memoirs and Confessions of a Justified Sinner",
        "author": "James Hogg",
        "description": "Set in 18th century Scotland, the novel explores the psychological downfall of a deeply religious man who believes he is predestined for salvation and thus justified in committing a series of murders. He is driven to this path of self-destruction by a mysterious stranger who may be either a devilish tempter or a manifestation of his own deranged mind. The book serves as a critique of religious fanaticism and a chilling exploration of the dark side of human nature.",
        "id": 100,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "author": "Robert Louis Stevenson",
        "description": "This classic novel explores the duality of human nature through the story of a respected London doctor who creates a potion that transforms him into a sinister, violent alter ego. As the doctor increasingly loses control over when the transformations occur, his alter ego's evil deeds escalate, causing havoc in the community. The narrative is a chilling exploration of humanity's capacity for evil and the struggle for individuals to reconcile their public personas with their private desires.",
        "id": 101,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "Melmoth the Wanderer",
        "author": "Charles Robert Maturin",
        "description": "\"Melmoth the Wanderer\" is a gothic novel that tells the story of John Melmoth, a man who sells his soul to the devil for 150 extra years of life, and spends that time wandering the earth in search of someone who will take over the pact for him. The narrative is a complex series of nested stories, told by many different characters, and it explores themes of guilt, redemption, and the inherent evil of mankind.",
        "id": 102,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "The Silence of the Lambs",
        "author": "Thomas Harris",
        "description": "In this gripping psychological thriller, a young FBI trainee is enlisted to interview an incarcerated and manipulative cannibalistic serial killer to gain insight into the mind of another active serial murderer. The trainee must navigate a complex game of cat and mouse, using her own wits and the killer's insights to understand and anticipate the criminal's moves before he strikes again. As she delves deeper into the investigation, she confronts not only the horrors of the criminal mind but also the darkness within her own past, leading to a tense and chilling confrontation.",
        "id": 103,
        "genre": [
            "horror",
            "thrillers"
        ]
    },
    {
        "title": "American Psycho",
        "author": "Bret Easton Ellis",
        "description": "The novel is a disturbing and graphic exploration of the mind of a wealthy, young and handsome Wall Street investment banker who is also a psychopathic serial killer. He leads a double life, appearing to be a charming and sophisticated businessman by day, while indulging in horrific acts of violence and murder by night. The narrative provides a satirical critique of 1980s American consumer culture, vanity, and excess, while also delving into the dark underbelly of human nature.",
        "id": 104,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "I Am Legend",
        "author": "Richard Matheson",
        "description": "The novel is a post-apocalyptic horror story that centers around a solitary man who may be the last human alive on earth after a pandemic has turned the rest of humanity into vampire-like creatures. He spends his days fortifying his home, hunting for food, and killing these creatures while they sleep. At night, he is tormented by their attempts to break into his home and kill him. His isolation drives him to the brink of insanity, and the novel explores themes of loneliness, survival, and the human capacity for hope in the face of utter despair.",
        "id": 105,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "The Castle of Otranto",
        "author": "Horace Walpole",
        "description": "\"The Castle of Otranto: A Gothic Story\" is a novel set in a medieval Italian castle and is considered the first gothic novel. The story revolves around the tyrannical Prince Manfred, who is determined to secure his family's reign in Otranto, despite the fact that his sickly son is killed by a giant helmet on his wedding day. The novel is filled with supernatural elements, including moving portraits, a bleeding statue, and a ghostly knight, as Manfred desperately tries to marry his late son's bride, leading to a series of tragic events. The novel is known for its exploration of the conflict between medieval and renaissance values, and its influence on the gothic literature genre.",
        "id": 106,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "The Monk",
        "author": "Matthew Lewis",
        "description": "\"The Monk\" is a gothic novel that explores the tragic downfall of a virtuous and respected monk who succumbs to temptation and sin. The protagonist is lured into a world of lust, greed, and pride by a woman who is actually Satan in disguise. His moral decay leads to a series of horrific events including murder, incest, and witchcraft. The novel serves as a cautionary tale about the dangers of excessive pride and the destructive power of unchecked desire.",
        "id": 107,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "Uncle Silas",
        "author": "Sheridan Le Fanu",
        "description": "\"Uncle Silas\" is a classic Gothic novel set in Victorian England that follows the story of a young, naive heiress who is left in the care of her mysterious and seemingly sinister Uncle Silas after her father's death. As she navigates her new life in his decrepit mansion, she uncovers dark family secrets, and begins to suspect her uncle may have ulterior motives. The novel explores themes of innocence, corruption, and the nature of evil, all set against the backdrop of a suspenseful and eerie atmosphere.",
        "id": 108,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "We Have Always Lived in the Castle",
        "author": "Shirley Jackson",
        "description": "This novel tells the story of the Blackwood sisters, Merricat and Constance, who live in isolation in their family mansion, following the mysterious death of their parents due to arsenic poisoning. The sisters' lives are disrupted when their estranged cousin, Charles, arrives with intentions of stealing their fortune. The story is a chilling exploration of family secrets, mental illness, and the destructive power of mob mentality.",
        "id": 109,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "At the Mountains of Madness",
        "author": "H. P. Lovecraft",
        "description": "In this chilling tale, an Antarctic expedition led by Dr. William Dyer from Miskatonic University uncovers ancient, alien ruins and a dangerous secret that forces them to question their understanding of the universe and their own sanity. As they delve deeper into the mystery, they encounter remnants of a prehistoric, monstrous civilization, which they believe could have been the original creators of life on Earth. The story is filled with Lovecraft's signature cosmic horror and themes of forbidden knowledge, non-human influences on humanity, and the insignificance of humans in the universe.",
        "id": 110,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "The Outsider And Others",
        "author": "H. P. Lovecraft",
        "description": "\"The Outsider And Others\" is a collection of chilling and macabre tales by H. P. Lovecraft. This anthology takes readers on a journey through the author's unique and unsettling imagination, exploring themes of cosmic horror, ancient gods, and the fragility of the human mind. With its atmospheric prose and nightmarish scenarios, this collection is a must-read for fans of Lovecraft's dark and haunting storytelling.",
        "id": 111,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "Rosemary's Baby",
        "author": "Ira Levin",
        "description": "The book revolves around a young couple, Rosemary and Guy Woodhouse, who move into an old New York City apartment building with a sinister reputation. Eager to start a family, Rosemary becomes pregnant under mysterious circumstances. As she becomes increasingly isolated and ill, she discovers that her husband and their eccentric neighbors have malevolent plans for her unborn child, which are tied to a diabolical pact with supernatural forces. Her paranoia and fear escalate as she uncovers the truth about a conspiracy that involves the birth of the Antichrist, leading to a chilling realization about the fate of her baby.",
        "id": 112,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "The Blind Owl",
        "author": "Ṣādiq Hidāyat",
        "description": "\"The Blind Owl\" is a haunting narrative that delves into the psyche of a tormented artist who is grappling with love, loss, and existential dread. The protagonist is a reclusive painter of pen cases who is haunted by the image of a mysterious woman, leading him down a spiral of obsession and madness. The story unfolds in a dreamlike narrative, blurring the lines between reality and illusion, and is steeped in Persian mysticism and symbolism. The novel explores themes of alienation, death, and the fragility of the human condition.",
        "id": 113,
        "genre": [
            "horror"
        ]
    },
    {
        "title": "Bleak House",
        "author": "Charles Dickens",
        "description": "\"Bleak House\" is a complex narrative that critiques the British judiciary system through a long-running legal case known as Jarndyce and Jarndyce. The story follows the lives of numerous characters, including the kind-hearted Esther Summerson, her friends Richard and Ada, and their guardian, Mr. Jarndyce, who are all caught in the web of a legal dispute over an inheritance. The novel is known for its detailed depiction of the legal system, its vivid characters, and its exploration of social issues of the time.",
        "id": 114,
        "genre": [
            "mystery"
        ]
    },
    {
        "title": "The Secret History",
        "author": "Donna Tartt",
        "description": "A group of six classics students at a small, elite Vermont college, led by a charismatic professor, become entranced by the study of Greek culture and decide to recreate a Dionysian ritual, which ends in a tragic accident. The group, bound by their shared secret, begins to unravel as paranoia and guilt take hold. The novel explores themes of beauty and terror, the allure of the esoteric, and the destructive consequences of obsession.",
        "id": 115,
        "genre": [
            "mystery",
            "thrillers"
        ]
    },
    {
        "title": "The Murder of Roger Ackroyd",
        "author": "Agatha Christie",
        "description": "In a small English village, a wealthy man named Roger Ackroyd is found dead, stabbed with a dagger. The victim's friend, a retired detective, comes out of retirement to solve the murder. The detective uncovers a web of deceit, blackmail, and hidden relationships among the victim's family and employees. The shocking twist ending reveals the unlikely murderer and the ingenious method used to commit the crime.",
        "id": 116,
        "genre": [
            "mystery",
            "thrillers"
        ]
    },
    {
        "title": "Never Let Me Go",
        "author": "Kazuo Ishiguro",
        "description": "The novel is a haunting tale of three friends, who grow up together at a seemingly idyllic English boarding school. As they mature, they discover a dark secret about their school and the purpose of their existence, which is to become organ donors for the rest of society. The story is a profound exploration of what it means to be human, the morality of scientific innovation, and the heartbreaking reality of love and loss.",
        "id": 117,
        "genre": [
            "mystery"
        ]
    },
    {
        "title": "The Wind-Up Bird Chronicle",
        "author": "Haruki Murakami",
        "description": "A man's search for his wife's missing cat evolves into a surreal journey through Tokyo's underbelly, where he encounters a bizarre collection of characters with strange stories and peculiar obsessions. As he delves deeper, he finds himself entangled in a web of dreamlike scenarios, historical digressions, and metaphysical investigations. His reality becomes increasingly intertwined with the dream world as he grapples with themes of fate, identity, and the dark side of the human psyche.",
        "id": 118,
        "genre": [
            "mystery"
        ]
    },
    {
        "title": "The Diary of a Young Girl",
        "author": "Anne Frank",
        "description": "This book is a real-life account of a young Jewish girl hiding from the Nazis during World War II, written in diary format. The girl and her family are forced to live in a secret annex in Amsterdam for two years, during which she writes about her experiences, fears, dreams, and the onset of adolescence. The diary provides a poignant and deeply personal insight into the horrors of the Holocaust, making it a powerful testament to the human spirit.",
        "id": 119,
        "genre": [
            "nonfiction"
        ],
        "subject": [
            "survival",
            "war"
        ]
    },
    {
        "title": "Silent Spring",
        "author": "Rachel Carson",
        "description": "This influential environmental science book presents a detailed and passionate argument against the overuse of pesticides in the mid-20th century. The author meticulously describes the harmful effects of these chemicals on the environment, particularly on birds, hence the metaphor of a 'silent spring' without bird song. The book played a significant role in advancing the global environmental movement and led to a nationwide ban on DDT and other pesticides in the United States.",
        "id": 120,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Essays",
        "author": "Michel de Montaigne",
        "description": "This collection of essays explores a wide range of topics such as solitude, cannibals, the power of the imagination, the education of children, and the nature of friendship. The author employs a unique and personal approach to philosophy, using anecdotes and personal reflections to illustrate his points. The essays provide a profound insight into human nature and condition, and are considered a significant contribution to both literature and philosophy.",
        "id": 121,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "france"
        ],
        "subject": [
            "religion",
            "war"
        ]
    },
    {
        "title": "The Second Sex",
        "author": "Simone de Beauvoir",
        "description": "This influential work explores the treatment and perception of women throughout history, arguing that women have been repressed and defined only in relation to men. The author presents a detailed analysis of women's roles in society, family, work, and in the creation of their own identities. She discusses the concept of 'the other' and how this has been used to suppress women, while also examining the biological, psychological, and societal impacts of this oppression. The book is a seminal text in feminist theory, challenging traditional notions of femininity and calling for equality and freedom for women.",
        "id": 122,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "france"
        ]
    },
    {
        "title": "Walden",
        "author": "Henry David Thoreau",
        "description": "This work is a reflection upon simple living in natural surroundings, inspired by the author's two-year experience of living in a cabin near a woodland pond. Filled with philosophical insights, observations on nature, and declarations of independence from societal expectations, the book is a critique of the complexities of modern civilization and a call to appreciate the beauty and simplicity of the natural world. It explores themes such as self-reliance, solitude, and the individual's relationship with nature.",
        "id": 123,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "The Prince",
        "author": "Niccolo Machiavelli",
        "description": "This classic work of political philosophy provides a pragmatic guide on political leadership and power, arguing that leaders must do whatever necessary to maintain authority and protect their states, even if it means compromising morality and ethics. The book explores various types of principalities, military affairs, the conduct of great leaders, and the virtues a prince should possess. It is known for its controversial thesis, which suggests that the ends justify the means in politics.",
        "id": 124,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "italy"
        ],
        "subject": [
            "politics",
            "war"
        ]
    },
    {
        "title": "The Interpretation of Dreams",
        "author": "Sigmund Freud",
        "description": "This groundbreaking work explores the theory that dreams are a reflection of the unconscious mind and a means of understanding our deepest desires, anxieties, and fantasies. The book delves into the symbolism of dreams and their connection to repressed thoughts and experiences, proposing that they are a form of wish fulfillment. The author also introduces the concept of \"dream work,\" which transforms these unconscious thoughts into the content of dreams, and discusses various methods of dream interpretation.",
        "id": 125,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "On the Origin of Species",
        "author": "Charles Darwin",
        "description": "This groundbreaking work presents the theory of evolution, asserting that species evolve over generations through a process of natural selection. The book provides a comprehensive explanation of how the diversity of life on Earth developed over millions of years from a common ancestry. It includes detailed observations and arguments to support the idea that species evolve by adapting to their environments, challenging the prevailing belief of the time that species were unchanging parts of a designed hierarchy.",
        "id": 126,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "survival"
        ]
    },
    {
        "title": "A Room of One's Own",
        "author": "Virginia Woolf",
        "description": "This book is an extended essay that explores the topic of women in fiction, and the societal and economic hindrances that prevent them from achieving their full potential. The author uses a fictional narrator and narrative to explore the many difficulties that women writers faced throughout history, including the lack of education available to them and the societal expectations that limited their opportunities. The central argument is that a woman must have money and a room of her own if she is to write fiction.",
        "id": 127,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "The Autobiography of Malcolm X",
        "author": "Alex Haley",
        "description": "This book is an autobiography narrating the life of a renowned African-American activist. It delves into his transformation from a young man involved in criminal activities to becoming one of the most influential voices in the fight against racial inequality in America. The book provides a deep insight into his philosophies, his time in prison, conversion to Islam, his role in the Nation of Islam, his pilgrimage to Mecca, and his eventual split from the Nation. It also addresses his assassination, making it a powerful account of resilience, redemption, and personal growth.",
        "id": 128,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "Communist Manifesto",
        "author": "Karl Marx",
        "description": "This influential political pamphlet advocates for the abolition of private property, the rights of the proletariat, and the eventual establishment of a classless society. The authors argue that all of history is a record of class struggle, culminating in the conflict between the bourgeoisie, who control the means of production, and the proletariat, who provide the labor. They predict that this struggle will result in a revolution, leading to a society where property and wealth are communally controlled.",
        "id": 129,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "germany",
            "united-kingdom"
        ]
    },
    {
        "title": "Confessions",
        "author": "Augustine",
        "description": "\"Confessions\" is an autobiographical work by a renowned theologian, in which he outlines his sinful youth and his conversion to Christianity. It is written in the form of a long, introspective prayer directed to God, exploring the author's spiritual journey and deep philosophical ponderings. The book is renowned for its eloquent and deeply personal exploration of faith, making it a cornerstone of Christian theology and Western literature.",
        "id": 130,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "italy"
        ]
    },
    {
        "title": "The Double Helix",
        "author": "James D. Watson",
        "description": "This book is a personal account of the race to discover the structure of DNA, told from the perspective of one of the co-discoverers. It provides an insider's view of scientific research, the collaboration and competition, the dedication, the doubt, the exhilaration of discovery, and the often fraught relationship between science and the rest of life. The book also explores the personalities, quirks, and conflicts of the scientists involved in the groundbreaking discovery.",
        "id": 131,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "Out of Africa",
        "author": "Isak Dinesen",
        "description": "The book is a memoir that recounts the author's experiences and observations living in Kenya, then British East Africa, from 1914 to 1931. It is a lyrical meditation on her life amongst the diverse cultures and wildlife of Africa. The author shares her trials and tribulations of running a coffee plantation, her deep respect for the people and land of Africa, and her intimate understanding of the subtle nuances of African culture and society.",
        "id": 132,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "The Gulag Archipelago",
        "author": "Aleksandr Solzhenitsyn",
        "description": "\"The Gulag Archipelago\" is a comprehensive and stark account of the Soviet Union's forced labor camp system. The narrative, based on the author's own experiences as a prisoner and on extensive research, documents the history, operation, and life inside the Gulag system. It also provides a critical examination of the regime's legal system, police operations, and political leadership. The book is an intense indictment of the Soviet Union's totalitarian regime, revealing its brutality, inhumanity, and vast scale of its prison camp network.",
        "id": 133,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "survival"
        ]
    },
    {
        "title": "If This Is a Man",
        "author": "Primo Levi",
        "description": "This book is a deeply moving and insightful memoir of a survivor of Auschwitz, a Nazi concentration camp during World War II. The author, an Italian Jew, provides a detailed account of his life in the camp, the brutal conditions, the dehumanization, and the struggle for survival. The narrative is a profound exploration of the human spirit, resilience, and the will to live, despite unimaginable horror and suffering. It also raises profound questions about humanity, morality, and the capacity for evil.",
        "id": 134,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "italy"
        ],
        "subject": [
            "survival"
        ]
    },
    {
        "title": "Democracy in America",
        "author": "Alexis de Tocqueville",
        "description": "This influential book offers an in-depth analysis of the strengths and weaknesses of 19th century American democracy. The author, a French political thinker, provides a detailed examination of the democratic process and its impact on society, politics, and the economy. The work highlights the importance of civil society, local institutions, and the spirit of equality in ensuring the stability of democracy. It also delves into the dangers of majority tyranny, the potential for democratic despotism, and the critical role of religion and morality in sustaining a democratic nation.",
        "id": 135,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "france"
        ]
    },
    {
        "title": "The Republic",
        "author": "Plato",
        "description": "\"The Republic\" is a philosophical text that explores the concepts of justice, order, and character within the context of a just city-state and a just individual. It presents the idea of a utopian society ruled by philosopher-kings, who are the most wise and just. The dialogue also delves into theories of education, the nature of reality, and the role of the philosopher in society. It is a fundamental work in Western philosophy and political theory.",
        "id": 136,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "Fear and Loathing in Las Vegas",
        "author": "Hunter S. Thompson",
        "description": "This book is a semi-autobiographical novel that chronicles the adventures of a journalist and his attorney as they embark on a drug-fueled trip to Las Vegas. The narrative is a wild and hallucinatory exploration of the American Dream, filled with biting social commentary and outrageous antics. The protagonist's quest for the American Dream quickly devolves into an exploration of the darker side of human nature, highlighting the excesses and depravities of 1960s American society.",
        "id": 137,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "The Structure of Scientific Revolutions",
        "author": "Thomas Kuhn",
        "description": "This influential book examines the history of science, focusing on the process of scientific revolutions. The author argues that scientific progress is not a linear, continuous accumulation of knowledge, but rather a series of peaceful interludes punctuated by intellectually violent revolutions. During these revolutions, known as paradigm shifts, the old scientific worldview is replaced by a new one. The book also popularized the term 'paradigm shift' and challenged the previously accepted view of science as a steadily progressive discipline.",
        "id": 138,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "The Life of Samuel Johnson",
        "author": "James Boswell",
        "description": "\"The Life of Samuel Johnson\" is a comprehensive biography that chronicles the life of one of the most prominent English literary figures of the 18th century. The book provides an in-depth account of Samuel Johnson's life, his literary works, and his significant contribution to English literature. It also offers a detailed portrait of his personality, his relationships, his struggles with depression and illness, and his views on a variety of subjects. The book is as much a biography of Johnson as it is a portrayal of 18th-century England.",
        "id": 139,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "The Confessions of Jean-Jacques Rousseau",
        "author": "Jean-Jacques Rousseau",
        "description": "\"The Confessions of Jean-Jacques Rousseau\" is an autobiographical work by a prominent philosopher of the Enlightenment era, who candidly shares his life story, from his humble beginnings in Geneva to his later years in exile. The book delves into his personal struggles, his intellectual journey, and his relationships, all while exploring his philosophical ideas on education, politics, and morality. The author's introspective narrative provides a unique perspective on his life and times, making it a seminal work in the history of autobiography.",
        "id": 140,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "Thus Spake Zarathustra",
        "author": "Friedrich Nietzsche",
        "description": "This philosophical novel explores the idea of the Übermensch, or \"Overman,\" a superior human being who has achieved self-mastery and created personal meaning in life. The protagonist, Zarathustra, descends from his solitary life in the mountains to share his wisdom with humanity. Through a series of speeches and encounters, he challenges traditional beliefs about good, evil, truth, and religion, and advocates for the transcendence of man into a higher form of existence. The book is noted for its critique of morality, its poetic and often cryptic language, and its exploration of complex philosophical concepts.",
        "id": 141,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Let Us Now Praise Famous Men",
        "author": "James Agee",
        "description": "This book is an in-depth examination of the lives of three tenant families in the South during the Great Depression. The author combines detailed descriptions, journalistic reporting, and poetic prose to capture the harsh realities of poverty, racial discrimination, and the struggle for survival. The book also includes evocative photographs that further illustrate the living conditions and daily lives of the families. The work is a profound exploration of the human condition, offering a raw and unflinching look at the effects of economic and social injustice.",
        "id": 142,
        "genre": [
            "nonfiction"
        ]
    },
    {
        "title": "2666",
        "author": "Roberto Bolaño",
        "description": "The novel is a sprawling, ambitious work that spans continents and time periods, centering around an elusive, reclusive German author. It intertwines five different narratives: a group of European academics searching for the author, a professor in Mexico dealing with his own personal crises, a New York reporter sent to cover a boxing match in Mexico, an African-American journalist in Detroit, and the horrifying and unsolved murders of hundreds of women in a Mexican border town. The narratives are linked by themes of violence, mystery, and the search for meaning in a chaotic world.",
        "id": 143,
        "genre": [
            "thrillers"
        ]
    },
    {
        "title": "The Daughter of Time",
        "author": "Josephine Tey",
        "description": "A detective, laid up in the hospital, becomes fascinated with a portrait of Richard III, the historical figure accused of murdering his nephews to secure his throne. He decides to apply his investigative skills to delve into the mystery, using historical documents and records as his clues. As he pieces together the puzzle, he begins to question the accepted narrative of Richard as a villain, suggesting that this image was a fabrication by the Tudors to legitimize their own claim to the throne.",
        "id": 144,
        "genre": [
            "thrillers"
        ]
    },
    {
        "title": "The Quiet American",
        "author": "Graham Greene",
        "description": "Set during the French colonial war in Vietnam, this novel follows a British journalist and a young American idealist who become friends and find themselves in a love triangle with a Vietnamese woman. As the war escalates, the journalist becomes disillusioned with the American's naïve political views and the destructive impact of foreign intervention. The story is a critique of American involvement in Vietnam, exploring themes of love, friendship, and moral ambiguity.",
        "id": 145,
        "genre": [
            "thrillers"
        ]
    },
    {
        "title": "The Postman Always Rings Twice",
        "author": "James M. Cain",
        "description": "This novel is a thrilling tale of passion, murder, and betrayal. The story revolves around a drifter who becomes involved in an adulterous affair with a married woman. Together, they plot to kill her older husband for the insurance money. However, their plan spirals out of control, leading to unexpected consequences and a shocking conclusion. The narrative explores themes of lust, greed, and the destructive power of obsession.",
        "id": 146,
        "genre": [
            "thrillers"
        ]
    },
    {
        "title": "Casino Royale",
        "author": "Ian Fleming",
        "description": "A British secret agent is tasked with bankrupting a French communist and paymaster of a Russian secret agency at a high-stakes card game in a casino. As he navigates the dangerous world of espionage, he encounters a beautiful woman who is being blackmailed by the enemy. The agent must outwit his opponents and survive numerous attempts on his life, all while grappling with his growing feelings for the woman.",
        "id": 147,
        "genre": [
            "thrillers"
        ],
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "description": "In this epic poem, the protagonist embarks on an extraordinary journey through Hell (Inferno), Purgatory (Purgatorio), and Paradise (Paradiso). Guided by the ancient Roman poet Virgil and his beloved Beatrice, he encounters various historical and mythological figures in each realm, witnessing the eternal consequences of earthly sins and virtues. The journey serves as an allegory for the soul's progression towards God, offering profound insights into the nature of good and evil, free will, and divine justice.",
        "id": 148,
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "love"
        ]
    },
    {
        "title": "The Trial",
        "author": "Franz Kafka",
        "description": "The book revolves around a bank clerk who wakes one morning to find himself under arrest for an unspecified crime. Despite not being detained, he is subjected to the psychological torment of a bizarre and nightmarish judicial process. The story is a critique of bureaucracy, exploring themes of guilt, alienation and the inefficiency of the justice system.",
        "id": 149,
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "The Little Prince",
        "author": "Antoine de Saint-Exupéry",
        "description": "A young prince from a tiny asteroid embarks on a journey across the universe, visiting various planets and meeting their strange inhabitants. Along the way, he learns about the follies and absurdities of the adult world, the nature of friendship, and the importance of retaining a childlike wonder and curiosity. His journey eventually leads him to Earth, where he befriends a fox and learns about love and loss before finally returning to his asteroid.",
        "id": 150,
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "description": "Set in a dystopian future, the novel explores a society where human beings are genetically bred and pharmaceutically conditioned to serve in a ruling order. The society is divided into five castes, each with its specific roles. The narrative follows a savage who rejects the norms of this new world order and struggles to navigate the clash between the values of his upbringing and the reality of this technologically advanced, emotionless society. His resistance prompts a deep examination of the nature of freedom, individuality, and happiness.",
        "id": 151,
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "The Life And Opinions Of Tristram Shandy",
        "author": "Laurence Sterne",
        "description": "The book is a humorous and digressive narrative that follows the eccentric life of Tristram Shandy, who recounts his own story in a non-linear fashion. It delves into the whimsical and often absurd experiences of his family and friends, blending satire, wit, and philosophical musings. The narrative frequently deviates into various anecdotes, reflections, and character studies, creating a rich tapestry of 18th-century life and thought. Through its unconventional structure and playful prose, the book challenges traditional storytelling conventions and explores the complexities of human nature and perception.",
        "id": 152,
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "religion",
            "war"
        ]
    },
    {
        "title": "Animal Farm",
        "author": "George Orwell",
        "description": "\"Animal Farm\" is a satirical fable set on a farm where the animals revolt, overthrow their human farmer, and take over the running of the farm for themselves. The story is an allegory of the Russian Revolution and the rise of Stalin, and the tale is told by the animals that inhabit the farm, primarily pigs who become the ruling class. Despite their initial attempts at creating an equal society, corruption and power ultimately lead to a regime as oppressive as the one they overthrew.",
        "id": 153,
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "Slaughterhouse-Five",
        "author": "Kurt Vonnegut",
        "description": "The novel follows the life of Billy Pilgrim, a World War II veteran who has become \"unstuck in time,\" experiencing his life events out of order. This includes his experiences as a prisoner of war in Dresden during the Allies' firebombing, his post-war life as a successful optometrist, his abduction by aliens from the planet Tralfamadore, and his eventual death. The book is a critique of war and a demonstration of the destructive nature of time, with a nonlinear narrative that reflects the chaos and unpredictability of life.",
        "id": 154,
        "setting": [
            "fictional-location",
            "germany"
        ],
        "subject": [
            "survival",
            "war"
        ]
    },
    {
        "title": "Gulliver's Travels",
        "author": "Jonathan Swift",
        "description": "This classic satire follows the travels of a surgeon and sea captain who embarks on a series of extraordinary voyages. The protagonist first finds himself shipwrecked on an island inhabited by tiny people, later discovers a land of giants, then encounters a society of intelligent horses, and finally lands on a floating island of scientists. Through these bizarre adventures, the novel explores themes of human nature, morality, and society, offering a scathing critique of European culture and the human condition.",
        "id": 155,
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "politics"
        ]
    },
    {
        "title": "Dune",
        "author": "Frank Herbert",
        "description": "Set in a distant future, the novel follows Paul Atreides, whose family assumes control of the desert planet Arrakis. As the only producer of a highly valuable resource, jurisdiction over Arrakis is contested among competing noble families. After Paul and his family are betrayed, the story explores themes of politics, religion, and man’s relationship to nature, as Paul leads a rebellion to restore his family's reign.",
        "id": 156,
        "setting": [
            "fictional-location",
            "united-states"
        ],
        "subject": [
            "betrayal",
            "politics",
            "religion",
            "survival"
        ]
    },
    {
        "title": "The Aeneid",
        "author": "Virgil",
        "description": "This epic poem tells the story of Aeneas, a Trojan who travels to Italy, where he becomes the ancestor of the Romans. It includes a series of prophecies about Rome's future and the deeds of heroic individuals, and is divided into two sections, the first illustrating the hero's journey and the second detailing the wars and battles that ensue as Aeneas attempts to establish a new home in Italy. The narrative is deeply imbued with themes of duty, fate, and divine intervention.",
        "id": 157,
        "setting": [
            "fictional-location",
            "italy"
        ],
        "subject": [
            "betrayal",
            "love",
            "war"
        ]
    },
    {
        "title": "Lord of the Flies",
        "author": "William Golding",
        "description": "A group of British boys are stranded on an uninhabited island after their plane crashes during wartime. Initially, they attempt to establish order, creating rules and electing a leader. However, as time passes, their civility erodes, and they descend into savagery and chaos. The struggle for power intensifies, leading to violence and death. The novel explores themes of innocence, the inherent evil in mankind, and the thin veneer of civilization.",
        "id": 158,
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "survival"
        ]
    },
    {
        "title": "The Handmaid's Tale",
        "author": "Margaret Atwood",
        "description": "Set in a dystopian future, this novel presents a society where women are stripped of their rights and are classified into various roles based on their fertility and societal status. The protagonist is a handmaid, a class of women used solely for their reproductive capabilities by the ruling class. The story is a chilling exploration of the extreme end of misogyny, where women are reduced to their biological functions, and a critique of religious fundamentalism.",
        "id": 159,
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "relationships",
            "religion"
        ]
    },
    {
        "title": "Charlotte's Web",
        "author": "E. B. White",
        "description": "A young girl named Fern saves a runt piglet from being slaughtered and names him Wilbur. When Wilbur grows too large, he is sent to live in her uncle's barn, where he befriends a clever spider named Charlotte. When Wilbur's life is in danger again, Charlotte weaves messages into her web to convince the farmer that Wilbur is too special to kill. The book explores themes of friendship, sacrifice, and the cycle of life.",
        "id": 160,
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "The Metamorphosis",
        "author": "Franz Kafka",
        "description": "The book tells the story of a man who wakes up one morning to find himself transformed into a giant insect. His transformation causes him to lose his job and become ostracized from his family, who are horrified and repulsed by his new form. As he grapples with his new reality, he becomes increasingly isolated and starts to lose his sense of humanity. The book explores themes of alienation, guilt, and identity, and is a profound examination of the human condition.",
        "id": 161,
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "The Castle",
        "author": "Franz Kafka",
        "description": "This novel presents the story of a man who arrives in a village and struggles to gain access to the mysterious authorities who govern it from a castle. The protagonist, a surveyor, faces the constant frustration of his efforts to make contact with the elusive authorities and integrate into village society. The book explores themes of alienation, bureaucracy, the seemingly endless frustrations of man's attempts to stand against the system, and the futile pursuit of an unobtainable goal.",
        "id": 162,
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "The Wind in the Willows",
        "author": "Kenneth Grahame",
        "description": "\"The Wind in the Willows\" is a charming tale about the adventures of four anthropomorphic animal friends - Mole, Rat, Badger, and the rebellious and extravagant Toad. The story is set in the idyllic English countryside and explores themes of friendship, exploration, and respect for nature. The narrative is marked by Toad's reckless behavior, his obsession with motor cars, and his eventual redemption. The other characters, with their contrasting personalities, bring balance and depth to the story.",
        "id": 163,
        "setting": [
            "fictional-location"
        ]
    },
    {
        "title": "The Sun Also Rises",
        "author": "Ernest Hemingway",
        "description": "The novel is a poignant tale set in the 1920s post-World War I era, focusing on a group of American and British expatriates living in Paris who travel to Pamplona, Spain for the annual Running of the Bulls. The story explores themes of disillusionment, identity, and the Lost Generation, with the protagonist, a war veteran, grappling with impotence caused by a war injury. The narrative is steeped in the disillusionment and existential crisis experienced by many in the aftermath of the war, and the reckless hedonism of the era is portrayed through the characters' aimless wanderings and excessive drinking.",
        "id": 164,
        "setting": [
            "france",
            "united-states"
        ],
        "subject": [
            "love",
            "relationships",
            "war"
        ]
    },
    {
        "title": "Journey to the End of The Night",
        "author": "Louis-Ferdinand Céline",
        "description": "The novel is a semi-autobiographical work that explores the harsh realities of life through the cynical and disillusioned eyes of the protagonist. The narrative follows his experiences from the trenches of World War I, through the African jungles, to the streets of America and the slums of Paris, showcasing the horrors of war, colonialism, and the dark side of human nature. The protagonist's journey is marked by his struggle with despair, loneliness, and the absurdity of existence, offering a bleak yet profound commentary on the human condition.",
        "id": 165,
        "setting": [
            "france"
        ],
        "subject": [
            "war"
        ]
    },
    {
        "title": "Candide",
        "author": "Voltaire",
        "description": "\"Candide\" is a satirical novel that follows the adventures of a young man, Candide, who is living a sheltered life in an Edenic paradise and being indoctrinated with Leibnizian optimism by his mentor. When he is expelled from the paradise for kissing a baron's daughter, he embarks on a journey around the world, witnessing the horrors of war, natural disasters, and human cruelty. Throughout his journey, Candide maintains his optimistic philosophy, despite the constant hardships he faces, ultimately concluding that one must cultivate their own garden, a metaphor for taking control of one's own destiny.",
        "id": 166,
        "setting": [
            "france",
            "germany",
            "italy"
        ],
        "subject": [
            "religion",
            "war"
        ]
    },
    {
        "title": "The Three Musketeers",
        "author": "Alexandre Dumas",
        "description": "Set in 17th century France, the novel follows the adventures of a young man who leaves home to join the Musketeers of the Guard. He befriends three of the most daring musketeers, Athos, Porthos, and Aramis, and together, they navigate political intrigue, love affairs, and duels. Their main enemies are the powerful Cardinal Richelieu and the beautiful but treacherous Milady, who will stop at nothing to bring them down.",
        "id": 167,
        "setting": [
            "france"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "Tender Is the Night",
        "author": "F. Scott Fitzgerald",
        "description": "Set in the French Riviera in the 1920s, the novel traces the tragic tale of a young psychiatrist, his beautiful wife, and the drama that unfolds amongst their circle of wealthy expatriate friends. The psychiatrist's wife suffers from mental illness, which leads to his own downfall as he struggles to keep his marriage intact and maintain his professional reputation. The narrative explores themes of wealth, love, desire, and the destructive power of obsession, painting a haunting portrait of the dark side of the glamorous Jazz Age.",
        "id": 168,
        "setting": [
            "france"
        ]
    },
    {
        "title": "A Sentimental Education",
        "author": "Gustave Flaubert",
        "description": "A Sentimental Education is a classic French novel set in the mid-19th century, focusing on the life of a young man named Frederic Moreau. Frederic, from a provincial background, moves to Paris and becomes infatuated with an older woman, Madame Arnoux. The novel traces Frederic's life and romantic pursuits, as well as his friendships and experiences in Paris, against the backdrop of significant historical events like the 1848 Revolution. The story is a critique of the French middle class and their materialistic values, illustrating the disillusionment and moral corruption of the time.",
        "id": 169,
        "setting": [
            "france"
        ],
        "subject": [
            "politics"
        ]
    },
    {
        "title": "Giovanni's Room",
        "author": "James Baldwin",
        "description": "The novel explores themes of identity, sexuality, and societal norms in mid-20th century Paris. The protagonist, an American man, grapples with his homosexual identity while engaged to a woman. His life takes a turn when he becomes involved with an Italian bartender, leading to a tumultuous relationship filled with passion, guilt, and self-loathing. The story is a poignant examination of the human struggle for acceptance and the destructive consequences of denying one's true self.",
        "id": 170,
        "setting": [
            "france"
        ]
    },
    {
        "title": "The Flowers of Evil",
        "author": "Charles Baudelaire",
        "description": "\"The Flowers of Evil\" is a collection of poems that explore themes of decadence and eroticism, and the changing nature of beauty in the rapidly industrializing Paris during the 19th century. The work is renowned for its exploration of the paradoxes of pleasure and pain, the exotic and the commonplace, and the boundaries of morality and aesthetics. The poems challenge traditional notions of good and evil, suggesting that beauty can be found in unexpected and even disturbing places.",
        "id": 171,
        "setting": [
            "france"
        ]
    },
    {
        "title": "Bonjour Tristesse",
        "author": "Francoise Sagan",
        "description": "This novel centers around a 17-year-old girl living with her playboy father in the French Riviera. The pair lead a carefree, hedonistic lifestyle until the father decides to remarry, causing the protagonist to hatch a plan to prevent the marriage and return to their old way of life. The story explores themes of youth, love, and the struggle between desire and morality.",
        "id": 172,
        "setting": [
            "france"
        ]
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "description": "Set against the backdrop of the French Revolution, this classic novel explores themes of class struggle, sacrifice, and resurrection. The narrative follows the lives of several characters, including a dissipated English lawyer, a man who is a long-term prisoner in the Bastille, and a woman who becomes embroiled in the political turmoil of the time. The story is a riveting tale of love and sacrifice, with the infamous guillotine looming in the background, symbolizing the violence and unrest of the era.",
        "id": 173,
        "setting": [
            "france"
        ]
    },
    {
        "title": "Of Human Bondage",
        "author": "W. Somerset Maugham",
        "description": "The novel follows the life of Philip Carey, a club-footed orphan who struggles with his disability and his passionate and unrequited love for a destructive woman. His journey takes him from a strict religious upbringing in England to an adventurous life in Paris where he attempts to become an artist before finally settling into a career in medicine. The story is a powerful exploration of human desire, ambition, and the search for meaning in life.",
        "id": 174,
        "setting": [
            "france"
        ]
    },
    {
        "title": "A Season in Hell",
        "author": "Arthur Rimbaud",
        "description": "\"A Season in Hell\" is a deeply introspective work, exploring the author's tumultuous life and struggles through a series of prose poems. The author grapples with his own moral crisis, spiritual torment and the anguish of unrequited love, while also critiquing society and the human condition. This journey through despair and redemption, filled with vivid and surreal imagery, is considered one of the pioneering works of Symbolist literature.",
        "id": 175,
        "setting": [
            "france"
        ]
    },
    {
        "title": "The Counterfeiters",
        "author": "André Gide",
        "description": "\"The Counterfeiters\" is a complex novel that explores themes of authenticity, morality, and identity, primarily through the lens of a group of friends in Paris. The story revolves around a series of counterfeit coins, which serve as a metaphor for the characters' struggles with their own authenticity and self-perception. The narrative also delves into the lives of the characters, their relationships, personal struggles, and their journey towards self-discovery. The book is noted for its non-linear structure and metafictional elements, with the author himself being a character in the story.",
        "id": 176,
        "setting": [
            "france"
        ]
    },
    {
        "title": "The Lover",
        "author": "Marguerite Duras",
        "description": "\"The Lover\" is a poignant exploration of forbidden love, power dynamics, and colonialism. Set in 1930s French Indochina, it tells the story of a tumultuous and passionate affair between a 15-year-old French girl and her wealthy, older Chinese lover. The narrative delves into the complexities of their relationship, the societal norms they defy, and the inevitable heartbreak that follows. The protagonist's struggle with her family's poverty and her mother's mental instability further complicates the story, making it a compelling exploration of love, desire, and societal constraints.",
        "id": 177,
        "setting": [
            "france"
        ]
    },
    {
        "title": "Dangerous Liaison",
        "author": "Pierre Choderlos de Laclos",
        "description": "\"Dangerous Liaison\" is a tale of manipulation, revenge, and seduction set in the French aristocracy before the French Revolution. The novel follows the Marquise de Merteuil and the Vicomte de Valmont, two rivals who use sex as a weapon to humiliate and degrade others, all the while enjoying their cruel games. Their targets are the virtuous (and married) Madame de Tourvel and the young Cecile de Volanges. The book is a dramatic exploration of decadence, corruption, and ultimate retribution.",
        "id": 178,
        "setting": [
            "france"
        ]
    },
    {
        "title": "The Idiot",
        "author": "Fyodor Dostoevsky",
        "description": "The book follows the story of a kind-hearted and naive protagonist who returns to Russia from a Swiss sanatorium, where he was treated for a severe epileptic condition. Despite his pure intentions, he gets entangled in a web of love, greed, and manipulation, leading to tragic consequences. The novel explores themes of innocence, love, sacrifice, and societal expectations, offering a profound critique of Russian society during the 19th century.",
        "id": 179,
        "setting": [
            "germany",
            "russia"
        ]
    },
    {
        "title": "Faust",
        "author": "Johann Wolfgang von Goethe",
        "description": "The book is a tragic play in two parts that tells the story of a scholarly man named Faust, who becomes dissatisfied with his life and makes a pact with the devil, Mephistopheles. In exchange for unlimited knowledge and worldly pleasures, Faust agrees to give his soul to Mephistopheles after death. The narrative explores themes of ambition, despair, love, and redemption, ultimately leading to Faust's salvation.",
        "id": 180,
        "setting": [
            "germany"
        ],
        "subject": [
            "religion"
        ]
    },
    {
        "title": "Doctor Faustus",
        "author": "Thomas Mann",
        "description": "The novel is a reimagining of the Faust legend set in the context of the first half of the 20th century and the turmoil of Germany in that period. It tells the story of a composer who makes a pact with the devil, exchanging his soul for unlimited creative genius. The protagonist's life and work reflect the cultural and political journey of Germany leading up to World War II, providing a deep exploration of the individual's role in a society undergoing dramatic change. The novel is also a profound meditation on the nature of time, the art and the artist, and the destructiveness of human ambition.",
        "id": 181,
        "setting": [
            "germany"
        ],
        "subject": [
            "politics"
        ]
    },
    {
        "title": "Lord Jim",
        "author": "Joseph Conrad",
        "description": "The novel revolves around a young, idealistic British seaman, who commits a crime of cowardice at sea. He abandons his ship, leaving hundreds of passengers to their fate. He is publicly censured for this act and spends the rest of his life in shameful obscurity in the South Seas, trying to repress the guilt of his past and regain his lost honor. His quest for redemption leads him to a remote island where he gets a chance to prove his courage, but his tragic flaw ultimately leads to his downfall.",
        "id": 182,
        "setting": [
            "germany"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "Steppenwolf",
        "author": "Hermann Hesse",
        "description": "The novel presents a poignant exploration of a man's struggle with his dual nature. The protagonist, a middle-aged man, finds himself torn between his humanistic, intellectual tendencies and his more primitive, wolf-like instincts. As he navigates his way through the surreal and sometimes hallucinatory world, he encounters various characters who challenge his views and push him towards self-discovery and transformation. The narrative delves into themes of alienation, the subconscious mind, and the search for meaning in life.",
        "id": 183,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Berlin Alexanderplatz",
        "author": "Alfred Döblin",
        "description": "Set in 1920s Berlin, the book follows the life of Franz Biberkopf, a man recently released from prison who is trying to make an honest life for himself. However, he is drawn back into the criminal underworld due to circumstances and the influence of his acquaintance, Reinhold. The book is a vivid portrayal of city life in Weimar-era Germany, exploring themes of poverty, crime, redemption and the struggle to maintain one's morality amidst chaos and corruption.",
        "id": 184,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Siddhartha",
        "author": "Hermann Hesse",
        "description": "\"Siddhartha\" is a novel about the spiritual journey of a young man named Siddhartha during the time of Gautama Buddha. Born into an Indian Brahmin family, Siddhartha rejects his privileged life to seek spiritual enlightenment. His journey takes him through periods of harsh asceticism, sensual indulgence, material wealth, and finally, to the simple life of a ferryman on a river where he finds peace and wisdom. The book explores themes of self-discovery, spiritual quest, and the desire for a meaningful life.",
        "id": 185,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Independent People",
        "author": "Halldor Laxness",
        "description": "\"Independent People\" is a novel set in rural Iceland, following the life of a stubborn sheep farmer who values his independence above all else. Despite facing numerous hardships, including poverty, harsh weather, and family strife, he refuses to accept help or compromise his self-reliance. The book explores themes of pride, the struggle for survival, and the human spirit's resilience in the face of adversity.",
        "id": 186,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Labyrinths",
        "author": "Jorge Luis Borges",
        "description": "\"Labyrinths\" is a collection of short stories and essays that explore complex themes of infinity, parallel universes, and the blurred lines between reality and illusion. The narratives often feature protagonists who are scholars or librarians, trapped in surreal, metaphysical landscapes. The author's unique writing style combines elements of magical realism, philosophy, and detective fiction, creating an intricate web of narratives that challenge the reader's perception of reality and fiction.",
        "id": 187,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Relativity",
        "author": "Albert Einstein",
        "description": "This book is a comprehensive introduction to the theory of relativity written by the physicist who developed the theory. It covers both the special and general theories of relativity and provides an accessible explanation of the physics involved, including the nature of light, time, and gravity. The book also discusses the philosophical implications of relativity and its impact on our understanding of reality. Written for a general audience, it aims to make complex scientific concepts understandable to non-experts.",
        "id": 188,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "The Sorrows of Young Werther",
        "author": "Johann Wolfgang von Goethe",
        "description": "This classic novel follows the emotional journey of a young artist named Werther, who falls deeply in love with a beautiful woman named Lotte, only to discover that she is already engaged to another man. His unrequited love and deep despair eventually lead him to take his own life. The story, told through letters written by Werther, explores themes of love, loss, and the tragic consequences of emotional turmoil.",
        "id": 189,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Jude the Obscure",
        "author": "Thomas Hardy",
        "description": "This novel tells the story of Jude Fawley, a working-class young man who dreams of becoming a scholar. The traditional class structure in 19th-century England prevents him from realizing his dream and his only solace is his love for his cousin, Sue Bridehead. Their scandalous relationship and the tragic events that follow form the heart of the narrative, which explores themes of love, class, religion, and morality.",
        "id": 190,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Austerlitz",
        "author": "W. G. Sebald",
        "description": "The novel follows the story of Jacques Austerlitz, an architectural historian who was brought to England on a Kindertransport from Czechoslovakia during World War II. As an adult, Jacques embarks on a journey to uncover his past, including his original identity, his parent's fate, and his own lost history. The narrative is a haunting exploration of memory, identity, and the lasting impact of the Holocaust.",
        "id": 191,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Critique of Pure Reason",
        "author": "Immanuel Kant",
        "description": "This philosophical work delves into the nature and limits of human knowledge, proposing that while our knowledge begins with experience, it doesn't necessarily arise out of experience. The author argues that pure reason itself has the ability to contribute to our knowledge and understanding of the universe. He further explores the concept of metaphysics, asserting that while it is possible, it is also severely limited by the human mind's ability to comprehend it.",
        "id": 192,
        "setting": [
            "germany"
        ]
    },
    {
        "title": "Catch-22",
        "author": "Joseph Heller",
        "description": "The book is a satirical critique of military bureaucracy and the illogical nature of war, set during World War II. The story follows a U.S. Army Air Forces B-25 bombardier stationed in Italy, who is trying to maintain his sanity while fulfilling his service requirements so that he can go home. The novel explores the absurdity of war and military life through the experiences of the protagonist, who discovers that a bureaucratic rule, the \"Catch-22\", makes it impossible for him to escape his dangerous situation. The more he tries to avoid his military assignments, the deeper he gets sucked into the irrational world of military rule.",
        "id": 193,
        "setting": [
            "italy",
            "united-states"
        ],
        "subject": [
            "survival",
            "war"
        ]
    },
    {
        "title": "The Portrait of a Lady",
        "author": "Henry James",
        "description": "This classic novel explores the life of a young, independent American woman who inherits a large amount of money and moves to Europe, where she falls into a manipulative and oppressive marriage. The story delves into themes of personal freedom, responsibility, and betrayal, as the protagonist navigates the complexities of high society, love, and the consequences of her choices.",
        "id": 194,
        "setting": [
            "italy"
        ],
        "subject": [
            "betrayal",
            "love",
            "relationships"
        ]
    },
    {
        "title": "A Farewell to Arms",
        "author": "Ernest Hemingway",
        "description": "Set during World War I, the novel follows an American ambulance driver in the Italian army and his love affair with a British nurse. The story is a first-person account of the protagonist's experiences in war and his struggle to survive amidst chaos and destruction. The narrative explores themes of love, war, and the fragility of life, culminating in a tragic ending that underscores the futile nature of war and the inevitable suffering it brings.",
        "id": 195,
        "setting": [
            "italy"
        ],
        "subject": [
            "relationships",
            "war"
        ]
    },
    {
        "title": "The Charterhouse of Parma",
        "author": "Stendhal",
        "description": "The novel follows the life of a young Italian nobleman, who, driven by romantic ideals and a thirst for adventure, leaves his comfortable life to join Napoleon's army. After surviving many trials and tribulations, he returns home to a life of political intrigue, love affairs, and power struggles in the court of Parma. The narrative provides a vivid and satirical depiction of the political and social life in Italy during the 19th century.",
        "id": 196,
        "setting": [
            "italy"
        ],
        "subject": [
            "betrayal",
            "politics",
            "war"
        ]
    },
    {
        "title": "Decameron",
        "author": "Giovanni Boccaccio",
        "description": "\"Decameron\" is a collection of 100 stories told by a group of seven young women and three young men sheltering in a secluded villa just outside Florence to escape the Black Death, which was afflicting the city. The tales, which range from the erotic to the tragic, the hilarious to the instructional, are embedded in a rich framework narrative that provides a detailed portrait of the society of the Italian Renaissance.",
        "id": 197,
        "setting": [
            "italy"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "Memoirs of Hadrian",
        "author": "Marguerite Yourcenar",
        "description": "\"Memoirs of Hadrian\" is a historical novel that presents a fictional autobiography of the Roman Emperor Hadrian, who reigned from 117 to 138 AD. Narrated in the first person, the novel explores Hadrian's ascension to the throne, his administration, his love for the young Antinous, and his philosophical reflections on life and death. The narrative is framed as a letter to his successor, Marcus Aurelius, offering insights into the complexities of power, the nature of leadership, and the human condition.",
        "id": 198,
        "setting": [
            "italy"
        ],
        "subject": [
            "politics"
        ]
    },
    {
        "title": "First Folio",
        "author": "William Shakespeare",
        "description": "This collection is a compilation of 36 plays by a renowned English playwright, published seven years after his death. It includes comedies, histories, and tragedies, some of which had never been published before. Notable works in the compilation include \"Macbeth,\" \"Julius Caesar,\" \"Twelfth Night,\" \"The Tempest,\" and \"As You Like It.\" The collection is considered one of the most influential books ever published in the English language, as it preserved many of the playwright's works that might have otherwise been lost.",
        "id": 199,
        "setting": [
            "italy",
            "russia",
            "united-kingdom"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "Confessions of Zeno",
        "author": "Italo Svevo",
        "description": "\"Confessions of Zeno\" is a satirical, semi-autobiographical novel that follows the life of Zeno Cosini, a neurotic Italian businessman, as he tries to quit smoking. The book is presented as a diary, written at the suggestion of Zeno's psychoanalyst, and it details Zeno's thoughts on his health, his family, his business ventures, and his infatuation with a beautiful woman. Throughout the story, Zeno's attempts to quit smoking serve as a metaphor for his struggles with his personal weaknesses and his quest for self-understanding.",
        "id": 200,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "The Tempest",
        "author": "William Shakespeare",
        "description": "\"The Tempest\" is a classic play about a sorcerer and rightful Duke of Milan who has been stranded on an island for 12 years with his daughter after being betrayed by his brother. Using his magical powers and the help of an airy spirit, he conjures a storm to shipwreck his brother and other enemies on the island. The narrative explores themes of revenge, power, magic, and forgiveness as the sorcerer manipulates events on the island to regain his dukedom and secure a good future for his daughter.",
        "id": 201,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "Death of Virgil",
        "author": "Hermann Broch",
        "description": "The novel explores the final hours of the Roman poet Virgil, who, while on his deathbed, contemplates the value and impact of his life's work, particularly his unfinished epic, the Aeneid. The narrative is a complex, stream-of-consciousness meditation on art, life, and death, with Virgil wrestling with his desire to burn his epic and the emperor's command to preserve it. The book delves into themes of the meaning of human existence, the role of art in society, and the clash between the individual's inner world and the external world.",
        "id": 202,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "A Room With a View",
        "author": "E. M. Forster",
        "description": "Set in Italy and England, the novel tells the story of a young English woman, Lucy Honeychurch, who travels to Florence with her older cousin and chaperone. During her stay in Italy, Lucy meets and falls in love with a free-spirited man, but due to societal pressures, she becomes engaged to a wealthy but pretentious man back home in England. The novel explores themes of societal norms, personal growth, and the struggle between heart and mind as Lucy must decide between conforming to societal expectations or following her own desires.",
        "id": 203,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "Meditations",
        "author": "Marcus Aurelius",
        "description": "\"Meditations\" is a collection of personal writings by a Roman Emperor, providing deep insights into Stoic philosophy. The book is a series of introspective reflections on how to deal with life's challenges with wisdom, integrity, self-discipline, and benevolent affection for all mankind. It serves as a manual for self-improvement and moral guidance, emphasizing the importance of accepting things outside of one's control and maintaining a tranquil mind amidst adversity.",
        "id": 204,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "Wings of the Dove",
        "author": "Henry James",
        "description": "This novel centers around a young woman, Milly Theale, who is terminally ill and wealthy. She becomes the object of a conspiracy by two other characters, Kate Croy and Merton Densher, who are in love but too poor to marry. Kate manipulates the situation so that Densher becomes close to Milly, intending for him to marry her and inherit her wealth when she dies. However, Densher eventually falls in love with Milly, leading to a complex triangle of love, deceit, and moral ambiguity.",
        "id": 205,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "Murder on the Orient Express",
        "author": "Agatha Christie",
        "description": "A renowned Belgian detective finds himself embroiled in a complex murder case aboard the luxurious Orient Express train. The victim is a wealthy American businessman with numerous enemies, and the train's diverse passenger list includes individuals of varying nationalities and backgrounds, each with their own secrets. As the train is halted due to a snowdrift, the detective must race against time to solve the murder before the train reaches its destination and the murderer has a chance to escape.",
        "id": 206,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "I, Claudius",
        "author": "Robert Graves",
        "description": "This historical novel is a first-person narrative told from the perspective of the Roman Emperor Claudius, who was considered an unlikely ruler due to his physical ailments and perceived lack of intelligence. The story covers the reigns of Augustus, Tiberius, and Caligula before Claudius unexpectedly becomes emperor. The narrative provides a critical look at the corruption, violence, and political machinations of the Roman Empire, offering a unique perspective on history.",
        "id": 207,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "The Second World War",
        "author": "Winston Churchill",
        "description": "This book provides a comprehensive overview of the Second World War from the perspective of one of its most influential leaders. It covers the entire span of the war, from its origins in the political and economic turmoil of the 1930s, to the major battles and strategic decisions that shaped its course, to its aftermath and impact on the world. The author's unique perspective and firsthand experience, combined with his eloquent and insightful writing, make this a definitive account of one of the most important events in modern history.",
        "id": 208,
        "setting": [
            "italy",
            "united-kingdom"
        ]
    },
    {
        "title": "History of My Life",
        "author": "Giacomo Casanova",
        "description": "\"History of My Life\" is an autobiography of an Italian adventurer and author, who is best remembered for his often complicated and elaborate affairs with women. The book offers a fascinating insight into his life, travels, and encounters. It provides an intimate look at the social customs and life of the 18th century, as well as the author's personal philosophies on a variety of subjects, including love, luck, and the importance of maintaining a sense of humor.",
        "id": 209,
        "setting": [
            "italy"
        ]
    },
    {
        "title": "The Master and Margarita",
        "author": "Mikhail Bulgakov",
        "description": "This novel is a complex narrative that weaves together three distinct yet intertwined stories. The first story is set in 1930s Moscow and follows the devil and his entourage as they wreak havoc on the city's literary elite. The second story is a historical narrative about Pontius Pilate and his role in the crucifixion of Jesus Christ. The third story is a love story between the titular Master, a writer who has been driven to madness by the criticism of his work, and his devoted lover, Margarita. The novel is a satirical critique of Soviet society, particularly the literary establishment, and its treatment of artists. It also explores themes of love, sacrifice, and the nature of good and evil.",
        "id": 210,
        "setting": [
            "russia"
        ],
        "subject": [
            "love",
            "politics",
            "religion"
        ]
    },
    {
        "title": "Hamlet",
        "author": "William Shakespeare",
        "description": "This classic play revolves around the young Prince of Denmark who is thrown into a state of emotional turmoil after his father's sudden death and his mother's quick remarriage to his uncle. The prince is visited by the ghost of his father who reveals that he was murdered by the uncle, prompting the prince to seek revenge. The narrative explores themes of madness, revenge, and moral corruption as the prince navigates the complex political and emotional landscape of the Danish court.",
        "id": 211,
        "setting": [
            "russia"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "The Stories of Anton Chekhov",
        "author": "Anton Chekhov",
        "description": "This collection of short stories explores the complexities of human nature and society in 19th-century Russia. Written by a renowned Russian author, the stories range from humorous to tragic, often focusing on the everyday lives and struggles of ordinary people. The author's keen observation and deep understanding of human nature shine through in these tales, making them timeless classics that continue to resonate with readers today.",
        "id": 212,
        "setting": [
            "russia"
        ],
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "Demons",
        "author": "Fyodor Dostoevsky",
        "description": "\"The Possessed\" is a complex political novel set in a provincial Russian town, exploring the destructive influence of radical ideologies on society. The narrative revolves around a group of revolutionaries, their philosophical debates and their destructive actions, driven by nihilism and anarchism. The story is a critique of the political and social chaos of the time, showcasing the author's deep understanding of human psychology and his profound insights into the human condition. It is an exploration of faith, reason, and the nature of freedom and is considered one of the most significant works of Russian literature.",
        "id": 213,
        "setting": [
            "russia"
        ],
        "subject": [
            "betrayal",
            "politics",
            "religion"
        ]
    },
    {
        "title": "One Day in the Life of Ivan Denisovich",
        "author": "Aleksandr Solzhenitsyn",
        "description": "This novel provides a detailed account of a single day in the life of a prisoner, Ivan Denisovich, in a Soviet labor camp in the 1950s. The narrative follows Ivan as he navigates the harsh realities of his daily routine, from the moment he wakes up to when he goes to bed. The book provides a stark portrayal of the brutality and inhumanity of the Soviet gulag system while also highlighting the resilience and dignity of the human spirit under such oppressive conditions.",
        "id": 214,
        "setting": [
            "russia"
        ],
        "subject": [
            "survival",
            "war"
        ]
    },
    {
        "title": "Doctor Zhivago",
        "author": "Boris Pasternak",
        "description": "Set against the tumultuous backdrop of the Russian Revolution, the book follows the life of a physician and poet, Yuri Zhivago, as he navigates the political and social upheaval of the early 20th century. Torn between his love for two women, his wife Tonya and his passionate mistress Lara, Zhivago's personal struggles mirror the larger societal changes occurring around him. The novel explores themes of love, war, and the human spirit, offering a poignant and complex portrait of life during a time of revolutionary change.",
        "id": 215,
        "setting": [
            "russia"
        ],
        "subject": [
            "betrayal",
            "politics",
            "survival",
            "war"
        ]
    },
    {
        "title": "Fathers and Sons",
        "author": "Ivan Turgenev",
        "description": "This classic novel explores the generational divide and ideological clash in 19th century Russia. The story focuses on the relationship between a liberal father and his nihilistic son, who challenges the traditional values and beliefs of his elders. As they navigate their personal differences, the novel delves into broader themes of progress, love, and societal change, offering a poignant commentary on the tension between old and new ideas in a rapidly changing world.",
        "id": 216,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "Oblomov",
        "author": "Ivan Goncharov",
        "description": "The book is a satirical critique of the nobility in 19th century Russia, focusing on the titular character, a lazy and apathetic nobleman who prefers to daydream and live in his own fantasies rather than engage with the real world. His indolence is contrasted with the energetic and ambitious character of his friend who tries to get him involved in societal affairs and business. The protagonist's lethargy and inability to adapt to changing times symbolize the decay and stagnation of the Russian nobility.",
        "id": 217,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "Life and Fate",
        "author": "Vasily Grossman",
        "description": "\"Life and Fate\" is a sweeping epic that explores the human condition during the Siege of Stalingrad in World War II. The novel delves into the lives of a wide range of characters, from soldiers and scientists to children and victims of the Holocaust, providing a stark and unflinching portrayal of the horrors of war, the brutality of totalitarianism, and the resilience of the human spirit. At the same time, it also examines themes of love, loss, and the struggle for freedom and dignity in the face of overwhelming adversity.",
        "id": 218,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "The Death of Ivan Ilyich",
        "author": "Leo Tolstoy",
        "description": "The book is a poignant exploration of mortality and the human condition, focusing on a high-court judge in 19th-century Russia who lives a seemingly successful and conventional life. However, when he is confronted with a terminal illness, he begins to question the meaning and value of his life, leading to an existential crisis and eventual spiritual awakening. Through his struggle, he comes to realize the superficiality of his previous life and the importance of genuine human connection. His story is a profound commentary on the nature of life, death, and the pursuit of happiness.",
        "id": 219,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "A Hero of Our Time",
        "author": "Mikhail Lermontov",
        "description": "\"A Hero of Our Time\" is a novel that follows the life of a young, charismatic, yet cynical and emotionally detached Russian officer, who serves in the Caucasus region. The story is told through a series of narratives, including the officer's own journal entries, revealing his manipulative and self-destructive tendencies. The novel explores themes of disillusionment, morality, and the nature of heroism in the 19th century Russian society.",
        "id": 220,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "Speak, Memory",
        "author": "Vladimir Nabokov",
        "description": "\"Speak, Memory\" is an autobiographical memoir that explores the author's life from his birth in 1899 to his emigration to the United States in 1940. The narrative details his privileged childhood in Russia, his experiences during the Russian Revolution, his time in Europe as an émigré, and his career as a writer and scholar. The book is noted for its intricate descriptions, its exploration of the nature of memory, and its intricate linguistic play.",
        "id": 221,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "Kolyma Stories",
        "author": "Varlam Shalamov",
        "description": "\"Kolyma Stories\" is a collection of short stories that vividly depict the harrowing experiences of prisoners in the Soviet Gulag during the Stalinist era. Written by Varlam Shalamov, a survivor of the Kolyma labor camps himself, the book offers a raw and unflinching portrayal of the inhumane conditions, extreme suffering, and moral degradation endured by the prisoners. Through his powerful and haunting narratives, Shalamov sheds light on the resilience of the human spirit and the indomitable will to survive amidst unimaginable cruelty.",
        "id": 222,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "Notes from the Underground",
        "author": "Fyodor Dostoevsky",
        "description": "This novel is a profound exploration of the human psyche through the eyes of a bitter and isolated retired civil servant living in St. Petersburg. The protagonist, a self-proclaimed \"sick\" and \"spiteful\" man, delves into his past experiences and personal philosophies in a series of rambling and often contradictory monologues. His existential musings touch on themes such as free will, determinism, and the nature of human action, often challenging the prevailing ideologies of his time. The narrative provides a deep and unsettling insight into the darker aspects of human consciousness.",
        "id": 223,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "Eugene Onegin",
        "author": "Alexander Pushkin",
        "description": "\"Eugene Onegin\" is a classic Russian novel in verse that tells the story of a sophisticated and cynical young man, Eugene Onegin, who moves from the city to the country following the death of his uncle. Throughout the novel, Onegin engages in a series of interactions with other characters, including Tatyana, a young country woman who falls in love with him. Despite her sincere love, Onegin rejects Tatyana, leading to a tragic duel with his friend Lensky. The novel is renowned for its exploration of Russian society, love, and the human experience.",
        "id": 224,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "The Cherry Orchard",
        "author": "Anton Chekhov",
        "description": "\"The Cherry Orchard\" is a classic play about an aristocratic Russian woman and her family as they return to their family estate, which includes a large and well-known cherry orchard. The family is on the brink of financial ruin and the estate is slated to be auctioned off. Despite various attempts to save their beloved home and orchard, they are ultimately unable to prevent the sale. The play is a poignant reflection on the changing social order and the decline of the aristocracy in Russia at the turn of the 20th century.",
        "id": 225,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "The Origins of Totalitarianism",
        "author": "Hannah Arendt",
        "description": "The book explores the roots of totalitarian systems, particularly focusing on Nazi Germany and Stalinist Russia. It delves into the historical, social, and political circumstances that led to the rise of these oppressive regimes, including anti-Semitism, imperialism, and the decline of the nation-state. The author further discusses the nature of power, the role of propaganda, and the manipulation of the masses in these systems, providing a comprehensive analysis of totalitarianism.",
        "id": 226,
        "setting": [
            "russia"
        ]
    },
    {
        "title": "Wide Sargasso Sea",
        "author": "Jean Rhys",
        "description": "This novel is a postcolonial prequel to \"Jane Eyre,\" exploring the life of Mr. Rochester's mad wife, Bertha. Set in Jamaica during the 1830s, it follows the story of Antoinette Cosway, a white Creole heiress, from her youth in the Caribbean to her unhappy marriage and move to England. Caught in a society that both rejects and exoticizes her, Antoinette is ultimately driven into madness by her oppressive husband and the haunting legacy of colonialism.",
        "id": 227,
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "The General Theory of Employment, Interest and Money",
        "author": "John Maynard Keynes",
        "description": "This influential economic treatise presents a groundbreaking theory that challenges classical economics, asserting that aggregate demand, driven by public and private sector spending, is the primary factor influencing economic activity and employment levels. The book also introduces the concept of fiscal and monetary policies as tools to manage economic downturns, thus shaping the foundation of modern macroeconomics. It further critiques the idea that market economies would automatically provide full employment and argues for active government intervention to prevent economic recessions and depressions.",
        "id": 228,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "A Vindication of the Rights of Woman",
        "author": "Mary Wollstonecraft",
        "description": "This influential work from the late 18th century argues passionately for the education and societal recognition of women. The author asserts that women are not naturally inferior to men, but appear to be only because they lack education. She suggests that both men and women should be treated as rational beings and imagines a social order founded on reason. The book is considered one of the earliest works of feminist philosophy.",
        "id": 229,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Gravity's Rainbow",
        "author": "Thomas Pynchon",
        "description": "Set during the end of World War II, the novel follows Tyrone Slothrop, a lieutenant in the U.S. Army, as he tries to uncover the truth behind a mysterious device, the \"Schwarzgerät\", that the Germans are using in their V-2 rockets. The narrative is complex and multi-layered, filled with a vast array of characters and subplots, all connected by various themes such as paranoia, technology, and the destructive nature of war. The book is known for its encyclopedic nature and its challenging, postmodernist style.",
        "id": 230,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Das Kapital",
        "author": "Karl Marx",
        "description": "This influential work is a comprehensive critique of political economy, exploring the complex nature of capitalism, its production processes, and its societal impact. The book delves into the intricacies of commodities, labor theory of value, surplus value, and exploitation, arguing that capitalism is inherently unstable and prone to periodic crises. It also posits that the capitalist system ultimately leads to the concentration of wealth in fewer hands, causing social inequality and paving the way for its own demise. The book is widely regarded as a foundational text in the development of socialist and communist ideologies.",
        "id": 231,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Season of Migration to the North",
        "author": "Al-Tayyib Salih",
        "description": "The novel is a post-colonial exploration of the complex relationship between the East and the West. It tells the story of a young man who returns to his village in Sudan after studying in Europe, only to find that a new villager, a man who has also spent time in the West, has brought back with him a very different perspective on the relationship between the two cultures. The story unfolds as a gripping psychological drama, filled with themes of identity, alienation, and the clash of cultures.",
        "id": 232,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Eminent Victorians",
        "author": "Lytton Strachey",
        "description": "\"Eminent Victorians\" is a biographical work that profiles four influential figures from the Victorian era. The book provides an in-depth look into the lives of Cardinal Manning, Florence Nightingale, Thomas Arnold, and General Gordon, exploring their respective contributions to British society during the 19th century. Through these portraits, the book offers a critical and often satirical analysis of Victorian values, institutions, and moral attitudes, challenging the idealized narrative of the era.",
        "id": 233,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "On Liberty",
        "author": "John Stuart Mill",
        "description": "This influential philosophical work explores the concept of personal freedom and societal limits, arguing that individuals should have the right to act as they want, provided they do not harm others. The book elaborates on the nature and limits of the power that can be legitimately exercised by society over the individual, and champions individuality and nonconformity. It also discusses freedom of speech, asserting that all opinions should be openly expressed to prevent any single viewpoint from becoming dogma.",
        "id": 234,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Tractatus Logico-Philosophicus",
        "author": "Ludwig Wittgenstein",
        "description": "\"Tractatus Logico-Philosophicus\" is a seminal work in analytic philosophy that presents a comprehensive picture of reality and our knowledge of it. The book outlines a logical structure for all scientific discourse, arguing that language and its logical structure are the primary tools for understanding and representing the world. It proposes that all philosophical problems arise from misunderstandings of the logic of language, and that all meaningful propositions are pictures of states of affairs in the world. The book concludes with the famous line \"Whereof one cannot speak, thereof one must be silent,\" suggesting that things that cannot be spoken about logically should not be spoken about at all.",
        "id": 235,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "The Open Society and Its Enemies",
        "author": "Karl Popper",
        "description": "The book critically examines the philosophical underpinnings of totalitarianism and argues in favor of liberal democracy and open societies. It explores how certain philosophical ideas, particularly those of Plato, Hegel, and Marx, have contributed to the development of authoritarian regimes by promoting historicism and determinism. The author advocates for a society that embraces critical thinking, individual freedom, and the ability to adapt and change through democratic processes. By emphasizing the importance of critical rationalism, the book underscores the dangers of dogmatic thinking and the need for societies to remain open to reform and innovation.",
        "id": 236,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "The Road to Serfdom",
        "author": "Friedrich von Hayek",
        "description": "\"The Road to Serfdom\" is a classic work of political philosophy and economics that argues against the concept of socialism and centralized economic planning. The author asserts that such systems inevitably lead to totalitarianism, infringing upon individual liberties and stifling innovation. The book further posits that only through free-market capitalism can societies maintain political and economic freedom. The author also explores the dangers of government control over means of production, illustrating that it leads to a loss of personal freedoms and the rise of dictatorial regimes.",
        "id": 237,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Satanic Verses",
        "author": "Salman Rushdie",
        "description": "The novel follows two Indian actors who miraculously survive a plane explosion, and as a result, find themselves embodying good and evil. As they navigate their new identities, the story also delves into the life of a prophet and his creation of a new religion in a city of sand. The narrative is a blend of fantasy and reality, exploring themes of identity, religion, and the immigrant experience, while also providing a controversial interpretation of Islamic faith and the life of Prophet Muhammad.",
        "id": 238,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Philosophical Investigations",
        "author": "Ludwig Wittgenstein",
        "description": "This book is a seminal work in 20th-century philosophy, presenting a detailed critique of the notion that our language directly corresponds to reality. The author argues that the meaning of words is not inherent, but rather derives from their use within specific forms of life. The book also introduces the concept of language games, suggesting that our understanding of language is akin to learning the rules of a game. The author further explores the limits of language, the nature of understanding, and the relationship between public and private language.",
        "id": 239,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "The Wealth of Nations",
        "author": "Adam Smith",
        "description": "This influential economic book presents a groundbreaking theory that argues for free market economies. The author posits that individuals acting in their own self-interest within a system of natural liberty will result in societal benefit, a concept often referred to as the \"invisible hand\" theory. The book also critiques mercantilism and explores concepts such as the division of labor, productivity, and free markets. It is widely considered one of the foundational texts in the field of economics.",
        "id": 240,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "The Thirty-Nine Steps",
        "author": "John Buchan",
        "description": "Set on the eve of World War I, the novel follows an ordinary man who becomes entangled in a dangerous plot after a mysterious stranger shows up at his apartment, claiming to be a spy. When the stranger is murdered, the protagonist is falsely accused and becomes a fugitive, fleeing to the Scottish highlands. He must unravel a conspiracy of international espionage and prevent a political assassination to clear his name.",
        "id": 241,
        "setting": [
            "united-kingdom"
        ]
    },
    {
        "title": "Invisible Man",
        "author": "Ralph Ellison",
        "description": "The novel is a poignant exploration of a young African-American man's journey through life, where he grapples with issues of race, identity, and individuality in mid-20th-century America. The protagonist, who remains unnamed throughout the story, considers himself socially invisible due to his race. The narrative follows his experiences from the South to the North, from being a student to a worker, and his involvement in the Brotherhood, a political organization. The book is a profound critique of societal norms and racial prejudice, highlighting the protagonist's struggle to assert his identity in a world that refuses to see him.",
        "id": 242,
        "setting": [
            "united-states"
        ],
        "subject": [
            "politics"
        ]
    },
    {
        "title": "On the Road",
        "author": "Jack Kerouac",
        "description": "This novel follows the story of a young man and his friend as they embark on a series of cross-country road trips across America during the late 1940s and early 1950s. The protagonist, driven by a desire for freedom and a quest for identity, encounters a series of eccentric characters and experiences the highs and lows of the Beat Generation. The narrative is a testament to the restlessness of youth and the allure of adventure, underscored by themes of jazz, poetry, and drug use.",
        "id": 243,
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Their Eyes Were Watching God",
        "author": "Zora Neale Hurston",
        "description": "This novel follows the life of Janie Crawford, a young African-American woman, in the early 20th century. She embarks on a journey through three marriages and self-discovery while challenging the societal norms of her time. The narrative explores her struggle for personal freedom, fulfillment, and identity against the backdrop of racism and gender expectations, ultimately emphasizing the importance of independence and personal growth.",
        "id": 244,
        "setting": [
            "united-states"
        ],
        "subject": [
            "love",
            "relationships"
        ]
    },
    {
        "title": "Fictions",
        "author": "Jorge Luis Borges",
        "description": "\"Collected Fiction\" is a compilation of stories by a renowned author that takes readers on a journey through a world of philosophical paradoxes, intellectual humor, and fantastical realities. The book features a range of narratives, from complex, multi-layered tales of labyrinths and detective investigations, to metaphysical explorations of infinity and the nature of identity. It offers an immersive and thought-provoking reading experience, blurring the boundaries between reality and fiction, past and present, and the self and the universe.",
        "id": 245,
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Leaves of Grass",
        "author": "Walt Whitman",
        "description": "\"Leaves of Grass\" is a collection of poetry that celebrates the human form and condition, while also exploring themes of democracy, nature, love, and friendship. The book, known for its departure from traditional poetic form, features a free verse style and the use of everyday language. The poet presents himself as both an individual and a universal figure, representing the collective American experience and identity. The collection is also notable for its controversial content at the time of its publication, including candid depictions of sexuality.",
        "id": 246,
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "Little Women",
        "author": "Louisa May Alcott",
        "description": "This classic novel follows the lives of the four March sisters - Meg, Jo, Beth, and Amy - as they navigate the challenges and joys of adolescence and adulthood in 19th century New England. As they grow, they grapple with issues of poverty, gender roles, love, and personal identity, each in her own unique way. The story is a testament to the power of family, sisterhood, and female resilience in a time of societal constraints.",
        "id": 247,
        "setting": [
            "united-states"
        ]
    },
    {
        "title": "David Copperfield",
        "author": "Charles Dickens",
        "description": "This novel follows the life of its titular protagonist from his childhood to maturity. Born to a young widow, David endures a difficult childhood when his mother remarries a harsh and abusive man. After his mother's death, he is sent to a boarding school before being forced into child labor. As he grows, David experiences hardship, love, and loss, all the while meeting a colorful array of characters. The novel is a journey of self-discovery and personal growth, showcasing the harsh realities of 19th-century England.",
        "id": 248,
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "For Whom the Bell Tolls",
        "author": "Ernest Hemingway",
        "description": "Set in the backdrop of the Spanish Civil War, the novel follows the story of an American dynamiter, who is assigned the task of blowing up a bridge during a crucial attack on the city of Segovia. Alongside the war narrative, the story also explores his relationships with various characters, including his love affair with a young Spanish woman. The narrative beautifully encapsulates themes of love, war, death, and the transient nature of life.",
        "id": 249,
        "subject": [
            "betrayal",
            "war"
        ]
    },
    {
        "title": "The Tale of Genji",
        "author": "Murasaki Shikibu",
        "description": "\"The Tale of Genji\" is a classic work of Japanese literature from the 11th century, often considered the world's first novel. The story revolves around the life of Genji, the son of an emperor, exploring his political rise, romantic relationships, and the complex court life of the Heian era. The novel is celebrated for its detailed characterization and its analysis of the different forms of love.",
        "id": 250,
        "subject": [
            "betrayal",
            "politics"
        ]
    },
    {
        "title": "Tess of the d'Urbervilles",
        "author": "Thomas Hardy",
        "description": "This is a tragic tale of a young woman named Tess who comes from a poor family in rural England. Tess is sent to work for a wealthy family, where she is seduced by a man who abandons her after she becomes pregnant. The baby dies, and Tess is ostracized by her community. She falls in love with a kind man, but when she confesses her past, he rejects her. Desperate and heartbroken, Tess murders her former seducer and is eventually captured and executed. The novel explores themes of fate, injustice, and the oppressive sexual morals of its time.",
        "id": 251,
        "subject": [
            "betrayal",
            "relationships"
        ]
    },
    {
        "title": "King Lear",
        "author": "William Shakespeare",
        "description": "This classic tragedy revolves around the aging King Lear, who decides to divide his kingdom among his three daughters based on their declarations of love for him. The two elder daughters, Goneril and Regan, flatter him with insincere praises, while the youngest, Cordelia, refuses to play the game and is disowned. As the king's sanity deteriorates, his kingdom falls into chaos under the rule of his deceitful elder daughters. The play explores themes of power, loyalty, madness, and justice, culminating in a tragic ending where almost all the main characters, including King Lear and Cordelia, die.",
        "id": 252,
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "The Prime of Miss Jean Brodie",
        "author": "Muriel Spark",
        "description": "The novel is set in 1930s Edinburgh and follows the story of six girls under the tutelage of an unconventional teacher, Miss Jean Brodie. Miss Brodie, in her prime, takes it upon herself to educate the girls about life, love, politics, and art, often disregarding the traditional curriculum. The narrative explores the influence of Miss Brodie on the girls, the consequences of her nonconformist teachings, and the ultimate betrayal that leads to her downfall.",
        "id": 253,
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "The Bible",
        "author": "Unknown",
        "description": "The Bible is the central religious text of Christianity, comprising the Old and New Testaments. It features a diverse collection of writings including historical narratives, poetry, prophecies, and teachings. These texts chronicle the relationship between God and humanity, detail the life, death, and resurrection of Jesus Christ, and follow the early Christian church. Considered divinely inspired by believers, it serves as a foundational guide for faith and practice, influencing countless aspects of culture and society worldwide.",
        "id": 254,
        "subject": [
            "love",
            "war"
        ]
    },
    {
        "title": "Mrs. Dalloway",
        "author": "Virginia Woolf",
        "description": "The novel chronicles a day in the life of Clarissa Dalloway, a high-society woman in post-World War I England, as she prepares for a party she is hosting that evening. Throughout the day, she encounters various characters from her past, including a former suitor and a shell-shocked war veteran. The narrative jumps back and forth in time and in and out of different characters' minds, exploring themes of mental illness, existentialism, and the nature of time.",
        "id": 255,
        "subject": [
            "love",
            "war"
        ]
    },
    {
        "title": "The Golden Notebook",
        "author": "Doris May Lessing",
        "description": "The novel centers around a woman named Anna Wulf, a writer who keeps four notebooks, each representing a different aspect of her life: her experiences in Africa, her current life in London, a novel she is writing, and her personal experiences. As Anna's mental state deteriorates, she attempts to unify her fragmented self in a fifth notebook, the golden notebook. The novel explores themes of mental breakdown, communism, the changing role of women, and the fear of nuclear war.",
        "id": 256,
        "subject": [
            "politics",
            "relationships"
        ]
    },
    {
        "title": "Under the Volcano",
        "author": "Malcolm Lowry",
        "description": "Set in Mexico on the Day of the Dead in 1938, the novel follows the last day in the life of Geoffrey Firmin, a British consul with a severe alcohol addiction. Through his interactions with his estranged wife and half-brother, the book explores themes of despair, betrayal, and the destructive power of addiction, against the backdrop of political and social unrest. The impending eruption of the nearby volcano serves as a metaphor for Firmin's deteriorating mental state and the looming world war.",
        "id": 257,
        "subject": [
            "politics",
            "relationships"
        ]
    },
    {
        "title": "The Man Without Qualities",
        "author": "Robert Musil",
        "description": "\"The Man Without Qualities\" is a satirical novel set in Vienna during the last days of the Austro-Hungarian Empire. It follows the life of Ulrich, a thirty-two-year-old mathematician, who is in search of a sense of life and reality but is caught up in the societal changes and political chaos of his time. The book explores themes of existentialism, morality, and the search for meaning in a rapidly changing world.",
        "id": 258,
        "subject": [
            "politics",
            "relationships"
        ]
    },
    {
        "title": "The Unbearable Lightness of Being",
        "author": "Milan Kundera",
        "description": "Set against the backdrop of the Prague Spring period of Czechoslovak history, the novel explores the philosophical concept of Nietzsche's eternal return through the intertwined lives of four characters: a womanizing surgeon, his intellectual wife, his naïve mistress, and her stoic lover. The narrative delves into their personal struggles with lightness and heaviness, freedom and fate, love and betrayal, and the complexities of human relationships, all while offering a profound meditation on the nature of existence and the paradoxes of life.",
        "id": 259,
        "subject": [
            "politics",
            "relationships"
        ]
    },
    {
        "title": "The Bell Jar",
        "author": "Sylvia Plath",
        "description": "The novel follows the story of a young woman who wins a guest editorship at a magazine in New York City and, after a series of personal and professional disappointments, suffers a mental breakdown and returns to her family, where she continues to struggle with depression and suicidal thoughts. The protagonist's experiences in psychiatric institutions and her attempts to reclaim her life are depicted with brutal honesty, making it a poignant exploration of mental illness and the societal pressures faced by women in the mid-20th century.",
        "id": 260,
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "Brideshead Revisited",
        "author": "Evelyn Waugh",
        "description": "The novel is a nostalgic story about the narrator's involvement with the Flyte family, British aristocrats living in a grand mansion called Brideshead. The story explores themes of faith, love, and the decline of the British aristocracy, primarily through the narrator's relationships with the family's Catholic faith and his complicated friendship with the family's son and his love for the daughter. The novel is set in the backdrop of the time period between the two World Wars.",
        "id": 261,
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "Howards End",
        "author": "E. M. Forster",
        "description": "This novel explores class relations and conflicting values in turn-of-the-century England. The narrative revolves around three families: the wealthy, capitalist Wilcoxes; the cultured, idealistic Schlegels; and the lower-middle class Basts. As their lives intertwine, the story grapples with themes of wealth, love, and death, and the struggle for personal connection in an increasingly impersonal society. The titular \"Howards End\" is a country home, and it becomes a symbol of England's past, present, and future.",
        "id": 262,
        "subject": [
            "relationships"
        ]
    },
    {
        "title": "A Portrait of the Artist as a Young Man",
        "author": "James Joyce",
        "description": "This novel is a semi-autobiographical account of a young man's intellectual and artistic development in late 19th-century Ireland. The protagonist struggles with issues of identity, faith, and nationality, ultimately rejecting the traditional values of his Catholic upbringing to pursue his own path as an artist. The book is renowned for its innovative narrative style and its exploration of themes such as individuality, freedom, and the nature of art.",
        "id": 263,
        "subject": [
            "religion"
        ]
    },
    {
        "title": "As I Lay Dying",
        "author": "William Faulkner",
        "description": "The narrative unfolds through the eyes of 15 different characters over 59 chapters. It is the story of the death of Addie Bundren and her poor, rural family's quest and motivations—noble or selfish—to honor her wish to be buried in her hometown of Jefferson, Mississippi. As the Bundren family undertakes a journey to fulfill Addie's last wish, they face many hardships and personal revelations. The novel explores themes of existentialism, death, and the nature of family relationships.",
        "id": 264,
        "subject": [
            "religion"
        ]
    },
    {
        "title": "The Color Purple",
        "author": "Alice Walker",
        "description": "Set in the early 20th century, the novel is an epistolary tale of a young African-American woman named Celie, living in the South. She faces constant abuse and hardship, first from her father and then from her husband. The story unfolds through her letters written to God and her sister Nettie, revealing her emotional journey from oppression to self-discovery and independence, aided by her relationships with strong women around her. The narrative explores themes of racism, sexism, domestic violence, and the power of sisterhood and love.",
        "id": 265,
        "subject": [
            "religion"
        ]
    },
    {
        "title": "The Old Man and the Sea",
        "author": "Ernest Hemingway",
        "description": "An aging Cuban fisherman struggles with a giant marlin far out in the Gulf Stream, isolated from the world and from human help. For days, he fights the marlin alone, admiring its strength, dignity, and faithfulness to its identity—its destiny is as true as his as a fisherman. He finally kills the marlin, but sharks attack and devour it before he can return to the shore. The fisherman returns home empty-handed but remains undefeated, having proven his abilities to himself.",
        "id": 266,
        "subject": [
            "survival"
        ]
    },
    {
        "title": "Robinson Crusoe",
        "author": "Daniel Defoe",
        "description": "The book is a classic adventure novel about a man who spends 28 years on a remote tropical island near Trinidad, encountering cannibals, captives, and mutineers before being rescued. The story is noted for its realistic portrayal of the protagonist's physical and psychological development and for its detailed depiction of his attempts to create a life for himself in the wilderness. The novel has been interpreted as an allegory for the development of civilization, as well as a critique of European colonialism.",
        "id": 267,
        "subject": [
            "survival"
        ]
    },
    {
        "title": "Treasure Island",
        "author": "Robert Louis Stevenson",
        "description": "This classic adventure novel tells the story of young Jim Hawkins, who stumbles upon a treasure map and embarks on a perilous journey to find the buried treasure. Along the way, he encounters a host of memorable characters, including the cunning and treacherous Long John Silver. The narrative is filled with action, intrigue, and suspense, as Hawkins and his companions face pirates, mutiny, and other dangers in their quest for the hidden treasure.",
        "id": 268,
        "subject": [
            "survival"
        ]
    },
    {
        "title": "The Plague",
        "author": "Albert Camus",
        "description": "The novel is set in the Algerian city of Oran during the 1940s, where a deadly plague sweeps through, causing the city to be quarantined. The story is told through the eyes of a doctor who witnesses the horror and suffering caused by the disease. The narrative explores themes of human resilience, solidarity, and the struggle against the absurdities of life. It also examines how individuals and society respond to death and disease, creating a profound meditation on the nature of existence and human endurance.",
        "id": 269,
        "subject": [
            "survival"
        ]
    },
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "description": "This comedic science fiction novel follows the intergalactic adventures of an unwitting human, Arthur Dent, who is rescued just before Earth's destruction by his friend Ford Prefect, a researcher for a galactic travel guide. Together, they hitch a ride on a stolen spaceship, encountering a range of bizarre characters, including a depressed robot and a two-headed ex-president of the galaxy. Through a series of satirical and absurd escapades, the book explores themes of existentialism, bureaucracy, and the absurdity of life, all while poking fun at the science fiction genre and offering witty commentary on the human condition.",
        "id": 270,
        "subject": [
            "survival"
        ]
    },
    {
        "title": "Fairy Tales and Stories",
        "author": "Hans Christian Andersen",
        "description": "This collection of stories offers a mix of enchanting fairy tales and narratives, many of which have become universally recognized classics. The stories range from tales of whimsical creatures and magical realms to poignant narratives that explore themes of love, sacrifice, and the human condition. Some tales are light-hearted and humorous, while others are profound and thought-provoking, demonstrating the breadth and depth of the author's storytelling abilities.",
        "id": 271,
        "subject": [
            "survival"
        ]
    },
    {
        "title": "Blood Meridian",
        "author": "Cormac McCarthy",
        "description": "Set in the mid-19th century, this novel follows a violent teenager known as \"the Kid\" as he joins a group of Indian-hunters led by the enigmatic and brutal Judge Holden. The narrative is a gruesome depiction of the lawless American West, filled with philosophical musings, vivid descriptions of the harsh landscape, and brutal, relentless violence. The story explores themes of human nature, morality, and the inherent chaos and brutality of life.",
        "id": 272,
        "subject": [
            "survival"
        ]
    },
    {
        "title": "The Time Machine",
        "author": "H. G. Wells",
        "description": "A Victorian-era scientist invents a machine that allows him to travel through time. He first journeys to the year 802,701 A.D., where he encounters the Eloi, a society of small, elegant, childlike adults who live in harmony but lack curiosity and drive. He later discovers the Morlocks, a nocturnal, subterranean species who prey on the Eloi. After rescuing an Eloi named Weena, the protagonist loses his time machine and must devise a plan to recover it and return to his own time, all while exploring the social and evolutionary implications of the two distinct societies.",
        "id": 273,
        "subject": [
            "survival"
        ]
    },
    {
        "title": "The Iliad",
        "author": "Homer",
        "description": "This epic poem focuses on the final weeks of the Trojan War, a conflict between the city of Troy and the Greek city-states. The story explores themes of war, honor, wrath, and divine intervention, with a particular focus on the Greek hero Achilles, whose anger and refusal to fight have devastating consequences. The narrative also delves into the lives of the gods, their relationships with humans, and their influence on the course of events.",
        "id": 274,
        "subject": [
            "war"
        ]
    }
]

function getBookList() {
    return bookList;
}

function getGenreList() {
    const genreList = new Set();

    bookList.forEach((book) => {
      if (book.genre) {
        book.genre.forEach((genre) => genreList.add(genre.replace(/-/g, " ")));
      }
    });
    const genreListSorted = Array.from(genreList).sort();
    return genreListSorted;
}

function getSettingsList() {
    const settingsList = new Set();

    bookList.forEach((book) => {
      if (book.setting) {
        book.setting.forEach((setting) => settingsList.add(setting.replace(/-/g, " ")));
      }
    });
    const settingsListSorted = Array.from(settingsList).sort();
    console.log(settingsListSorted)
    return settingsListSorted;
}

function getSubjectList() {
    const subjectList = new Set();

    bookList.forEach((book) => {
      if (book.subject) {
        book.subject.forEach((subject) => subjectList.add(subject.replace(/-/g, " ")));
      }
    });
    const subjectListSorted = Array.from(subjectList).sort();
    return subjectListSorted;
}