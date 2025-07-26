import os
import random
from tkinter import Tk, filedialog
from moviepy.editor import VideoFileClip, ImageClip, CompositeVideoClip
import PIL.Image

# Patch for Pillow>=10 compatibility
if not hasattr(PIL.Image, 'ANTIALIAS'):
    PIL.Image.ANTIALIAS = PIL.Image.Resampling.LANCZOS

Tk().withdraw()

video_paths = filedialog.askopenfilenames(title="Select Video Files", filetypes=[("MP4 files", "*.mp4")])
if not video_paths:
    print("No videos selected.")
    exit()

watermark_path = filedialog.askopenfilename(title="Select Watermark Image", filetypes=[("Image files", "*.png;*.jpg;*.jpeg")])
if not watermark_path:
    print("No watermark selected.")
    exit()

for path in video_paths:
    clip = VideoFileClip(path)
    wm = ImageClip(watermark_path).set_duration(clip.duration)

    wm = wm.resize(height=clip.h // 10)
    wm = wm.set_opacity(0.1)  # Set watermark transparency
    wm = wm.set_pos(("center", clip.h - wm.h - 10))

    final = CompositeVideoClip([clip, wm])

    rand_num = random.randint(1, 100)
    output_path = os.path.join(os.path.dirname(path), f"oldman_video_{rand_num}.mp4")

    final.write_videofile(output_path, codec="libx264", audio_codec="aac")

    clip.close()
    final.close()
    os.remove(path)
    print(f"✅ Processed and deleted: {path}")
