![_138](https://user-images.githubusercontent.com/44854708/110325968-603e3180-805b-11eb-9a86-46b0e18895d8.png)



#### 개발과정

1. CRA typescirpt template를 사용해  기본세팅을 했습니다.

```bash
npx create-react-app -template typescript
```

2. eslint prettier 설정을 미리 함으로써 코드를 깔끔하게 정리하려합니다.

```bash
 npm i -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

3.  Redux로 상태를 관리하기 위해 Redux-toolkit도 설치했습니다. index.tsx에서 Provider 설정을 해줬으며 store와 Reducer를 각각 만들어 설정을 마쳤습니다.  **(자세한 설정은 redux폴더 참조)**

   ```bash
    npm i @reduxjs/toolkit react-redux 
    npm i -D @types/react-redux
   ```

4. CSS in JS 라이브러리로는 자주 사용해서 익숙한 styled-component를 사용했습니다
   이후 styles 폴더를 만들어서 globalStyle과 reset 설정을 해줬으며, index.tsx에서 themeProvider를 설정해줬습니다.  **(자세한 설정은 styles폴더 참조)**

   ```bash
   npm i styled-components styled-reset
   npm i -D @types/styled-components
   ```

5. tsconfig.json 에 아래 항목을 추가해줬습니다. import시 src를 전역으로 불러오려고 합니다.

   ```javascript
   "baseUrl": "src",
   ```

   

![_137](https://user-images.githubusercontent.com/44854708/110325975-63392200-805b-11eb-9281-98ff58c942f3.png)

폴더 구성은 위와 같습니다.

types.ts은 여러곳에서 필요한 type을 적어 export 하고있습니다.

utils.ts 에서는 여러 API 주소들을 적어 export했습니다.

react-helmet을 사용해 favicon과 title을 변경했습니다.

![image-20210308215231248](https://user-images.githubusercontent.com/44854708/110326191-aa271780-805b-11eb-9a9c-629454590d37.png)



첨부해주신 예제에 맞게 제작후, 전체적인 디자인을 IMDB 사이트와 비슷하게 변경해봤습니다.

Trailer 버튼이 작동하지 않을텐데, 이것은 Trailer 주소에 들어가는 ID값이 영화 정보 ID값과 같을거라고 생각하고 넣었지만 전혀 다르기때문에 링크를 빼놨습니다.
다만 이 버튼이 없는것보다 있는게 심미상 좋은것같아 일단 놔뒀습니다.

이미지나 영화제목을 클릭하면 해당 영화 정보(IMDB)로 넘어가도록 만들었습니다.



13인치 윈도우 노트북을 기준으로 작업했습니다.



#### 실행방법

```bash
npm install
npm run start
```



gh-pages로 배포한 프로젝트 바로보기

https://beginal.github.io/ticketTest/

#### 후기

기능구현이나 스타일 작업에만 집중하다보니 중간중간 커밋을 너무 못한것 같습니다.
