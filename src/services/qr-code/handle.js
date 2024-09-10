import chalk from "chalk"
import  qr from 'qrcode-terminal';

async function handle(err, result) {
    if (err) {
        console.log("error on application: ", err)
        return
    }
    const isSmall = result.type == 2
    qr.generate(result.link, { small: isSmall }, (qrCode) =>{
        console.log(chalk.green("QR Code gerado com sucesso:\n"))
        console.log(qrCode)
    })
}
export default handle