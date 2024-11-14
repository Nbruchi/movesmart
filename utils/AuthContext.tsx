import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  SetStateAction,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserData } from "@/constants/data"; // Import UserData interface from account.tsx

// Define the shape of the AuthContext value
interface AuthContextValue {
  user: UserData | null; // Current user data or null if not logged in
  login: (userData: SetStateAction<UserData | null>) => void; // Function to login the user
  logout: () => void; // Function to logout the user
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextValue | null>(null);

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  // Check if the user is already logged in when the component mounts
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Function to check if the user is already logged in
  const checkUserLoggedIn = async () => {
    try {
      const userData = await AsyncStorage.getItem("currentUser");
      if (userData) {
        const userDataParsed: UserData = JSON.parse(userData);
        // Check if the user data contains the loginTime property
        if ("loginTime" in userDataParsed) {
          const { loginTime } = userDataParsed;
          const currentTime = new Date().getTime(); // Get current time in milliseconds
          const timeDifference = currentTime - loginTime;
          const oneDayInMillis = 24 * 60 * 60 * 1000; // One day in milliseconds
          if (timeDifference > oneDayInMillis) {
            // User logged in more than a day ago, prompt for login again
            setUser(null); // Clear user data
            console.log(
              "User logged in more than a day ago. Prompt for login."
            );
          } else {
            // User logged in within the last day, continue session
            setUser(userDataParsed);
            console.log(
              "User logged in within the last day. Continue session."
            );
          }
        } else {
          // No login time found in user data, continue session
          setUser(userDataParsed);
        }
      } else {
        // No user data found, prompt for login
        setUser(null); // Clear user data
        console.log("No user data found. Prompt for login.");
      }
    } catch (error) {
      console.error("Failed to retrieve user data:", error);
    }
  };

  // Function to login the user
  const login = (userData: SetStateAction<UserData | null>) => {
    setUser(userData);
    // Store user data in AsyncStorage
    AsyncStorage.setItem("currentUser", JSON.stringify(userData));
  };

  // Function to logout the user
  const logout = () => {
    setUser(null);
    // Remove user data from AsyncStorage
    AsyncStorage.removeItem("currentUser");
  };

  // Create the AuthContext value
  const authContextValue: AuthContextValue = {
    user,
    login,
    logout,
  };

  // Return the AuthContext.Provider with the authContextValue
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
