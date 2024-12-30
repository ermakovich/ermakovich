---
title: React HTML mismatch when using redux-persist and SSR
date: 2024-12-30
tags:
  - dev
  - react
lang: en
cover_image: ./react-html-mismatch.jpg
preview: ./react-html-mismatch.jpg
---

If you use [redux-persist](https://github.com/rt2zz/redux-persist) library in your project, and you have server rendering (SSR or SSG), you may face issues with HTML generated on server not matching initial HTML, generated during first render on client during React hydration. This as a result is causing two React errors. The first error is `Minified React error #418`.

> Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client.
> ...

And the second error is `Minified React error #423`.

> There was an error while hydrating but React was able to recover by instead client rendering the entire root.

In addition to the errors in the console visually it may appear like the entire screen is flashing after initial page load.

The reason for this is that if we use some sort of persistance, and we have some data in our storage, this data will be used during first render and will cause HTML mismatch.

To fix this annoying issue we need to review the way how we setup redux provider and persist store, so that data is loaded from storage not synchronously during first render, but rather asynchronously after it.

In our case the solution was to move [`persistStore`](https://github.com/rt2zz/redux-persist/blob/master/docs/api.md#persiststorestore-config-callback) invocation from the file root to component's `useEffect` call. Notice, that we pass empty dependencies array `[]` to the hook, so it will be called only once:

```js:title=App.jsx
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import { store } from "../store/store";

const App = () => {
  useEffect(() => {
    persistStore(store);
  }, []);

  return <Provider store={store}>...</Provider>;
};
```

So, this way local values (if there are any) will be loaded from persistence storage on second render cycle instead of initial render, keeping original HTML rendered on server to match the HTML after initial render.
