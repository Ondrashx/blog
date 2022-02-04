import { FinCalcService } from "../fin-calc.service"

export class AbstractFinCalc {

    public prefix: string;
    public enabledSetProps: string[];

    constructor(public finCalcService: FinCalcService) {

    }

    public produceUrlParamsFromProps(): string {
        return this.enabledSetProps.reduce((acc, p) => acc += `${this.prefix + p}=${this[p]}&`, '')
    }

    protected setParamsFromUrl() {
        this.enabledSetProps.forEach(name => {
            this.finCalcService.setParamFromUrl(this, this.prefix, name);
        });
    }


}