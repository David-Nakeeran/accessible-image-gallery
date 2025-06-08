## Week-06-Assignment

A responsive and accessible image gallery built using React and Tailwind CSS, with a touch of custom CSS for layout control. Users can search for images, browse via thumbnails, and navigate using keyboard or mouse.

## Live Demo

[Image Gallery](https://image-gallery-wc4l.onrender.com/)

## Features

- Search: Queries the Unsplash API to fetch random image sets by keyword

- Main Image Display: Shows selected image in large view

- Keyboard Navigation: Navigate thumbnails and controls with Tab and Enter

- Responsive Layout: Built using Tailwind’s utility classes and media queries

- Accessible: Includes ARIA roles, focus indicators, and proper alt text

## How to run application

1. Clone this repository:

```
git clone https://github.com/your-username/accessible-image-gallery.git
```

2. Install dependencies:

```
npm install
```

3. Add your .env file with:
   You will need to create an unsplash developers account to use api

```
VITE_API_URL=https://api.unsplash.com/photos/random?count=7&client_id=your_access_key
```

4. Run the development server:

```
npm run dev
```

- Open the index.html file in a browser

## Reflection

- I considered syncing thumbnail scroll position with the main image but didn’t get to it

- I had a bug where if the API returned no data the whole app would crash. So I added error handling to fetch to resolve this

- I would like feedback in regards to my thumbnail container, the approach I took in terms of responsiveness isn't the best approach I think

## Technologies Used

- React
- Tailwind CSS
- Unsplash API

## References

- MDN

- https://unsplash.com/documentation

- https://examples.motion.dev/react/exit-animation/tutorial

- https://tailwindcss.com/docs/installation/using-vite

- https://developer.mozilla.org/en-US/docs/Web/CSS/place-items

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

- https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
