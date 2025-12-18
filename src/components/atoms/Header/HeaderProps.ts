
export interface HeaderProps {
    title: string;
    subtitle?: string;
    isLoggedIn: boolean;
    onLogin?: () => void;
    onLogout?: () => void;
}