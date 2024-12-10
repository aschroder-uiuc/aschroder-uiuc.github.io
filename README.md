Final project for CS 410 Text Information Systems in Fall 2024.

Book recommendation system using Wikipedia Text comparison

Software Use:
You can go here to see and use the final project: https://aschroder-uiuc.github.io/.

The basic workflow is:

1. Input a Wikipedia search term in the text box.
2. Choose any optional user preferences.
3. Click "search" button.

This website has a simple user interface. The user should enter a text string associated with a wikipedia topic. The software will find the book in the curated book list that is most similar to the wikipedia text and recommend that book, with a book description and a link to that book on Amazon.

In addition to the base text input, there are several optional user inputs. You can prioritize books by genre, setting, or subject. For instance, if you are interested in World War I, you may prefer a non-fiction book, or a fiction book set during the time period. This can be selected in the "genre" dropdown. The "setting" dropdown includes a list of locations in the book list, and "subject" includes a list of topics in the book list. Only one option in each category can be selected, but all three categories can be combined. By default, no preference is included in the search.

There is also a checkbox for a "strict search." Without the strict search, the algorithm will increase the weight on the requested category, but will still search all of the original list and return the most relevant - this may not be a book in the requested category if another books strongly matches the text. The "strict search" requires that the returned book meet those requirements, so any returned book MUST be in the requested category.

The user can then find the recommended book on Amazon by following the link below the recommendation. You also can go back to the original Wikipedia page if you are interested.

Software Implementation

Data Structure
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

Base Implementation
The core algorithm takes a block of wikipedia text, uses BM25 in the Lunr.js library to score the relevance of a list of books, and returns the most relevant book. Lunr.js is a lightweight search library that can be run in a browser (https://lunrjs.com/). It was selected because it did not require any user installation, worked in all major browser types, and had minimal latency at the current scale.

The base user input is a text string, which is used to query the Wikipedia API to get the text of the Wikipedia article for that term. The returned text is parsed, then used as the query term for a BM25 search. The ranked documents are derived from a curated book list that was collected to span mulitple different genres, settings, and themes. The book list was captured using the rankings at https://thegreatestbooks.org/.

Once the most relevant book is identified, it is returned to the user with the description and a link to the book on Amazon.

Additional Features Implementation
Optional User Preferences
By default, the text search is performed across all components of the book data. An additional option allows the user to select a genre, setting, or subject in a dropdown menu. These choices increase the weight assigned to the metadata properties in the search.

Strict Search
Depending on how well the other elements of the book data match the input text, this may not be enough to change the ranking for books meeting the selected user preferences. In a strict search, only books that meet the requested metadata options are included in the search. For example, if the user requests a setting of "Chicago", only books that have `setting: ["Chicago"]` will be returned. On the other hand, if none of those books meet the relevance threshold of the search, no books may be returned. The strict search allows for user preference constraints, while increasing the risk that a relevant book is not found at all.

Evaluation
