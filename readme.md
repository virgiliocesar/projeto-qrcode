<h1>QR Code and Password Generator</h1>

<p>
  Este projeto é uma aplicação CLI (Command Line Interface) que permite ao usuário gerar um QR Code a partir de um link ou criar uma senha segura. A aplicação utiliza bibliotecas como <code>prompt</code> para interação com o usuário, <code>chalk</code> para estilização das mensagens no terminal, e <code>qrcode-terminal</code> para gerar QR Codes diretamente no terminal.
</p>

<h2>Funcionalidades</h2>
<ul>
  <li><strong>Gerador de QR Code:</strong> Gera um QR Code a partir de um link fornecido pelo usuário, com a opção de ser exibido em tamanho normal ou reduzido no terminal.</li>
  <li><strong>Gerador de Senhas:</strong> Gera uma senha aleatória baseada em caracteres permitidos com comprimento configurável através de variáveis de ambiente.</li>
</ul>

<h2>Tecnologias Utilizadas</h2>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://www.npmjs.com/package/prompt">Prompt</a></li>
  <li><a href="https://www.npmjs.com/package/chalk">Chalk</a></li>
  <li><a href="https://www.npmjs.com/package/qrcode-terminal">QRCode-Terminal</a></li>
  <li><a href="https://www.npmjs.com/package/dotenv">Dotenv</a></li>
</ul>

<h2>Instalação</h2>
<ol>
  <li>Clone o repositório:
    <pre><code>git clone https://github.com/seu-usuario/projeto-qrcode-password.git
cd projeto-qrcode-password</code></pre>
  </li>
  <li>Instale as dependências:
    <pre><code>npm install</code></pre>
  </li>
  <li>Configure as variáveis de ambiente criando um arquivo <code>.env</code>:
    <pre><code>PASSWORD_LENGTH=12</code></pre>
  </li>
</ol>

<h2>Como Usar</h2>

<h3>Gerar QR Code</h3>
<ol>
  <li>Execute o comando para iniciar a aplicação:
    <pre><code>node index.js</code></pre>
  </li>
  <li>Escolha a opção <strong>1 - QRCODE</strong> no prompt:
    <pre><code>escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD)): 1</code></pre>
  </li>
  <li>Insira o link que deseja gerar o QR Code:
    <pre><code>digite o link para gerar o qrcode: https://example.com</code></pre>
  </li>
  <li>Escolha o tipo de QR Code:
    <pre><code>digite o tipo de imagem (1 - NORMAL ou (2 - TERMINAL)): 2</code></pre>
  </li>
  <li>O QR Code será gerado diretamente no terminal:
    <pre><code>QR Code gerado com sucesso:
████████████████████████████████
█ ▄▄▄▄▄ █▀▀▀▀▀▀▀▀▀▀▀█ ▄▄▄▄▄ █
█ █   █ █ █▀▀▀▀▀▀▀█ █ █   █ █
█ █▄▄▄█ █ █ █▀▀▀█ █ █ █▄▄▄█ █
...
</code></pre>
  </li>
</ol>

<h3>Gerar Senha Aleatória</h3>
<ol>
  <li>Execute a aplicação:
    <pre><code>node index.js</code></pre>
  </li>
  <li>Escolha a opção <strong>2 - PASSWORD</strong> no prompt:
    <pre><code>escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD)): 2</code></pre>
  </li>
  <li>A senha será gerada e exibida no terminal:
    <pre><code>Sua senha gerada foi: aB3dEfgH1jkL</code></pre>
  </li>
</ol>

<h2>Estrutura do Projeto</h2>
<pre><code>
├── src
│   ├── prompts
│   │   ├── prompt-main.js        # Prompt principal para escolher a ferramenta
│   │   ├── prompt-qrcode.js      # Prompt para gerar QR Code
│   ├── services
│   │   ├── qr-code
│   │   │   ├── create.js         # Função para criar QR Code
│   │   │   ├── handle.js         # Função de manipulação do QR Code
│   │   └── password
│   │       ├── create.js         # Função para criar senha
│   │       ├── handle.js         # Lógica de geração de senha
│   ├── utils
│   │   ├── permitted-characters.js # Função de caracteres permitidos para senha
│   ├── index.js                  # Arquivo principal da aplicação
├── .env                          # Arquivo de variáveis de ambiente
├── package.json                  # Dependências e configurações do projeto
</code></pre>

<h2>Variáveis de Ambiente</h2>
<ul>
  <li><code>UPPERCASE_LETTERS</code>: Se for true, incluirá letras maiúsculas (A-Z) na geração da senha.</li>
  <li><code>LOWERCASE_LETTERS</code>: Se for true, incluirá letras maiúsculas (A-Z) na geração da senha.</li>
  <li><code>NUMBERS</code>: Se for true, incluirá números (0-9) na senha.</li>
  <li><code>SPECIAL_CHARACTERS</code>: Se for true, incluirá caracteres especiais (como @, #, $, etc.) na senha.</li>
  <li><code>PASSWORD_LENGTH</code>: Define o comprimento da senha gerada.</li>
</ul>

<h2>Dependências</h2>
<ul>
  <li><code>prompt</code>: Permite a interação com o usuário através do terminal.</li>
  <li><code>chalk</code>: Estiliza e colore as saídas no terminal.</li>
  <li><code>qrcode-terminal</code>: Gera QR Codes diretamente no terminal.</li>
</ul>

<h2>Licença</h2>
<p>
  Este projeto está licenciado sob a <strong>MIT License</strong>. Sinta-se livre para usá-lo e modificá-lo.
</p>
