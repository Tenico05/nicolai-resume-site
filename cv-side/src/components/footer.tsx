export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-gray-800 text-white py-4 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            © {currentYear} Nicolai Medbø.
          </p>
        </div>
      </footer>
    )
  }