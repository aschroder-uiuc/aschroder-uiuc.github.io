Final project for CS 410 Text Information Systems in Fall 2024.

Book recommendation system using Wikipedia Text comparison

- [Software Use Guide](#software-use-guide)
  - [Quick Start](#quick-start)
  - [Detailed Use Guide](#detailed-use-guide)
- [Software Implementation](#software-implementation)
  - [Core Book Data](#core-book-data)
  - [Base Implementation](#base-implementation)
  - [Additional Features Implementation](#additional-features-implementation)
    - [Optional User Preferences](#optional-user-preferences)
    - [Strict Search](#strict-search)
- [Evaluation](#evaluation)
  - [Test Set 1](#test-set-1)
  - [Test Set 2](#test-set-2)
  - [Test Set 3](#test-set-3)
  - [Assessment](#assessment)

## Software Use Guide

## Quick Start

The final project is stored on a website for ease of use. You can go here to see and use the final project: https://aschroder-uiuc.github.io/.

The basic workflow is:

1. Input a Wikipedia search term in the text box.
2. Choose any optional user preferences.
3. Click "search" button.

## Detailed Use Guide

This website has a simple user interface. The user should enter a text string associated with a wikipedia topic. There are also dropdowns for user preferences for genre, setting, and subject. There is also a checkbox for a strict search in the booklist, which will limit the results to books that meet the user preferences. Otherwise, preferences will influence the weight of the match, but not exclude any books from being returned.

For instance, if you are interested in World War I, you may prefer a non-fiction book, or a fiction book set during the time period. This can be selected in the "genre" dropdown. The "setting" dropdown includes a list of locations in the book list, and "subject" includes a list of topics in the book list. Only one option in each category can be selected, but all three categories can be combined. By default, no preference is included in the search.

Without the strict search, the algorithm will increase the weight on the requested category, but will still search all of the original list and return the most relevant. This may not be a book in the requested category if another books strongly matches the text. The "strict search" requires that the returned book meet those requirements, so any returned book MUST be in the requested category.

The software will find the book in the curated book list that is most similar to the wikipedia text and recommend that book, with a book description and a link to that book on Amazon. The user can then find the recommended book on Amazon by following the link below the recommendation. You also can go back to the original Wikipedia page if you are interested.

## Software Implementation

## Core Book Data

Each element of the book list includes the title, author, and a description of the the book, along with metadata about genres, settings, and subjects. For example, the book "Crime and Punishment" looks like:

```
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
    }
```

## Base Implementation

The core algorithm takes a block of wikipedia text, uses BM25 in the Lunr.js library to score the relevance of a list of books, and returns the most relevant book. Lunr.js is a lightweight search library that can be run in a browser (https://lunrjs.com/). It was selected because it did not require any user installation, worked in all major browser types, and had minimal latency at the current scale.

The base user input is a text string, which is used to query the Wikipedia API to get the text of the Wikipedia article for that term. The returned text is parsed, then used as the query term for a BM25 search. The ranked documents are derived from a curated book list that was collected to span mulitple different genres, settings, and themes. The book list was captured using the rankings at https://thegreatestbooks.org/.

Once the most relevant book is identified, it is returned to the user with the description and a link to the book on Amazon.

## Additional Features Implementation

## Optional User Preferences

By default, the text search is performed across all components of the book data. An additional option allows the user to select a genre, setting, or subject in a dropdown menu. These choices increase the weight assigned to the metadata properties in the search.

## Strict Search

Depending on how well the other elements of the book data match the input text, this may not be enough to change the ranking for books meeting the selected user preferences. In a strict search, only books that meet the requested metadata options are included in the search. For example, if the user requests a setting of "Chicago", only books that have `setting: ["Chicago"]` will be returned. On the other hand, if none of those books meet the relevance threshold of the search, no books may be returned. The strict search allows for user preference constraints, while increasing the risk that a relevant book is not found at all.

## Evaluation

The evaluation for this algorithm was a user-defined set of inputs and expected outputs. The first test set was very simple to test the base algorithm, and the subsequent test sets incorporated the user preferences and strict search.

## Test Set 1

Text Input: "environmental science"  
Expected Output: "Silent Spring" by Rachel Carson

## Test Set 2

Text Input: "Dogs"  
Expected Output: "Where the Red Fern Grows" by Wilson Rawls

Text Input: "Dogs"  
Genre: "Nonfiction"  
Strict Search: False  
Expected Output: "On the Origin Of Species" by Charles Darwin

## Test Set 3

Text Input: "World War II"  
Expected Output: "The Second World War" by Winston Churchill

Text Input: "World War II"  
Genre: Fiction  
Strict Search: True  
Expected Output: "Slaughterhouse-Five" by Kurt Vonnegut

Text Input: "World War II"  
Setting: Amsterdam  
Strict Search: True  
Expected Output: "The Diary of a Young Girl" by Anne Frank

Text Input: "World War II"  
Subject: Adventure  
Strict Search: True  
Expected Output: "The Lion, The Witch and the Wardrobe" by C.S. Lewis

## Assessment

I experimented with the weights of each of the inputs until these empirically-defined outputs were reached. In some cases, the match for one book was too high to be overcome by any of the other inputs, so I implemented a strict search to limit the inputs. The current algorithm meets these expected use cases.
