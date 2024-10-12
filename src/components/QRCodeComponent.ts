// components/QRCodeComponent.ts
import QRCode from 'qrcode';

// A function to generate a QR code SVG and return it as an HTMLElement
const generateQRCode = async(url: string)=>{
    try{
        const svgString = await QRCode.toString(url, {type:"svg"})
        const qrCodeContainer = document.getElementById('qr-container')
        if(qrCodeContainer){
            qrCodeContainer.innerHTML = svgString
        }
    }catch(error){
        console.error("Error generating QR code: ", error)
    }
}

export default generateQRCode