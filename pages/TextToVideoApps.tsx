import React, { useState, useEffect, useCallback } from 'react';
import { generateStoryboard } from './services/geminiService';
import { LoadingSpinner, WarningIcon } from './components/icons';
import type { Storyboard } from './types';
import { callGemini } from "../services/geminiService";
import Icons from "../components/icons"; 

// Fix: Define AIStudio interface and use it for window.aistudio to resolve declaration conflict.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
  interface Window {
    aistudio: AIStudio;
  }
}

const TextToVideoApps: React.FC = () => {
  const [apiKeySelected, setApiKeySelected] = useState<boolean | null>(null);
  const [storyDescription, setStoryDescription] = useState<string>('');
  const [videoDuration, setVideoDuration] = useState<string>('60');
  const [storyboardJson, setStoryboardJson] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const checkApiKey = useCallback(async () => {
    try {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      setApiKeySelected(hasKey);
    } catch (e) {
      console.error("Error checking API key:", e);
      setApiKeySelected(false);
    }
  }, []);

  useEffect(() => {
    checkApiKey();
  }, [checkApiKey]);

  const handleSelectKey = async () => {
    try {
      await window.aistudio.openSelectKey();
      // Assume success and re-check. User might close the dialog.
      // Re-checking gives a more robust state update.
      // A small delay to allow the environment to process the key selection.
      setIsLoading(true);
      setTimeout(() => {
        checkApiKey();
        setIsLoading(false);
      }, 1000);
    } catch (e) {
      console.error("Error opening select key dialog:", e);
      setError("Could not open the API key selection dialog.");
    }
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyDescription.trim() || !videoDuration) {
      setError('Please provide both a story description and a video duration.');
      return;
    }
    
    setError(null);
    setIsLoading(true);
    setStoryboardJson('');

    try {
      const durationNum = parseInt(videoDuration, 10);
      if (isNaN(durationNum) || durationNum <= 0) {
        setError('Please enter a valid positive number for duration.');
        setIsLoading(false);
        return;
      }
      
      const result: Storyboard = await generateStoryboard(storyDescription, durationNum);
      setStoryboardJson(JSON.stringify(result, null, 2));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        if (err.message.includes("API key not found")) {
            setApiKeySelected(false);
        }
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (apiKeySelected === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <LoadingSpinner className="w-12 h-12 text-indigo-400" />
      </div>
    );
  }

  if (!apiKeySelected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 text-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-2xl max-w-lg w-full border border-gray-700">
            <h1 className="text-3xl font-bold mb-4 text-indigo-400">Welcome to Text to Videos</h1>
            <p className="text-gray-300 mb-6">
                This application uses Google's VEO and Gemini models to generate video storyboards. To proceed, please select a Google Cloud project with the Gemini API enabled.
            </p>
            <p className="text-sm text-gray-400 mb-6">
                For more information about billing, please visit <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">ai.google.dev/gemini-api/docs/billing</a>.
            </p>
            <button
                onClick={handleSelectKey}
                disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
                {isLoading ? <LoadingSpinner className="w-5 h-5" /> : 'Select API Key'}
            </button>
            {error && (
                <div className="mt-4 text-red-400 bg-red-900/50 p-3 rounded-lg flex items-center justify-center gap-2">
                    <WarningIcon className="w-5 h-5"/>
                    <p>{error}</p>
                </div>
            )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <main className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Text to Videos
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            Generate a detailed video storyboard from your story idea.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-indigo-400">1. Create Your Story</h2>
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label htmlFor="story-description" className="block text-sm font-medium text-gray-300 mb-2">
                  Story Description
                </label>
                <textarea
                  id="story-description"
                  rows={10}
                  value={storyDescription}
                  onChange={(e) => setStoryDescription(e.target.value)}
                  placeholder="e.g., A brave knight journeys through a mystical forest to find a legendary sword."
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-y"
                />
              </div>
              <div>
                <label htmlFor="video-duration" className="block text-sm font-medium text-gray-300 mb-2">
                  Desired Video Duration (seconds)
                </label>
                <input
                  id="video-duration"
                  type="number"
                  value={videoDuration}
                  onChange={(e) => setVideoDuration(e.target.value)}
                  placeholder="e.g., 60"
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                />
              </div>
              <div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  {isLoading && <LoadingSpinner className="w-5 h-5" />}
                  {isLoading ? 'Generating...' : 'Generate Storyboard'}
                </button>
              </div>
            </form>
          </div>

          {/* Output Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">2. Prompt Output (JSON)</h2>
            <div className="flex-grow bg-gray-900 rounded-lg p-4 overflow-auto border border-gray-600 min-h-[300px] lg:min-h-0">
              {isLoading && (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <LoadingSpinner className="w-10 h-10 mb-4" />
                  <p>Generating storyboard...</p>
                  <p className="text-sm text-gray-500 mt-2">This may take a moment.</p>
                </div>
              )}
              {error && (
                <div className="flex flex-col items-center justify-center h-full text-red-400">
                  <WarningIcon className="w-10 h-10 mb-4" />
                  <p className="font-semibold">An Error Occurred</p>
                  <p className="text-sm text-center mt-2">{error}</p>
                </div>
              )}
              {!isLoading && !error && storyboardJson && (
                <pre className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                  <code>{storyboardJson}</code>
                </pre>
              )}
              {!isLoading && !error && !storyboardJson && (
                 <div className="flex items-center justify-center h-full text-gray-500">
                  <p>Your generated storyboard will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
