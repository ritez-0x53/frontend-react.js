
# 📌 Important React Hooks – Explained with Examples

React Hooks are powerful features that allow you to use state, side effects, context, and more — all without writing class components. This guide covers the **most important React Hooks** every developer should know.

---

## 🧩 1. `useState` – State Management

```jsx
const [count, setCount] = useState(0);
```

- Tracks and updates local state.
- Re-renders the component on update.

---

## 🧩 2. `useEffect` – Side Effects

```jsx
useEffect(() => {
  console.log("Component mounted or count changed");
}, [count]);
```

- Runs after render.
- Used for API calls, timers, DOM updates, etc.

---

## 🧩 3. `useRef` – DOM References or Persistent Values

```jsx
const inputRef = useRef(null);
inputRef.current.focus();
```

- Access DOM elements or persist values across renders without re-rendering.

---

## 🧩 4. `useMemo` – Memoized Values

```jsx
const total = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);
```

- Optimizes performance by memoizing expensive computations.
- Recomputes only when dependencies change.

---

## 🧩 5. `useCallback` – Memoized Functions

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);
```

- Returns a memoized version of the callback function.
- Useful when passing functions to child components.

---

## 🧩 6. `useContext` – Access Global State

```jsx
const auth = useContext(AuthContext);
```

- Shares data (like auth, theme, user) without prop drilling.

---

## 🧩 7. `useReducer` – Complex State Logic

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- Useful for managing complex or multiple pieces of related state.
- Similar to Redux-style state handling.

---

## 🧩 8. `useLayoutEffect` – DOM Layout Effects

```jsx
useLayoutEffect(() => {
  console.log("Runs before painting to screen");
}, []);
```

- Similar to `useEffect`, but runs **before** the browser repaints the screen.
- Used for measuring layout or synchronously mutating the DOM.

---

## 🧩 9. `useNavigate` – Navigation (React Router)

```jsx
const navigate = useNavigate();
navigate("/dashboard");
```

- Programmatic navigation in single-page apps.

---

## 🧩 10. `useParams`, `useLocation`, `useSearchParams` – Routing Utilities

- `useParams()` – Get route parameters (e.g., `/user/:id`)
- `useLocation()` – Get current URL and state
- `useSearchParams()` – Access or update query strings

---

## 📦 Bonus Hooks

| Hook               | Description                                 |
|--------------------|---------------------------------------------|
| `useId()`          | Generate unique IDs (forms, accessibility)  |
| `useImperativeHandle()` | Customize what a parent gets via `ref` |
| `useSyncExternalStore()` | Used for libraries like Redux          |
| `useTransition()`  | Helps prioritize updates (concurrent rendering) |

---

## 📘 Best Practices

- Don't overuse `useMemo` or `useCallback` — only use them for performance bottlenecks.
- Keep `useEffect` clean — avoid complex logic inside it.
- Combine `Context` with `Custom Hooks` for reusable logic.

---

## 🧠 Summary Table

| Hook           | Purpose                                  |
|----------------|-------------------------------------------|
| `useState`     | Manage local component state              |
| `useEffect`    | Run side effects after render             |
| `useRef`       | Access DOM or persist mutable values      |
| `useMemo`      | Memoize computed values                   |
| `useCallback`  | Memoize functions                         |
| `useContext`   | Access context (global state)             |
| `useReducer`   | Handle complex state updates              |
| `useLayoutEffect` | Layout calculations before painting    |
| `useNavigate`  | Navigate programmatically (router)        |
| `useParams`    | Access route parameters                   |

---

## 🧪 Want to Practice?

Try building:
- A to-do app with `useState` and `useEffect`
- A theme toggler with `useContext`
- A form with validation using `useRef`
- A list filter/search app with `useMemo`

---

> 🔥 Learn hooks by building, not just reading. Practice with real-world mini apps to master them quickly.

---

Happy Coding! 💻🚀
