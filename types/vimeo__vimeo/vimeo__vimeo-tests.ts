import { RequestOptions, Vimeo } from "@vimeo/vimeo";

const errorHandler = (e: string) => {};
const uriHandler = (uri: string) => {};
const progressHandler = (bytesUploaded: number, bytesTotal: number) => {};
const completeHandler = (err: Error | null, result: undefined | object, statusCode?: number, headers?: object) => {};
const completeHandlerShort = (err: Error | null, result: undefined | object) => {};

// $ExpectType Vimeo
const client = new Vimeo("", "", "");

// $ExpectType void
client.upload("", {}, uriHandler, undefined, errorHandler);

// $ExpectType void
client.upload("", {}, uriHandler, progressHandler, errorHandler);

// $ExpectType void
client.upload("", uriHandler, undefined, errorHandler);

// $ExpectType void
client.upload("", uriHandler, progressHandler, errorHandler);

// $ExpectType void
client.replace("", "", {}, uriHandler, undefined, errorHandler);

// $ExpectType void
client.replace("", "", {}, uriHandler, progressHandler, errorHandler);

// $ExpectType void
client.request("", completeHandler);

// $ExpectType void
client.request("", completeHandlerShort);

// $ExpectType void
client.request("", (err: Error | null, result: string | undefined) => {});

// $ExpectType void
client.request("", (err: Error | null, result: { thing: string } | undefined) => {});

const requestOptions: RequestOptions = {
    method: "GET",
    path: "/videos/123",
};

// $ExpectType void
client.request(requestOptions, completeHandler);

const requestOptionsFull: RequestOptions = {
    method: "GET",
    path: "/videos/123",
    headers: {},
    query: {},
};

// $ExpectType void
client.request(requestOptionsFull, (err: Error | null, result: string | undefined) => {});

// $ExpectType Vimeo
const clientWithoutAccessToken = new Vimeo("", "");

// $ExpectType void
clientWithoutAccessToken.setAccessToken("");

// $ExpectType void
clientWithoutAccessToken.accessToken("", "", completeHandler);

// $ExpectType void
clientWithoutAccessToken.buildAuthorizationEndpoint("", "", "");

// $ExpectType void
clientWithoutAccessToken.buildAuthorizationEndpoint("", [""], "");

// Promise API

// $ExpectType Promise<string>
client.upload("", {});

// $ExpectType Promise<string>
client.replace("", "", {});

// $ExpectType Promise<CompleteCallbackObject>
client.request("");

// $ExpectType Promise<CompleteCallbackObject>
client.accessToken("", "");

// $ExpectType Promise<CompleteCallbackObject>
client.generateClientCredentials("");

// $ExpectType Promise<CompleteCallbackObject>
client.generateClientCredentials([""]);
