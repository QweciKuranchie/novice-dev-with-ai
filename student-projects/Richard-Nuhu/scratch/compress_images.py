import os
from PIL import Image

def compress_images():
    img_dir = r"c:\Users\nuhur\novice-dev-with-ai\student-projects\Richard-Nuhu\assets\imgs"
    if not os.path.exists(img_dir):
        print(f"Error: Directory {img_dir} does not exist.")
        return

    images = {
        "bg.jpg": {"type": "bg", "max_width": 1920},
        "coffe.jpg": {"type": "thumbnail", "max_width": 600},
        "tea.jpg": {"type": "thumbnail", "max_width": 600},
        "pastries.jpg": {"type": "thumbnail", "max_width": 600},
        "sandwiches.jpg": {"type": "thumbnail", "max_width": 600}
    }

    total_old_size = 0
    total_new_size = 0

    print("Starting image optimization...")
    print("-" * 50)

    for img_name, config in images.items():
        old_path = os.path.join(img_dir, img_name)
        if not os.path.exists(old_path):
            print(f"Warning: {img_name} not found, skipping.")
            continue

        old_size = os.path.getsize(old_path)
        total_old_size += old_size

        new_name = os.path.splitext(img_name)[0] + ".webp"
        new_path = os.path.join(img_dir, new_name)

        # Open and process the image
        with Image.open(old_path) as img:
            # Check orientation and fix EXIF if necessary
            try:
                if hasattr(img, '_getexif'):
                    exif = img._getexif()
                    if exif:
                        orientation = exif.get(0x0112)
                        if orientation == 3:
                            img = img.rotate(180, expand=True)
                        elif orientation == 6:
                            img = img.rotate(270, expand=True)
                        elif orientation == 8:
                            img = img.rotate(90, expand=True)
            except Exception as e:
                print(f"EXIF rotation failed for {img_name}: {e}")

            # Resize if needed
            width, height = img.size
            max_width = config["max_width"]
            if width > max_width:
                ratio = max_width / float(width)
                new_height = int(float(height) * float(ratio))
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {img_name} from {width}x{height} to {max_width}x{new_height}")

            # Save as WebP
            img.save(new_path, "WEBP", quality=80)
            
        new_size = os.path.getsize(new_path)
        total_new_size += new_size

        savings = (old_size - new_size) / old_size * 100
        print(f"Converted {img_name} -> {new_name}")
        print(f"  Size: {old_size/1024/1024:.2f} MB -> {new_size/1024:.2f} KB ({savings:.1f}% savings)")
        print("-" * 50)

    overall_savings = (total_old_size - total_new_size) / total_old_size * 100
    print("Optimization Complete!")
    print(f"Total original size: {total_old_size/1024/1024:.2f} MB")
    print(f"Total optimized size: {total_new_size/1024/1024:.2f} MB")
    print(f"Overall Space Savings: {overall_savings:.1f}%")

if __name__ == "__main__":
    compress_images()
