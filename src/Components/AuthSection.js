import { useEffect, useState } from "react";

const AuthSection = () => {
  const [user, setUser] = useState(null);

  // On component load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
    const userObj = JSON.parse(storedUser);
    setUser(userObj.name);
  }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="auth">
  {user ? (
    <div className="user-wrapper">
      <span className="user">Hi, {user} 💖</span>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  ) : (
    <>
      <a href="/login">
        <button>Login</button>
      </a>
      <a href="/signin">
      <button>Sign In</button>
      </a>
    </>
  )}
</div>
  );
};

export default AuthSection;
