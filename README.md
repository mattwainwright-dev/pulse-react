
# PULSE Artist Explorer

## The Problem

Music fans need a simple way to discover artists because finding reliable band information can be frustrating. My page will let users browse artists and explore their details.

## Links

- Live: https://musical-bienenstitch-a67838.netlify.app
- Repo: https://github.com/mattwainwright-dev/pulse-react

## The Plan

### Data

Dataset: `pulse-artists`

| Field | Example value |
| --- | --- |
| `id` | 7 |
| `artist_name` | Led Zeppelin |
| `genre` | Hard rock |
| `origin` | London England |
| `formed_year` | 1968 |
| `status` | Disbanded |
| `current_members` | None |
| `founding_members` | Jimmy Page; Robert Plant; John Paul Jones; John Bonham |
| `notable_former_members` | John Bonham R.I.P. |
| `bio` | British rock band known for powerful guitar riffs |
| `image_url` | Empty |
| `audio_url` | Empty |
| `official_url` | https://www.ledzeppelin.com/ |

Fields my page shows: `artist_name`, `genre`, `origin`, `formed_year`, `bio`, and `official_url`.

### Sections

- PULSE branding and Artist Explorer heading
- Problem sentence
- Three artist cards: Led Zeppelin, Boyz II Men, and Pearl Jam
- Expandable artist details
- Official artist website links

### User Action

- A visitor clicks an artist's name to expand its details.
- Clicking the artist again closes the details.

## Changes Made

- Built the Artist Explorer using React.
- Fetched artist records from the `pulse-artists` API.
- Used a reusable `ArtistCard` component with props.
- Used `.filter()` and `.map()` to display three selected artists.
- Added React state to expand and collapse artist details.
- Styled the application with PULSE branding, a cyan theme, and a particle background.
- Added responsive styling for smaller screens.

## Reflection

This project helped me practice fetching API data, passing props between React components, rendering lists, and managing state with `useState`. I also learned how to combine functionality and visual design while building an application around my own idea.

## Team

Accountability partner: @CharityCP
