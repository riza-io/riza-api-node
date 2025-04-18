# Secrets

Types:

- <code><a href="./src/resources/secrets.ts">Secret</a></code>
- <code><a href="./src/resources/secrets.ts">SecretListResponse</a></code>

Methods:

- <code title="post /v1/secrets">client.secrets.<a href="./src/resources/secrets.ts">create</a>({ ...params }) -> Secret</code>
- <code title="get /v1/secrets">client.secrets.<a href="./src/resources/secrets.ts">list</a>({ ...params }) -> SecretListResponse</code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">Tool</a></code>
- <code><a href="./src/resources/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolExecResponse</a></code>

Methods:

- <code title="post /v1/tools">client.tools.<a href="./src/resources/tools.ts">create</a>({ ...params }) -> Tool</code>
- <code title="post /v1/tools/{id}">client.tools.<a href="./src/resources/tools.ts">update</a>(id, { ...params }) -> Tool</code>
- <code title="get /v1/tools">client.tools.<a href="./src/resources/tools.ts">list</a>({ ...params }) -> ToolListResponse</code>
- <code title="post /v1/tools/{id}/execute">client.tools.<a href="./src/resources/tools.ts">exec</a>(id, { ...params }) -> ToolExecResponse</code>
- <code title="get /v1/tools/{id}">client.tools.<a href="./src/resources/tools.ts">get</a>(id) -> Tool</code>

# Command

Types:

- <code><a href="./src/resources/command.ts">CommandExecResponse</a></code>
- <code><a href="./src/resources/command.ts">CommandExecFuncResponse</a></code>

Methods:

- <code title="post /v1/execute">client.command.<a href="./src/resources/command.ts">exec</a>({ ...params }) -> CommandExecResponse</code>
- <code title="post /v1/execute-function">client.command.<a href="./src/resources/command.ts">execFunc</a>({ ...params }) -> CommandExecFuncResponse</code>

# Runtimes

Types:

- <code><a href="./src/resources/runtimes/runtimes.ts">Runtime</a></code>
- <code><a href="./src/resources/runtimes/runtimes.ts">RuntimeListResponse</a></code>

Methods:

- <code title="post /v1/runtimes">client.runtimes.<a href="./src/resources/runtimes/runtimes.ts">create</a>({ ...params }) -> Runtime</code>
- <code title="get /v1/runtimes">client.runtimes.<a href="./src/resources/runtimes/runtimes.ts">list</a>() -> RuntimeListResponse</code>
- <code title="get /v1/runtimes/{id}">client.runtimes.<a href="./src/resources/runtimes/runtimes.ts">get</a>(id) -> Runtime</code>

## Revisions

Types:

- <code><a href="./src/resources/runtimes/revisions.ts">Revision</a></code>
- <code><a href="./src/resources/runtimes/revisions.ts">RevisionListResponse</a></code>

Methods:

- <code title="post /v1/runtimes/{id}/revisions">client.runtimes.revisions.<a href="./src/resources/runtimes/revisions.ts">create</a>(id, { ...params }) -> Revision</code>
- <code title="get /v1/runtimes/{id}/revisions">client.runtimes.revisions.<a href="./src/resources/runtimes/revisions.ts">list</a>(id) -> RevisionListResponse</code>
- <code title="get /v1/runtimes/{runtime_id}/revisions/{revision_id}">client.runtimes.revisions.<a href="./src/resources/runtimes/revisions.ts">get</a>(runtimeId, revisionId) -> Revision</code>
