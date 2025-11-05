import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: any;
  token: string | null;
  loading: boolean
  login: (user: any, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const saveUser = localStorage.getItem("user");
    const saveToken = localStorage.getItem("accessToken");
    if (saveUser && saveUser !== "undefined" && saveToken) {
      try {
        setUser(JSON.parse(saveUser));
        setToken(saveToken);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false)
  }, []);

  const login = (user: any, token: string) => {
    console.log("AuthContext login called with:", { user, token });
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", token);
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token,loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within an AuthProvider");
  return context;
};
