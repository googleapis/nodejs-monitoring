// Copyright 2021 Google LLC
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

import {
  AlertPolicyServiceClient,
  GroupServiceClient,
  MetricServiceClient,
  NotificationChannelServiceClient,
  QueryServiceClient,
  ServiceMonitoringServiceClient,
  UptimeCheckServiceClient,
} from '@google-cloud/monitoring';

// check that the client class type name can be used
function doStuffWithAlertPolicyServiceClient(client: AlertPolicyServiceClient) {
  client.close();
}
function doStuffWithGroupServiceClient(client: GroupServiceClient) {
  client.close();
}
function doStuffWithMetricServiceClient(client: MetricServiceClient) {
  client.close();
}
function doStuffWithNotificationChannelServiceClient(
  client: NotificationChannelServiceClient
) {
  client.close();
}
function doStuffWithQueryServiceClient(client: QueryServiceClient) {
  client.close();
}
function doStuffWithServiceMonitoringServiceClient(
  client: ServiceMonitoringServiceClient
) {
  client.close();
}
function doStuffWithUptimeCheckServiceClient(client: UptimeCheckServiceClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const alertPolicyServiceClient = new AlertPolicyServiceClient();
  doStuffWithAlertPolicyServiceClient(alertPolicyServiceClient);
  // check that the client instance can be created
  const groupServiceClient = new GroupServiceClient();
  doStuffWithGroupServiceClient(groupServiceClient);
  // check that the client instance can be created
  const metricServiceClient = new MetricServiceClient();
  doStuffWithMetricServiceClient(metricServiceClient);
  // check that the client instance can be created
  const notificationChannelServiceClient =
    new NotificationChannelServiceClient();
  doStuffWithNotificationChannelServiceClient(notificationChannelServiceClient);
  // check that the client instance can be created
  const queryServiceClient = new QueryServiceClient();
  doStuffWithQueryServiceClient(queryServiceClient);
  // check that the client instance can be created
  const serviceMonitoringServiceClient = new ServiceMonitoringServiceClient();
  doStuffWithServiceMonitoringServiceClient(serviceMonitoringServiceClient);
  // check that the client instance can be created
  const uptimeCheckServiceClient = new UptimeCheckServiceClient();
  doStuffWithUptimeCheckServiceClient(uptimeCheckServiceClient);
}

main();
