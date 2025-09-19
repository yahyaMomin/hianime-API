import path from 'path';

const saveHtml = async (html, fileName) => {
  console.log(html);

  try {
    const fullPath = path.join(import.meta.dir + '../../../htmls/' + fileName);

    console.log(fullPath);

    // eslint-disable-next-line no-undef
    await Bun.write(fullPath, html);
  } catch (error) {
    console.log('something went wrong' + error.message);
  }
};

export default saveHtml;
