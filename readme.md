# generate-srcset-images

A little node program to generate a set of srcset images

## Installation/Usage

1. `npm install`

2. Place your original images in image folder

3. Edit index.js
    1. Add path and desired output variables using syntax and from https://github.com/dazuaz/responsive-loader#usage
    2. Add srcset string to output.json

4. `npm run transform`

5. Output is now generated in /srcset-images (Delete throwaway.js)