import { useState } from 'react';
import { Bell, Shield, User, Globe, Moon, Save, Camera, Lock } from 'lucide-react';
import { settingsData } from '../data/settingsData';
import toast from 'react-hot-toast';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [formData, setFormData] = useState(settingsData);

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Moon },
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
        ...prev,
        [section]: {
            ...prev[section],
            [field]: value
        }
    }));
  };

  const handleToggle = (section, field) => {
      setFormData(prev => ({
          ...prev,
          [section]: {
              ...prev[section],
              [field]: !prev[section][field]
          }
      }));
  };

  const handleSave = () => {
      toast.success('Settings saved successfully!');
      console.log('Saved Data:', formData); // Log for debugging instead of showing to user
  };

  return (
    <div className="animate-fade-in-up space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">Settings</h2>
        <p className="text-slate-400">Manage your preferences and configuration.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar/Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 lg:flex-col lg:pb-0 lg:w-64 lg:gap-2 flex-shrink-0 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 lg:w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-white shadow-lg shadow-pink-500/10' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-pink-400' : 'text-slate-500'}`} />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
          
          {/* Account Tab */}
          {activeTab === 'account' && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                        AU
                    </div>
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-8 h-8 text-white" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{formData.account.fullName}</h3>
                    <p className="text-slate-400">{formData.account.bio}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Name</label>
                    <input 
                        type="text" 
                        value={formData.account.fullName} 
                        onChange={(e) => handleInputChange('account', 'fullName', e.target.value)}
                        className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-white transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email Address</label>
                    <input 
                        type="email" 
                        value={formData.account.email} 
                        onChange={(e) => handleInputChange('account', 'email', e.target.value)}
                        className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-white transition-colors"
                    />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-400">Location</label>
                    <input 
                        type="text" 
                        value={formData.account.location} 
                        onChange={(e) => handleInputChange('account', 'location', e.target.value)}
                        className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-pink-500/50 text-white transition-colors"
                    />
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-bold text-white mb-4">Alert Preferences</h3>
                {Object.entries(formData.notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-white capitalize font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <div 
                            onClick={() => handleToggle('notifications', key)}
                            className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ${value ? 'bg-pink-500' : 'bg-slate-700'}`}
                        >
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${value ? 'translate-x-6' : 'translate-x-0'}`} />
                        </div>
                    </div>
                ))}
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div className="space-y-8 animate-fade-in-up">
                <div>
                     <h3 className="text-xl font-bold text-white mb-4">Security</h3>
                     <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-start gap-4">
                        <Lock className="w-6 h-6 text-purple-400 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white">Two-Factor Authentication</h4>
                            <p className="text-slate-400 text-sm mt-1">Your account is currently protected with 2FA.</p>
                        </div>
                        <button 
                            onClick={() => toast('Two-Factor Authentication management is not available in this demo.', { icon: '🔒' })}
                            className="ml-auto px-4 py-2 bg-purple-500 rounded-lg text-white text-sm font-bold hover:bg-purple-600 transition-colors"
                        >
                            Manage
                        </button>
                     </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Change Password</h3>
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400">Current Password</label>
                        <input type="password" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white" />
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400">New Password</label>
                        <input type="password" className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white" />
                    </div>
                </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border-2 border-pink-500 bg-slate-900 cursor-pointer relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20" />
                        <div className="h-20 bg-slate-800 rounded-lg mb-2" />
                        <div className="h-4 w-2/3 bg-slate-700 rounded mb-2" />
                        <div className="h-4 w-1/2 bg-slate-700 rounded" />
                        <div className="mt-4 flex items-center gap-2 text-pink-400 font-bold text-sm">
                            <Moon className="w-4 h-4" /> Dark Gradient
                        </div>
                    </div>
                     <div className="p-4 rounded-xl border border-white/10 bg-white opacity-50 cursor-not-allowed relative overflow-hidden">
                        <div className="h-20 bg-gray-200 rounded-lg mb-2" />
                        <div className="h-4 w-2/3 bg-gray-300 rounded mb-2" />
                        <div className="h-4 w-1/2 bg-gray-300 rounded" />
                        <div className="mt-4 flex items-center gap-2 text-slate-500 font-bold text-sm">
                            <Globe className="w-4 h-4" /> Light Mode (Coming Soon)
                        </div>
                    </div>
                </div>
                
                <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">Language</h3>
                     <select className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white focus:outline-none">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                     </select>
                </div>
            </div>
          )}

           {/* Save Button (Global) */}
           <div className="mt-8 pt-8 border-t border-white/10 flex justify-end">
                <button 
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                    <Save className="w-4 h-4" /> Save Changes
                </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
