#!/bin/bash

# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -xeo pipefail

export NPM_CONFIG_PREFIX=/home/node/.npm-global

# Setup service account credentials.
export GOOGLE_APPLICATION_CREDENTIALS=${KOKORO_GFILE_DIR}/service-account.json
export GCLOUD_PROJECT=long-door-651

cd $(dirname $0)/..

# Run a pre-test hook, if a pre-system-test.sh is in the project
if [ -f .kokoro/pre-system-test.sh ]; then
    set +x
    . .kokoro/pre-system-test.sh
    set -x
fi

# Test system-test with @grpc/grpc-js, requires node>=8.13.0
export GOOGLE_CLOUD_USE_GRPC_JS=1

npm install

npm run system-test