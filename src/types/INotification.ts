export interface INotification {
    partitionKey: string | undefined,
    rowKey: string | undefined,
    eTag: string | undefined,
    timestamp: string | undefined,
    sponsor: string,
    reads: number | undefined,
    message: string,
    title: string
}
