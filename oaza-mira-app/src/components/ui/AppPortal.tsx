"use client";

import React from 'react';
import { HelpCircle, Plus, Search, Home, ShoppingCart, Menu, User, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface AppPortalProps {
  dict: any;
  lang: string;
}

const AppPortal: React.FC<AppPortalProps> = ({ dict, lang }) => {
  return (
    <section id="portal" className="py-24 lg:py-32 bg-[#FDF8EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <AnimatedSection className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#50641B]/10 text-[#50641B] text-sm font-bold tracking-widest uppercase mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E09D00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E09D00]"></span>
              </span>
              Digital Presence
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#333] leading-tight mb-8">
              Your loved ones, <span className="text-[#50641B]">always nearby.</span>
            </h2>
            
            <p className="text-xl text-[#B8AE9F] leading-relaxed mb-10">
              Our mobile application provides a seamless way to manage and oversee the care of your family resting places. From real-time photo updates to effortless ordering of floral arrangements, everything you need is just a tap away.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#E09D00]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] text-lg">Real-time Management</h4>
                  <p className="text-[#B8AE9F]">Track every update and maintenance activity.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#E09D00]">
                  <Plus size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] text-lg">Family Collaborative Access</h4>
                  <p className="text-[#B8AE9F]">Invite relatives to share the presence and care.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* The Phone Mockup */}
          <AnimatedSection delay={0.2} className="relative flex justify-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#50641B]/10 rounded-full blur-[100px] -z-10"></div>
            
            {/* Phone Frame */}
            <div className="relative w-full max-w-[380px] aspect-[9/19] bg-black rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(80,100,27,0.3)] border-[8px] border-zinc-900 overflow-hidden">
              {/* Screen Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-900 rounded-b-3xl z-50 flex items-center justify-center">
                <div className="w-12 h-1.5 bg-zinc-800 rounded-full"></div>
              </div>
              
              {/* App Content */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col font-sans">
                
                {/* Status Bar App Mockup */}
                <div className="h-10 w-full flex justify-between items-center px-8 pt-4">
                  <span className="text-xs font-bold">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-5 flex gap-0.5 items-end">
                      <div className="w-1 h-[20%] bg-black rounded-sm"></div>
                      <div className="w-1 h-[40%] bg-black rounded-sm"></div>
                      <div className="w-1 h-[70%] bg-black rounded-sm"></div>
                      <div className="w-1 h-[100%] bg-black rounded-sm"></div>
                    </div>
                    <div className="h-3 w-4 border border-black/30 rounded-sm relative flex items-center px-0.5">
                      <div className="h-full w-[70%] bg-black rounded-sm"></div>
                      <div className="absolute -right-1.5 w-1 h-1.5 bg-black/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Header */}
                <header className="px-6 pt-4 pb-2 flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-[#FDF8EE] flex items-center justify-center text-zinc-800 shadow-sm border border-zinc-100">
                    <HelpCircle size={20} />
                  </div>
                  <h1 className="text-xl font-bold text-[#333] tracking-tight">Početna</h1>
                  <div className="w-10 h-10 rounded-full bg-[#F2F8E1] flex items-center justify-center text-[#50641B] shadow-sm border border-[#50641B]/10">
                    <Plus size={20} />
                  </div>
                </header>
                
                {/* Tabs */}
                <div className="px-6 mt-4">
                  <div className="bg-[#F2F8E1] rounded-2xl p-1 flex gap-1">
                    <button className="flex-1 py-3.5 bg-[#E09D00] text-[#1a2308] font-extrabold text-sm rounded-xl shadow-md">
                      Moja Počivališta
                    </button>
                    <button className="flex-1 py-3.5 text-[#50641B]/60 font-bold text-sm rounded-xl">
                      Javna Počivališta
                    </button>
                  </div>
                </div>
                
                {/* Main Scroll Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 scrollbar-hide">
                  
                  {/* Pregled Počivališta Section */}
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Pregled Počivališta</h3>
                    <div className="bg-[#F2F8E1] rounded-3xl p-4 shadow-sm border border-[#50641B]/5 relative overflow-hidden group">
                      
                      {/* Family Panoramic Image */}
                      <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-4">
                        <img 
                          src="https://images.unsplash.com/photo-1598114407137-0cf0656094cd?q=80&w=600&auto=format&fit=crop" 
                          alt="Family Grave"
                          className="w-full h-full object-cover grayscale-[0.3] group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 right-2 bg-white/40 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1">
                          <MapPin size={8} className="text-[#333]" />
                          <span className="text-[6px] font-bold text-[#333]">Mirogoj - Zagreb / Hrvatska</span>
                        </div>
                      </div>
                      
                      {/* Grave Thumbnail */}
                      <div className="absolute top-28 left-8 w-16 h-16 rounded-full border-4 border-[#F2F8E1] overflow-hidden z-10 shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1517524951717-384351651817?q=80&w=200&auto=format&fit=crop" 
                          alt="Grave"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="pt-8 pb-2">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-base font-extrabold text-black">Obitelj Kapitanović</h4>
                          <div className="text-right">
                             <div className="flex items-center justify-end gap-1 mb-1">
                                <span className="text-[8px] font-bold text-[#50641B]/60 uppercase">Pretplata aktivna</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]"></div>
                             </div>
                             <p className="text-[7px] text-zinc-500 font-bold">Osobe u ovom grobu: 2</p>
                          </div>
                        </div>
                        
                        <div className="flex -space-x-1.5 mb-5 items-center">
                          <img className="w-7 h-7 rounded-full border-2 border-[#F2F8E1] select-none" src="https://i.pravatar.cc/100?img=11" alt="U1" />
                          <img className="w-7 h-7 rounded-full border-2 border-[#F2F8E1] select-none" src="https://i.pravatar.cc/100?img=12" alt="U2" />
                          <div className="w-7 h-7 rounded-full border-2 border-[#F2F8E1] bg-white flex items-center justify-center text-[8px] font-bold text-zinc-400">+</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <button className="py-2.5 bg-[#50641B] text-white font-bold text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                            Pregledaj
                          </button>
                          <button className="py-2.5 bg-[#E09D00] text-[#1a2308] font-extrabold text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-opacity">
                            Naruči
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sjećanje na prijatelje Section */}
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Sjećanje na prijatelje</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                      <div className="flex-shrink-0 w-64 bg-[#F2F8E1] rounded-3xl p-4 shadow-sm border border-[#50641B]/5">
                        <div className="relative w-full h-28 rounded-2xl overflow-hidden mb-4">
                           <img 
                            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=400&auto=format&fit=crop" 
                            alt="Flowers"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-white/40 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1">
                            <MapPin size={8} className="text-[#333]" />
                            <span className="text-[6px] font-bold text-[#333]">Mirogoj - Zagreb / Hrvatska</span>
                          </div>
                        </div>
                        
                        {/* Avatar */}
                        <div className="absolute top-24 left-8 w-12 h-12 rounded-full border-2 border-[#F2F8E1] overflow-hidden z-10 shadow-md">
                          <img 
                            src="https://i.pravatar.cc/100?img=13" 
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="pt-6">
                           <div className="flex items-center justify-between mb-2">
                              <h4 className="text-sm font-extrabold text-black">Noa Kapitanović</h4>
                              <div className="flex items-center gap-1">
                                <span className="text-[6px] font-bold text-[#50641B]/60 uppercase">Pretplata Aktivna</span>
                                <div className="w-1 h-1 rounded-full bg-[#4CAF50]"></div>
                              </div>
                           </div>
                           
                           <div className="grid grid-cols-2 gap-2 mt-4">
                              <button className="py-2 bg-[#50641B]/20 text-[#50641B] font-bold text-[9px] rounded-lg">
                                Pregledaj
                              </button>
                              <button className="py-2 bg-[#E09D00] text-[#1a2308] font-extrabold text-[9px] rounded-lg">
                                Naruči
                              </button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full py-4 bg-[#E09D00] text-[#1a2308] font-[900] text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all transform duration-300 mb-4">
                    Dodaj Počivalište
                  </button>
                  
                </div>
                
                {/* Navigation Bar */}
                <nav className="h-20 w-full px-6 flex justify-between items-center border-t border-zinc-100 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-12 py-1.5 bg-[#50641B]/15 text-[#50641B] rounded-xl flex items-center justify-center">
                      <Home size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-[8px] font-extrabold text-[#50641B]">Početna</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1 text-zinc-400">
                    <ShoppingCart size={20} />
                    <span className="text-[8px] font-bold">Naruči</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1 text-zinc-400">
                    <Menu size={20} />
                    <span className="text-[8px] font-bold">Izbornik</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-1 text-zinc-400">
                    <User size={20} />
                    <span className="text-[8px] font-bold">Profil</span>
                  </div>
                </nav>
                
              </div>
            </div>
          </AnimatedSection>
          
        </div>
      </div>
    </section>
  );
};

// Internal MapPin placeholder as it's used in the mockup
const MapPin = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default AppPortal;
