import { test} from '@playwright/test';
import {url} from '../pages/home';
import {Home} from '../pages/home';

test('Validar carregamento da pagina Onde Estamos', async ({ page }) => {
    const home = new Home(page);
  await home.navegar();
  await home.aceitarCookies();
  await home.acessarContatos();
  await home.acessarMenuOndeEstamos();
  await home.validarPaginaOndeEstamos();

});