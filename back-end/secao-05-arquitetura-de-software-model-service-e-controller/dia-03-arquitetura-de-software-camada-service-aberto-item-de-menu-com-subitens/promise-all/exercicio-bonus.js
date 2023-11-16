const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilesPromises = strings
    .map((string, index) => fs.writeFile('./fileBonus${index + 1}.txt', string));
    await Promise.all(createFilesPromises);

  const fileNames = [
    'fileBonus1.txt',
    'fileBonus2.txt',
    'fileBonus3.txt',
    'fileBonus4.txt',
    'fileBonus5.txt',
  ];

  const readFilesPromises = fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'));
  const fileContents = await Promise.all(readFilesPromises);

  const newFileContent = fileContents.join(' ');
  await fs.writeFile('./fileBonusAll.txt', newFileContent);
};

arrayToFile();