import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <section className="max-w-6xl w-full grid gap-6 md:grid-cols-3">

        {/* Starter Plan */}
        <div className="rounded-xl p-6 border border-gray-800 
                        bg-gradient-to-b from-purple-700/20 to-indigo-900/20 
                        shadow-[0_0_20px_rgba(128,0,255,0.3)]
                        hover:shadow-[0_0_30px_rgba(128,0,255,0.6)]
                        hover:-translate-y-1 transition transform flex flex-col justify-between h-full">
          <h3 className="font-semibold text-xl text-white mb-2">Starter</h3>
          <p className="text-3xl font-extrabold text-purple-400 mb-4">$9</p>

          <ul className="space-y-2 text-gray-300 mb-6">
            <li>Standard Access</li>
            <li>Basic Support</li>
            <li>Starter Perks</li>
          </ul>

          <button className="w-full py-2 bg-purple-500 text-black rounded font-bold 
                             hover:bg-purple-400 transition">
            Choose Starter
          </button>
        </div>

        {/* Pro Plan (Recommended) */}
        <div className="relative rounded-xl p-6 border border-cyan-400
                        bg-gradient-to-b from-cyan-500/20 to-blue-900/20
                        shadow-[0_0_25px_rgba(0,255,255,0.6)]
                        hover:shadow-[0_0_40px_rgba(0,255,255,0.9)]
                        scale-105 hover:scale-110 transition transform flex flex-col justify-between h-full">
          
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                          bg-cyan-400 text-black px-3 py-1 rounded-full 
                          text-sm font-bold shadow-lg">
            MOST POPULAR
          </div>

          <h3 className="font-semibold text-xl text-white mb-2">Pro</h3>
          <p className="text-3xl font-extrabold text-cyan-300 mb-4">$29</p>

          <ul className="space-y-2 text-gray-300 mb-6">
            <li>Full Access</li>
            <li>Priority Support</li>
            <li>Daily Boosts</li>
            <li>Unlock Special Features</li>
          </ul>

          <button className="w-full py-2 bg-cyan-400 text-black rounded font-bold 
                             hover:bg-cyan-300 transition">
            Choose Pro
          </button>
        </div>

        {/* Business Plan */}
        <div className="rounded-xl p-6 border border-pink-600
                        bg-gradient-to-b from-red-700/20 to-pink-900/20
                        shadow-[0_0_20px_rgba(255,0,128,0.4)]
                        hover:shadow-[0_0_30px_rgba(255,0,128,0.7)]
                        hover:-translate-y-1 transition transform flex flex-col justify-between h-full">
          <h3 className="font-semibold text-xl text-white mb-2">Business</h3>
          <p className="text-3xl font-extrabold text-pink-400 mb-4">$49</p>

          <ul className="space-y-2 text-gray-300 mb-6">
            <li>All Access</li>
            <li>Premium Support</li>
            <li>Unlimited Boosts</li>
            <li>Exclusive Benefits</li>
            <li>VIP Features</li>
          </ul>

          <button className="w-full py-2 bg-pink-500 text-black rounded font-bold 
                             hover:bg-pink-400 transition">
            Choose Business
          </button>
        </div>

      </section>
    </div>
  );
}

export default App;
