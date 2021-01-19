const path = require('path');

function resolve(...args) {
  return path.resolve(__dirname, ...args)
}


module.exports = [
  {
    name: 'buddhists',
    port: 3000,
    title: '佛僧',
    music: resolve('../assets/mp3', '享誉佛国.mp3'),
  },
  {
    name: 'doctrines',
    port: 4000,
    title: '教义',
    music: resolve('../assets/mp3', '呕心沥血.mp3'),
  },
  {
    name: 'pagodas',
    port: 5000,
    title: '佛塔',
    music: resolve('../assets/mp3', '大乘天.mp3'),
  },
  {
    name: 'schools',
    port: 6000,
    title: '宗派',
    music: resolve('../assets/mp3', '往事随风.mp3'),
  },
  {
    name: 'scriptures',
    port: 7000,
    title: '佛经',
    music: resolve('../assets/mp3', '极乐的召唤.mp3'),
  },
  {
    name: 'temples',
    port: 8000,
    title: '佛寺',
    music: resolve('../assets/mp3', '绝域重生.mp3'),
  },
];
