# Secrets

Types:

- <code><a href="./src/resources/secrets.ts">Secret</a></code>
- <code><a href="./src/resources/secrets.ts">SecretListResponse</a></code>

Methods:

- <code title="get /v1/secrets">client.secrets.<a href="./src/resources/secrets.ts">list</a>() -> SecretListResponse</code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">Tool</a></code>
- <code><a href="./src/resources/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolExecResponse</a></code>

Methods:

- <code title="post /v1/tools">client.tools.<a href="./src/resources/tools.ts">create</a>({ ...params }) -> Tool</code>
- <code title="post /v1/tools/{id}">client.tools.<a href="./src/resources/tools.ts">update</a>(id, { ...params }) -> Tool</code>
- <code title="get /v1/tools">client.tools.<a href="./src/resources/tools.ts">list</a>() -> ToolListResponse</code>
- <code title="post /v1/tools/{id}/execute">client.tools.<a href="./src/resources/tools.ts">exec</a>(id, { ...params }) -> ToolExecResponse</code>
- <code title="get /v1/tools/{id}">client.tools.<a href="./src/resources/tools.ts">get</a>(id) -> Tool</code>

# Command

Types:

- <code><a href="./src/resources/command.ts">CommandExecResponse</a></code>

Methods:

- <code title="post /v1/execute">client.command.<a href="./src/resources/command.ts">exec</a>({ ...params }) -> CommandExecResponse</code>
