interface IServer {
    startServer(): void
    stopServer(): void
}

class Server implements IServer {

    public port: number;
    public address: string;

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    startServer() {
        console.log(`Starting server at : ${this.address}:${this.port}`)
    }

    stopServer(): void { }


}

// class DbServer extends Server {
//     constructor(port: number, address: string) {
//         super(port, address)
//         console.log('calling db server constructor')
//     }
// }

const someServer: IServer = new Server(8080, 'localhost');

someServer.startServer()
const somePort = (someServer as any).port   // someServer.port is inaccessible.
console.log(somePort);

