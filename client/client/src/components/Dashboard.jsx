// src/components/Dashboard.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    name: "Michael Holz",
    avatar: "https://i.pravatar.cc/150?img=1",
    date: "2023-07-08",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Paula Wilson",
    avatar: "https://i.pravatar.cc/150?img=2",
    date: "2023-04-17",
    role: "Moderator",
    status: "Suspended",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "2022-11-12",
    role: "User",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Mary Saveleva",
    avatar: "https://i.pravatar.cc/150?img=4",
    date: "2024-02-01",
    role: "Admin",
    status: "Active",
  },
  {
    id: 5,
    name: "Robert Fox",
    avatar: "https://i.pravatar.cc/150?img=5",
    date: "2023-08-14",
    role: "User",
    status: "Active",
  },
  {
    id: 6,
    name: "Emily Stone",
    avatar: "https://i.pravatar.cc/150?img=6",
    date: "2023-03-29",
    role: "Moderator",
    status: "Suspended",
  },
  {
    id: 7,
    name: "Liam Turner",
    avatar: "https://i.pravatar.cc/150?img=7",
    date: "2022-12-25",
    role: "User",
    status: "Inactive",
  },
];


const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const statusColor = (status) =>
    status === "Active"
      ? "text-green-600"
      : status === "Suspended"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">📊 Dashboard</h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase tracking-wide">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Name</th>
              <th className="p-4">Date Created</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 flex items-center gap-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {user.name}
                </td>
                <td className="p-4">{user.date}</td>
                <td className="p-4">{user.role}</td>
                <td className={`p-4 font-semibold ${statusColor(user.status)}`}>
                  {user.status}
                </td>
                <td className="p-4 space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    👁️
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700">
                    ✏️
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
