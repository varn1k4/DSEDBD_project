import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HealthCard from "../components/HealthCard";
import ReminderCard from "../components/ReminderCard";

function Dashboard() {
  const storedUser = localStorage.getItem("registeredUser");

  let userName = "User";

  if (storedUser) {
    try {
      userName = JSON.parse(storedUser).name || "User";
    } catch {
      userName = "User";
    }
  }

  return (
    <div className="app-container">

      <Navbar />

      <div className="main-layout">

        <Sidebar />

        <main className="content">

          <section className="welcome-section">

            <div>
              <p className="small-heading">
                PERSONAL HEALTH DASHBOARD
              </p>

              <h1>
                Hello, {userName} 👋
              </h1>

              <p>
                Keep track of your health information in one place.
              </p>
            </div>

            <div className="health-status">
              <span>●</span> Health tracking active
            </div>

          </section>

          <div className="health-grid">

            <HealthCard
              icon="🩺"
              title="Symptoms"
              value="0"
              description="Symptoms recorded"
            />

            <HealthCard
              icon="💊"
              title="Medications"
              value="0"
              description="Active medications"
            />

            <HealthCard
              icon="📅"
              title="Appointments"
              value="0"
              description="Upcoming appointments"
            />

            <HealthCard
              icon="🏃"
              title="Activities"
              value="0"
              description="Activities logged"
            />

          </div>

          <section className="dashboard-section">

            <div className="section-header">
              <h2>Today's Reminders</h2>
            </div>

            <ReminderCard
              title="Take your medication"
              time="No medication scheduled"
              type="Medication"
            />

            <ReminderCard
              title="Health check-in"
              time="Anytime today"
              type="Daily Activity"
            />

          </section>

          <section className="dashboard-section ai-preview">

            <div>
              <h2>🤖 AI Health Assistant</h2>

              <p>
                Get general health insights based on the
                information you record in your account.
              </p>
            </div>

            <a
              href="/ai-assistant"
              className="secondary-btn"
            >
              Open AI Assistant
            </a>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;