import { isFile } from "./isFile";

type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
    path: "some/path/to/file.csv",
    type: "file",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
    connectionUrl: "some-connection-url",
    type: "db",
};

export type Source = FileSource | DBSource;

function loadData(source: Source) {
    // Open + read file OR reach out to database server
    // if ("path" in source) {
    // return;
    // }
    if (isFile(source)) {
        source.path;
    }
    return;
}
// class User {
//     constructor(public name: string) {}
//     join() {
//         //
//     }
// }
// class Admin {
//     constructor(permission: string[]) {}
//     scan() {
//         // ...
//     }
// }
// const user = new User("Max");
// const admin = new Admin(["ban", "restore"]);
//
// type Entity = User | Admin;
//
// function init(entity: Entity) {
//     if (entity instanceof User) {
//         entity.join();
//         return;
//     }
//     entity.scan();
// }
