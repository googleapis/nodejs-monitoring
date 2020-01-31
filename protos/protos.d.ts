// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace monitoring. */
    namespace monitoring {

        /** Namespace v3. */
        namespace v3 {

            /** Represents an AlertPolicyService */
            class AlertPolicyService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new AlertPolicyService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new AlertPolicyService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AlertPolicyService;

                /**
                 * Calls ListAlertPolicies.
                 * @param request ListAlertPoliciesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListAlertPoliciesResponse
                 */
                public listAlertPolicies(request: google.monitoring.v3.IListAlertPoliciesRequest, callback: google.monitoring.v3.AlertPolicyService.ListAlertPoliciesCallback): void;

                /**
                 * Calls ListAlertPolicies.
                 * @param request ListAlertPoliciesRequest message or plain object
                 * @returns Promise
                 */
                public listAlertPolicies(request: google.monitoring.v3.IListAlertPoliciesRequest): Promise<google.monitoring.v3.ListAlertPoliciesResponse>;

                /**
                 * Calls GetAlertPolicy.
                 * @param request GetAlertPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AlertPolicy
                 */
                public getAlertPolicy(request: google.monitoring.v3.IGetAlertPolicyRequest, callback: google.monitoring.v3.AlertPolicyService.GetAlertPolicyCallback): void;

                /**
                 * Calls GetAlertPolicy.
                 * @param request GetAlertPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getAlertPolicy(request: google.monitoring.v3.IGetAlertPolicyRequest): Promise<google.monitoring.v3.AlertPolicy>;

                /**
                 * Calls CreateAlertPolicy.
                 * @param request CreateAlertPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AlertPolicy
                 */
                public createAlertPolicy(request: google.monitoring.v3.ICreateAlertPolicyRequest, callback: google.monitoring.v3.AlertPolicyService.CreateAlertPolicyCallback): void;

                /**
                 * Calls CreateAlertPolicy.
                 * @param request CreateAlertPolicyRequest message or plain object
                 * @returns Promise
                 */
                public createAlertPolicy(request: google.monitoring.v3.ICreateAlertPolicyRequest): Promise<google.monitoring.v3.AlertPolicy>;

                /**
                 * Calls DeleteAlertPolicy.
                 * @param request DeleteAlertPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteAlertPolicy(request: google.monitoring.v3.IDeleteAlertPolicyRequest, callback: google.monitoring.v3.AlertPolicyService.DeleteAlertPolicyCallback): void;

                /**
                 * Calls DeleteAlertPolicy.
                 * @param request DeleteAlertPolicyRequest message or plain object
                 * @returns Promise
                 */
                public deleteAlertPolicy(request: google.monitoring.v3.IDeleteAlertPolicyRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls UpdateAlertPolicy.
                 * @param request UpdateAlertPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AlertPolicy
                 */
                public updateAlertPolicy(request: google.monitoring.v3.IUpdateAlertPolicyRequest, callback: google.monitoring.v3.AlertPolicyService.UpdateAlertPolicyCallback): void;

                /**
                 * Calls UpdateAlertPolicy.
                 * @param request UpdateAlertPolicyRequest message or plain object
                 * @returns Promise
                 */
                public updateAlertPolicy(request: google.monitoring.v3.IUpdateAlertPolicyRequest): Promise<google.monitoring.v3.AlertPolicy>;
            }

            namespace AlertPolicyService {

                /**
                 * Callback as used by {@link google.monitoring.v3.AlertPolicyService#listAlertPolicies}.
                 * @param error Error, if any
                 * @param [response] ListAlertPoliciesResponse
                 */
                type ListAlertPoliciesCallback = (error: (Error|null), response?: google.monitoring.v3.ListAlertPoliciesResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.AlertPolicyService#getAlertPolicy}.
                 * @param error Error, if any
                 * @param [response] AlertPolicy
                 */
                type GetAlertPolicyCallback = (error: (Error|null), response?: google.monitoring.v3.AlertPolicy) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.AlertPolicyService#createAlertPolicy}.
                 * @param error Error, if any
                 * @param [response] AlertPolicy
                 */
                type CreateAlertPolicyCallback = (error: (Error|null), response?: google.monitoring.v3.AlertPolicy) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.AlertPolicyService#deleteAlertPolicy}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteAlertPolicyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.AlertPolicyService#updateAlertPolicy}.
                 * @param error Error, if any
                 * @param [response] AlertPolicy
                 */
                type UpdateAlertPolicyCallback = (error: (Error|null), response?: google.monitoring.v3.AlertPolicy) => void;
            }

            /** Properties of a CreateAlertPolicyRequest. */
            interface ICreateAlertPolicyRequest {

                /** CreateAlertPolicyRequest name */
                name?: (string|null);

                /** CreateAlertPolicyRequest alertPolicy */
                alertPolicy?: (google.monitoring.v3.IAlertPolicy|null);
            }

            /** Represents a CreateAlertPolicyRequest. */
            class CreateAlertPolicyRequest implements ICreateAlertPolicyRequest {

                /**
                 * Constructs a new CreateAlertPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateAlertPolicyRequest);

                /** CreateAlertPolicyRequest name. */
                public name: string;

                /** CreateAlertPolicyRequest alertPolicy. */
                public alertPolicy?: (google.monitoring.v3.IAlertPolicy|null);

                /**
                 * Creates a new CreateAlertPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAlertPolicyRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateAlertPolicyRequest): google.monitoring.v3.CreateAlertPolicyRequest;

                /**
                 * Encodes the specified CreateAlertPolicyRequest message. Does not implicitly {@link google.monitoring.v3.CreateAlertPolicyRequest.verify|verify} messages.
                 * @param message CreateAlertPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateAlertPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAlertPolicyRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateAlertPolicyRequest.verify|verify} messages.
                 * @param message CreateAlertPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateAlertPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAlertPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAlertPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateAlertPolicyRequest;

                /**
                 * Decodes a CreateAlertPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAlertPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateAlertPolicyRequest;

                /**
                 * Verifies a CreateAlertPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAlertPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAlertPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateAlertPolicyRequest;

                /**
                 * Creates a plain object from a CreateAlertPolicyRequest message. Also converts values to other types if specified.
                 * @param message CreateAlertPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateAlertPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAlertPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetAlertPolicyRequest. */
            interface IGetAlertPolicyRequest {

                /** GetAlertPolicyRequest name */
                name?: (string|null);
            }

            /** Represents a GetAlertPolicyRequest. */
            class GetAlertPolicyRequest implements IGetAlertPolicyRequest {

                /**
                 * Constructs a new GetAlertPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetAlertPolicyRequest);

                /** GetAlertPolicyRequest name. */
                public name: string;

                /**
                 * Creates a new GetAlertPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAlertPolicyRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetAlertPolicyRequest): google.monitoring.v3.GetAlertPolicyRequest;

                /**
                 * Encodes the specified GetAlertPolicyRequest message. Does not implicitly {@link google.monitoring.v3.GetAlertPolicyRequest.verify|verify} messages.
                 * @param message GetAlertPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetAlertPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAlertPolicyRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetAlertPolicyRequest.verify|verify} messages.
                 * @param message GetAlertPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetAlertPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAlertPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAlertPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetAlertPolicyRequest;

                /**
                 * Decodes a GetAlertPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAlertPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetAlertPolicyRequest;

                /**
                 * Verifies a GetAlertPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAlertPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAlertPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetAlertPolicyRequest;

                /**
                 * Creates a plain object from a GetAlertPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetAlertPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetAlertPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAlertPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListAlertPoliciesRequest. */
            interface IListAlertPoliciesRequest {

                /** ListAlertPoliciesRequest name */
                name?: (string|null);

                /** ListAlertPoliciesRequest filter */
                filter?: (string|null);

                /** ListAlertPoliciesRequest orderBy */
                orderBy?: (string|null);

                /** ListAlertPoliciesRequest pageSize */
                pageSize?: (number|null);

                /** ListAlertPoliciesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListAlertPoliciesRequest. */
            class ListAlertPoliciesRequest implements IListAlertPoliciesRequest {

                /**
                 * Constructs a new ListAlertPoliciesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListAlertPoliciesRequest);

                /** ListAlertPoliciesRequest name. */
                public name: string;

                /** ListAlertPoliciesRequest filter. */
                public filter: string;

                /** ListAlertPoliciesRequest orderBy. */
                public orderBy: string;

                /** ListAlertPoliciesRequest pageSize. */
                public pageSize: number;

                /** ListAlertPoliciesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListAlertPoliciesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAlertPoliciesRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListAlertPoliciesRequest): google.monitoring.v3.ListAlertPoliciesRequest;

                /**
                 * Encodes the specified ListAlertPoliciesRequest message. Does not implicitly {@link google.monitoring.v3.ListAlertPoliciesRequest.verify|verify} messages.
                 * @param message ListAlertPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListAlertPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAlertPoliciesRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListAlertPoliciesRequest.verify|verify} messages.
                 * @param message ListAlertPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListAlertPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAlertPoliciesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAlertPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListAlertPoliciesRequest;

                /**
                 * Decodes a ListAlertPoliciesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAlertPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListAlertPoliciesRequest;

                /**
                 * Verifies a ListAlertPoliciesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAlertPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAlertPoliciesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListAlertPoliciesRequest;

                /**
                 * Creates a plain object from a ListAlertPoliciesRequest message. Also converts values to other types if specified.
                 * @param message ListAlertPoliciesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListAlertPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAlertPoliciesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListAlertPoliciesResponse. */
            interface IListAlertPoliciesResponse {

                /** ListAlertPoliciesResponse alertPolicies */
                alertPolicies?: (google.monitoring.v3.IAlertPolicy[]|null);

                /** ListAlertPoliciesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListAlertPoliciesResponse. */
            class ListAlertPoliciesResponse implements IListAlertPoliciesResponse {

                /**
                 * Constructs a new ListAlertPoliciesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListAlertPoliciesResponse);

                /** ListAlertPoliciesResponse alertPolicies. */
                public alertPolicies: google.monitoring.v3.IAlertPolicy[];

                /** ListAlertPoliciesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListAlertPoliciesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAlertPoliciesResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListAlertPoliciesResponse): google.monitoring.v3.ListAlertPoliciesResponse;

                /**
                 * Encodes the specified ListAlertPoliciesResponse message. Does not implicitly {@link google.monitoring.v3.ListAlertPoliciesResponse.verify|verify} messages.
                 * @param message ListAlertPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListAlertPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAlertPoliciesResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListAlertPoliciesResponse.verify|verify} messages.
                 * @param message ListAlertPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListAlertPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAlertPoliciesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAlertPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListAlertPoliciesResponse;

                /**
                 * Decodes a ListAlertPoliciesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAlertPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListAlertPoliciesResponse;

                /**
                 * Verifies a ListAlertPoliciesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAlertPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAlertPoliciesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListAlertPoliciesResponse;

                /**
                 * Creates a plain object from a ListAlertPoliciesResponse message. Also converts values to other types if specified.
                 * @param message ListAlertPoliciesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListAlertPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAlertPoliciesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateAlertPolicyRequest. */
            interface IUpdateAlertPolicyRequest {

                /** UpdateAlertPolicyRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateAlertPolicyRequest alertPolicy */
                alertPolicy?: (google.monitoring.v3.IAlertPolicy|null);
            }

            /** Represents an UpdateAlertPolicyRequest. */
            class UpdateAlertPolicyRequest implements IUpdateAlertPolicyRequest {

                /**
                 * Constructs a new UpdateAlertPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IUpdateAlertPolicyRequest);

                /** UpdateAlertPolicyRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateAlertPolicyRequest alertPolicy. */
                public alertPolicy?: (google.monitoring.v3.IAlertPolicy|null);

                /**
                 * Creates a new UpdateAlertPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateAlertPolicyRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IUpdateAlertPolicyRequest): google.monitoring.v3.UpdateAlertPolicyRequest;

                /**
                 * Encodes the specified UpdateAlertPolicyRequest message. Does not implicitly {@link google.monitoring.v3.UpdateAlertPolicyRequest.verify|verify} messages.
                 * @param message UpdateAlertPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IUpdateAlertPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateAlertPolicyRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.UpdateAlertPolicyRequest.verify|verify} messages.
                 * @param message UpdateAlertPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IUpdateAlertPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateAlertPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateAlertPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UpdateAlertPolicyRequest;

                /**
                 * Decodes an UpdateAlertPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateAlertPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UpdateAlertPolicyRequest;

                /**
                 * Verifies an UpdateAlertPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateAlertPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateAlertPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UpdateAlertPolicyRequest;

                /**
                 * Creates a plain object from an UpdateAlertPolicyRequest message. Also converts values to other types if specified.
                 * @param message UpdateAlertPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.UpdateAlertPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateAlertPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteAlertPolicyRequest. */
            interface IDeleteAlertPolicyRequest {

                /** DeleteAlertPolicyRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteAlertPolicyRequest. */
            class DeleteAlertPolicyRequest implements IDeleteAlertPolicyRequest {

                /**
                 * Constructs a new DeleteAlertPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IDeleteAlertPolicyRequest);

                /** DeleteAlertPolicyRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteAlertPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAlertPolicyRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IDeleteAlertPolicyRequest): google.monitoring.v3.DeleteAlertPolicyRequest;

                /**
                 * Encodes the specified DeleteAlertPolicyRequest message. Does not implicitly {@link google.monitoring.v3.DeleteAlertPolicyRequest.verify|verify} messages.
                 * @param message DeleteAlertPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IDeleteAlertPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAlertPolicyRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.DeleteAlertPolicyRequest.verify|verify} messages.
                 * @param message DeleteAlertPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IDeleteAlertPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAlertPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAlertPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.DeleteAlertPolicyRequest;

                /**
                 * Decodes a DeleteAlertPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAlertPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.DeleteAlertPolicyRequest;

                /**
                 * Verifies a DeleteAlertPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAlertPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAlertPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.DeleteAlertPolicyRequest;

                /**
                 * Creates a plain object from a DeleteAlertPolicyRequest message. Also converts values to other types if specified.
                 * @param message DeleteAlertPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.DeleteAlertPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAlertPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AlertPolicy. */
            interface IAlertPolicy {

                /** AlertPolicy name */
                name?: (string|null);

                /** AlertPolicy displayName */
                displayName?: (string|null);

                /** AlertPolicy documentation */
                documentation?: (google.monitoring.v3.AlertPolicy.IDocumentation|null);

                /** AlertPolicy userLabels */
                userLabels?: ({ [k: string]: string }|null);

                /** AlertPolicy conditions */
                conditions?: (google.monitoring.v3.AlertPolicy.ICondition[]|null);

                /** AlertPolicy combiner */
                combiner?: (google.monitoring.v3.AlertPolicy.ConditionCombinerType|keyof typeof google.monitoring.v3.AlertPolicy.ConditionCombinerType|null);

                /** AlertPolicy enabled */
                enabled?: (google.protobuf.IBoolValue|null);

                /** AlertPolicy validity */
                validity?: (google.rpc.IStatus|null);

                /** AlertPolicy notificationChannels */
                notificationChannels?: (string[]|null);

                /** AlertPolicy creationRecord */
                creationRecord?: (google.monitoring.v3.IMutationRecord|null);

                /** AlertPolicy mutationRecord */
                mutationRecord?: (google.monitoring.v3.IMutationRecord|null);
            }

            /** Represents an AlertPolicy. */
            class AlertPolicy implements IAlertPolicy {

                /**
                 * Constructs a new AlertPolicy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IAlertPolicy);

                /** AlertPolicy name. */
                public name: string;

                /** AlertPolicy displayName. */
                public displayName: string;

                /** AlertPolicy documentation. */
                public documentation?: (google.monitoring.v3.AlertPolicy.IDocumentation|null);

                /** AlertPolicy userLabels. */
                public userLabels: { [k: string]: string };

                /** AlertPolicy conditions. */
                public conditions: google.monitoring.v3.AlertPolicy.ICondition[];

                /** AlertPolicy combiner. */
                public combiner: (google.monitoring.v3.AlertPolicy.ConditionCombinerType|keyof typeof google.monitoring.v3.AlertPolicy.ConditionCombinerType);

                /** AlertPolicy enabled. */
                public enabled?: (google.protobuf.IBoolValue|null);

                /** AlertPolicy validity. */
                public validity?: (google.rpc.IStatus|null);

                /** AlertPolicy notificationChannels. */
                public notificationChannels: string[];

                /** AlertPolicy creationRecord. */
                public creationRecord?: (google.monitoring.v3.IMutationRecord|null);

                /** AlertPolicy mutationRecord. */
                public mutationRecord?: (google.monitoring.v3.IMutationRecord|null);

                /**
                 * Creates a new AlertPolicy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AlertPolicy instance
                 */
                public static create(properties?: google.monitoring.v3.IAlertPolicy): google.monitoring.v3.AlertPolicy;

                /**
                 * Encodes the specified AlertPolicy message. Does not implicitly {@link google.monitoring.v3.AlertPolicy.verify|verify} messages.
                 * @param message AlertPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IAlertPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AlertPolicy message, length delimited. Does not implicitly {@link google.monitoring.v3.AlertPolicy.verify|verify} messages.
                 * @param message AlertPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IAlertPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AlertPolicy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AlertPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.AlertPolicy;

                /**
                 * Decodes an AlertPolicy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AlertPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.AlertPolicy;

                /**
                 * Verifies an AlertPolicy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AlertPolicy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AlertPolicy
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.AlertPolicy;

                /**
                 * Creates a plain object from an AlertPolicy message. Also converts values to other types if specified.
                 * @param message AlertPolicy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.AlertPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AlertPolicy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AlertPolicy {

                /** Properties of a Documentation. */
                interface IDocumentation {

                    /** Documentation content */
                    content?: (string|null);

                    /** Documentation mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a Documentation. */
                class Documentation implements IDocumentation {

                    /**
                     * Constructs a new Documentation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.AlertPolicy.IDocumentation);

                    /** Documentation content. */
                    public content: string;

                    /** Documentation mimeType. */
                    public mimeType: string;

                    /**
                     * Creates a new Documentation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Documentation instance
                     */
                    public static create(properties?: google.monitoring.v3.AlertPolicy.IDocumentation): google.monitoring.v3.AlertPolicy.Documentation;

                    /**
                     * Encodes the specified Documentation message. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Documentation.verify|verify} messages.
                     * @param message Documentation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.AlertPolicy.IDocumentation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Documentation message, length delimited. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Documentation.verify|verify} messages.
                     * @param message Documentation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.AlertPolicy.IDocumentation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Documentation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Documentation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.AlertPolicy.Documentation;

                    /**
                     * Decodes a Documentation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Documentation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.AlertPolicy.Documentation;

                    /**
                     * Verifies a Documentation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Documentation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Documentation
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.AlertPolicy.Documentation;

                    /**
                     * Creates a plain object from a Documentation message. Also converts values to other types if specified.
                     * @param message Documentation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.AlertPolicy.Documentation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Documentation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Condition. */
                interface ICondition {

                    /** Condition name */
                    name?: (string|null);

                    /** Condition displayName */
                    displayName?: (string|null);

                    /** Condition conditionThreshold */
                    conditionThreshold?: (google.monitoring.v3.AlertPolicy.Condition.IMetricThreshold|null);

                    /** Condition conditionAbsent */
                    conditionAbsent?: (google.monitoring.v3.AlertPolicy.Condition.IMetricAbsence|null);
                }

                /** Represents a Condition. */
                class Condition implements ICondition {

                    /**
                     * Constructs a new Condition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.AlertPolicy.ICondition);

                    /** Condition name. */
                    public name: string;

                    /** Condition displayName. */
                    public displayName: string;

                    /** Condition conditionThreshold. */
                    public conditionThreshold?: (google.monitoring.v3.AlertPolicy.Condition.IMetricThreshold|null);

                    /** Condition conditionAbsent. */
                    public conditionAbsent?: (google.monitoring.v3.AlertPolicy.Condition.IMetricAbsence|null);

                    /** Condition condition. */
                    public condition?: ("conditionThreshold"|"conditionAbsent");

                    /**
                     * Creates a new Condition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Condition instance
                     */
                    public static create(properties?: google.monitoring.v3.AlertPolicy.ICondition): google.monitoring.v3.AlertPolicy.Condition;

                    /**
                     * Encodes the specified Condition message. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Condition.verify|verify} messages.
                     * @param message Condition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.AlertPolicy.ICondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Condition message, length delimited. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Condition.verify|verify} messages.
                     * @param message Condition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.AlertPolicy.ICondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Condition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Condition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.AlertPolicy.Condition;

                    /**
                     * Decodes a Condition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Condition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.AlertPolicy.Condition;

                    /**
                     * Verifies a Condition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Condition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Condition
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.AlertPolicy.Condition;

                    /**
                     * Creates a plain object from a Condition message. Also converts values to other types if specified.
                     * @param message Condition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.AlertPolicy.Condition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Condition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Condition {

                    /** Properties of a Trigger. */
                    interface ITrigger {

                        /** Trigger count */
                        count?: (number|null);

                        /** Trigger percent */
                        percent?: (number|null);
                    }

                    /** Represents a Trigger. */
                    class Trigger implements ITrigger {

                        /**
                         * Constructs a new Trigger.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.v3.AlertPolicy.Condition.ITrigger);

                        /** Trigger count. */
                        public count: number;

                        /** Trigger percent. */
                        public percent: number;

                        /** Trigger type. */
                        public type?: ("count"|"percent");

                        /**
                         * Creates a new Trigger instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Trigger instance
                         */
                        public static create(properties?: google.monitoring.v3.AlertPolicy.Condition.ITrigger): google.monitoring.v3.AlertPolicy.Condition.Trigger;

                        /**
                         * Encodes the specified Trigger message. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Condition.Trigger.verify|verify} messages.
                         * @param message Trigger message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.v3.AlertPolicy.Condition.ITrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Trigger message, length delimited. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Condition.Trigger.verify|verify} messages.
                         * @param message Trigger message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.v3.AlertPolicy.Condition.ITrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Trigger message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Trigger
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.AlertPolicy.Condition.Trigger;

                        /**
                         * Decodes a Trigger message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Trigger
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.AlertPolicy.Condition.Trigger;

                        /**
                         * Verifies a Trigger message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Trigger message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Trigger
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.v3.AlertPolicy.Condition.Trigger;

                        /**
                         * Creates a plain object from a Trigger message. Also converts values to other types if specified.
                         * @param message Trigger
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.v3.AlertPolicy.Condition.Trigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Trigger to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MetricThreshold. */
                    interface IMetricThreshold {

                        /** MetricThreshold filter */
                        filter?: (string|null);

                        /** MetricThreshold aggregations */
                        aggregations?: (google.monitoring.v3.IAggregation[]|null);

                        /** MetricThreshold denominatorFilter */
                        denominatorFilter?: (string|null);

                        /** MetricThreshold denominatorAggregations */
                        denominatorAggregations?: (google.monitoring.v3.IAggregation[]|null);

                        /** MetricThreshold comparison */
                        comparison?: (google.monitoring.v3.ComparisonType|keyof typeof google.monitoring.v3.ComparisonType|null);

                        /** MetricThreshold thresholdValue */
                        thresholdValue?: (number|null);

                        /** MetricThreshold duration */
                        duration?: (google.protobuf.IDuration|null);

                        /** MetricThreshold trigger */
                        trigger?: (google.monitoring.v3.AlertPolicy.Condition.ITrigger|null);
                    }

                    /** Represents a MetricThreshold. */
                    class MetricThreshold implements IMetricThreshold {

                        /**
                         * Constructs a new MetricThreshold.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.v3.AlertPolicy.Condition.IMetricThreshold);

                        /** MetricThreshold filter. */
                        public filter: string;

                        /** MetricThreshold aggregations. */
                        public aggregations: google.monitoring.v3.IAggregation[];

                        /** MetricThreshold denominatorFilter. */
                        public denominatorFilter: string;

                        /** MetricThreshold denominatorAggregations. */
                        public denominatorAggregations: google.monitoring.v3.IAggregation[];

                        /** MetricThreshold comparison. */
                        public comparison: (google.monitoring.v3.ComparisonType|keyof typeof google.monitoring.v3.ComparisonType);

                        /** MetricThreshold thresholdValue. */
                        public thresholdValue: number;

                        /** MetricThreshold duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /** MetricThreshold trigger. */
                        public trigger?: (google.monitoring.v3.AlertPolicy.Condition.ITrigger|null);

                        /**
                         * Creates a new MetricThreshold instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetricThreshold instance
                         */
                        public static create(properties?: google.monitoring.v3.AlertPolicy.Condition.IMetricThreshold): google.monitoring.v3.AlertPolicy.Condition.MetricThreshold;

                        /**
                         * Encodes the specified MetricThreshold message. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Condition.MetricThreshold.verify|verify} messages.
                         * @param message MetricThreshold message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.v3.AlertPolicy.Condition.IMetricThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetricThreshold message, length delimited. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Condition.MetricThreshold.verify|verify} messages.
                         * @param message MetricThreshold message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.v3.AlertPolicy.Condition.IMetricThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetricThreshold message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetricThreshold
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.AlertPolicy.Condition.MetricThreshold;

                        /**
                         * Decodes a MetricThreshold message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetricThreshold
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.AlertPolicy.Condition.MetricThreshold;

                        /**
                         * Verifies a MetricThreshold message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetricThreshold message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetricThreshold
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.v3.AlertPolicy.Condition.MetricThreshold;

                        /**
                         * Creates a plain object from a MetricThreshold message. Also converts values to other types if specified.
                         * @param message MetricThreshold
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.v3.AlertPolicy.Condition.MetricThreshold, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetricThreshold to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MetricAbsence. */
                    interface IMetricAbsence {

                        /** MetricAbsence filter */
                        filter?: (string|null);

                        /** MetricAbsence aggregations */
                        aggregations?: (google.monitoring.v3.IAggregation[]|null);

                        /** MetricAbsence duration */
                        duration?: (google.protobuf.IDuration|null);

                        /** MetricAbsence trigger */
                        trigger?: (google.monitoring.v3.AlertPolicy.Condition.ITrigger|null);
                    }

                    /** Represents a MetricAbsence. */
                    class MetricAbsence implements IMetricAbsence {

                        /**
                         * Constructs a new MetricAbsence.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.v3.AlertPolicy.Condition.IMetricAbsence);

                        /** MetricAbsence filter. */
                        public filter: string;

                        /** MetricAbsence aggregations. */
                        public aggregations: google.monitoring.v3.IAggregation[];

                        /** MetricAbsence duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /** MetricAbsence trigger. */
                        public trigger?: (google.monitoring.v3.AlertPolicy.Condition.ITrigger|null);

                        /**
                         * Creates a new MetricAbsence instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetricAbsence instance
                         */
                        public static create(properties?: google.monitoring.v3.AlertPolicy.Condition.IMetricAbsence): google.monitoring.v3.AlertPolicy.Condition.MetricAbsence;

                        /**
                         * Encodes the specified MetricAbsence message. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Condition.MetricAbsence.verify|verify} messages.
                         * @param message MetricAbsence message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.v3.AlertPolicy.Condition.IMetricAbsence, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetricAbsence message, length delimited. Does not implicitly {@link google.monitoring.v3.AlertPolicy.Condition.MetricAbsence.verify|verify} messages.
                         * @param message MetricAbsence message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.v3.AlertPolicy.Condition.IMetricAbsence, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetricAbsence message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetricAbsence
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.AlertPolicy.Condition.MetricAbsence;

                        /**
                         * Decodes a MetricAbsence message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetricAbsence
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.AlertPolicy.Condition.MetricAbsence;

                        /**
                         * Verifies a MetricAbsence message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetricAbsence message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetricAbsence
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.v3.AlertPolicy.Condition.MetricAbsence;

                        /**
                         * Creates a plain object from a MetricAbsence message. Also converts values to other types if specified.
                         * @param message MetricAbsence
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.v3.AlertPolicy.Condition.MetricAbsence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetricAbsence to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** ConditionCombinerType enum. */
                enum ConditionCombinerType {
                    COMBINE_UNSPECIFIED = 0,
                    AND = 1,
                    OR = 2,
                    AND_WITH_MATCHING_RESOURCE = 3
                }
            }

            /** Properties of a TypedValue. */
            interface ITypedValue {

                /** TypedValue boolValue */
                boolValue?: (boolean|null);

                /** TypedValue int64Value */
                int64Value?: (number|Long|string|null);

                /** TypedValue doubleValue */
                doubleValue?: (number|null);

                /** TypedValue stringValue */
                stringValue?: (string|null);

                /** TypedValue distributionValue */
                distributionValue?: (google.api.IDistribution|null);
            }

            /** Represents a TypedValue. */
            class TypedValue implements ITypedValue {

                /**
                 * Constructs a new TypedValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ITypedValue);

                /** TypedValue boolValue. */
                public boolValue: boolean;

                /** TypedValue int64Value. */
                public int64Value: (number|Long|string);

                /** TypedValue doubleValue. */
                public doubleValue: number;

                /** TypedValue stringValue. */
                public stringValue: string;

                /** TypedValue distributionValue. */
                public distributionValue?: (google.api.IDistribution|null);

                /** TypedValue value. */
                public value?: ("boolValue"|"int64Value"|"doubleValue"|"stringValue"|"distributionValue");

                /**
                 * Creates a new TypedValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TypedValue instance
                 */
                public static create(properties?: google.monitoring.v3.ITypedValue): google.monitoring.v3.TypedValue;

                /**
                 * Encodes the specified TypedValue message. Does not implicitly {@link google.monitoring.v3.TypedValue.verify|verify} messages.
                 * @param message TypedValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TypedValue message, length delimited. Does not implicitly {@link google.monitoring.v3.TypedValue.verify|verify} messages.
                 * @param message TypedValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ITypedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TypedValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TypedValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.TypedValue;

                /**
                 * Decodes a TypedValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TypedValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.TypedValue;

                /**
                 * Verifies a TypedValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TypedValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TypedValue
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.TypedValue;

                /**
                 * Creates a plain object from a TypedValue message. Also converts values to other types if specified.
                 * @param message TypedValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.TypedValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TypedValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TimeInterval. */
            interface ITimeInterval {

                /** TimeInterval endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** TimeInterval startTime */
                startTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a TimeInterval. */
            class TimeInterval implements ITimeInterval {

                /**
                 * Constructs a new TimeInterval.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ITimeInterval);

                /** TimeInterval endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** TimeInterval startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new TimeInterval instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeInterval instance
                 */
                public static create(properties?: google.monitoring.v3.ITimeInterval): google.monitoring.v3.TimeInterval;

                /**
                 * Encodes the specified TimeInterval message. Does not implicitly {@link google.monitoring.v3.TimeInterval.verify|verify} messages.
                 * @param message TimeInterval message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ITimeInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeInterval message, length delimited. Does not implicitly {@link google.monitoring.v3.TimeInterval.verify|verify} messages.
                 * @param message TimeInterval message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ITimeInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeInterval message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeInterval
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.TimeInterval;

                /**
                 * Decodes a TimeInterval message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeInterval
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.TimeInterval;

                /**
                 * Verifies a TimeInterval message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeInterval message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeInterval
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.TimeInterval;

                /**
                 * Creates a plain object from a TimeInterval message. Also converts values to other types if specified.
                 * @param message TimeInterval
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.TimeInterval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeInterval to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Aggregation. */
            interface IAggregation {

                /** Aggregation alignmentPeriod */
                alignmentPeriod?: (google.protobuf.IDuration|null);

                /** Aggregation perSeriesAligner */
                perSeriesAligner?: (google.monitoring.v3.Aggregation.Aligner|keyof typeof google.monitoring.v3.Aggregation.Aligner|null);

                /** Aggregation crossSeriesReducer */
                crossSeriesReducer?: (google.monitoring.v3.Aggregation.Reducer|keyof typeof google.monitoring.v3.Aggregation.Reducer|null);

                /** Aggregation groupByFields */
                groupByFields?: (string[]|null);
            }

            /** Represents an Aggregation. */
            class Aggregation implements IAggregation {

                /**
                 * Constructs a new Aggregation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IAggregation);

                /** Aggregation alignmentPeriod. */
                public alignmentPeriod?: (google.protobuf.IDuration|null);

                /** Aggregation perSeriesAligner. */
                public perSeriesAligner: (google.monitoring.v3.Aggregation.Aligner|keyof typeof google.monitoring.v3.Aggregation.Aligner);

                /** Aggregation crossSeriesReducer. */
                public crossSeriesReducer: (google.monitoring.v3.Aggregation.Reducer|keyof typeof google.monitoring.v3.Aggregation.Reducer);

                /** Aggregation groupByFields. */
                public groupByFields: string[];

                /**
                 * Creates a new Aggregation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Aggregation instance
                 */
                public static create(properties?: google.monitoring.v3.IAggregation): google.monitoring.v3.Aggregation;

                /**
                 * Encodes the specified Aggregation message. Does not implicitly {@link google.monitoring.v3.Aggregation.verify|verify} messages.
                 * @param message Aggregation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Aggregation message, length delimited. Does not implicitly {@link google.monitoring.v3.Aggregation.verify|verify} messages.
                 * @param message Aggregation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IAggregation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Aggregation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Aggregation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Aggregation;

                /**
                 * Decodes an Aggregation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Aggregation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Aggregation;

                /**
                 * Verifies an Aggregation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Aggregation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Aggregation
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Aggregation;

                /**
                 * Creates a plain object from an Aggregation message. Also converts values to other types if specified.
                 * @param message Aggregation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.Aggregation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Aggregation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Aggregation {

                /** Aligner enum. */
                enum Aligner {
                    ALIGN_NONE = 0,
                    ALIGN_DELTA = 1,
                    ALIGN_RATE = 2,
                    ALIGN_INTERPOLATE = 3,
                    ALIGN_NEXT_OLDER = 4,
                    ALIGN_MIN = 10,
                    ALIGN_MAX = 11,
                    ALIGN_MEAN = 12,
                    ALIGN_COUNT = 13,
                    ALIGN_SUM = 14,
                    ALIGN_STDDEV = 15,
                    ALIGN_COUNT_TRUE = 16,
                    ALIGN_COUNT_FALSE = 24,
                    ALIGN_FRACTION_TRUE = 17,
                    ALIGN_PERCENTILE_99 = 18,
                    ALIGN_PERCENTILE_95 = 19,
                    ALIGN_PERCENTILE_50 = 20,
                    ALIGN_PERCENTILE_05 = 21,
                    ALIGN_PERCENT_CHANGE = 23
                }

                /** Reducer enum. */
                enum Reducer {
                    REDUCE_NONE = 0,
                    REDUCE_MEAN = 1,
                    REDUCE_MIN = 2,
                    REDUCE_MAX = 3,
                    REDUCE_SUM = 4,
                    REDUCE_STDDEV = 5,
                    REDUCE_COUNT = 6,
                    REDUCE_COUNT_TRUE = 7,
                    REDUCE_COUNT_FALSE = 15,
                    REDUCE_FRACTION_TRUE = 8,
                    REDUCE_PERCENTILE_99 = 9,
                    REDUCE_PERCENTILE_95 = 10,
                    REDUCE_PERCENTILE_50 = 11,
                    REDUCE_PERCENTILE_05 = 12
                }
            }

            /** ComparisonType enum. */
            enum ComparisonType {
                COMPARISON_UNSPECIFIED = 0,
                COMPARISON_GT = 1,
                COMPARISON_GE = 2,
                COMPARISON_LT = 3,
                COMPARISON_LE = 4,
                COMPARISON_EQ = 5,
                COMPARISON_NE = 6
            }

            /** ServiceTier enum. */
            enum ServiceTier {
                SERVICE_TIER_UNSPECIFIED = 0,
                SERVICE_TIER_BASIC = 1,
                SERVICE_TIER_PREMIUM = 2
            }

            /** Properties of a MutationRecord. */
            interface IMutationRecord {

                /** MutationRecord mutateTime */
                mutateTime?: (google.protobuf.ITimestamp|null);

                /** MutationRecord mutatedBy */
                mutatedBy?: (string|null);
            }

            /** Represents a MutationRecord. */
            class MutationRecord implements IMutationRecord {

                /**
                 * Constructs a new MutationRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IMutationRecord);

                /** MutationRecord mutateTime. */
                public mutateTime?: (google.protobuf.ITimestamp|null);

                /** MutationRecord mutatedBy. */
                public mutatedBy: string;

                /**
                 * Creates a new MutationRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MutationRecord instance
                 */
                public static create(properties?: google.monitoring.v3.IMutationRecord): google.monitoring.v3.MutationRecord;

                /**
                 * Encodes the specified MutationRecord message. Does not implicitly {@link google.monitoring.v3.MutationRecord.verify|verify} messages.
                 * @param message MutationRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IMutationRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MutationRecord message, length delimited. Does not implicitly {@link google.monitoring.v3.MutationRecord.verify|verify} messages.
                 * @param message MutationRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IMutationRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MutationRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MutationRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.MutationRecord;

                /**
                 * Decodes a MutationRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MutationRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.MutationRecord;

                /**
                 * Verifies a MutationRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MutationRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MutationRecord
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.MutationRecord;

                /**
                 * Creates a plain object from a MutationRecord message. Also converts values to other types if specified.
                 * @param message MutationRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.MutationRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MutationRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a GroupService */
            class GroupService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new GroupService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new GroupService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GroupService;

                /**
                 * Calls ListGroups.
                 * @param request ListGroupsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListGroupsResponse
                 */
                public listGroups(request: google.monitoring.v3.IListGroupsRequest, callback: google.monitoring.v3.GroupService.ListGroupsCallback): void;

                /**
                 * Calls ListGroups.
                 * @param request ListGroupsRequest message or plain object
                 * @returns Promise
                 */
                public listGroups(request: google.monitoring.v3.IListGroupsRequest): Promise<google.monitoring.v3.ListGroupsResponse>;

                /**
                 * Calls GetGroup.
                 * @param request GetGroupRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Group
                 */
                public getGroup(request: google.monitoring.v3.IGetGroupRequest, callback: google.monitoring.v3.GroupService.GetGroupCallback): void;

                /**
                 * Calls GetGroup.
                 * @param request GetGroupRequest message or plain object
                 * @returns Promise
                 */
                public getGroup(request: google.monitoring.v3.IGetGroupRequest): Promise<google.monitoring.v3.Group>;

                /**
                 * Calls CreateGroup.
                 * @param request CreateGroupRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Group
                 */
                public createGroup(request: google.monitoring.v3.ICreateGroupRequest, callback: google.monitoring.v3.GroupService.CreateGroupCallback): void;

                /**
                 * Calls CreateGroup.
                 * @param request CreateGroupRequest message or plain object
                 * @returns Promise
                 */
                public createGroup(request: google.monitoring.v3.ICreateGroupRequest): Promise<google.monitoring.v3.Group>;

                /**
                 * Calls UpdateGroup.
                 * @param request UpdateGroupRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Group
                 */
                public updateGroup(request: google.monitoring.v3.IUpdateGroupRequest, callback: google.monitoring.v3.GroupService.UpdateGroupCallback): void;

                /**
                 * Calls UpdateGroup.
                 * @param request UpdateGroupRequest message or plain object
                 * @returns Promise
                 */
                public updateGroup(request: google.monitoring.v3.IUpdateGroupRequest): Promise<google.monitoring.v3.Group>;

                /**
                 * Calls DeleteGroup.
                 * @param request DeleteGroupRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteGroup(request: google.monitoring.v3.IDeleteGroupRequest, callback: google.monitoring.v3.GroupService.DeleteGroupCallback): void;

                /**
                 * Calls DeleteGroup.
                 * @param request DeleteGroupRequest message or plain object
                 * @returns Promise
                 */
                public deleteGroup(request: google.monitoring.v3.IDeleteGroupRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls ListGroupMembers.
                 * @param request ListGroupMembersRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListGroupMembersResponse
                 */
                public listGroupMembers(request: google.monitoring.v3.IListGroupMembersRequest, callback: google.monitoring.v3.GroupService.ListGroupMembersCallback): void;

                /**
                 * Calls ListGroupMembers.
                 * @param request ListGroupMembersRequest message or plain object
                 * @returns Promise
                 */
                public listGroupMembers(request: google.monitoring.v3.IListGroupMembersRequest): Promise<google.monitoring.v3.ListGroupMembersResponse>;
            }

            namespace GroupService {

                /**
                 * Callback as used by {@link google.monitoring.v3.GroupService#listGroups}.
                 * @param error Error, if any
                 * @param [response] ListGroupsResponse
                 */
                type ListGroupsCallback = (error: (Error|null), response?: google.monitoring.v3.ListGroupsResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.GroupService#getGroup}.
                 * @param error Error, if any
                 * @param [response] Group
                 */
                type GetGroupCallback = (error: (Error|null), response?: google.monitoring.v3.Group) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.GroupService#createGroup}.
                 * @param error Error, if any
                 * @param [response] Group
                 */
                type CreateGroupCallback = (error: (Error|null), response?: google.monitoring.v3.Group) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.GroupService#updateGroup}.
                 * @param error Error, if any
                 * @param [response] Group
                 */
                type UpdateGroupCallback = (error: (Error|null), response?: google.monitoring.v3.Group) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.GroupService#deleteGroup}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteGroupCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.GroupService#listGroupMembers}.
                 * @param error Error, if any
                 * @param [response] ListGroupMembersResponse
                 */
                type ListGroupMembersCallback = (error: (Error|null), response?: google.monitoring.v3.ListGroupMembersResponse) => void;
            }

            /** Properties of a ListGroupsRequest. */
            interface IListGroupsRequest {

                /** ListGroupsRequest name */
                name?: (string|null);

                /** ListGroupsRequest childrenOfGroup */
                childrenOfGroup?: (string|null);

                /** ListGroupsRequest ancestorsOfGroup */
                ancestorsOfGroup?: (string|null);

                /** ListGroupsRequest descendantsOfGroup */
                descendantsOfGroup?: (string|null);

                /** ListGroupsRequest pageSize */
                pageSize?: (number|null);

                /** ListGroupsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListGroupsRequest. */
            class ListGroupsRequest implements IListGroupsRequest {

                /**
                 * Constructs a new ListGroupsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListGroupsRequest);

                /** ListGroupsRequest name. */
                public name: string;

                /** ListGroupsRequest childrenOfGroup. */
                public childrenOfGroup: string;

                /** ListGroupsRequest ancestorsOfGroup. */
                public ancestorsOfGroup: string;

                /** ListGroupsRequest descendantsOfGroup. */
                public descendantsOfGroup: string;

                /** ListGroupsRequest pageSize. */
                public pageSize: number;

                /** ListGroupsRequest pageToken. */
                public pageToken: string;

                /** ListGroupsRequest filter. */
                public filter?: ("childrenOfGroup"|"ancestorsOfGroup"|"descendantsOfGroup");

                /**
                 * Creates a new ListGroupsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListGroupsRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListGroupsRequest): google.monitoring.v3.ListGroupsRequest;

                /**
                 * Encodes the specified ListGroupsRequest message. Does not implicitly {@link google.monitoring.v3.ListGroupsRequest.verify|verify} messages.
                 * @param message ListGroupsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListGroupsRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListGroupsRequest.verify|verify} messages.
                 * @param message ListGroupsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListGroupsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListGroupsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListGroupsRequest;

                /**
                 * Decodes a ListGroupsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListGroupsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListGroupsRequest;

                /**
                 * Verifies a ListGroupsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListGroupsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListGroupsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListGroupsRequest;

                /**
                 * Creates a plain object from a ListGroupsRequest message. Also converts values to other types if specified.
                 * @param message ListGroupsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListGroupsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListGroupsResponse. */
            interface IListGroupsResponse {

                /** ListGroupsResponse group */
                group?: (google.monitoring.v3.IGroup[]|null);

                /** ListGroupsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListGroupsResponse. */
            class ListGroupsResponse implements IListGroupsResponse {

                /**
                 * Constructs a new ListGroupsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListGroupsResponse);

                /** ListGroupsResponse group. */
                public group: google.monitoring.v3.IGroup[];

                /** ListGroupsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListGroupsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListGroupsResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListGroupsResponse): google.monitoring.v3.ListGroupsResponse;

                /**
                 * Encodes the specified ListGroupsResponse message. Does not implicitly {@link google.monitoring.v3.ListGroupsResponse.verify|verify} messages.
                 * @param message ListGroupsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListGroupsResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListGroupsResponse.verify|verify} messages.
                 * @param message ListGroupsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListGroupsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListGroupsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListGroupsResponse;

                /**
                 * Decodes a ListGroupsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListGroupsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListGroupsResponse;

                /**
                 * Verifies a ListGroupsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListGroupsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListGroupsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListGroupsResponse;

                /**
                 * Creates a plain object from a ListGroupsResponse message. Also converts values to other types if specified.
                 * @param message ListGroupsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListGroupsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetGroupRequest. */
            interface IGetGroupRequest {

                /** GetGroupRequest name */
                name?: (string|null);
            }

            /** Represents a GetGroupRequest. */
            class GetGroupRequest implements IGetGroupRequest {

                /**
                 * Constructs a new GetGroupRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetGroupRequest);

                /** GetGroupRequest name. */
                public name: string;

                /**
                 * Creates a new GetGroupRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetGroupRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetGroupRequest): google.monitoring.v3.GetGroupRequest;

                /**
                 * Encodes the specified GetGroupRequest message. Does not implicitly {@link google.monitoring.v3.GetGroupRequest.verify|verify} messages.
                 * @param message GetGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetGroupRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetGroupRequest.verify|verify} messages.
                 * @param message GetGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetGroupRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetGroupRequest;

                /**
                 * Decodes a GetGroupRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetGroupRequest;

                /**
                 * Verifies a GetGroupRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetGroupRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetGroupRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetGroupRequest;

                /**
                 * Creates a plain object from a GetGroupRequest message. Also converts values to other types if specified.
                 * @param message GetGroupRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetGroupRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateGroupRequest. */
            interface ICreateGroupRequest {

                /** CreateGroupRequest name */
                name?: (string|null);

                /** CreateGroupRequest group */
                group?: (google.monitoring.v3.IGroup|null);

                /** CreateGroupRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents a CreateGroupRequest. */
            class CreateGroupRequest implements ICreateGroupRequest {

                /**
                 * Constructs a new CreateGroupRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateGroupRequest);

                /** CreateGroupRequest name. */
                public name: string;

                /** CreateGroupRequest group. */
                public group?: (google.monitoring.v3.IGroup|null);

                /** CreateGroupRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new CreateGroupRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateGroupRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateGroupRequest): google.monitoring.v3.CreateGroupRequest;

                /**
                 * Encodes the specified CreateGroupRequest message. Does not implicitly {@link google.monitoring.v3.CreateGroupRequest.verify|verify} messages.
                 * @param message CreateGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateGroupRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateGroupRequest.verify|verify} messages.
                 * @param message CreateGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateGroupRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateGroupRequest;

                /**
                 * Decodes a CreateGroupRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateGroupRequest;

                /**
                 * Verifies a CreateGroupRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateGroupRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateGroupRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateGroupRequest;

                /**
                 * Creates a plain object from a CreateGroupRequest message. Also converts values to other types if specified.
                 * @param message CreateGroupRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateGroupRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateGroupRequest. */
            interface IUpdateGroupRequest {

                /** UpdateGroupRequest group */
                group?: (google.monitoring.v3.IGroup|null);

                /** UpdateGroupRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents an UpdateGroupRequest. */
            class UpdateGroupRequest implements IUpdateGroupRequest {

                /**
                 * Constructs a new UpdateGroupRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IUpdateGroupRequest);

                /** UpdateGroupRequest group. */
                public group?: (google.monitoring.v3.IGroup|null);

                /** UpdateGroupRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new UpdateGroupRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateGroupRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IUpdateGroupRequest): google.monitoring.v3.UpdateGroupRequest;

                /**
                 * Encodes the specified UpdateGroupRequest message. Does not implicitly {@link google.monitoring.v3.UpdateGroupRequest.verify|verify} messages.
                 * @param message UpdateGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IUpdateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateGroupRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.UpdateGroupRequest.verify|verify} messages.
                 * @param message UpdateGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IUpdateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateGroupRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UpdateGroupRequest;

                /**
                 * Decodes an UpdateGroupRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UpdateGroupRequest;

                /**
                 * Verifies an UpdateGroupRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateGroupRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateGroupRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UpdateGroupRequest;

                /**
                 * Creates a plain object from an UpdateGroupRequest message. Also converts values to other types if specified.
                 * @param message UpdateGroupRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.UpdateGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateGroupRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteGroupRequest. */
            interface IDeleteGroupRequest {

                /** DeleteGroupRequest name */
                name?: (string|null);

                /** DeleteGroupRequest recursive */
                recursive?: (boolean|null);
            }

            /** Represents a DeleteGroupRequest. */
            class DeleteGroupRequest implements IDeleteGroupRequest {

                /**
                 * Constructs a new DeleteGroupRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IDeleteGroupRequest);

                /** DeleteGroupRequest name. */
                public name: string;

                /** DeleteGroupRequest recursive. */
                public recursive: boolean;

                /**
                 * Creates a new DeleteGroupRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteGroupRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IDeleteGroupRequest): google.monitoring.v3.DeleteGroupRequest;

                /**
                 * Encodes the specified DeleteGroupRequest message. Does not implicitly {@link google.monitoring.v3.DeleteGroupRequest.verify|verify} messages.
                 * @param message DeleteGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IDeleteGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteGroupRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.DeleteGroupRequest.verify|verify} messages.
                 * @param message DeleteGroupRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IDeleteGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteGroupRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.DeleteGroupRequest;

                /**
                 * Decodes a DeleteGroupRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteGroupRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.DeleteGroupRequest;

                /**
                 * Verifies a DeleteGroupRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteGroupRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteGroupRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.DeleteGroupRequest;

                /**
                 * Creates a plain object from a DeleteGroupRequest message. Also converts values to other types if specified.
                 * @param message DeleteGroupRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.DeleteGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteGroupRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListGroupMembersRequest. */
            interface IListGroupMembersRequest {

                /** ListGroupMembersRequest name */
                name?: (string|null);

                /** ListGroupMembersRequest pageSize */
                pageSize?: (number|null);

                /** ListGroupMembersRequest pageToken */
                pageToken?: (string|null);

                /** ListGroupMembersRequest filter */
                filter?: (string|null);

                /** ListGroupMembersRequest interval */
                interval?: (google.monitoring.v3.ITimeInterval|null);
            }

            /** Represents a ListGroupMembersRequest. */
            class ListGroupMembersRequest implements IListGroupMembersRequest {

                /**
                 * Constructs a new ListGroupMembersRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListGroupMembersRequest);

                /** ListGroupMembersRequest name. */
                public name: string;

                /** ListGroupMembersRequest pageSize. */
                public pageSize: number;

                /** ListGroupMembersRequest pageToken. */
                public pageToken: string;

                /** ListGroupMembersRequest filter. */
                public filter: string;

                /** ListGroupMembersRequest interval. */
                public interval?: (google.monitoring.v3.ITimeInterval|null);

                /**
                 * Creates a new ListGroupMembersRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListGroupMembersRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListGroupMembersRequest): google.monitoring.v3.ListGroupMembersRequest;

                /**
                 * Encodes the specified ListGroupMembersRequest message. Does not implicitly {@link google.monitoring.v3.ListGroupMembersRequest.verify|verify} messages.
                 * @param message ListGroupMembersRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListGroupMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListGroupMembersRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListGroupMembersRequest.verify|verify} messages.
                 * @param message ListGroupMembersRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListGroupMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListGroupMembersRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListGroupMembersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListGroupMembersRequest;

                /**
                 * Decodes a ListGroupMembersRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListGroupMembersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListGroupMembersRequest;

                /**
                 * Verifies a ListGroupMembersRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListGroupMembersRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListGroupMembersRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListGroupMembersRequest;

                /**
                 * Creates a plain object from a ListGroupMembersRequest message. Also converts values to other types if specified.
                 * @param message ListGroupMembersRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListGroupMembersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListGroupMembersRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListGroupMembersResponse. */
            interface IListGroupMembersResponse {

                /** ListGroupMembersResponse members */
                members?: (google.api.IMonitoredResource[]|null);

                /** ListGroupMembersResponse nextPageToken */
                nextPageToken?: (string|null);

                /** ListGroupMembersResponse totalSize */
                totalSize?: (number|null);
            }

            /** Represents a ListGroupMembersResponse. */
            class ListGroupMembersResponse implements IListGroupMembersResponse {

                /**
                 * Constructs a new ListGroupMembersResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListGroupMembersResponse);

                /** ListGroupMembersResponse members. */
                public members: google.api.IMonitoredResource[];

                /** ListGroupMembersResponse nextPageToken. */
                public nextPageToken: string;

                /** ListGroupMembersResponse totalSize. */
                public totalSize: number;

                /**
                 * Creates a new ListGroupMembersResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListGroupMembersResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListGroupMembersResponse): google.monitoring.v3.ListGroupMembersResponse;

                /**
                 * Encodes the specified ListGroupMembersResponse message. Does not implicitly {@link google.monitoring.v3.ListGroupMembersResponse.verify|verify} messages.
                 * @param message ListGroupMembersResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListGroupMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListGroupMembersResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListGroupMembersResponse.verify|verify} messages.
                 * @param message ListGroupMembersResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListGroupMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListGroupMembersResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListGroupMembersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListGroupMembersResponse;

                /**
                 * Decodes a ListGroupMembersResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListGroupMembersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListGroupMembersResponse;

                /**
                 * Verifies a ListGroupMembersResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListGroupMembersResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListGroupMembersResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListGroupMembersResponse;

                /**
                 * Creates a plain object from a ListGroupMembersResponse message. Also converts values to other types if specified.
                 * @param message ListGroupMembersResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListGroupMembersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListGroupMembersResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Group. */
            interface IGroup {

                /** Group name */
                name?: (string|null);

                /** Group displayName */
                displayName?: (string|null);

                /** Group parentName */
                parentName?: (string|null);

                /** Group filter */
                filter?: (string|null);

                /** Group isCluster */
                isCluster?: (boolean|null);
            }

            /** Represents a Group. */
            class Group implements IGroup {

                /**
                 * Constructs a new Group.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGroup);

                /** Group name. */
                public name: string;

                /** Group displayName. */
                public displayName: string;

                /** Group parentName. */
                public parentName: string;

                /** Group filter. */
                public filter: string;

                /** Group isCluster. */
                public isCluster: boolean;

                /**
                 * Creates a new Group instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Group instance
                 */
                public static create(properties?: google.monitoring.v3.IGroup): google.monitoring.v3.Group;

                /**
                 * Encodes the specified Group message. Does not implicitly {@link google.monitoring.v3.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Group message, length delimited. Does not implicitly {@link google.monitoring.v3.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Group message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Group;

                /**
                 * Decodes a Group message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Group;

                /**
                 * Verifies a Group message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Group message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Group
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Group;

                /**
                 * Creates a plain object from a Group message. Also converts values to other types if specified.
                 * @param message Group
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Group to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a MetricService */
            class MetricService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new MetricService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new MetricService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MetricService;

                /**
                 * Calls ListMonitoredResourceDescriptors.
                 * @param request ListMonitoredResourceDescriptorsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListMonitoredResourceDescriptorsResponse
                 */
                public listMonitoredResourceDescriptors(request: google.monitoring.v3.IListMonitoredResourceDescriptorsRequest, callback: google.monitoring.v3.MetricService.ListMonitoredResourceDescriptorsCallback): void;

                /**
                 * Calls ListMonitoredResourceDescriptors.
                 * @param request ListMonitoredResourceDescriptorsRequest message or plain object
                 * @returns Promise
                 */
                public listMonitoredResourceDescriptors(request: google.monitoring.v3.IListMonitoredResourceDescriptorsRequest): Promise<google.monitoring.v3.ListMonitoredResourceDescriptorsResponse>;

                /**
                 * Calls GetMonitoredResourceDescriptor.
                 * @param request GetMonitoredResourceDescriptorRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MonitoredResourceDescriptor
                 */
                public getMonitoredResourceDescriptor(request: google.monitoring.v3.IGetMonitoredResourceDescriptorRequest, callback: google.monitoring.v3.MetricService.GetMonitoredResourceDescriptorCallback): void;

                /**
                 * Calls GetMonitoredResourceDescriptor.
                 * @param request GetMonitoredResourceDescriptorRequest message or plain object
                 * @returns Promise
                 */
                public getMonitoredResourceDescriptor(request: google.monitoring.v3.IGetMonitoredResourceDescriptorRequest): Promise<google.api.MonitoredResourceDescriptor>;

                /**
                 * Calls ListMetricDescriptors.
                 * @param request ListMetricDescriptorsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListMetricDescriptorsResponse
                 */
                public listMetricDescriptors(request: google.monitoring.v3.IListMetricDescriptorsRequest, callback: google.monitoring.v3.MetricService.ListMetricDescriptorsCallback): void;

                /**
                 * Calls ListMetricDescriptors.
                 * @param request ListMetricDescriptorsRequest message or plain object
                 * @returns Promise
                 */
                public listMetricDescriptors(request: google.monitoring.v3.IListMetricDescriptorsRequest): Promise<google.monitoring.v3.ListMetricDescriptorsResponse>;

                /**
                 * Calls GetMetricDescriptor.
                 * @param request GetMetricDescriptorRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MetricDescriptor
                 */
                public getMetricDescriptor(request: google.monitoring.v3.IGetMetricDescriptorRequest, callback: google.monitoring.v3.MetricService.GetMetricDescriptorCallback): void;

                /**
                 * Calls GetMetricDescriptor.
                 * @param request GetMetricDescriptorRequest message or plain object
                 * @returns Promise
                 */
                public getMetricDescriptor(request: google.monitoring.v3.IGetMetricDescriptorRequest): Promise<google.api.MetricDescriptor>;

                /**
                 * Calls CreateMetricDescriptor.
                 * @param request CreateMetricDescriptorRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and MetricDescriptor
                 */
                public createMetricDescriptor(request: google.monitoring.v3.ICreateMetricDescriptorRequest, callback: google.monitoring.v3.MetricService.CreateMetricDescriptorCallback): void;

                /**
                 * Calls CreateMetricDescriptor.
                 * @param request CreateMetricDescriptorRequest message or plain object
                 * @returns Promise
                 */
                public createMetricDescriptor(request: google.monitoring.v3.ICreateMetricDescriptorRequest): Promise<google.api.MetricDescriptor>;

                /**
                 * Calls DeleteMetricDescriptor.
                 * @param request DeleteMetricDescriptorRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteMetricDescriptor(request: google.monitoring.v3.IDeleteMetricDescriptorRequest, callback: google.monitoring.v3.MetricService.DeleteMetricDescriptorCallback): void;

                /**
                 * Calls DeleteMetricDescriptor.
                 * @param request DeleteMetricDescriptorRequest message or plain object
                 * @returns Promise
                 */
                public deleteMetricDescriptor(request: google.monitoring.v3.IDeleteMetricDescriptorRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls ListTimeSeries.
                 * @param request ListTimeSeriesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListTimeSeriesResponse
                 */
                public listTimeSeries(request: google.monitoring.v3.IListTimeSeriesRequest, callback: google.monitoring.v3.MetricService.ListTimeSeriesCallback): void;

                /**
                 * Calls ListTimeSeries.
                 * @param request ListTimeSeriesRequest message or plain object
                 * @returns Promise
                 */
                public listTimeSeries(request: google.monitoring.v3.IListTimeSeriesRequest): Promise<google.monitoring.v3.ListTimeSeriesResponse>;

                /**
                 * Calls CreateTimeSeries.
                 * @param request CreateTimeSeriesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public createTimeSeries(request: google.monitoring.v3.ICreateTimeSeriesRequest, callback: google.monitoring.v3.MetricService.CreateTimeSeriesCallback): void;

                /**
                 * Calls CreateTimeSeries.
                 * @param request CreateTimeSeriesRequest message or plain object
                 * @returns Promise
                 */
                public createTimeSeries(request: google.monitoring.v3.ICreateTimeSeriesRequest): Promise<google.protobuf.Empty>;
            }

            namespace MetricService {

                /**
                 * Callback as used by {@link google.monitoring.v3.MetricService#listMonitoredResourceDescriptors}.
                 * @param error Error, if any
                 * @param [response] ListMonitoredResourceDescriptorsResponse
                 */
                type ListMonitoredResourceDescriptorsCallback = (error: (Error|null), response?: google.monitoring.v3.ListMonitoredResourceDescriptorsResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.MetricService#getMonitoredResourceDescriptor}.
                 * @param error Error, if any
                 * @param [response] MonitoredResourceDescriptor
                 */
                type GetMonitoredResourceDescriptorCallback = (error: (Error|null), response?: google.api.MonitoredResourceDescriptor) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.MetricService#listMetricDescriptors}.
                 * @param error Error, if any
                 * @param [response] ListMetricDescriptorsResponse
                 */
                type ListMetricDescriptorsCallback = (error: (Error|null), response?: google.monitoring.v3.ListMetricDescriptorsResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.MetricService#getMetricDescriptor}.
                 * @param error Error, if any
                 * @param [response] MetricDescriptor
                 */
                type GetMetricDescriptorCallback = (error: (Error|null), response?: google.api.MetricDescriptor) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.MetricService#createMetricDescriptor}.
                 * @param error Error, if any
                 * @param [response] MetricDescriptor
                 */
                type CreateMetricDescriptorCallback = (error: (Error|null), response?: google.api.MetricDescriptor) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.MetricService#deleteMetricDescriptor}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteMetricDescriptorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.MetricService#listTimeSeries}.
                 * @param error Error, if any
                 * @param [response] ListTimeSeriesResponse
                 */
                type ListTimeSeriesCallback = (error: (Error|null), response?: google.monitoring.v3.ListTimeSeriesResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.MetricService#createTimeSeries}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type CreateTimeSeriesCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** Properties of a ListMonitoredResourceDescriptorsRequest. */
            interface IListMonitoredResourceDescriptorsRequest {

                /** ListMonitoredResourceDescriptorsRequest name */
                name?: (string|null);

                /** ListMonitoredResourceDescriptorsRequest filter */
                filter?: (string|null);

                /** ListMonitoredResourceDescriptorsRequest pageSize */
                pageSize?: (number|null);

                /** ListMonitoredResourceDescriptorsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListMonitoredResourceDescriptorsRequest. */
            class ListMonitoredResourceDescriptorsRequest implements IListMonitoredResourceDescriptorsRequest {

                /**
                 * Constructs a new ListMonitoredResourceDescriptorsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListMonitoredResourceDescriptorsRequest);

                /** ListMonitoredResourceDescriptorsRequest name. */
                public name: string;

                /** ListMonitoredResourceDescriptorsRequest filter. */
                public filter: string;

                /** ListMonitoredResourceDescriptorsRequest pageSize. */
                public pageSize: number;

                /** ListMonitoredResourceDescriptorsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListMonitoredResourceDescriptorsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMonitoredResourceDescriptorsRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListMonitoredResourceDescriptorsRequest): google.monitoring.v3.ListMonitoredResourceDescriptorsRequest;

                /**
                 * Encodes the specified ListMonitoredResourceDescriptorsRequest message. Does not implicitly {@link google.monitoring.v3.ListMonitoredResourceDescriptorsRequest.verify|verify} messages.
                 * @param message ListMonitoredResourceDescriptorsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListMonitoredResourceDescriptorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMonitoredResourceDescriptorsRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListMonitoredResourceDescriptorsRequest.verify|verify} messages.
                 * @param message ListMonitoredResourceDescriptorsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListMonitoredResourceDescriptorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMonitoredResourceDescriptorsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMonitoredResourceDescriptorsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListMonitoredResourceDescriptorsRequest;

                /**
                 * Decodes a ListMonitoredResourceDescriptorsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMonitoredResourceDescriptorsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListMonitoredResourceDescriptorsRequest;

                /**
                 * Verifies a ListMonitoredResourceDescriptorsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMonitoredResourceDescriptorsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMonitoredResourceDescriptorsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListMonitoredResourceDescriptorsRequest;

                /**
                 * Creates a plain object from a ListMonitoredResourceDescriptorsRequest message. Also converts values to other types if specified.
                 * @param message ListMonitoredResourceDescriptorsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListMonitoredResourceDescriptorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMonitoredResourceDescriptorsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListMonitoredResourceDescriptorsResponse. */
            interface IListMonitoredResourceDescriptorsResponse {

                /** ListMonitoredResourceDescriptorsResponse resourceDescriptors */
                resourceDescriptors?: (google.api.IMonitoredResourceDescriptor[]|null);

                /** ListMonitoredResourceDescriptorsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListMonitoredResourceDescriptorsResponse. */
            class ListMonitoredResourceDescriptorsResponse implements IListMonitoredResourceDescriptorsResponse {

                /**
                 * Constructs a new ListMonitoredResourceDescriptorsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListMonitoredResourceDescriptorsResponse);

                /** ListMonitoredResourceDescriptorsResponse resourceDescriptors. */
                public resourceDescriptors: google.api.IMonitoredResourceDescriptor[];

                /** ListMonitoredResourceDescriptorsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListMonitoredResourceDescriptorsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMonitoredResourceDescriptorsResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListMonitoredResourceDescriptorsResponse): google.monitoring.v3.ListMonitoredResourceDescriptorsResponse;

                /**
                 * Encodes the specified ListMonitoredResourceDescriptorsResponse message. Does not implicitly {@link google.monitoring.v3.ListMonitoredResourceDescriptorsResponse.verify|verify} messages.
                 * @param message ListMonitoredResourceDescriptorsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListMonitoredResourceDescriptorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMonitoredResourceDescriptorsResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListMonitoredResourceDescriptorsResponse.verify|verify} messages.
                 * @param message ListMonitoredResourceDescriptorsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListMonitoredResourceDescriptorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMonitoredResourceDescriptorsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMonitoredResourceDescriptorsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListMonitoredResourceDescriptorsResponse;

                /**
                 * Decodes a ListMonitoredResourceDescriptorsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMonitoredResourceDescriptorsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListMonitoredResourceDescriptorsResponse;

                /**
                 * Verifies a ListMonitoredResourceDescriptorsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMonitoredResourceDescriptorsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMonitoredResourceDescriptorsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListMonitoredResourceDescriptorsResponse;

                /**
                 * Creates a plain object from a ListMonitoredResourceDescriptorsResponse message. Also converts values to other types if specified.
                 * @param message ListMonitoredResourceDescriptorsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListMonitoredResourceDescriptorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMonitoredResourceDescriptorsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetMonitoredResourceDescriptorRequest. */
            interface IGetMonitoredResourceDescriptorRequest {

                /** GetMonitoredResourceDescriptorRequest name */
                name?: (string|null);
            }

            /** Represents a GetMonitoredResourceDescriptorRequest. */
            class GetMonitoredResourceDescriptorRequest implements IGetMonitoredResourceDescriptorRequest {

                /**
                 * Constructs a new GetMonitoredResourceDescriptorRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetMonitoredResourceDescriptorRequest);

                /** GetMonitoredResourceDescriptorRequest name. */
                public name: string;

                /**
                 * Creates a new GetMonitoredResourceDescriptorRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetMonitoredResourceDescriptorRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetMonitoredResourceDescriptorRequest): google.monitoring.v3.GetMonitoredResourceDescriptorRequest;

                /**
                 * Encodes the specified GetMonitoredResourceDescriptorRequest message. Does not implicitly {@link google.monitoring.v3.GetMonitoredResourceDescriptorRequest.verify|verify} messages.
                 * @param message GetMonitoredResourceDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetMonitoredResourceDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetMonitoredResourceDescriptorRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetMonitoredResourceDescriptorRequest.verify|verify} messages.
                 * @param message GetMonitoredResourceDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetMonitoredResourceDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetMonitoredResourceDescriptorRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetMonitoredResourceDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetMonitoredResourceDescriptorRequest;

                /**
                 * Decodes a GetMonitoredResourceDescriptorRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetMonitoredResourceDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetMonitoredResourceDescriptorRequest;

                /**
                 * Verifies a GetMonitoredResourceDescriptorRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetMonitoredResourceDescriptorRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetMonitoredResourceDescriptorRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetMonitoredResourceDescriptorRequest;

                /**
                 * Creates a plain object from a GetMonitoredResourceDescriptorRequest message. Also converts values to other types if specified.
                 * @param message GetMonitoredResourceDescriptorRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetMonitoredResourceDescriptorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetMonitoredResourceDescriptorRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListMetricDescriptorsRequest. */
            interface IListMetricDescriptorsRequest {

                /** ListMetricDescriptorsRequest name */
                name?: (string|null);

                /** ListMetricDescriptorsRequest filter */
                filter?: (string|null);

                /** ListMetricDescriptorsRequest pageSize */
                pageSize?: (number|null);

                /** ListMetricDescriptorsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListMetricDescriptorsRequest. */
            class ListMetricDescriptorsRequest implements IListMetricDescriptorsRequest {

                /**
                 * Constructs a new ListMetricDescriptorsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListMetricDescriptorsRequest);

                /** ListMetricDescriptorsRequest name. */
                public name: string;

                /** ListMetricDescriptorsRequest filter. */
                public filter: string;

                /** ListMetricDescriptorsRequest pageSize. */
                public pageSize: number;

                /** ListMetricDescriptorsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListMetricDescriptorsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMetricDescriptorsRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListMetricDescriptorsRequest): google.monitoring.v3.ListMetricDescriptorsRequest;

                /**
                 * Encodes the specified ListMetricDescriptorsRequest message. Does not implicitly {@link google.monitoring.v3.ListMetricDescriptorsRequest.verify|verify} messages.
                 * @param message ListMetricDescriptorsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListMetricDescriptorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMetricDescriptorsRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListMetricDescriptorsRequest.verify|verify} messages.
                 * @param message ListMetricDescriptorsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListMetricDescriptorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMetricDescriptorsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMetricDescriptorsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListMetricDescriptorsRequest;

                /**
                 * Decodes a ListMetricDescriptorsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMetricDescriptorsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListMetricDescriptorsRequest;

                /**
                 * Verifies a ListMetricDescriptorsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMetricDescriptorsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMetricDescriptorsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListMetricDescriptorsRequest;

                /**
                 * Creates a plain object from a ListMetricDescriptorsRequest message. Also converts values to other types if specified.
                 * @param message ListMetricDescriptorsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListMetricDescriptorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMetricDescriptorsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListMetricDescriptorsResponse. */
            interface IListMetricDescriptorsResponse {

                /** ListMetricDescriptorsResponse metricDescriptors */
                metricDescriptors?: (google.api.IMetricDescriptor[]|null);

                /** ListMetricDescriptorsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListMetricDescriptorsResponse. */
            class ListMetricDescriptorsResponse implements IListMetricDescriptorsResponse {

                /**
                 * Constructs a new ListMetricDescriptorsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListMetricDescriptorsResponse);

                /** ListMetricDescriptorsResponse metricDescriptors. */
                public metricDescriptors: google.api.IMetricDescriptor[];

                /** ListMetricDescriptorsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListMetricDescriptorsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMetricDescriptorsResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListMetricDescriptorsResponse): google.monitoring.v3.ListMetricDescriptorsResponse;

                /**
                 * Encodes the specified ListMetricDescriptorsResponse message. Does not implicitly {@link google.monitoring.v3.ListMetricDescriptorsResponse.verify|verify} messages.
                 * @param message ListMetricDescriptorsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListMetricDescriptorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMetricDescriptorsResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListMetricDescriptorsResponse.verify|verify} messages.
                 * @param message ListMetricDescriptorsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListMetricDescriptorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMetricDescriptorsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMetricDescriptorsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListMetricDescriptorsResponse;

                /**
                 * Decodes a ListMetricDescriptorsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMetricDescriptorsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListMetricDescriptorsResponse;

                /**
                 * Verifies a ListMetricDescriptorsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMetricDescriptorsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMetricDescriptorsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListMetricDescriptorsResponse;

                /**
                 * Creates a plain object from a ListMetricDescriptorsResponse message. Also converts values to other types if specified.
                 * @param message ListMetricDescriptorsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListMetricDescriptorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMetricDescriptorsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetMetricDescriptorRequest. */
            interface IGetMetricDescriptorRequest {

                /** GetMetricDescriptorRequest name */
                name?: (string|null);
            }

            /** Represents a GetMetricDescriptorRequest. */
            class GetMetricDescriptorRequest implements IGetMetricDescriptorRequest {

                /**
                 * Constructs a new GetMetricDescriptorRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetMetricDescriptorRequest);

                /** GetMetricDescriptorRequest name. */
                public name: string;

                /**
                 * Creates a new GetMetricDescriptorRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetMetricDescriptorRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetMetricDescriptorRequest): google.monitoring.v3.GetMetricDescriptorRequest;

                /**
                 * Encodes the specified GetMetricDescriptorRequest message. Does not implicitly {@link google.monitoring.v3.GetMetricDescriptorRequest.verify|verify} messages.
                 * @param message GetMetricDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetMetricDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetMetricDescriptorRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetMetricDescriptorRequest.verify|verify} messages.
                 * @param message GetMetricDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetMetricDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetMetricDescriptorRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetMetricDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetMetricDescriptorRequest;

                /**
                 * Decodes a GetMetricDescriptorRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetMetricDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetMetricDescriptorRequest;

                /**
                 * Verifies a GetMetricDescriptorRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetMetricDescriptorRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetMetricDescriptorRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetMetricDescriptorRequest;

                /**
                 * Creates a plain object from a GetMetricDescriptorRequest message. Also converts values to other types if specified.
                 * @param message GetMetricDescriptorRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetMetricDescriptorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetMetricDescriptorRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateMetricDescriptorRequest. */
            interface ICreateMetricDescriptorRequest {

                /** CreateMetricDescriptorRequest name */
                name?: (string|null);

                /** CreateMetricDescriptorRequest metricDescriptor */
                metricDescriptor?: (google.api.IMetricDescriptor|null);
            }

            /** Represents a CreateMetricDescriptorRequest. */
            class CreateMetricDescriptorRequest implements ICreateMetricDescriptorRequest {

                /**
                 * Constructs a new CreateMetricDescriptorRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateMetricDescriptorRequest);

                /** CreateMetricDescriptorRequest name. */
                public name: string;

                /** CreateMetricDescriptorRequest metricDescriptor. */
                public metricDescriptor?: (google.api.IMetricDescriptor|null);

                /**
                 * Creates a new CreateMetricDescriptorRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateMetricDescriptorRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateMetricDescriptorRequest): google.monitoring.v3.CreateMetricDescriptorRequest;

                /**
                 * Encodes the specified CreateMetricDescriptorRequest message. Does not implicitly {@link google.monitoring.v3.CreateMetricDescriptorRequest.verify|verify} messages.
                 * @param message CreateMetricDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateMetricDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateMetricDescriptorRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateMetricDescriptorRequest.verify|verify} messages.
                 * @param message CreateMetricDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateMetricDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateMetricDescriptorRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateMetricDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateMetricDescriptorRequest;

                /**
                 * Decodes a CreateMetricDescriptorRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateMetricDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateMetricDescriptorRequest;

                /**
                 * Verifies a CreateMetricDescriptorRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateMetricDescriptorRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateMetricDescriptorRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateMetricDescriptorRequest;

                /**
                 * Creates a plain object from a CreateMetricDescriptorRequest message. Also converts values to other types if specified.
                 * @param message CreateMetricDescriptorRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateMetricDescriptorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateMetricDescriptorRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteMetricDescriptorRequest. */
            interface IDeleteMetricDescriptorRequest {

                /** DeleteMetricDescriptorRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteMetricDescriptorRequest. */
            class DeleteMetricDescriptorRequest implements IDeleteMetricDescriptorRequest {

                /**
                 * Constructs a new DeleteMetricDescriptorRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IDeleteMetricDescriptorRequest);

                /** DeleteMetricDescriptorRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteMetricDescriptorRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteMetricDescriptorRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IDeleteMetricDescriptorRequest): google.monitoring.v3.DeleteMetricDescriptorRequest;

                /**
                 * Encodes the specified DeleteMetricDescriptorRequest message. Does not implicitly {@link google.monitoring.v3.DeleteMetricDescriptorRequest.verify|verify} messages.
                 * @param message DeleteMetricDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IDeleteMetricDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteMetricDescriptorRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.DeleteMetricDescriptorRequest.verify|verify} messages.
                 * @param message DeleteMetricDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IDeleteMetricDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteMetricDescriptorRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteMetricDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.DeleteMetricDescriptorRequest;

                /**
                 * Decodes a DeleteMetricDescriptorRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteMetricDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.DeleteMetricDescriptorRequest;

                /**
                 * Verifies a DeleteMetricDescriptorRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteMetricDescriptorRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteMetricDescriptorRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.DeleteMetricDescriptorRequest;

                /**
                 * Creates a plain object from a DeleteMetricDescriptorRequest message. Also converts values to other types if specified.
                 * @param message DeleteMetricDescriptorRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.DeleteMetricDescriptorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteMetricDescriptorRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListTimeSeriesRequest. */
            interface IListTimeSeriesRequest {

                /** ListTimeSeriesRequest name */
                name?: (string|null);

                /** ListTimeSeriesRequest filter */
                filter?: (string|null);

                /** ListTimeSeriesRequest interval */
                interval?: (google.monitoring.v3.ITimeInterval|null);

                /** ListTimeSeriesRequest aggregation */
                aggregation?: (google.monitoring.v3.IAggregation|null);

                /** ListTimeSeriesRequest orderBy */
                orderBy?: (string|null);

                /** ListTimeSeriesRequest view */
                view?: (google.monitoring.v3.ListTimeSeriesRequest.TimeSeriesView|keyof typeof google.monitoring.v3.ListTimeSeriesRequest.TimeSeriesView|null);

                /** ListTimeSeriesRequest pageSize */
                pageSize?: (number|null);

                /** ListTimeSeriesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListTimeSeriesRequest. */
            class ListTimeSeriesRequest implements IListTimeSeriesRequest {

                /**
                 * Constructs a new ListTimeSeriesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListTimeSeriesRequest);

                /** ListTimeSeriesRequest name. */
                public name: string;

                /** ListTimeSeriesRequest filter. */
                public filter: string;

                /** ListTimeSeriesRequest interval. */
                public interval?: (google.monitoring.v3.ITimeInterval|null);

                /** ListTimeSeriesRequest aggregation. */
                public aggregation?: (google.monitoring.v3.IAggregation|null);

                /** ListTimeSeriesRequest orderBy. */
                public orderBy: string;

                /** ListTimeSeriesRequest view. */
                public view: (google.monitoring.v3.ListTimeSeriesRequest.TimeSeriesView|keyof typeof google.monitoring.v3.ListTimeSeriesRequest.TimeSeriesView);

                /** ListTimeSeriesRequest pageSize. */
                public pageSize: number;

                /** ListTimeSeriesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListTimeSeriesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListTimeSeriesRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListTimeSeriesRequest): google.monitoring.v3.ListTimeSeriesRequest;

                /**
                 * Encodes the specified ListTimeSeriesRequest message. Does not implicitly {@link google.monitoring.v3.ListTimeSeriesRequest.verify|verify} messages.
                 * @param message ListTimeSeriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListTimeSeriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListTimeSeriesRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListTimeSeriesRequest.verify|verify} messages.
                 * @param message ListTimeSeriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListTimeSeriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListTimeSeriesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListTimeSeriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListTimeSeriesRequest;

                /**
                 * Decodes a ListTimeSeriesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListTimeSeriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListTimeSeriesRequest;

                /**
                 * Verifies a ListTimeSeriesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListTimeSeriesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListTimeSeriesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListTimeSeriesRequest;

                /**
                 * Creates a plain object from a ListTimeSeriesRequest message. Also converts values to other types if specified.
                 * @param message ListTimeSeriesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListTimeSeriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListTimeSeriesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ListTimeSeriesRequest {

                /** TimeSeriesView enum. */
                enum TimeSeriesView {
                    FULL = 0,
                    HEADERS = 1
                }
            }

            /** Properties of a ListTimeSeriesResponse. */
            interface IListTimeSeriesResponse {

                /** ListTimeSeriesResponse timeSeries */
                timeSeries?: (google.monitoring.v3.ITimeSeries[]|null);

                /** ListTimeSeriesResponse nextPageToken */
                nextPageToken?: (string|null);

                /** ListTimeSeriesResponse executionErrors */
                executionErrors?: (google.rpc.IStatus[]|null);
            }

            /** Represents a ListTimeSeriesResponse. */
            class ListTimeSeriesResponse implements IListTimeSeriesResponse {

                /**
                 * Constructs a new ListTimeSeriesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListTimeSeriesResponse);

                /** ListTimeSeriesResponse timeSeries. */
                public timeSeries: google.monitoring.v3.ITimeSeries[];

                /** ListTimeSeriesResponse nextPageToken. */
                public nextPageToken: string;

                /** ListTimeSeriesResponse executionErrors. */
                public executionErrors: google.rpc.IStatus[];

                /**
                 * Creates a new ListTimeSeriesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListTimeSeriesResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListTimeSeriesResponse): google.monitoring.v3.ListTimeSeriesResponse;

                /**
                 * Encodes the specified ListTimeSeriesResponse message. Does not implicitly {@link google.monitoring.v3.ListTimeSeriesResponse.verify|verify} messages.
                 * @param message ListTimeSeriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListTimeSeriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListTimeSeriesResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListTimeSeriesResponse.verify|verify} messages.
                 * @param message ListTimeSeriesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListTimeSeriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListTimeSeriesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListTimeSeriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListTimeSeriesResponse;

                /**
                 * Decodes a ListTimeSeriesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListTimeSeriesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListTimeSeriesResponse;

                /**
                 * Verifies a ListTimeSeriesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListTimeSeriesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListTimeSeriesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListTimeSeriesResponse;

                /**
                 * Creates a plain object from a ListTimeSeriesResponse message. Also converts values to other types if specified.
                 * @param message ListTimeSeriesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListTimeSeriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListTimeSeriesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateTimeSeriesRequest. */
            interface ICreateTimeSeriesRequest {

                /** CreateTimeSeriesRequest name */
                name?: (string|null);

                /** CreateTimeSeriesRequest timeSeries */
                timeSeries?: (google.monitoring.v3.ITimeSeries[]|null);
            }

            /** Represents a CreateTimeSeriesRequest. */
            class CreateTimeSeriesRequest implements ICreateTimeSeriesRequest {

                /**
                 * Constructs a new CreateTimeSeriesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateTimeSeriesRequest);

                /** CreateTimeSeriesRequest name. */
                public name: string;

                /** CreateTimeSeriesRequest timeSeries. */
                public timeSeries: google.monitoring.v3.ITimeSeries[];

                /**
                 * Creates a new CreateTimeSeriesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateTimeSeriesRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateTimeSeriesRequest): google.monitoring.v3.CreateTimeSeriesRequest;

                /**
                 * Encodes the specified CreateTimeSeriesRequest message. Does not implicitly {@link google.monitoring.v3.CreateTimeSeriesRequest.verify|verify} messages.
                 * @param message CreateTimeSeriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateTimeSeriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateTimeSeriesRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateTimeSeriesRequest.verify|verify} messages.
                 * @param message CreateTimeSeriesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateTimeSeriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateTimeSeriesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateTimeSeriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateTimeSeriesRequest;

                /**
                 * Decodes a CreateTimeSeriesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateTimeSeriesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateTimeSeriesRequest;

                /**
                 * Verifies a CreateTimeSeriesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateTimeSeriesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateTimeSeriesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateTimeSeriesRequest;

                /**
                 * Creates a plain object from a CreateTimeSeriesRequest message. Also converts values to other types if specified.
                 * @param message CreateTimeSeriesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateTimeSeriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateTimeSeriesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateTimeSeriesError. */
            interface ICreateTimeSeriesError {

                /** CreateTimeSeriesError timeSeries */
                timeSeries?: (google.monitoring.v3.ITimeSeries|null);

                /** CreateTimeSeriesError status */
                status?: (google.rpc.IStatus|null);
            }

            /** Represents a CreateTimeSeriesError. */
            class CreateTimeSeriesError implements ICreateTimeSeriesError {

                /**
                 * Constructs a new CreateTimeSeriesError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateTimeSeriesError);

                /** CreateTimeSeriesError timeSeries. */
                public timeSeries?: (google.monitoring.v3.ITimeSeries|null);

                /** CreateTimeSeriesError status. */
                public status?: (google.rpc.IStatus|null);

                /**
                 * Creates a new CreateTimeSeriesError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateTimeSeriesError instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateTimeSeriesError): google.monitoring.v3.CreateTimeSeriesError;

                /**
                 * Encodes the specified CreateTimeSeriesError message. Does not implicitly {@link google.monitoring.v3.CreateTimeSeriesError.verify|verify} messages.
                 * @param message CreateTimeSeriesError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateTimeSeriesError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateTimeSeriesError message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateTimeSeriesError.verify|verify} messages.
                 * @param message CreateTimeSeriesError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateTimeSeriesError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateTimeSeriesError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateTimeSeriesError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateTimeSeriesError;

                /**
                 * Decodes a CreateTimeSeriesError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateTimeSeriesError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateTimeSeriesError;

                /**
                 * Verifies a CreateTimeSeriesError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateTimeSeriesError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateTimeSeriesError
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateTimeSeriesError;

                /**
                 * Creates a plain object from a CreateTimeSeriesError message. Also converts values to other types if specified.
                 * @param message CreateTimeSeriesError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateTimeSeriesError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateTimeSeriesError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateTimeSeriesSummary. */
            interface ICreateTimeSeriesSummary {

                /** CreateTimeSeriesSummary totalPointCount */
                totalPointCount?: (number|null);

                /** CreateTimeSeriesSummary successPointCount */
                successPointCount?: (number|null);

                /** CreateTimeSeriesSummary errors */
                errors?: (google.monitoring.v3.CreateTimeSeriesSummary.IError[]|null);
            }

            /** Represents a CreateTimeSeriesSummary. */
            class CreateTimeSeriesSummary implements ICreateTimeSeriesSummary {

                /**
                 * Constructs a new CreateTimeSeriesSummary.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateTimeSeriesSummary);

                /** CreateTimeSeriesSummary totalPointCount. */
                public totalPointCount: number;

                /** CreateTimeSeriesSummary successPointCount. */
                public successPointCount: number;

                /** CreateTimeSeriesSummary errors. */
                public errors: google.monitoring.v3.CreateTimeSeriesSummary.IError[];

                /**
                 * Creates a new CreateTimeSeriesSummary instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateTimeSeriesSummary instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateTimeSeriesSummary): google.monitoring.v3.CreateTimeSeriesSummary;

                /**
                 * Encodes the specified CreateTimeSeriesSummary message. Does not implicitly {@link google.monitoring.v3.CreateTimeSeriesSummary.verify|verify} messages.
                 * @param message CreateTimeSeriesSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateTimeSeriesSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateTimeSeriesSummary message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateTimeSeriesSummary.verify|verify} messages.
                 * @param message CreateTimeSeriesSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateTimeSeriesSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateTimeSeriesSummary message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateTimeSeriesSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateTimeSeriesSummary;

                /**
                 * Decodes a CreateTimeSeriesSummary message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateTimeSeriesSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateTimeSeriesSummary;

                /**
                 * Verifies a CreateTimeSeriesSummary message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateTimeSeriesSummary message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateTimeSeriesSummary
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateTimeSeriesSummary;

                /**
                 * Creates a plain object from a CreateTimeSeriesSummary message. Also converts values to other types if specified.
                 * @param message CreateTimeSeriesSummary
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateTimeSeriesSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateTimeSeriesSummary to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace CreateTimeSeriesSummary {

                /** Properties of an Error. */
                interface IError {

                    /** Error status */
                    status?: (google.rpc.IStatus|null);

                    /** Error pointCount */
                    pointCount?: (number|null);
                }

                /** Represents an Error. */
                class Error implements IError {

                    /**
                     * Constructs a new Error.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.CreateTimeSeriesSummary.IError);

                    /** Error status. */
                    public status?: (google.rpc.IStatus|null);

                    /** Error pointCount. */
                    public pointCount: number;

                    /**
                     * Creates a new Error instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Error instance
                     */
                    public static create(properties?: google.monitoring.v3.CreateTimeSeriesSummary.IError): google.monitoring.v3.CreateTimeSeriesSummary.Error;

                    /**
                     * Encodes the specified Error message. Does not implicitly {@link google.monitoring.v3.CreateTimeSeriesSummary.Error.verify|verify} messages.
                     * @param message Error message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.CreateTimeSeriesSummary.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Error message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateTimeSeriesSummary.Error.verify|verify} messages.
                     * @param message Error message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.CreateTimeSeriesSummary.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Error message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateTimeSeriesSummary.Error;

                    /**
                     * Decodes an Error message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateTimeSeriesSummary.Error;

                    /**
                     * Verifies an Error message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Error message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Error
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateTimeSeriesSummary.Error;

                    /**
                     * Creates a plain object from an Error message. Also converts values to other types if specified.
                     * @param message Error
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.CreateTimeSeriesSummary.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Error to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Point. */
            interface IPoint {

                /** Point interval */
                interval?: (google.monitoring.v3.ITimeInterval|null);

                /** Point value */
                value?: (google.monitoring.v3.ITypedValue|null);
            }

            /** Represents a Point. */
            class Point implements IPoint {

                /**
                 * Constructs a new Point.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IPoint);

                /** Point interval. */
                public interval?: (google.monitoring.v3.ITimeInterval|null);

                /** Point value. */
                public value?: (google.monitoring.v3.ITypedValue|null);

                /**
                 * Creates a new Point instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Point instance
                 */
                public static create(properties?: google.monitoring.v3.IPoint): google.monitoring.v3.Point;

                /**
                 * Encodes the specified Point message. Does not implicitly {@link google.monitoring.v3.Point.verify|verify} messages.
                 * @param message Point message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Point message, length delimited. Does not implicitly {@link google.monitoring.v3.Point.verify|verify} messages.
                 * @param message Point message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Point message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Point
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Point;

                /**
                 * Decodes a Point message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Point
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Point;

                /**
                 * Verifies a Point message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Point message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Point
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Point;

                /**
                 * Creates a plain object from a Point message. Also converts values to other types if specified.
                 * @param message Point
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Point to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TimeSeries. */
            interface ITimeSeries {

                /** TimeSeries metric */
                metric?: (google.api.IMetric|null);

                /** TimeSeries resource */
                resource?: (google.api.IMonitoredResource|null);

                /** TimeSeries metadata */
                metadata?: (google.api.IMonitoredResourceMetadata|null);

                /** TimeSeries metricKind */
                metricKind?: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind|null);

                /** TimeSeries valueType */
                valueType?: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType|null);

                /** TimeSeries points */
                points?: (google.monitoring.v3.IPoint[]|null);
            }

            /** Represents a TimeSeries. */
            class TimeSeries implements ITimeSeries {

                /**
                 * Constructs a new TimeSeries.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ITimeSeries);

                /** TimeSeries metric. */
                public metric?: (google.api.IMetric|null);

                /** TimeSeries resource. */
                public resource?: (google.api.IMonitoredResource|null);

                /** TimeSeries metadata. */
                public metadata?: (google.api.IMonitoredResourceMetadata|null);

                /** TimeSeries metricKind. */
                public metricKind: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind);

                /** TimeSeries valueType. */
                public valueType: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType);

                /** TimeSeries points. */
                public points: google.monitoring.v3.IPoint[];

                /**
                 * Creates a new TimeSeries instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeSeries instance
                 */
                public static create(properties?: google.monitoring.v3.ITimeSeries): google.monitoring.v3.TimeSeries;

                /**
                 * Encodes the specified TimeSeries message. Does not implicitly {@link google.monitoring.v3.TimeSeries.verify|verify} messages.
                 * @param message TimeSeries message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ITimeSeries, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeSeries message, length delimited. Does not implicitly {@link google.monitoring.v3.TimeSeries.verify|verify} messages.
                 * @param message TimeSeries message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ITimeSeries, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeSeries message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeSeries
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.TimeSeries;

                /**
                 * Decodes a TimeSeries message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeSeries
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.TimeSeries;

                /**
                 * Verifies a TimeSeries message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeSeries message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeSeries
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.TimeSeries;

                /**
                 * Creates a plain object from a TimeSeries message. Also converts values to other types if specified.
                 * @param message TimeSeries
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.TimeSeries, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeSeries to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents a NotificationChannelService */
            class NotificationChannelService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new NotificationChannelService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new NotificationChannelService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NotificationChannelService;

                /**
                 * Calls ListNotificationChannelDescriptors.
                 * @param request ListNotificationChannelDescriptorsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListNotificationChannelDescriptorsResponse
                 */
                public listNotificationChannelDescriptors(request: google.monitoring.v3.IListNotificationChannelDescriptorsRequest, callback: google.monitoring.v3.NotificationChannelService.ListNotificationChannelDescriptorsCallback): void;

                /**
                 * Calls ListNotificationChannelDescriptors.
                 * @param request ListNotificationChannelDescriptorsRequest message or plain object
                 * @returns Promise
                 */
                public listNotificationChannelDescriptors(request: google.monitoring.v3.IListNotificationChannelDescriptorsRequest): Promise<google.monitoring.v3.ListNotificationChannelDescriptorsResponse>;

                /**
                 * Calls GetNotificationChannelDescriptor.
                 * @param request GetNotificationChannelDescriptorRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and NotificationChannelDescriptor
                 */
                public getNotificationChannelDescriptor(request: google.monitoring.v3.IGetNotificationChannelDescriptorRequest, callback: google.monitoring.v3.NotificationChannelService.GetNotificationChannelDescriptorCallback): void;

                /**
                 * Calls GetNotificationChannelDescriptor.
                 * @param request GetNotificationChannelDescriptorRequest message or plain object
                 * @returns Promise
                 */
                public getNotificationChannelDescriptor(request: google.monitoring.v3.IGetNotificationChannelDescriptorRequest): Promise<google.monitoring.v3.NotificationChannelDescriptor>;

                /**
                 * Calls ListNotificationChannels.
                 * @param request ListNotificationChannelsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListNotificationChannelsResponse
                 */
                public listNotificationChannels(request: google.monitoring.v3.IListNotificationChannelsRequest, callback: google.monitoring.v3.NotificationChannelService.ListNotificationChannelsCallback): void;

                /**
                 * Calls ListNotificationChannels.
                 * @param request ListNotificationChannelsRequest message or plain object
                 * @returns Promise
                 */
                public listNotificationChannels(request: google.monitoring.v3.IListNotificationChannelsRequest): Promise<google.monitoring.v3.ListNotificationChannelsResponse>;

                /**
                 * Calls GetNotificationChannel.
                 * @param request GetNotificationChannelRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and NotificationChannel
                 */
                public getNotificationChannel(request: google.monitoring.v3.IGetNotificationChannelRequest, callback: google.monitoring.v3.NotificationChannelService.GetNotificationChannelCallback): void;

                /**
                 * Calls GetNotificationChannel.
                 * @param request GetNotificationChannelRequest message or plain object
                 * @returns Promise
                 */
                public getNotificationChannel(request: google.monitoring.v3.IGetNotificationChannelRequest): Promise<google.monitoring.v3.NotificationChannel>;

                /**
                 * Calls CreateNotificationChannel.
                 * @param request CreateNotificationChannelRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and NotificationChannel
                 */
                public createNotificationChannel(request: google.monitoring.v3.ICreateNotificationChannelRequest, callback: google.monitoring.v3.NotificationChannelService.CreateNotificationChannelCallback): void;

                /**
                 * Calls CreateNotificationChannel.
                 * @param request CreateNotificationChannelRequest message or plain object
                 * @returns Promise
                 */
                public createNotificationChannel(request: google.monitoring.v3.ICreateNotificationChannelRequest): Promise<google.monitoring.v3.NotificationChannel>;

                /**
                 * Calls UpdateNotificationChannel.
                 * @param request UpdateNotificationChannelRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and NotificationChannel
                 */
                public updateNotificationChannel(request: google.monitoring.v3.IUpdateNotificationChannelRequest, callback: google.monitoring.v3.NotificationChannelService.UpdateNotificationChannelCallback): void;

                /**
                 * Calls UpdateNotificationChannel.
                 * @param request UpdateNotificationChannelRequest message or plain object
                 * @returns Promise
                 */
                public updateNotificationChannel(request: google.monitoring.v3.IUpdateNotificationChannelRequest): Promise<google.monitoring.v3.NotificationChannel>;

                /**
                 * Calls DeleteNotificationChannel.
                 * @param request DeleteNotificationChannelRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteNotificationChannel(request: google.monitoring.v3.IDeleteNotificationChannelRequest, callback: google.monitoring.v3.NotificationChannelService.DeleteNotificationChannelCallback): void;

                /**
                 * Calls DeleteNotificationChannel.
                 * @param request DeleteNotificationChannelRequest message or plain object
                 * @returns Promise
                 */
                public deleteNotificationChannel(request: google.monitoring.v3.IDeleteNotificationChannelRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls SendNotificationChannelVerificationCode.
                 * @param request SendNotificationChannelVerificationCodeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public sendNotificationChannelVerificationCode(request: google.monitoring.v3.ISendNotificationChannelVerificationCodeRequest, callback: google.monitoring.v3.NotificationChannelService.SendNotificationChannelVerificationCodeCallback): void;

                /**
                 * Calls SendNotificationChannelVerificationCode.
                 * @param request SendNotificationChannelVerificationCodeRequest message or plain object
                 * @returns Promise
                 */
                public sendNotificationChannelVerificationCode(request: google.monitoring.v3.ISendNotificationChannelVerificationCodeRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls GetNotificationChannelVerificationCode.
                 * @param request GetNotificationChannelVerificationCodeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GetNotificationChannelVerificationCodeResponse
                 */
                public getNotificationChannelVerificationCode(request: google.monitoring.v3.IGetNotificationChannelVerificationCodeRequest, callback: google.monitoring.v3.NotificationChannelService.GetNotificationChannelVerificationCodeCallback): void;

                /**
                 * Calls GetNotificationChannelVerificationCode.
                 * @param request GetNotificationChannelVerificationCodeRequest message or plain object
                 * @returns Promise
                 */
                public getNotificationChannelVerificationCode(request: google.monitoring.v3.IGetNotificationChannelVerificationCodeRequest): Promise<google.monitoring.v3.GetNotificationChannelVerificationCodeResponse>;

                /**
                 * Calls VerifyNotificationChannel.
                 * @param request VerifyNotificationChannelRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and NotificationChannel
                 */
                public verifyNotificationChannel(request: google.monitoring.v3.IVerifyNotificationChannelRequest, callback: google.monitoring.v3.NotificationChannelService.VerifyNotificationChannelCallback): void;

                /**
                 * Calls VerifyNotificationChannel.
                 * @param request VerifyNotificationChannelRequest message or plain object
                 * @returns Promise
                 */
                public verifyNotificationChannel(request: google.monitoring.v3.IVerifyNotificationChannelRequest): Promise<google.monitoring.v3.NotificationChannel>;
            }

            namespace NotificationChannelService {

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#listNotificationChannelDescriptors}.
                 * @param error Error, if any
                 * @param [response] ListNotificationChannelDescriptorsResponse
                 */
                type ListNotificationChannelDescriptorsCallback = (error: (Error|null), response?: google.monitoring.v3.ListNotificationChannelDescriptorsResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#getNotificationChannelDescriptor}.
                 * @param error Error, if any
                 * @param [response] NotificationChannelDescriptor
                 */
                type GetNotificationChannelDescriptorCallback = (error: (Error|null), response?: google.monitoring.v3.NotificationChannelDescriptor) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#listNotificationChannels}.
                 * @param error Error, if any
                 * @param [response] ListNotificationChannelsResponse
                 */
                type ListNotificationChannelsCallback = (error: (Error|null), response?: google.monitoring.v3.ListNotificationChannelsResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#getNotificationChannel}.
                 * @param error Error, if any
                 * @param [response] NotificationChannel
                 */
                type GetNotificationChannelCallback = (error: (Error|null), response?: google.monitoring.v3.NotificationChannel) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#createNotificationChannel}.
                 * @param error Error, if any
                 * @param [response] NotificationChannel
                 */
                type CreateNotificationChannelCallback = (error: (Error|null), response?: google.monitoring.v3.NotificationChannel) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#updateNotificationChannel}.
                 * @param error Error, if any
                 * @param [response] NotificationChannel
                 */
                type UpdateNotificationChannelCallback = (error: (Error|null), response?: google.monitoring.v3.NotificationChannel) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#deleteNotificationChannel}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteNotificationChannelCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#sendNotificationChannelVerificationCode}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type SendNotificationChannelVerificationCodeCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#getNotificationChannelVerificationCode}.
                 * @param error Error, if any
                 * @param [response] GetNotificationChannelVerificationCodeResponse
                 */
                type GetNotificationChannelVerificationCodeCallback = (error: (Error|null), response?: google.monitoring.v3.GetNotificationChannelVerificationCodeResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.NotificationChannelService#verifyNotificationChannel}.
                 * @param error Error, if any
                 * @param [response] NotificationChannel
                 */
                type VerifyNotificationChannelCallback = (error: (Error|null), response?: google.monitoring.v3.NotificationChannel) => void;
            }

            /** Properties of a ListNotificationChannelDescriptorsRequest. */
            interface IListNotificationChannelDescriptorsRequest {

                /** ListNotificationChannelDescriptorsRequest name */
                name?: (string|null);

                /** ListNotificationChannelDescriptorsRequest pageSize */
                pageSize?: (number|null);

                /** ListNotificationChannelDescriptorsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListNotificationChannelDescriptorsRequest. */
            class ListNotificationChannelDescriptorsRequest implements IListNotificationChannelDescriptorsRequest {

                /**
                 * Constructs a new ListNotificationChannelDescriptorsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListNotificationChannelDescriptorsRequest);

                /** ListNotificationChannelDescriptorsRequest name. */
                public name: string;

                /** ListNotificationChannelDescriptorsRequest pageSize. */
                public pageSize: number;

                /** ListNotificationChannelDescriptorsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListNotificationChannelDescriptorsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListNotificationChannelDescriptorsRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListNotificationChannelDescriptorsRequest): google.monitoring.v3.ListNotificationChannelDescriptorsRequest;

                /**
                 * Encodes the specified ListNotificationChannelDescriptorsRequest message. Does not implicitly {@link google.monitoring.v3.ListNotificationChannelDescriptorsRequest.verify|verify} messages.
                 * @param message ListNotificationChannelDescriptorsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListNotificationChannelDescriptorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListNotificationChannelDescriptorsRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListNotificationChannelDescriptorsRequest.verify|verify} messages.
                 * @param message ListNotificationChannelDescriptorsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListNotificationChannelDescriptorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListNotificationChannelDescriptorsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListNotificationChannelDescriptorsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListNotificationChannelDescriptorsRequest;

                /**
                 * Decodes a ListNotificationChannelDescriptorsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListNotificationChannelDescriptorsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListNotificationChannelDescriptorsRequest;

                /**
                 * Verifies a ListNotificationChannelDescriptorsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListNotificationChannelDescriptorsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListNotificationChannelDescriptorsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListNotificationChannelDescriptorsRequest;

                /**
                 * Creates a plain object from a ListNotificationChannelDescriptorsRequest message. Also converts values to other types if specified.
                 * @param message ListNotificationChannelDescriptorsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListNotificationChannelDescriptorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListNotificationChannelDescriptorsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListNotificationChannelDescriptorsResponse. */
            interface IListNotificationChannelDescriptorsResponse {

                /** ListNotificationChannelDescriptorsResponse channelDescriptors */
                channelDescriptors?: (google.monitoring.v3.INotificationChannelDescriptor[]|null);

                /** ListNotificationChannelDescriptorsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListNotificationChannelDescriptorsResponse. */
            class ListNotificationChannelDescriptorsResponse implements IListNotificationChannelDescriptorsResponse {

                /**
                 * Constructs a new ListNotificationChannelDescriptorsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListNotificationChannelDescriptorsResponse);

                /** ListNotificationChannelDescriptorsResponse channelDescriptors. */
                public channelDescriptors: google.monitoring.v3.INotificationChannelDescriptor[];

                /** ListNotificationChannelDescriptorsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListNotificationChannelDescriptorsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListNotificationChannelDescriptorsResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListNotificationChannelDescriptorsResponse): google.monitoring.v3.ListNotificationChannelDescriptorsResponse;

                /**
                 * Encodes the specified ListNotificationChannelDescriptorsResponse message. Does not implicitly {@link google.monitoring.v3.ListNotificationChannelDescriptorsResponse.verify|verify} messages.
                 * @param message ListNotificationChannelDescriptorsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListNotificationChannelDescriptorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListNotificationChannelDescriptorsResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListNotificationChannelDescriptorsResponse.verify|verify} messages.
                 * @param message ListNotificationChannelDescriptorsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListNotificationChannelDescriptorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListNotificationChannelDescriptorsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListNotificationChannelDescriptorsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListNotificationChannelDescriptorsResponse;

                /**
                 * Decodes a ListNotificationChannelDescriptorsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListNotificationChannelDescriptorsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListNotificationChannelDescriptorsResponse;

                /**
                 * Verifies a ListNotificationChannelDescriptorsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListNotificationChannelDescriptorsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListNotificationChannelDescriptorsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListNotificationChannelDescriptorsResponse;

                /**
                 * Creates a plain object from a ListNotificationChannelDescriptorsResponse message. Also converts values to other types if specified.
                 * @param message ListNotificationChannelDescriptorsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListNotificationChannelDescriptorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListNotificationChannelDescriptorsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetNotificationChannelDescriptorRequest. */
            interface IGetNotificationChannelDescriptorRequest {

                /** GetNotificationChannelDescriptorRequest name */
                name?: (string|null);
            }

            /** Represents a GetNotificationChannelDescriptorRequest. */
            class GetNotificationChannelDescriptorRequest implements IGetNotificationChannelDescriptorRequest {

                /**
                 * Constructs a new GetNotificationChannelDescriptorRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetNotificationChannelDescriptorRequest);

                /** GetNotificationChannelDescriptorRequest name. */
                public name: string;

                /**
                 * Creates a new GetNotificationChannelDescriptorRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNotificationChannelDescriptorRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetNotificationChannelDescriptorRequest): google.monitoring.v3.GetNotificationChannelDescriptorRequest;

                /**
                 * Encodes the specified GetNotificationChannelDescriptorRequest message. Does not implicitly {@link google.monitoring.v3.GetNotificationChannelDescriptorRequest.verify|verify} messages.
                 * @param message GetNotificationChannelDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetNotificationChannelDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetNotificationChannelDescriptorRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetNotificationChannelDescriptorRequest.verify|verify} messages.
                 * @param message GetNotificationChannelDescriptorRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetNotificationChannelDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNotificationChannelDescriptorRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNotificationChannelDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetNotificationChannelDescriptorRequest;

                /**
                 * Decodes a GetNotificationChannelDescriptorRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetNotificationChannelDescriptorRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetNotificationChannelDescriptorRequest;

                /**
                 * Verifies a GetNotificationChannelDescriptorRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetNotificationChannelDescriptorRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetNotificationChannelDescriptorRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetNotificationChannelDescriptorRequest;

                /**
                 * Creates a plain object from a GetNotificationChannelDescriptorRequest message. Also converts values to other types if specified.
                 * @param message GetNotificationChannelDescriptorRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetNotificationChannelDescriptorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetNotificationChannelDescriptorRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateNotificationChannelRequest. */
            interface ICreateNotificationChannelRequest {

                /** CreateNotificationChannelRequest name */
                name?: (string|null);

                /** CreateNotificationChannelRequest notificationChannel */
                notificationChannel?: (google.monitoring.v3.INotificationChannel|null);
            }

            /** Represents a CreateNotificationChannelRequest. */
            class CreateNotificationChannelRequest implements ICreateNotificationChannelRequest {

                /**
                 * Constructs a new CreateNotificationChannelRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateNotificationChannelRequest);

                /** CreateNotificationChannelRequest name. */
                public name: string;

                /** CreateNotificationChannelRequest notificationChannel. */
                public notificationChannel?: (google.monitoring.v3.INotificationChannel|null);

                /**
                 * Creates a new CreateNotificationChannelRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateNotificationChannelRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateNotificationChannelRequest): google.monitoring.v3.CreateNotificationChannelRequest;

                /**
                 * Encodes the specified CreateNotificationChannelRequest message. Does not implicitly {@link google.monitoring.v3.CreateNotificationChannelRequest.verify|verify} messages.
                 * @param message CreateNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateNotificationChannelRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateNotificationChannelRequest.verify|verify} messages.
                 * @param message CreateNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateNotificationChannelRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateNotificationChannelRequest;

                /**
                 * Decodes a CreateNotificationChannelRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateNotificationChannelRequest;

                /**
                 * Verifies a CreateNotificationChannelRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateNotificationChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateNotificationChannelRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateNotificationChannelRequest;

                /**
                 * Creates a plain object from a CreateNotificationChannelRequest message. Also converts values to other types if specified.
                 * @param message CreateNotificationChannelRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateNotificationChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateNotificationChannelRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListNotificationChannelsRequest. */
            interface IListNotificationChannelsRequest {

                /** ListNotificationChannelsRequest name */
                name?: (string|null);

                /** ListNotificationChannelsRequest filter */
                filter?: (string|null);

                /** ListNotificationChannelsRequest orderBy */
                orderBy?: (string|null);

                /** ListNotificationChannelsRequest pageSize */
                pageSize?: (number|null);

                /** ListNotificationChannelsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListNotificationChannelsRequest. */
            class ListNotificationChannelsRequest implements IListNotificationChannelsRequest {

                /**
                 * Constructs a new ListNotificationChannelsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListNotificationChannelsRequest);

                /** ListNotificationChannelsRequest name. */
                public name: string;

                /** ListNotificationChannelsRequest filter. */
                public filter: string;

                /** ListNotificationChannelsRequest orderBy. */
                public orderBy: string;

                /** ListNotificationChannelsRequest pageSize. */
                public pageSize: number;

                /** ListNotificationChannelsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListNotificationChannelsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListNotificationChannelsRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListNotificationChannelsRequest): google.monitoring.v3.ListNotificationChannelsRequest;

                /**
                 * Encodes the specified ListNotificationChannelsRequest message. Does not implicitly {@link google.monitoring.v3.ListNotificationChannelsRequest.verify|verify} messages.
                 * @param message ListNotificationChannelsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListNotificationChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListNotificationChannelsRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListNotificationChannelsRequest.verify|verify} messages.
                 * @param message ListNotificationChannelsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListNotificationChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListNotificationChannelsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListNotificationChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListNotificationChannelsRequest;

                /**
                 * Decodes a ListNotificationChannelsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListNotificationChannelsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListNotificationChannelsRequest;

                /**
                 * Verifies a ListNotificationChannelsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListNotificationChannelsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListNotificationChannelsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListNotificationChannelsRequest;

                /**
                 * Creates a plain object from a ListNotificationChannelsRequest message. Also converts values to other types if specified.
                 * @param message ListNotificationChannelsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListNotificationChannelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListNotificationChannelsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListNotificationChannelsResponse. */
            interface IListNotificationChannelsResponse {

                /** ListNotificationChannelsResponse notificationChannels */
                notificationChannels?: (google.monitoring.v3.INotificationChannel[]|null);

                /** ListNotificationChannelsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListNotificationChannelsResponse. */
            class ListNotificationChannelsResponse implements IListNotificationChannelsResponse {

                /**
                 * Constructs a new ListNotificationChannelsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListNotificationChannelsResponse);

                /** ListNotificationChannelsResponse notificationChannels. */
                public notificationChannels: google.monitoring.v3.INotificationChannel[];

                /** ListNotificationChannelsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListNotificationChannelsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListNotificationChannelsResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListNotificationChannelsResponse): google.monitoring.v3.ListNotificationChannelsResponse;

                /**
                 * Encodes the specified ListNotificationChannelsResponse message. Does not implicitly {@link google.monitoring.v3.ListNotificationChannelsResponse.verify|verify} messages.
                 * @param message ListNotificationChannelsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListNotificationChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListNotificationChannelsResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListNotificationChannelsResponse.verify|verify} messages.
                 * @param message ListNotificationChannelsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListNotificationChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListNotificationChannelsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListNotificationChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListNotificationChannelsResponse;

                /**
                 * Decodes a ListNotificationChannelsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListNotificationChannelsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListNotificationChannelsResponse;

                /**
                 * Verifies a ListNotificationChannelsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListNotificationChannelsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListNotificationChannelsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListNotificationChannelsResponse;

                /**
                 * Creates a plain object from a ListNotificationChannelsResponse message. Also converts values to other types if specified.
                 * @param message ListNotificationChannelsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListNotificationChannelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListNotificationChannelsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetNotificationChannelRequest. */
            interface IGetNotificationChannelRequest {

                /** GetNotificationChannelRequest name */
                name?: (string|null);
            }

            /** Represents a GetNotificationChannelRequest. */
            class GetNotificationChannelRequest implements IGetNotificationChannelRequest {

                /**
                 * Constructs a new GetNotificationChannelRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetNotificationChannelRequest);

                /** GetNotificationChannelRequest name. */
                public name: string;

                /**
                 * Creates a new GetNotificationChannelRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNotificationChannelRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetNotificationChannelRequest): google.monitoring.v3.GetNotificationChannelRequest;

                /**
                 * Encodes the specified GetNotificationChannelRequest message. Does not implicitly {@link google.monitoring.v3.GetNotificationChannelRequest.verify|verify} messages.
                 * @param message GetNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetNotificationChannelRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetNotificationChannelRequest.verify|verify} messages.
                 * @param message GetNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNotificationChannelRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetNotificationChannelRequest;

                /**
                 * Decodes a GetNotificationChannelRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetNotificationChannelRequest;

                /**
                 * Verifies a GetNotificationChannelRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetNotificationChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetNotificationChannelRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetNotificationChannelRequest;

                /**
                 * Creates a plain object from a GetNotificationChannelRequest message. Also converts values to other types if specified.
                 * @param message GetNotificationChannelRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetNotificationChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetNotificationChannelRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateNotificationChannelRequest. */
            interface IUpdateNotificationChannelRequest {

                /** UpdateNotificationChannelRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateNotificationChannelRequest notificationChannel */
                notificationChannel?: (google.monitoring.v3.INotificationChannel|null);
            }

            /** Represents an UpdateNotificationChannelRequest. */
            class UpdateNotificationChannelRequest implements IUpdateNotificationChannelRequest {

                /**
                 * Constructs a new UpdateNotificationChannelRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IUpdateNotificationChannelRequest);

                /** UpdateNotificationChannelRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateNotificationChannelRequest notificationChannel. */
                public notificationChannel?: (google.monitoring.v3.INotificationChannel|null);

                /**
                 * Creates a new UpdateNotificationChannelRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateNotificationChannelRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IUpdateNotificationChannelRequest): google.monitoring.v3.UpdateNotificationChannelRequest;

                /**
                 * Encodes the specified UpdateNotificationChannelRequest message. Does not implicitly {@link google.monitoring.v3.UpdateNotificationChannelRequest.verify|verify} messages.
                 * @param message UpdateNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IUpdateNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateNotificationChannelRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.UpdateNotificationChannelRequest.verify|verify} messages.
                 * @param message UpdateNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IUpdateNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateNotificationChannelRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UpdateNotificationChannelRequest;

                /**
                 * Decodes an UpdateNotificationChannelRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UpdateNotificationChannelRequest;

                /**
                 * Verifies an UpdateNotificationChannelRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateNotificationChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateNotificationChannelRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UpdateNotificationChannelRequest;

                /**
                 * Creates a plain object from an UpdateNotificationChannelRequest message. Also converts values to other types if specified.
                 * @param message UpdateNotificationChannelRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.UpdateNotificationChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateNotificationChannelRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteNotificationChannelRequest. */
            interface IDeleteNotificationChannelRequest {

                /** DeleteNotificationChannelRequest name */
                name?: (string|null);

                /** DeleteNotificationChannelRequest force */
                force?: (boolean|null);
            }

            /** Represents a DeleteNotificationChannelRequest. */
            class DeleteNotificationChannelRequest implements IDeleteNotificationChannelRequest {

                /**
                 * Constructs a new DeleteNotificationChannelRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IDeleteNotificationChannelRequest);

                /** DeleteNotificationChannelRequest name. */
                public name: string;

                /** DeleteNotificationChannelRequest force. */
                public force: boolean;

                /**
                 * Creates a new DeleteNotificationChannelRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteNotificationChannelRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IDeleteNotificationChannelRequest): google.monitoring.v3.DeleteNotificationChannelRequest;

                /**
                 * Encodes the specified DeleteNotificationChannelRequest message. Does not implicitly {@link google.monitoring.v3.DeleteNotificationChannelRequest.verify|verify} messages.
                 * @param message DeleteNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IDeleteNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteNotificationChannelRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.DeleteNotificationChannelRequest.verify|verify} messages.
                 * @param message DeleteNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IDeleteNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteNotificationChannelRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.DeleteNotificationChannelRequest;

                /**
                 * Decodes a DeleteNotificationChannelRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.DeleteNotificationChannelRequest;

                /**
                 * Verifies a DeleteNotificationChannelRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteNotificationChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteNotificationChannelRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.DeleteNotificationChannelRequest;

                /**
                 * Creates a plain object from a DeleteNotificationChannelRequest message. Also converts values to other types if specified.
                 * @param message DeleteNotificationChannelRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.DeleteNotificationChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteNotificationChannelRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SendNotificationChannelVerificationCodeRequest. */
            interface ISendNotificationChannelVerificationCodeRequest {

                /** SendNotificationChannelVerificationCodeRequest name */
                name?: (string|null);
            }

            /** Represents a SendNotificationChannelVerificationCodeRequest. */
            class SendNotificationChannelVerificationCodeRequest implements ISendNotificationChannelVerificationCodeRequest {

                /**
                 * Constructs a new SendNotificationChannelVerificationCodeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ISendNotificationChannelVerificationCodeRequest);

                /** SendNotificationChannelVerificationCodeRequest name. */
                public name: string;

                /**
                 * Creates a new SendNotificationChannelVerificationCodeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SendNotificationChannelVerificationCodeRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ISendNotificationChannelVerificationCodeRequest): google.monitoring.v3.SendNotificationChannelVerificationCodeRequest;

                /**
                 * Encodes the specified SendNotificationChannelVerificationCodeRequest message. Does not implicitly {@link google.monitoring.v3.SendNotificationChannelVerificationCodeRequest.verify|verify} messages.
                 * @param message SendNotificationChannelVerificationCodeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ISendNotificationChannelVerificationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SendNotificationChannelVerificationCodeRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.SendNotificationChannelVerificationCodeRequest.verify|verify} messages.
                 * @param message SendNotificationChannelVerificationCodeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ISendNotificationChannelVerificationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SendNotificationChannelVerificationCodeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SendNotificationChannelVerificationCodeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.SendNotificationChannelVerificationCodeRequest;

                /**
                 * Decodes a SendNotificationChannelVerificationCodeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SendNotificationChannelVerificationCodeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.SendNotificationChannelVerificationCodeRequest;

                /**
                 * Verifies a SendNotificationChannelVerificationCodeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SendNotificationChannelVerificationCodeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SendNotificationChannelVerificationCodeRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.SendNotificationChannelVerificationCodeRequest;

                /**
                 * Creates a plain object from a SendNotificationChannelVerificationCodeRequest message. Also converts values to other types if specified.
                 * @param message SendNotificationChannelVerificationCodeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.SendNotificationChannelVerificationCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SendNotificationChannelVerificationCodeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetNotificationChannelVerificationCodeRequest. */
            interface IGetNotificationChannelVerificationCodeRequest {

                /** GetNotificationChannelVerificationCodeRequest name */
                name?: (string|null);

                /** GetNotificationChannelVerificationCodeRequest expireTime */
                expireTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a GetNotificationChannelVerificationCodeRequest. */
            class GetNotificationChannelVerificationCodeRequest implements IGetNotificationChannelVerificationCodeRequest {

                /**
                 * Constructs a new GetNotificationChannelVerificationCodeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetNotificationChannelVerificationCodeRequest);

                /** GetNotificationChannelVerificationCodeRequest name. */
                public name: string;

                /** GetNotificationChannelVerificationCodeRequest expireTime. */
                public expireTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new GetNotificationChannelVerificationCodeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNotificationChannelVerificationCodeRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetNotificationChannelVerificationCodeRequest): google.monitoring.v3.GetNotificationChannelVerificationCodeRequest;

                /**
                 * Encodes the specified GetNotificationChannelVerificationCodeRequest message. Does not implicitly {@link google.monitoring.v3.GetNotificationChannelVerificationCodeRequest.verify|verify} messages.
                 * @param message GetNotificationChannelVerificationCodeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetNotificationChannelVerificationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetNotificationChannelVerificationCodeRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetNotificationChannelVerificationCodeRequest.verify|verify} messages.
                 * @param message GetNotificationChannelVerificationCodeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetNotificationChannelVerificationCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNotificationChannelVerificationCodeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNotificationChannelVerificationCodeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetNotificationChannelVerificationCodeRequest;

                /**
                 * Decodes a GetNotificationChannelVerificationCodeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetNotificationChannelVerificationCodeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetNotificationChannelVerificationCodeRequest;

                /**
                 * Verifies a GetNotificationChannelVerificationCodeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetNotificationChannelVerificationCodeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetNotificationChannelVerificationCodeRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetNotificationChannelVerificationCodeRequest;

                /**
                 * Creates a plain object from a GetNotificationChannelVerificationCodeRequest message. Also converts values to other types if specified.
                 * @param message GetNotificationChannelVerificationCodeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetNotificationChannelVerificationCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetNotificationChannelVerificationCodeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetNotificationChannelVerificationCodeResponse. */
            interface IGetNotificationChannelVerificationCodeResponse {

                /** GetNotificationChannelVerificationCodeResponse code */
                code?: (string|null);

                /** GetNotificationChannelVerificationCodeResponse expireTime */
                expireTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a GetNotificationChannelVerificationCodeResponse. */
            class GetNotificationChannelVerificationCodeResponse implements IGetNotificationChannelVerificationCodeResponse {

                /**
                 * Constructs a new GetNotificationChannelVerificationCodeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetNotificationChannelVerificationCodeResponse);

                /** GetNotificationChannelVerificationCodeResponse code. */
                public code: string;

                /** GetNotificationChannelVerificationCodeResponse expireTime. */
                public expireTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new GetNotificationChannelVerificationCodeResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetNotificationChannelVerificationCodeResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IGetNotificationChannelVerificationCodeResponse): google.monitoring.v3.GetNotificationChannelVerificationCodeResponse;

                /**
                 * Encodes the specified GetNotificationChannelVerificationCodeResponse message. Does not implicitly {@link google.monitoring.v3.GetNotificationChannelVerificationCodeResponse.verify|verify} messages.
                 * @param message GetNotificationChannelVerificationCodeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetNotificationChannelVerificationCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetNotificationChannelVerificationCodeResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.GetNotificationChannelVerificationCodeResponse.verify|verify} messages.
                 * @param message GetNotificationChannelVerificationCodeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetNotificationChannelVerificationCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetNotificationChannelVerificationCodeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetNotificationChannelVerificationCodeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetNotificationChannelVerificationCodeResponse;

                /**
                 * Decodes a GetNotificationChannelVerificationCodeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetNotificationChannelVerificationCodeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetNotificationChannelVerificationCodeResponse;

                /**
                 * Verifies a GetNotificationChannelVerificationCodeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetNotificationChannelVerificationCodeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetNotificationChannelVerificationCodeResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetNotificationChannelVerificationCodeResponse;

                /**
                 * Creates a plain object from a GetNotificationChannelVerificationCodeResponse message. Also converts values to other types if specified.
                 * @param message GetNotificationChannelVerificationCodeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetNotificationChannelVerificationCodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetNotificationChannelVerificationCodeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a VerifyNotificationChannelRequest. */
            interface IVerifyNotificationChannelRequest {

                /** VerifyNotificationChannelRequest name */
                name?: (string|null);

                /** VerifyNotificationChannelRequest code */
                code?: (string|null);
            }

            /** Represents a VerifyNotificationChannelRequest. */
            class VerifyNotificationChannelRequest implements IVerifyNotificationChannelRequest {

                /**
                 * Constructs a new VerifyNotificationChannelRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IVerifyNotificationChannelRequest);

                /** VerifyNotificationChannelRequest name. */
                public name: string;

                /** VerifyNotificationChannelRequest code. */
                public code: string;

                /**
                 * Creates a new VerifyNotificationChannelRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VerifyNotificationChannelRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IVerifyNotificationChannelRequest): google.monitoring.v3.VerifyNotificationChannelRequest;

                /**
                 * Encodes the specified VerifyNotificationChannelRequest message. Does not implicitly {@link google.monitoring.v3.VerifyNotificationChannelRequest.verify|verify} messages.
                 * @param message VerifyNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IVerifyNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VerifyNotificationChannelRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.VerifyNotificationChannelRequest.verify|verify} messages.
                 * @param message VerifyNotificationChannelRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IVerifyNotificationChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VerifyNotificationChannelRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VerifyNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.VerifyNotificationChannelRequest;

                /**
                 * Decodes a VerifyNotificationChannelRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VerifyNotificationChannelRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.VerifyNotificationChannelRequest;

                /**
                 * Verifies a VerifyNotificationChannelRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VerifyNotificationChannelRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VerifyNotificationChannelRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.VerifyNotificationChannelRequest;

                /**
                 * Creates a plain object from a VerifyNotificationChannelRequest message. Also converts values to other types if specified.
                 * @param message VerifyNotificationChannelRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.VerifyNotificationChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VerifyNotificationChannelRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NotificationChannelDescriptor. */
            interface INotificationChannelDescriptor {

                /** NotificationChannelDescriptor name */
                name?: (string|null);

                /** NotificationChannelDescriptor type */
                type?: (string|null);

                /** NotificationChannelDescriptor displayName */
                displayName?: (string|null);

                /** NotificationChannelDescriptor description */
                description?: (string|null);

                /** NotificationChannelDescriptor labels */
                labels?: (google.api.ILabelDescriptor[]|null);

                /** NotificationChannelDescriptor supportedTiers */
                supportedTiers?: (google.monitoring.v3.ServiceTier[]|null);
            }

            /** Represents a NotificationChannelDescriptor. */
            class NotificationChannelDescriptor implements INotificationChannelDescriptor {

                /**
                 * Constructs a new NotificationChannelDescriptor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.INotificationChannelDescriptor);

                /** NotificationChannelDescriptor name. */
                public name: string;

                /** NotificationChannelDescriptor type. */
                public type: string;

                /** NotificationChannelDescriptor displayName. */
                public displayName: string;

                /** NotificationChannelDescriptor description. */
                public description: string;

                /** NotificationChannelDescriptor labels. */
                public labels: google.api.ILabelDescriptor[];

                /** NotificationChannelDescriptor supportedTiers. */
                public supportedTiers: google.monitoring.v3.ServiceTier[];

                /**
                 * Creates a new NotificationChannelDescriptor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotificationChannelDescriptor instance
                 */
                public static create(properties?: google.monitoring.v3.INotificationChannelDescriptor): google.monitoring.v3.NotificationChannelDescriptor;

                /**
                 * Encodes the specified NotificationChannelDescriptor message. Does not implicitly {@link google.monitoring.v3.NotificationChannelDescriptor.verify|verify} messages.
                 * @param message NotificationChannelDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.INotificationChannelDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotificationChannelDescriptor message, length delimited. Does not implicitly {@link google.monitoring.v3.NotificationChannelDescriptor.verify|verify} messages.
                 * @param message NotificationChannelDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.INotificationChannelDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotificationChannelDescriptor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotificationChannelDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.NotificationChannelDescriptor;

                /**
                 * Decodes a NotificationChannelDescriptor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotificationChannelDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.NotificationChannelDescriptor;

                /**
                 * Verifies a NotificationChannelDescriptor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotificationChannelDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotificationChannelDescriptor
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.NotificationChannelDescriptor;

                /**
                 * Creates a plain object from a NotificationChannelDescriptor message. Also converts values to other types if specified.
                 * @param message NotificationChannelDescriptor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.NotificationChannelDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotificationChannelDescriptor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NotificationChannel. */
            interface INotificationChannel {

                /** NotificationChannel type */
                type?: (string|null);

                /** NotificationChannel name */
                name?: (string|null);

                /** NotificationChannel displayName */
                displayName?: (string|null);

                /** NotificationChannel description */
                description?: (string|null);

                /** NotificationChannel labels */
                labels?: ({ [k: string]: string }|null);

                /** NotificationChannel userLabels */
                userLabels?: ({ [k: string]: string }|null);

                /** NotificationChannel verificationStatus */
                verificationStatus?: (google.monitoring.v3.NotificationChannel.VerificationStatus|keyof typeof google.monitoring.v3.NotificationChannel.VerificationStatus|null);

                /** NotificationChannel enabled */
                enabled?: (google.protobuf.IBoolValue|null);
            }

            /** Represents a NotificationChannel. */
            class NotificationChannel implements INotificationChannel {

                /**
                 * Constructs a new NotificationChannel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.INotificationChannel);

                /** NotificationChannel type. */
                public type: string;

                /** NotificationChannel name. */
                public name: string;

                /** NotificationChannel displayName. */
                public displayName: string;

                /** NotificationChannel description. */
                public description: string;

                /** NotificationChannel labels. */
                public labels: { [k: string]: string };

                /** NotificationChannel userLabels. */
                public userLabels: { [k: string]: string };

                /** NotificationChannel verificationStatus. */
                public verificationStatus: (google.monitoring.v3.NotificationChannel.VerificationStatus|keyof typeof google.monitoring.v3.NotificationChannel.VerificationStatus);

                /** NotificationChannel enabled. */
                public enabled?: (google.protobuf.IBoolValue|null);

                /**
                 * Creates a new NotificationChannel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotificationChannel instance
                 */
                public static create(properties?: google.monitoring.v3.INotificationChannel): google.monitoring.v3.NotificationChannel;

                /**
                 * Encodes the specified NotificationChannel message. Does not implicitly {@link google.monitoring.v3.NotificationChannel.verify|verify} messages.
                 * @param message NotificationChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.INotificationChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotificationChannel message, length delimited. Does not implicitly {@link google.monitoring.v3.NotificationChannel.verify|verify} messages.
                 * @param message NotificationChannel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.INotificationChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotificationChannel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotificationChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.NotificationChannel;

                /**
                 * Decodes a NotificationChannel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotificationChannel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.NotificationChannel;

                /**
                 * Verifies a NotificationChannel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotificationChannel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotificationChannel
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.NotificationChannel;

                /**
                 * Creates a plain object from a NotificationChannel message. Also converts values to other types if specified.
                 * @param message NotificationChannel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.NotificationChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotificationChannel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace NotificationChannel {

                /** VerificationStatus enum. */
                enum VerificationStatus {
                    VERIFICATION_STATUS_UNSPECIFIED = 0,
                    UNVERIFIED = 1,
                    VERIFIED = 2
                }
            }

            /** Represents a ServiceMonitoringService */
            class ServiceMonitoringService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ServiceMonitoringService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ServiceMonitoringService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ServiceMonitoringService;

                /**
                 * Calls CreateService.
                 * @param request CreateServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Service
                 */
                public createService(request: google.monitoring.v3.ICreateServiceRequest, callback: google.monitoring.v3.ServiceMonitoringService.CreateServiceCallback): void;

                /**
                 * Calls CreateService.
                 * @param request CreateServiceRequest message or plain object
                 * @returns Promise
                 */
                public createService(request: google.monitoring.v3.ICreateServiceRequest): Promise<google.monitoring.v3.Service>;

                /**
                 * Calls GetService.
                 * @param request GetServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Service
                 */
                public getService(request: google.monitoring.v3.IGetServiceRequest, callback: google.monitoring.v3.ServiceMonitoringService.GetServiceCallback): void;

                /**
                 * Calls GetService.
                 * @param request GetServiceRequest message or plain object
                 * @returns Promise
                 */
                public getService(request: google.monitoring.v3.IGetServiceRequest): Promise<google.monitoring.v3.Service>;

                /**
                 * Calls ListServices.
                 * @param request ListServicesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                 */
                public listServices(request: google.monitoring.v3.IListServicesRequest, callback: google.monitoring.v3.ServiceMonitoringService.ListServicesCallback): void;

                /**
                 * Calls ListServices.
                 * @param request ListServicesRequest message or plain object
                 * @returns Promise
                 */
                public listServices(request: google.monitoring.v3.IListServicesRequest): Promise<google.monitoring.v3.ListServicesResponse>;

                /**
                 * Calls UpdateService.
                 * @param request UpdateServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Service
                 */
                public updateService(request: google.monitoring.v3.IUpdateServiceRequest, callback: google.monitoring.v3.ServiceMonitoringService.UpdateServiceCallback): void;

                /**
                 * Calls UpdateService.
                 * @param request UpdateServiceRequest message or plain object
                 * @returns Promise
                 */
                public updateService(request: google.monitoring.v3.IUpdateServiceRequest): Promise<google.monitoring.v3.Service>;

                /**
                 * Calls DeleteService.
                 * @param request DeleteServiceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteService(request: google.monitoring.v3.IDeleteServiceRequest, callback: google.monitoring.v3.ServiceMonitoringService.DeleteServiceCallback): void;

                /**
                 * Calls DeleteService.
                 * @param request DeleteServiceRequest message or plain object
                 * @returns Promise
                 */
                public deleteService(request: google.monitoring.v3.IDeleteServiceRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls CreateServiceLevelObjective.
                 * @param request CreateServiceLevelObjectiveRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ServiceLevelObjective
                 */
                public createServiceLevelObjective(request: google.monitoring.v3.ICreateServiceLevelObjectiveRequest, callback: google.monitoring.v3.ServiceMonitoringService.CreateServiceLevelObjectiveCallback): void;

                /**
                 * Calls CreateServiceLevelObjective.
                 * @param request CreateServiceLevelObjectiveRequest message or plain object
                 * @returns Promise
                 */
                public createServiceLevelObjective(request: google.monitoring.v3.ICreateServiceLevelObjectiveRequest): Promise<google.monitoring.v3.ServiceLevelObjective>;

                /**
                 * Calls GetServiceLevelObjective.
                 * @param request GetServiceLevelObjectiveRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ServiceLevelObjective
                 */
                public getServiceLevelObjective(request: google.monitoring.v3.IGetServiceLevelObjectiveRequest, callback: google.monitoring.v3.ServiceMonitoringService.GetServiceLevelObjectiveCallback): void;

                /**
                 * Calls GetServiceLevelObjective.
                 * @param request GetServiceLevelObjectiveRequest message or plain object
                 * @returns Promise
                 */
                public getServiceLevelObjective(request: google.monitoring.v3.IGetServiceLevelObjectiveRequest): Promise<google.monitoring.v3.ServiceLevelObjective>;

                /**
                 * Calls ListServiceLevelObjectives.
                 * @param request ListServiceLevelObjectivesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListServiceLevelObjectivesResponse
                 */
                public listServiceLevelObjectives(request: google.monitoring.v3.IListServiceLevelObjectivesRequest, callback: google.monitoring.v3.ServiceMonitoringService.ListServiceLevelObjectivesCallback): void;

                /**
                 * Calls ListServiceLevelObjectives.
                 * @param request ListServiceLevelObjectivesRequest message or plain object
                 * @returns Promise
                 */
                public listServiceLevelObjectives(request: google.monitoring.v3.IListServiceLevelObjectivesRequest): Promise<google.monitoring.v3.ListServiceLevelObjectivesResponse>;

                /**
                 * Calls UpdateServiceLevelObjective.
                 * @param request UpdateServiceLevelObjectiveRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ServiceLevelObjective
                 */
                public updateServiceLevelObjective(request: google.monitoring.v3.IUpdateServiceLevelObjectiveRequest, callback: google.monitoring.v3.ServiceMonitoringService.UpdateServiceLevelObjectiveCallback): void;

                /**
                 * Calls UpdateServiceLevelObjective.
                 * @param request UpdateServiceLevelObjectiveRequest message or plain object
                 * @returns Promise
                 */
                public updateServiceLevelObjective(request: google.monitoring.v3.IUpdateServiceLevelObjectiveRequest): Promise<google.monitoring.v3.ServiceLevelObjective>;

                /**
                 * Calls DeleteServiceLevelObjective.
                 * @param request DeleteServiceLevelObjectiveRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteServiceLevelObjective(request: google.monitoring.v3.IDeleteServiceLevelObjectiveRequest, callback: google.monitoring.v3.ServiceMonitoringService.DeleteServiceLevelObjectiveCallback): void;

                /**
                 * Calls DeleteServiceLevelObjective.
                 * @param request DeleteServiceLevelObjectiveRequest message or plain object
                 * @returns Promise
                 */
                public deleteServiceLevelObjective(request: google.monitoring.v3.IDeleteServiceLevelObjectiveRequest): Promise<google.protobuf.Empty>;
            }

            namespace ServiceMonitoringService {

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#createService}.
                 * @param error Error, if any
                 * @param [response] Service
                 */
                type CreateServiceCallback = (error: (Error|null), response?: google.monitoring.v3.Service) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#getService}.
                 * @param error Error, if any
                 * @param [response] Service
                 */
                type GetServiceCallback = (error: (Error|null), response?: google.monitoring.v3.Service) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#listServices}.
                 * @param error Error, if any
                 * @param [response] ListServicesResponse
                 */
                type ListServicesCallback = (error: (Error|null), response?: google.monitoring.v3.ListServicesResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#updateService}.
                 * @param error Error, if any
                 * @param [response] Service
                 */
                type UpdateServiceCallback = (error: (Error|null), response?: google.monitoring.v3.Service) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#deleteService}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteServiceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#createServiceLevelObjective}.
                 * @param error Error, if any
                 * @param [response] ServiceLevelObjective
                 */
                type CreateServiceLevelObjectiveCallback = (error: (Error|null), response?: google.monitoring.v3.ServiceLevelObjective) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#getServiceLevelObjective}.
                 * @param error Error, if any
                 * @param [response] ServiceLevelObjective
                 */
                type GetServiceLevelObjectiveCallback = (error: (Error|null), response?: google.monitoring.v3.ServiceLevelObjective) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#listServiceLevelObjectives}.
                 * @param error Error, if any
                 * @param [response] ListServiceLevelObjectivesResponse
                 */
                type ListServiceLevelObjectivesCallback = (error: (Error|null), response?: google.monitoring.v3.ListServiceLevelObjectivesResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#updateServiceLevelObjective}.
                 * @param error Error, if any
                 * @param [response] ServiceLevelObjective
                 */
                type UpdateServiceLevelObjectiveCallback = (error: (Error|null), response?: google.monitoring.v3.ServiceLevelObjective) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.ServiceMonitoringService#deleteServiceLevelObjective}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteServiceLevelObjectiveCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** Properties of a CreateServiceRequest. */
            interface ICreateServiceRequest {

                /** CreateServiceRequest parent */
                parent?: (string|null);

                /** CreateServiceRequest serviceId */
                serviceId?: (string|null);

                /** CreateServiceRequest service */
                service?: (google.monitoring.v3.IService|null);
            }

            /** Represents a CreateServiceRequest. */
            class CreateServiceRequest implements ICreateServiceRequest {

                /**
                 * Constructs a new CreateServiceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateServiceRequest);

                /** CreateServiceRequest parent. */
                public parent: string;

                /** CreateServiceRequest serviceId. */
                public serviceId: string;

                /** CreateServiceRequest service. */
                public service?: (google.monitoring.v3.IService|null);

                /**
                 * Creates a new CreateServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateServiceRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateServiceRequest): google.monitoring.v3.CreateServiceRequest;

                /**
                 * Encodes the specified CreateServiceRequest message. Does not implicitly {@link google.monitoring.v3.CreateServiceRequest.verify|verify} messages.
                 * @param message CreateServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateServiceRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateServiceRequest.verify|verify} messages.
                 * @param message CreateServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateServiceRequest;

                /**
                 * Decodes a CreateServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateServiceRequest;

                /**
                 * Verifies a CreateServiceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateServiceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateServiceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateServiceRequest;

                /**
                 * Creates a plain object from a CreateServiceRequest message. Also converts values to other types if specified.
                 * @param message CreateServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateServiceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetServiceRequest. */
            interface IGetServiceRequest {

                /** GetServiceRequest name */
                name?: (string|null);
            }

            /** Represents a GetServiceRequest. */
            class GetServiceRequest implements IGetServiceRequest {

                /**
                 * Constructs a new GetServiceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetServiceRequest);

                /** GetServiceRequest name. */
                public name: string;

                /**
                 * Creates a new GetServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetServiceRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetServiceRequest): google.monitoring.v3.GetServiceRequest;

                /**
                 * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.monitoring.v3.GetServiceRequest.verify|verify} messages.
                 * @param message GetServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetServiceRequest.verify|verify} messages.
                 * @param message GetServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetServiceRequest;

                /**
                 * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetServiceRequest;

                /**
                 * Verifies a GetServiceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetServiceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetServiceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetServiceRequest;

                /**
                 * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                 * @param message GetServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetServiceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListServicesRequest. */
            interface IListServicesRequest {

                /** ListServicesRequest parent */
                parent?: (string|null);

                /** ListServicesRequest filter */
                filter?: (string|null);

                /** ListServicesRequest pageSize */
                pageSize?: (number|null);

                /** ListServicesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListServicesRequest. */
            class ListServicesRequest implements IListServicesRequest {

                /**
                 * Constructs a new ListServicesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListServicesRequest);

                /** ListServicesRequest parent. */
                public parent: string;

                /** ListServicesRequest filter. */
                public filter: string;

                /** ListServicesRequest pageSize. */
                public pageSize: number;

                /** ListServicesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListServicesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServicesRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListServicesRequest): google.monitoring.v3.ListServicesRequest;

                /**
                 * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.monitoring.v3.ListServicesRequest.verify|verify} messages.
                 * @param message ListServicesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListServicesRequest.verify|verify} messages.
                 * @param message ListServicesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServicesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServicesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListServicesRequest;

                /**
                 * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServicesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListServicesRequest;

                /**
                 * Verifies a ListServicesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServicesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServicesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListServicesRequest;

                /**
                 * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                 * @param message ListServicesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServicesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListServicesResponse. */
            interface IListServicesResponse {

                /** ListServicesResponse services */
                services?: (google.monitoring.v3.IService[]|null);

                /** ListServicesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListServicesResponse. */
            class ListServicesResponse implements IListServicesResponse {

                /**
                 * Constructs a new ListServicesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListServicesResponse);

                /** ListServicesResponse services. */
                public services: google.monitoring.v3.IService[];

                /** ListServicesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListServicesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServicesResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListServicesResponse): google.monitoring.v3.ListServicesResponse;

                /**
                 * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.monitoring.v3.ListServicesResponse.verify|verify} messages.
                 * @param message ListServicesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListServicesResponse.verify|verify} messages.
                 * @param message ListServicesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServicesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServicesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListServicesResponse;

                /**
                 * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServicesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListServicesResponse;

                /**
                 * Verifies a ListServicesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServicesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServicesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListServicesResponse;

                /**
                 * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                 * @param message ListServicesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServicesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateServiceRequest. */
            interface IUpdateServiceRequest {

                /** UpdateServiceRequest service */
                service?: (google.monitoring.v3.IService|null);

                /** UpdateServiceRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateServiceRequest. */
            class UpdateServiceRequest implements IUpdateServiceRequest {

                /**
                 * Constructs a new UpdateServiceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IUpdateServiceRequest);

                /** UpdateServiceRequest service. */
                public service?: (google.monitoring.v3.IService|null);

                /** UpdateServiceRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateServiceRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IUpdateServiceRequest): google.monitoring.v3.UpdateServiceRequest;

                /**
                 * Encodes the specified UpdateServiceRequest message. Does not implicitly {@link google.monitoring.v3.UpdateServiceRequest.verify|verify} messages.
                 * @param message UpdateServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateServiceRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.UpdateServiceRequest.verify|verify} messages.
                 * @param message UpdateServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UpdateServiceRequest;

                /**
                 * Decodes an UpdateServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UpdateServiceRequest;

                /**
                 * Verifies an UpdateServiceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateServiceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateServiceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UpdateServiceRequest;

                /**
                 * Creates a plain object from an UpdateServiceRequest message. Also converts values to other types if specified.
                 * @param message UpdateServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.UpdateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateServiceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteServiceRequest. */
            interface IDeleteServiceRequest {

                /** DeleteServiceRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteServiceRequest. */
            class DeleteServiceRequest implements IDeleteServiceRequest {

                /**
                 * Constructs a new DeleteServiceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IDeleteServiceRequest);

                /** DeleteServiceRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteServiceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteServiceRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IDeleteServiceRequest): google.monitoring.v3.DeleteServiceRequest;

                /**
                 * Encodes the specified DeleteServiceRequest message. Does not implicitly {@link google.monitoring.v3.DeleteServiceRequest.verify|verify} messages.
                 * @param message DeleteServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteServiceRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.DeleteServiceRequest.verify|verify} messages.
                 * @param message DeleteServiceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteServiceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.DeleteServiceRequest;

                /**
                 * Decodes a DeleteServiceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteServiceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.DeleteServiceRequest;

                /**
                 * Verifies a DeleteServiceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteServiceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteServiceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.DeleteServiceRequest;

                /**
                 * Creates a plain object from a DeleteServiceRequest message. Also converts values to other types if specified.
                 * @param message DeleteServiceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.DeleteServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteServiceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateServiceLevelObjectiveRequest. */
            interface ICreateServiceLevelObjectiveRequest {

                /** CreateServiceLevelObjectiveRequest parent */
                parent?: (string|null);

                /** CreateServiceLevelObjectiveRequest serviceLevelObjectiveId */
                serviceLevelObjectiveId?: (string|null);

                /** CreateServiceLevelObjectiveRequest serviceLevelObjective */
                serviceLevelObjective?: (google.monitoring.v3.IServiceLevelObjective|null);
            }

            /** Represents a CreateServiceLevelObjectiveRequest. */
            class CreateServiceLevelObjectiveRequest implements ICreateServiceLevelObjectiveRequest {

                /**
                 * Constructs a new CreateServiceLevelObjectiveRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateServiceLevelObjectiveRequest);

                /** CreateServiceLevelObjectiveRequest parent. */
                public parent: string;

                /** CreateServiceLevelObjectiveRequest serviceLevelObjectiveId. */
                public serviceLevelObjectiveId: string;

                /** CreateServiceLevelObjectiveRequest serviceLevelObjective. */
                public serviceLevelObjective?: (google.monitoring.v3.IServiceLevelObjective|null);

                /**
                 * Creates a new CreateServiceLevelObjectiveRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateServiceLevelObjectiveRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateServiceLevelObjectiveRequest): google.monitoring.v3.CreateServiceLevelObjectiveRequest;

                /**
                 * Encodes the specified CreateServiceLevelObjectiveRequest message. Does not implicitly {@link google.monitoring.v3.CreateServiceLevelObjectiveRequest.verify|verify} messages.
                 * @param message CreateServiceLevelObjectiveRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateServiceLevelObjectiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateServiceLevelObjectiveRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateServiceLevelObjectiveRequest.verify|verify} messages.
                 * @param message CreateServiceLevelObjectiveRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateServiceLevelObjectiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateServiceLevelObjectiveRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateServiceLevelObjectiveRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateServiceLevelObjectiveRequest;

                /**
                 * Decodes a CreateServiceLevelObjectiveRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateServiceLevelObjectiveRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateServiceLevelObjectiveRequest;

                /**
                 * Verifies a CreateServiceLevelObjectiveRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateServiceLevelObjectiveRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateServiceLevelObjectiveRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateServiceLevelObjectiveRequest;

                /**
                 * Creates a plain object from a CreateServiceLevelObjectiveRequest message. Also converts values to other types if specified.
                 * @param message CreateServiceLevelObjectiveRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateServiceLevelObjectiveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateServiceLevelObjectiveRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetServiceLevelObjectiveRequest. */
            interface IGetServiceLevelObjectiveRequest {

                /** GetServiceLevelObjectiveRequest name */
                name?: (string|null);

                /** GetServiceLevelObjectiveRequest view */
                view?: (google.monitoring.v3.ServiceLevelObjective.View|keyof typeof google.monitoring.v3.ServiceLevelObjective.View|null);
            }

            /** Represents a GetServiceLevelObjectiveRequest. */
            class GetServiceLevelObjectiveRequest implements IGetServiceLevelObjectiveRequest {

                /**
                 * Constructs a new GetServiceLevelObjectiveRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetServiceLevelObjectiveRequest);

                /** GetServiceLevelObjectiveRequest name. */
                public name: string;

                /** GetServiceLevelObjectiveRequest view. */
                public view: (google.monitoring.v3.ServiceLevelObjective.View|keyof typeof google.monitoring.v3.ServiceLevelObjective.View);

                /**
                 * Creates a new GetServiceLevelObjectiveRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetServiceLevelObjectiveRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetServiceLevelObjectiveRequest): google.monitoring.v3.GetServiceLevelObjectiveRequest;

                /**
                 * Encodes the specified GetServiceLevelObjectiveRequest message. Does not implicitly {@link google.monitoring.v3.GetServiceLevelObjectiveRequest.verify|verify} messages.
                 * @param message GetServiceLevelObjectiveRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetServiceLevelObjectiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetServiceLevelObjectiveRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetServiceLevelObjectiveRequest.verify|verify} messages.
                 * @param message GetServiceLevelObjectiveRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetServiceLevelObjectiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetServiceLevelObjectiveRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetServiceLevelObjectiveRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetServiceLevelObjectiveRequest;

                /**
                 * Decodes a GetServiceLevelObjectiveRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetServiceLevelObjectiveRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetServiceLevelObjectiveRequest;

                /**
                 * Verifies a GetServiceLevelObjectiveRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetServiceLevelObjectiveRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetServiceLevelObjectiveRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetServiceLevelObjectiveRequest;

                /**
                 * Creates a plain object from a GetServiceLevelObjectiveRequest message. Also converts values to other types if specified.
                 * @param message GetServiceLevelObjectiveRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetServiceLevelObjectiveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetServiceLevelObjectiveRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListServiceLevelObjectivesRequest. */
            interface IListServiceLevelObjectivesRequest {

                /** ListServiceLevelObjectivesRequest parent */
                parent?: (string|null);

                /** ListServiceLevelObjectivesRequest filter */
                filter?: (string|null);

                /** ListServiceLevelObjectivesRequest pageSize */
                pageSize?: (number|null);

                /** ListServiceLevelObjectivesRequest pageToken */
                pageToken?: (string|null);

                /** ListServiceLevelObjectivesRequest view */
                view?: (google.monitoring.v3.ServiceLevelObjective.View|keyof typeof google.monitoring.v3.ServiceLevelObjective.View|null);
            }

            /** Represents a ListServiceLevelObjectivesRequest. */
            class ListServiceLevelObjectivesRequest implements IListServiceLevelObjectivesRequest {

                /**
                 * Constructs a new ListServiceLevelObjectivesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListServiceLevelObjectivesRequest);

                /** ListServiceLevelObjectivesRequest parent. */
                public parent: string;

                /** ListServiceLevelObjectivesRequest filter. */
                public filter: string;

                /** ListServiceLevelObjectivesRequest pageSize. */
                public pageSize: number;

                /** ListServiceLevelObjectivesRequest pageToken. */
                public pageToken: string;

                /** ListServiceLevelObjectivesRequest view. */
                public view: (google.monitoring.v3.ServiceLevelObjective.View|keyof typeof google.monitoring.v3.ServiceLevelObjective.View);

                /**
                 * Creates a new ListServiceLevelObjectivesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServiceLevelObjectivesRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListServiceLevelObjectivesRequest): google.monitoring.v3.ListServiceLevelObjectivesRequest;

                /**
                 * Encodes the specified ListServiceLevelObjectivesRequest message. Does not implicitly {@link google.monitoring.v3.ListServiceLevelObjectivesRequest.verify|verify} messages.
                 * @param message ListServiceLevelObjectivesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListServiceLevelObjectivesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServiceLevelObjectivesRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListServiceLevelObjectivesRequest.verify|verify} messages.
                 * @param message ListServiceLevelObjectivesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListServiceLevelObjectivesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServiceLevelObjectivesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServiceLevelObjectivesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListServiceLevelObjectivesRequest;

                /**
                 * Decodes a ListServiceLevelObjectivesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServiceLevelObjectivesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListServiceLevelObjectivesRequest;

                /**
                 * Verifies a ListServiceLevelObjectivesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServiceLevelObjectivesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServiceLevelObjectivesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListServiceLevelObjectivesRequest;

                /**
                 * Creates a plain object from a ListServiceLevelObjectivesRequest message. Also converts values to other types if specified.
                 * @param message ListServiceLevelObjectivesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListServiceLevelObjectivesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServiceLevelObjectivesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListServiceLevelObjectivesResponse. */
            interface IListServiceLevelObjectivesResponse {

                /** ListServiceLevelObjectivesResponse serviceLevelObjectives */
                serviceLevelObjectives?: (google.monitoring.v3.IServiceLevelObjective[]|null);

                /** ListServiceLevelObjectivesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListServiceLevelObjectivesResponse. */
            class ListServiceLevelObjectivesResponse implements IListServiceLevelObjectivesResponse {

                /**
                 * Constructs a new ListServiceLevelObjectivesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListServiceLevelObjectivesResponse);

                /** ListServiceLevelObjectivesResponse serviceLevelObjectives. */
                public serviceLevelObjectives: google.monitoring.v3.IServiceLevelObjective[];

                /** ListServiceLevelObjectivesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListServiceLevelObjectivesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListServiceLevelObjectivesResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListServiceLevelObjectivesResponse): google.monitoring.v3.ListServiceLevelObjectivesResponse;

                /**
                 * Encodes the specified ListServiceLevelObjectivesResponse message. Does not implicitly {@link google.monitoring.v3.ListServiceLevelObjectivesResponse.verify|verify} messages.
                 * @param message ListServiceLevelObjectivesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListServiceLevelObjectivesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListServiceLevelObjectivesResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListServiceLevelObjectivesResponse.verify|verify} messages.
                 * @param message ListServiceLevelObjectivesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListServiceLevelObjectivesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListServiceLevelObjectivesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListServiceLevelObjectivesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListServiceLevelObjectivesResponse;

                /**
                 * Decodes a ListServiceLevelObjectivesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListServiceLevelObjectivesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListServiceLevelObjectivesResponse;

                /**
                 * Verifies a ListServiceLevelObjectivesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListServiceLevelObjectivesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListServiceLevelObjectivesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListServiceLevelObjectivesResponse;

                /**
                 * Creates a plain object from a ListServiceLevelObjectivesResponse message. Also converts values to other types if specified.
                 * @param message ListServiceLevelObjectivesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListServiceLevelObjectivesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListServiceLevelObjectivesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateServiceLevelObjectiveRequest. */
            interface IUpdateServiceLevelObjectiveRequest {

                /** UpdateServiceLevelObjectiveRequest serviceLevelObjective */
                serviceLevelObjective?: (google.monitoring.v3.IServiceLevelObjective|null);

                /** UpdateServiceLevelObjectiveRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateServiceLevelObjectiveRequest. */
            class UpdateServiceLevelObjectiveRequest implements IUpdateServiceLevelObjectiveRequest {

                /**
                 * Constructs a new UpdateServiceLevelObjectiveRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IUpdateServiceLevelObjectiveRequest);

                /** UpdateServiceLevelObjectiveRequest serviceLevelObjective. */
                public serviceLevelObjective?: (google.monitoring.v3.IServiceLevelObjective|null);

                /** UpdateServiceLevelObjectiveRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateServiceLevelObjectiveRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateServiceLevelObjectiveRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IUpdateServiceLevelObjectiveRequest): google.monitoring.v3.UpdateServiceLevelObjectiveRequest;

                /**
                 * Encodes the specified UpdateServiceLevelObjectiveRequest message. Does not implicitly {@link google.monitoring.v3.UpdateServiceLevelObjectiveRequest.verify|verify} messages.
                 * @param message UpdateServiceLevelObjectiveRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IUpdateServiceLevelObjectiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateServiceLevelObjectiveRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.UpdateServiceLevelObjectiveRequest.verify|verify} messages.
                 * @param message UpdateServiceLevelObjectiveRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IUpdateServiceLevelObjectiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateServiceLevelObjectiveRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateServiceLevelObjectiveRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UpdateServiceLevelObjectiveRequest;

                /**
                 * Decodes an UpdateServiceLevelObjectiveRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateServiceLevelObjectiveRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UpdateServiceLevelObjectiveRequest;

                /**
                 * Verifies an UpdateServiceLevelObjectiveRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateServiceLevelObjectiveRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateServiceLevelObjectiveRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UpdateServiceLevelObjectiveRequest;

                /**
                 * Creates a plain object from an UpdateServiceLevelObjectiveRequest message. Also converts values to other types if specified.
                 * @param message UpdateServiceLevelObjectiveRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.UpdateServiceLevelObjectiveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateServiceLevelObjectiveRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteServiceLevelObjectiveRequest. */
            interface IDeleteServiceLevelObjectiveRequest {

                /** DeleteServiceLevelObjectiveRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteServiceLevelObjectiveRequest. */
            class DeleteServiceLevelObjectiveRequest implements IDeleteServiceLevelObjectiveRequest {

                /**
                 * Constructs a new DeleteServiceLevelObjectiveRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IDeleteServiceLevelObjectiveRequest);

                /** DeleteServiceLevelObjectiveRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteServiceLevelObjectiveRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteServiceLevelObjectiveRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IDeleteServiceLevelObjectiveRequest): google.monitoring.v3.DeleteServiceLevelObjectiveRequest;

                /**
                 * Encodes the specified DeleteServiceLevelObjectiveRequest message. Does not implicitly {@link google.monitoring.v3.DeleteServiceLevelObjectiveRequest.verify|verify} messages.
                 * @param message DeleteServiceLevelObjectiveRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IDeleteServiceLevelObjectiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteServiceLevelObjectiveRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.DeleteServiceLevelObjectiveRequest.verify|verify} messages.
                 * @param message DeleteServiceLevelObjectiveRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IDeleteServiceLevelObjectiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteServiceLevelObjectiveRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteServiceLevelObjectiveRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.DeleteServiceLevelObjectiveRequest;

                /**
                 * Decodes a DeleteServiceLevelObjectiveRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteServiceLevelObjectiveRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.DeleteServiceLevelObjectiveRequest;

                /**
                 * Verifies a DeleteServiceLevelObjectiveRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteServiceLevelObjectiveRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteServiceLevelObjectiveRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.DeleteServiceLevelObjectiveRequest;

                /**
                 * Creates a plain object from a DeleteServiceLevelObjectiveRequest message. Also converts values to other types if specified.
                 * @param message DeleteServiceLevelObjectiveRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.DeleteServiceLevelObjectiveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteServiceLevelObjectiveRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Service. */
            interface IService {

                /** Service name */
                name?: (string|null);

                /** Service displayName */
                displayName?: (string|null);

                /** Service custom */
                custom?: (google.monitoring.v3.Service.ICustom|null);

                /** Service appEngine */
                appEngine?: (google.monitoring.v3.Service.IAppEngine|null);

                /** Service cloudEndpoints */
                cloudEndpoints?: (google.monitoring.v3.Service.ICloudEndpoints|null);

                /** Service clusterIstio */
                clusterIstio?: (google.monitoring.v3.Service.IClusterIstio|null);

                /** Service telemetry */
                telemetry?: (google.monitoring.v3.Service.ITelemetry|null);
            }

            /** Represents a Service. */
            class Service implements IService {

                /**
                 * Constructs a new Service.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IService);

                /** Service name. */
                public name: string;

                /** Service displayName. */
                public displayName: string;

                /** Service custom. */
                public custom?: (google.monitoring.v3.Service.ICustom|null);

                /** Service appEngine. */
                public appEngine?: (google.monitoring.v3.Service.IAppEngine|null);

                /** Service cloudEndpoints. */
                public cloudEndpoints?: (google.monitoring.v3.Service.ICloudEndpoints|null);

                /** Service clusterIstio. */
                public clusterIstio?: (google.monitoring.v3.Service.IClusterIstio|null);

                /** Service telemetry. */
                public telemetry?: (google.monitoring.v3.Service.ITelemetry|null);

                /** Service identifier. */
                public identifier?: ("custom"|"appEngine"|"cloudEndpoints"|"clusterIstio");

                /**
                 * Creates a new Service instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Service instance
                 */
                public static create(properties?: google.monitoring.v3.IService): google.monitoring.v3.Service;

                /**
                 * Encodes the specified Service message. Does not implicitly {@link google.monitoring.v3.Service.verify|verify} messages.
                 * @param message Service message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Service message, length delimited. Does not implicitly {@link google.monitoring.v3.Service.verify|verify} messages.
                 * @param message Service message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Service message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Service
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Service;

                /**
                 * Decodes a Service message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Service
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Service;

                /**
                 * Verifies a Service message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Service message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Service
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Service;

                /**
                 * Creates a plain object from a Service message. Also converts values to other types if specified.
                 * @param message Service
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Service to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Service {

                /** Properties of a Custom. */
                interface ICustom {
                }

                /** Represents a Custom. */
                class Custom implements ICustom {

                    /**
                     * Constructs a new Custom.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.Service.ICustom);

                    /**
                     * Creates a new Custom instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Custom instance
                     */
                    public static create(properties?: google.monitoring.v3.Service.ICustom): google.monitoring.v3.Service.Custom;

                    /**
                     * Encodes the specified Custom message. Does not implicitly {@link google.monitoring.v3.Service.Custom.verify|verify} messages.
                     * @param message Custom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.Service.ICustom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Custom message, length delimited. Does not implicitly {@link google.monitoring.v3.Service.Custom.verify|verify} messages.
                     * @param message Custom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.Service.ICustom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Custom message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Custom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Service.Custom;

                    /**
                     * Decodes a Custom message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Custom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Service.Custom;

                    /**
                     * Verifies a Custom message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Custom message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Custom
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Service.Custom;

                    /**
                     * Creates a plain object from a Custom message. Also converts values to other types if specified.
                     * @param message Custom
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.Service.Custom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Custom to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngine. */
                interface IAppEngine {

                    /** AppEngine moduleId */
                    moduleId?: (string|null);
                }

                /** Represents an AppEngine. */
                class AppEngine implements IAppEngine {

                    /**
                     * Constructs a new AppEngine.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.Service.IAppEngine);

                    /** AppEngine moduleId. */
                    public moduleId: string;

                    /**
                     * Creates a new AppEngine instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngine instance
                     */
                    public static create(properties?: google.monitoring.v3.Service.IAppEngine): google.monitoring.v3.Service.AppEngine;

                    /**
                     * Encodes the specified AppEngine message. Does not implicitly {@link google.monitoring.v3.Service.AppEngine.verify|verify} messages.
                     * @param message AppEngine message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.Service.IAppEngine, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngine message, length delimited. Does not implicitly {@link google.monitoring.v3.Service.AppEngine.verify|verify} messages.
                     * @param message AppEngine message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.Service.IAppEngine, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngine message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngine
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Service.AppEngine;

                    /**
                     * Decodes an AppEngine message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngine
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Service.AppEngine;

                    /**
                     * Verifies an AppEngine message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngine message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngine
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Service.AppEngine;

                    /**
                     * Creates a plain object from an AppEngine message. Also converts values to other types if specified.
                     * @param message AppEngine
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.Service.AppEngine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngine to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CloudEndpoints. */
                interface ICloudEndpoints {

                    /** CloudEndpoints service */
                    service?: (string|null);
                }

                /** Represents a CloudEndpoints. */
                class CloudEndpoints implements ICloudEndpoints {

                    /**
                     * Constructs a new CloudEndpoints.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.Service.ICloudEndpoints);

                    /** CloudEndpoints service. */
                    public service: string;

                    /**
                     * Creates a new CloudEndpoints instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudEndpoints instance
                     */
                    public static create(properties?: google.monitoring.v3.Service.ICloudEndpoints): google.monitoring.v3.Service.CloudEndpoints;

                    /**
                     * Encodes the specified CloudEndpoints message. Does not implicitly {@link google.monitoring.v3.Service.CloudEndpoints.verify|verify} messages.
                     * @param message CloudEndpoints message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.Service.ICloudEndpoints, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudEndpoints message, length delimited. Does not implicitly {@link google.monitoring.v3.Service.CloudEndpoints.verify|verify} messages.
                     * @param message CloudEndpoints message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.Service.ICloudEndpoints, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudEndpoints message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudEndpoints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Service.CloudEndpoints;

                    /**
                     * Decodes a CloudEndpoints message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudEndpoints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Service.CloudEndpoints;

                    /**
                     * Verifies a CloudEndpoints message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudEndpoints message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudEndpoints
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Service.CloudEndpoints;

                    /**
                     * Creates a plain object from a CloudEndpoints message. Also converts values to other types if specified.
                     * @param message CloudEndpoints
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.Service.CloudEndpoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudEndpoints to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClusterIstio. */
                interface IClusterIstio {

                    /** ClusterIstio location */
                    location?: (string|null);

                    /** ClusterIstio clusterName */
                    clusterName?: (string|null);

                    /** ClusterIstio serviceNamespace */
                    serviceNamespace?: (string|null);

                    /** ClusterIstio serviceName */
                    serviceName?: (string|null);
                }

                /** Represents a ClusterIstio. */
                class ClusterIstio implements IClusterIstio {

                    /**
                     * Constructs a new ClusterIstio.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.Service.IClusterIstio);

                    /** ClusterIstio location. */
                    public location: string;

                    /** ClusterIstio clusterName. */
                    public clusterName: string;

                    /** ClusterIstio serviceNamespace. */
                    public serviceNamespace: string;

                    /** ClusterIstio serviceName. */
                    public serviceName: string;

                    /**
                     * Creates a new ClusterIstio instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClusterIstio instance
                     */
                    public static create(properties?: google.monitoring.v3.Service.IClusterIstio): google.monitoring.v3.Service.ClusterIstio;

                    /**
                     * Encodes the specified ClusterIstio message. Does not implicitly {@link google.monitoring.v3.Service.ClusterIstio.verify|verify} messages.
                     * @param message ClusterIstio message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.Service.IClusterIstio, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClusterIstio message, length delimited. Does not implicitly {@link google.monitoring.v3.Service.ClusterIstio.verify|verify} messages.
                     * @param message ClusterIstio message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.Service.IClusterIstio, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClusterIstio message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClusterIstio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Service.ClusterIstio;

                    /**
                     * Decodes a ClusterIstio message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClusterIstio
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Service.ClusterIstio;

                    /**
                     * Verifies a ClusterIstio message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClusterIstio message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClusterIstio
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Service.ClusterIstio;

                    /**
                     * Creates a plain object from a ClusterIstio message. Also converts values to other types if specified.
                     * @param message ClusterIstio
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.Service.ClusterIstio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClusterIstio to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Telemetry. */
                interface ITelemetry {

                    /** Telemetry resourceName */
                    resourceName?: (string|null);
                }

                /** Represents a Telemetry. */
                class Telemetry implements ITelemetry {

                    /**
                     * Constructs a new Telemetry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.Service.ITelemetry);

                    /** Telemetry resourceName. */
                    public resourceName: string;

                    /**
                     * Creates a new Telemetry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Telemetry instance
                     */
                    public static create(properties?: google.monitoring.v3.Service.ITelemetry): google.monitoring.v3.Service.Telemetry;

                    /**
                     * Encodes the specified Telemetry message. Does not implicitly {@link google.monitoring.v3.Service.Telemetry.verify|verify} messages.
                     * @param message Telemetry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.Service.ITelemetry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Telemetry message, length delimited. Does not implicitly {@link google.monitoring.v3.Service.Telemetry.verify|verify} messages.
                     * @param message Telemetry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.Service.ITelemetry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Telemetry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Telemetry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Service.Telemetry;

                    /**
                     * Decodes a Telemetry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Telemetry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Service.Telemetry;

                    /**
                     * Verifies a Telemetry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Telemetry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Telemetry
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Service.Telemetry;

                    /**
                     * Creates a plain object from a Telemetry message. Also converts values to other types if specified.
                     * @param message Telemetry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.Service.Telemetry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Telemetry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ServiceLevelObjective. */
            interface IServiceLevelObjective {

                /** ServiceLevelObjective name */
                name?: (string|null);

                /** ServiceLevelObjective displayName */
                displayName?: (string|null);

                /** ServiceLevelObjective serviceLevelIndicator */
                serviceLevelIndicator?: (google.monitoring.v3.IServiceLevelIndicator|null);

                /** ServiceLevelObjective goal */
                goal?: (number|null);

                /** ServiceLevelObjective rollingPeriod */
                rollingPeriod?: (google.protobuf.IDuration|null);

                /** ServiceLevelObjective calendarPeriod */
                calendarPeriod?: (google.type.CalendarPeriod|keyof typeof google.type.CalendarPeriod|null);
            }

            /** Represents a ServiceLevelObjective. */
            class ServiceLevelObjective implements IServiceLevelObjective {

                /**
                 * Constructs a new ServiceLevelObjective.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IServiceLevelObjective);

                /** ServiceLevelObjective name. */
                public name: string;

                /** ServiceLevelObjective displayName. */
                public displayName: string;

                /** ServiceLevelObjective serviceLevelIndicator. */
                public serviceLevelIndicator?: (google.monitoring.v3.IServiceLevelIndicator|null);

                /** ServiceLevelObjective goal. */
                public goal: number;

                /** ServiceLevelObjective rollingPeriod. */
                public rollingPeriod?: (google.protobuf.IDuration|null);

                /** ServiceLevelObjective calendarPeriod. */
                public calendarPeriod: (google.type.CalendarPeriod|keyof typeof google.type.CalendarPeriod);

                /** ServiceLevelObjective period. */
                public period?: ("rollingPeriod"|"calendarPeriod");

                /**
                 * Creates a new ServiceLevelObjective instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServiceLevelObjective instance
                 */
                public static create(properties?: google.monitoring.v3.IServiceLevelObjective): google.monitoring.v3.ServiceLevelObjective;

                /**
                 * Encodes the specified ServiceLevelObjective message. Does not implicitly {@link google.monitoring.v3.ServiceLevelObjective.verify|verify} messages.
                 * @param message ServiceLevelObjective message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IServiceLevelObjective, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServiceLevelObjective message, length delimited. Does not implicitly {@link google.monitoring.v3.ServiceLevelObjective.verify|verify} messages.
                 * @param message ServiceLevelObjective message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IServiceLevelObjective, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServiceLevelObjective message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServiceLevelObjective
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ServiceLevelObjective;

                /**
                 * Decodes a ServiceLevelObjective message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServiceLevelObjective
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ServiceLevelObjective;

                /**
                 * Verifies a ServiceLevelObjective message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServiceLevelObjective message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServiceLevelObjective
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ServiceLevelObjective;

                /**
                 * Creates a plain object from a ServiceLevelObjective message. Also converts values to other types if specified.
                 * @param message ServiceLevelObjective
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ServiceLevelObjective, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServiceLevelObjective to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ServiceLevelObjective {

                /** View enum. */
                enum View {
                    VIEW_UNSPECIFIED = 0,
                    FULL = 2,
                    EXPLICIT = 1
                }
            }

            /** Properties of a ServiceLevelIndicator. */
            interface IServiceLevelIndicator {

                /** ServiceLevelIndicator basicSli */
                basicSli?: (google.monitoring.v3.IBasicSli|null);

                /** ServiceLevelIndicator requestBased */
                requestBased?: (google.monitoring.v3.IRequestBasedSli|null);

                /** ServiceLevelIndicator windowsBased */
                windowsBased?: (google.monitoring.v3.IWindowsBasedSli|null);
            }

            /** Represents a ServiceLevelIndicator. */
            class ServiceLevelIndicator implements IServiceLevelIndicator {

                /**
                 * Constructs a new ServiceLevelIndicator.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IServiceLevelIndicator);

                /** ServiceLevelIndicator basicSli. */
                public basicSli?: (google.monitoring.v3.IBasicSli|null);

                /** ServiceLevelIndicator requestBased. */
                public requestBased?: (google.monitoring.v3.IRequestBasedSli|null);

                /** ServiceLevelIndicator windowsBased. */
                public windowsBased?: (google.monitoring.v3.IWindowsBasedSli|null);

                /** ServiceLevelIndicator type. */
                public type?: ("basicSli"|"requestBased"|"windowsBased");

                /**
                 * Creates a new ServiceLevelIndicator instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ServiceLevelIndicator instance
                 */
                public static create(properties?: google.monitoring.v3.IServiceLevelIndicator): google.monitoring.v3.ServiceLevelIndicator;

                /**
                 * Encodes the specified ServiceLevelIndicator message. Does not implicitly {@link google.monitoring.v3.ServiceLevelIndicator.verify|verify} messages.
                 * @param message ServiceLevelIndicator message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IServiceLevelIndicator, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ServiceLevelIndicator message, length delimited. Does not implicitly {@link google.monitoring.v3.ServiceLevelIndicator.verify|verify} messages.
                 * @param message ServiceLevelIndicator message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IServiceLevelIndicator, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ServiceLevelIndicator message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ServiceLevelIndicator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ServiceLevelIndicator;

                /**
                 * Decodes a ServiceLevelIndicator message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ServiceLevelIndicator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ServiceLevelIndicator;

                /**
                 * Verifies a ServiceLevelIndicator message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ServiceLevelIndicator message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ServiceLevelIndicator
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ServiceLevelIndicator;

                /**
                 * Creates a plain object from a ServiceLevelIndicator message. Also converts values to other types if specified.
                 * @param message ServiceLevelIndicator
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ServiceLevelIndicator, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ServiceLevelIndicator to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BasicSli. */
            interface IBasicSli {

                /** BasicSli method */
                method?: (string[]|null);

                /** BasicSli location */
                location?: (string[]|null);

                /** BasicSli version */
                version?: (string[]|null);

                /** BasicSli availability */
                availability?: (google.monitoring.v3.BasicSli.IAvailabilityCriteria|null);

                /** BasicSli latency */
                latency?: (google.monitoring.v3.BasicSli.ILatencyCriteria|null);
            }

            /** Represents a BasicSli. */
            class BasicSli implements IBasicSli {

                /**
                 * Constructs a new BasicSli.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IBasicSli);

                /** BasicSli method. */
                public method: string[];

                /** BasicSli location. */
                public location: string[];

                /** BasicSli version. */
                public version: string[];

                /** BasicSli availability. */
                public availability?: (google.monitoring.v3.BasicSli.IAvailabilityCriteria|null);

                /** BasicSli latency. */
                public latency?: (google.monitoring.v3.BasicSli.ILatencyCriteria|null);

                /** BasicSli sliCriteria. */
                public sliCriteria?: ("availability"|"latency");

                /**
                 * Creates a new BasicSli instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BasicSli instance
                 */
                public static create(properties?: google.monitoring.v3.IBasicSli): google.monitoring.v3.BasicSli;

                /**
                 * Encodes the specified BasicSli message. Does not implicitly {@link google.monitoring.v3.BasicSli.verify|verify} messages.
                 * @param message BasicSli message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IBasicSli, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BasicSli message, length delimited. Does not implicitly {@link google.monitoring.v3.BasicSli.verify|verify} messages.
                 * @param message BasicSli message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IBasicSli, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BasicSli message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BasicSli
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.BasicSli;

                /**
                 * Decodes a BasicSli message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BasicSli
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.BasicSli;

                /**
                 * Verifies a BasicSli message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BasicSli message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BasicSli
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.BasicSli;

                /**
                 * Creates a plain object from a BasicSli message. Also converts values to other types if specified.
                 * @param message BasicSli
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.BasicSli, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BasicSli to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BasicSli {

                /** Properties of an AvailabilityCriteria. */
                interface IAvailabilityCriteria {
                }

                /** Represents an AvailabilityCriteria. */
                class AvailabilityCriteria implements IAvailabilityCriteria {

                    /**
                     * Constructs a new AvailabilityCriteria.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.BasicSli.IAvailabilityCriteria);

                    /**
                     * Creates a new AvailabilityCriteria instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AvailabilityCriteria instance
                     */
                    public static create(properties?: google.monitoring.v3.BasicSli.IAvailabilityCriteria): google.monitoring.v3.BasicSli.AvailabilityCriteria;

                    /**
                     * Encodes the specified AvailabilityCriteria message. Does not implicitly {@link google.monitoring.v3.BasicSli.AvailabilityCriteria.verify|verify} messages.
                     * @param message AvailabilityCriteria message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.BasicSli.IAvailabilityCriteria, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AvailabilityCriteria message, length delimited. Does not implicitly {@link google.monitoring.v3.BasicSli.AvailabilityCriteria.verify|verify} messages.
                     * @param message AvailabilityCriteria message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.BasicSli.IAvailabilityCriteria, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AvailabilityCriteria message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AvailabilityCriteria
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.BasicSli.AvailabilityCriteria;

                    /**
                     * Decodes an AvailabilityCriteria message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AvailabilityCriteria
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.BasicSli.AvailabilityCriteria;

                    /**
                     * Verifies an AvailabilityCriteria message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AvailabilityCriteria message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AvailabilityCriteria
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.BasicSli.AvailabilityCriteria;

                    /**
                     * Creates a plain object from an AvailabilityCriteria message. Also converts values to other types if specified.
                     * @param message AvailabilityCriteria
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.BasicSli.AvailabilityCriteria, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AvailabilityCriteria to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LatencyCriteria. */
                interface ILatencyCriteria {

                    /** LatencyCriteria threshold */
                    threshold?: (google.protobuf.IDuration|null);
                }

                /** Represents a LatencyCriteria. */
                class LatencyCriteria implements ILatencyCriteria {

                    /**
                     * Constructs a new LatencyCriteria.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.BasicSli.ILatencyCriteria);

                    /** LatencyCriteria threshold. */
                    public threshold?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new LatencyCriteria instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LatencyCriteria instance
                     */
                    public static create(properties?: google.monitoring.v3.BasicSli.ILatencyCriteria): google.monitoring.v3.BasicSli.LatencyCriteria;

                    /**
                     * Encodes the specified LatencyCriteria message. Does not implicitly {@link google.monitoring.v3.BasicSli.LatencyCriteria.verify|verify} messages.
                     * @param message LatencyCriteria message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.BasicSli.ILatencyCriteria, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LatencyCriteria message, length delimited. Does not implicitly {@link google.monitoring.v3.BasicSli.LatencyCriteria.verify|verify} messages.
                     * @param message LatencyCriteria message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.BasicSli.ILatencyCriteria, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LatencyCriteria message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LatencyCriteria
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.BasicSli.LatencyCriteria;

                    /**
                     * Decodes a LatencyCriteria message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LatencyCriteria
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.BasicSli.LatencyCriteria;

                    /**
                     * Verifies a LatencyCriteria message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LatencyCriteria message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LatencyCriteria
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.BasicSli.LatencyCriteria;

                    /**
                     * Creates a plain object from a LatencyCriteria message. Also converts values to other types if specified.
                     * @param message LatencyCriteria
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.BasicSli.LatencyCriteria, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LatencyCriteria to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Range. */
            interface IRange {

                /** Range min */
                min?: (number|null);

                /** Range max */
                max?: (number|null);
            }

            /** Represents a Range. */
            class Range implements IRange {

                /**
                 * Constructs a new Range.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IRange);

                /** Range min. */
                public min: number;

                /** Range max. */
                public max: number;

                /**
                 * Creates a new Range instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Range instance
                 */
                public static create(properties?: google.monitoring.v3.IRange): google.monitoring.v3.Range;

                /**
                 * Encodes the specified Range message. Does not implicitly {@link google.monitoring.v3.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Range message, length delimited. Does not implicitly {@link google.monitoring.v3.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Range message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.Range;

                /**
                 * Decodes a Range message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.Range;

                /**
                 * Verifies a Range message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Range message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Range
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.Range;

                /**
                 * Creates a plain object from a Range message. Also converts values to other types if specified.
                 * @param message Range
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Range to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RequestBasedSli. */
            interface IRequestBasedSli {

                /** RequestBasedSli goodTotalRatio */
                goodTotalRatio?: (google.monitoring.v3.ITimeSeriesRatio|null);

                /** RequestBasedSli distributionCut */
                distributionCut?: (google.monitoring.v3.IDistributionCut|null);
            }

            /** Represents a RequestBasedSli. */
            class RequestBasedSli implements IRequestBasedSli {

                /**
                 * Constructs a new RequestBasedSli.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IRequestBasedSli);

                /** RequestBasedSli goodTotalRatio. */
                public goodTotalRatio?: (google.monitoring.v3.ITimeSeriesRatio|null);

                /** RequestBasedSli distributionCut. */
                public distributionCut?: (google.monitoring.v3.IDistributionCut|null);

                /** RequestBasedSli method. */
                public method?: ("goodTotalRatio"|"distributionCut");

                /**
                 * Creates a new RequestBasedSli instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RequestBasedSli instance
                 */
                public static create(properties?: google.monitoring.v3.IRequestBasedSli): google.monitoring.v3.RequestBasedSli;

                /**
                 * Encodes the specified RequestBasedSli message. Does not implicitly {@link google.monitoring.v3.RequestBasedSli.verify|verify} messages.
                 * @param message RequestBasedSli message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IRequestBasedSli, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RequestBasedSli message, length delimited. Does not implicitly {@link google.monitoring.v3.RequestBasedSli.verify|verify} messages.
                 * @param message RequestBasedSli message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IRequestBasedSli, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RequestBasedSli message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RequestBasedSli
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.RequestBasedSli;

                /**
                 * Decodes a RequestBasedSli message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RequestBasedSli
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.RequestBasedSli;

                /**
                 * Verifies a RequestBasedSli message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RequestBasedSli message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RequestBasedSli
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.RequestBasedSli;

                /**
                 * Creates a plain object from a RequestBasedSli message. Also converts values to other types if specified.
                 * @param message RequestBasedSli
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.RequestBasedSli, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RequestBasedSli to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TimeSeriesRatio. */
            interface ITimeSeriesRatio {

                /** TimeSeriesRatio goodServiceFilter */
                goodServiceFilter?: (string|null);

                /** TimeSeriesRatio badServiceFilter */
                badServiceFilter?: (string|null);

                /** TimeSeriesRatio totalServiceFilter */
                totalServiceFilter?: (string|null);
            }

            /** Represents a TimeSeriesRatio. */
            class TimeSeriesRatio implements ITimeSeriesRatio {

                /**
                 * Constructs a new TimeSeriesRatio.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ITimeSeriesRatio);

                /** TimeSeriesRatio goodServiceFilter. */
                public goodServiceFilter: string;

                /** TimeSeriesRatio badServiceFilter. */
                public badServiceFilter: string;

                /** TimeSeriesRatio totalServiceFilter. */
                public totalServiceFilter: string;

                /**
                 * Creates a new TimeSeriesRatio instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeSeriesRatio instance
                 */
                public static create(properties?: google.monitoring.v3.ITimeSeriesRatio): google.monitoring.v3.TimeSeriesRatio;

                /**
                 * Encodes the specified TimeSeriesRatio message. Does not implicitly {@link google.monitoring.v3.TimeSeriesRatio.verify|verify} messages.
                 * @param message TimeSeriesRatio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ITimeSeriesRatio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeSeriesRatio message, length delimited. Does not implicitly {@link google.monitoring.v3.TimeSeriesRatio.verify|verify} messages.
                 * @param message TimeSeriesRatio message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ITimeSeriesRatio, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeSeriesRatio message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeSeriesRatio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.TimeSeriesRatio;

                /**
                 * Decodes a TimeSeriesRatio message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeSeriesRatio
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.TimeSeriesRatio;

                /**
                 * Verifies a TimeSeriesRatio message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeSeriesRatio message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeSeriesRatio
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.TimeSeriesRatio;

                /**
                 * Creates a plain object from a TimeSeriesRatio message. Also converts values to other types if specified.
                 * @param message TimeSeriesRatio
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.TimeSeriesRatio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeSeriesRatio to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DistributionCut. */
            interface IDistributionCut {

                /** DistributionCut distributionFilter */
                distributionFilter?: (string|null);

                /** DistributionCut range */
                range?: (google.monitoring.v3.IRange|null);
            }

            /** Represents a DistributionCut. */
            class DistributionCut implements IDistributionCut {

                /**
                 * Constructs a new DistributionCut.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IDistributionCut);

                /** DistributionCut distributionFilter. */
                public distributionFilter: string;

                /** DistributionCut range. */
                public range?: (google.monitoring.v3.IRange|null);

                /**
                 * Creates a new DistributionCut instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DistributionCut instance
                 */
                public static create(properties?: google.monitoring.v3.IDistributionCut): google.monitoring.v3.DistributionCut;

                /**
                 * Encodes the specified DistributionCut message. Does not implicitly {@link google.monitoring.v3.DistributionCut.verify|verify} messages.
                 * @param message DistributionCut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IDistributionCut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DistributionCut message, length delimited. Does not implicitly {@link google.monitoring.v3.DistributionCut.verify|verify} messages.
                 * @param message DistributionCut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IDistributionCut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DistributionCut message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DistributionCut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.DistributionCut;

                /**
                 * Decodes a DistributionCut message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DistributionCut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.DistributionCut;

                /**
                 * Verifies a DistributionCut message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DistributionCut message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DistributionCut
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.DistributionCut;

                /**
                 * Creates a plain object from a DistributionCut message. Also converts values to other types if specified.
                 * @param message DistributionCut
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.DistributionCut, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DistributionCut to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WindowsBasedSli. */
            interface IWindowsBasedSli {

                /** WindowsBasedSli goodBadMetricFilter */
                goodBadMetricFilter?: (string|null);

                /** WindowsBasedSli goodTotalRatioThreshold */
                goodTotalRatioThreshold?: (google.monitoring.v3.WindowsBasedSli.IPerformanceThreshold|null);

                /** WindowsBasedSli metricMeanInRange */
                metricMeanInRange?: (google.monitoring.v3.WindowsBasedSli.IMetricRange|null);

                /** WindowsBasedSli metricSumInRange */
                metricSumInRange?: (google.monitoring.v3.WindowsBasedSli.IMetricRange|null);

                /** WindowsBasedSli windowPeriod */
                windowPeriod?: (google.protobuf.IDuration|null);
            }

            /** Represents a WindowsBasedSli. */
            class WindowsBasedSli implements IWindowsBasedSli {

                /**
                 * Constructs a new WindowsBasedSli.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IWindowsBasedSli);

                /** WindowsBasedSli goodBadMetricFilter. */
                public goodBadMetricFilter: string;

                /** WindowsBasedSli goodTotalRatioThreshold. */
                public goodTotalRatioThreshold?: (google.monitoring.v3.WindowsBasedSli.IPerformanceThreshold|null);

                /** WindowsBasedSli metricMeanInRange. */
                public metricMeanInRange?: (google.monitoring.v3.WindowsBasedSli.IMetricRange|null);

                /** WindowsBasedSli metricSumInRange. */
                public metricSumInRange?: (google.monitoring.v3.WindowsBasedSli.IMetricRange|null);

                /** WindowsBasedSli windowPeriod. */
                public windowPeriod?: (google.protobuf.IDuration|null);

                /** WindowsBasedSli windowCriterion. */
                public windowCriterion?: ("goodBadMetricFilter"|"goodTotalRatioThreshold"|"metricMeanInRange"|"metricSumInRange");

                /**
                 * Creates a new WindowsBasedSli instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WindowsBasedSli instance
                 */
                public static create(properties?: google.monitoring.v3.IWindowsBasedSli): google.monitoring.v3.WindowsBasedSli;

                /**
                 * Encodes the specified WindowsBasedSli message. Does not implicitly {@link google.monitoring.v3.WindowsBasedSli.verify|verify} messages.
                 * @param message WindowsBasedSli message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IWindowsBasedSli, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WindowsBasedSli message, length delimited. Does not implicitly {@link google.monitoring.v3.WindowsBasedSli.verify|verify} messages.
                 * @param message WindowsBasedSli message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IWindowsBasedSli, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WindowsBasedSli message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WindowsBasedSli
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.WindowsBasedSli;

                /**
                 * Decodes a WindowsBasedSli message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WindowsBasedSli
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.WindowsBasedSli;

                /**
                 * Verifies a WindowsBasedSli message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WindowsBasedSli message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WindowsBasedSli
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.WindowsBasedSli;

                /**
                 * Creates a plain object from a WindowsBasedSli message. Also converts values to other types if specified.
                 * @param message WindowsBasedSli
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.WindowsBasedSli, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WindowsBasedSli to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace WindowsBasedSli {

                /** Properties of a PerformanceThreshold. */
                interface IPerformanceThreshold {

                    /** PerformanceThreshold performance */
                    performance?: (google.monitoring.v3.IRequestBasedSli|null);

                    /** PerformanceThreshold basicSliPerformance */
                    basicSliPerformance?: (google.monitoring.v3.IBasicSli|null);

                    /** PerformanceThreshold threshold */
                    threshold?: (number|null);
                }

                /** Represents a PerformanceThreshold. */
                class PerformanceThreshold implements IPerformanceThreshold {

                    /**
                     * Constructs a new PerformanceThreshold.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.WindowsBasedSli.IPerformanceThreshold);

                    /** PerformanceThreshold performance. */
                    public performance?: (google.monitoring.v3.IRequestBasedSli|null);

                    /** PerformanceThreshold basicSliPerformance. */
                    public basicSliPerformance?: (google.monitoring.v3.IBasicSli|null);

                    /** PerformanceThreshold threshold. */
                    public threshold: number;

                    /** PerformanceThreshold type. */
                    public type?: ("performance"|"basicSliPerformance");

                    /**
                     * Creates a new PerformanceThreshold instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PerformanceThreshold instance
                     */
                    public static create(properties?: google.monitoring.v3.WindowsBasedSli.IPerformanceThreshold): google.monitoring.v3.WindowsBasedSli.PerformanceThreshold;

                    /**
                     * Encodes the specified PerformanceThreshold message. Does not implicitly {@link google.monitoring.v3.WindowsBasedSli.PerformanceThreshold.verify|verify} messages.
                     * @param message PerformanceThreshold message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.WindowsBasedSli.IPerformanceThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PerformanceThreshold message, length delimited. Does not implicitly {@link google.monitoring.v3.WindowsBasedSli.PerformanceThreshold.verify|verify} messages.
                     * @param message PerformanceThreshold message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.WindowsBasedSli.IPerformanceThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PerformanceThreshold message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PerformanceThreshold
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.WindowsBasedSli.PerformanceThreshold;

                    /**
                     * Decodes a PerformanceThreshold message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PerformanceThreshold
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.WindowsBasedSli.PerformanceThreshold;

                    /**
                     * Verifies a PerformanceThreshold message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PerformanceThreshold message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PerformanceThreshold
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.WindowsBasedSli.PerformanceThreshold;

                    /**
                     * Creates a plain object from a PerformanceThreshold message. Also converts values to other types if specified.
                     * @param message PerformanceThreshold
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.WindowsBasedSli.PerformanceThreshold, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PerformanceThreshold to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetricRange. */
                interface IMetricRange {

                    /** MetricRange timeSeries */
                    timeSeries?: (string|null);

                    /** MetricRange range */
                    range?: (google.monitoring.v3.IRange|null);
                }

                /** Represents a MetricRange. */
                class MetricRange implements IMetricRange {

                    /**
                     * Constructs a new MetricRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.WindowsBasedSli.IMetricRange);

                    /** MetricRange timeSeries. */
                    public timeSeries: string;

                    /** MetricRange range. */
                    public range?: (google.monitoring.v3.IRange|null);

                    /**
                     * Creates a new MetricRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricRange instance
                     */
                    public static create(properties?: google.monitoring.v3.WindowsBasedSli.IMetricRange): google.monitoring.v3.WindowsBasedSli.MetricRange;

                    /**
                     * Encodes the specified MetricRange message. Does not implicitly {@link google.monitoring.v3.WindowsBasedSli.MetricRange.verify|verify} messages.
                     * @param message MetricRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.WindowsBasedSli.IMetricRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricRange message, length delimited. Does not implicitly {@link google.monitoring.v3.WindowsBasedSli.MetricRange.verify|verify} messages.
                     * @param message MetricRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.WindowsBasedSli.IMetricRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.WindowsBasedSli.MetricRange;

                    /**
                     * Decodes a MetricRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.WindowsBasedSli.MetricRange;

                    /**
                     * Verifies a MetricRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.WindowsBasedSli.MetricRange;

                    /**
                     * Creates a plain object from a MetricRange message. Also converts values to other types if specified.
                     * @param message MetricRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.WindowsBasedSli.MetricRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Represents an UptimeCheckService */
            class UptimeCheckService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new UptimeCheckService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new UptimeCheckService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UptimeCheckService;

                /**
                 * Calls ListUptimeCheckConfigs.
                 * @param request ListUptimeCheckConfigsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListUptimeCheckConfigsResponse
                 */
                public listUptimeCheckConfigs(request: google.monitoring.v3.IListUptimeCheckConfigsRequest, callback: google.monitoring.v3.UptimeCheckService.ListUptimeCheckConfigsCallback): void;

                /**
                 * Calls ListUptimeCheckConfigs.
                 * @param request ListUptimeCheckConfigsRequest message or plain object
                 * @returns Promise
                 */
                public listUptimeCheckConfigs(request: google.monitoring.v3.IListUptimeCheckConfigsRequest): Promise<google.monitoring.v3.ListUptimeCheckConfigsResponse>;

                /**
                 * Calls GetUptimeCheckConfig.
                 * @param request GetUptimeCheckConfigRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and UptimeCheckConfig
                 */
                public getUptimeCheckConfig(request: google.monitoring.v3.IGetUptimeCheckConfigRequest, callback: google.monitoring.v3.UptimeCheckService.GetUptimeCheckConfigCallback): void;

                /**
                 * Calls GetUptimeCheckConfig.
                 * @param request GetUptimeCheckConfigRequest message or plain object
                 * @returns Promise
                 */
                public getUptimeCheckConfig(request: google.monitoring.v3.IGetUptimeCheckConfigRequest): Promise<google.monitoring.v3.UptimeCheckConfig>;

                /**
                 * Calls CreateUptimeCheckConfig.
                 * @param request CreateUptimeCheckConfigRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and UptimeCheckConfig
                 */
                public createUptimeCheckConfig(request: google.monitoring.v3.ICreateUptimeCheckConfigRequest, callback: google.monitoring.v3.UptimeCheckService.CreateUptimeCheckConfigCallback): void;

                /**
                 * Calls CreateUptimeCheckConfig.
                 * @param request CreateUptimeCheckConfigRequest message or plain object
                 * @returns Promise
                 */
                public createUptimeCheckConfig(request: google.monitoring.v3.ICreateUptimeCheckConfigRequest): Promise<google.monitoring.v3.UptimeCheckConfig>;

                /**
                 * Calls UpdateUptimeCheckConfig.
                 * @param request UpdateUptimeCheckConfigRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and UptimeCheckConfig
                 */
                public updateUptimeCheckConfig(request: google.monitoring.v3.IUpdateUptimeCheckConfigRequest, callback: google.monitoring.v3.UptimeCheckService.UpdateUptimeCheckConfigCallback): void;

                /**
                 * Calls UpdateUptimeCheckConfig.
                 * @param request UpdateUptimeCheckConfigRequest message or plain object
                 * @returns Promise
                 */
                public updateUptimeCheckConfig(request: google.monitoring.v3.IUpdateUptimeCheckConfigRequest): Promise<google.monitoring.v3.UptimeCheckConfig>;

                /**
                 * Calls DeleteUptimeCheckConfig.
                 * @param request DeleteUptimeCheckConfigRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteUptimeCheckConfig(request: google.monitoring.v3.IDeleteUptimeCheckConfigRequest, callback: google.monitoring.v3.UptimeCheckService.DeleteUptimeCheckConfigCallback): void;

                /**
                 * Calls DeleteUptimeCheckConfig.
                 * @param request DeleteUptimeCheckConfigRequest message or plain object
                 * @returns Promise
                 */
                public deleteUptimeCheckConfig(request: google.monitoring.v3.IDeleteUptimeCheckConfigRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls ListUptimeCheckIps.
                 * @param request ListUptimeCheckIpsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListUptimeCheckIpsResponse
                 */
                public listUptimeCheckIps(request: google.monitoring.v3.IListUptimeCheckIpsRequest, callback: google.monitoring.v3.UptimeCheckService.ListUptimeCheckIpsCallback): void;

                /**
                 * Calls ListUptimeCheckIps.
                 * @param request ListUptimeCheckIpsRequest message or plain object
                 * @returns Promise
                 */
                public listUptimeCheckIps(request: google.monitoring.v3.IListUptimeCheckIpsRequest): Promise<google.monitoring.v3.ListUptimeCheckIpsResponse>;
            }

            namespace UptimeCheckService {

                /**
                 * Callback as used by {@link google.monitoring.v3.UptimeCheckService#listUptimeCheckConfigs}.
                 * @param error Error, if any
                 * @param [response] ListUptimeCheckConfigsResponse
                 */
                type ListUptimeCheckConfigsCallback = (error: (Error|null), response?: google.monitoring.v3.ListUptimeCheckConfigsResponse) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.UptimeCheckService#getUptimeCheckConfig}.
                 * @param error Error, if any
                 * @param [response] UptimeCheckConfig
                 */
                type GetUptimeCheckConfigCallback = (error: (Error|null), response?: google.monitoring.v3.UptimeCheckConfig) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.UptimeCheckService#createUptimeCheckConfig}.
                 * @param error Error, if any
                 * @param [response] UptimeCheckConfig
                 */
                type CreateUptimeCheckConfigCallback = (error: (Error|null), response?: google.monitoring.v3.UptimeCheckConfig) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.UptimeCheckService#updateUptimeCheckConfig}.
                 * @param error Error, if any
                 * @param [response] UptimeCheckConfig
                 */
                type UpdateUptimeCheckConfigCallback = (error: (Error|null), response?: google.monitoring.v3.UptimeCheckConfig) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.UptimeCheckService#deleteUptimeCheckConfig}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteUptimeCheckConfigCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.monitoring.v3.UptimeCheckService#listUptimeCheckIps}.
                 * @param error Error, if any
                 * @param [response] ListUptimeCheckIpsResponse
                 */
                type ListUptimeCheckIpsCallback = (error: (Error|null), response?: google.monitoring.v3.ListUptimeCheckIpsResponse) => void;
            }

            /** Properties of a ListUptimeCheckConfigsRequest. */
            interface IListUptimeCheckConfigsRequest {

                /** ListUptimeCheckConfigsRequest parent */
                parent?: (string|null);

                /** ListUptimeCheckConfigsRequest pageSize */
                pageSize?: (number|null);

                /** ListUptimeCheckConfigsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListUptimeCheckConfigsRequest. */
            class ListUptimeCheckConfigsRequest implements IListUptimeCheckConfigsRequest {

                /**
                 * Constructs a new ListUptimeCheckConfigsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListUptimeCheckConfigsRequest);

                /** ListUptimeCheckConfigsRequest parent. */
                public parent: string;

                /** ListUptimeCheckConfigsRequest pageSize. */
                public pageSize: number;

                /** ListUptimeCheckConfigsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListUptimeCheckConfigsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListUptimeCheckConfigsRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListUptimeCheckConfigsRequest): google.monitoring.v3.ListUptimeCheckConfigsRequest;

                /**
                 * Encodes the specified ListUptimeCheckConfigsRequest message. Does not implicitly {@link google.monitoring.v3.ListUptimeCheckConfigsRequest.verify|verify} messages.
                 * @param message ListUptimeCheckConfigsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListUptimeCheckConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListUptimeCheckConfigsRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListUptimeCheckConfigsRequest.verify|verify} messages.
                 * @param message ListUptimeCheckConfigsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListUptimeCheckConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListUptimeCheckConfigsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListUptimeCheckConfigsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListUptimeCheckConfigsRequest;

                /**
                 * Decodes a ListUptimeCheckConfigsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListUptimeCheckConfigsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListUptimeCheckConfigsRequest;

                /**
                 * Verifies a ListUptimeCheckConfigsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListUptimeCheckConfigsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListUptimeCheckConfigsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListUptimeCheckConfigsRequest;

                /**
                 * Creates a plain object from a ListUptimeCheckConfigsRequest message. Also converts values to other types if specified.
                 * @param message ListUptimeCheckConfigsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListUptimeCheckConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListUptimeCheckConfigsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListUptimeCheckConfigsResponse. */
            interface IListUptimeCheckConfigsResponse {

                /** ListUptimeCheckConfigsResponse uptimeCheckConfigs */
                uptimeCheckConfigs?: (google.monitoring.v3.IUptimeCheckConfig[]|null);

                /** ListUptimeCheckConfigsResponse nextPageToken */
                nextPageToken?: (string|null);

                /** ListUptimeCheckConfigsResponse totalSize */
                totalSize?: (number|null);
            }

            /** Represents a ListUptimeCheckConfigsResponse. */
            class ListUptimeCheckConfigsResponse implements IListUptimeCheckConfigsResponse {

                /**
                 * Constructs a new ListUptimeCheckConfigsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListUptimeCheckConfigsResponse);

                /** ListUptimeCheckConfigsResponse uptimeCheckConfigs. */
                public uptimeCheckConfigs: google.monitoring.v3.IUptimeCheckConfig[];

                /** ListUptimeCheckConfigsResponse nextPageToken. */
                public nextPageToken: string;

                /** ListUptimeCheckConfigsResponse totalSize. */
                public totalSize: number;

                /**
                 * Creates a new ListUptimeCheckConfigsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListUptimeCheckConfigsResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListUptimeCheckConfigsResponse): google.monitoring.v3.ListUptimeCheckConfigsResponse;

                /**
                 * Encodes the specified ListUptimeCheckConfigsResponse message. Does not implicitly {@link google.monitoring.v3.ListUptimeCheckConfigsResponse.verify|verify} messages.
                 * @param message ListUptimeCheckConfigsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListUptimeCheckConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListUptimeCheckConfigsResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListUptimeCheckConfigsResponse.verify|verify} messages.
                 * @param message ListUptimeCheckConfigsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListUptimeCheckConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListUptimeCheckConfigsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListUptimeCheckConfigsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListUptimeCheckConfigsResponse;

                /**
                 * Decodes a ListUptimeCheckConfigsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListUptimeCheckConfigsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListUptimeCheckConfigsResponse;

                /**
                 * Verifies a ListUptimeCheckConfigsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListUptimeCheckConfigsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListUptimeCheckConfigsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListUptimeCheckConfigsResponse;

                /**
                 * Creates a plain object from a ListUptimeCheckConfigsResponse message. Also converts values to other types if specified.
                 * @param message ListUptimeCheckConfigsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListUptimeCheckConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListUptimeCheckConfigsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetUptimeCheckConfigRequest. */
            interface IGetUptimeCheckConfigRequest {

                /** GetUptimeCheckConfigRequest name */
                name?: (string|null);
            }

            /** Represents a GetUptimeCheckConfigRequest. */
            class GetUptimeCheckConfigRequest implements IGetUptimeCheckConfigRequest {

                /**
                 * Constructs a new GetUptimeCheckConfigRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IGetUptimeCheckConfigRequest);

                /** GetUptimeCheckConfigRequest name. */
                public name: string;

                /**
                 * Creates a new GetUptimeCheckConfigRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetUptimeCheckConfigRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IGetUptimeCheckConfigRequest): google.monitoring.v3.GetUptimeCheckConfigRequest;

                /**
                 * Encodes the specified GetUptimeCheckConfigRequest message. Does not implicitly {@link google.monitoring.v3.GetUptimeCheckConfigRequest.verify|verify} messages.
                 * @param message GetUptimeCheckConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IGetUptimeCheckConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetUptimeCheckConfigRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.GetUptimeCheckConfigRequest.verify|verify} messages.
                 * @param message GetUptimeCheckConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IGetUptimeCheckConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetUptimeCheckConfigRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetUptimeCheckConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.GetUptimeCheckConfigRequest;

                /**
                 * Decodes a GetUptimeCheckConfigRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetUptimeCheckConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.GetUptimeCheckConfigRequest;

                /**
                 * Verifies a GetUptimeCheckConfigRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetUptimeCheckConfigRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetUptimeCheckConfigRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.GetUptimeCheckConfigRequest;

                /**
                 * Creates a plain object from a GetUptimeCheckConfigRequest message. Also converts values to other types if specified.
                 * @param message GetUptimeCheckConfigRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.GetUptimeCheckConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetUptimeCheckConfigRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CreateUptimeCheckConfigRequest. */
            interface ICreateUptimeCheckConfigRequest {

                /** CreateUptimeCheckConfigRequest parent */
                parent?: (string|null);

                /** CreateUptimeCheckConfigRequest uptimeCheckConfig */
                uptimeCheckConfig?: (google.monitoring.v3.IUptimeCheckConfig|null);
            }

            /** Represents a CreateUptimeCheckConfigRequest. */
            class CreateUptimeCheckConfigRequest implements ICreateUptimeCheckConfigRequest {

                /**
                 * Constructs a new CreateUptimeCheckConfigRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.ICreateUptimeCheckConfigRequest);

                /** CreateUptimeCheckConfigRequest parent. */
                public parent: string;

                /** CreateUptimeCheckConfigRequest uptimeCheckConfig. */
                public uptimeCheckConfig?: (google.monitoring.v3.IUptimeCheckConfig|null);

                /**
                 * Creates a new CreateUptimeCheckConfigRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateUptimeCheckConfigRequest instance
                 */
                public static create(properties?: google.monitoring.v3.ICreateUptimeCheckConfigRequest): google.monitoring.v3.CreateUptimeCheckConfigRequest;

                /**
                 * Encodes the specified CreateUptimeCheckConfigRequest message. Does not implicitly {@link google.monitoring.v3.CreateUptimeCheckConfigRequest.verify|verify} messages.
                 * @param message CreateUptimeCheckConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.ICreateUptimeCheckConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateUptimeCheckConfigRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.CreateUptimeCheckConfigRequest.verify|verify} messages.
                 * @param message CreateUptimeCheckConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.ICreateUptimeCheckConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateUptimeCheckConfigRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateUptimeCheckConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.CreateUptimeCheckConfigRequest;

                /**
                 * Decodes a CreateUptimeCheckConfigRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateUptimeCheckConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.CreateUptimeCheckConfigRequest;

                /**
                 * Verifies a CreateUptimeCheckConfigRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateUptimeCheckConfigRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateUptimeCheckConfigRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.CreateUptimeCheckConfigRequest;

                /**
                 * Creates a plain object from a CreateUptimeCheckConfigRequest message. Also converts values to other types if specified.
                 * @param message CreateUptimeCheckConfigRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.CreateUptimeCheckConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateUptimeCheckConfigRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an UpdateUptimeCheckConfigRequest. */
            interface IUpdateUptimeCheckConfigRequest {

                /** UpdateUptimeCheckConfigRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateUptimeCheckConfigRequest uptimeCheckConfig */
                uptimeCheckConfig?: (google.monitoring.v3.IUptimeCheckConfig|null);
            }

            /** Represents an UpdateUptimeCheckConfigRequest. */
            class UpdateUptimeCheckConfigRequest implements IUpdateUptimeCheckConfigRequest {

                /**
                 * Constructs a new UpdateUptimeCheckConfigRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IUpdateUptimeCheckConfigRequest);

                /** UpdateUptimeCheckConfigRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateUptimeCheckConfigRequest uptimeCheckConfig. */
                public uptimeCheckConfig?: (google.monitoring.v3.IUptimeCheckConfig|null);

                /**
                 * Creates a new UpdateUptimeCheckConfigRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateUptimeCheckConfigRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IUpdateUptimeCheckConfigRequest): google.monitoring.v3.UpdateUptimeCheckConfigRequest;

                /**
                 * Encodes the specified UpdateUptimeCheckConfigRequest message. Does not implicitly {@link google.monitoring.v3.UpdateUptimeCheckConfigRequest.verify|verify} messages.
                 * @param message UpdateUptimeCheckConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IUpdateUptimeCheckConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateUptimeCheckConfigRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.UpdateUptimeCheckConfigRequest.verify|verify} messages.
                 * @param message UpdateUptimeCheckConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IUpdateUptimeCheckConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateUptimeCheckConfigRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateUptimeCheckConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UpdateUptimeCheckConfigRequest;

                /**
                 * Decodes an UpdateUptimeCheckConfigRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateUptimeCheckConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UpdateUptimeCheckConfigRequest;

                /**
                 * Verifies an UpdateUptimeCheckConfigRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateUptimeCheckConfigRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateUptimeCheckConfigRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UpdateUptimeCheckConfigRequest;

                /**
                 * Creates a plain object from an UpdateUptimeCheckConfigRequest message. Also converts values to other types if specified.
                 * @param message UpdateUptimeCheckConfigRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.UpdateUptimeCheckConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateUptimeCheckConfigRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeleteUptimeCheckConfigRequest. */
            interface IDeleteUptimeCheckConfigRequest {

                /** DeleteUptimeCheckConfigRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteUptimeCheckConfigRequest. */
            class DeleteUptimeCheckConfigRequest implements IDeleteUptimeCheckConfigRequest {

                /**
                 * Constructs a new DeleteUptimeCheckConfigRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IDeleteUptimeCheckConfigRequest);

                /** DeleteUptimeCheckConfigRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteUptimeCheckConfigRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteUptimeCheckConfigRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IDeleteUptimeCheckConfigRequest): google.monitoring.v3.DeleteUptimeCheckConfigRequest;

                /**
                 * Encodes the specified DeleteUptimeCheckConfigRequest message. Does not implicitly {@link google.monitoring.v3.DeleteUptimeCheckConfigRequest.verify|verify} messages.
                 * @param message DeleteUptimeCheckConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IDeleteUptimeCheckConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteUptimeCheckConfigRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.DeleteUptimeCheckConfigRequest.verify|verify} messages.
                 * @param message DeleteUptimeCheckConfigRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IDeleteUptimeCheckConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteUptimeCheckConfigRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteUptimeCheckConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.DeleteUptimeCheckConfigRequest;

                /**
                 * Decodes a DeleteUptimeCheckConfigRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteUptimeCheckConfigRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.DeleteUptimeCheckConfigRequest;

                /**
                 * Verifies a DeleteUptimeCheckConfigRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteUptimeCheckConfigRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteUptimeCheckConfigRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.DeleteUptimeCheckConfigRequest;

                /**
                 * Creates a plain object from a DeleteUptimeCheckConfigRequest message. Also converts values to other types if specified.
                 * @param message DeleteUptimeCheckConfigRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.DeleteUptimeCheckConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteUptimeCheckConfigRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListUptimeCheckIpsRequest. */
            interface IListUptimeCheckIpsRequest {

                /** ListUptimeCheckIpsRequest pageSize */
                pageSize?: (number|null);

                /** ListUptimeCheckIpsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListUptimeCheckIpsRequest. */
            class ListUptimeCheckIpsRequest implements IListUptimeCheckIpsRequest {

                /**
                 * Constructs a new ListUptimeCheckIpsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListUptimeCheckIpsRequest);

                /** ListUptimeCheckIpsRequest pageSize. */
                public pageSize: number;

                /** ListUptimeCheckIpsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListUptimeCheckIpsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListUptimeCheckIpsRequest instance
                 */
                public static create(properties?: google.monitoring.v3.IListUptimeCheckIpsRequest): google.monitoring.v3.ListUptimeCheckIpsRequest;

                /**
                 * Encodes the specified ListUptimeCheckIpsRequest message. Does not implicitly {@link google.monitoring.v3.ListUptimeCheckIpsRequest.verify|verify} messages.
                 * @param message ListUptimeCheckIpsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListUptimeCheckIpsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListUptimeCheckIpsRequest message, length delimited. Does not implicitly {@link google.monitoring.v3.ListUptimeCheckIpsRequest.verify|verify} messages.
                 * @param message ListUptimeCheckIpsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListUptimeCheckIpsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListUptimeCheckIpsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListUptimeCheckIpsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListUptimeCheckIpsRequest;

                /**
                 * Decodes a ListUptimeCheckIpsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListUptimeCheckIpsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListUptimeCheckIpsRequest;

                /**
                 * Verifies a ListUptimeCheckIpsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListUptimeCheckIpsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListUptimeCheckIpsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListUptimeCheckIpsRequest;

                /**
                 * Creates a plain object from a ListUptimeCheckIpsRequest message. Also converts values to other types if specified.
                 * @param message ListUptimeCheckIpsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListUptimeCheckIpsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListUptimeCheckIpsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ListUptimeCheckIpsResponse. */
            interface IListUptimeCheckIpsResponse {

                /** ListUptimeCheckIpsResponse uptimeCheckIps */
                uptimeCheckIps?: (google.monitoring.v3.IUptimeCheckIp[]|null);

                /** ListUptimeCheckIpsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListUptimeCheckIpsResponse. */
            class ListUptimeCheckIpsResponse implements IListUptimeCheckIpsResponse {

                /**
                 * Constructs a new ListUptimeCheckIpsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IListUptimeCheckIpsResponse);

                /** ListUptimeCheckIpsResponse uptimeCheckIps. */
                public uptimeCheckIps: google.monitoring.v3.IUptimeCheckIp[];

                /** ListUptimeCheckIpsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListUptimeCheckIpsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListUptimeCheckIpsResponse instance
                 */
                public static create(properties?: google.monitoring.v3.IListUptimeCheckIpsResponse): google.monitoring.v3.ListUptimeCheckIpsResponse;

                /**
                 * Encodes the specified ListUptimeCheckIpsResponse message. Does not implicitly {@link google.monitoring.v3.ListUptimeCheckIpsResponse.verify|verify} messages.
                 * @param message ListUptimeCheckIpsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IListUptimeCheckIpsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListUptimeCheckIpsResponse message, length delimited. Does not implicitly {@link google.monitoring.v3.ListUptimeCheckIpsResponse.verify|verify} messages.
                 * @param message ListUptimeCheckIpsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IListUptimeCheckIpsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListUptimeCheckIpsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListUptimeCheckIpsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.ListUptimeCheckIpsResponse;

                /**
                 * Decodes a ListUptimeCheckIpsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListUptimeCheckIpsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.ListUptimeCheckIpsResponse;

                /**
                 * Verifies a ListUptimeCheckIpsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListUptimeCheckIpsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListUptimeCheckIpsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.ListUptimeCheckIpsResponse;

                /**
                 * Creates a plain object from a ListUptimeCheckIpsResponse message. Also converts values to other types if specified.
                 * @param message ListUptimeCheckIpsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.ListUptimeCheckIpsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListUptimeCheckIpsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an InternalChecker. */
            interface IInternalChecker {

                /** InternalChecker name */
                name?: (string|null);

                /** InternalChecker displayName */
                displayName?: (string|null);

                /** InternalChecker network */
                network?: (string|null);

                /** InternalChecker gcpZone */
                gcpZone?: (string|null);

                /** InternalChecker peerProjectId */
                peerProjectId?: (string|null);

                /** InternalChecker state */
                state?: (google.monitoring.v3.InternalChecker.State|keyof typeof google.monitoring.v3.InternalChecker.State|null);
            }

            /** Represents an InternalChecker. */
            class InternalChecker implements IInternalChecker {

                /**
                 * Constructs a new InternalChecker.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IInternalChecker);

                /** InternalChecker name. */
                public name: string;

                /** InternalChecker displayName. */
                public displayName: string;

                /** InternalChecker network. */
                public network: string;

                /** InternalChecker gcpZone. */
                public gcpZone: string;

                /** InternalChecker peerProjectId. */
                public peerProjectId: string;

                /** InternalChecker state. */
                public state: (google.monitoring.v3.InternalChecker.State|keyof typeof google.monitoring.v3.InternalChecker.State);

                /**
                 * Creates a new InternalChecker instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InternalChecker instance
                 */
                public static create(properties?: google.monitoring.v3.IInternalChecker): google.monitoring.v3.InternalChecker;

                /**
                 * Encodes the specified InternalChecker message. Does not implicitly {@link google.monitoring.v3.InternalChecker.verify|verify} messages.
                 * @param message InternalChecker message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IInternalChecker, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InternalChecker message, length delimited. Does not implicitly {@link google.monitoring.v3.InternalChecker.verify|verify} messages.
                 * @param message InternalChecker message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IInternalChecker, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InternalChecker message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InternalChecker
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.InternalChecker;

                /**
                 * Decodes an InternalChecker message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InternalChecker
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.InternalChecker;

                /**
                 * Verifies an InternalChecker message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InternalChecker message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InternalChecker
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.InternalChecker;

                /**
                 * Creates a plain object from an InternalChecker message. Also converts values to other types if specified.
                 * @param message InternalChecker
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.InternalChecker, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InternalChecker to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace InternalChecker {

                /** State enum. */
                enum State {
                    UNSPECIFIED = 0,
                    CREATING = 1,
                    RUNNING = 2
                }
            }

            /** Properties of an UptimeCheckConfig. */
            interface IUptimeCheckConfig {

                /** UptimeCheckConfig name */
                name?: (string|null);

                /** UptimeCheckConfig displayName */
                displayName?: (string|null);

                /** UptimeCheckConfig monitoredResource */
                monitoredResource?: (google.api.IMonitoredResource|null);

                /** UptimeCheckConfig resourceGroup */
                resourceGroup?: (google.monitoring.v3.UptimeCheckConfig.IResourceGroup|null);

                /** UptimeCheckConfig httpCheck */
                httpCheck?: (google.monitoring.v3.UptimeCheckConfig.IHttpCheck|null);

                /** UptimeCheckConfig tcpCheck */
                tcpCheck?: (google.monitoring.v3.UptimeCheckConfig.ITcpCheck|null);

                /** UptimeCheckConfig period */
                period?: (google.protobuf.IDuration|null);

                /** UptimeCheckConfig timeout */
                timeout?: (google.protobuf.IDuration|null);

                /** UptimeCheckConfig contentMatchers */
                contentMatchers?: (google.monitoring.v3.UptimeCheckConfig.IContentMatcher[]|null);

                /** UptimeCheckConfig selectedRegions */
                selectedRegions?: (google.monitoring.v3.UptimeCheckRegion[]|null);

                /** UptimeCheckConfig isInternal */
                isInternal?: (boolean|null);

                /** UptimeCheckConfig internalCheckers */
                internalCheckers?: (google.monitoring.v3.IInternalChecker[]|null);
            }

            /** Represents an UptimeCheckConfig. */
            class UptimeCheckConfig implements IUptimeCheckConfig {

                /**
                 * Constructs a new UptimeCheckConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IUptimeCheckConfig);

                /** UptimeCheckConfig name. */
                public name: string;

                /** UptimeCheckConfig displayName. */
                public displayName: string;

                /** UptimeCheckConfig monitoredResource. */
                public monitoredResource?: (google.api.IMonitoredResource|null);

                /** UptimeCheckConfig resourceGroup. */
                public resourceGroup?: (google.monitoring.v3.UptimeCheckConfig.IResourceGroup|null);

                /** UptimeCheckConfig httpCheck. */
                public httpCheck?: (google.monitoring.v3.UptimeCheckConfig.IHttpCheck|null);

                /** UptimeCheckConfig tcpCheck. */
                public tcpCheck?: (google.monitoring.v3.UptimeCheckConfig.ITcpCheck|null);

                /** UptimeCheckConfig period. */
                public period?: (google.protobuf.IDuration|null);

                /** UptimeCheckConfig timeout. */
                public timeout?: (google.protobuf.IDuration|null);

                /** UptimeCheckConfig contentMatchers. */
                public contentMatchers: google.monitoring.v3.UptimeCheckConfig.IContentMatcher[];

                /** UptimeCheckConfig selectedRegions. */
                public selectedRegions: google.monitoring.v3.UptimeCheckRegion[];

                /** UptimeCheckConfig isInternal. */
                public isInternal: boolean;

                /** UptimeCheckConfig internalCheckers. */
                public internalCheckers: google.monitoring.v3.IInternalChecker[];

                /** UptimeCheckConfig resource. */
                public resource?: ("monitoredResource"|"resourceGroup");

                /** UptimeCheckConfig checkRequestType. */
                public checkRequestType?: ("httpCheck"|"tcpCheck");

                /**
                 * Creates a new UptimeCheckConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UptimeCheckConfig instance
                 */
                public static create(properties?: google.monitoring.v3.IUptimeCheckConfig): google.monitoring.v3.UptimeCheckConfig;

                /**
                 * Encodes the specified UptimeCheckConfig message. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.verify|verify} messages.
                 * @param message UptimeCheckConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IUptimeCheckConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UptimeCheckConfig message, length delimited. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.verify|verify} messages.
                 * @param message UptimeCheckConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IUptimeCheckConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UptimeCheckConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UptimeCheckConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UptimeCheckConfig;

                /**
                 * Decodes an UptimeCheckConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UptimeCheckConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UptimeCheckConfig;

                /**
                 * Verifies an UptimeCheckConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UptimeCheckConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UptimeCheckConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UptimeCheckConfig;

                /**
                 * Creates a plain object from an UptimeCheckConfig message. Also converts values to other types if specified.
                 * @param message UptimeCheckConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.UptimeCheckConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UptimeCheckConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace UptimeCheckConfig {

                /** Properties of a ResourceGroup. */
                interface IResourceGroup {

                    /** ResourceGroup groupId */
                    groupId?: (string|null);

                    /** ResourceGroup resourceType */
                    resourceType?: (google.monitoring.v3.GroupResourceType|keyof typeof google.monitoring.v3.GroupResourceType|null);
                }

                /** Represents a ResourceGroup. */
                class ResourceGroup implements IResourceGroup {

                    /**
                     * Constructs a new ResourceGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.UptimeCheckConfig.IResourceGroup);

                    /** ResourceGroup groupId. */
                    public groupId: string;

                    /** ResourceGroup resourceType. */
                    public resourceType: (google.monitoring.v3.GroupResourceType|keyof typeof google.monitoring.v3.GroupResourceType);

                    /**
                     * Creates a new ResourceGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceGroup instance
                     */
                    public static create(properties?: google.monitoring.v3.UptimeCheckConfig.IResourceGroup): google.monitoring.v3.UptimeCheckConfig.ResourceGroup;

                    /**
                     * Encodes the specified ResourceGroup message. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.ResourceGroup.verify|verify} messages.
                     * @param message ResourceGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.UptimeCheckConfig.IResourceGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceGroup message, length delimited. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.ResourceGroup.verify|verify} messages.
                     * @param message ResourceGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.UptimeCheckConfig.IResourceGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UptimeCheckConfig.ResourceGroup;

                    /**
                     * Decodes a ResourceGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UptimeCheckConfig.ResourceGroup;

                    /**
                     * Verifies a ResourceGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UptimeCheckConfig.ResourceGroup;

                    /**
                     * Creates a plain object from a ResourceGroup message. Also converts values to other types if specified.
                     * @param message ResourceGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.UptimeCheckConfig.ResourceGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HttpCheck. */
                interface IHttpCheck {

                    /** HttpCheck useSsl */
                    useSsl?: (boolean|null);

                    /** HttpCheck path */
                    path?: (string|null);

                    /** HttpCheck port */
                    port?: (number|null);

                    /** HttpCheck authInfo */
                    authInfo?: (google.monitoring.v3.UptimeCheckConfig.HttpCheck.IBasicAuthentication|null);

                    /** HttpCheck maskHeaders */
                    maskHeaders?: (boolean|null);

                    /** HttpCheck headers */
                    headers?: ({ [k: string]: string }|null);

                    /** HttpCheck validateSsl */
                    validateSsl?: (boolean|null);
                }

                /** Represents a HttpCheck. */
                class HttpCheck implements IHttpCheck {

                    /**
                     * Constructs a new HttpCheck.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.UptimeCheckConfig.IHttpCheck);

                    /** HttpCheck useSsl. */
                    public useSsl: boolean;

                    /** HttpCheck path. */
                    public path: string;

                    /** HttpCheck port. */
                    public port: number;

                    /** HttpCheck authInfo. */
                    public authInfo?: (google.monitoring.v3.UptimeCheckConfig.HttpCheck.IBasicAuthentication|null);

                    /** HttpCheck maskHeaders. */
                    public maskHeaders: boolean;

                    /** HttpCheck headers. */
                    public headers: { [k: string]: string };

                    /** HttpCheck validateSsl. */
                    public validateSsl: boolean;

                    /**
                     * Creates a new HttpCheck instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpCheck instance
                     */
                    public static create(properties?: google.monitoring.v3.UptimeCheckConfig.IHttpCheck): google.monitoring.v3.UptimeCheckConfig.HttpCheck;

                    /**
                     * Encodes the specified HttpCheck message. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.HttpCheck.verify|verify} messages.
                     * @param message HttpCheck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.UptimeCheckConfig.IHttpCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpCheck message, length delimited. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.HttpCheck.verify|verify} messages.
                     * @param message HttpCheck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.UptimeCheckConfig.IHttpCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpCheck message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpCheck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UptimeCheckConfig.HttpCheck;

                    /**
                     * Decodes a HttpCheck message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpCheck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UptimeCheckConfig.HttpCheck;

                    /**
                     * Verifies a HttpCheck message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpCheck message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpCheck
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UptimeCheckConfig.HttpCheck;

                    /**
                     * Creates a plain object from a HttpCheck message. Also converts values to other types if specified.
                     * @param message HttpCheck
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.UptimeCheckConfig.HttpCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpCheck to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace HttpCheck {

                    /** Properties of a BasicAuthentication. */
                    interface IBasicAuthentication {

                        /** BasicAuthentication username */
                        username?: (string|null);

                        /** BasicAuthentication password */
                        password?: (string|null);
                    }

                    /** Represents a BasicAuthentication. */
                    class BasicAuthentication implements IBasicAuthentication {

                        /**
                         * Constructs a new BasicAuthentication.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.monitoring.v3.UptimeCheckConfig.HttpCheck.IBasicAuthentication);

                        /** BasicAuthentication username. */
                        public username: string;

                        /** BasicAuthentication password. */
                        public password: string;

                        /**
                         * Creates a new BasicAuthentication instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BasicAuthentication instance
                         */
                        public static create(properties?: google.monitoring.v3.UptimeCheckConfig.HttpCheck.IBasicAuthentication): google.monitoring.v3.UptimeCheckConfig.HttpCheck.BasicAuthentication;

                        /**
                         * Encodes the specified BasicAuthentication message. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.HttpCheck.BasicAuthentication.verify|verify} messages.
                         * @param message BasicAuthentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.monitoring.v3.UptimeCheckConfig.HttpCheck.IBasicAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BasicAuthentication message, length delimited. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.HttpCheck.BasicAuthentication.verify|verify} messages.
                         * @param message BasicAuthentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.monitoring.v3.UptimeCheckConfig.HttpCheck.IBasicAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BasicAuthentication message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BasicAuthentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UptimeCheckConfig.HttpCheck.BasicAuthentication;

                        /**
                         * Decodes a BasicAuthentication message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BasicAuthentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UptimeCheckConfig.HttpCheck.BasicAuthentication;

                        /**
                         * Verifies a BasicAuthentication message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BasicAuthentication message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BasicAuthentication
                         */
                        public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UptimeCheckConfig.HttpCheck.BasicAuthentication;

                        /**
                         * Creates a plain object from a BasicAuthentication message. Also converts values to other types if specified.
                         * @param message BasicAuthentication
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.monitoring.v3.UptimeCheckConfig.HttpCheck.BasicAuthentication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BasicAuthentication to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a TcpCheck. */
                interface ITcpCheck {

                    /** TcpCheck port */
                    port?: (number|null);
                }

                /** Represents a TcpCheck. */
                class TcpCheck implements ITcpCheck {

                    /**
                     * Constructs a new TcpCheck.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.UptimeCheckConfig.ITcpCheck);

                    /** TcpCheck port. */
                    public port: number;

                    /**
                     * Creates a new TcpCheck instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TcpCheck instance
                     */
                    public static create(properties?: google.monitoring.v3.UptimeCheckConfig.ITcpCheck): google.monitoring.v3.UptimeCheckConfig.TcpCheck;

                    /**
                     * Encodes the specified TcpCheck message. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.TcpCheck.verify|verify} messages.
                     * @param message TcpCheck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.UptimeCheckConfig.ITcpCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TcpCheck message, length delimited. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.TcpCheck.verify|verify} messages.
                     * @param message TcpCheck message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.UptimeCheckConfig.ITcpCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TcpCheck message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TcpCheck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UptimeCheckConfig.TcpCheck;

                    /**
                     * Decodes a TcpCheck message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TcpCheck
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UptimeCheckConfig.TcpCheck;

                    /**
                     * Verifies a TcpCheck message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TcpCheck message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TcpCheck
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UptimeCheckConfig.TcpCheck;

                    /**
                     * Creates a plain object from a TcpCheck message. Also converts values to other types if specified.
                     * @param message TcpCheck
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.UptimeCheckConfig.TcpCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TcpCheck to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ContentMatcher. */
                interface IContentMatcher {

                    /** ContentMatcher content */
                    content?: (string|null);

                    /** ContentMatcher matcher */
                    matcher?: (google.monitoring.v3.UptimeCheckConfig.ContentMatcher.ContentMatcherOption|keyof typeof google.monitoring.v3.UptimeCheckConfig.ContentMatcher.ContentMatcherOption|null);
                }

                /** Represents a ContentMatcher. */
                class ContentMatcher implements IContentMatcher {

                    /**
                     * Constructs a new ContentMatcher.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.monitoring.v3.UptimeCheckConfig.IContentMatcher);

                    /** ContentMatcher content. */
                    public content: string;

                    /** ContentMatcher matcher. */
                    public matcher: (google.monitoring.v3.UptimeCheckConfig.ContentMatcher.ContentMatcherOption|keyof typeof google.monitoring.v3.UptimeCheckConfig.ContentMatcher.ContentMatcherOption);

                    /**
                     * Creates a new ContentMatcher instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContentMatcher instance
                     */
                    public static create(properties?: google.monitoring.v3.UptimeCheckConfig.IContentMatcher): google.monitoring.v3.UptimeCheckConfig.ContentMatcher;

                    /**
                     * Encodes the specified ContentMatcher message. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.ContentMatcher.verify|verify} messages.
                     * @param message ContentMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.monitoring.v3.UptimeCheckConfig.IContentMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContentMatcher message, length delimited. Does not implicitly {@link google.monitoring.v3.UptimeCheckConfig.ContentMatcher.verify|verify} messages.
                     * @param message ContentMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.monitoring.v3.UptimeCheckConfig.IContentMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContentMatcher message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContentMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UptimeCheckConfig.ContentMatcher;

                    /**
                     * Decodes a ContentMatcher message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContentMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UptimeCheckConfig.ContentMatcher;

                    /**
                     * Verifies a ContentMatcher message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContentMatcher message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContentMatcher
                     */
                    public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UptimeCheckConfig.ContentMatcher;

                    /**
                     * Creates a plain object from a ContentMatcher message. Also converts values to other types if specified.
                     * @param message ContentMatcher
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.monitoring.v3.UptimeCheckConfig.ContentMatcher, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContentMatcher to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ContentMatcher {

                    /** ContentMatcherOption enum. */
                    enum ContentMatcherOption {
                        CONTENT_MATCHER_OPTION_UNSPECIFIED = 0,
                        CONTAINS_STRING = 1,
                        NOT_CONTAINS_STRING = 2,
                        MATCHES_REGEX = 3,
                        NOT_MATCHES_REGEX = 4
                    }
                }
            }

            /** UptimeCheckRegion enum. */
            enum UptimeCheckRegion {
                REGION_UNSPECIFIED = 0,
                USA = 1,
                EUROPE = 2,
                SOUTH_AMERICA = 3,
                ASIA_PACIFIC = 4
            }

            /** Properties of an UptimeCheckIp. */
            interface IUptimeCheckIp {

                /** UptimeCheckIp region */
                region?: (google.monitoring.v3.UptimeCheckRegion|keyof typeof google.monitoring.v3.UptimeCheckRegion|null);

                /** UptimeCheckIp location */
                location?: (string|null);

                /** UptimeCheckIp ipAddress */
                ipAddress?: (string|null);
            }

            /** Represents an UptimeCheckIp. */
            class UptimeCheckIp implements IUptimeCheckIp {

                /**
                 * Constructs a new UptimeCheckIp.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.monitoring.v3.IUptimeCheckIp);

                /** UptimeCheckIp region. */
                public region: (google.monitoring.v3.UptimeCheckRegion|keyof typeof google.monitoring.v3.UptimeCheckRegion);

                /** UptimeCheckIp location. */
                public location: string;

                /** UptimeCheckIp ipAddress. */
                public ipAddress: string;

                /**
                 * Creates a new UptimeCheckIp instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UptimeCheckIp instance
                 */
                public static create(properties?: google.monitoring.v3.IUptimeCheckIp): google.monitoring.v3.UptimeCheckIp;

                /**
                 * Encodes the specified UptimeCheckIp message. Does not implicitly {@link google.monitoring.v3.UptimeCheckIp.verify|verify} messages.
                 * @param message UptimeCheckIp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.monitoring.v3.IUptimeCheckIp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UptimeCheckIp message, length delimited. Does not implicitly {@link google.monitoring.v3.UptimeCheckIp.verify|verify} messages.
                 * @param message UptimeCheckIp message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.monitoring.v3.IUptimeCheckIp, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UptimeCheckIp message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UptimeCheckIp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.monitoring.v3.UptimeCheckIp;

                /**
                 * Decodes an UptimeCheckIp message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UptimeCheckIp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.monitoring.v3.UptimeCheckIp;

                /**
                 * Verifies an UptimeCheckIp message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UptimeCheckIp message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UptimeCheckIp
                 */
                public static fromObject(object: { [k: string]: any }): google.monitoring.v3.UptimeCheckIp;

                /**
                 * Creates a plain object from an UptimeCheckIp message. Also converts values to other types if specified.
                 * @param message UptimeCheckIp
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.monitoring.v3.UptimeCheckIp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UptimeCheckIp to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** GroupResourceType enum. */
            enum GroupResourceType {
                RESOURCE_TYPE_UNSPECIFIED = 0,
                INSTANCE = 1,
                AWS_ELB_LOAD_BALANCER = 2
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Distribution. */
        interface IDistribution {

            /** Distribution count */
            count?: (number|Long|string|null);

            /** Distribution mean */
            mean?: (number|null);

            /** Distribution sumOfSquaredDeviation */
            sumOfSquaredDeviation?: (number|null);

            /** Distribution range */
            range?: (google.api.Distribution.IRange|null);

            /** Distribution bucketOptions */
            bucketOptions?: (google.api.Distribution.IBucketOptions|null);

            /** Distribution bucketCounts */
            bucketCounts?: ((number|Long|string)[]|null);

            /** Distribution exemplars */
            exemplars?: (google.api.Distribution.IExemplar[]|null);
        }

        /** Represents a Distribution. */
        class Distribution implements IDistribution {

            /**
             * Constructs a new Distribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDistribution);

            /** Distribution count. */
            public count: (number|Long|string);

            /** Distribution mean. */
            public mean: number;

            /** Distribution sumOfSquaredDeviation. */
            public sumOfSquaredDeviation: number;

            /** Distribution range. */
            public range?: (google.api.Distribution.IRange|null);

            /** Distribution bucketOptions. */
            public bucketOptions?: (google.api.Distribution.IBucketOptions|null);

            /** Distribution bucketCounts. */
            public bucketCounts: (number|Long|string)[];

            /** Distribution exemplars. */
            public exemplars: google.api.Distribution.IExemplar[];

            /**
             * Creates a new Distribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Distribution instance
             */
            public static create(properties?: google.api.IDistribution): google.api.Distribution;

            /**
             * Encodes the specified Distribution message. Does not implicitly {@link google.api.Distribution.verify|verify} messages.
             * @param message Distribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Distribution message, length delimited. Does not implicitly {@link google.api.Distribution.verify|verify} messages.
             * @param message Distribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Distribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Distribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution;

            /**
             * Decodes a Distribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Distribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution;

            /**
             * Verifies a Distribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Distribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Distribution
             */
            public static fromObject(object: { [k: string]: any }): google.api.Distribution;

            /**
             * Creates a plain object from a Distribution message. Also converts values to other types if specified.
             * @param message Distribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Distribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Distribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Distribution {

            /** Properties of a Range. */
            interface IRange {

                /** Range min */
                min?: (number|null);

                /** Range max */
                max?: (number|null);
            }

            /** Represents a Range. */
            class Range implements IRange {

                /**
                 * Constructs a new Range.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IRange);

                /** Range min. */
                public min: number;

                /** Range max. */
                public max: number;

                /**
                 * Creates a new Range instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Range instance
                 */
                public static create(properties?: google.api.Distribution.IRange): google.api.Distribution.Range;

                /**
                 * Encodes the specified Range message. Does not implicitly {@link google.api.Distribution.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Range message, length delimited. Does not implicitly {@link google.api.Distribution.Range.verify|verify} messages.
                 * @param message Range message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Range message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.Range;

                /**
                 * Decodes a Range message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Range
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.Range;

                /**
                 * Verifies a Range message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Range message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Range
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.Range;

                /**
                 * Creates a plain object from a Range message. Also converts values to other types if specified.
                 * @param message Range
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Range to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BucketOptions. */
            interface IBucketOptions {

                /** BucketOptions linearBuckets */
                linearBuckets?: (google.api.Distribution.BucketOptions.ILinear|null);

                /** BucketOptions exponentialBuckets */
                exponentialBuckets?: (google.api.Distribution.BucketOptions.IExponential|null);

                /** BucketOptions explicitBuckets */
                explicitBuckets?: (google.api.Distribution.BucketOptions.IExplicit|null);
            }

            /** Represents a BucketOptions. */
            class BucketOptions implements IBucketOptions {

                /**
                 * Constructs a new BucketOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IBucketOptions);

                /** BucketOptions linearBuckets. */
                public linearBuckets?: (google.api.Distribution.BucketOptions.ILinear|null);

                /** BucketOptions exponentialBuckets. */
                public exponentialBuckets?: (google.api.Distribution.BucketOptions.IExponential|null);

                /** BucketOptions explicitBuckets. */
                public explicitBuckets?: (google.api.Distribution.BucketOptions.IExplicit|null);

                /** BucketOptions options. */
                public options?: ("linearBuckets"|"exponentialBuckets"|"explicitBuckets");

                /**
                 * Creates a new BucketOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BucketOptions instance
                 */
                public static create(properties?: google.api.Distribution.IBucketOptions): google.api.Distribution.BucketOptions;

                /**
                 * Encodes the specified BucketOptions message. Does not implicitly {@link google.api.Distribution.BucketOptions.verify|verify} messages.
                 * @param message BucketOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IBucketOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BucketOptions message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.verify|verify} messages.
                 * @param message BucketOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IBucketOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BucketOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BucketOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions;

                /**
                 * Decodes a BucketOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BucketOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions;

                /**
                 * Verifies a BucketOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BucketOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BucketOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions;

                /**
                 * Creates a plain object from a BucketOptions message. Also converts values to other types if specified.
                 * @param message BucketOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.BucketOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BucketOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BucketOptions {

                /** Properties of a Linear. */
                interface ILinear {

                    /** Linear numFiniteBuckets */
                    numFiniteBuckets?: (number|null);

                    /** Linear width */
                    width?: (number|null);

                    /** Linear offset */
                    offset?: (number|null);
                }

                /** Represents a Linear. */
                class Linear implements ILinear {

                    /**
                     * Constructs a new Linear.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.ILinear);

                    /** Linear numFiniteBuckets. */
                    public numFiniteBuckets: number;

                    /** Linear width. */
                    public width: number;

                    /** Linear offset. */
                    public offset: number;

                    /**
                     * Creates a new Linear instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Linear instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.ILinear): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Encodes the specified Linear message. Does not implicitly {@link google.api.Distribution.BucketOptions.Linear.verify|verify} messages.
                     * @param message Linear message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.ILinear, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Linear message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Linear.verify|verify} messages.
                     * @param message Linear message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.ILinear, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Linear message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Linear
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Decodes a Linear message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Linear
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Verifies a Linear message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Linear message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Linear
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Linear;

                    /**
                     * Creates a plain object from a Linear message. Also converts values to other types if specified.
                     * @param message Linear
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Linear, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Linear to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Exponential. */
                interface IExponential {

                    /** Exponential numFiniteBuckets */
                    numFiniteBuckets?: (number|null);

                    /** Exponential growthFactor */
                    growthFactor?: (number|null);

                    /** Exponential scale */
                    scale?: (number|null);
                }

                /** Represents an Exponential. */
                class Exponential implements IExponential {

                    /**
                     * Constructs a new Exponential.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.IExponential);

                    /** Exponential numFiniteBuckets. */
                    public numFiniteBuckets: number;

                    /** Exponential growthFactor. */
                    public growthFactor: number;

                    /** Exponential scale. */
                    public scale: number;

                    /**
                     * Creates a new Exponential instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Exponential instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.IExponential): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Encodes the specified Exponential message. Does not implicitly {@link google.api.Distribution.BucketOptions.Exponential.verify|verify} messages.
                     * @param message Exponential message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.IExponential, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Exponential message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Exponential.verify|verify} messages.
                     * @param message Exponential message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.IExponential, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Exponential message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Exponential
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Decodes an Exponential message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Exponential
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Verifies an Exponential message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Exponential message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Exponential
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Exponential;

                    /**
                     * Creates a plain object from an Exponential message. Also converts values to other types if specified.
                     * @param message Exponential
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Exponential, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Exponential to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Explicit. */
                interface IExplicit {

                    /** Explicit bounds */
                    bounds?: (number[]|null);
                }

                /** Represents an Explicit. */
                class Explicit implements IExplicit {

                    /**
                     * Constructs a new Explicit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.Distribution.BucketOptions.IExplicit);

                    /** Explicit bounds. */
                    public bounds: number[];

                    /**
                     * Creates a new Explicit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Explicit instance
                     */
                    public static create(properties?: google.api.Distribution.BucketOptions.IExplicit): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Encodes the specified Explicit message. Does not implicitly {@link google.api.Distribution.BucketOptions.Explicit.verify|verify} messages.
                     * @param message Explicit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.Distribution.BucketOptions.IExplicit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Explicit message, length delimited. Does not implicitly {@link google.api.Distribution.BucketOptions.Explicit.verify|verify} messages.
                     * @param message Explicit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.Distribution.BucketOptions.IExplicit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Explicit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Explicit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Decodes an Explicit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Explicit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Verifies an Explicit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Explicit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Explicit
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.Distribution.BucketOptions.Explicit;

                    /**
                     * Creates a plain object from an Explicit message. Also converts values to other types if specified.
                     * @param message Explicit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.Distribution.BucketOptions.Explicit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Explicit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of an Exemplar. */
            interface IExemplar {

                /** Exemplar value */
                value?: (number|null);

                /** Exemplar timestamp */
                timestamp?: (google.protobuf.ITimestamp|null);

                /** Exemplar attachments */
                attachments?: (google.protobuf.IAny[]|null);
            }

            /** Represents an Exemplar. */
            class Exemplar implements IExemplar {

                /**
                 * Constructs a new Exemplar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.Distribution.IExemplar);

                /** Exemplar value. */
                public value: number;

                /** Exemplar timestamp. */
                public timestamp?: (google.protobuf.ITimestamp|null);

                /** Exemplar attachments. */
                public attachments: google.protobuf.IAny[];

                /**
                 * Creates a new Exemplar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Exemplar instance
                 */
                public static create(properties?: google.api.Distribution.IExemplar): google.api.Distribution.Exemplar;

                /**
                 * Encodes the specified Exemplar message. Does not implicitly {@link google.api.Distribution.Exemplar.verify|verify} messages.
                 * @param message Exemplar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.Distribution.IExemplar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Exemplar message, length delimited. Does not implicitly {@link google.api.Distribution.Exemplar.verify|verify} messages.
                 * @param message Exemplar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.Distribution.IExemplar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Exemplar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Exemplar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Distribution.Exemplar;

                /**
                 * Decodes an Exemplar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Exemplar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Distribution.Exemplar;

                /**
                 * Verifies an Exemplar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Exemplar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Exemplar
                 */
                public static fromObject(object: { [k: string]: any }): google.api.Distribution.Exemplar;

                /**
                 * Creates a plain object from an Exemplar message. Also converts values to other types if specified.
                 * @param message Exemplar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.Distribution.Exemplar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Exemplar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a MonitoredResourceDescriptor. */
        interface IMonitoredResourceDescriptor {

            /** MonitoredResourceDescriptor name */
            name?: (string|null);

            /** MonitoredResourceDescriptor type */
            type?: (string|null);

            /** MonitoredResourceDescriptor displayName */
            displayName?: (string|null);

            /** MonitoredResourceDescriptor description */
            description?: (string|null);

            /** MonitoredResourceDescriptor labels */
            labels?: (google.api.ILabelDescriptor[]|null);

            /** MonitoredResourceDescriptor launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);
        }

        /** Represents a MonitoredResourceDescriptor. */
        class MonitoredResourceDescriptor implements IMonitoredResourceDescriptor {

            /**
             * Constructs a new MonitoredResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMonitoredResourceDescriptor);

            /** MonitoredResourceDescriptor name. */
            public name: string;

            /** MonitoredResourceDescriptor type. */
            public type: string;

            /** MonitoredResourceDescriptor displayName. */
            public displayName: string;

            /** MonitoredResourceDescriptor description. */
            public description: string;

            /** MonitoredResourceDescriptor labels. */
            public labels: google.api.ILabelDescriptor[];

            /** MonitoredResourceDescriptor launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /**
             * Creates a new MonitoredResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MonitoredResourceDescriptor instance
             */
            public static create(properties?: google.api.IMonitoredResourceDescriptor): google.api.MonitoredResourceDescriptor;

            /**
             * Encodes the specified MonitoredResourceDescriptor message. Does not implicitly {@link google.api.MonitoredResourceDescriptor.verify|verify} messages.
             * @param message MonitoredResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMonitoredResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MonitoredResourceDescriptor message, length delimited. Does not implicitly {@link google.api.MonitoredResourceDescriptor.verify|verify} messages.
             * @param message MonitoredResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMonitoredResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MonitoredResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MonitoredResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MonitoredResourceDescriptor;

            /**
             * Decodes a MonitoredResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MonitoredResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MonitoredResourceDescriptor;

            /**
             * Verifies a MonitoredResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MonitoredResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MonitoredResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.MonitoredResourceDescriptor;

            /**
             * Creates a plain object from a MonitoredResourceDescriptor message. Also converts values to other types if specified.
             * @param message MonitoredResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MonitoredResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MonitoredResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MonitoredResource. */
        interface IMonitoredResource {

            /** MonitoredResource type */
            type?: (string|null);

            /** MonitoredResource labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a MonitoredResource. */
        class MonitoredResource implements IMonitoredResource {

            /**
             * Constructs a new MonitoredResource.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMonitoredResource);

            /** MonitoredResource type. */
            public type: string;

            /** MonitoredResource labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new MonitoredResource instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MonitoredResource instance
             */
            public static create(properties?: google.api.IMonitoredResource): google.api.MonitoredResource;

            /**
             * Encodes the specified MonitoredResource message. Does not implicitly {@link google.api.MonitoredResource.verify|verify} messages.
             * @param message MonitoredResource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMonitoredResource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MonitoredResource message, length delimited. Does not implicitly {@link google.api.MonitoredResource.verify|verify} messages.
             * @param message MonitoredResource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMonitoredResource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MonitoredResource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MonitoredResource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MonitoredResource;

            /**
             * Decodes a MonitoredResource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MonitoredResource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MonitoredResource;

            /**
             * Verifies a MonitoredResource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MonitoredResource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MonitoredResource
             */
            public static fromObject(object: { [k: string]: any }): google.api.MonitoredResource;

            /**
             * Creates a plain object from a MonitoredResource message. Also converts values to other types if specified.
             * @param message MonitoredResource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MonitoredResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MonitoredResource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MonitoredResourceMetadata. */
        interface IMonitoredResourceMetadata {

            /** MonitoredResourceMetadata systemLabels */
            systemLabels?: (google.protobuf.IStruct|null);

            /** MonitoredResourceMetadata userLabels */
            userLabels?: ({ [k: string]: string }|null);
        }

        /** Represents a MonitoredResourceMetadata. */
        class MonitoredResourceMetadata implements IMonitoredResourceMetadata {

            /**
             * Constructs a new MonitoredResourceMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMonitoredResourceMetadata);

            /** MonitoredResourceMetadata systemLabels. */
            public systemLabels?: (google.protobuf.IStruct|null);

            /** MonitoredResourceMetadata userLabels. */
            public userLabels: { [k: string]: string };

            /**
             * Creates a new MonitoredResourceMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MonitoredResourceMetadata instance
             */
            public static create(properties?: google.api.IMonitoredResourceMetadata): google.api.MonitoredResourceMetadata;

            /**
             * Encodes the specified MonitoredResourceMetadata message. Does not implicitly {@link google.api.MonitoredResourceMetadata.verify|verify} messages.
             * @param message MonitoredResourceMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMonitoredResourceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MonitoredResourceMetadata message, length delimited. Does not implicitly {@link google.api.MonitoredResourceMetadata.verify|verify} messages.
             * @param message MonitoredResourceMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMonitoredResourceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MonitoredResourceMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MonitoredResourceMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MonitoredResourceMetadata;

            /**
             * Decodes a MonitoredResourceMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MonitoredResourceMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MonitoredResourceMetadata;

            /**
             * Verifies a MonitoredResourceMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MonitoredResourceMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MonitoredResourceMetadata
             */
            public static fromObject(object: { [k: string]: any }): google.api.MonitoredResourceMetadata;

            /**
             * Creates a plain object from a MonitoredResourceMetadata message. Also converts values to other types if specified.
             * @param message MonitoredResourceMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MonitoredResourceMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MonitoredResourceMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LabelDescriptor. */
        interface ILabelDescriptor {

            /** LabelDescriptor key */
            key?: (string|null);

            /** LabelDescriptor valueType */
            valueType?: (google.api.LabelDescriptor.ValueType|keyof typeof google.api.LabelDescriptor.ValueType|null);

            /** LabelDescriptor description */
            description?: (string|null);
        }

        /** Represents a LabelDescriptor. */
        class LabelDescriptor implements ILabelDescriptor {

            /**
             * Constructs a new LabelDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ILabelDescriptor);

            /** LabelDescriptor key. */
            public key: string;

            /** LabelDescriptor valueType. */
            public valueType: (google.api.LabelDescriptor.ValueType|keyof typeof google.api.LabelDescriptor.ValueType);

            /** LabelDescriptor description. */
            public description: string;

            /**
             * Creates a new LabelDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LabelDescriptor instance
             */
            public static create(properties?: google.api.ILabelDescriptor): google.api.LabelDescriptor;

            /**
             * Encodes the specified LabelDescriptor message. Does not implicitly {@link google.api.LabelDescriptor.verify|verify} messages.
             * @param message LabelDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ILabelDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LabelDescriptor message, length delimited. Does not implicitly {@link google.api.LabelDescriptor.verify|verify} messages.
             * @param message LabelDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ILabelDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LabelDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LabelDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.LabelDescriptor;

            /**
             * Decodes a LabelDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LabelDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.LabelDescriptor;

            /**
             * Verifies a LabelDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LabelDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LabelDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.LabelDescriptor;

            /**
             * Creates a plain object from a LabelDescriptor message. Also converts values to other types if specified.
             * @param message LabelDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.LabelDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LabelDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace LabelDescriptor {

            /** ValueType enum. */
            enum ValueType {
                STRING = 0,
                BOOL = 1,
                INT64 = 2
            }
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }

        /** Properties of a MetricDescriptor. */
        interface IMetricDescriptor {

            /** MetricDescriptor name */
            name?: (string|null);

            /** MetricDescriptor type */
            type?: (string|null);

            /** MetricDescriptor labels */
            labels?: (google.api.ILabelDescriptor[]|null);

            /** MetricDescriptor metricKind */
            metricKind?: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind|null);

            /** MetricDescriptor valueType */
            valueType?: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType|null);

            /** MetricDescriptor unit */
            unit?: (string|null);

            /** MetricDescriptor description */
            description?: (string|null);

            /** MetricDescriptor displayName */
            displayName?: (string|null);

            /** MetricDescriptor metadata */
            metadata?: (google.api.MetricDescriptor.IMetricDescriptorMetadata|null);

            /** MetricDescriptor launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);
        }

        /** Represents a MetricDescriptor. */
        class MetricDescriptor implements IMetricDescriptor {

            /**
             * Constructs a new MetricDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMetricDescriptor);

            /** MetricDescriptor name. */
            public name: string;

            /** MetricDescriptor type. */
            public type: string;

            /** MetricDescriptor labels. */
            public labels: google.api.ILabelDescriptor[];

            /** MetricDescriptor metricKind. */
            public metricKind: (google.api.MetricDescriptor.MetricKind|keyof typeof google.api.MetricDescriptor.MetricKind);

            /** MetricDescriptor valueType. */
            public valueType: (google.api.MetricDescriptor.ValueType|keyof typeof google.api.MetricDescriptor.ValueType);

            /** MetricDescriptor unit. */
            public unit: string;

            /** MetricDescriptor description. */
            public description: string;

            /** MetricDescriptor displayName. */
            public displayName: string;

            /** MetricDescriptor metadata. */
            public metadata?: (google.api.MetricDescriptor.IMetricDescriptorMetadata|null);

            /** MetricDescriptor launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /**
             * Creates a new MetricDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MetricDescriptor instance
             */
            public static create(properties?: google.api.IMetricDescriptor): google.api.MetricDescriptor;

            /**
             * Encodes the specified MetricDescriptor message. Does not implicitly {@link google.api.MetricDescriptor.verify|verify} messages.
             * @param message MetricDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMetricDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MetricDescriptor message, length delimited. Does not implicitly {@link google.api.MetricDescriptor.verify|verify} messages.
             * @param message MetricDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMetricDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetricDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MetricDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MetricDescriptor;

            /**
             * Decodes a MetricDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MetricDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MetricDescriptor;

            /**
             * Verifies a MetricDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MetricDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MetricDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.MetricDescriptor;

            /**
             * Creates a plain object from a MetricDescriptor message. Also converts values to other types if specified.
             * @param message MetricDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MetricDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetricDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MetricDescriptor {

            /** Properties of a MetricDescriptorMetadata. */
            interface IMetricDescriptorMetadata {

                /** MetricDescriptorMetadata launchStage */
                launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

                /** MetricDescriptorMetadata samplePeriod */
                samplePeriod?: (google.protobuf.IDuration|null);

                /** MetricDescriptorMetadata ingestDelay */
                ingestDelay?: (google.protobuf.IDuration|null);
            }

            /** Represents a MetricDescriptorMetadata. */
            class MetricDescriptorMetadata implements IMetricDescriptorMetadata {

                /**
                 * Constructs a new MetricDescriptorMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MetricDescriptor.IMetricDescriptorMetadata);

                /** MetricDescriptorMetadata launchStage. */
                public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

                /** MetricDescriptorMetadata samplePeriod. */
                public samplePeriod?: (google.protobuf.IDuration|null);

                /** MetricDescriptorMetadata ingestDelay. */
                public ingestDelay?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new MetricDescriptorMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MetricDescriptorMetadata instance
                 */
                public static create(properties?: google.api.MetricDescriptor.IMetricDescriptorMetadata): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Encodes the specified MetricDescriptorMetadata message. Does not implicitly {@link google.api.MetricDescriptor.MetricDescriptorMetadata.verify|verify} messages.
                 * @param message MetricDescriptorMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MetricDescriptor.IMetricDescriptorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MetricDescriptorMetadata message, length delimited. Does not implicitly {@link google.api.MetricDescriptor.MetricDescriptorMetadata.verify|verify} messages.
                 * @param message MetricDescriptorMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MetricDescriptor.IMetricDescriptorMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MetricDescriptorMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MetricDescriptorMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Decodes a MetricDescriptorMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MetricDescriptorMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Verifies a MetricDescriptorMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MetricDescriptorMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MetricDescriptorMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MetricDescriptor.MetricDescriptorMetadata;

                /**
                 * Creates a plain object from a MetricDescriptorMetadata message. Also converts values to other types if specified.
                 * @param message MetricDescriptorMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MetricDescriptor.MetricDescriptorMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MetricDescriptorMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** MetricKind enum. */
            enum MetricKind {
                METRIC_KIND_UNSPECIFIED = 0,
                GAUGE = 1,
                DELTA = 2,
                CUMULATIVE = 3
            }

            /** ValueType enum. */
            enum ValueType {
                VALUE_TYPE_UNSPECIFIED = 0,
                BOOL = 1,
                INT64 = 2,
                DOUBLE = 3,
                STRING = 4,
                DISTRIBUTION = 5,
                MONEY = 6
            }
        }

        /** Properties of a Metric. */
        interface IMetric {

            /** Metric type */
            type?: (string|null);

            /** Metric labels */
            labels?: ({ [k: string]: string }|null);
        }

        /** Represents a Metric. */
        class Metric implements IMetric {

            /**
             * Constructs a new Metric.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMetric);

            /** Metric type. */
            public type: string;

            /** Metric labels. */
            public labels: { [k: string]: string };

            /**
             * Creates a new Metric instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Metric instance
             */
            public static create(properties?: google.api.IMetric): google.api.Metric;

            /**
             * Encodes the specified Metric message. Does not implicitly {@link google.api.Metric.verify|verify} messages.
             * @param message Metric message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Metric message, length delimited. Does not implicitly {@link google.api.Metric.verify|verify} messages.
             * @param message Metric message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Metric message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Metric
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Metric;

            /**
             * Decodes a Metric message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Metric
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Metric;

            /**
             * Verifies a Metric message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Metric message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Metric
             */
            public static fromObject(object: { [k: string]: any }): google.api.Metric;

            /**
             * Creates a plain object from a Metric message. Also converts values to other types if specified.
             * @param message Metric
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Metric to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue);

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace type. */
    namespace type {

        /** CalendarPeriod enum. */
        enum CalendarPeriod {
            CALENDAR_PERIOD_UNSPECIFIED = 0,
            DAY = 1,
            WEEK = 2,
            FORTNIGHT = 3,
            MONTH = 4,
            QUARTER = 5,
            HALF = 6,
            YEAR = 7
        }
    }
}
