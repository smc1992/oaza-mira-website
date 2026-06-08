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

  const [currentPage, setCurrentPage] = useState("");
  const [currentLang, setCurrentLang] = useState(lang);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const parts = pathname.split("/").filter(Boolean);
      const matchedLang = ["de", "en", "hr"].includes(parts[0]) ? parts[0] : "de";
      const matchedPage = parts.slice(1).join("/") || "";
      setCurrentLang(matchedLang);
      setCurrentPage(matchedPage);
    }
  }, []);

  const handleNavigate = (newPage: string, newLang: string) => {
    if (Object.keys(changes).length > 0) {
      const confirmNav = window.confirm(
        "You have unsaved changes. Are you sure you want to discard them and switch pages?"
      );
      if (!confirmNav) return;
    }
    setCurrentPage(newPage);
    setCurrentLang(newLang);
    window.location.href = `/${newLang}/${newPage ? newPage : ""}?edit=true`;
  };

  // 1. Initial Auth Check and URL detection
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const hasEditParam = searchParams.get("edit") === "true";
    const hasSessionEdit = sessionStorage.getItem("oaza_mira_edit_mode") === "true";

    if (!hasEditParam && !hasSessionEdit) {
      setCheckingAuth(false);
      return;
    }

    if (hasEditParam) {
      sessionStorage.setItem("oaza_mira_edit_mode", "true");
    }

    setEnabled(true);

    // Verify session cookie status
    fetch("/api/edit/auth")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setAuthenticated(true);
        } else {
          sessionStorage.removeItem("oaza_mira_edit_mode");
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

        const isImgTag = htmlEl.tagName === "IMG";
        const isImage = isImgTag || htmlEl.getAttribute("data-editor-type") === "image";

        // Store original value (src for images, innerText for text)
        const currentVal = isImgTag 
          ? (htmlEl as HTMLImageElement).getAttribute("src") || "" 
          : (htmlEl.getAttribute("data-editor-type") === "image" 
              ? htmlEl.style.backgroundImage.replace(/^url\(["']?|["']?\)$/g, "") 
              : htmlEl.innerText.trim());
              
        originalTexts.current[key] = currentVal;

        if (isImage) {
          htmlEl.classList.add("editor-editable-image");
          htmlEl.style.cursor = "pointer";
          
          const handleImageClick = (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            
            const currentSrc = isImgTag 
              ? (htmlEl as HTMLImageElement).getAttribute("src") || "" 
              : htmlEl.style.backgroundImage.replace(/^url\(["']?|["']?\)$/g, "");
              
            const newUrl = prompt(`Enter new image URL/path for key "${key}":`, currentSrc);
            if (newUrl !== null && newUrl.trim() !== "") {
              const cleanedUrl = newUrl.trim();
              if (isImgTag) {
                (htmlEl as HTMLImageElement).src = cleanedUrl;
              } else {
                htmlEl.style.backgroundImage = `url('${cleanedUrl}')`;
              }
              setChanges((prev) => ({ ...prev, [key]: cleanedUrl }));
            }
          };
          
          htmlEl.addEventListener("click", handleImageClick);
        } else {
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
        }
      });

      // Inject custom hover stylesheet dynamically
      const styleId = "visual-editor-hover-styles";
      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.innerHTML = `
          .editor-editable-element {
            position: relative;
          }
          .editor-editable-element:hover {
            outline: 1px dashed #E9C36B !important;
            cursor: pointer;
            border-radius: 4px;
            background-color: rgba(233, 195, 107, 0.03) !important;
          }
          .editor-editable-image {
            position: relative;
            transition: all 0.2s ease;
          }
          .editor-editable-image:hover {
            outline: 3px dashed #E09D00 !important;
            outline-offset: -3px;
            box-shadow: 0 0 15px rgba(224, 157, 0, 0.4) !important;
            cursor: pointer;
          }
          .editor-editable-element::after, .editor-editable-image::after {
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
          .editor-editable-element:hover::after, .editor-editable-image:hover::after {
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
        htmlEl.classList.remove("editor-editable-element", "editor-editable-image");
        htmlEl.style.outline = "";
        htmlEl.style.backgroundColor = "";
        htmlEl.style.cursor = "";
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
        if (htmlEl.tagName === "IMG") {
          (htmlEl as HTMLImageElement).src = originalTexts.current[key];
        } else if (htmlEl.getAttribute("data-editor-type") === "image") {
          htmlEl.style.backgroundImage = `url('${originalTexts.current[key]}')`;
        } else {
          htmlEl.innerText = originalTexts.current[key];
        }
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
      sessionStorage.removeItem("oaza_mira_edit_mode");
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
              Enter the password to unlock the visual editing mode.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#E9C36B] mb-2">
                Password
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
                  <Lock size={18} /> Unlock
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
                ? "Click on text elements on the page to edit them inline."
                : `${changeCount} unsaved change(s)`
              }
            </p>
          </div>
        </div>

        {/* Page & Language Selector */}
        <div className="flex items-center gap-2 bg-slate-950/40 p-1.5 rounded-xl border border-slate-800">
          {/* Page Selector */}
          <select
            value={currentPage}
            onChange={(e) => handleNavigate(e.target.value, currentLang)}
            className="bg-slate-800/90 border border-slate-700/50 text-white rounded-lg text-[11px] py-1.5 px-3 focus:outline-none focus:border-[#E9C36B] font-semibold cursor-pointer max-w-[150px] sm:max-w-none outline-none"
          >
            <option value="">🏠 Home</option>
            <option value="how-it-works">🛠️ How It Works</option>
            <option value="families">👨‍👩‍👧‍👦 For Families</option>
            <option value="business">💼 For Companies</option>
            <option value="providers">💪 For Caretakers</option>
            <option value="institutions">🏢 For Institutions</option>
            <option value="about">ℹ️ About Us</option>
            <option value="contact">📞 Contact</option>
            <option value="imprint">📄 Imprint</option>
            <option value="cookie-policy">🍪 Cookie Policy</option>
            <option value="privacy-policy">🔒 Privacy Policy</option>
            <option value="terms">⚖️ Terms</option>
            <option value="refund-policy">💸 Refund Policy</option>
          </select>

          {/* Language Selector */}
          <select
            value={currentLang}
            onChange={(e) => handleNavigate(currentPage, e.target.value)}
            className="bg-slate-800/90 border border-slate-700/50 text-white rounded-lg text-[11px] py-1.5 px-3 focus:outline-none focus:border-[#E9C36B] font-bold cursor-pointer outline-none"
          >
            <option value="de">🇩🇪 DE</option>
            <option value="en">🇬🇧 EN</option>
            <option value="hr">🇭🇷 HR</option>
          </select>
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
                <RotateCcw size={14} /> Discard
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
                {saveStatus === "success" ? "Saved!" : "Save"}
              </button>
            </>
          )}

          {/* Spacer if no changes, to align nicely */}
          {changeCount === 0 && (
            <span className="text-xs text-emerald-500/80 flex items-center gap-1.5 font-semibold bg-emerald-500/5 border border-emerald-500/10 rounded-xl px-3 py-2 mr-2">
              <Check size={12} /> Visual Edit Mode Active
            </span>
          )}

          {/* Vertical divider */}
          <div className="h-6 w-px bg-slate-800"></div>

          {/* Abmelden / Exit Button */}
          <button
            onClick={handleLogout}
            title="Exit Editor"
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 text-xs font-bold transition-all border border-rose-500/10"
          >
            <LogOut size={14} /> Exit
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
