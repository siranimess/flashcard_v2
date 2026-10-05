# Web Development Project 3 - CodeCards

Submitted by: **Animesh Niraula**

This web app: **CodeCards is a React flashcard study application that helps users practice JavaScript and React concepts. Users can type in a guess before flipping the card, receive feedback on whether their answer is correct or incorrect, move forward and backward through an ordered set of cards, shuffle the deck, track their streak, and mark cards as mastered.**

Time spent: **6 hours** spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box before seeing the flipside of the card**
  - [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  - [x] Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
  - [x] Clicking on the submit button with a **correct** answer shows visual feedback that it is correct

- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button navigates to the next card in a set sequence when clicked
  - [x] A previous/back button returns to the previous card in the set sequence when clicked
  - [x] The previous button is disabled at the beginning of the list
  - [x] The next button is disabled at the end of the list
  - [x] Navigation does not wrap around from the last card to the first card or vice versa

## Optional Features

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - [x] Cards remain in the same sequence unless the shuffle button is clicked
  - [x] Cards change to a randomized sequence once the shuffle button is clicked

- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - [x] Answers can be considered correct when they partially match the answer on the card
  - [x] Answer checking ignores uppercase and lowercase differences
  - [x] Answer checking ignores common punctuation
  - [x] Partial answer matching is supported

- [x] A counter displays the user’s current and longest streak of correct responses
  - [x] The current streak increments when a user answers correctly
  - [x] The current streak resets to 0 when a user answers incorrectly
  - [x] A separate longest streak counter stores the user's highest streak

- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - [x] The user can mark the current card as mastered
  - [x] Mastered cards are removed from the active card deck
  - [x] Mastered cards are stored separately
  - [x] The app displays the total number of mastered cards

## Additional Features

The following **additional** features are implemented:

- [x] Users can press the Enter key to submit an answer
- [x] Blank answers display a message asking the user to enter an answer
- [x] The input field resets when the user changes cards
- [x] Correct/incorrect feedback resets when changing cards
- [x] Cards automatically return to the question side when navigating
- [x] A card counter shows the user's current position in the deck
- [x] Difficulty labels display Easy, Medium, and Hard categories
- [x] Different difficulty levels have different visual styles
- [x] The application has a responsive layout for desktop and mobile screens
- [x] Users can reset the complete deck after mastering all cards
- [x] The interface displays a completion screen after all cards have been mastered

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='YOUR-GIF-LINK-HERE' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux.
-->

## Notes

One challenge I encountered while extending the flashcard application was changing the navigation from random cards to an ordered sequence. In the first version, the next button selected a random card, but this version needed previous and next buttons that followed a fixed order. I handled this by keeping track of the current card index and disabling the navigation buttons when the user reaches the beginning or end of the list.

Another challenge was checking user answers without requiring them to type the exact same sentence. I created a function that converts both answers to lowercase, removes common punctuation, and compares the normalized text. I also added partial matching so that small differences in a user's response can still be accepted.

Keeping track of the streak and mastered cards also required additional state variables. This helped me understand more about how React state can be used to control several parts of an application at the same time.

## License

    Copyright 2026 Animesh Niraula

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
