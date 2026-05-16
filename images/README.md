# How to Add Photos to Your Love Gallery

## Quick Start

1. **Add your photos** to this `images` folder
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
   - Recommended size: At least 400x400 pixels
   - File size: Keep under 5MB per image

2. **Update manifest.json** with your photo paths:
   ```json
   {
     "images": [
       "images/photo1.jpg",
       "images/photo2.jpg",
       "images/us-together.jpg"
     ]
   }
   ```

3. **Save and refresh** your website
   - Your photos will automatically appear in the gallery!

## Example

If you have these files in the images folder:
- `beach-day.jpg`
- `first-date.jpg`
- `anniversary.jpg`

Your manifest.json should be:
```json
{
  "images": [
    "images/beach-day.jpg",
    "images/first-date.jpg",
    "images/anniversary.jpg"
  ]
}
```

## Features

- Photos display in a beautiful responsive grid
- Hover to see a zoom effect
- Works perfectly on mobile and desktop
- Photos maintain their aspect ratio
- Smooth animations and transitions

## Tips

- List photos in the order you want them to appear
- Make sure file names match exactly (case-sensitive)
- Keep JSON syntax correct (commas between items)
- All images must be in the `images` folder
