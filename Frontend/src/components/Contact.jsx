import React from 'react'

export default function Contact() {
  return (
    <>
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="modal2" className="modal">
  <div className="modal-box sm:max-w-sm md:max-w-md lg:max-w-lg">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">
      We are here to help you with any questions or concerns you may have. Please feel free to reach out to us using the contact form below, and we will get back to you as soon as possible.

    </p>
    <form className='flex flex-col gap-4'>
      <input type="text" placeholder="Your Name" className="input focus:outline-none input-bordered w-full max-w-s" />
      <input type="email" placeholder="Your Email" className="input focus:outline-none input-bordered w-full max-w-s" />
      <textarea className="textarea focus:outline-none textarea-bordered h-20 w-280" placeholder="Your Message"></textarea>
      <button className='btn btn-primary'>Send</button>
    </form>
  </div>
</dialog>
    </div>
    </>
  )
}
