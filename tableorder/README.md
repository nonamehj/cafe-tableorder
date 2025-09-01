# Cafe-Tableorder

## 📖 프로젝트 소개

메뉴 선택, 옵션 선택, 장바구니 관리, 주문 내역 확인까지 흐름에 따라 구성한 프로젝트입니다.
카테고리별 음료 탐색과 다양한 옵션 선택 기능을 제공하며, 선택한 음료를 장바구니에 담아 최종 주문 내역까지 확인할 수 있도록 설계했습니다.

---

## 🚀 주요 기능 및 흐름

### 주요 기능

- 카테고리별 메뉴 탐색
- 메뉴 음료 선택
- 장바구니에서 선택한 메뉴와 수량 확인
- 주문 완료 전 확인 모달
- 주문 내역 확인 및 옵션 확인

### 사용자 흐름

- 카테고리를 선택해 메뉴 목록을 확인
- 메뉴 클릭 시 옵션 선택 모달 표시
- 옵션 선택 후 장바구니에 추가
- 장바구니에서 메뉴 확인 및 수량 조절
- 주문하기 클릭 → 주문 완료 모달 표시 후 자동 종료
- 주문 내역에서 선택한 메뉴와 옵션 확인 가능

---

## 📁 폴더 구조 (src/)

```js
src/
├── components/
│   ├── category/
│   │   ├── Category.js
│   │   └── CategoryStyle.css
│   ├── footer/
│   │   ├── OrderSummary.js
│   │   └── OrderSummaryStyle.css
│   ├── modal/
│   │   ├── itemcart/
│   │   │   ├── ItemCart.js
│   │   │   ├── ItemCartStyle.css
│   │   │   ├── ItemCartDetails.js
│   │   │   └── ItemCartDetailsStyle.css
│   │   ├── modalitems/
│   │   │   ├── ModalItem.js
│   │   │   ├── ModalItemStyle.css
│   │   │   ├── OptionItem.js
│   │   │   └── OptionItemStyle.css
│   │   ├── ordercomplete/
│   │   │   ├── OrderComplete.js
│   │   │   └── OrderCompleteStyle.css
│   │   ├── orderdetails/
│   │   │   ├── OrderDetails.js
│   │   │   ├── OrderDetailsStyle.css
│   │   │   ├── OrderOptions.js
│   │   │   └── OrderOptionsStyle.css
│   ├── navbar/
│   │   ├── Navbar.js
│   │   └── NavbarStyle.css
│   ├── section/
│   │   ├── Items.js
│   │   ├── ItemsStyle.css
│   │   ├── MenuList.js
│   │   └── MenuListStyle.css
├── action.js
├── App.js
├── index.css
├── context.js
├── data.js
└── reducer.js

```

---

## 🧩 컴포넌트 설명

### **category/**

- **Category**: 카테고리 선택 버튼 제공

### **footer/**

- **OrderSummary**: 화면 하단 장바구니/주문내역/직원 호출 버튼

### **modal/alert/**

- **Alert**: 직원 호출 시 알림 표시

### **modal/itemcart/**

- **ItemCart**: 장바구니 모달, 선택 메뉴와 수량 확인 및 수정 가능
- **ItemCartDetails**: ItemCart 내 메뉴 상세 목록

### **modal/modalitems/**

- **ModalItem**: 메뉴 옵션 선택 모달, 장바구니 담기 버튼 포함
- **OptionItem**: 개별 옵션 선택 컴포넌트

### **modal/ordercomplete/**

- **OrderComplete**: 주문 완료 모달, 3초 후 자동 종료

### **modal/orderdetails/**

- **OrderDetails**: 이전 주문 내역 확인 모달
- **OrderOptions**: 메뉴 옵션 상세 리스트

### **navbar/**

- **Navbar**: 로고 및 테이블 번호 표시

### **section/**

- **MenuList**: 선택한 카테고리 메뉴 전체 표시
- **Items**: 개별 메뉴 아이템, 옵션 모달

---

## 🛠️ 사용 기술 및 라이브러리

- **React**
  - Hooks: `useState`, `useEffect`, `useCallback`, `useReducer`, `useRef`, `createContext`, `useContext`, `memo`
- **React Icons**
- 아이콘
- **기타**
  - 일반 CSS

---

## 🎯 개발 목적 및 계기

- 테이블 오더 방식을 참고해 카페 메뉴 선택과 주문 과정을 직접 체험할 수 있도록 구현
- 사용자 입장에서 편리하고 직관적인 주문 흐름을 만드는 것을 목표
- 메뉴 카테고리별 선택 기능으로 사용자가 메뉴를 쉽게 탐색하도록 설계
- 옵션과 사이즈별 가격 변동을 반영해 실제 서비스와 유사한 구조 구현
- 반응형 UI를 적용해 다양한 기기 환경에서도 접근성과 편의성을 확보

## 💭 개발하며 느낀 점

- 상태 관리가 편리해졌지만, 로직이 길어지면 이해하기 어려움
- 모달과 컴포넌트 구조 설계에서 재사용성과 가독성 중요함
- 반복되는 코드가 많아 재사용 가능한 구조가 필요함
- 주문 내역에서 중복 메뉴를 합산하지 않아 사용자 편의성을 고려할 필요 느낌

## 🔧 개선점 및 향후 계획

- 메뉴 옵션을 다양하게 확장
- 반복 코드를 줄이고 재사용 가능한 구조 설계
- 주문 내역에서 동일 메뉴 합산 기능 구현
- UI/UX 개선과 사용자 편의성 강화

## 📸 프로젝트 데모 및 기타

📸 프로젝트 데모
👉 [https://nonamehj.github.io/cafe-tableorder](https://nonamehj.github.io/cafe-tableorder)

💻 GitHub 코드
👉 [https://github.com/nonamehj/cafe-tableorder](https://github.com/nonamehj/cafe-tableorder)
