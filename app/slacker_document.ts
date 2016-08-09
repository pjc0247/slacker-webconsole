export class SlackerDocument {
    public name : string;
    public src : string;
    public id : string;

    constructor(dataSource : any = null){
        if (dataSource != null){
            this.name = dataSource.name;
            this.src = dataSource.src;
            this.id = dataSource.id;
        }
        else {
            this.name = "EMPTY";
            this.src = "EMPTY";
            this.id = "null";
        }
    }
}