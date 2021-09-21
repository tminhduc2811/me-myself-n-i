---
title: React Cheatsheet
description: Memorizing every syntax and semantics is difficult in programming. This cheatsheet is to help you understand and list all major concepts, features of React. Including code snippets and real world examples.
author: Duc Ta
image: /images/react-cheat-sheet.jpg
---

## Table of Contents

## Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

### UseState

This is a very basic hook to create a state in your functional component

```jsx
const [state, setState] = useState(initialStateValue)
```

* initialStateValue can be string, number, object, etc.
* setState is a function to set value for state

You can initialize state from a function

```jsx
const [token] = useState(() => {
    const token = window.localStorage.getItem('my-token')
    return token || 'default-token'
})
```

### UseEffect

* Basic side effect, this will be triggerd on every rendered
* Think of <span class="text-yellow">useEffect</span> as React class lifecycle methods such as componentDidMount, componentDidUpdate, componentWillUnmount combined.
* Data fetching, setting up subscriptions and changing the DOM in React are basically called <span class="text-yellow">"side effects"</span>.

```jsx
useEffect(() => {
  console.log("This will be logged after every render!")
})
```

Call once only after the component mounted

```jsx
// By passing an empty array, this will be called only once, this is the same as componentDidMount life cycle
useEffect(() => {
  console.log("This will be logged after the component did mount!")
}, [])
```

Only call the side effect hook whenever the dependencies change

```jsx
const UserAvatar = ({ username }) => {
   const [avatar, setAvatar] = useState('link-to-placeholder')
   useEffect(() => {
      // this will be called when the prop username changes
      const userData = fetchUser(username)
      setAvatar(userData.avatar)
   }, [username])
   
   return (
      <img src={avatar} alt='user-avatar' />
   )
}
```

Cleanup Effect

```jsx
useEffect(() => {
    const clicked = () => console.log('window clicked')
    window.addEventListener('click', clicked)

    // return a clean-up function
    return () => {
      window.removeEventListener('click', clicked)
    }
}, [])
```

### UseContext

* <span class="text-yellow">Context</span> is a way to handle shared data between components in React.
* <span class="text-yellow">useContext</span> has a simpler API compared to the <span class="text-yellow">Consumer</span> of the context

```jsx
// context with Consumer
const UserContext = createContext("Duc Ta")

const UserProfile = () => {
  return (
    <UserContext.Consumer>
      {user => <span>{`The username is ${user}`}</span>}
    </UserContext.Consumer>
  )
}
// context with the useContext hook
const OtherComponent = () => {
  // by using this hook, we don't need to rely on the Consumer
  const user = useContext(UserContext)
  return (
    <span>The user is {user}</span>
  )
}
```

### UseReducer

* <span class="text-yellow">useReducer</span> is an alternative to <span class="text-yellow">useState</span>.
* This hooks is a good way to handle state when you have a complex state logic

```jsx
const authState = { user: '', authenticated: false }

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGGED_IN":
      return { user: action.payload.user, authenticated: true }
    case "LOGGED_OUT":
      return { user: '', authenticated: false }
    default:
      return state
  }
}

const App = () => {
  const [authState, dispatch] = useReducer(reducer, authState)

  const login = () => {
    // handle the login function and dispatch the result
    dispatch({ type: "LOGGED_IN", payload: { user: 'Duc Ta' } })
  }

  const logout = () => {
    dispatch({ type: "LOGGED_OUT" })
  }
  return (
    <>
      <UserForm />
      {
        authState.authenticated ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>
      }
    </>
  )
}
```

### UseCallback

* <span class="text-yellow">useCallback</span> returns a memoized callback.
* Why useCallback? Basically, when a component is re-rendered, all its instances of functions and constants inside of it will be re-created, and this is redudant. Imagine if we have a large number of functions, this would cause performance issues for your application. Therefore, <span class="text-yellow">useCallback</span> helps resolve these issues.

```jsx
const YourComponent = () => {
  
  // This function will be re-created every render
  const functionA = () => {
    console.log('This function will be re-created every render')
  }

  /*
  * This function will be created only once
  * useCallback will memoize the function that we pass to it
  */
  const functionB = useCallback(() => console.log('This function will be created only once'))
}
```

You can also pass an array of dependencies to the hook, this will help re-create the function whenever the dependencies change

```jsx
const [state, setState] = useState(...)
// this function will be recreated whenever state changes
const yourFunction = useCallback(() => {
  // your function here
}, [state])
```

### UseMemo

* <span class="text-yellow">useMemo</span> returns a memoized value.
* This hook is quite similar to <span class="text-yellow">useCallback</span>. Though it remembers the result from your function instead of the actual function like <span class="text-yellow">useCallback</span>.
* This is great when you have some functions that need a lot of computing resources

```jsx
// a complex component with a lot of computing
const ComplexComponent = () => {
  const [value, setValue] = useState(null)
  const [anotherValue, setAnotherValue] = useState(null)

  const calcValue = () => {
    /*
    * This is where you do all the logic of calculating the value
    * Eg: this function take seconds to perform
    */
   const calcValue = ...
   return calcValue
  }

  // This will re-calculate whenever the value changes, anotherValue will not impact to this
  const calculatedValue = useMemo(() => calcValue(), [value])

  return (
    <>
      <span>Current value is: ${calculatedValue}</span>
      <span>Another value is: ${anotherValue}</span>
    </>
  )
}

```

### UseRef

* This hooks returns a 'ref' object
* Value is persisted by the <span class="text-yellow">.current</span> property

```jsx
const SearchBox = () => {
  const [query, setQuery] = useState('')
  
  const searchInput = useRef(null)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const clearSearchQuery = () => {
    // clear the search input
    searchInput.current.value = ''
    
    searchInput.current.focus()
  }

  return (
    <input type='text' onChange={handleChange} ref={searchInput} />
  )
}
```

## Custom Hooks

### UseFetch

```jsx
import { useEffect, useState } from "react"

export const useFetch = url => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [url])

    return { data, error, loading }
}
```

### UseLocalStorage

Note: This won't work for SSR

```jsx
import { useEffect, useState } from "react"

const useLocalStorage = (defaultVal, key) => {
  const [value, setValue] = useState(() => {
    const localValue = window.localStorage.getItem(key)
    return localValue ? JSON.stringify(localValue) : defaultVal
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
};

export default useLocalStorage
```

## To Read

* [Clean Architecture on Frontend](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)
* <https://github.com/alex83130/advanced-react-patterns>
