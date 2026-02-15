export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem 1rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
        lineHeight: 1.6,
        color: "#1f2937",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
            color: "#111827",
          }}
        >
          Welcome to Acme Workspace
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#4b5563",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Your modern platform for team collaboration, project management, and secure document sharing.
        </p>
      </header>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
            color: "#111827",
          }}
        >
          Why teams choose Acme
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1.5rem",
              background: "#f9fafb",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Real-time collaboration
            </h3>
            <p style={{ color: "#4b5563" }}>
              Work together seamlessly with live editing, comments, and notifications.
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: "#f9fafb",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Secure & private
            </h3>
            <p style={{ color: "#4b5563" }}>
              End-to-end encryption and role-based access keep your data safe.
            </p>
          </div>

          <div
            style={{
              padding: "1.5rem",
              background: "#f9fafb",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              Works everywhere
            </h3>
            <p style={{ color: "#4b5563" }}>
              Available on web, desktop, and mobile — syncs across all your devices.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "3rem 1rem",
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
          borderRadius: "12px",
          marginBottom: "3rem",
        }}
      >
        <h2 style={{ fontSize: "2.25rem", fontWeight: 700, marginBottom: "1rem" }}>
          Get started in minutes
        </h2>
        <p style={{ fontSize: "1.125rem", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
          Create your first project, invite your team, and start collaborating today.
        </p>
        <button
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "0.875rem 2rem",
            fontSize: "1.125rem",
            fontWeight: 600,
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Sign Up Free
        </button>
      </section>

      <footer
        style={{
          textAlign: "center",
          paddingTop: "2rem",
          borderTop: "1px solid #e5e7eb",
          fontSize: "0.95rem",
          color: "#6b7280",
        }}
      >
        <p>© {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
        <p style={{ marginTop: "0.5rem" }}>
          <a
            href="/privacy"
            style={{ color: "#6b7280", textDecoration: "none", margin: "0 0.75rem" }}
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            style={{ color: "#6b7280", textDecoration: "none", margin: "0 0.75rem" }}
          >
            Terms of Service
          </a>
        </p>
      </footer>
    </main>
  );
}
