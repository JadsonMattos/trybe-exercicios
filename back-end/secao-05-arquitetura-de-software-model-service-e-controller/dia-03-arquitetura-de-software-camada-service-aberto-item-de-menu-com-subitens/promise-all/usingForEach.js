const fs = require('fs').promises;

const files = ['file1.txt', 'file2.txt', 'file3.txt'];

async function main() {
  try {
    await files.forEach(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf-8');
      console.log(`File ${index + 1}: ${contentFile}`);
    });
    console.log(`That's all folks!`);
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
};

main();

