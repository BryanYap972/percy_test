const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('https://peaceful-lewin-c6cf58.netlify.app/');

  await percySnapshot('homepage');
})
