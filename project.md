## API Restful com Node.js, Express, Typescript, TypeORM, Postgres, Redis, Docker, ...

### Estrutura do Projeto

Estrutura de pastas:

`config` - configurações de bibliotecas externas, como por exemplo, autenticação, upload, email, etc.

`domain` - abrangem as áreas de conhecimento da aplicação, diretamente relacionados com as regras de negócios. A princípio criaremos os seguintes módulos na aplicação: customers, products, orders e users.

`shared` - módulos de uso geral compartilhados com mais de um módulo da aplicação, como por exemplo, o arquivo server.ts, o arquivo principal de rotas, conexão com banco de dados, etc.

`services` - estarão dentro de cada módulo da aplicação e serão responsáveis por todas as regras que a aplicação precisa atender, como por exemplo:

Criando a estrutura de pastas:

```shell
mkdir -p src/config
mkdir -p src/domain
mkdir -p src/shared/http
mv src/server.ts src/shared/http/server.ts
```

Ajustar o arquivo `package.json`:

```json
{
	"scripts": {
		"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/shared/http/server.ts"
	}
}
```

# Iniciar a aplicação Node.js com Typescript

yarn init -y

# Instalçai do Typescript

yarn add typescript ts-node-dev @types/node tsconfig-paths -D

# Criar o arquivo "tsconfig.json" que conterá as configurações do Typescript

npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

# Arquivo .gitignore

.idea/
.vscode/
node_modules/
build/
temp/
.env
coverage
ormconfig.json
dist

uploads/\*
!uploads/.gitkeep

# Criar a pasta src e o primeiro arquivo:

mkdir src

touch src/server.ts

# Compilando o Typescript

npx tsc

# Executar o servidor em desenvolvimento

packege.json

# add

"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
"lint": "eslint . --ext .ts",
"lint-fix": "eslint . --ext .ts --fix"
}

yarn dev

# criando padrão com ESlint

yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Na raiz do seu projeto crie um arquivo .eslintrc com uma configuração inicial do ESLint:

{
"root": true,
"parser": "@typescript-eslint/parser",
"plugins": [
"@typescript-eslint",
"prettier"
],
"extends": [
"eslint:recommended",
"plugin:@typescript-eslint/eslint-recommended",
"plugin:@typescript-eslint/recommended",
"prettier/@typescript-eslint",
"plugin:prettier/recommended"
],
"rules": {
"no-console": "warn",
"prettier/prettier": "error"
}
}

# Criar o arquivo .eslintignore:

node_modules
dist
build
/\*.js

# Adicionar um script no arquivo package.json para executar o lint:

"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts",
"lint": "eslint . --ext .ts"
}

# install prettier

yarn add prettier -D

# Criar o arquivo .prettierrc com uma configuração básica do Prettier:

{
"semi": true,
"trailingComma": "all",
"singleQuote": true,
"printWidth": 80,
"arrowParens": "avoid"
}

# Configurando o Prettier para trabalhar com ESLint

yarn add eslint-config-prettier@6.15.0 eslint-plugin-prettier@3.2.0 -D

# Verifique se a sua configuração do VS Code possui os parâmetro:

"editor.formatOnPaste": true,
"editor.formatOnType": true,
"formattingToggle.affects": ["formatOnSave"]

# Configurando as importações

# Podemos usar um recurso que facilitará o processo de importação de arquivos em nosso projeto.

# Iniciamos configurando o objeto paths do tsconfig.json, que permite criar uma base para cada path a ser buscado no projeto, funcionando de forma similar a um atalho:

"paths": {
"@config/_": ["src/config/_"],
"@modules/_": ["src/modules/_"],
"@shared/_": ["src/shared/_"]
}

# add express

yarn add express cors express-async-errors

# add express cors

yarn add -D @types/express @types/cors

# add typeORM + postgres

yarn add typeorm reflect-metadata pg

# commit file ignore husky

git commit -m "asdasd " --no-verify

# run hasky check

yarn run eslint-check

### Configurando as importações

Podemos usar um recurso que facilitará o processo de importação de arquivos em nosso projeto.

Iniciamos configurando o objeto `paths` do `tsconfig.json`, que permite criar uma base para cada `path` a ser buscado no projeto, funcionando de forma similar a um atalho:

```json
"paths": {
  "@config/*": ["src/config/*"],
  "@domain/*": ["src/domain/*"],
  "@shared/*": ["src/shared/*"]
}
```

> Instalar a biblioteca que irá indicar ao nosso script do `ts-node-dev`, como interpretar os atalhos que configuramos iniciando com o caracter `@`.
> O nome dessa biblioteca é `tsconfig-paths`, e para instalar execute o seguinte comando no terminal (na pasta do projeto):

```shell
yarn add -D tsconfig-paths
```

Depois de instalar o `tsconfig-paths`, ajustar o script `dev` no arquivo `package.json`, incluindo a opção `-r tsconfig-paths/register`. Deverá ficar assim:

```json
"dev": "ts-node-dev -r tsconfig-paths/register --inspect --transpile-only --ignore-watch node_modules src/shared/http/server.ts"
```

> Observação: o comando acima deve ser incluído como uma linha única do script `dev`.

Agora, para importar qualquer arquivo no projeto, inicie o caminho com um dos `paths` configurados, usando o `CTRL+SPACE` para usar o autocomplete.
