import { HttpParameters } from "./HttpParams";
import { HttpResponse } from "./HttpResponse";

export interface HttpClientRepository {

    get(httpParameters: HttpParameters): Promise<HttpResponse>

    post(httpParameters: HttpParameters): Promise<HttpResponse>

    put(httpParameters: HttpParameters): Promise<HttpResponse>

    patch(httpParameters: HttpParameters): Promise<HttpResponse>

    delete(httpParameters: HttpParameters): Promise<HttpResponse>
}
