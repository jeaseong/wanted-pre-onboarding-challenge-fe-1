# 원티드 프리온보딩 사전과제

# 목차

- [최종 화면](#최종화면)
- [실행 방법](#실행방법)
- [구현사항](#구현사항)
- [기술스택](#기술스택)
- [폴더구조](#폴더구조)
- [세부사항](#세부사항)
  - [만들려고하는 것](#만들려고-하는-것)
  - [todo 설계](#todo-설계)
  - [리펙1차](#리펙토링)
  - [useInput](#1차-onchage-refactor)
  - [리액트쿼리 적용](#리액트-쿼리를-넣어보자)

# 최종화면

![preonboard](https://user-images.githubusercontent.com/63990725/185733554-ff6f16d6-9f0e-43d0-bf95-bcf037b16bf7.gif)

# 실행방법

```js
client
npm i
npm start

server
yarn
yarn start
```

# 구현사항

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

# 기술스택

1. CRA

- 프로젝트 초기 설정의 편의성을 위해 사용했음, 웹팩, 바벨을 공부하고 cra에서 벗어나는 시도를 해볼 예정

2. axios

- api 요청 시 axios interceptors를 사용해서 설정의 이점이 있고, AxiosError 객체를 이용해 에러 관리에 이점이 있어 사용

3. styled-component

- css in js는 선택자를 다이렉트로 맵핑하기 때문에 순수 css보다 빠른 성능을 내기 때문에 사용했다. 그리고 컴포넌트 명을 구체적으로 정의해서 가독성이 높아지기 때문에 사용했다.

4. react-query

- 데이터를 언제 패치해야 하는가에 대한 고민을 해결해주는 라이브러리로 서버 상태를 관리하기에 최적의 기술이라고 판단하여 사용했다.

# 폴더구조

```txt

├── App.css
├── App.test.tsx
├── App.tsx
├── api
│   └── customAxios.ts
├── components
│   ├── atoms
│   │   ├── button
│   │   ├── input
│   │   │   ├── Input.style.tsx
│   │   │   ├── Input.tsx
│   │   │   └── types
│   │   │       └── index.ts
│   │   └── textarea
│   │       ├── TextArea.style.tsx
│   │       ├── TextArea.tsx
│   │       └── types
│   │           └── index.ts
│   └── modules
│       ├── auth
│       │   ├── api
│       │   │   └── api.ts
│       │   ├── hooks
│       │   │   └── useAuthSubmit.tsx
│       │   ├── login
│       │   │   └── Login.tsx
│       │   ├── signUp
│       │   │   └── SignUp.tsx
│       │   ├── types
│       │   │   └── index.ts
│       │   └── utils
│       │       └── validation.ts
│       └── todo
│           ├── Todo.tsx
│           ├── api
│           │   └── api.ts
│           ├── hooks
│           │   ├── useGetTodo.tsx
│           │   └── useInput.tsx
│           ├── todoAdd
│           │   ├── TodoAdd.tsx
│           │   └── hooks
│           │       └── usePostTodo.tsx
│           ├── todoDetail
│           │   ├── TodoDetail.tsx
│           │   └── hooks
│           │       ├── useDelTodo.tsx
│           │       └── useGetTodos.tsx
│           ├── todoEdit
│           │   ├── TodoEdit.tsx
│           │   └── hooks
│           │       └── usePutTodo.tsx
│           ├── todoList
│           │   └── TodoList.tsx
│           ├── types
│           │   └── index.ts
│           └── utils
│               └── debounce.ts
├── index.css
├── index.tsx
├── logo.svg
├── pages
│   ├── login
│   │   ├── Login.style.tsx
│   │   └── Login.tsx
│   ├── signUp
│   │   ├── SignUp.styled.tsx
│   │   └── SignUp.tsx
│   └── todo
│       ├── Todo.styled.tsx
│       └── Todo.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── routes
│   ├── LoginRoute.tsx
│   ├── PrivateRoute.tsx
│   ├── RoutesPages.tsx
│   └── types
│       └── index.ts
├── setupTests.ts
└── test

```

초기의 폴더 구조는 아토믹 구조를 적용해서 atom -> module -> template -> page로 구성했었다. 하지만 명확하게 나누기 힘든 중간 단계의 아토믹 구조가 오히려 더 복잡성을 높이는 것 같아서 공통으로 쓰이는 input과 textArea만 atom으로 컴포넌트를 만들고 나머지 구성은 modules에서 컴포넌트를 만들었습니다.

초기 구조는 모든 부분이 분리된 상태로, type, hooks, utils가 src 하위에 위치했고, 이를 사용하는 컴포넌트는 scr/type에서 import를 해서 사용을 했습니다.

이러한 구조는 유지보수를 위해 여러 폴더를 거쳐야 하는 단점이 보여서 **co-locate** 기법을 적용했습니다.

필요한 type, hooks, utils을 해당 컴포넌트와 같은 폴더에 넣어 관리하는 방식으로 적용해서 modules에 폴더마다 해당 폴더들이 존재합니다. 이는 [Kent.C 블로그](https://kentcdodds.com/blog/colocation)를 참고해서 수정했습니다.

# 세부사항

## 만들려고 하는 것

언어를 처음 배울 때 대부분 만드는 todo 앱을 만들어보자. 일단 스타일은 잠시 뒤로 넣어두고, 관심사 분리와 추상화에 집중해서 클린 코드를 짤 수 있도록 연습하자.

## todo 설계

기본적으로 todo라는 부모 컴포넌트에서 todolist, todoDetail, todoAdd 컴포넌트를 자식으로 가지는 구조로 설계했다.

이는 todo data를 list에서도 detail에서도 공유하기 위해서 부모 자식 관계로 구성했다. 이런 상황에서 다른 상태관리 라이브러리를 사용하기 보다는 근본적으로, 리액트 자체 원리를 이용해서 구현해 보았다.

todo 중 부모 컴포넌트에서 todo state에 useEffect를 이용해서 처음 렌더링이 될 떄 데이터를 패칭해온다. 이 때 post, put 요청에 의해 데이터가 변경되어도 새로 패치해오지 않고, 일단 바뀐 상태값을 유저에게 보여주면서 새롭게 데이터를 받아온 것 처럼 구현을 했다.

이유는 api 요청을 줄이기 위해..!

그럼 데이터를 패치받을 때는?

컴포넌트가 완전히 mount 될 떄 새로 데이터를 받아온다. 이렇게 한다면 유저는 본인이 작성한 혹은 수정한 데이터를 실시간으로 업데이트 되는 느낌을 받을 수 있다.

허나 이 방법이 옳은 방법일까.

api요청을 줄였다는 장점은 있지만, 유저가 언제나 최신의 정보를 받을 수 있을까.. 어떤 예외 상황이 있지 않을까.. 걱정이 된다. 그런 상황을 예측하지 못 한다는 것이 가장 큰 문제인 것 같다.

### 그래서 리액트 쿼리가 있다.

이런 문제를 손쉽게 해결하기 위해서 리액트쿼리가 존재한다.

일부러 사전 과제에서는 리액트쿼리의 중요성을 다시 새기기 위해 사용하지 않았다. 좀 더 필요성이 느껴지면 도입하겠다.

## 리펙토링

2차 과제?는 내 코드를 고쳐보는 것인데,, 어떤 부분을 어떻게 고쳐야할지 조금 막막했다. 뭐를 분리해야 하는지 전혀 감이 오지 않았기 때문이다. 뷰와 비즈니스 로직을 분리하는 것도 어떤 코드가 비즈니스 로직인지 구분이 가지 않아 매우 곤란했다.

그래서 클린 아키텍쳐를 읽어내기 시작했다. 읽었다고 깨우침을 얻지는 못 했다. 영어라서 이해가 어려웠다. 하지만 일단 반복을 줄여보기로 했다. 가장 눈에 띈 반복은 input의 handleOnChange 함수를 login, sign-up, addTodo, editTodo에서 동일한 로직으로 사용하고 있었기에 이를 하나의 훅으로 써보기로 했다.

```js
const handleOnChangeEmail = debounce(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  },
  300
);
const handleOnChangePassword = debounce(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  },
  150
);
```

onChange가 발생할 때 항상 컴포넌트가 re-render가 발생해 debounce 함수를 정의해서 불필요한 렌더링을 최소화 했다. 그리고 이러한 함수가 4개의 컴포넌트에 모두 반복적으로 존재하기 때문에 하나의 훅으로 바꿨다.

```js
const useInput = ({
  type,
  types,
  required,
  disabled,
  placeholder,
}: InputTypes): [string, JSX.Element] => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, 200);
  const input = (
    <Input
      type={type}
      types={types}
      onChange={handleOnChange}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
  return [inputValue, input];
};

// 사용할 때
const [todo, todoInput] = useInput({
  type: "text",
  types: "todo",
  placeholder: "todo",
  required: true,
});

return { todoInput };
```

일단 코드 길이를 확 줄일 수 있었다. 그런데 심미적으로 return 문에 보통 태그를 의미하는 <>를 사용하는 jsx가 아니라 {}를 사용하기 때문에 어색함이 좀 컸다.

이게 올바른 방법인지 문서를 정독하고 다시 코드를 들여다 봐야겠다.

## 1차 onChage refactor

내가 분리한 방법은 단순히 분리였다. 이유 근거가 없는 분리이기 때문에 오히려 직관성이 떨어져서 어떤 로직이 동작하는 지 알기 어려웠다. 그래서 컴포넌트를 what, how로 분류했다.

state는 what에 해당하고, onChange 함수는 how에 해당했기 때문에 how를 예쁘게 분리해서 사용하기를 바랐다.

기존의 useInput을 조금 더 가볍게 변경했다.

```js
interface Props {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useInput = ({ setValue }: Props) => {
  const handleOnChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, 200);

  return handleOnChange;
};
```

그리고 기존에 interface를 전부 types/type에 넣어서 관리 했는데, what에 관한 것은 같은 컴포넌트에 위치시켜 수정에 편의성을 더 늘려보려고 수정했다.

```js
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleChangeEmail = useInput({ setValue: setEmail });
const handleChangePassword = useInput({ setValue: setPassword });
```

이로써 해당 컴포넌트는 이메일과 패스워드를 입력하는 인풋이 있고 input value를 바꾸는 함수가 있는 컴포넌트구나 하고 명확하게 이해를 할 수 있게 되었다.

## 리액트 쿼리를 넣어보자

### 어떻게?

이제 할 만큼 했다. auth 부분 리펙토링을 마쳤고, todo 부분의 리펙토링은 리액트 쿼리를 이용해서 가장 부모 컴포넌트인 todo에서 action 함수들을 props로 내려서 state를 관리했던 방식에서 캐싱 기술을 이용해서 비즈니스 로직을 전부 query hook으로 분리해서 컴포넌트를 제작할 예정이다. 추가적으로 로그인, 회원가입의 submit을 hook으로 분리했지만 리액트쿼리를 사용해서 또 한 번 리펙토링을 할 예정이다.

첫 번째, add, delete, update 함수를 리액트 쿼리 훅으로 분리해서 사용하자.

이는 api 요청 로직을 view와 완벽하게 분리시킬 뿐 아니라, 이외 세부 로직을 컴포넌트에서 숨길 수 있다.

### 바뀐 점

todo에서 리액트 쿼리를 이용해 구현한 것은 create, delete, update, getTodo, getTodos로 5가지가 있다.

리액트 쿼리를 사용하기 전 모든 로직을 todo라는 부모 컴포넌트에서 정의해서 props로 내려 사용했다.

변경 전

```js
const Todo = () => {
  const params = useParams();
  const id = params.id as string;
  const [todos, setTodos] = useState<Todos[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const { data } = await getTodos();
      setTodos(data);
    };
    fetchApi();
  }, []);

  const handleAddTodo = (todo: Todos) => {
    setTodos((cur) => {
      return [...cur, todo];
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((cur) => {
      return cur.filter((item) => !(item.id === id));
    });
  };
  const handleUpdateTodo = (id: string, todo: Todos) => {
    setTodos((cur) => {
      const index = cur.findIndex((item) => item.id === id);
      const front = cur.slice(0, index);
      const back = cur.slice(index + 1);
      const newArr = [...front, todo, ...back];
      return newArr;
    });
  };
};
```

변경 후

```js
const TodoList = React.lazy(() =>
  import("components/modules/todo/todoList/TodoList")
);
const TodoDetail = React.lazy(() =>
  import("components/modules/todo/todoDetail/TodoDetail")
);

const Todo = () => {
  const { data } = useGetTodos();
  return (
    <React.Suspense fallback={<>오우 마이갓@</>}>
      <Container>
        <TodoAdd />
        <TodoList todos={data} />
        <TodoDetail />
      </Container>
    </React.Suspense>
  );
};
```

??? 코드가 어디 간 것이 아니라 전부 훅으로 구현했기 때문에 로직을 완전히 분리해서 컴포넌트를 간결하게 만들었습니다.

물론 각각의 컴포넌트에 로직들이 들어 있지만 모든 로직을 props로 내리던 방식보다 코드가 훨씬 깔끔해졌다.

코드의 가독성이 올라간 것도 중요하지만 리액트쿼리를 도입하므로써 데이터를 최적의 상태로 최신화하여 유지할 수 있는 것을 느꼈습니다. 기존에는 상태에 데이터를 저장해서 실제 서버에서 데이터를 받는 것이 아니라 최신화 된 것처럼 유저를 속이고, 새로고침 혹은 페이지를 나갔다가 다시 렌더링이 되는 경우에 최신화된 데이터를 패치받았는데 약간의 띠용하는 부분을 완전히 해결할 수 있었습니다.
