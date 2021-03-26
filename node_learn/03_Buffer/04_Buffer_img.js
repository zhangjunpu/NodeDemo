const fs = require('fs');
const sharp = require('sharp');

// sharp('../../res/img/timg.jpg')
//     .rotate(90)
//     .toFile('./car.jpg', (err, info) => {
//         console.log(info);
//     });


async function copyImage(fromPath, toPath) {
    const data = await sharp(fromPath)
        .rotate(90)
        .resize(300, 200)
        .toBuffer()
    await fs.promises.writeFile(toPath, data);
}

copyImage("../res/img/timg.jpg", './boo.jpg');