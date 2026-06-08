"use client";

import React, { useEffect, useState, useRef } from "react";
import { Lock, Save, RotateCcw, LogOut, Check, Loader2, Edit3, X } from "lucide-react";

export default function VisualEditor({ lang }: { lang: string }) {
  const [enabled, setEnabled] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [submittingAuth, setSubmittingAuth] = useState(false);
  
  const [changes, setChanges] = useState<{ [key: string]: string }>({});
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const originalTexts = useRef<{ [key: string]: string }>({});

  // 1. Initial Auth Check and URL detection
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const hasEditParam = searchParams.get("edit") === "true";

    if (!hasEditParam) {
      setCheckingAuth(false);
      return;
    }

    setEnabled(true);

    // Verify session cookie status
    fetch("/api/edit/auth")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setAuthenticated(true);
        }
      })
      .catch((err) => console.error("Session check failed:", err))
      .finally(() => setCheckingAuth(false));
  }, []);

  // 2. Setup visual edit triggers when authenticated
  useEffect(() => {
    if (!enabled || !authenticated) return;

    // Give Next.js hydration time to complete before scanning the DOM
    const timer = setTimeout(() => {
      const editableElements = document.querySelectorAll("[data-dict-key]");
      
      editableElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const key = htmlEl.getAttribute("data-dict-key");
        if (!key) return;

        // Store original text
        const currentText = htmlEl.innerText.trim();
        originalTexts.current[key] = currentText;

        // Apply editing attributes and classes
        htmlEl.contentEditable = "true";
        htmlEl.classList.add("editor-editable-element");
        
        // Inline styles for high-fidelity editor feedback (doesn't break original layouts)
        htmlEl.style.position = "relative";
        
        // Listeners for focus and input
        htmlEl.addEventListener("focus", () => {
          htmlEl.style.outline = "2px solid #E9C36B";
          htmlEl.style.borderRadius = "4px";
          htmlEl.style.backgroundColor = "rgba(233, 195, 107, 0.05)";
        });

        htmlEl.addEventListener("blur", () => {
          htmlEl.style.outline = "";
          htmlEl.style.borderRadius = "";
          htmlEl.style.backgroundColor = "";
          
          const newText = htmlEl.innerText.trim();
          if (newText !== originalTexts.current[key]) {
            setChanges((prev) => ({ ...prev, [key]: newText }));
          } else {
            setChanges((prev) => {
              const updated = { ...prev };
              delete updated[key];
              return updated;
            });
          }
        });
        
        // Intercept enter keys in inputs to prevent breaking layout structure if needed (optional)
      });

      // Inject custom hover stylesheet dynamically
      const styleId = "visual-editor-hover-styles";
      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.innerHTML = `
          .editor-editable-element:hover {
            outline: 1px dashed #E9C36B !important;
            cursor: pointer;
            border-radius: 4px;
            background-color: rgba(233, 195, 107, 0.03) !important;
          }
          .editor-editable-element::after {
            content: attr(data-dict-key);
            position: absolute;
            top: -16px;
            right: 0;
            background: #10b981;
            color: white;
            font-size: 8px;
            padding: 1px 4px;
            border-radius: 2px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s ease;
            z-index: 50;
            font-family: monospace;
          }
          .editor-editable-element:hover::after {
            opacity: 0.7;
          }
        `;
        document.head.appendChild(style);
      }
    }, 800);

    return () => {
      clearTimeout(timer);
      // Clean up editable attributes on unmount
      const editableElements = document.querySelectorAll("[data-dict-key]");
      editableElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.contentEditable = "false";
        htmlEl.classList.remove("editor-editable-element");
        htmlEl.style.outline = "";
        htmlEl.style.backgroundColor = "";
      });
      const style = document.getElementById("visual-editor-hover-styles");
      if (style) style.remove();
    };
  }, [enabled, authenticated]);

  // 3. Login submit
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setSubmittingAuth(true);

    try {
      const res = await fetch("/api/edit/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", password }),
      });

      const data = await res.json();
      if (res.ok && data.authenticated) {
        setAuthenticated(true);
        // Refresh page to clean params and establish editor mode
        window.location.reload();
      } else {
        setAuthError(data.error || "Login failed.");
      }
    } catch (err) {
      setAuthError("Network error. Please try again.");
    } finally {
      setSubmittingAuth(false);
    }
  };

  // 4. Save edits
  const handleSaveChanges = async () => {
    if (Object.keys(changes).length === 0) return;
    setSaving(true);
    setSaveStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/edit/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, updates: changes }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSaveStatus("success");
        setChanges({});
        // Reload page after a short success timeout to re-render server-side translations
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } else {
        setSaveStatus("error");
        setErrorMessage(data.error || "Fehler beim Speichern der Änderungen.");
      }
    } catch (err) {
      setSaveStatus("error");
      setErrorMessage("Netzwerkfehler beim Speichern.");
    } finally {
      setSaving(false);
    }
  };

  // 5. Discard all edits
  const handleDiscardChanges = () => {
    const editableElements = document.querySelectorAll("[data-dict-key]");
    editableElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const key = htmlEl.getAttribute("data-dict-key");
      if (key && originalTexts.current[key] !== undefined) {
        htmlEl.innerText = originalTexts.current[key];
      }
    });
    setChanges({});
  };

  // 6. Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/edit/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
      // Remove edit query and reload
      const url = new URL(window.location.href);
      url.searchParams.delete("edit");
      window.location.href = url.pathname;
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (!enabled || checkingAuth) return null;

  // ----------------------------------------------------------------
  // LOGIN DIALOG (Renders if ?edit=true is present but not logged in)
  // ----------------------------------------------------------------
  if (!authenticated) {
    return (
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-[99999] px-4 animate-fade-in">
        <div className="w-full max-w-md bg-emerald-950/90 border border-emerald-500/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-4">
            <button 
              onClick={() => {
                const url = new URL(window.location.href);
                url.searchParams.delete("edit");
                window.location.href = url.pathname;
              }}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-16 w-16 bg-[#E09D00]/10 rounded-2xl flex items-center justify-center mb-4 border border-[#E9C36B]/20">
              <Lock className="text-[#E9C36B] h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Oaza Mira Visual Editor</h2>
            <p className="text-emerald-100/70 text-sm mt-2">
              Geben Sie das Passwort ein, um den visuellen Bearbeitungsmodus freizuschalten.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#E9C36B] mb-2">
                Passwort
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-emerald-950/50 border border-emerald-500/20 focus:border-[#E9C36B] focus:ring-1 focus:ring-[#E9C36B] rounded-xl py-3.5 px-4 text-white placeholder-emerald-800/60 outline-none transition-all duration-300 font-medium"
              />
            </div>

            {authError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-200 text-xs rounded-xl p-3 text-center font-medium">
                {authError}
              </div>
            )}

            <button
              type="submit"
              disabled={submittingAuth}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E09D00] to-[#E9C36B] hover:opacity-90 active:scale-[0.98] text-[#1a2308] font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-[#E09D00]/10 transition-all duration-300 disabled:opacity-50"
            >
              {submittingAuth ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                <>
                  <Lock size={18} /> Freischalten
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------
  // BOTTOM EDITOR CONTROL DASHBOARD (Renders when authenticated)
  // ----------------------------------------------------------------
  const changeCount = Object.keys(changes).length;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl z-[99998] px-4 animate-slide-up">
      <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-xl">
        
        {/* Editor Branding & Unsaved Changes Badge */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="h-10 w-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/30">
            <Edit3 className="text-emerald-400 h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">Visual Editor</span>
              <span className="text-xs bg-[#E09D00]/25 text-[#E9C36B] border border-[#E9C36B]/20 rounded-full px-2 py-0.5 font-bold uppercase tracking-wider">
                {lang.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {changeCount === 0 
                ? "Klicke auf Textelemente auf der Seite, um sie direkt zu bearbeiten."
                : `${changeCount} ungespeicherte Änderung(en)`
              }
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {changeCount > 0 && (
            <>
              {/* Discard Changes Button */}
              <button
                onClick={handleDiscardChanges}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/50 text-xs font-bold transition-all"
              >
                <RotateCcw size={14} /> Verwerfen
              </button>

              {/* Save Changes Button */}
              <button
                onClick={handleSaveChanges}
                disabled={saving || saveStatus === "success"}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg ${
                  saveStatus === "success"
                    ? "bg-emerald-600 text-white"
                    : "bg-gradient-to-r from-[#E09D00] to-[#E9C36B] text-[#1a2308] hover:opacity-90 active:scale-95 shadow-[#E09D00]/10"
                }`}
              >
                {saving ? (
                  <Loader2 className="animate-spin h-3.5 w-3.5" />
                ) : saveStatus === "success" ? (
                  <Check size={14} />
                ) : (
                  <Save size={14} />
                )}
                {saveStatus === "success" ? "Gespeichert!" : "Speichern"}
              </button>
            </>
          )}

          {/* Spacer if no changes, to align nicely */}
          {changeCount === 0 && (
            <span className="text-xs text-emerald-500/80 flex items-center gap-1.5 font-semibold bg-emerald-500/5 border border-emerald-500/10 rounded-xl px-3 py-2 mr-2">
              <Check size={12} /> Live-Bearbeitungsmodus aktiv
            </span>
          )}

          {/* Vertical divider */}
          <div className="h-6 w-px bg-slate-800"></div>

          {/* Abmelden / Exit Button */}
          <button
            onClick={handleLogout}
            title="Editor beenden"
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 text-xs font-bold transition-all border border-rose-500/10"
          >
            <LogOut size={14} /> Beenden
          </button>
        </div>
      </div>

      {/* Save Error Popup Message */}
      {saveStatus === "error" && (
        <div className="mt-2 bg-red-500/10 border border-red-500/20 text-red-200 text-xs rounded-xl p-3 text-center font-medium animate-fade-in">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
