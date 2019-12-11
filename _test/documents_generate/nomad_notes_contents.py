"""-------------------------
# 0.0 main - nomad_notes.py
#
#
#\n\n\n"""
print(__doc__)

from nomad_notes_config import file_dir
from nomad_notes_config import nomade_notes_dict


def main():
    nomad_notes_md = []
    title = "노트앱 만들기"

    nomad_notes_md.append("## NOMAD Notes : 오프라인노트 with 아폴로")
    for key in nomade_notes_dict.keys():
        time = nomade_notes_dict[key][0]
        content = nomade_notes_dict[key][1]
        url = nomade_notes_dict[key][2]

        shorten_lendth = 50
        if len(content) > shorten_lendth:
            content = content[:shorten_lendth + 1] + "~"

        nomad_notes_md.append("1. **{} ({})** [{}]({}) ... {}".format(
            title, "#"+ key, content, url, time,
        ))

    nomad_notes_md.append("---")
    nomade_notes_str = "\n".join(nomad_notes_md)

    md_filename = file_dir + '/nomad_notes.md'

    with open(md_filename, 'w', encoding='utf8') as f:
        f.write(nomade_notes_str)



if __name__ == '__main__':
    main()
