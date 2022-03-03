export interface IServer {

    startServer(): void
    stopServer(): void
}

class Server implements IServer {

    public port: number;
    public address: string;
    public date: string = '';

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
        //    this.date = ''
    }

    async startServer() {
        const data = await this.getData(123);
        console.log(`Starting server at: ${this.address}: ${this.port}`)
        return function () {
            //    this.date = 5;
        }
    }

    stopServer(): void { }

    async getData(id: number): Promise<string> {
        return 'some SPecial Data'
    }

}

const someServer: IServer = new Server(8080, 'localhost');
someServer.startServer();