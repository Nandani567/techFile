<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Coders - Login</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c1159d",
                        "background-light": "#f6f6f8",
                        "background-dark": "#2acd1e",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
                },
            },
        }
    </script>
</head>
<body class="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col">
<!-- Top Navigation (Simplified for Login Context) -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#2a2938] px-10 py-4 bg-white dark:bg-[#121118]">
<div class="flex items-center gap-2 text-primary dark:text-white">
<div class="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined text-2xl">code</span>
</div>
<h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Coders</h2>
</div>
<div class="text-sm font-medium">
<span class="text-slate-500 dark:text-slate-400">Don't have an account?</span>
<a class="ml-2 text-primary hover:text-primary/80 font-semibold" href="#">Sign up</a>
</div>
</header>
<!-- Main Content Area -->
<main class="flex-1 flex w-full">
<!-- Split Layout Container -->
<div class="flex w-full min-h-[calc(100vh-73px)]">
<!-- Left Side: Login Form -->
<div class="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white dark:bg-[#121118]">
<div class="w-full max-w-[480px] flex flex-col gap-6">
<!-- Header Text -->
<div class="text-center sm:text-left mb-4">
<h1 class="text-slate-900 dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight mb-2">Welcome back, Coder.</h1>
<p class="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Continue your learning journey.</p>
</div>
<!-- Social Login (Optional but modern) -->
<div class="flex flex-col gap-3">
<button class="flex items-center justify-center gap-3 w-full h-12 rounded-lg border border-slate-200 dark:border-[#3e3c53] bg-white dark:bg-[#1d1c26] hover:bg-slate-50 dark:hover:bg-[#252430] transition-colors text-slate-700 dark:text-white font-medium">
<svg class="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-1.55 1.02-2.53-.15-.35-.45-1.07.03-2.48 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.48 1.41.18 2.13.08 2.48.64.98 1.02 1.42 1.02 2.53 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" fill-rule="evenodd"></path>
</svg>
                            Continue with GitHub
                        </button>
</div>
<div class="relative flex py-2 items-center">
<div class="flex-grow border-t border-slate-200 dark:border-[#3e3c53]"></div>
<span class="flex-shrink-0 mx-4 text-slate-400 text-sm">Or log in with email</span>
<div class="flex-grow border-t border-slate-200 dark:border-[#3e3c53]"></div>
</div>
<!-- Form -->
<form class="flex flex-col gap-5">
<!-- Email Input -->
<label class="flex flex-col gap-2">
<span class="text-slate-900 dark:text-white text-sm font-medium leading-normal">Email Address</span>
<div class="relative">
<span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
<span class="material-symbols-outlined text-[20px]">mail</span>
</span>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-[#3e3c53] bg-white dark:bg-[#1d1c26] focus:border-primary h-12 pl-11 pr-4 placeholder:text-slate-400 dark:placeholder:text-[#a09db8] text-base font-normal leading-normal transition-shadow" placeholder="name@example.com" type="email"/>
</div>
</label>
<!-- Password Input -->
<label class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<span class="text-slate-900 dark:text-white text-sm font-medium leading-normal">Password</span>
<a class="text-sm text-primary hover:text-primary/80 font-medium" href="#">Forgot Password?</a>
</div>
<div class="relative">
<span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
<span class="material-symbols-outlined text-[20px]">lock</span>
</span>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-[#3e3c53] bg-white dark:bg-[#1d1c26] focus:border-primary h-12 pl-11 pr-12 placeholder:text-slate-400 dark:placeholder:text-[#a09db8] text-base font-normal leading-normal transition-shadow" placeholder="••••••••" type="password"/>
<button class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" type="button">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</label>
<!-- Checkbox -->
<div class="flex items-center gap-3 py-1">
<input class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary bg-slate-100 dark:bg-[#1d1c26] dark:border-[#3e3c53] dark:checked:bg-primary" id="remember" type="checkbox"/>
<label class="text-sm text-slate-600 dark:text-slate-400 select-none" for="remember">Remember me for 30 days</label>
</div>
<!-- Submit Buttons -->
<button class="w-full h-12 mt-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(46,25,230,0.3)] hover:shadow-[0_0_25px_rgba(46,25,230,0.5)] flex items-center justify-center gap-2" type="submit">
                            Log In
                            <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</form>
</div>
</div>
<!-- Right Side: Visual/Hero -->
<div class="hidden lg:flex w-1/2 bg-[#121118] relative overflow-hidden items-center justify-center p-8">
<!-- Abstract Background Elements -->
<div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#121118] to-[#121118]"></div>
<!-- Code visual abstract pattern -->
<div class="absolute top-0 right-0 w-full h-full opacity-30" style="background-image: radial-gradient(#2e19e6 1px, transparent 1px); background-size: 32px 32px;"></div>
<div class="relative z-10 w-full max-w-lg">
<!-- Illustrative Card Stack -->
<div class="relative w-full aspect-square max-w-md mx-auto">
<!-- Back Card -->
<div class="absolute top-4 -right-4 w-full h-full bg-[#1d1c26] border border-[#2a2938] rounded-2xl transform rotate-6 opacity-60"></div>
<!-- Middle Card -->
<div class="absolute top-2 -right-2 w-full h-full bg-[#1d1c26] border border-[#2a2938] rounded-2xl transform rotate-3 opacity-80"></div>
<!-- Front Card (Image) -->
<div class="absolute top-0 right-0 w-full h-full bg-[#1d1c26] border border-[#2a2938] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
<div class="h-8 bg-[#2a2938] flex items-center px-4 gap-2 border-b border-[#3e3c53]">
<div class="w-3 h-3 rounded-full bg-red-500/50"></div>
<div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div class="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div class="flex-1 w-full bg-cover bg-center relative" data-alt="Abstract code syntax on dark screen showing programming progress" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWu1Kg08iYOYXnBSyfO8OLASYAwkT5S5bIlQzAvwnccQkJPI9KAdo3uxXOe8z8pzooeJ08rhu5ZbMxQp6plbES9_dxK1ow8oyaNmRvD2PIHlNazBJ1m2wV5a1mhQvTJEvO4RB5tj49koTj6AFiVGU0GwVVnVDkteRSz3hq9uRSiit9DrKFEVleKKwoWiUmCykRVNMkPlqNlk3kYee533JLYbHVMePM2hEqAkC8mQ7-_R7fuw-rw_EgUn2QpPO1mW_1vk1RUI40RaZY");'>
<div class="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
</div>
<div class="p-6 bg-[#1d1c26] border-t border-[#3e3c53]">
<div class="flex items-center gap-3 mb-3">
<div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">emoji_events</span>
</div>
<div>
<h3 class="text-white font-semibold text-sm">Daily Challenge</h3>
<p class="text-xs text-slate-400">Complete logic gates</p>
</div>
</div>
<div class="w-full bg-[#2a2938] rounded-full h-2">
<div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
</div>
<div class="flex justify-between text-xs text-slate-400 mt-2">
<span>Progress</span>
<span>75%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</body></html>