function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
          🎮 Habit Game
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Hello World! 👋
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Transforme tes habitudes en aventure épique!
        </p>
        <div className="flex gap-4 justify-center">
          <div className="bg-purple-100 rounded-xl p-4 flex-1">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-sm font-semibold text-purple-800">Level 1</div>
          </div>
          <div className="bg-pink-100 rounded-xl p-4 flex-1">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-sm font-semibold text-pink-800">0 Streak</div>
          </div>
          <div className="bg-blue-100 rounded-xl p-4 flex-1">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-sm font-semibold text-blue-800">0 XP</div>
          </div>
        </div>
        <button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
          Commencer l'aventure! 🚀
        </button>
      </div>
    </div>
  )
}

export default App
