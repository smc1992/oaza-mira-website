import os
from PIL import Image

def main():
    img_path = "/Users/smc/.gemini/antigravity-ide/brain/ef5afc47-7eec-485c-9d8f-816d2eb8e7e7/grave_comparison_1781254581905.png"
    if not os.path.exists(img_path):
        print(f"Error: {img_path} does not exist.")
        return
    
    img = Image.open(img_path)
    width, height = img.size
    print(f"Image dimensions: {width}x{height}")
    
    # We want to crop out the bottom text labels. Let's inspect where they might be.
    # Usually they are in the bottom 12% of the image.
    # Let's crop the height to 870 pixels (which removes the bottom 154 pixels of a 1024px image).
    crop_height = int(height * 0.85)
    
    # Left half (Before)
    left_box = (0, 0, width // 2, crop_height)
    before_img = img.crop(left_box)
    
    # Right half (After)
    right_box = (width // 2, 0, width, crop_height)
    after_img = img.crop(right_box)
    
    # Let's save them as webp
    output_dir = "/Users/smc/Webprojekte/Oaza-Mira Website/oaza-mira-app/public"
    before_path = os.path.join(output_dir, "grave_before.webp")
    after_path = os.path.join(output_dir, "grave_after.webp")
    
    before_img.save(before_path, "WEBP", quality=90)
    after_img.save(after_path, "WEBP", quality=90)
    print(f"Saved before image to: {before_path}")
    print(f"Saved after image to: {after_path}")

if __name__ == "__main__":
    main()
