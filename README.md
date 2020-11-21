# Blue Monk

Blue Monk is a framework to build Web APIs upon Node environment.

> The beautiful design and architecture of
> the framework will help you build your
> project quickly & more efficiently.
> The framework helps in making your project more
> structured and therefore scalable.
> Avoid redundant patterns.
> Build with Blue Monk.

### Installation

Blue Monk requires [Node.js](https://nodejs.org/) v12+ to run.

#### Installation with bluemonk-cli

Clone [bluemonk-cli](https://github.com/rachitaryal/blue_monk_cli)

```sh
$ npm i -g monk-cli

#to start the project
$ monk project <project_name>

#to install all the dependencies
$ npm install

#to create app
$ monk app <app_name>

```

- replace "<project_name>" in package.json file with the project name

```sh
# start the server
$ npm run dev

```

#### Installation without monk-cli

Install the dependencies and devDependencies and start the server.

```sh
$ npm i express
$ npm i -D cors dotenv nodemon ts-node typescript mongoose @types/cors @types/express @types/mongoose @types/node @types/body-parser
$ npm i bluemonk
```

Create monk.ts file.

```sh
$ touch monk.ts

#add the following in the monk.ts file
import {monk_func} from 'monk/lib/@utilities'
const args: string[] = process.argv
monk_func(args)

```

Edit package.json file.

```sh

#add the following in the package.json file
"scripts": {
    "start": "node ./src/<Root>/Server.js",
    "dev": "nodemon 'src/<Root>/Server.ts'",
    "build": "tsc -p ."
  }

```

Create tsconfig.json file.

```sh

#add the following in the tsconfig.json file
"compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./",
    "strict":true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
}

```

![](images/logo/bluemonkwallpaper_white.gif)
