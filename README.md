# statcounter

> StatCounter analytics for nodejs + react + typescript

[![NPM](https://img.shields.io/npm/v/statcounter.svg)](https://www.npmjs.com/package/statcounter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save statcounter
```

## Usage

In your top level component, add the `StatCounter` component near the end.

```tsx
import React, { Component } from 'react'

import StatCounter from 'statcounter'

const App = () => {
  render() {
    return (
      <>
        <Component {...pageProps} />
        <StatCounter sc_project={12345678} sc_security="abcd1234" />
      </>
    )
  }
}
```

And you are done!  I haven't checked all possible values for the image_url.  It looks like it tends to be the format:

```
https://c.statcounter.com/${sc_project}/0/${sc_security}/1/
```

If you find your statcounter project is on a different subdomain for the image url for whatever reason, 
add in the `sc_image_url` prop:

```tsx
<StatCounter 
    sc_project={12345678} 
    sc_security="abcd1234" 
    sc_image_url="https://c.statcounter.com/12345678/0/abcd1234/1/">
</StatCounter>
```

## License

MIT © [peteristhegreat](https://github.com/peteristhegreat)
