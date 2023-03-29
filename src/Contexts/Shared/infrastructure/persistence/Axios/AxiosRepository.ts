import axios, { AxiosError, AxiosInstance, } from 'axios';
import axiosRetry, { IAxiosRetryConfig, exponentialDelay, } from 'axios-retry';

import { HttpClientRepository } from '../Http/HttpClientRespository';
import { HttpParameters } from '../Http/HttpParams';
import { HttpResponse } from '../Http/HttpResponse';

export class AxiosRepository implements HttpClientRepository {

    protected readonly http: AxiosInstance;

    constructor(config?: any, retryConfig?: IAxiosRetryConfig) {
        this.http = axios.create(config);
        axiosRetry(this.http, {
            retries: retryConfig?.retries || 3,
            shouldResetTimeout: retryConfig?.shouldResetTimeout || true,
            retryDelay: retryConfig?.retryDelay || exponentialDelay,
            retryCondition: retryConfig?.retryCondition,
            onRetry: retryConfig?.onRetry,
        });
    }

    async get(httpParameters: HttpParameters): Promise<HttpResponse> {
        const { url, } = httpParameters;
        return this.http.get(url, httpParameters);
    }

    async post(httpParameters: HttpParameters): Promise<HttpResponse> {
        const { url, data, } = httpParameters;
        return this.http.post(url, data, httpParameters);
    }

    async put(httpParameters: HttpParameters): Promise<HttpResponse> {
        const { url, data, } = httpParameters;
        return this.http.put(url, data, httpParameters);
    }

    async patch(httpParameters: HttpParameters): Promise<HttpResponse> {
        const { url, data, } = httpParameters;
        return this.http.patch(url, data, httpParameters);
    }

    async delete(httpParameters: HttpParameters): Promise<HttpResponse> {
        const { url, } = httpParameters;
        return this.http.delete(url, httpParameters);
    }


}
