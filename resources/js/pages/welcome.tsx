// resources/js/Pages/Welcome.jsx
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Accueil" />
            <main className="flex min-h-screen flex-col items-center justify-center p-6">
                <h1 className="text-3xl font-bold">Mon Projet</h1>

                <nav className="mt-4 space-x-4">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="underline">
                            Tableau de bord
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="underline">
                                Connexion
                            </Link>
                            <Link href={route('register')} className="underline">
                                Inscription
                            </Link>
                        </>
                    )}
                </nav>
            </main>
        </>
    );
}
