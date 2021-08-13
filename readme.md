# generate-srcset-images

A little node program to generate a set of srcset images

## Installation/Usage

1. `npm install`

2. Place your original images in image folder

3. Edit index.js

   1. Add path and desired output variables using syntax and from https://github.com/dazuaz/responsive-loader#usage
   2. Add srcset string to txtOutput object

4. `npm run transform`

5. Output is now generated in /srcset-images (Delete throwaway.js)

## Output folder structure

```
srcset-images/
    ├── srcset.json
    ├── test-image-300.webp
    ├── test-image-600.webp
    ├── test-image-1024.webp
    ├── test-image-2048.webp
    └── throwaway.js
```
