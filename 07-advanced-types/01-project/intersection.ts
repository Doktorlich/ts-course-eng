type FileData = {
    path: string;
    content: string;
};

type Status = {
    isOpen: boolean;
    errorMessage?: string;
};
type DatabaseData = {
    connectionUrl: string;
    credentials: string;
};
type AcceessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

interface IFileData {
    path: string;
    content: string;
}

interface IStatus {
    isOpen: boolean;
    errorMessage?: string;
}
interface IDatabaseData {
    connectionUrl: string;
    credentials: string;
}
interface IAcceessedFileData extends IFileData, IStatus {}
interface IAccessedDatabaseData extends IDatabaseData, IStatus {}
