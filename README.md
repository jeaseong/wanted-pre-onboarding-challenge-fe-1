# 원티드 프리온보딩 사전과제

# 목차

- [무엇을](#만들려고-하는-것)
- [무엇을](#todo-설계)
- [무엇을](#리펙토링)
- [무엇을](#1차-onchage-refactor)
- [무엇을](#리액트-쿼리를-넣어보자)

# 만들려고 하는 것

언어를 처음 배울 때 대부분 만드는 todo 앱을 만들어보자. 일단 스타일은 잠시 뒤로 넣어두고, 관심사 분리와 추상화에 집중해서 클린 코드를 짤 수 있도록 연습하자.

# todo 설계

기본적으로 todo라는 부모 컴포넌트에서 todolist, todoDetail, todoAdd 컴포넌트를 자식으로 가지는 구조로 설계했다.

이는 todo data를 list에서도 detail에서도 공유하기 위해서 부모 자식 관계로 구성했다. 이런 상황에서 다른 상태관리 라이브러리를 사용하기 보다는 근본적으로, 리액트 자체 원리를 이용해서 구현해 보았다.

todo 중 부모 컴포넌트에서 todo state에 useEffect를 이용해서 처음 렌더링이 될 떄 데이터를 패칭해온다. 이 때 post, put 요청에 의해 데이터가 변경되어도 새로 패치해오지 않고, 일단 바뀐 상태값을 유저에게 보여주면서 새롭게 데이터를 받아온 것 처럼 구현을 했다.

이유는 api 요청을 줄이기 위해..!

그럼 데이터를 패치받을 때는?

컴포넌트가 완전히 mount 될 떄 새로 데이터를 받아온다. 이렇게 한다면 유저는 본인이 작성한 혹은 수정한 데이터를 실시간으로 업데이트 되는 느낌을 받을 수 있다.

허나 이 방법이 옳은 방법일까.

api요청을 줄였다는 장점은 있지만, 유저가 언제나 최신의 정보를 받을 수 있을까.. 어떤 예외 상황이 있지 않을까.. 걱정이 된다. 그런 상황을 예측하지 못 한다는 것이 가장 큰 문제인 것 같다.

## 그래서 리액트 쿼리가 있다.

이런 문제를 손쉽게 해결하기 위해서 리액트쿼리가 존재한다.

일부러 사전 과제에서는 리액트쿼리의 중요성을 다시 새기기 위해 사용하지 않았다. 좀 더 필요성이 느껴지면 도입하겠다.

# 리펙토링

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

# 1차 onChage refactor

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

# 리액트 쿼리를 넣어보자

## 어떻게?

이제 할 만큼 했다. auth 부분 리펙토링을 마쳤고, todo 부분의 리펙토링은 리액트 쿼리를 이용해서 가장 부모 컴포넌트인 todo에서 action 함수들을 props로 내려서 state를 관리했던 방식에서 캐싱 기술을 이용해서 비즈니스 로직을 전부 query hook으로 분리해서 컴포넌트를 제작할 예정이다. 추가적으로 로그인, 회원가입의 submit을 hook으로 분리했지만 리액트쿼리를 사용해서 또 한 번 리펙토링을 할 예정이다.

첫 번째, add, delete, update 함수를 리액트 쿼리 훅으로 분리해서 사용하자.

이는 api 요청 로직을 view와 완벽하게 분리시킬 뿐 아니라, 이외 세부 로직을 컴포넌트에서 숨길 수 있다.
