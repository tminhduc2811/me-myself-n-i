---
title: React Cheatsheet and Use Cases
description: Including basic and advanced React features, design patterns.
author: Duc Ta
image: https://tmduc.com/images/react-cheat-sheet.jpg
---

# React cheat sheet

### Hooks

#### UseState
```jsx
const [state, setState] = useState(initialStateValue)
```
* initialStateValue can be string, number, object, etc.
* setState is a function to set value for `state`

You can initialize state from a function

```jsx
const [token] = useState(() => {
    const token = window.localStorage.getItem('my-token')
    return token || 'default-token'
})
```

#### UseEffect

Basic side effect, this will be triggerd on every render

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

#### UseContext
TODO: Add useContext examples 

#### UseReducer
TODO: Add useReducer examples

#### UseCallback
TODO: Add useCallback examples

#### UseMemo
TODO: Add useMemo examples

#### UseRef
TODO: Add useRef examples


### Custom Hooks

#### UseFetch
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

#### UseLocalStorage

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
### To Read
* [Clean Architecture on Frontend](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)
* https://github.com/alex83130/advanced-react-patterns
