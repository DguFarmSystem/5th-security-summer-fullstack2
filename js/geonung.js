// HTML 요소 가져오기
const profilePage = document.getElementById('profile-page');
const introPage = document.getElementById('intro-page');

const goToIntroBtn = document.getElementById('go-to-intro-btn');
const goToProfileBtn = document.getElementById('go-to-profile-btn');

// "자기소개 보기" 버튼 클릭 시 자기소개 페이지로 전환
goToIntroBtn.addEventListener('click', function () {
  profilePage.classList.add('hidden'); // 프로필 영역 숨기기
  introPage.classList.remove('hidden'); // 자기소개 영역 보여주기
});

// "프로필로 돌아가기" 버튼 클릭 시 프로필 페이지로 전환
goToProfileBtn.addEventListener('click', function () {
  introPage.classList.add('hidden'); // 자기소개 영역 숨기기
  profilePage.classList.remove('hidden'); // 프로필 영역 보여주기
});
