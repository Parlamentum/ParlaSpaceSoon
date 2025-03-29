import React from 'react';
import { Gamepad2, Server, Clock, Mail, Rocket, Stars } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen text-white" style={{
      background: 'radial-gradient(128.3% 240.56% at 50% -88.22%, rgba(14,16,21,0) 0%, #0d121d 75.62%)'
    }}>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <img 
              src="https://github.com/Parlamentum/ParlaSpaceSoon/blob/main/Logo.png?raw=true"
              alt="ParlaSpace Logo" 
              className="w-32 h-32 mb-4"
            />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#06c0c6] to-[#91eafa] text-transparent bg-clip-text">
              ParlaSpace
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: '#91eafa' }}>
            חווית מיינקראפט לא מהעולם הזה
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            אנחנו עובדים במרץ כדי להביא לכם את חווית המשחק הטובה ביותר.
            הצטרפו אלינו למסע בין כוכבים.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#0d121d]/50 backdrop-blur-sm p-6 rounded-lg border border-[#06c0c6]/20 hover:border-[#06c0c6]/40 transition-colors">
              <Rocket className="w-8 h-8 mx-auto mb-4" style={{ color: '#06c0c6' }} />
              <h3 className="text-lg font-semibold">ביצועים חלליים</h3>
              <p className="text-gray-400">שרתים במהירות האור</p>
            </div>
            
            <div className="bg-[#0d121d]/50 backdrop-blur-sm p-6 rounded-lg border border-[#06c0c6]/20 hover:border-[#06c0c6]/40 transition-colors">
              <Stars className="w-8 h-8 mx-auto mb-4" style={{ color: '#06c0c6' }} />
              <h3 className="text-lg font-semibold">זמינות גלקטית</h3>
              <p className="text-gray-400">24/7 בכל רחבי היקום</p>
            </div>
            
            <div className="bg-[#0d121d]/50 backdrop-blur-sm p-6 rounded-lg border border-[#06c0c6]/20 hover:border-[#06c0c6]/40 transition-colors">
              <Server className="w-8 h-8 mx-auto mb-4" style={{ color: '#06c0c6' }} />
              <h3 className="text-lg font-semibold">תמיכה בעברית</h3>
              <p className="text-gray-400">צוות מקצועי לשירותכם</p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">רוצים להמריא איתנו?</h3>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-6 h-6" style={{ color: '#06c0c6' }} />
              <a 
                href="mailto:contact@parlaspace.co.il" 
                style={{ color: '#06c0c6' }}
                className="hover:text-[#91eafa] transition-colors"
              >
                contact@parlaspace.co.il
              </a>
            </div>
          </div>
        </div>
        
        <footer className="absolute bottom-4 text-sm text-gray-400">
          © 2024 ParlaSpace.co.il - חווית מיינקראפט לא מהעולם הזה
        </footer>
      </div>
    </div>
  );
}

export default App;
