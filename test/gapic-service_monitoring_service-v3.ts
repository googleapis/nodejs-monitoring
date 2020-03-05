// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const servicemonitoringserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v3.ServiceMonitoringServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient
        .servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port =
      servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.serviceMonitoringServiceStub, undefined);
    await client.initialize();
    assert(client.serviceMonitoringServiceStub);
  });
  it('has close method', () => {
    const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });
  describe('createService', () => {
    it('invokes createService without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.ICreateServiceRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createService = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createService(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createService with error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.ICreateServiceRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createService(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getService', () => {
    it('invokes getService without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IGetServiceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getService = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getService(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getService with error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IGetServiceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getService(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateService', () => {
    it('invokes updateService without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IUpdateServiceRequest = {};
      request.service = {};
      request.service.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateService = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateService(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateService with error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IUpdateServiceRequest = {};
      request.service = {};
      request.service.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateService(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteService', () => {
    it('invokes deleteService without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IDeleteServiceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteService = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteService(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteService with error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IDeleteServiceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteService(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createServiceLevelObjective', () => {
    it('invokes createServiceLevelObjective without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.ICreateServiceLevelObjectiveRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createServiceLevelObjective = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createServiceLevelObjective(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createServiceLevelObjective with error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.ICreateServiceLevelObjectiveRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createServiceLevelObjective = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createServiceLevelObjective(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('getServiceLevelObjective', () => {
    it('invokes getServiceLevelObjective without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IGetServiceLevelObjectiveRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getServiceLevelObjective = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getServiceLevelObjective(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getServiceLevelObjective with error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IGetServiceLevelObjectiveRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getServiceLevelObjective = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getServiceLevelObjective(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('updateServiceLevelObjective', () => {
    it('invokes updateServiceLevelObjective without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IUpdateServiceLevelObjectiveRequest = {};
      request.serviceLevelObjective = {};
      request.serviceLevelObjective.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateServiceLevelObjective = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateServiceLevelObjective(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateServiceLevelObjective with error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IUpdateServiceLevelObjectiveRequest = {};
      request.serviceLevelObjective = {};
      request.serviceLevelObjective.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateServiceLevelObjective = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateServiceLevelObjective(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('deleteServiceLevelObjective', () => {
    it('invokes deleteServiceLevelObjective without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IDeleteServiceLevelObjectiveRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteServiceLevelObjective = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteServiceLevelObjective(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteServiceLevelObjective with error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IDeleteServiceLevelObjectiveRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteServiceLevelObjective = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteServiceLevelObjective(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('listServices', () => {
    it('invokes listServices without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IListServicesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listServices = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listServices(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listServicesStream', () => {
    it('invokes listServicesStream without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IListServicesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listServices = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listServicesStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
  describe('listServiceLevelObjectives', () => {
    it('invokes listServiceLevelObjectives without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IListServiceLevelObjectivesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listServiceLevelObjectives = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listServiceLevelObjectives(
        request,
        (err: FakeError, response: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(response, expectedResponse);
          done();
        }
      );
    });
  });
  describe('listServiceLevelObjectivesStream', () => {
    it('invokes listServiceLevelObjectivesStream without error', done => {
      const client = new servicemonitoringserviceModule.v3.ServiceMonitoringServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.monitoring.v3.IListServiceLevelObjectivesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listServiceLevelObjectives = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listServiceLevelObjectivesStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
