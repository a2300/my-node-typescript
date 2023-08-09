https://www.testim.io/blog/typescript-unit-testing-101/

Installing the TypeScript Compiler globally
```bash
npm install -g typescript
```

Verify TypeSCript Compiler installation
```bash
tsc -v
```

Creating the Basic Folder Structure for the Project
```bash
mkdir my_node_project
cd my_node_project
```

In this folder, let’s create a src folder for the source code and test
```bash
mkdir src
```

On the root of the my_node_project folder, run:
```bash
npm init -y
```

Adding TypeScript to the Project as developer dependancy
```bash
npm install typescript --save-dev
```

Installing the Jest
```bash
npm install jest --save-dev
```

Installing ts-jest package to bridge the path between Typescipt and Jest
```bash
npm install ts-jest --save-dev
```

Installing type definitions for Jest
```bash
npm install @types/jest --save-dev
```

create file jest.config.js with following content
```json
module.exports = {
  transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/src/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

Documentation:
https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript
https://www.testim.io/blog/typescript-unit-testing-101/
