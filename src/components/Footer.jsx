import React from "react";

function Footer() {
  return (
    <footer className="text-center text-white bg-black border-t border-gray-700 py-4 mt-32 w-3/4 m-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">Meta</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Blog</a>
          <a href="#" className="hover:text-gray-300">Jobs</a>
          <a href="#" className="hover:text-gray-300">Help</a>
          <a href="#" className="hover:text-gray-300">API</a>
          <a href="#" className="hover:text-gray-300">Privacy</a>
          <a href="#" className="hover:text-gray-300">Terms</a>
          <a href="#" className="hover:text-gray-300">Locations</a>
          <a href="#" className="hover:text-gray-300">Instagram Lite</a>
          <a href="#" className="hover:text-gray-300">Threads</a>
          <a href="#" className="hover:text-gray-300">Contact Uploading & Non-Users</a>
          <a href="#" className="hover:text-gray-300">Meta Verified</a>
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="hover:text-gray-300">English</a>
          <span className="mx-2">▼</span>
          <span>© 2024 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
