import { expect } from '@playwright/test';
import {DSL} from '../utils/dsl'
export const url = 'https://www.noesis.pt/';
export class Home{
    constructor(page){
        this.xpath = {
            header : '#header',
            titulo : "h2",
            contatos: "(//a[text()='Contactos'])[1]"            
        };
        this.role = {
            aceitarTodos : {role:'button', value: { name: 'Aceitar todos' }},
            ondeEstamos: { role: 'heading',value: { name: 'Onde estamos?' }}
        };
        this.page=page;
        this.dsl = new DSL(page);

    }
    async navegar(){
        await this.page.goto(url);
    }

    async aceitarCookies(){   
      await this.dsl.clickByRole(this.role.aceitarTodos);
    }

    async acessarContatos(){
        await this.dsl.clickByXpath(this.xpath.contatos);
    }

    async acessarMenuOndeEstamos(){
        await this.dsl.clickByRole(this.role.ondeEstamos);
        
    }

    async validarPaginaOndeEstamos(){
        await this.dsl.validarTextoNoObjeto(this.xpath.titulo, 'Onde estamos?');
    }
}