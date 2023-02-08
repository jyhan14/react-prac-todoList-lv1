# react-prac-todoList

## 📅 schedule
- 2022 Feb 6 : 
  - Project 시작
  - 레이아웃짜기 -> 컴포넌트로 쪼개보기
  - insert 기능 구현
- 2022 Feb 7 :
  - 컴포넌트에 대한 이해 부족! -> 다 쪼갠상태로 기능구현하는게 너~무 오래걸림 ->app.js에 기능 구현 먼저 해보기(새 프로젝트 생성)
  - delete 기능 구현
  - update 기능 구현
  - Form validation : inputBox에 required 로 걸어줬던 것을 조건문으로 alert뜨게 바꿈
  - 제목 및 내용을 입력하고 추가버튼을 누르면 입력했던 내용들이 그대로 inputBox에 남아있었는데, 추가하고 나면 inputBox clear 하게 수정
- 2022 Feb 8 :
  - 추가버튼 구현시 id값에 `todos.length + 1`을 넣으니, id값 중복 발생
  - ex) id값이 [1,2,3,4,5] 일때 배열의 length는 5, 3,4을 삭제하면 [1,2,5], 배열의 length는 3! 두개의 카드를 더 추가하면 [1,2,5,4,5]가 됨! 아이디값 5가 중복!!
  - 배열의 길이 말고, id값의 제일 마지막 값(max값) + 1을 해줌
  - 구현 한 것은 components -> TodoForm.jsx에서 볼 수 있습니다.


## 🗂 1_todo_practice
- App.js에 전체 기능 구현 (insert, delete, update)

## 🗂 src -> app.js
-  pages 폴더의 TodoList.jsx와 연결

## 🗂 src -> pages -> TodoList.jsx
- components 폴더의 Layout, TodoForm, TodoItems와 연결

## 🗂 src -> components
- Layout
  - 전체 틀 및 헤더
- TodoForm
  - insert Form 컴포넌트
- TodoItems
  - working 과 done을 나눠주고, Todo가 리스팅 되는 부분 컴포넌트
  - Todo와 연결
- Todo
  - Todo 컴포넌트
