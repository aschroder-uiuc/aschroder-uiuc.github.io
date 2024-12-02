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
            "justice",
            "philosophy",
            "religion"
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
            "conflict",
            "existentialism",
            "justice",
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
            "crime",
            "fiction"
        ],
        "setting": [
            "england",
            "london",
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
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "france",
            "paris"
        ],
        "subject": [
            "justice",
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
        ],
        "subject": [
            "death",
            "justice",
            "violence"
        ]
    },
    {
        "title": "Rebecca",
        "author": "Daphne du Maurier",
        "description": "A young woman marries a wealthy widower and moves into his large English country house. She quickly realizes that the memory of her husband's first wife, Rebecca, haunts every corner of the estate. The housekeeper's obsessive devotion to Rebecca and the mysterious circumstances of her death continue to overshadow the second wife's attempts to make a happy life with her husband. As secrets about Rebecca's life and death are revealed, the new wife must grapple with her own identity and place within the household.",
        "id": 7,
        "genre": [
            "crime",
            "fiction",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "death",
            "deception",
            "love"
        ]
    },
    {
        "title": "Native Son",
        "author": "Richard Wright",
        "description": "This novel tells the story of Bigger Thomas, a young African-American man living in Chicago's South Side during the 1930s. Bigger's life takes a tragic turn when he accidentally kills a young white woman. The incident leads to his arrest and trial, revealing the deep-seated racial prejudices and injustices prevalent in American society at the time. The narrative explores themes of poverty, systemic racism, fear, and the effects of oppression.",
        "id": 8,
        "genre": [
            "crime",
            "fiction"
        ],
        "setting": [
            "chicago",
            "united-states"
        ],
        "subject": [
            "alienation",
            "existentialism",
            "justice",
            "racism",
            "violence"
        ]
    },
    {
        "title": "The Long Goodbye",
        "author": "Raymond Chandler",
        "description": "This novel follows the story of a hard-boiled detective in Los Angeles who becomes embroiled in a complex case when he befriends a drunk named Terry Lennox. After Lennox's wife is found dead, Lennox disappears to Mexico and the detective is left to unravel the mystery. The detective then takes on another case of a missing husband, which becomes intertwined with the Lennox case, leading to a web of deceit, corruption, and murder. The detective's pursuit of the truth leads him through a gritty and corrupt world, testing his resolve and morality.",
        "id": 9,
        "genre": [
            "crime",
            "fiction",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "los-angeles",
            "united-states"
        ],
        "subject": [
            "corruption",
            "deception"
        ]
    },
    {
        "title": "The Complete Tales and Poems of Edgar Allan Poe",
        "author": "Edgar Allan Poe",
        "description": "This collection brings together all of the author's most famous works, including poems, short stories, and novellas. Known for his macabre and gothic storytelling, the author's works are filled with themes of death, love lost, and human frailty. Notable inclusions are the haunting poem \"The Raven,\" the chilling stories \"The Tell-Tale Heart\" and \"The Fall of the House of Usher,\" and his only complete novel, \"The Narrative of Arthur Gordon Pym.\"",
        "id": 10,
        "genre": [
            "crime",
            "fiction",
            "horror",
            "mystery"
        ],
        "setting": [
            "fictional-location",
            "new-york",
            "paris"
        ],
        "subject": [
            "death",
            "love"
        ]
    },
    {
        "title": "The Hound of the Baskervilles",
        "author": "Arthur Conan Doyle",
        "description": "This classic mystery novel follows a detective and his partner as they investigate a supernatural hound that has been haunting the Baskerville family for generations, supposedly causing the death of the recent family head. As the pair navigate the eerie moors surrounding the Baskerville estate, they unravel a plot of deception and murder, all while trying to protect the new heir from the same grisly fate. The story is a thrilling blend of mystery, suspense, and horror.",
        "id": 11,
        "genre": [
            "crime",
            "fiction",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "death",
            "deception"
        ]
    },
    {
        "title": "The Big Sleep",
        "author": "Raymond Chandler",
        "description": "In this classic detective novel, a private investigator is hired by a wealthy family to resolve a blackmail issue involving the younger daughter. As he delves deeper into the case, he uncovers a web of deceit, murder, and organized crime. The detective's investigation is further complicated by his growing attraction to the older daughter, adding a layer of personal involvement to an already complex case. The novel is renowned for its gritty depiction of 1930s Los Angeles and its sharp, witty dialogue.",
        "id": 12,
        "genre": [
            "crime",
            "fiction",
            "mystery"
        ],
        "setting": [
            "los-angeles",
            "united-states"
        ],
        "subject": [
            "corruption",
            "deception"
        ]
    },
    {
        "title": "A Clockwork Orange",
        "author": "Anthony Burgess",
        "description": "This novel follows the life of a violent young man named Alex, who is part of a youth subculture in a dystopian future England. Alex and his gang engage in a nightmarish spree of rape, assault, and robbery, until he is arrested and subjected to a psychological experiment by the government to \"cure\" him of his violent tendencies. The novel explores themes of free will, morality, and the nature of evil, while using a unique slang language invented by the author.",
        "id": 13,
        "genre": [
            "crime",
            "fiction"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "violence"
        ]
    },
    {
        "title": "The Maltese Falcon",
        "author": "Dashiell Hammett",
        "description": "This classic detective novel follows a private investigator who is hired by a mysterious woman to track down her missing sister. The case quickly becomes complicated when the investigator is caught up in a dangerous hunt for a priceless artifact, the Maltese Falcon. As he navigates a world of treachery, deceit, and murder, he must use his wit and courage to outsmart his enemies and solve the mystery.",
        "id": 14,
        "genre": [
            "crime",
            "fiction",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "betrayal",
            "deception"
        ]
    },
    {
        "title": "The Talented Mr. Ripley",
        "author": "Patricia Highsmith",
        "description": "The Talented Mr. Ripley is a psychological thriller that follows the story of Tom Ripley, a young man struggling to make ends meet in New York City. When a wealthy shipbuilder mistakes Tom for a close friend of his son, Dickie Greenleaf, he offers him an all-expenses-paid trip to Italy to persuade his wayward son to return home. Instead, Tom becomes obsessed with the luxurious lifestyle of Dickie and his girlfriend, Marge, and goes to extreme lengths to make it his own, including identity theft and murder.",
        "id": 15,
        "genre": [
            "crime",
            "fiction",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "france",
            "italy",
            "new-york",
            "united-states"
        ],
        "subject": [
            "deception"
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
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "art",
            "deception",
            "justice"
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
            "fictional-location",
            "italy"
        ],
        "subject": [
            "philosophy"
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
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "deception",
            "justice",
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
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "adventure",
            "justice"
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
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "violence"
        ]
    },
    {
        "title": "An American Tragedy",
        "author": "Theodore Dreiser",
        "description": "This classic novel explores the dark side of the American Dream through the story of a young man who, despite his humble beginnings, aspires to climb the social ladder. He becomes involved with two women, one wealthy and one from a working-class background. His ambition and desire for status lead him to commit a crime that ultimately results in his downfall. The novel is a stark examination of the destructive power of unchecked ambition and the moral compromises people are willing to make in pursuit of wealth and status.",
        "id": 21,
        "genre": [
            "crime"
        ],
        "setting": [
            "new-york",
            "united-states"
        ],
        "subject": [
            "love"
        ]
    },
    {
        "title": "A Good Man Is Hard to Find",
        "author": "Flannery O'Connor",
        "description": "This collection of short stories is set in the American South and explores themes of morality, ethics, and the complexity of human nature. The stories feature a variety of characters, each grappling with their own moral dilemmas and personal struggles. The title story centers around a family's disastrous road trip, during which they encounter a notorious escaped convict. Through these narratives, the book examines the concept of \"goodness\" and the capacity for redemption and grace in a flawed world.",
        "id": 22,
        "genre": [
            "crime"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "death",
            "violence"
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
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "East of Eden",
        "author": "John Steinbeck",
        "description": "This novel is a multi-generational epic that follows the lives of the Trask and Hamilton families in the Salinas Valley in California. The story is deeply rooted in biblical allegory, particularly the tale of Cain and Abel, as it explores themes of love, guilt, freedom, and the inherent good and evil in human nature. The narrative provides a profound, complex portrayal of family and individual struggles with morality and love, while also reflecting on the social changes affecting America during the late 19th and early 20th centuries.",
        "id": 24,
        "genre": [
            "crime"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "betrayal",
            "love"
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
        ],
        "setting": [
            "new-york",
            "united-states"
        ],
        "subject": [
            "betrayal",
            "corruption",
            "violence"
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
            "adventure",
            "war"
        ]
    },
    {
        "title": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "description": "This novel follows the story of a young girl named Alice who falls down a rabbit hole into a fantastical world full of peculiar creatures and bizarre experiences. As she navigates through this strange land, she encounters a series of nonsensical events, including a tea party with a Mad Hatter, a pool of tears, and a trial over stolen tarts. The book is renowned for its playful use of language, logic, and its exploration of the boundaries of reality.",
        "id": 27,
        "genre": [
            "fantasy",
            "fiction"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "childhood"
        ]
    },
    {
        "title": "One Thousand and One Nights",
        "author": "Unknown",
        "description": "This is a collection of Middle Eastern folk tales compiled during the Islamic Golden Age. The stories are told by a young woman, who must weave a new tale each night for her husband, a king, to delay her execution. The tales are filled with magic, adventure, love, and betrayal, and include well-known stories such as \"Aladdin's Wonderful Lamp\", \"Ali Baba and the Forty Thieves\", and \"The Seven Voyages of Sinbad the Sailor\".",
        "id": 28,
        "genre": [
            "fantasy",
            "fiction"
        ],
        "setting": [
            "middle-east"
        ],
        "subject": [
            "adventure",
            "betrayal",
            "deception",
            "freedom",
            "justice",
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
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "adventure"
        ]
    },
    {
        "title": "A Wrinkle In Time",
        "author": "Madeleine L'Engle",
        "description": "The novel follows the story of a young girl named Meg Murry, her younger brother Charles Wallace, and their friend Calvin O'Keefe as they embark on a cosmic journey to rescue Meg and Charles Wallace's father. The father, a scientist, has been missing since he discovered a new planet using the concept of Tesseract, which is a wrinkle in time. Guided by three mysterious celestial beings, the children travel across different dimensions, face evil forces, and learn about the power of love and self-sacrifice.",
        "id": 30,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "love",
            "science"
        ]
    },
    {
        "title": "The Lion, The Witch and the Wardrobe",
        "author": "C. S. Lewis",
        "description": "Four siblings are evacuated from London during World War II and sent to live with an old professor in the countryside. In his house, they discover a magical wardrobe that serves as a portal to the land of Narnia, a world filled with mythical creatures and ruled by an evil White Witch. The children are soon caught up in a struggle to free Narnia from the witch's eternal winter, aided by the majestic lion Aslan. The story combines elements of fantasy, adventure, and Christian allegory.",
        "id": 31,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "betrayal"
        ]
    },
    {
        "title": "The Once and Future King",
        "author": "T. H. White",
        "description": "This novel is a retelling of the Arthurian legend, from Arthur's childhood tutelage under the wizard Merlyn to his eventual death. The story follows Arthur's journey from a naive boy to a wise and just king, his establishment of the Round Table, his marriage to Guinevere, and his complex relationship with his illegitimate son, Mordred. The narrative explores themes of power, justice, war, and human nature, offering a nuanced and humanizing portrayal of a well-known mythical figure.",
        "id": 32,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "love"
        ]
    },
    {
        "title": "The Hobbit",
        "author": "J. R. R. Tolkien",
        "description": "In this fantasy novel, a timid and unadventurous hobbit named Bilbo Baggins is whisked away on a grand adventure by a wizard and a group of dwarves. Their mission is to reclaim the dwarves' homeland and treasure from a fearsome dragon. Throughout the journey, Bilbo grows in courage and cunning, proving himself a true hero as he encounters trolls, goblins, giant spiders, and other perils. The novel culminates with a great battle involving various races of Middle Earth, after which Bilbo returns home, forever changed by his experiences.",
        "id": 33,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure"
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
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "freedom",
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
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure"
        ]
    },
    {
        "title": "Where the Wild Things Are",
        "author": "Maurice Sendak",
        "description": "A young boy named Max, dressed in his wolf costume, wreaks such havoc through his household that he is sent to bed without his supper. In his room, a mysterious, wild forest and sea grows out of his imagination, and Max sails to the land of the Wild Things. The Wild Things are fearsome-looking monsters, but Max conquers them by “staring into their yellow eyes without blinking once”, and he is made the king of all wild things. However, he soon finds himself lonely and homesick and returns home to his bedroom where he finds his supper waiting for him, still hot.",
        "id": 36,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "childhood"
        ]
    },
    {
        "title": "Peter And Wendy",
        "author": "J. M. Barrie",
        "description": "\"Peter And Wendy\" by JM Barrie is a beloved children's classic that tells the enchanting story of a young girl named Wendy Darling who, along with her two brothers, embarks on a magical adventure to the whimsical world of Neverland. There, they encounter the mischievous and eternal boy, Peter Pan, and his fairy companion, Tinker Bell. Together, they face thrilling escapades, battles with the villainous Captain Hook, and discover the importance of imagination, friendship, and the power of never growing up.",
        "id": 37,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure"
        ]
    },
    {
        "title": "The Brief Wondrous Life of Oscar Wao",
        "author": "Junot Diaz",
        "description": "This novel tells the story of Oscar de Leon, an overweight Dominican boy growing up in New Jersey who is obsessed with science fiction, fantasy novels, and falling in love, but is perpetually unlucky in his romantic endeavors. The narrative not only explores Oscar's life but also delves into the lives of his family members, each affected by the curse that has plagued their family for generations. The book is a blend of magical realism and historical fiction, providing a detailed account of the brutal Trujillo regime in the Dominican Republic and its impact on the country's people and diaspora.",
        "id": 38,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "culture"
        ]
    },
    {
        "title": "The Chronicles of Narnia",
        "author": "C. S. Lewis",
        "description": "This seven-part series follows the adventures of various children who play central roles in the unfolding history of the fantastical realm of Narnia. The children are magically transported to Narnia from our world, where they aid the noble lion Aslan in his struggles against evil forces in order to restore peace and justice. The series explores themes of good versus evil, the nature of faith, and the power of sacrifice, all set against a richly imagined magical world full of diverse creatures and landscapes.",
        "id": 39,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "betrayal"
        ]
    },
    {
        "title": "The Phantom Tollbooth",
        "author": "Norton Juster",
        "description": "A young boy named Milo, who is always bored and uninterested in the world around him, unexpectedly receives a magic tollbooth. When he drives through it in his toy car, he is transported to the Kingdom of Wisdom. Here, he embarks on a quest to rescue the princesses Rhyme and Reason, who have been exiled by the warring brothers, King Azaz of Dictionopolis (where words are supremely important) and the Mathemagician of Digitopolis (where numbers are most valued). Along his journey, Milo learns the value of learning and the excitement that can be found in the world around him.",
        "id": 40,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure"
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
            "fictional-location",
            "united-kingdom"
        ],
        "subject": [
            "humanity"
        ]
    },
    {
        "title": "His Dark Materials",
        "author": "Philip Pullman",
        "description": "\"His Dark Materials\" is a fantasy trilogy that follows the journey of a young girl named Lyra Belacqua and her daemon, Pantalaimon, across parallel universes. Throughout their adventures, they encounter a variety of mythical creatures, confront religious and political systems, and grapple with complex themes such as free will, original sin, and the nature of consciousness. The series also delves into the mysteries of Dust, a strange particle integral to the multiverse's function.",
        "id": 42,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "childhood",
            "science"
        ]
    },
    {
        "title": "Journey to the West",
        "author": "Wu Cheng'en",
        "description": "\"Journey to the West\" is a classic Chinese novel that follows the adventures of a Buddhist monk and his three disciples, a monkey, a pig, and a river monster, as they travel from China to India in search of sacred Buddhist scriptures. Along the way, they face a series of challenges and obstacles, including battling demons and overcoming their own personal weaknesses. This epic tale is a blend of mythology, folklore, and fantasy, and is also a commentary on the practice and principles of Buddhism.",
        "id": 44,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "china",
            "fictional-location"
        ],
        "subject": [
            "adventure"
        ]
    },
    {
        "title": "The Wonderful Wizard of Oz",
        "author": "L. Frank Baum",
        "description": "A young girl from Kansas is swept away by a tornado to a fantastical land called Oz. To return home, she must find the mysterious Wizard in the Emerald City, and on her journey, she befriends a Scarecrow in need of a brain, a Tin Woodman longing for a heart, and a Cowardly Lion seeking courage. They all hope the Wizard can grant their wishes, but they must first overcome the Wicked Witch of the West who poses a great danger to them.",
        "id": 45,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure"
        ]
    },
    {
        "title": "The Princess Bride",
        "author": "William Goldman",
        "description": "This book is an illustrated edition of a classic tale of true love and high adventure. It tells the story of a beautiful princess and her one true love. After he is reportedly killed, she agrees to marry a wicked prince instead, only to be kidnapped and face numerous dangers. The story is filled with humor, romance, and swashbuckling action, all brought to life by vivid illustrations.",
        "id": 49,
        "genre": [
            "fantasy"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "betrayal"
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
            "new-york",
            "united-states"
        ],
        "subject": [
            "deception",
            "economics",
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
        "setting": [
            "ireland"
        ],
        "subject": [
            "alienation",
            "art",
            "death",
            "memory",
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
            "france",
            "paris"
        ],
        "subject": [
            "art",
            "love",
            "memory",
            "relationships",
            "society"
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
            "death",
            "love",
            "memory",
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
            "new-york",
            "united-states"
        ],
        "subject": [
            "alienation",
            "innocence"
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
            "deception",
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
            "england",
            "fictional-location",
            "london"
        ],
        "subject": [
            "memory"
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
            "religion",
            "society"
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
        ],
        "subject": [
            "adventure",
            "death"
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
            "england",
            "fictional-location"
        ],
        "subject": [
            "death",
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
        ],
        "subject": [
            "childhood",
            "racism"
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
        "setting": [
            "england"
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
        ],
        "setting": [
            "spain"
        ],
        "subject": [
            "adventure"
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
            "death",
            "love",
            "philosophy",
            "politics",
            "religion",
            "society",
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
        ],
        "subject": [
            "death",
            "memory"
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
        "setting": [
            "greece"
        ],
        "subject": [
            "adventure",
            "deception",
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
        ],
        "setting": [
            "africa"
        ],
        "subject": [
            "adventure",
            "alienation",
            "humanity"
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
            "england",
            "united-kingdom"
        ],
        "subject": [
            "art",
            "childhood",
            "death",
            "memory"
        ]
    },
    {
        "title": "Middlemarch",
        "author": "George Eliot",
        "description": "Set in the fictitious English town of Middlemarch during the early 19th century, the novel explores the complex web of relationships in a close-knit society. It follows the lives of several characters, primarily Dorothea Brooke, a young woman of idealistic fervor, and Tertius Lydgate, an ambitious young doctor, who both grapple with societal expectations, personal desires, and moral dilemmas. Their stories intertwine with a rich tapestry of other townsfolk, reflecting themes of love, marriage, ambition, and reform, making a profound commentary on the human condition.",
        "id": 72,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "love",
            "politics",
            "religion"
        ]
    },
    {
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "description": "In this epic poem, the protagonist embarks on an extraordinary journey through Hell (Inferno), Purgatory (Purgatorio), and Paradise (Paradiso). Guided by the ancient Roman poet Virgil and his beloved Beatrice, he encounters various historical and mythological figures in each realm, witnessing the eternal consequences of earthly sins and virtues. The journey serves as an allegory for the soul's progression towards God, offering profound insights into the nature of good and evil, free will, and divine justice.",
        "id": 73,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "death",
            "justice",
            "love"
        ]
    },
    {
        "title": "Catch-22",
        "author": "Joseph Heller",
        "description": "The book is a satirical critique of military bureaucracy and the illogical nature of war, set during World War II. The story follows a U.S. Army Air Forces B-25 bombardier stationed in Italy, who is trying to maintain his sanity while fulfilling his service requirements so that he can go home. The novel explores the absurdity of war and military life through the experiences of the protagonist, who discovers that a bureaucratic rule, the \"Catch-22\", makes it impossible for him to escape his dangerous situation. The more he tries to avoid his military assignments, the deeper he gets sucked into the irrational world of military rule.",
        "id": 74,
        "genre": [
            "fiction"
        ],
        "setting": [
            "italy",
            "united-states"
        ],
        "subject": [
            "absurdity",
            "death",
            "survival",
            "war"
        ]
    },
    {
        "title": "Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "description": "The novel follows the journey of a young boy named Huckleberry Finn and a runaway slave named Jim as they travel down the Mississippi River on a raft. Set in the American South before the Civil War, the story explores themes of friendship, freedom, and the hypocrisy of society. Through various adventures and encounters with a host of colorful characters, Huck grapples with his personal values, often clashing with the societal norms of the time.",
        "id": 75,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "adventure",
            "childhood",
            "deception",
            "freedom",
            "racism"
        ]
    },
    {
        "title": "The Trial",
        "author": "Franz Kafka",
        "description": "The book revolves around a bank clerk who wakes one morning to find himself under arrest for an unspecified crime. Despite not being detained, he is subjected to the psychological torment of a bizarre and nightmarish judicial process. The story is a critique of bureaucracy, exploring themes of guilt, alienation and the inefficiency of the justice system.",
        "id": 76,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "absurdity",
            "alienation",
            "existentialism",
            "justice"
        ]
    },
    {
        "title": "Mrs. Dalloway",
        "author": "Virginia Woolf",
        "description": "The novel chronicles a day in the life of Clarissa Dalloway, a high-society woman in post-World War I England, as she prepares for a party she is hosting that evening. Throughout the day, she encounters various characters from her past, including a former suitor and a shell-shocked war veteran. The narrative jumps back and forth in time and in and out of different characters' minds, exploring themes of mental illness, existentialism, and the nature of time.",
        "id": 78,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "death",
            "love",
            "memory",
            "society",
            "war"
        ]
    },
    {
        "title": "Invisible Man",
        "author": "Ralph Ellison",
        "description": "The novel is a poignant exploration of a young African-American man's journey through life, where he grapples with issues of race, identity, and individuality in mid-20th-century America. The protagonist, who remains unnamed throughout the story, considers himself socially invisible due to his race. The narrative follows his experiences from the South to the North, from being a student to a worker, and his involvement in the Brotherhood, a political organization. The book is a profound critique of societal norms and racial prejudice, highlighting the protagonist's struggle to assert his identity in a world that refuses to see him.",
        "id": 79,
        "genre": [
            "fiction"
        ],
        "setting": [
            "new-york",
            "united-states"
        ],
        "subject": [
            "alienation",
            "existentialism",
            "freedom",
            "politics",
            "racism",
            "society",
            "violence"
        ]
    },
    {
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "description": "This classic novel tells the story of a young scientist who creates a grotesque but sentient creature in an unorthodox scientific experiment. The scientist, horrified by his creation, abandons it, leading the creature to seek revenge. The novel explores themes of ambition, responsibility, guilt, and the potential consequences of playing God.",
        "id": 80,
        "genre": [
            "fiction",
            "horror"
        ],
        "setting": [
            "fictional-location",
            "germany"
        ],
        "subject": [
            "death",
            "science"
        ]
    },
    {
        "title": "The Iliad",
        "author": "Homer",
        "description": "This epic poem focuses on the final weeks of the Trojan War, a conflict between the city of Troy and the Greek city-states. The story explores themes of war, honor, wrath, and divine intervention, with a particular focus on the Greek hero Achilles, whose anger and refusal to fight have devastating consequences. The narrative also delves into the lives of the gods, their relationships with humans, and their influence on the course of events.",
        "id": 81,
        "genre": [
            "fiction"
        ],
        "setting": [
            "greece"
        ],
        "subject": [
            "conflict",
            "war"
        ]
    },
    {
        "title": "The Master and Margarita",
        "author": "Mikhail Bulgakov",
        "description": "This novel is a complex narrative that weaves together three distinct yet intertwined stories. The first story is set in 1930s Moscow and follows the devil and his entourage as they wreak havoc on the city's literary elite. The second story is a historical narrative about Pontius Pilate and his role in the crucifixion of Jesus Christ. The third story is a love story between the titular Master, a writer who has been driven to madness by the criticism of his work, and his devoted lover, Margarita. The novel is a satirical critique of Soviet society, particularly the literary establishment, and its treatment of artists. It also explores themes of love, sacrifice, and the nature of good and evil.",
        "id": 82,
        "genre": [
            "fiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "art",
            "death",
            "love",
            "philosophy",
            "politics",
            "religion"
        ]
    },
    {
        "title": "Midnight's Children",
        "author": "Salman Rushdie",
        "description": "The novel tells the story of Saleem Sinai, who was born at the exact moment when India gained its independence. As a result, he shares a mystical connection with other children born at the same time, all of whom possess unique, magical abilities. As Saleem grows up, his life mirrors the political and cultural changes happening in his country, from the partition of India and Pakistan, to the Bangladesh War of Independence. The story is a blend of historical fiction and magical realism, exploring themes of identity, fate, and the power of storytelling.",
        "id": 83,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "india"
        ],
        "subject": [
            "conflict",
            "memory",
            "politics",
            "religion"
        ]
    },
    {
        "title": "The Red and the Black",
        "author": "Stendhal",
        "description": "The novel is a detailed psychological portrait of Julien Sorel, a young man from a provincial background who aspires to rise above his humble beginnings. He uses his intelligence and hypocrisy to advance in the post-Napoleonic French society, which is deeply divided by class and political loyalties. The story is a critique of the society's materialism and hypocrisy as Julien's ambitions lead him to a tragic end. The title refers to the contrasting uniforms of the army and the church, the two routes available to him for upward mobility.",
        "id": 84,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "france",
            "paris"
        ],
        "subject": [
            "betrayal",
            "love",
            "politics",
            "religion",
            "society"
        ]
    },
    {
        "title": "On the Road",
        "author": "Jack Kerouac",
        "description": "This novel follows the story of a young man and his friend as they embark on a series of cross-country road trips across America during the late 1940s and early 1950s. The protagonist, driven by a desire for freedom and a quest for identity, encounters a series of eccentric characters and experiences the highs and lows of the Beat Generation. The narrative is a testament to the restlessness of youth and the allure of adventure, underscored by themes of jazz, poetry, and drug use.",
        "id": 85,
        "genre": [
            "fiction"
        ],
        "setting": [
            "chicago",
            "los-angeles",
            "new-york",
            "united-states"
        ],
        "subject": [
            "adventure",
            "freedom"
        ]
    },
    {
        "title": "Things Fall Apart",
        "author": "Chinua Achebe",
        "description": "This novel explores the life of Okonkwo, a respected warrior in the Umuofia clan of the Igbo tribe in Nigeria during the late 1800s. Okonkwo's world is disrupted by the arrival of European missionaries and the subsequent clash of cultures. The story examines the effects of colonialism on African societies, the clash between tradition and change, and the struggle between individual and society. Despite his efforts to resist the changes, Okonkwo's life, like his society, falls apart.",
        "id": 86,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "africa"
        ],
        "subject": [
            "conflict",
            "religion"
        ]
    },
    {
        "title": "The Little Prince",
        "author": "Antoine de Saint-Exupéry",
        "description": "A young prince from a tiny asteroid embarks on a journey across the universe, visiting various planets and meeting their strange inhabitants. Along the way, he learns about the follies and absurdities of the adult world, the nature of friendship, and the importance of retaining a childlike wonder and curiosity. His journey eventually leads him to Earth, where he befriends a fox and learns about love and loss before finally returning to his asteroid.",
        "id": 87,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "childhood",
            "innocence",
            "philosophy",
            "relationships"
        ]
    },
    {
        "title": "The Sun Also Rises",
        "author": "Ernest Hemingway",
        "description": "The novel is a poignant tale set in the 1920s post-World War I era, focusing on a group of American and British expatriates living in Paris who travel to Pamplona, Spain for the annual Running of the Bulls. The story explores themes of disillusionment, identity, and the Lost Generation, with the protagonist, a war veteran, grappling with impotence caused by a war injury. The narrative is steeped in the disillusionment and existential crisis experienced by many in the aftermath of the war, and the reckless hedonism of the era is portrayed through the characters' aimless wanderings and excessive drinking.",
        "id": 88,
        "genre": [
            "fiction"
        ],
        "setting": [
            "france",
            "paris",
            "spain",
            "united-states"
        ],
        "subject": [
            "love",
            "relationships",
            "war"
        ]
    },
    {
        "title": "Beloved",
        "author": "Toni Morrison",
        "description": "This novel tells the story of a former African-American slave woman who, after escaping to Ohio, is haunted by the ghost of her deceased daughter. The protagonist is forced to confront her repressed memories and the horrific realities of her past, including the desperate act she committed to protect her children from a life of slavery. The narrative is a poignant exploration of the physical, emotional, and psychological scars inflicted by the institution of slavery, and the struggle for identity and self-acceptance in its aftermath.",
        "id": 89,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "freedom",
            "memory"
        ]
    },
    {
        "title": "Absalom, Absalom!",
        "author": "William Faulkner",
        "description": "This novel is a complex narrative about Thomas Sutpen, a poor white man who rises to power in the South, aiming to create a dynasty that would rival the old aristocratic families. However, his ambitions are thwarted by his own flawed decisions and the overarching racial and societal tensions of the era. The story is not told in a linear fashion but rather through a series of interconnected flashbacks and narratives, offering different perspectives on the same events. The book explores themes of family, class, race, and the destructive power of obsession.",
        "id": 90,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "betrayal",
            "racism"
        ]
    },
    {
        "title": "Their Eyes Were Watching God",
        "author": "Zora Neale Hurston",
        "description": "This novel follows the life of Janie Crawford, a young African-American woman, in the early 20th century. She embarks on a journey through three marriages and self-discovery while challenging the societal norms of her time. The narrative explores her struggle for personal freedom, fulfillment, and identity against the backdrop of racism and gender expectations, ultimately emphasizing the importance of independence and personal growth.",
        "id": 91,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "freedom",
            "love",
            "relationships"
        ]
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "description": "Set in a dystopian future, the novel explores a society where human beings are genetically bred and pharmaceutically conditioned to serve in a ruling order. The society is divided into five castes, each with its specific roles. The narrative follows a savage who rejects the norms of this new world order and struggles to navigate the clash between the values of his upbringing and the reality of this technologically advanced, emotionless society. His resistance prompts a deep examination of the nature of freedom, individuality, and happiness.",
        "id": 92,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "economics",
            "freedom",
            "science",
            "society"
        ]
    },
    {
        "title": "Fictions",
        "author": "Jorge Luis Borges",
        "description": "\"Collected Fiction\" is a compilation of stories by a renowned author that takes readers on a journey through a world of philosophical paradoxes, intellectual humor, and fantastical realities. The book features a range of narratives, from complex, multi-layered tales of labyrinths and detective investigations, to metaphysical explorations of infinity and the nature of identity. It offers an immersive and thought-provoking reading experience, blurring the boundaries between reality and fiction, past and present, and the self and the universe.",
        "id": 93,
        "genre": [
            "fiction"
        ],
        "setting": [
            "london",
            "united-states"
        ],
        "subject": [
            "memory",
            "philosophy"
        ]
    },
    {
        "title": "The Life And Opinions Of Tristram Shandy",
        "author": "Laurence Sterne",
        "description": "The book is a humorous and digressive narrative that follows the eccentric life of Tristram Shandy, who recounts his own story in a non-linear fashion. It delves into the whimsical and often absurd experiences of his family and friends, blending satire, wit, and philosophical musings. The narrative frequently deviates into various anecdotes, reflections, and character studies, creating a rich tapestry of 18th-century life and thought. Through its unconventional structure and playful prose, the book challenges traditional storytelling conventions and explores the complexities of human nature and perception.",
        "id": 94,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "death",
            "philosophy",
            "religion",
            "war"
        ]
    },
    {
        "title": "David Copperfield",
        "author": "Charles Dickens",
        "description": "This novel follows the life of its titular protagonist from his childhood to maturity. Born to a young widow, David endures a difficult childhood when his mother remarries a harsh and abusive man. After his mother's death, he is sent to a boarding school before being forced into child labor. As he grows, David experiences hardship, love, and loss, all the while meeting a colorful array of characters. The novel is a journey of self-discovery and personal growth, showcasing the harsh realities of 19th-century England.",
        "id": 95,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "betrayal",
            "childhood"
        ]
    },
    {
        "title": "The Old Man and the Sea",
        "author": "Ernest Hemingway",
        "description": "An aging Cuban fisherman struggles with a giant marlin far out in the Gulf Stream, isolated from the world and from human help. For days, he fights the marlin alone, admiring its strength, dignity, and faithfulness to its identity—its destiny is as true as his as a fisherman. He finally kills the marlin, but sharks attack and devour it before he can return to the shore. The fisherman returns home empty-handed but remains undefeated, having proven his abilities to himself.",
        "id": 96,
        "genre": [
            "fiction"
        ],
        "setting": [
            "cuba"
        ],
        "subject": [
            "adventure",
            "survival"
        ]
    },
    {
        "title": "Journey to the End of The Night",
        "author": "Louis-Ferdinand Céline",
        "description": "The novel is a semi-autobiographical work that explores the harsh realities of life through the cynical and disillusioned eyes of the protagonist. The narrative follows his experiences from the trenches of World War I, through the African jungles, to the streets of America and the slums of Paris, showcasing the horrors of war, colonialism, and the dark side of human nature. The protagonist's journey is marked by his struggle with despair, loneliness, and the absurdity of existence, offering a bleak yet profound commentary on the human condition.",
        "id": 97,
        "genre": [
            "fiction"
        ],
        "setting": [
            "france",
            "paris"
        ],
        "subject": [
            "existentialism",
            "humanity",
            "war"
        ]
    },
    {
        "title": "Animal Farm",
        "author": "George Orwell",
        "description": "\"Animal Farm\" is a satirical fable set on a farm where the animals revolt, overthrow their human farmer, and take over the running of the farm for themselves. The story is an allegory of the Russian Revolution and the rise of Stalin, and the tale is told by the animals that inhabit the farm, primarily pigs who become the ruling class. Despite their initial attempts at creating an equal society, corruption and power ultimately lead to a regime as oppressive as the one they overthrew.",
        "id": 98,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "betrayal",
            "corruption"
        ]
    },
    {
        "title": "Slaughterhouse-Five",
        "author": "Kurt Vonnegut",
        "description": "The novel follows the life of Billy Pilgrim, a World War II veteran who has become \"unstuck in time,\" experiencing his life events out of order. This includes his experiences as a prisoner of war in Dresden during the Allies' firebombing, his post-war life as a successful optometrist, his abduction by aliens from the planet Tralfamadore, and his eventual death. The book is a critique of war and a demonstration of the destructive nature of time, with a nonlinear narrative that reflects the chaos and unpredictability of life.",
        "id": 99,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "fictional-location",
            "germany"
        ],
        "subject": [
            "death",
            "memory",
            "survival",
            "war"
        ]
    },
    {
        "title": "Gulliver's Travels",
        "author": "Jonathan Swift",
        "description": "This classic satire follows the travels of a surgeon and sea captain who embarks on a series of extraordinary voyages. The protagonist first finds himself shipwrecked on an island inhabited by tiny people, later discovers a land of giants, then encounters a society of intelligent horses, and finally lands on a floating island of scientists. Through these bizarre adventures, the novel explores themes of human nature, morality, and society, offering a scathing critique of European culture and the human condition.",
        "id": 100,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "corruption",
            "culture",
            "politics",
            "science",
            "society"
        ]
    },
    {
        "title": "A Passage to India",
        "author": "E. M. Forster",
        "description": "The novel takes place in British-ruled India, where the cultural divide between the British and the Indians is explored. The story focuses on the experiences of an Indian Muslim, Dr. Aziz, and his interactions with an English woman, Miss Quested, and her elderly friend, Mrs. Moore. After an expedition to the Marabar Caves, Miss Quested accuses Dr. Aziz of assault, leading to a trial that deepens the racial tensions and prejudices between the colonizers and the colonized. The novel is a critique of British imperialism and a study of the cultural and racial misunderstandings and ill-will between the British and the Indian people.",
        "id": 101,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "england",
            "india"
        ],
        "subject": [
            "justice",
            "racism",
            "religion"
        ]
    },
    {
        "title": "Hamlet",
        "author": "William Shakespeare",
        "description": "This classic play revolves around the young Prince of Denmark who is thrown into a state of emotional turmoil after his father's sudden death and his mother's quick remarriage to his uncle. The prince is visited by the ghost of his father who reveals that he was murdered by the uncle, prompting the prince to seek revenge. The narrative explores themes of madness, revenge, and moral corruption as the prince navigates the complex political and emotional landscape of the Danish court.",
        "id": 102,
        "genre": [
            "fiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "betrayal",
            "corruption",
            "death"
        ]
    },
    {
        "title": "Dune",
        "author": "Frank Herbert",
        "description": "Set in a distant future, the novel follows Paul Atreides, whose family assumes control of the desert planet Arrakis. As the only producer of a highly valuable resource, jurisdiction over Arrakis is contested among competing noble families. After Paul and his family are betrayed, the story explores themes of politics, religion, and man’s relationship to nature, as Paul leads a rebellion to restore his family's reign.",
        "id": 103,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location",
            "united-states"
        ],
        "subject": [
            "betrayal",
            "economics",
            "politics",
            "religion",
            "survival"
        ]
    },
    {
        "title": "Gone With the Wind",
        "author": "Margaret Mitchell",
        "description": "Set against the backdrop of the American Civil War and Reconstruction era, this novel follows the life of a young Southern belle, who is known for her beauty and charm. Her life takes a turn when she is forced to make drastic changes to survive the war and its aftermath. The story revolves around her struggle to maintain her family's plantation and her complicated love life, especially her unrequited love for a married man, and her tumultuous relationship with a roguish blockade runner.",
        "id": 104,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "love",
            "society",
            "survival",
            "war"
        ]
    },
    {
        "title": "Dracula",
        "author": "Bram Stoker",
        "description": "This classic horror novel tells the story of Count Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and a small group of people led by Professor Abraham Van Helsing. The narrative is composed of journal entries, letters, and telegrams written by the novel's protagonists, providing different perspectives on the gruesome events unfolding. The book touches on themes of sexuality, gender roles, and the clash of modern science with traditional superstition.",
        "id": 105,
        "genre": [
            "fiction",
            "horror",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "death",
            "religion",
            "science"
        ]
    },
    {
        "title": "The Portrait of a Lady",
        "author": "Henry James",
        "description": "This classic novel explores the life of a young, independent American woman who inherits a large amount of money and moves to Europe, where she falls into a manipulative and oppressive marriage. The story delves into themes of personal freedom, responsibility, and betrayal, as the protagonist navigates the complexities of high society, love, and the consequences of her choices.",
        "id": 106,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "italy"
        ],
        "subject": [
            "art",
            "betrayal",
            "freedom",
            "love",
            "relationships",
            "society"
        ]
    },
    {
        "title": "The Aeneid",
        "author": "Virgil",
        "description": "This epic poem tells the story of Aeneas, a Trojan who travels to Italy, where he becomes the ancestor of the Romans. It includes a series of prophecies about Rome's future and the deeds of heroic individuals, and is divided into two sections, the first illustrating the hero's journey and the second detailing the wars and battles that ensue as Aeneas attempts to establish a new home in Italy. The narrative is deeply imbued with themes of duty, fate, and divine intervention.",
        "id": 107,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location",
            "greece",
            "italy"
        ],
        "subject": [
            "betrayal",
            "death",
            "love",
            "war"
        ]
    },
    {
        "title": "Lord of the Flies",
        "author": "William Golding",
        "description": "A group of British boys are stranded on an uninhabited island after their plane crashes during wartime. Initially, they attempt to establish order, creating rules and electing a leader. However, as time passes, their civility erodes, and they descend into savagery and chaos. The struggle for power intensifies, leading to violence and death. The novel explores themes of innocence, the inherent evil in mankind, and the thin veneer of civilization.",
        "id": 108,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "adventure",
            "innocence",
            "survival",
            "violence"
        ]
    },
    {
        "title": "The Handmaid's Tale",
        "author": "Margaret Atwood",
        "description": "Set in a dystopian future, this novel presents a society where women are stripped of their rights and are classified into various roles based on their fertility and societal status. The protagonist is a handmaid, a class of women used solely for their reproductive capabilities by the ruling class. The story is a chilling exploration of the extreme end of misogyny, where women are reduced to their biological functions, and a critique of religious fundamentalism.",
        "id": 109,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "freedom",
            "relationships",
            "religion"
        ]
    },
    {
        "title": "The Good Soldier",
        "author": "Ford Madox Ford",
        "description": "\"The Good Soldier\" is a tragic tale of two seemingly perfect couples: an American couple and an English couple, who meet at a German spa and share a nine-year friendship. However, underneath the surface, their relationships are far from ideal, filled with infidelity, lies, and deceit. The story is narrated by the American husband, who is the last to realize the intricate web of affairs and betrayals amongst the group. The novel explores themes of love, passion, and the destruction that can result from suppressed emotions and societal pressures.",
        "id": 110,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "england",
            "germany"
        ],
        "subject": [
            "betrayal",
            "death",
            "deception",
            "love"
        ]
    },
    {
        "title": "Little Women",
        "author": "Louisa May Alcott",
        "description": "This classic novel follows the lives of the four March sisters - Meg, Jo, Beth, and Amy - as they navigate the challenges and joys of adolescence and adulthood in 19th century New England. As they grow, they grapple with issues of poverty, gender roles, love, and personal identity, each in her own unique way. The story is a testament to the power of family, sisterhood, and female resilience in a time of societal constraints.",
        "id": 111,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "art",
            "death",
            "love"
        ]
    },
    {
        "title": "All Quiet on the Western Front",
        "author": "Erich Maria Remarque",
        "description": "The novel tells the story of a young German soldier, Paul Bäumer, and his experiences during World War I. The narrative explores the physical and emotional toll of war, the camaraderie between soldiers, and the disillusionment of a generation thrown into a brutal conflict. The protagonist and his friends grapple with survival, fear, and the loss of innocence, providing a stark and poignant critique of the futility and destructiveness of war.",
        "id": 112,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "france",
            "germany"
        ],
        "subject": [
            "death",
            "survival",
            "war"
        ]
    },
    {
        "title": "Candide",
        "author": "Voltaire",
        "description": "\"Candide\" is a satirical novel that follows the adventures of a young man, Candide, who is living a sheltered life in an Edenic paradise and being indoctrinated with Leibnizian optimism by his mentor. When he is expelled from the paradise for kissing a baron's daughter, he embarks on a journey around the world, witnessing the horrors of war, natural disasters, and human cruelty. Throughout his journey, Candide maintains his optimistic philosophy, despite the constant hardships he faces, ultimately concluding that one must cultivate their own garden, a metaphor for taking control of one's own destiny.",
        "id": 113,
        "genre": [
            "fiction"
        ],
        "setting": [
            "france",
            "germany",
            "italy"
        ],
        "subject": [
            "love",
            "philosophy",
            "religion",
            "war"
        ]
    },
    {
        "title": "The Age of Innocence",
        "author": "Edith Wharton",
        "description": "Set in the 1870s, the novel revolves around Newland Archer, a young lawyer from New York's high society, who is engaged to the beautiful and conventional May Welland. His life takes a turn when he meets May's cousin, the Countess Ellen Olenska, who has returned from Europe after leaving her scandalous husband. Torn between his duty and passion, Archer struggles with the constraints of the society he is a part of. The book offers a vivid portrayal of the struggle between individual desires and societal expectations in the upper-class New York society of the late 19th century.",
        "id": 114,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "new-york",
            "united-states"
        ],
        "subject": [
            "love",
            "relationships",
            "society"
        ]
    },
    {
        "title": "Oedipus the King",
        "author": "Sophocles",
        "description": "\"Oedipus the King\" is a tragic play that revolves around the life of Oedipus, the king of Thebes, who is prophesied to kill his father and marry his mother. Despite his attempts to avoid this fate, Oedipus unknowingly fulfills the prophecy. When he discovers the truth about his actions, he blinds himself in despair. The play explores themes of fate, free will, and the quest for truth, highlighting the tragic consequences of human hubris and ignorance.",
        "id": 115,
        "genre": [
            "fiction"
        ],
        "setting": [
            "greece"
        ],
        "subject": [
            "justice"
        ]
    },
    {
        "title": "A Portrait of the Artist as a Young Man",
        "author": "James Joyce",
        "description": "This novel is a semi-autobiographical account of a young man's intellectual and artistic development in late 19th-century Ireland. The protagonist struggles with issues of identity, faith, and nationality, ultimately rejecting the traditional values of his Catholic upbringing to pursue his own path as an artist. The book is renowned for its innovative narrative style and its exploration of themes such as individuality, freedom, and the nature of art.",
        "id": 116,
        "genre": [
            "fiction"
        ],
        "setting": [
            "ireland"
        ],
        "subject": [
            "art",
            "freedom",
            "religion"
        ]
    },
    {
        "title": "The Leopard",
        "author": "Giuseppe Tomasi di Lampedusa",
        "description": "\"The Leopard\" is a historical novel set in 19th-century Sicily, during the time of the Italian unification or Risorgimento. It centers on an aging, aristocratic protagonist who is coming to terms with the decline of his class and the rise of a new social order. The narrative weaves together personal drama with the larger political and social upheaval of the time, providing a rich, nuanced portrait of a society in transition. Despite his resistance to change, the protagonist ultimately recognizes its inevitability and the futility of his efforts to preserve the old ways.",
        "id": 117,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "italy"
        ],
        "subject": [
            "death",
            "politics"
        ]
    },
    {
        "title": "The Idiot",
        "author": "Fyodor Dostoevsky",
        "description": "The book follows the story of a kind-hearted and naive protagonist who returns to Russia from a Swiss sanatorium, where he was treated for a severe epileptic condition. Despite his pure intentions, he gets entangled in a web of love, greed, and manipulation, leading to tragic consequences. The novel explores themes of innocence, love, sacrifice, and societal expectations, offering a profound critique of Russian society during the 19th century.",
        "id": 118,
        "genre": [
            "fiction"
        ],
        "setting": [
            "germany",
            "russia"
        ],
        "subject": [
            "death",
            "innocence",
            "love",
            "society"
        ]
    },
    {
        "title": "Charlotte's Web",
        "author": "E. B. White",
        "description": "A young girl named Fern saves a runt piglet from being slaughtered and names him Wilbur. When Wilbur grows too large, he is sent to live in her uncle's barn, where he befriends a clever spider named Charlotte. When Wilbur's life is in danger again, Charlotte weaves messages into her web to convince the farmer that Wilbur is too special to kill. The book explores themes of friendship, sacrifice, and the cycle of life.",
        "id": 119,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "childhood"
        ]
    },
    {
        "title": "The Golden Notebook",
        "author": "Doris May Lessing",
        "description": "The novel centers around a woman named Anna Wulf, a writer who keeps four notebooks, each representing a different aspect of her life: her experiences in Africa, her current life in London, a novel she is writing, and her personal experiences. As Anna's mental state deteriorates, she attempts to unify her fragmented self in a fifth notebook, the golden notebook. The novel explores themes of mental breakdown, communism, the changing role of women, and the fear of nuclear war.",
        "id": 120,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "art",
            "politics",
            "relationships"
        ]
    },
    {
        "title": "The Metamorphosis",
        "author": "Franz Kafka",
        "description": "The book tells the story of a man who wakes up one morning to find himself transformed into a giant insect. His transformation causes him to lose his job and become ostracized from his family, who are horrified and repulsed by his new form. As he grapples with his new reality, he becomes increasingly isolated and starts to lose his sense of humanity. The book explores themes of alienation, guilt, and identity, and is a profound examination of the human condition.",
        "id": 121,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "alienation"
        ]
    },
    {
        "title": "Orlando",
        "author": "Virginia Woolf",
        "description": "The novel follows the life of a young nobleman in Elizabethan England who inexplicably transforms into a woman at the age of 30 and lives on for three centuries without aging. Throughout the centuries, the protagonist experiences various historical events, engages in relationships with both men and women, and explores the complexities of gender identity and sexuality. The book is an exploration of the fluidity of gender and time, as well as a critique of societal norms and expectations.",
        "id": 122,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "art",
            "love",
            "society"
        ]
    },
    {
        "title": "The Castle",
        "author": "Franz Kafka",
        "description": "This novel presents the story of a man who arrives in a village and struggles to gain access to the mysterious authorities who govern it from a castle. The protagonist, a surveyor, faces the constant frustration of his efforts to make contact with the elusive authorities and integrate into village society. The book explores themes of alienation, bureaucracy, the seemingly endless frustrations of man's attempts to stand against the system, and the futile pursuit of an unobtainable goal.",
        "id": 123,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "alienation",
            "existentialism"
        ]
    },
    {
        "title": "Faust",
        "author": "Johann Wolfgang von Goethe",
        "description": "The book is a tragic play in two parts that tells the story of a scholarly man named Faust, who becomes dissatisfied with his life and makes a pact with the devil, Mephistopheles. In exchange for unlimited knowledge and worldly pleasures, Faust agrees to give his soul to Mephistopheles after death. The narrative explores themes of ambition, despair, love, and redemption, ultimately leading to Faust's salvation.",
        "id": 124,
        "genre": [
            "fiction"
        ],
        "setting": [
            "germany"
        ],
        "subject": [
            "love",
            "philosophy",
            "religion"
        ]
    },
    {
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "description": "A young sailor, unjustly accused of treason, is imprisoned without trial in a grim fortress. After a daring escape, he uncovers a hidden treasure and transforms himself into the mysterious and wealthy Count of Monte Cristo. He then sets out to exact revenge on those who wronged him, using his newfound power and influence. Throughout his journey, he grapples with questions about justice, vengeance, and whether ultimate power can ultimately corrupt.",
        "id": 125,
        "genre": [
            "fiction",
            "historical-fiction",
            "mystery",
            "thrillers"
        ],
        "setting": [
            "france",
            "paris",
            "united-states"
        ],
        "subject": [
            "adventure",
            "betrayal",
            "deception",
            "justice",
            "love"
        ]
    },
    {
        "title": "The Stories of Anton Chekhov",
        "author": "Anton Chekhov",
        "description": "This collection of short stories explores the complexities of human nature and society in 19th-century Russia. Written by a renowned Russian author, the stories range from humorous to tragic, often focusing on the everyday lives and struggles of ordinary people. The author's keen observation and deep understanding of human nature shine through in these tales, making them timeless classics that continue to resonate with readers today.",
        "id": 126,
        "genre": [
            "fiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "art",
            "death",
            "justice",
            "love",
            "relationships"
        ]
    },
    {
        "title": "The Scarlet Letter",
        "author": "Nathaniel Hawthorne",
        "description": "Set in 17th-century Puritan Boston, this novel tells the story of a woman who conceives a daughter through an affair and struggles to create a new life of repentance and dignity. She is forced to wear a scarlet \"A\" on her dress as a sign of her adultery while her lover, a revered local minister, remains unnamed and unpunished. Throughout the book, themes of sin, legalism, and guilt are explored.",
        "id": 127,
        "genre": [
            "fiction",
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
        "title": "As I Lay Dying",
        "author": "William Faulkner",
        "description": "The narrative unfolds through the eyes of 15 different characters over 59 chapters. It is the story of the death of Addie Bundren and her poor, rural family's quest and motivations—noble or selfish—to honor her wish to be buried in her hometown of Jefferson, Mississippi. As the Bundren family undertakes a journey to fulfill Addie's last wish, they face many hardships and personal revelations. The novel explores themes of existentialism, death, and the nature of family relationships.",
        "id": 128,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "death",
            "religion"
        ]
    },
    {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "description": "The novel follows the life of a handsome young man who, after having his portrait painted, is upset to realize that the painting will remain beautiful while he ages. After expressing a wish that the painting would age instead of him, he is shocked to find that his wish comes true. As he indulges in a life of hedonism and immoral acts, his portrait becomes increasingly grotesque, reflecting the damage his actions have on his soul. The story serves as a cautionary tale about the dangers of vanity, selfishness, and the pursuit of pleasure without regard for consequences.",
        "id": 129,
        "genre": [
            "fiction",
            "horror"
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "art",
            "corruption"
        ]
    },
    {
        "title": "The Tin Drum",
        "author": "Günter Grass",
        "description": "The novel tells the story of Oskar Matzerath, a boy who decides on his third birthday that he will stop growing and remain a three-year-old forever. Oskar is gifted with a tin drum by his mother, which he uses to express his emotions and thoughts. Living in Danzig during the rise of Nazi Germany, Oskar's refusal to grow is a form of protest against the adult world. The book is a blend of magical realism and historical fiction, providing a unique perspective on the horrors of World War II and the post-war era in Germany.",
        "id": 130,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "germany"
        ],
        "subject": [
            "art",
            "love",
            "politics",
            "war"
        ]
    },
    {
        "title": "Buddenbrooks",
        "author": "Thomas Mann",
        "description": "\"Buddenbrooks\" is a novel that chronicles the decline of a wealthy north German merchant family over the course of four generations. The narrative focuses on the fluctuating fortunes and internal struggles of the family, reflecting the societal changes and economic decline of the period. The family's personal and business relationships, their moral values, and their struggle to maintain social status are all explored against the backdrop of the changing political and social landscape.",
        "id": 132,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "germany"
        ],
        "subject": [
            "art",
            "death",
            "religion"
        ]
    },
    {
        "title": "Demons",
        "author": "Fyodor Dostoevsky",
        "description": "\"The Possessed\" is a complex political novel set in a provincial Russian town, exploring the destructive influence of radical ideologies on society. The narrative revolves around a group of revolutionaries, their philosophical debates and their destructive actions, driven by nihilism and anarchism. The story is a critique of the political and social chaos of the time, showcasing the author's deep understanding of human psychology and his profound insights into the human condition. It is an exploration of faith, reason, and the nature of freedom and is considered one of the most significant works of Russian literature.",
        "id": 133,
        "genre": [
            "fiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "betrayal",
            "philosophy",
            "politics",
            "religion"
        ]
    },
    {
        "title": "Emma",
        "author": "Jane Austen",
        "description": "The novel revolves around Emma, a well-meaning but disaster-prone matchmaker, who ignores her own romantic feelings while setting out to find a suitor for her friend Harriet. Her efforts cause more problems than solutions as she leaves a trail of mishaps behind her. As her plans go awry, Emma realizes that she herself may be the one in love. The book is a classic exploration of social manners, love, and marriage in 19th-century England.",
        "id": 134,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "deception",
            "love"
        ]
    },
    {
        "title": "The Wind in the Willows",
        "author": "Kenneth Grahame",
        "description": "\"The Wind in the Willows\" is a charming tale about the adventures of four anthropomorphic animal friends - Mole, Rat, Badger, and the rebellious and extravagant Toad. The story is set in the idyllic English countryside and explores themes of friendship, exploration, and respect for nature. The narrative is marked by Toad's reckless behavior, his obsession with motor cars, and his eventual redemption. The other characters, with their contrasting personalities, bring balance and depth to the story.",
        "id": 135,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "adventure"
        ]
    },
    {
        "title": "For Whom the Bell Tolls",
        "author": "Ernest Hemingway",
        "description": "Set in the backdrop of the Spanish Civil War, the novel follows the story of an American dynamiter, who is assigned the task of blowing up a bridge during a crucial attack on the city of Segovia. Alongside the war narrative, the story also explores his relationships with various characters, including his love affair with a young Spanish woman. The narrative beautifully encapsulates themes of love, war, death, and the transient nature of life.",
        "id": 136,
        "genre": [
            "fiction"
        ],
        "setting": [
            "spain"
        ],
        "subject": [
            "betrayal",
            "death",
            "freedom",
            "love",
            "violence",
            "war"
        ]
    },
    {
        "title": "Pale Fire",
        "author": "Vladimir Nabokov",
        "description": "The novel is a unique blend of fiction, commentary, and poetry, presented as a 999-line poem written by a fictional poet, followed by an extensive commentary and foreword by his neighbor and academic colleague. The novel blurs the line between reality and fiction, as the commentator's notes reveal an alternative narrative, one of exile, intrigue, and murder. The book is a playful exploration of authorship, deception, and the nature of art.",
        "id": 137,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "death"
        ]
    },
    {
        "title": "Dead Souls",
        "author": "Nikolai Gogol",
        "description": "In this satirical novel, a man travels through Russia buying up the titles to deceased serfs (or \"souls\") from their naive landowners, under the guise of a get-rich-quick scheme. However, his real plan is to use these \"dead souls\" to create a phantom estate and secure a massive loan. The story explores the corruption and greed prevalent in 19th-century Russian society and provides a unique perspective on the human condition.",
        "id": 138,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "corruption",
            "deception",
            "society"
        ]
    },
    {
        "title": "The Color Purple",
        "author": "Alice Walker",
        "description": "Set in the early 20th century, the novel is an epistolary tale of a young African-American woman named Celie, living in the South. She faces constant abuse and hardship, first from her father and then from her husband. The story unfolds through her letters written to God and her sister Nettie, revealing her emotional journey from oppression to self-discovery and independence, aided by her relationships with strong women around her. The narrative explores themes of racism, sexism, domestic violence, and the power of sisterhood and love.",
        "id": 139,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "love",
            "racism",
            "religion"
        ]
    },
    {
        "title": "Robinson Crusoe",
        "author": "Daniel Defoe",
        "description": "The book is a classic adventure novel about a man who spends 28 years on a remote tropical island near Trinidad, encountering cannibals, captives, and mutineers before being rescued. The story is noted for its realistic portrayal of the protagonist's physical and psychological development and for its detailed depiction of his attempts to create a life for himself in the wilderness. The novel has been interpreted as an allegory for the development of civilization, as well as a critique of European colonialism.",
        "id": 140,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "adventure",
            "survival"
        ]
    },
    {
        "title": "The Bell Jar",
        "author": "Sylvia Plath",
        "description": "The novel follows the story of a young woman who wins a guest editorship at a magazine in New York City and, after a series of personal and professional disappointments, suffers a mental breakdown and returns to her family, where she continues to struggle with depression and suicidal thoughts. The protagonist's experiences in psychiatric institutions and her attempts to reclaim her life are depicted with brutal honesty, making it a poignant exploration of mental illness and the societal pressures faced by women in the mid-20th century.",
        "id": 141,
        "genre": [
            "fiction"
        ],
        "setting": [
            "new-york",
            "united-states"
        ],
        "subject": [
            "relationships",
            "society"
        ]
    },
    {
        "title": "Waiting for Godot",
        "author": "Samuel Beckett",
        "description": "\"Waiting for Godot\" is a play that explores themes of existentialism, despair, and the human condition through the story of two characters, Vladimir and Estragon, who wait endlessly for a man named Godot, who never arrives. While they wait, they engage in a variety of discussions and encounter three other characters. The play is characterized by its minimalistic setting and lack of a traditional plot, leaving much to interpretation.",
        "id": 142,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "absurdity",
            "existentialism"
        ]
    },
    {
        "title": "Vanity Fair",
        "author": "William Makepeace Thackeray",
        "description": "This classic novel follows the lives of two contrasting women, the cunning and ruthless Becky Sharp and the sweet and naive Amelia Sedley, against the backdrop of English society during the Napoleonic Wars. The book is a satirical exploration of the obsession with wealth, status, and social climbing, and the moral bankruptcy that can result from such pursuits. The narrative weaves an intricate tale of love, betrayal, and redemption, exposing the vanity and hypocrisy of high society.",
        "id": 144,
        "genre": [
            "fiction",
            "historical-fiction"
        ],
        "setting": [
            "england",
            "london",
            "united-kingdom"
        ],
        "subject": [
            "deception",
            "society"
        ]
    },
    {
        "title": "Treasure Island",
        "author": "Robert Louis Stevenson",
        "description": "This classic adventure novel tells the story of young Jim Hawkins, who stumbles upon a treasure map and embarks on a perilous journey to find the buried treasure. Along the way, he encounters a host of memorable characters, including the cunning and treacherous Long John Silver. The narrative is filled with action, intrigue, and suspense, as Hawkins and his companions face pirates, mutiny, and other dangers in their quest for the hidden treasure.",
        "id": 145,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location",
            "ireland"
        ],
        "subject": [
            "adventure",
            "deception",
            "survival"
        ]
    },
    {
        "title": "Bleak House",
        "author": "Charles Dickens",
        "description": "\"Bleak House\" is a complex narrative that critiques the British judiciary system through a long-running legal case known as Jarndyce and Jarndyce. The story follows the lives of numerous characters, including the kind-hearted Esther Summerson, her friends Richard and Ada, and their guardian, Mr. Jarndyce, who are all caught in the web of a legal dispute over an inheritance. The novel is known for its detailed depiction of the legal system, its vivid characters, and its exploration of social issues of the time.",
        "id": 146,
        "genre": [
            "fiction",
            "mystery"
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "corruption",
            "death",
            "justice"
        ]
    },
    {
        "title": "The Tale of Genji",
        "author": "Murasaki Shikibu",
        "description": "\"The Tale of Genji\" is a classic work of Japanese literature from the 11th century, often considered the world's first novel. The story revolves around the life of Genji, the son of an emperor, exploring his political rise, romantic relationships, and the complex court life of the Heian era. The novel is celebrated for its detailed characterization and its analysis of the different forms of love.",
        "id": 147,
        "genre": [
            "fiction"
        ],
        "setting": [
            "japan"
        ],
        "subject": [
            "art",
            "betrayal",
            "death",
            "love",
            "politics"
        ]
    },
    {
        "title": "Tess of the d'Urbervilles",
        "author": "Thomas Hardy",
        "description": "This is a tragic tale of a young woman named Tess who comes from a poor family in rural England. Tess is sent to work for a wealthy family, where she is seduced by a man who abandons her after she becomes pregnant. The baby dies, and Tess is ostracized by her community. She falls in love with a kind man, but when she confesses her past, he rejects her. Desperate and heartbroken, Tess murders her former seducer and is eventually captured and executed. The novel explores themes of fate, injustice, and the oppressive sexual morals of its time.",
        "id": 148,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "betrayal",
            "love",
            "relationships"
        ]
    },
    {
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "description": "In a dystopian future where books are banned and burned by the government to prevent dissenting ideas, a fireman named Guy Montag, whose job is to burn books, begins to question the society he serves. After a series of events, including meeting a free-thinking teenager and witnessing a woman choosing to die with her books, Montag begins to secretly collect and read books, leading to his eventual rebellion against the oppressive regime. The narrative serves as a critique of censorship, conformity, and the dangers of an illiterate society.",
        "id": 149,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "freedom",
            "society"
        ]
    },
    {
        "title": "Brideshead Revisited",
        "author": "Evelyn Waugh",
        "description": "The novel is a nostalgic story about the narrator's involvement with the Flyte family, British aristocrats living in a grand mansion called Brideshead. The story explores themes of faith, love, and the decline of the British aristocracy, primarily through the narrator's relationships with the family's Catholic faith and his complicated friendship with the family's son and his love for the daughter. The novel is set in the backdrop of the time period between the two World Wars.",
        "id": 151,
        "genre": [
            "fiction"
        ],
        "setting": [
            "england",
            "united-states"
        ],
        "subject": [
            "art",
            "love",
            "relationships"
        ]
    },
    {
        "title": "The Unbearable Lightness of Being",
        "author": "Milan Kundera",
        "description": "Set against the backdrop of the Prague Spring period of Czechoslovak history, the novel explores the philosophical concept of Nietzsche's eternal return through the intertwined lives of four characters: a womanizing surgeon, his intellectual wife, his naïve mistress, and her stoic lover. The narrative delves into their personal struggles with lightness and heaviness, freedom and fate, love and betrayal, and the complexities of human relationships, all while offering a profound meditation on the nature of existence and the paradoxes of life.",
        "id": 152,
        "genre": [
            "fiction"
        ],
        "setting": [
            "czech-republic"
        ],
        "subject": [
            "art",
            "existentialism",
            "freedom",
            "love",
            "memory",
            "philosophy",
            "politics",
            "relationships"
        ]
    },
    {
        "title": "A Farewell to Arms",
        "author": "Ernest Hemingway",
        "description": "Set during World War I, the novel follows an American ambulance driver in the Italian army and his love affair with a British nurse. The story is a first-person account of the protagonist's experiences in war and his struggle to survive amidst chaos and destruction. The narrative explores themes of love, war, and the fragility of life, culminating in a tragic ending that underscores the futile nature of war and the inevitable suffering it brings.",
        "id": 153,
        "genre": [
            "fiction"
        ],
        "setting": [
            "italy",
            "new-york"
        ],
        "subject": [
            "love",
            "relationships",
            "war"
        ]
    },
    {
        "title": "Doctor Faustus",
        "author": "Thomas Mann",
        "description": "The novel is a reimagining of the Faust legend set in the context of the first half of the 20th century and the turmoil of Germany in that period. It tells the story of a composer who makes a pact with the devil, exchanging his soul for unlimited creative genius. The protagonist's life and work reflect the cultural and political journey of Germany leading up to World War II, providing a deep exploration of the individual's role in a society undergoing dramatic change. The novel is also a profound meditation on the nature of time, the art and the artist, and the destructiveness of human ambition.",
        "id": 154,
        "genre": [
            "fiction"
        ],
        "setting": [
            "germany"
        ],
        "subject": [
            "art",
            "philosophy",
            "politics"
        ]
    },
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "description": "This comedic science fiction novel follows the intergalactic adventures of an unwitting human, Arthur Dent, who is rescued just before Earth's destruction by his friend Ford Prefect, a researcher for a galactic travel guide. Together, they hitch a ride on a stolen spaceship, encountering a range of bizarre characters, including a depressed robot and a two-headed ex-president of the galaxy. Through a series of satirical and absurd escapades, the book explores themes of existentialism, bureaucracy, and the absurdity of life, all while poking fun at the science fiction genre and offering witty commentary on the human condition.",
        "id": 155,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location",
            "united-states"
        ],
        "subject": [
            "adventure",
            "existentialism",
            "philosophy",
            "survival"
        ]
    },
    {
        "title": "The Heart Is A Lonely Hunter",
        "author": "Carson McCullers",
        "description": "The novel explores the spiritual isolation of misfits and outcasts in a small town of the U.S. South. Its protagonist is a deaf-mute who becomes the confidant for various troubled souls including a black physician, a bitter labor activist, a lonely young girl, and a struggling café owner. Each pours their heart out to him, but he remains unable to respond, reflecting the deep human need for connection and understanding.",
        "id": 156,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "alienation",
            "love",
            "racism"
        ]
    },
    {
        "title": "Wide Sargasso Sea",
        "author": "Jean Rhys",
        "description": "This novel is a postcolonial prequel to \"Jane Eyre,\" exploring the life of Mr. Rochester's mad wife, Bertha. Set in Jamaica during the 1830s, it follows the story of Antoinette Cosway, a white Creole heiress, from her youth in the Caribbean to her unhappy marriage and move to England. Caught in a society that both rejects and exoticizes her, Antoinette is ultimately driven into madness by her oppressive husband and the haunting legacy of colonialism.",
        "id": 157,
        "genre": [
            "fiction"
        ],
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "love",
            "relationships"
        ]
    },
    {
        "title": "One Day in the Life of Ivan Denisovich",
        "author": "Aleksandr Solzhenitsyn",
        "description": "This novel provides a detailed account of a single day in the life of a prisoner, Ivan Denisovich, in a Soviet labor camp in the 1950s. The narrative follows Ivan as he navigates the harsh realities of his daily routine, from the moment he wakes up to when he goes to bed. The book provides a stark portrayal of the brutality and inhumanity of the Soviet gulag system while also highlighting the resilience and dignity of the human spirit under such oppressive conditions.",
        "id": 158,
        "genre": [
            "fiction"
        ],
        "setting": [
            "fictional-location",
            "russia"
        ],
        "subject": [
            "freedom",
            "survival",
            "war"
        ]
    },
    {
        "title": "Macbeth",
        "author": "William Shakespeare",
        "description": "This classic play follows the tragic tale of Macbeth, a Scottish general whose ambition is sparked by a prophecy from three witches that he will one day become King of Scotland. Consumed by ambition and spurred on by his wife, Macbeth murders King Duncan and takes the throne. However, guilt and paranoia plague him, leading to a reign of terror and further bloodshed. His desperate attempts to cling onto power lead to his downfall, illustrating the destructive power of unchecked ambition.",
        "id": 159,
        "genre": [
            "horror"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "The Turn of the Screw",
        "author": "Henry James",
        "description": "A young governess is hired to care for two children at a remote English estate. However, she soon becomes convinced that the grounds are haunted by two former employees who have taken control of the children. As she fights to free the children from these apparitions, the line between reality and her own fears becomes increasingly blurred, leading to a chilling and ambiguous conclusion.",
        "id": 160,
        "genre": [
            "horror",
            "mystery"
        ],
        "setting": [
            "england",
            "united-states"
        ],
        "subject": [
            "corruption",
            "death",
            "innocence"
        ]
    },
    {
        "title": "The Haunting of Hill House",
        "author": "Shirley Jackson",
        "description": "The book is a chilling tale that revolves around a group of four individuals who decide to stay in a notoriously haunted mansion to conduct a paranormal investigation. The main character, a shy, reclusive woman with a troubled past, becomes increasingly unstable as she experiences terrifying phenomena and becomes obsessed with the house. As the supernatural events escalate, the lines between reality and imagination blur, leading to a shocking and tragic conclusion.",
        "id": 161,
        "genre": [
            "horror"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "death"
        ]
    },
    {
        "title": "The Stand",
        "author": "Stephen King",
        "description": "This post-apocalyptic horror/fantasy novel presents a world devastated by a deadly plague, killing 99% of the population. The survivors, drawn together by dreams of a charismatic and benevolent figure, gather in Boulder, Colorado to form a new society. However, a malevolent figure also emerges, attracting a following of his own and setting the stage for a classic battle between good and evil. The story delves into themes of community, morality, and the capacity for both destruction and regeneration within humanity.",
        "id": 162,
        "genre": [
            "horror",
            "thrillers"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "conflict",
            "survival"
        ]
    },
    {
        "title": "The Shining",
        "author": "Stephen King",
        "description": "A recovering alcoholic accepts a job as a winter caretaker at a remote Colorado hotel, hoping the isolation will help him reconnect with his wife and young son, and work on his writing. However, the hotel has a dark history and a powerful malevolent presence that influences him into violence, while his psychic son sees horrific forebodings from both past and future. As the winter weather leaves them snowbound, the father's sanity deteriorates, leading to a terrifying climax.",
        "id": 163,
        "genre": [
            "horror",
            "thrillers"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "violence"
        ]
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "author": "Robert Louis Stevenson",
        "description": "This classic novel explores the duality of human nature through the story of a respected London doctor who creates a potion that transforms him into a sinister, violent alter ego. As the doctor increasingly loses control over when the transformations occur, his alter ego's evil deeds escalate, causing havoc in the community. The narrative is a chilling exploration of humanity's capacity for evil and the struggle for individuals to reconcile their public personas with their private desires.",
        "id": 165,
        "genre": [
            "horror"
        ],
        "setting": [
            "england",
            "london"
        ],
        "subject": [
            "science"
        ]
    },
    {
        "title": "I Am Legend",
        "author": "Richard Matheson",
        "description": "The novel is a post-apocalyptic horror story that centers around a solitary man who may be the last human alive on earth after a pandemic has turned the rest of humanity into vampire-like creatures. He spends his days fortifying his home, hunting for food, and killing these creatures while they sleep. At night, he is tormented by their attempts to break into his home and kill him. His isolation drives him to the brink of insanity, and the novel explores themes of loneliness, survival, and the human capacity for hope in the face of utter despair.",
        "id": 169,
        "genre": [
            "horror"
        ],
        "setting": [
            "los-angeles"
        ],
        "subject": [
            "humanity"
        ]
    },
    {
        "title": "The Monk",
        "author": "Matthew Lewis",
        "description": "\"The Monk\" is a gothic novel that explores the tragic downfall of a virtuous and respected monk who succumbs to temptation and sin. The protagonist is lured into a world of lust, greed, and pride by a woman who is actually Satan in disguise. His moral decay leads to a series of horrific events including murder, incest, and witchcraft. The novel serves as a cautionary tale about the dangers of excessive pride and the destructive power of unchecked desire.",
        "id": 171,
        "genre": [
            "horror"
        ],
        "setting": [
            "spain"
        ],
        "subject": [
            "innocence"
        ]
    },
    {
        "title": "The Secret History",
        "author": "Donna Tartt",
        "description": "A group of six classics students at a small, elite Vermont college, led by a charismatic professor, become entranced by the study of Greek culture and decide to recreate a Dionysian ritual, which ends in a tragic accident. The group, bound by their shared secret, begins to unravel as paranoia and guilt take hold. The novel explores themes of beauty and terror, the allure of the esoteric, and the destructive consequences of obsession.",
        "id": 178,
        "genre": [
            "mystery",
            "thrillers"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "The Murder of Roger Ackroyd",
        "author": "Agatha Christie",
        "description": "In a small English village, a wealthy man named Roger Ackroyd is found dead, stabbed with a dagger. The victim's friend, a retired detective, comes out of retirement to solve the murder. The detective uncovers a web of deceit, blackmail, and hidden relationships among the victim's family and employees. The shocking twist ending reveals the unlikely murderer and the ingenious method used to commit the crime.",
        "id": 179,
        "genre": [
            "mystery",
            "thrillers"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "betrayal"
        ]
    },
    {
        "title": "Never Let Me Go",
        "author": "Kazuo Ishiguro",
        "description": "The novel is a haunting tale of three friends, who grow up together at a seemingly idyllic English boarding school. As they mature, they discover a dark secret about their school and the purpose of their existence, which is to become organ donors for the rest of society. The story is a profound exploration of what it means to be human, the morality of scientific innovation, and the heartbreaking reality of love and loss.",
        "id": 180,
        "genre": [
            "mystery"
        ],
        "setting": [
            "england",
            "fictional-location"
        ],
        "subject": [
            "humanity",
            "memory"
        ]
    },
    {
        "title": "The Wind-Up Bird Chronicle",
        "author": "Haruki Murakami",
        "description": "A man's search for his wife's missing cat evolves into a surreal journey through Tokyo's underbelly, where he encounters a bizarre collection of characters with strange stories and peculiar obsessions. As he delves deeper, he finds himself entangled in a web of dreamlike scenarios, historical digressions, and metaphysical investigations. His reality becomes increasingly intertwined with the dream world as he grapples with themes of fate, identity, and the dark side of the human psyche.",
        "id": 181,
        "genre": [
            "mystery"
        ],
        "setting": [
            "japan"
        ],
        "subject": [
            "politics",
            "violence"
        ]
    },
    {
        "title": "The Diary of a Young Girl",
        "author": "Anne Frank",
        "description": "This book is a real-life account of a young Jewish girl hiding from the Nazis during World War II, written in diary format. The girl and her family are forced to live in a secret annex in Amsterdam for two years, during which she writes about her experiences, fears, dreams, and the onset of adolescence. The diary provides a poignant and deeply personal insight into the horrors of the Holocaust, making it a powerful testament to the human spirit.",
        "id": 182,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "amsterdam"
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
        "id": 183,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "environment",
            "science"
        ]
    },
    {
        "title": "Essays",
        "author": "Michel de Montaigne",
        "description": "This collection of essays explores a wide range of topics such as solitude, cannibals, the power of the imagination, the education of children, and the nature of friendship. The author employs a unique and personal approach to philosophy, using anecdotes and personal reflections to illustrate his points. The essays provide a profound insight into human nature and condition, and are considered a significant contribution to both literature and philosophy.",
        "id": 184,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "france"
        ],
        "subject": [
            "death",
            "justice",
            "love",
            "philosophy",
            "religion",
            "war"
        ]
    },
    {
        "title": "The Second Sex",
        "author": "Simone de Beauvoir",
        "description": "This influential work explores the treatment and perception of women throughout history, arguing that women have been repressed and defined only in relation to men. The author presents a detailed analysis of women's roles in society, family, work, and in the creation of their own identities. She discusses the concept of 'the other' and how this has been used to suppress women, while also examining the biological, psychological, and societal impacts of this oppression. The book is a seminal text in feminist theory, challenging traditional notions of femininity and calling for equality and freedom for women.",
        "id": 185,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "france"
        ],
        "subject": [
            "culture",
            "existentialism",
            "freedom",
            "philosophy",
            "society"
        ]
    },
    {
        "title": "Walden",
        "author": "Henry David Thoreau",
        "description": "This work is a reflection upon simple living in natural surroundings, inspired by the author's two-year experience of living in a cabin near a woodland pond. Filled with philosophical insights, observations on nature, and declarations of independence from societal expectations, the book is a critique of the complexities of modern civilization and a call to appreciate the beauty and simplicity of the natural world. It explores themes such as self-reliance, solitude, and the individual's relationship with nature.",
        "id": 186,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "philosophy"
        ]
    },
    {
        "title": "The Prince",
        "author": "Niccolo Machiavelli",
        "description": "This classic work of political philosophy provides a pragmatic guide on political leadership and power, arguing that leaders must do whatever necessary to maintain authority and protect their states, even if it means compromising morality and ethics. The book explores various types of principalities, military affairs, the conduct of great leaders, and the virtues a prince should possess. It is known for its controversial thesis, which suggests that the ends justify the means in politics.",
        "id": 187,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "italy"
        ],
        "subject": [
            "deception",
            "politics",
            "war"
        ]
    },
    {
        "title": "On the Origin of Species",
        "author": "Charles Darwin",
        "description": "This groundbreaking work presents the theory of evolution, asserting that species evolve over generations through a process of natural selection. The book provides a comprehensive explanation of how the diversity of life on Earth developed over millions of years from a common ancestry. It includes detailed observations and arguments to support the idea that species evolve by adapting to their environments, challenging the prevailing belief of the time that species were unchanging parts of a designed hierarchy.",
        "id": 189,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "science",
            "survival"
        ]
    },
    {
        "title": "A Room of One's Own",
        "author": "Virginia Woolf",
        "description": "This book is an extended essay that explores the topic of women in fiction, and the societal and economic hindrances that prevent them from achieving their full potential. The author uses a fictional narrator and narrative to explore the many difficulties that women writers faced throughout history, including the lack of education available to them and the societal expectations that limited their opportunities. The central argument is that a woman must have money and a room of her own if she is to write fiction.",
        "id": 190,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "economics",
            "society"
        ]
    },
    {
        "title": "The Autobiography of Malcolm X",
        "author": "Alex Haley",
        "description": "This book is an autobiography narrating the life of a renowned African-American activist. It delves into his transformation from a young man involved in criminal activities to becoming one of the most influential voices in the fight against racial inequality in America. The book provides a deep insight into his philosophies, his time in prison, conversion to Islam, his role in the Nation of Islam, his pilgrimage to Mecca, and his eventual split from the Nation. It also addresses his assassination, making it a powerful account of resilience, redemption, and personal growth.",
        "id": 191,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "new-york",
            "united-states"
        ],
        "subject": [
            "racism",
            "violence"
        ]
    },
    {
        "title": "Communist Manifesto",
        "author": "Karl Marx",
        "description": "This influential political pamphlet advocates for the abolition of private property, the rights of the proletariat, and the eventual establishment of a classless society. The authors argue that all of history is a record of class struggle, culminating in the conflict between the bourgeoisie, who control the means of production, and the proletariat, who provide the labor. They predict that this struggle will result in a revolution, leading to a society where property and wealth are communally controlled.",
        "id": 192,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "germany",
            "united-kingdom"
        ],
        "subject": [
            "economics",
            "philosophy",
            "politics",
            "society"
        ]
    },
    {
        "title": "Confessions",
        "author": "Augustine",
        "description": "\"Confessions\" is an autobiographical work by a renowned theologian, in which he outlines his sinful youth and his conversion to Christianity. It is written in the form of a long, introspective prayer directed to God, exploring the author's spiritual journey and deep philosophical ponderings. The book is renowned for its eloquent and deeply personal exploration of faith, making it a cornerstone of Christian theology and Western literature.",
        "id": 193,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "italy"
        ],
        "subject": [
            "love",
            "memory",
            "philosophy"
        ]
    },
    {
        "title": "The Double Helix",
        "author": "James D. Watson",
        "description": "This book is a personal account of the race to discover the structure of DNA, told from the perspective of one of the co-discoverers. It provides an insider's view of scientific research, the collaboration and competition, the dedication, the doubt, the exhilaration of discovery, and the often fraught relationship between science and the rest of life. The book also explores the personalities, quirks, and conflicts of the scientists involved in the groundbreaking discovery.",
        "id": 194,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "england",
            "united-states"
        ],
        "subject": [
            "science"
        ]
    },
    {
        "title": "Out of Africa",
        "author": "Isak Dinesen",
        "description": "The book is a memoir that recounts the author's experiences and observations living in Kenya, then British East Africa, from 1914 to 1931. It is a lyrical meditation on her life amongst the diverse cultures and wildlife of Africa. The author shares her trials and tribulations of running a coffee plantation, her deep respect for the people and land of Africa, and her intimate understanding of the subtle nuances of African culture and society.",
        "id": 195,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "africa"
        ],
        "subject": [
            "adventure",
            "culture"
        ]
    },
    {
        "title": "The Gulag Archipelago",
        "author": "Aleksandr Solzhenitsyn",
        "description": "\"The Gulag Archipelago\" is a comprehensive and stark account of the Soviet Union's forced labor camp system. The narrative, based on the author's own experiences as a prisoner and on extensive research, documents the history, operation, and life inside the Gulag system. It also provides a critical examination of the regime's legal system, police operations, and political leadership. The book is an intense indictment of the Soviet Union's totalitarian regime, revealing its brutality, inhumanity, and vast scale of its prison camp network.",
        "id": 196,
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
        "id": 197,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "italy"
        ],
        "subject": [
            "humanity",
            "memory",
            "survival"
        ]
    },
    {
        "title": "Democracy in America",
        "author": "Alexis de Tocqueville",
        "description": "This influential book offers an in-depth analysis of the strengths and weaknesses of 19th century American democracy. The author, a French political thinker, provides a detailed examination of the democratic process and its impact on society, politics, and the economy. The work highlights the importance of civil society, local institutions, and the spirit of equality in ensuring the stability of democracy. It also delves into the dangers of majority tyranny, the potential for democratic despotism, and the critical role of religion and morality in sustaining a democratic nation.",
        "id": 198,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "france",
            "united-states"
        ],
        "subject": [
            "philosophy"
        ]
    },
    {
        "title": "Fear and Loathing in Las Vegas",
        "author": "Hunter S. Thompson",
        "description": "This book is a semi-autobiographical novel that chronicles the adventures of a journalist and his attorney as they embark on a drug-fueled trip to Las Vegas. The narrative is a wild and hallucinatory exploration of the American Dream, filled with biting social commentary and outrageous antics. The protagonist's quest for the American Dream quickly devolves into an exploration of the darker side of human nature, highlighting the excesses and depravities of 1960s American society.",
        "id": 200,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "violence"
        ]
    },
    {
        "title": "The Structure of Scientific Revolutions",
        "author": "Thomas Kuhn",
        "description": "This influential book examines the history of science, focusing on the process of scientific revolutions. The author argues that scientific progress is not a linear, continuous accumulation of knowledge, but rather a series of peaceful interludes punctuated by intellectually violent revolutions. During these revolutions, known as paradigm shifts, the old scientific worldview is replaced by a new one. The book also popularized the term 'paradigm shift' and challenged the previously accepted view of science as a steadily progressive discipline.",
        "id": 201,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "science"
        ]
    },
    {
        "title": "The Confessions of Jean-Jacques Rousseau",
        "author": "Jean-Jacques Rousseau",
        "description": "\"The Confessions of Jean-Jacques Rousseau\" is an autobiographical work by a prominent philosopher of the Enlightenment era, who candidly shares his life story, from his humble beginnings in Geneva to his later years in exile. The book delves into his personal struggles, his intellectual journey, and his relationships, all while exploring his philosophical ideas on education, politics, and morality. The author's introspective narrative provides a unique perspective on his life and times, making it a seminal work in the history of autobiography.",
        "id": 203,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "paris"
        ],
        "subject": [
            "childhood",
            "politics"
        ]
    },
    {
        "title": "Thus Spake Zarathustra",
        "author": "Friedrich Nietzsche",
        "description": "This philosophical novel explores the idea of the Übermensch, or \"Overman,\" a superior human being who has achieved self-mastery and created personal meaning in life. The protagonist, Zarathustra, descends from his solitary life in the mountains to share his wisdom with humanity. Through a series of speeches and encounters, he challenges traditional beliefs about good, evil, truth, and religion, and advocates for the transcendence of man into a higher form of existence. The book is noted for its critique of morality, its poetic and often cryptic language, and its exploration of complex philosophical concepts.",
        "id": 204,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "fictional-location",
            "germany"
        ],
        "subject": [
            "existentialism",
            "humanity"
        ]
    },
    {
        "title": "Homage to Catalonia",
        "author": "George Orwell",
        "description": "The book is a personal account of the author's experiences during the Spanish Civil War, specifically his time with the POUM (Partit Obrer d'Unificació Marxista) militia in Catalonia. He provides an in-depth look at the social revolution that took place, the daily life of a soldier, the political infighting and betrayals among the Republican factions, and his eventual disillusionment with the cause he initially supported. The book is both a war memoir and a detailed analysis of a complex political situation.",
        "id": 206,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "spain"
        ],
        "subject": [
            "betrayal",
            "conflict",
            "politics"
        ]
    },
    {
        "title": "The General Theory of Employment, Interest and Money",
        "author": "John Maynard Keynes",
        "description": "This influential economic treatise presents a groundbreaking theory that challenges classical economics, asserting that aggregate demand, driven by public and private sector spending, is the primary factor influencing economic activity and employment levels. The book also introduces the concept of fiscal and monetary policies as tools to manage economic downturns, thus shaping the foundation of modern macroeconomics. It further critiques the idea that market economies would automatically provide full employment and argues for active government intervention to prevent economic recessions and depressions.",
        "id": 207,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "economics"
        ]
    },
    {
        "title": "Leviathan",
        "author": "Thomas Hobbes",
        "description": "\"Leviathan\" is a seminal work of political philosophy that presents an argument for a social contract and rule by an absolute sovereign. The author argues that civil peace and social unity are best achieved by the establishment of a commonwealth through social contract. He suggests that without a strong, central authority to impose law and order, society would descend into a state of nature, characterized by perpetual war and chaos. The book is divided into four parts: Of Man, Of Commonwealth, Of a Christian Commonwealth, and Of the Kingdom of Darkness.",
        "id": 208,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "england"
        ],
        "subject": [
            "conflict",
            "politics"
        ]
    },
    {
        "title": "The Feminine Mystique",
        "author": "Betty Friedan",
        "description": "This groundbreaking book is a sociological examination of the dissatisfaction felt by American housewives in the mid-20th century. The author argues that women are not naturally fulfilled by devoting their lives to homemaking and child-rearing, challenging the widely accepted belief of the era. It explores the idea of the \"problem that has no name\" - the widespread unhappiness of women in the 1950s and early 1960s. The book is considered one of the catalysts of the second-wave feminist movement.",
        "id": 210,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "culture"
        ]
    },
    {
        "title": "The Electric Kool-Aid Acid Test",
        "author": "Tom Wolfe",
        "description": "The book follows the psychedelic adventures of Ken Kesey and his band of Merry Pranksters as they traverse the United States in a painted bus, hosting \"Acid Test\" parties where attendees are given LSD. The narrative is a vivid exploration of the burgeoning counterculture of the 1960s, capturing the spirit of the era through the lens of this eccentric group and their hallucinogenic experiences. It's a seminal work of New Journalism, blending reportage with literary techniques to create a highly subjective, immersive account of the Pranksters' journey.",
        "id": 211,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "adventure"
        ]
    },
    {
        "title": "Relativity",
        "author": "Albert Einstein",
        "description": "This book is a comprehensive introduction to the theory of relativity written by the physicist who developed the theory. It covers both the special and general theories of relativity and provides an accessible explanation of the physics involved, including the nature of light, time, and gravity. The book also discusses the philosophical implications of relativity and its impact on our understanding of reality. Written for a general audience, it aims to make complex scientific concepts understandable to non-experts.",
        "id": 213,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "germany"
        ],
        "subject": [
            "science"
        ]
    },
    {
        "title": "Meditations",
        "author": "Marcus Aurelius",
        "description": "\"Meditations\" is a collection of personal writings by a Roman Emperor, providing deep insights into Stoic philosophy. The book is a series of introspective reflections on how to deal with life's challenges with wisdom, integrity, self-discipline, and benevolent affection for all mankind. It serves as a manual for self-improvement and moral guidance, emphasizing the importance of accepting things outside of one's control and maintaining a tranquil mind amidst adversity.",
        "id": 216,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "italy"
        ],
        "subject": [
            "humanity"
        ]
    },
    {
        "title": "A Brief History of Time",
        "author": "Stephen Hawking",
        "description": "A Brief History of Time is a popular science book that explores a broad range of topics in cosmology, including the Big Bang, black holes, light cones and superstring theory. The author does not shy away from complex theories and concepts, but explains them in a way that is accessible to non-scientific readers. The book also discusses the possibility of time travel and the boundaries of scientific knowledge. Throughout, the author emphasizes the ongoing quest for a unifying theory that can combine quantum mechanics and general relativity into one all-encompassing, coherent theoretical framework.",
        "id": 217,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "fictional-location"
        ],
        "subject": [
            "science"
        ]
    },
    {
        "title": "The Souls of Black Folk",
        "author": "W. E. B. Du Bois",
        "description": "This seminal work is a collection of essays that explores the history and condition of African Americans at the turn of the 20th century. It delves into the issues of race, class, and the socio-economic realities faced by black people post-emancipation. The author employs a combination of history, sociology, and personal narrative to present a powerful critique of American society, highlighting the struggle for civil rights, the importance of black spirituals, and the concept of \"double consciousness\" - the idea of viewing oneself through the lens of a society that sees you as inferior.",
        "id": 218,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "culture",
            "economics",
            "politics",
            "racism"
        ]
    },
    {
        "title": "The Education of Henry Adams",
        "author": "Henry Adams",
        "description": "\"The Education of Henry Adams\" is an autobiographical account that explores the changes in society and politics during the 19th and 20th century from the perspective of an individual who is both a product and critic of that era. The narrative is structured around the author's self-perceived failure to understand or adapt to these changes, despite his privileged education and social status. The book is a reflection on the author's life, his attempts to make sense of the world around him, and his struggle to reconcile his traditional upbringing with the rapid advancements of the modern world.",
        "id": 219,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-states"
        ],
        "subject": [
            "culture",
            "politics",
            "science"
        ]
    },
    {
        "title": "The Complete Works of Plato",
        "author": "Plato",
        "description": "This comprehensive collection compiles the philosophical works of an influential Classical Greek philosopher. The book includes his dialogues, letters, and philosophical musings, exploring topics such as justice, beauty, truth, mathematics, politics, love, and virtue. The philosopher's ideas, including the theory of forms, the allegory of the cave, and the philosopher king, have had a profound impact on Western thought and continue to be studied and debated in modern philosophical and academic circles.",
        "id": 220,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "greece"
        ],
        "subject": [
            "politics",
            "science"
        ]
    },
    {
        "title": "The Second World War",
        "author": "Winston Churchill",
        "description": "This book provides a comprehensive overview of the Second World War from the perspective of one of its most influential leaders. It covers the entire span of the war, from its origins in the political and economic turmoil of the 1930s, to the major battles and strategic decisions that shaped its course, to its aftermath and impact on the world. The author's unique perspective and firsthand experience, combined with his eloquent and insightful writing, make this a definitive account of one of the most important events in modern history.",
        "id": 225,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "africa",
            "china",
            "italy",
            "japan",
            "united-kingdom"
        ],
        "subject": [
            "conflict",
            "economics",
            "politics"
        ]
    },
    {
        "title": "Das Kapital",
        "author": "Karl Marx",
        "description": "This influential work is a comprehensive critique of political economy, exploring the complex nature of capitalism, its production processes, and its societal impact. The book delves into the intricacies of commodities, labor theory of value, surplus value, and exploitation, arguing that capitalism is inherently unstable and prone to periodic crises. It also posits that the capitalist system ultimately leads to the concentration of wealth in fewer hands, causing social inequality and paving the way for its own demise. The book is widely regarded as a foundational text in the development of socialist and communist ideologies.",
        "id": 227,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "india",
            "united-kingdom"
        ],
        "subject": [
            "alienation",
            "economics"
        ]
    },
    {
        "title": "History of My Life",
        "author": "Giacomo Casanova",
        "description": "\"History of My Life\" is an autobiography of an Italian adventurer and author, who is best remembered for his often complicated and elaborate affairs with women. The book offers a fascinating insight into his life, travels, and encounters. It provides an intimate look at the social customs and life of the 18th century, as well as the author's personal philosophies on a variety of subjects, including love, luck, and the importance of maintaining a sense of humor.",
        "id": 228,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "italy",
            "paris"
        ],
        "subject": [
            "adventure",
            "politics",
            "science"
        ]
    },
    {
        "title": "Eminent Victorians",
        "author": "Lytton Strachey",
        "description": "\"Eminent Victorians\" is a biographical work that profiles four influential figures from the Victorian era. The book provides an in-depth look into the lives of Cardinal Manning, Florence Nightingale, Thomas Arnold, and General Gordon, exploring their respective contributions to British society during the 19th century. Through these portraits, the book offers a critical and often satirical analysis of Victorian values, institutions, and moral attitudes, challenging the idealized narrative of the era.",
        "id": 234,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "england",
            "united-kingdom"
        ],
        "subject": [
            "politics"
        ]
    },
    {
        "title": "The Histories of Herodotus",
        "author": "Herodotus",
        "description": "\"The Histories of Herodotus\" is an ancient text that provides a comprehensive account of the Greco-Persian Wars. It is often considered the first work of history in Western literature. The author, often referred to as the 'Father of History', provides a narrative that not only discusses the conflicts between the Greeks and Persians, but also delves into the customs, geography, and history of each civilization. This detailed and pioneering work has greatly contributed to our understanding of the ancient world.",
        "id": 237,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "greece"
        ],
        "subject": [
            "conflict",
            "culture",
            "politics",
            "science"
        ]
    },
    {
        "title": "The Open Society and Its Enemies",
        "author": "Karl Popper",
        "description": "The book critically examines the philosophical underpinnings of totalitarianism and argues in favor of liberal democracy and open societies. It explores how certain philosophical ideas, particularly those of Plato, Hegel, and Marx, have contributed to the development of authoritarian regimes by promoting historicism and determinism. The author advocates for a society that embraces critical thinking, individual freedom, and the ability to adapt and change through democratic processes. By emphasizing the importance of critical rationalism, the book underscores the dangers of dogmatic thinking and the need for societies to remain open to reform and innovation.",
        "id": 243,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "politics"
        ]
    },
    {
        "title": "The Road to Serfdom",
        "author": "Friedrich von Hayek",
        "description": "\"The Road to Serfdom\" is a classic work of political philosophy and economics that argues against the concept of socialism and centralized economic planning. The author asserts that such systems inevitably lead to totalitarianism, infringing upon individual liberties and stifling innovation. The book further posits that only through free-market capitalism can societies maintain political and economic freedom. The author also explores the dangers of government control over means of production, illustrating that it leads to a loss of personal freedoms and the rise of dictatorial regimes.",
        "id": 248,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "economics"
        ]
    },
    {
        "title": "The Origins of Totalitarianism",
        "author": "Hannah Arendt",
        "description": "The book explores the roots of totalitarian systems, particularly focusing on Nazi Germany and Stalinist Russia. It delves into the historical, social, and political circumstances that led to the rise of these oppressive regimes, including anti-Semitism, imperialism, and the decline of the nation-state. The author further discusses the nature of power, the role of propaganda, and the manipulation of the masses in these systems, providing a comprehensive analysis of totalitarianism.",
        "id": 251,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "russia"
        ],
        "subject": [
            "racism"
        ]
    },
    {
        "title": "The Wealth of Nations",
        "author": "Adam Smith",
        "description": "This influential economic book presents a groundbreaking theory that argues for free market economies. The author posits that individuals acting in their own self-interest within a system of natural liberty will result in societal benefit, a concept often referred to as the \"invisible hand\" theory. The book also critiques mercantilism and explores concepts such as the division of labor, productivity, and free markets. It is widely considered one of the foundational texts in the field of economics.",
        "id": 252,
        "genre": [
            "nonfiction"
        ],
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "economics"
        ]
    },
    {
        "title": "Casino Royale",
        "author": "Ian Fleming",
        "description": "A British secret agent is tasked with bankrupting a French communist and paymaster of a Russian secret agency at a high-stakes card game in a casino. As he navigates the dangerous world of espionage, he encounters a beautiful woman who is being blackmailed by the enemy. The agent must outwit his opponents and survive numerous attempts on his life, all while grappling with his growing feelings for the woman.",
        "id": 260,
        "genre": [
            "thrillers"
        ],
        "setting": [
            "united-kingdom"
        ],
        "subject": [
            "betrayal"
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