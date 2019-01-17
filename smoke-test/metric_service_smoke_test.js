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

'use strict';

describe('MetricServiceSmokeTest', () => {
  if (!process.env.GCLOUD_PROJECT) {
    throw new Error('Usage: GCLOUD_PROJECT=<project_id> node #{$0}');
  }
  const projectId = process.env.GCLOUD_PROJECT;

  it('successfully makes a call to the service using promises', done => {
    const monitoring = require('../src');

    const client = new monitoring.v3.MetricServiceClient({
      // optional auth parameters.
    });

    // Iterate over all elements.
    const formattedName = client.projectPath(projectId);

    client
      .listMonitoredResourceDescriptors({name: formattedName})
      .then(responses => {
        const resources = responses[0];
        for (let i = 0; i < resources.length; i += 1) {
          console.log(resources[i]);
        }
      })
      .then(done)
      .catch(done);
  });

  it('successfully makes a call to the service using callbacks', done => {
    const monitoring = require('../src');

    const client = new monitoring.v3.MetricServiceClient({
      // optional auth parameters.
    });

    // Or obtain the paged response.
    const formattedName = client.projectPath(projectId);

    const options = {autoPaginate: false};
    const callback = responses => {
      // The actual resources in a response.
      const resources = responses[0];
      // The next request if the response shows that there are more responses.
      const nextRequest = responses[1];
      // The actual response object, if necessary.
      // const rawResponse = responses[2];
      for (let i = 0; i < resources.length; i += 1) {
        console.log(resources[i]);
      }
      if (nextRequest) {
        // Fetch the next page.
        return client
          .listMonitoredResourceDescriptors(nextRequest, options)
          .then(callback);
      }
    };
    client
      .listMonitoredResourceDescriptors({name: formattedName}, options)
      .then(callback)
      .then(done)
      .catch(done);
  });

  it('successfully makes a call to the service using streaming', done => {
    const monitoring = require('../src');

    const client = new monitoring.v3.MetricServiceClient({
      // optional auth parameters.
    });

    const formattedName = client.projectPath(projectId);
    client
      .listMonitoredResourceDescriptorsStream({name: formattedName})
      .on('data', element => {
        console.log(element);
      })
      .on('error', done)
      .on('end', done);
  });
});
