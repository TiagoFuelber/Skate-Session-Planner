#!/bin/bash

# Simple script to generate placeholder icons
# This creates basic colored square icons as placeholders
# You should replace these with proper icons later

SIZES=(72 96 128 144 152 192 384 512)
ICON_DIR="assets/icons"

mkdir -p "$ICON_DIR"

for size in "${SIZES[@]}"; do
    # Create a simple SVG icon
    cat > "${ICON_DIR}/icon-${size}x${size}.svg" << EOF
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#000000"/>
  <text x="50%" y="50%" font-size="${size}" text-anchor="middle" dominant-baseline="middle" fill="#ffffff">🛹</text>
</svg>
EOF
    echo "Created ${ICON_DIR}/icon-${size}x${size}.svg"
done

echo ""
echo "Note: SVG icons created. For PWA, you need PNG files."
echo "1. Open assets/icon-generator.html in your browser to generate PNG icons"
echo "2. Or use an online tool like https://realfavicongenerator.net/"
echo "3. Or convert SVGs to PNGs using ImageMagick: convert icon-512x512.svg icon-512x512.png"

