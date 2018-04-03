# Stencil doesn't work with `npm link`

Steps to reproduce:

1. `cd my-module`
2. `npm link`
3. `cd ..`
4. `cd stencil-app`
5. `npm install`
6. `npm link @my-company/my-module`
7. `npm run dev`

# Error

![https://github.com/bitflower/stencil-npm-link/raw/master/error.png](https://github.com/bitflower/stencil-npm-link/raw/master/error.png)
