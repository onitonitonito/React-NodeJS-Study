"""-------------------------
# 01.infrun_react_contents_config.py
#
#
#\n\n\n"""
print(__doc__)

import os

file_dir = os.path.dirname(__file__)
contents_dict = {
    '1-1': [
        '강좌 1-1편',
        '강의 소개 ',
        '[139:12]',
        'https://www.youtube.com/watch?v=GEoNiUcVwjE&index=1&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '1-2': [
        '강좌 1-2편',
        'React.js 소개 ',
        '[38:55]',
        'https://www.youtube.com/watch?v=H24D0GveBYY&index=2&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '1-3': [
        '강좌 1-3편',
        'React.js 장점과 단점 ',
        '[44:46]',
        'https://www.youtube.com/watch?v=fISs08P6eMc&index=3&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '2-1': [
        '강좌 2-1편',
        'Codepen 설정 , ES6 클래스 ',
        '[6:54]',
        'https://www.youtube.com/watch?v=LxiXsB9m2co&index=4&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '2-2': [
        '강좌 2-2편',
        'JSX의 특징 ',
        '[67:23]',
        'https://www.youtube.com/watch?v=5MF-ThMob-s&index=5&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],

    '2-3': [
        '강좌 2-3편',
        'props ',
        '[78:54]',
        'https://www.youtube.com/watch?v=atSIfMAmSic&index=6&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '2-4': [
        '강좌 2-4편',
        'state ',
        '[811:15]',
        'https://www.youtube.com/watch?v=i_ooWEUtCMc&index=7&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '2-5': [
        '강좌 2-5편',
        '컴포넌트 매핑 (Component Mapping) ',
        '[96:51]',
        'https://www.youtube.com/watch?v=x3rhCJWGFc4&index=8&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '3-1': [
        '강좌 3-1편',
        '작업환경 설정하기 ',
        '[1024:03]',
        'https://www.youtube.com/watch?v=moXE6GUEwOs&index=9&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '3-2': [
        '강좌 3-2편',
        'React Project 만들기 | NPM, WEBPACK ',
        '[118:08]',
        'https://www.youtube.com/watch?v=gSwO2S-Q88s&index=10&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '3-3': [
        '강좌 3-3편',
        'Hot Module Replacement | React Hot Loader ',
        '[1212:14]',
        'https://www.youtube.com/watch?v=9xZ3x3u1Avk&index=11&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-1': [
        '강좌 4-1편',
        'Contact 검색기능 구현 | input, sort, filter ',
        '[15:11]',
        'https://www.youtube.com/watch?v=LSTVOuyF6zE&index=12&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-2': [
        '강좌 4-2편',
        'Contact 선택기능 구현 | React.js 기초개념 응용 ',
        '[1413:36]',
        'https://www.youtube.com/watch?v=j8oalkWrQrg&index=13&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-3': [
        '강좌 4-3편',
        'state 내부 배열 처리하기 | Immutability Helper / ES6 Spread ',
        '[155:35]',
        'https://www.youtube.com/watch?v=l5bt79f4aHs&index=14&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-4': [
        '강좌 4-4편',
        'Contact 추가/삭제/수정 기능 구현 | Immutability Helper 적용하기 ',
        '[169:03]',
        'https://www.youtube.com/watch?v=48ZtoaWIL_Y&index=15&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-5': [
        '강좌 4-5편',
        'Contact 데이터 추가 기능 구현 | 컴포넌트 응용 ',
        '[187:33]',
        'https://www.youtube.com/watch?v=L2HZ2OLIhuc&index=16&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-6': [
        '강좌 4-6편',
        'Contact 데이터 삭제/수정 기능 구현 | 컴포넌트 응용 ',
        '[197:03]',
        'https://www.youtube.com/watch?v=u6aJjPw0c_c&index=17&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-7': [
        '강좌 4-7편',
        'Contact 엑스트라 기능 구현 | KeyPress, ref ',
        '[357:53]',
        'https://www.youtube.com/watch?v=_cnRCixxaHQ&index=18&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-8': [
        '강좌 4-8편',
        'Component LifeCycle API ',
        '[349:50]',
        'https://www.youtube.com/watch?v=OUAOo1N-EDs&index=19&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '4-9': [
        '강좌 4-9편',
        'Contact 데이터 새로고침해도 유지하기 | localStorage ',
        '[219:57]',
        'https://www.youtube.com/watch?v=C_qTjHBlkks&index=20&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '5-1': [
        '강좌 5-1편',
        'Redux - 배경지식 | MVC, FLUX ',
        '[2211:20]',
        'https://www.youtube.com/watch?v=LRUQfJLuPA8&index=21&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '5-2': [
        '강좌 5-2편',
        'Redux - 특징과 흐름 ',
        '[237:02]',
        'https://www.youtube.com/watch?v=59XSBf00GpY&index=22&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '5-3': [
        '강좌 5-3편',
        'Redux - 프로젝트 준비하기 | create-react-app ',
        '[2417:18]',
        'https://www.youtube.com/watch?v=rNhstoL9MME&index=23&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '5-4': [
        '강좌 5-4편',
        'Redux - 프로젝트 구조 설정 및 컴포넌트 생성 ',
        '[258:06]',
        'https://www.youtube.com/watch?v=xX0eQLQ3IJw&index=24&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '5-5': [
        '강좌 5-5편',
        'Redux - Action ',
        '[2615:59]',
        'https://www.youtube.com/watch?v=_RwMVm1gVuM&index=25&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '5-6': [
        '강좌 5-6편',
        'Redux - Reducer ',
        '[278:20]',
        'https://www.youtube.com/watch?v=YdlbmiAtD_4&index=26&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '5-7': [
        '강좌 5-7편',
        'Redux - Store ',
        '[2819:34]',
        'https://www.youtube.com/watch?v=dmxA42uXo0I&index=27&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '5-8': [
        '강좌 5-8편',
        'Redux - react-redux | 컴포넌트에서 사용하기 ',
        '[292:46]',
        'https://www.youtube.com/watch?v=bp_eliWWWRA&index=28&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '6-1': [
        '강좌 6-1편',
        'Backend-소개 ',
        '[3013:38]',
        'https://www.youtube.com/watch?v=a7WIKopjA38&index=29&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '6-2': [
        '강좌 6-2편',
        'Backend-Node.js / Express.js 맛보기 | 라우팅, 모듈화 ',
        '[3113:20]',
        'https://www.youtube.com/watch?v=K-Pfx4K1Rbo&index=30&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '6-3': [
        '강좌 6-3편',
        'Backend-Express | 미들웨어(middleware) ',
        '[324:58]',
        'https://www.youtube.com/watch?v=sB5YRnrp0H4&index=31&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '6-4': [
        '강좌 6-4편',
        'Backend-MongoDB 소개 ',
        '[337:56]',
        'https://www.youtube.com/watch?v=eh1Lz6imsBM&index=32&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '6-5': [
        '강좌 6-5편',
        'Backend-MongoDB 기본명령어 (i) | 생성 및 제거 ',
        '[187:33]',
        'https://www.youtube.com/watch?v=SpEnZCU5VbY&index=33&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '6-6': [
        '강좌 6-6편',
        'Backend-MongoDB 기본명령어 (ii) | find()',
        '[187:33]',
        'https://www.youtube.com/watch?v=m5k0RGd5rSI&index=34&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
    '6-7': [
        '강좌 6-7편',
        'Backend-MongoDB 기본명령어 (iii) | sort, limit, skip, update ',
        '[197:03]',
        'https://www.youtube.com/watch?v=OSI3jKrWGl4&index=35&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC'
    ],
}
