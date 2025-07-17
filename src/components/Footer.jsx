import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-violet-700 text-white text-center py-8">
      <p className="text-sm">
        © {new Date().getFullYear()} MediCraft. All rights reserved.
      </p>
    </footer>

    </>
  )
}

export default Footer