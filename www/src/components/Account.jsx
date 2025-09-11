import { useContext } from 'react';
import { ThemeContext } from '../App';

function Account() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    if (selectedTheme !== theme) {
      toggleTheme();
    }
  };

  return (
    <div
      className={`p-4 sm:p-6 min-h-screen font-sans flex flex-col gap-6 ${
        theme === 'light' ? 'bg-[#f5f5f5]' : 'bg-[#0A0F23]'
      }`}
    >
      <h2 className={`text-2xl font-semibold ${theme === 'light' ? 'text-[#333]' : 'text-white'}`}>
        Account
      </h2>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="theme-select"
          className={`text-base ${theme === 'light' ? 'text-[#333]' : 'text-white'}`}
        >
          Theme
        </label>
        <select
          id="theme-select"
          value={theme}
          onChange={handleThemeChange}
          className={`w-full max-w-xs p-3 text-base border rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-[#00BCD4] transition-shadow touch-none ${
            theme === 'light' ? 'bg-[#fff] text-[#333] border-gray-300' : 'bg-[#0A0F23] text-white border-[#00BCD4]'
          }`}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
}

export default Account;