export default function Page() {
  return (
    <main>
      <h1 style={{ marginTop: 0 }}>Vibe Template Repo</h1>
      <p>
        This repo is meant to be duplicated for each project. It includes:
      </p>
      <ul>
        <li>Local run instructions</li>
        <li>Basic CI build checks</li>
        <li>A health endpoint for smoke testing</li>
        <li>A PR template to enforce learning while building</li>
      </ul>

      <h2>Health check</h2>
      <p>
        The endpoint <code>/api/health</code> should return <code>{"{ "ok": true }"}</code>.
      </p>
    </main>
  );
}
