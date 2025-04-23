import Button from "../components/Button"

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-light mb-6">404</h1>
      <h2 className="text-3xl font-medium mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button to="/" size="lg">
        Return to Home
      </Button>
    </div>
  )
}

export default NotFound
