import { DarukServer } from 'daruk';
const setUpApp = async () => {
  const myapp = DarukServer();

  myapp.loadFile('controllers');

  await myapp.binding();
  myapp.listen(3000);
};
setUpApp();
