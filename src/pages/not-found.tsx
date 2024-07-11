import { Link } from "react-router-dom"
export function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">404 - Page non trouvee</h1>
        <p className="mt-4 text-muted-foreground">
          La page que vous cherchez n'existe pas
        </p>
        <div className="mt-6">
          <Link
            to="/home"
            className="inline-flex items-center rounded-md bg-PrimaryColor px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-PrimaryColor/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
           
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
