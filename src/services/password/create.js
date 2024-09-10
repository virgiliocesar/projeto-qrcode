import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    const password = await handle()
    console.log(chalk.green(`Sua senha gerada foi:\n ${password}`));
    
}

export default createPassword