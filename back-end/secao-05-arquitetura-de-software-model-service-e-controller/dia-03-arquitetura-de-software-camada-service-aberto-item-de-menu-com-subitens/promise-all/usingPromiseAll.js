const fs = require('fs').promises;

const files = ['file1.txt', 'file2.txt', 'file3.txt'];

async function main() {
  try {
    const promises = files.map(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf-8');
      console.log(`File ${index + 1}: ${contentFile}`);
    });
    await Promise.all(promises);
    console.log(`That's all folks!`);
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

main();

async function getFilesSizeSum() {
  try {
    let filesSizeSum = 0;
    await Promise.all(files.map(async (file) => {
      const contentFile = await fs.readFile(file, 'utf-8');
      filesSizeSum += contentFile.bytelength;
    }));
    const result = `Lidos 3 arquivos totalizando ${filesSizeSum} bytes`;
    return console.log(result);
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

getFilesSizeSum();