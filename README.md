# Installation

    yarn add react-endless-scroll

or

    npm install react-endless-scroll

# Demo

https://dydokamil.github.io/react-endless-scroll-demo/

# npm link

https://www.npmjs.com/package/react-endless-scroll

# Usage
    import EndlessScroll from 'react-endless-scroll'

    <EndlessScroll
      onReachBottom={fetch}
      isLoading={isLoading}
      hasMore={hasMore}
    >
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </EndlessScroll>

# Props

##### `onReachBottom: function`

The function to be called upon reaching the bottom of the list

---

##### `isLoading: bool`

Whether the fetching function is busy fetching

---

##### `hasMore: bool`

Whether the fetching function has more data to fetch

---

##### `children: ReactNode`

Components to render

---

##### `threshold?: number = 0.0`

Determines, in percent, how much of the bottom 100 pixels of the list has to be "seen" in order to trigger `onReachBottom`

---

##### `className?: string`

class name of the top level wrapper
