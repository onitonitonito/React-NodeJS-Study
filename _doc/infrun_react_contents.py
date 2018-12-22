"""-------------------------
# 0.0 main - infrun_react_contents.py
#
#
#\n\n\n"""
print(__doc__)
# import json
# json_fname = 'infrun_react_contents.json'
# with open(json_fname, 'r', encoding='utf8') as f:
#     contents_dict = json.loads(f.read())
# print(contents_dict)
# quit()

from infrun_react_contents_config import file_dir
from infrun_react_contents_config import contents_dict


def main():
    contents_md = []

    contents_md.append("## REACT.JS 인프런 유튜브 목록")
    key_class = ['1','2','3','4','5','6']

    for key in contents_dict.keys():
        title = contents_dict[key][0]
        content = contents_dict[key][1]
        time = contents_dict[key][2]
        url = contents_dict[key][3]


        if key[:1] in key_class:
            contents_md.append("<br>")
            contents_md.append("### Chapter {}.0".format(key[:1]))
            key_class.remove(key[:1])

        contents_md.append("- **{}** : [{}]({}) {}".format(
            title, content, url, time,
        )
        )

    contents_md.append("---")

    contents_str = "\n".join(contents_md)

    md_filename = file_dir + '/infrun_react_contents.md'
    with open(md_filename, 'w', encoding='utf-8') as f:
        f.write(contents_str)


if __name__ == '__main__':
    main()
