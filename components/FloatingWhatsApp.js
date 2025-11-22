export default function FloatingWhatsApp() {
  const whatsappNumber = '917094824932'; // WhatsApp number with country code
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 animate-bounce"
      title="Chat with us on WhatsApp"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110 transform">
        <svg
          className="w-9 h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.12.55 4.15 1.6 5.93L0 24l6.37-1.65A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.18-3.48-8.52zM12 21.5c-1.7 0-3.36-.45-4.8-1.3l-.34-.2-3.78.98.99-3.68-.21-.36A9.5 9.5 0 1 1 21.5 12 9.47 9.47 0 0 1 12 21.5z" />
          <path fill="#fff" d="M17.06 14.29c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.04-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.02-.37-.02-.57-.02s-.52.08-.79.37c-.27.29-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.5 1.69.64.71.24 1.36.21 1.87.13.57-.09 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.38-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </div>
    </a>
  );
}
