### 🗺️ Guide Book 🗺️

---
![website2](https://user-images.githubusercontent.com/88700967/152277129-3c864050-db1b-4db6-a434-31dc2353cd5c.png)
### 1. 🧑‍🤝‍🧑프로젝트 제목(Title) : BUSINESS WEBSITE

---

### 2. 🗣️프로젝트 소개(Overview):

---
\*I participated in making this website from designing to developing.
I developed this website using React/Redux.
 
React/Redux를 활용한 소셜 플랫폼 테마의 웹앱 사이트. 직접 코드를 작성하였으며 디자인(design)부터 초안(draft), 개발(development)까지 참여함.

### 3. 프로젝트 작동법(Running this project locally):

---
```
1. Clone this project locally
2. Run npm install or yarn install in your bash/command line
3. Run npm start or yarn start in your bash/command line
```

### 4. 👷‍사용된 스킬(Skill):

---

- React
- Redux
- CSS(SCSS)
- Firebase

### 5. 🌈 🔤사용된 주요색상(Color) 및 폰트(Font):

---

- #fff
- #d5b3b3

- Roboto

### 6. 📖사용된 라이브러리(Library/API/PLUGIN):

---

- [fontawesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=building)
- [React-reveal](https://www.react-reveal.com/)
- [ts-particles](https://www.npmjs.com/package/tsparticles)
- [react-circular-progressbar]()
- [axios](https://www.npmjs.com/package/axios)
- [swiper](https://swiperjs.com/) (home)
- [masonry](https://masonry.desandro.com/)(collection)
- [kakao api](https://masonry.desandro.com/) (contact)
- [google font](https://fonts.google.com/)

### 7. 🔢미디어 쿼리(media query for responsive website):

---

미디어 쿼리 적용을 통한 반응형 사이트 구현

### 8. 🧑‍🏫프로젝트 구성:

---
SPA
react-router-dom 을 이용하여 페이지 이동 

- Home (main page)
- About (sub page)
- Youtube (sub page)
- Gallery (sub page)
- Community (sub page)
- Contact (sub page)
- Join (sub page)

### 9. 각 페이지 구성:

---
Each page shares the same header and footer

공통적으로 헤더와 푸터 컴포넌트 적용
-src/common/header.js
-src/scss/common/header.scss
-src/common/footer.js
-src/scss/common/footer.scss

- Home

  - src/sub/Home.js
  - src/scss/sub/\_home.scss
  - src/class/anime.js
  - public/img/home

- About

  - src/sub/About.js
  - src/scss/sub/\_about.scss
  - public/img/about
  - public/dbs/influencer

- Youtube

  - src/sub/Youtube.js
  - src/scss/sub/\_youtube.scss
  - public/img/youtube

- Gallery

  - src/sub/Gallery.js
  - src/scss/sub/\_gallery.scss


- Community

  - src/sub/Community.js
  - src/scss/sub/\_community.scss


- Contact

  - src/sub/Contact.js
  - src/scss/sub/\_contact.scss

- Join

  - src/sub/Join.js
  - src/scss/sub/\_join.scss
  - src/service/auth_service.js
  - src/service/firebase.js
  - public/img/join

### 10. 😄주요 기능(main function & prototype method):

---

- Home

    - getIndex() : 버튼 클릭 시 해당 섹션의 index값 가져오기 / If you click the button, you can get section's index.
    - handleResize() : 리사이즈 시 변하는 섹션들의 offsetTop값 불러오기 / 
    - handleScroll() : 스크롤 시 해당 버튼 활성화 / If you scroll, the button will be active
    - fetchYoutube() : axios를 통해 유튜브 데이터 불러오기 함수 정의 / You can get data using axios
    - youtube redux dispatch : 유튜브 데이터 불러와 redux로 관리 / You can save youtube data using redux
    - tsparticles library 활용 background 생성 / customizable background
    - swiper 슬라이더 효과 적용 (휴대폰 스크린과 testimonials) / swiper slider
    - loading true 시 로딩화면, false 시 home 화면 적용
    - react-reveal fade 효과를 활용한 애니매이션 적용 / animation using react-reveal fade

- About

    - axios를 통해 public/dbs로부터 데이터 불러오기 / You can get data(public/dbs) using axios
    - react-reveal fade 효과를 활용한 애니매이션 적용 
    - AnimatedProgressProvider(react-circular-progressbar 라이브러리) 활용
    원형 프로그래스바 적용

- Youtube
    - Redux useSelctor를 이용해 저장된 yotub data 불러오기
    - axio를 이용해 public/dbs 내에 저장된 data 불러오기
    - new Date() 활용해 날짜 표시하기 (monthNames 배열을 만들어서 getMonth()시 숫자 문자로 바꾸기)
    - Pop() : 팝업 동영상 화면 함수 호출 정의

- Gallery
    - loading 화면 출력
    - getPhotos() : flickr api를 활용한 photos 데이터 불러오기 함수 호출 정의
    - Popup() : 팝업 사진 화면 함수 호출 정의
    - masonry를 적용해서 블록 형태의 이미지 리스트 layout 만들기
    - 검색창에 키워드 입력시 getPhotos의 type 변경을 통한 데이터 변경 및 불러오기
    - 검색어 창 enter/ click 가능
    - 팝업 화면 띄울 시 body overflow hidden 처리
    - like  좋아요 기능 적용

- Community
    - getLocalItems() : 로컬스토리지 내에 저장된 데이터 불러오기/ 초기값 없을 시 특정 데이터로 불러옴
    - axios를 활용해서 public/dbs 로부터 board 데이터 불러오기
    - crud 구현을 통한 help desk 운영
    - addPost() : 작성한 내용을 해당 state에 추가하는 호출 함수 정의
    - deletePost(): 해당 내용을 해당 state에서 삭제하는 호출 함수 정의 (filter활용)
    - disableUpdate(): 수정 불가능모드
    - ableUpdate(): 수정 가능모드
    - updatePost(): 해당 index의 내용을 수정하는 호출함수 정의
    - 사진에 swiper coverfolw 효과 적용
    - toggle 효과 적용을 통해 q&a ui 생성

- Contact
    - kakao api 활용 location 표시/ map controller / marker
    - 리사이즈 시 센터 변경
    - react-reaveal library를 활용한 애니메이션 효과
    - redux useSelector를 통해 저장된 youtube 데이터 불러오기

- Join
    - SignUpForm/ SingInForm components 연결해서 버튼에 따라 해당 컴포넌트 불러옴
    - firebase 를 활용해 google signUp 적용

### 11. 😄추가 및 수정 해야 할 사항 (What to do more):

---
- src/class/AnimatedProgressProvider.js 함수형 컴포넌트/ 리액트 훅 으로 바꾸기
- join 부분에 firebase를 통해 아이디/비밀번호 저장 및 로그인 기능 / I'd like to add login/sign up function using firebase
- 협업 시 커밋 메시지 descriptive하게 쓸 것 참고 [commit message](https://chiamakaikeanyi.dev/how-to-write-good-git-commit-messages/)
### 12. 프로젝트하면서 부족한 점/ 어려웠던 점

---
- csr + tsparicles library(?) 문제 때문인지 랜딩페이지 로딩 시 시간이 걸림. 로딩페이지 만들기
- public 폴더 절대경로를 이용하고 싶다면 html 에서는 %PUBLIC_URL, js 에서는 process.env.PUBLIC_URL 써야 한다는 것
- kakao api cors 에러 
-  
