"""-------------------------
# 01.nomad_notes_config.py
#
#
#\n\n\n"""
print(__doc__)

import os

file_dir = os.path.dirname(__file__)

nomade_notes_dict = {
    '0-01.' : ('[03:01]', 'Intro - Build an Offline Note Taking App with React, Apollo and GraphQL', 'https://www.youtube.com/watch?v=A4Grb-bm0Ok&index=1&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '0-02.' : ('[00:58]', 'Requirements - Build an Offline Note Taking App', 'https://www.youtube.com/watch?v=yzfTIUfKHqA&index=2&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-01.' : ('[05:37]', 'Set Up - Build an Offline Note Taking App with React, Apollo and GraphQL', 'https://www.youtube.com/watch?v=gCGF50zGW1U&index=3&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-02.' : ('[07:09]', 'Configuration - Build an Offline Note Taking App with React, Apollo and GraphQL', 'https://www.youtube.com/watch?v=Mnx4R6JzSU0&index=4&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-03.' : ('[05:44]', 'Type Definitions for Offline Schema', 'https://www.youtube.com/watch?v=HvMm5AxhSwU&index=5&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-03a' : ('[02:42]', 'Intermission for Bug Fixing', 'https://www.youtube.com/watch?v=zBDPoIH-ANo&index=6&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-04.' : ('[08:16]', 'Note Query part One', 'https://www.youtube.com/watch?v=w4zm_HWO6Sg&index=7&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-05.' : ('[05:22]', 'Note Query part Two', 'https://www.youtube.com/watch?v=tplFDbjlZis&index=8&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-06.' : ('[09:21]', 'Add Note Mutation', 'https://www.youtube.com/watch?v=wxkalxbeJys&index=9&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-07.' : ('[09:46]', 'Edit Note Mutation', 'https://www.youtube.com/watch?v=avjGl2xSXvs&index=10&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-08.' : ('[08:09]', 'Router and Routes', 'https://www.youtube.com/watch?v=jvgm3sJmkNU&index=11&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-09.' : ('[05:36]', 'Notes Route', 'https://www.youtube.com/watch?v=_D0omxOOH1U&index=12&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-10.' : ('[10:08]', 'Note Route', 'https://www.youtube.com/watch?v=Wp8zud7hCXY&index=13&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-11.' : ('[09:46]', 'Add Note Route', 'https://www.youtube.com/watch?v=w3wcCf43XaA&index=14&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-12.' : ('[08:12]', 'Edit Note Route', 'https://www.youtube.com/watch?v=mAh-TzMpHrQ&index=15&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-13.' : ('[06:31]', 'Saving the Notes Offline', 'https://www.youtube.com/watch?v=r5wg9sreVhM&index=16&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-14.' : ('[04:38]', 'Restoring Offline Notes', 'https://www.youtube.com/watch?v=vmfDR1MDXkY&index=17&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
    '1-15.' : ('[01:10]', 'Conclusions', 'https://www.youtube.com/watch?v=RwZWIFcqYAs&index=18&list=PL7jH19IHhOLMTVBzUkbN74h1nyXW7VhYV',),
}



if __name__ == '__main__':
    _ROOT = os.getcwd()
    _HERE = os.path.dirname(__file__)

    # print(_ROOT)
    # print(_HERE)


    """
    title = "오프라인 노트앱 만들기"

    for key in nomade_notes_dict.keys():
        time = nomade_notes_dict[key][0]
        content = nomade_notes_dict[key][1]
        url = nomade_notes_dict[key][2]

        nomad_notes_md.append("1. **{}** : [{}]({}) ... [▶{}]".format(
            title, content, url, time,
        ))
    """

    _a = nomade_notes_dict.keys()
    for key in nomade_notes_dict.keys():
        time = nomade_notes_dict[key][0]
        content = nomade_notes_dict[key][1]
        url = nomade_notes_dict[key][2]

        print(key)
    print(len(_a))
