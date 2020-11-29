# Blue Monk

Blue Monk is a framework to build Web APIs upon Node environment.

![](https://github.com/rachitaryal/BlueMonk/blob/master/images/logo/bluemonkwallpaper_blue.gif?raw=true)

> The beautiful design and architecture of the framework help to build the project quickly & more efficiently

> The inbuilt Routers modules are built on top of express and make route navigation much simpler.

> The Permissions modules provide a built-in permissions layer such as 'LoggedInPermission'. Abstract permission layer can easily be extended to build custom permission for the project.

> The inbuilt Controllers modules handle the requests, checks permissions, and dispatch the required request method. ApiControllers can be extended to make your own controllers.

> Avoid redundant patterns. Build with Blue Monk.

#### Links to project Github & Npm

- GitHub: [bluemonk](https://github.com/rachitaryal/BlueMonk), [bluemonk-cli](https://github.com/rachitaryal/blue_monk_cli)
- Npm :[bluemonk](https://www.npmjs.com/package/bluemonk) , [bluemonk-cli](https://www.npmjs.com/package/bluemonk-cli)

> Find [docs](https://github.com/rachitaryal/BlueMonk/tree/master/docs) inside the docs directory.

### Installation

Blue Monk requires [Node.js](https://nodejs.org/) v12+ to run.

#### Installation with bluemonk-cli

```sh
$ npm i -g bluemonk-cli

```

### Quick Start

> After installing the bluemonk-cli.

- Create an empty directory and enter the following commands

```
  # to create a new project
  $ monk project <project_name>
  # also change the <project_name> in package.json file

  $ npm install

  # to create a new app
  $ monk app <app_name>

```

- Create a ".env" file in the root of the project. Enter your credentials for MongoDB Atlas and Token_Secret key as following:

```
 DB_CONNECT=mongodb+srv://<your_username>:<your_password>@...
 TOKEN_SECRET = yoursecretkey

```

```
 # to start the server
 $ npm start
```

> You can look through quick tutorial and basic commands in the [Docs](https://github.com/rachitaryal/BlueMonk/tree/master/docs) directory
