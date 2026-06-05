"use client";

import { Search, MoreVertical, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      name: "Arjun Kapoor",
      email: "arjun@example.com",
      memberId: "MUD-2847",
      status: "Active",
      joinDate: "2024-01-15",
      points: 4820,
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      memberId: "MUD-2848",
      status: "Active",
      joinDate: "2024-02-20",
      points: 3450,
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane@example.com",
      memberId: "MUD-2849",
      status: "Inactive",
      joinDate: "2024-01-25",
      points: 1200,
    },
    {
      id: 4,
      name: "Mike Johnson",
      email: "mike@example.com",
      memberId: "MUD-2850",
      status: "Active",
      joinDate: "2024-03-10",
      points: 5600,
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dash-pad">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="dash-h1">Users Management</h1>
          <p className="dash-sub">Manage and monitor user accounts</p>
        </div>
        <button className="btn dash-btn bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          Add User
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dashboard-tx2" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-dashboard-sf border border-dashboard-bd rounded-xl text-dashboard-tx placeholder:text-dashboard-tx2 outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="dash-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dashboard-bd">
                <th className="px-6 py-4 text-left text-xs font-bold text-dashboard-tx2 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-dashboard-tx2 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-dashboard-tx2 uppercase tracking-wider">
                  Member ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-dashboard-tx2 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-dashboard-tx2 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-dashboard-tx2 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-dashboard-tx2 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-dashboard-bd hover:bg-dashboard-sf transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-semibold text-dashboard-tx">{user.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-dashboard-tx2">{user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-mono text-sm text-dashboard-tx">{user.memberId}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-dashboard-tx">{user.points}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-dashboard-tx2">{user.joinDate}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-dashboard-bd transition-colors text-dashboard-tx2 hover:text-dashboard-tx">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-red-500/10 transition-colors text-dashboard-tx2 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dashboard-tx2">No users found</p>
        </div>
      )}
    </div>
  );
}
