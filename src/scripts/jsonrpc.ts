// JSON RPC Types
// See specs here:
// https://www.jsonrpc.org/specification

export interface JsonRpcRequest<TRequest> {
    id: string | number | undefined;
    jsonrpc: '2.0';
    method: string;
    params?: TRequest;
}

// Response must contain either result or error (but not both)
export interface JsonRpcResult<TResult> {
    id: string | number | undefined;
    jsonrpc: '2.0';
    result: TResult;
}

export interface JsonRpcError<TError> {
    id: string | number | undefined;
    jsonrpc: '2.0';
    error: {
        code: number;
        message: string;
        data?: TError;
    };
}

export type JsonRpcResponse<TResult, TError> = JsonRpcResult<TResult> | JsonRpcError<TError>;
export type JsonRpcCallback<TResult, TError> = (error: Error, response: JsonRpcResponse<TResult, TError>) => unknown;
export type ProviderRequest<T> = (request: JsonRpcRequest<T>) => Promise<unknown>;
