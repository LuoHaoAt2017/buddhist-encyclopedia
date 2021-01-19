function addBackgroundMusic(url) {
  const audio = document.createElement('audio');
  // 播放设置
  audio.src = url;
  audio.hidden = true;
  audio.loop = true;
  // 挂载元素
  document.body.appendChild(audio);
  // 必须等用户和页面有交互行为后才能触发
  document.addEventListener('click', () => {
    audio.play();
  });
}

export default addBackgroundMusic;