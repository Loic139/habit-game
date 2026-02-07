function App() {
  const missions = [
    {
      id: 1,
      title: "Conseils Fitness Quotidiens",
      status: "active",
      progress: 100,
      description: "Conseil automatique chaque matin à 8h via Telegram + Notion",
      icon: "💪",
      color: "green"
    },
    {
      id: 2,
      title: "Article WordPress - 5 Habitudes Matinales",
      status: "active",
      progress: 80,
      description: "Article rédigé, en brouillon sur coachme.fun",
      icon: "✍️",
      color: "blue"
    },
    {
      id: 3,
      title: "Recherche OpenClaw Complète",
      status: "completed",
      progress: 100,
      description: "50+ sources analysées, document complet créé",
      icon: "🦞",
      color: "purple"
    },
    {
      id: 4,
      title: "Habit Game - Déploiement",
      status: "active",
      progress: 60,
      description: "App créée, en cours de mise à jour avec missions",
      icon: "🎮",
      color: "pink"
    }
  ];

  const activeMissions = missions.filter(m => m.status === "active");
  const completedMissions = missions.filter(m => m.status === "completed");

  const getColorClasses = (color) => {
    const colors = {
      green: "from-green-500 to-emerald-500",
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-violet-500",
      pink: "from-pink-500 to-rose-500"
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-3">
            🎮 Habit Game - Loïc
          </h1>
          <p className="text-xl text-gray-600">
            Transforme tes habitudes en aventure épique!
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-3xl font-bold text-purple-600">Level 2</div>
            <div className="text-sm text-gray-500 mt-1">Débutant Motivé</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="text-4xl mb-2">🔥</div>
            <div className="text-3xl font-bold text-orange-600">3 jours</div>
            <div className="text-sm text-gray-500 mt-1">Streak</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-yellow-600">350 XP</div>
            <div className="text-sm text-gray-500 mt-1">Expérience</div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="text-4xl mb-2">✅</div>
            <div className="text-3xl font-bold text-green-600">{completedMissions.length}/{missions.length}</div>
            <div className="text-sm text-gray-500 mt-1">Missions</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Missions en cours */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>🎯</span> Missions en cours
          </h2>
          <div className="space-y-4">
            {activeMissions.map(mission => (
              <div key={mission.id} className="border-2 border-gray-100 rounded-xl p-4 hover:border-purple-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{mission.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{mission.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{mission.description}</p>
                    
                    {/* Progress bar */}
                    <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getColorClasses(mission.color)} transition-all duration-500`}
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-right">{mission.progress}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Missions terminées */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>🏆</span> Missions terminées
          </h2>
          <div className="space-y-4">
            {completedMissions.map(mission => (
              <div key={mission.id} className="border-2 border-green-100 bg-green-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{mission.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      {mission.title}
                      <span className="text-green-600">✓</span>
                    </h3>
                    <p className="text-sm text-gray-600">{mission.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {completedMissions.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                <div className="text-5xl mb-3">🎯</div>
                <p>Aucune mission terminée pour le moment</p>
                <p className="text-sm mt-2">Continue, tu vas y arriver !</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-3">Prêt pour de nouvelles missions ?</h3>
          <p className="text-lg mb-6 opacity-90">Chaque jour est une opportunité de progresser 💪</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
            Ajouter une nouvelle mission 🚀
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
