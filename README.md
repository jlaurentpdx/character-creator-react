# Character Creator in React

## What is this thing?

This simple React app is being designed for users who want to create their own character. Users can select a head, middle, and bottom for their character from existing assets and give their characters a catchphrase.

## Why are you making this?

I am making this app to practice the use and understanding of components in React with fellow students of Alchemy Code Lab's September 2021 cohort. The app must meet certain requirements, listed below.

## What are the requirements of this app?

From the assignment:

> ## Description
>
> For this app, we’ll be taking an existing HTML / Vanilla JS project and converting it to React using props and state. The original code is here Create a new React app using the react template
>
> ## Acceptance Criteria
>
> - [ ] Users should be able to update the characters head, torso and legs using select menus
> - [ ] Users should be able to add catchphrases for their character which get listed on the page
> - [ ] The app should utilize the presentational / container component pattern. Use as your container component and make presentational components in a components directory
> - [ ] Presentational components should have snapshot tests
>
> ## Rubric
>
> | Task                                                                                 | Points |
> | ------------------------------------------------------------------------------------ | ------ |
> | Users are able to update the characters features (2 points per feature)              | 6      |
> | Users are able to add catchphrases                                                   | 4      |
> | App is separated into presentational / container components that pass state as props | 4      |
> | Snapshot tests                                                                       | 4      |
> | Deployed on Netlify, CI Passing                                                      | 2      |

---

---

# Planning

This app is based on [this complete project](https://alchemycodelab.github.io/web-01-character-designer/).

## What files should be created or imported?

- [x] Import character assets (`public/char_images/...`)
- [x] Import background image (`src/bg.jpeg`)
- [x] Create `src/components/...`
  - [x] `<Main />`
  - [x] `<Feature />`
  - [x] `<Phrase />`
  - [x] `<Counter />`
  - [x] `<DisplayChar />`
- [x] Create `src/App.test.js`
