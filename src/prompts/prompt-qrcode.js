import chalk from "chalk";
const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow.bold("digite o link para gerar o qrcode"),
  },
  {
    name: "type",
    description: chalk.yellow.bold(
      "digite o tipo de imagem (1 - NORMAL ou (2 - TERMINAL)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic('Escolha apenas entre 1 e 2'),
    required: true,
  },
];

export default promptQRCode; 
