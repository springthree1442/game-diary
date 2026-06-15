const gameData = {
  profile: {
    title: "황혼과 새벽을 잇는 물결",
    subtitle: "알파와 베타, 두 조직의 균열에 관한 기록",
    introduction:
      "두 조직의 대립과 공조 속에서 숨겨진 계획을 추적하는 비주얼노벨 설정 기록 페이지입니다."
  },

  characters: [
    {
      name: "조직원 y",
      organization: "알파",
      role: "사업장 g 소속 조직원",
      description: "가족을 부양하고 있으며 피카로와 대학 시절부터 친분이 있다.",
      tags: ["알파", "주요 인물"]
    },
    {
      name: "피카로",
      organization: "베타",
      role: "베타 핵심 인물",
      description: "베타 보스의 등극에 기여한 인물. 조직원 y와 과거부터 알고 지냈다.",
      tags: ["베타", "핵심 인물"]
    },
    {
      name: "간부 h",
      organization: "알파",
      role: "알파 간부",
      description: "알파 내부의 주요 의사결정에 관여하는 인물.",
      tags: ["알파", "간부"]
    }
  ],

  chapters: [
    {
      act: "Act.1 균열",
      chapter: "Chapter.1 조명이 밝은 밤",
      status: "작성 중",
      summary: "사업장 g의 영업 도중 정전과 서버 장애가 발생한다.",
      updated: "2026-06-15"
    },
    {
      act: "Act.1 균열",
      chapter: "Chapter.2 데드락",
      status: "구상 중",
      summary: "알파와 베타 사이의 대치가 본격적으로 고착된다.",
      updated: "2026-06-15"
    }
  ],

  timeline: [
    {
      date: "사건 전",
      title: "두 보스의 회동",
      text: "간부 h의 사무실에서 알파와 베타의 계획이 조율된다."
    },
    {
      date: "사건 당일",
      title: "정전과 서버 장애",
      text: "사업장 g의 조명이 꺼지고, 베타의 서버도 동시에 두절된다."
    },
    {
      date: "2주 후",
      title: "데드락",
      text: "두 조직의 대치와 불신이 장기화된다."
    }
  ]
};
