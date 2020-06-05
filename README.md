# Installation

    yarn add react-endless-scroll

# Demo

https://dydokamil.github.io/react-endless-scroll-demo/

# Usage

    <EndlessScroll
      onReachBottom={fetch}
      isLoading={isLoading}
      hasMore={hasMore}
    >
      {elements.map((element) => (
        <Element>{element}</Element>
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

##### `children: node`

Components to render

---

##### `threshold: number = 0.8`

Determines, in percent, how much of the component has to be "seen" in order to trigger `onReachBottom`

---

##### `topWrapperClassName: string = "endless-scroll-top-wrapper"`

class name of the top level wrapper

---

##### `middleWrapperClassName: string = "endless-scroll-middle-wrapper"`

class name of the second level wrapper

---

##### `bottomWrapperClassName: string = "endless-scroll-bottom-wrapper"`

class name of the third level wrapper
