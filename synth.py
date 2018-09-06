# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""This script is used to synthesize generated parts of this library."""

import synthtool as s
import synthtool.gcp as gcp
import subprocess
import logging

logging.basicConfig(level=logging.DEBUG)

common_templates = gcp.CommonTemplates()

version = "v3"

library = gapic.node_library(
    "monitoring", version, config_path="/google/monitoring/artman_monitoring.yaml"
)

s.copy(library, excludes=["src/index.js", "README.md", "package.json"])

templates = common_templates.node_library()
s.copy(templates)

"""
Node.js specific cleanup
"""
subprocess.run(["npm", "install"])
subprocess.run(["npm", "run", "prettier"])
subprocess.run(["npm", "run", "lint"])
