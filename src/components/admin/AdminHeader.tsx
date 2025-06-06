
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

interface AdminHeaderProps {
  activeTab: "questions" | "responses" | "settings";
  setActiveTab: (tab: "questions" | "responses" | "settings") => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ 
  activeTab, 
  setActiveTab
}) => {
  return (
    <header className="mb-8">
      <div className="flex items-center mb-4">
        <img 
          src="/lovable-uploads/quizicall-logo.png" 
          alt="Logo Quizicall" 
          className="h-12 mr-3"
        />
        <h1 className="text-3xl font-bold text-gray-800">Administration du formulaire</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("questions")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "questions"
                ? "bg-violet-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            Questions
          </button>
          <button
            onClick={() => setActiveTab("responses")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "responses"
                ? "bg-violet-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            Réponses
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "settings"
                ? "bg-violet-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            Paramètres
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/form"
            className="text-violet-600 hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le formulaire
          </Link>
          <Link
            to="/"
            className="text-violet-600 hover:underline flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
            Accueil
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
