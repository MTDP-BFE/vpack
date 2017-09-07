import { Selector } from 'testcafe';

export default class IndexPage {
    constructor () {
        {{#if_not bfui}}
        const counterWrapper = Selector('.counter-wrapper');

        this.counter   = counterWrapper.child('.counter');
        this.increment = counterWrapper.child('button').withText('Increment');
        this.desrement = counterWrapper.child('button').withText('Decrement');
        {{/if_not}}
        {{#bfui}}
        const counterWrapper = Selector('.counter');

        this.counter   = counterWrapper.child('.el-input__inner');
        this.increment = counterWrapper.child('el-input-number__increase');
        this.desrement = counterWrapper.child('el-input-number__decrease');
        {{/bfui}}
    }
}
