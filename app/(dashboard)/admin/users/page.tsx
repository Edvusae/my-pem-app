import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import UserInfo from "@/components/UserInfo";
import SignOutButton from "@/components/SignOutButton";

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  if (session.user.role !== "user") {
    redirect("/dashboard/admin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">
              My Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <UserInfo />
              <SignOutButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {/* Welcome Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back, {session.user.name}!
            </h2>
            <p className="text-gray-600">
              Here's an overview of your tasks and activities.
            </p>
          </div>

          {/* Personal Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                My Tasks
              </h3>
              <p className="text-3xl font-bold text-gray-900">12</p>
              <p className="text-xs text-gray-500 mt-1">3 due today</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                In Progress
              </h3>
              <p className="text-3xl font-bold text-gray-900">5</p>
              <p className="text-xs text-gray-500 mt-1">Updated 1h ago</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Completed This Week
              </h3>
              <p className="text-3xl font-bold text-gray-900">18</p>
              <p className="text-xs text-gray-500 mt-1">+20% from last week</p>
            </div>
          </div>

          {/* My Tasks List */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                My Tasks
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Review project documentation
                  </p>
                  <p className="text-xs text-gray-500">Due: Today, 5:00 PM</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">
                  High
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Update team presentation
                  </p>
                  <p className="text-xs text-gray-500">Due: Tomorrow, 2:00 PM</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">
                  Medium
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Organize files in shared drive
                  </p>
                  <p className="text-xs text-gray-500">Due: Dec 31</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                  Low
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}