import pyautogui
import time
import pyperclip
import logging
from tkinter import Tk, filedialog

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(message)s')

def click(pos, delay=1, clicks=1):
    pyautogui.click(pos[0], pos[1], clicks=clicks)
    logging.info(f"Clicked {clicks} time(s) at {pos}")
    time.sleep(delay)

def type_path(path):
    quoted_path = '"' + path.replace('/', '\\') + '"'
    pyperclip.copy(quoted_path)
    pyautogui.hotkey('ctrl', 'v')
    logging.info(f"Typed quoted path: {quoted_path}")
    time.sleep(1)
    pyautogui.press('enter')
    logging.info("Pressed Enter")
    time.sleep(15)  # wait longer for video to fully load


def type_caption():
    caption = (
        'In 1990, two football giants, Diego Maradona and Pelé, reunited once more during a global charity match that brought legends together for a cause beyond football. Though often seen as rivals, their mutual respect and love for the game shone through as they laughed, embraced, and thrilled the audience with their presence.\n\n'
        'At halftime, fans were treated to a surprise moment — a casual juggling contest between the two icons. With perfect balance and dazzling technique, they exchanged tricks and smiles, reminding everyone why they were hailed as the greatest to ever grace the pitch. The atmosphere turned magical, filled with nostalgia, admiration, and pure football joy.\n\n'
        'Credits(tt): @ memehub.3456\n\n'
        '#Maradona #Pelé #FootballLegends #GOATs #SoccerMagic #FootballHistory #LegendaryDuo #TimelessIcons #Napoli #Player'

    )
    pyperclip.copy(caption)
    pyautogui.hotkey('ctrl', 'v')
    logging.info("Typed custom caption")
    time.sleep(1)


def select_videos():
    root = Tk()
    root.withdraw()
    paths = filedialog.askopenfilenames(
        title="Select Videos to Upload",
        filetypes=[("MP4 files", "*.mp4")]
    )
    return list(paths)

logging.info("STEP 1: Select all videos to upload.")
video_files = select_videos()
if not video_files:
    logging.info("No videos selected. Exiting.")
    exit()

logging.info(f"{len(video_files)} video(s) selected:")
for i, v in enumerate(video_files):
    logging.info(f"{i + 1}: {v}")

# Hardcoded positions from your logs
locations = {
    "post_button": (114, 1168),
    "second_post_button": (142, 1262),
    "select_from_computer": (1424, 1142),
    "file_search_bar": (1616, 1572),
    "resize_button": (991, 1459),
    "aspect_ratio": (1025, 1062),
    "next_button": (1864, 462),
    "second_next": (2220, 456),
    "caption_section": (2078, 717),
    "share": (2218, 456),
    "close_when_done": (2424, 941),
}

logging.info("STEP 2: Starting automation loop.")

for index, video_path in enumerate(video_files):
    logging.info(f"\n🚀 Uploading {index + 1} of {len(video_files)}: {video_path}")

    click(locations["post_button"])
    click(locations["second_post_button"])
    click(locations["select_from_computer"])
    click(locations["file_search_bar"], delay=1)
    type_path(video_path)
    click(locations["resize_button"])
    click(locations["aspect_ratio"], delay=2)
    click(locations["next_button"], delay=1)
    click(locations["second_next"], delay=1)
    click(locations["caption_section"])
    type_caption()
    click(locations["share"])
    time.sleep(30)
    click(locations["close_when_done"])
    time.sleep(2)
    click(locations["close_when_done"])
    time.sleep(2)

logging.info("🎉 All videos uploaded successfully.")
