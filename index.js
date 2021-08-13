const fs = require('fs')
const txtOutput = {}

// Add your original image path and desired sizes/format
import testImage from './image/test-image.jpg?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048&format=webp'

// Add your image srcset string to txtOutput object
txtOutput['test-image'] = testImage.srcSet

fs.writeFile(
  './srcset-images/srcset.json',
  JSON.stringify(txtOutput, null, 4),
  (error) => {
    if (error) console.log(error)
    return
  }
)
