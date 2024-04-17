# ReBoast 프로토타입

## 개요

- 로그인 모달 / 회원가입 모달<br> <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/893eb80c-4b60-40e7-ace4-1f9c090d5d24" alt="로그인 모달" width="500"/> <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/69c87f55-3b3e-4998-9948-30d226838cbc" alt="회원가입 모달" width="500"/>

<br>

- 회원가입 페이지<br> <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/8e2b76b2-9242-4f7d-abd4-549ab67b26cb" alt="회원가입 페이지1" width="500"/><img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/766d2b9a-920c-429f-a310-0c223885fd46" alt="회원가입 페이지2" width="500"/><img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/d67fd357-c785-4732-a3c9-bcaeb284f15f" alt="회원가입 페이지3" width="500"/>

<br>

- 로그아웃

<br>

- 메인 페이지 <br> <img src="https://github.com/happyeveryone96/gptus-prototype/assets/66675699/6afcfce7-cc77-40cc-804b-8d0eb2829400](https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/b61e4704-bf47-4d81-b5f6-0b87bbbd14e7" alt="메인 페이지1" width="500"/> <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/75c895b5-4316-4f91-b553-44130a82e554" alt="메인 페이지2" width="500"/>

<br><br>

- 학습 자료 페이지<br> <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/8f3d3c8d-44fb-453b-aaf2-c0cd4028c237" alt="학습 자료 페이지" width="500"/>

<br><br>

- 강의 상세 페이지<br> <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/b946b4d5-438c-4989-af48-6495f7d39648" alt="강의 상세 페이지1" width="500"/><img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/6a8ce9b5-d423-4144-9f27-ec89720cf76d" alt="강의 상세 페이지2" width="500"/>


<br><br>

- 멘토 소개 페이지<br> <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/824bb378-d010-4dc4-88f7-13588e82be48" alt="멘토 소개 페이지" width="500"/>

  <br><br>

- 멤버쉽 페이지<br> <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/4839dcb2-c9ae-4ab7-870c-62e21852af34" alt="멤버쉽 페이지" width="500"/>

  <br><br>

- 이벤트 페이지<br>
  <img src="https://github.com/happyeveryone96/ReBoast-Web/assets/66675699/7af5ad2e-416d-442e-b27b-34cca4073ea7" alt="이벤트 페이지" width="500"/>

<br>

## 프로젝트 실행 방법

```
npm install

npm run start
```

<br>

## 기능 설명

### 인증 서비스 (service/auth.service.js)

- HTTP 요청을 위해 Axios를 사용하고 사용자 정보를 위해 Local Storage를 사용
- login() : POST {사용자 이름, 비밀번호} & User Profile 로컬 저장소에 저장
- logout() : POST 로그아웃 요청, User Profile 로컬 저장소에서 제거
- register() : POST {사용자 이름, 이메일, 비밀번호}
- refreshToken() : POST {토큰}, 토큰 재발급

<br>

### 유저 서비스 (service/user.service.js)

- getUserProfile() : GET 사용자 정보 가져오기
- editProfile() : PUT {토큰, 이메일, 비밀번호} 사용자 정보 수정 (이름, 비밀번호)

<br>

### 전역 상태 유지 (redux-persist)

- 새로고침 시 전역 상태가 초기화되는 것을 막아줌

<br>

### 강의 및 상담 관련 데이터

- dummy data 사용 (src/data)
- lectureData.js
- lectureDetailData.js
- consultingData.js
- consultingDetailData.js

<br>

### 슬라이스 리듀서 및 액션 생성

- Redux를 위해 많은 폴더와 파일(액션, 리듀서, 유형 등)을 생성하는 대신<br> redux-toolkit을 사용하면 슬라이스만 있으면 됨
- 슬라이스는 단일 기능에 대한 Redux 리듀서 로직과 액션의 모음이며,<br> 슬라이스를 생성하려면 아래 항목들이 필요함
- 슬라이스를 식별할 이름
- 초기 상태값
- 상태를 업데이트하는 방법을 정의하는 하나 이상의 reducer 함수
- 슬라이스가 생성되면, 생성된 Redux 액션 생성자와 전체 슬라이스에 대한<br> reducer 함수를 내보낼 수 있음
- Redux Toolkit은 사용자가 reducer 함수의 이름을 기반으로 action type과<br> action creater를 자동으로 생성하는 createSlice() 함수를 제공함

<br>

### store 생성

- 스토어는 액션과 리듀서를 함께 가져오고 애플리케이션 상태를 유지함
- Redux Toolkit의 configureStore() 함수는 자동으로 <br> Redux 개발자 도구 확장을 활성화하고, 기본적으로 thunk 미들웨어를<br> 설정하므로 추가 구성없이 바로 thunk를 작성할 수 있음

<br>

### store 활성화

- 애플리케이션을 <Provider> 컴포넌트로 감싸고 store를 prop으로 전달하면 <br> 중첩된 컴포넌트에서 Redux 저장소를 사용할 수 있게 됨

```
// src/index.js
...
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

<br>

### persist store 적용

```
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "app/slices/auth";
import messageReducer from "app/slices/message";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  auth: authReducer,
  message: messageReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // localStorage에 저장
  whitelist: ["auth"],
  // auth, message 2개의 reducer 중에 auth reducer만 localStorage에 저장
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

```

<br>

### persist store 사용

```
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "App";
import "index.css";

// persist store 사용을 위해 필요한 코드
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const container = document.getElementById("root");
const root = createRoot(container);

// persist store 사용을 위해 필요한 코드햣
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

```

<br>

### Formik과 Yup을 활용한 유효성 검사

- Formik은 동기식 및 비동기식 양식 수준 및 필드 수준 유효성 검사를 지원<br>
- Yup은 통해 스키마 기반 양식 수준 유효성 검사를 지원

```
// components/Register.js
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .test(
      "len",
      "The username must be between 3 and 20 characters.",
      (val) =>
        val && val.toString().length >= 3 && val.toString().length <= 20 // username 길이 검사
    )
    .required("This field is required!"), // username field가 비어있는지 검사
  email: Yup.string()
    .email("This is not a valid email.") // 이메일 형식에 맞는지 검사
    .required("This field is required!"), // email field가 비어있는지 검사
  password: Yup.string()
    .test(
      "len",
      "The password must be between 6 and 40 characters.",
      (val) =>
        val && val.toString().length >= 6 && val.toString().length <= 40 // password 길이 검사
    )
    .required("This field is required!"), // password field가 비어있는지 검사
});
```
