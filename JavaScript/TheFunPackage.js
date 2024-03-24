// TheFunPackage - TheFunPackage.js

/* Copyright 2024 Aniketh Chavare

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

// Specifying the Variables
const __name__ = "TheFunPackage"
const __version__ = "1.0.0"
const __description__ = "This package is only meant for fun and to entertain you!"
const __license__ = "Apache License 2.0"
const __author__ = "Aniketh Chavare"
const __author_email__ = "anikethchavare@outlook.com"
const __github_url__ = "https://github.com/anikethchavare/TheFunPackage"
const __docs_url__ = "https://anikethchavare.gitbook.io/thefunpackage"

// Function 1 - GitHub
function github() {
    // Opening TheFunPackage's GitHub Repository
    window.open(__github_url__, "_blank");
}

// Function 2 - Docs
function docs() {
    // Opening TheFunPackage's Docs Page
    window.open(__docs_url__, "_blank");
}