"""-------------------------
# 0.0 main - everyone_react.py
#
#
#\n\n\n"""
print(__doc__)

from everyone_react_config import file_dir
from everyone_react_config import everyone_dict


def main():
    everyone_md = []

    everyone_md.append("## 누구나 하는 React 유튜브 목록")
    for key in everyone_dict.keys():
        title = "누구나하는 리액트"
        time = everyone_dict[key][0]
        content = everyone_dict[key][1]
        url = everyone_dict[key][2]

        everyone_md.append("1. **{}** : [{}]({}) ... [▶{}]".format(
            title, content, url, time,
        ))

    everyone_md.append("---")
    everyone_str = "\n".join(everyone_md)

    md_filename = file_dir + '/everyone_react.md'

    with open(md_filename, 'w', encoding='utf8') as f:
        f.write(everyone_str)



if __name__ == '__main__':
    main()
