import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Brand & Logo */}
      <div className="hidden lg:flex flex-1 bg-slate-900 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[100px] animate-pulse delay-700" />
        
        <div className="relative z-10 flex flex-col items-center p-12 text-center">
            <img 
                src="https://i.ibb.co/Hf64PxmH/rrr.jpg" 
                alt="RohmBuzz Logo" 
                className="w-48 h-48 rounded-3xl shadow-2xl shadow-pink-500/30 mb-8 hover:scale-105 transition-transform duration-500 object-cover"
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                RohmBuzz
            </h1>
            <p className="text-xl text-slate-400 max-w-md">
                Experience the future of dashboard analytics with our vibrant and powerful platform.
            </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-slate-950 p-8">
        <div className="w-full max-w-md space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-slate-400">Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Username</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-slate-400 group-focus-within:text-pink-400 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 text-white placeholder-slate-600 transition-all"
                            defaultValue="admin"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Password</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-pink-400 transition-colors" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full pl-11 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 text-white placeholder-slate-600 transition-all"
                            defaultValue="password"
                        />
                         <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                    Sign In
                </button>
            </form>

            <div className="text-center">
                <p className="text-sm text-slate-500">
                    Don't have an account? <a href="#" className="text-pink-400 hover:text-pink-300 font-medium hover:underline">Sign up for free</a>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
