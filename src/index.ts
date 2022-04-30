import { DarukServer } from 'daruk';
const setUpApp = async () => {
  const myapp = DarukServer();

  myapp.loadFile('controllers');
  // myapp.loadFile('services');
  // myapp.loadFile('repositories');

  await myapp.binding();
  myapp.listen(3000);
};
setUpApp();
