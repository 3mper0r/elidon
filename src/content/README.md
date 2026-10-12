# Portfolio content

`homepage/` contains typed English and German editorial homepage content.
Replace its clearly labeled professional slots with verified details.

Each media definition accepts an optional local image with translated alt text:

```ts
image: { src: "/images/training.jpg", alt: "A training session" }
```

Store files under `public/images`, update each caption, and provide the image and
alt text in both locale files. Without an image, the component renders a labeled
abstract composition. Keep navigation and interface translations in `src/lib/i18n`.
