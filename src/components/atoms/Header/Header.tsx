import type {HeaderProps} from "./HeaderProps.ts";


export const Header: React.FC<HeaderProps> = ({
                                                  title,
                                                  subtitle,
                                                  isLoggedIn,
                                                  onLogin,
                                                  onLogout,
                                              }) => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4">
            <div className="flex-1">
                <div className="flex flex-col">
                    <span className="text-xl font-bold">{title}</span>
                    {subtitle && (
                        <span className="text-sm text-base-content/70">{subtitle}</span>
                    )}
                    <span className="material-symbols-outlined">
language
</span>
                </div>
            </div>


            <div className="flex-none gap-2">
                {!isLoggedIn ? (
                    <button className="btn btn-primary btn-sm" onClick={onLogin}>
                        Login
                    </button>
                ) : (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                                <span className="text-sm font-semibold">U</span>
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
                        >
                            <li>
                                <a>Profile</a>
                            </li>
                            <li>
                                <button onClick={onLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};