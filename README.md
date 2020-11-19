# Blue Monk

Blue Monk is a framework to build Web APIs upon Node environment.

- Clone BlueMonk
- Install dependencies
- Create monk.ts file in your root directory
- Start building Apis

> The beautiful design and architecture of
> the framework will help you build your
> project quickly & more efficiently.
> The framework helps in making your project more
> structured and therefore scalable.
> Avoid redundant patterns.
> Build with Blue Monk.

### Installation

Blue Monk requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm i express
$ npm i -D cors dotenv nodemon ts-node typescript mongoose @types/cors @types/express @types/mongoose @types/node @types/body-parser
$ npm i bluemonk
```

Create monk.ts file.

```sh
$ touch monk.ts

#add the follow in the monk.ts file
    import {monk_func} from './Monk/Utilities/@_utilities'
    const args: string[] = process.argv
    monk_func(args)

```

![](Monk/Images/Logo/Monk2.gif)
