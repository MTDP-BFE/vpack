import { Selector } from 'testcafe';

export default class IndexPage {
    constructor () {
        const counterWrapper = Selector('.counter');

        this.counter   = counterWrapper.child('.el-input__inner');
        this.increment = counterWrapper.child('el-input-number__increase');
        this.desrement = counterWrapper.child('el-input-number__decrease');
    }
}
