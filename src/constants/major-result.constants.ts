interface IMajorResult {
  major: string;
  majorKey: 'web' | 'server' | 'game' | 'ios' | 'android' | 'ai';
  selectedReason: string;
  graph: { [key: string]: number };
}

export const majorResult: IMajorResult = {
  major: '웹 개발자',
  majorKey: 'web',
  selectedReason: `님은 시각적 표현을 통해 작업물을 선보이는 걸 선호하고 디자인 센스도 갖추고 있어서, 웹 개발 분야가 잘 맞을 것 같습니다.`,
  graph: {
    web: 60,
    server: 10,
    game: 5,
    ios: 5,
    android: 10,
    ai: 11,
  },
};

export const majorResultList = {
  web: {
    description:
      '웹 프론트엔드 개발자는 사용자가 직접 보고 상호작용하는 웹사이트의 화면과 인터페이스를 개발하는 전문가입니다. HTML, CSS, JavaScript를 기반으로 React, Vue.js 등의 프레임워크를 활용하여 사용자 친화적이고 반응형인 웹 애플리케이션을 구현합니다. 디자이너가 만든 UI/UX 디자인을 실제 동작하는 코드로 변환하며, 웹사이트의 성능 최적화와 크로스 브라우저 호환성을 보장하는 역할을 담당합니다.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  server: {
    description:
      '서버 개발자는 웹사이트, 애플리케이션 또는 기타 소프트웨어 시스템의 서버 측을 개발하고 유지 관리하는 역할을 합니다.',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'Java', 'Spring'],
  },
  game: {
    description:
      '게임 개발자는 비디오 게임을 설계, 개발 및 테스트하는 역할을 합니다.',
    skills: ['C++', 'Unity', 'Unreal Engine', 'Blender', 'Game Design'],
  },
  ios: {
    description:
      'iOS 개발자는 iPhone, iPad 및 기타 Apple 기기용 애플리케이션을 개발하는 역할을 합니다.',
    skills: ['Swift', 'Objective-C', 'Xcode', 'UIKit', 'Core Data'],
  },
  android: {
    description:
      '안드로이드 개발자는 Android 운영 체제를 위한 애플리케이션을 개발하는 역할을 합니다.',
    skills: ['Java', 'Kotlin', 'Android Studio', 'XML', 'Firebase'],
  },
  ai: {
    description:
      'AI 개발자는 인공지능 시스템과 애플리케이션을 설계, 개발 및 구현하는 역할을 합니다.',
    skills: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Machine Learning',
      'Data Science',
    ],
  },
};
