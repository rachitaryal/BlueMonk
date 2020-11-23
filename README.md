# Blue Monk

Blue Monk is a framework to build Web APIs upon Node environment.

> The beautiful design and architecture of
> the framework will help you build your
> project quickly & more efficiently.
> The framework helps to build the project in
> a structured approach and therefore it makes the project much more scalable.

> The inbuilt Routers modules are built on top of express and makes routes navigation much simpler.

> The Permissions modules provide built in permissions layer such as 'LoggedInPermission' etc. Abstract permission layer can easily be extended to build custom permission for the project.

> The inbuilt Controllers modules handles the requests, checks permissions( if provided ) and dispatches the required request method. ApiControllers can be extended to make your own controllers and it makes working with controllers much simpler.

> Avoid redundant patterns.
> Build with Blue Monk.

### Installation

Blue Monk requires [Node.js](https://nodejs.org/) v12+ to run.

#### Installation with bluemonk-cli

GitHub: [BlueMonk Command Line Interface](https://github.com/rachitaryal/blue_monk_cli)

```sh
$ npm i -g bluemonk-cli

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
$ npm start

```

```sh
# to utilize the inbuilt Users module
$ monk add users

```

#### Installation without bluemonk-cli

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
import {monk_func} from 'bluemonk'
const args: string[] = process.argv
monk_func(args)

```

Edit package.json file.

```sh

#add the following in the package.json file
"scripts": {
    "dev": "nodemon 'src/<project_name>/Server.ts'",
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
