import React from 'react'

const Personal = () => {
  return (
	<section className="px-12 py-8">
		<h1 className=" text-[28px] font-bold">Personal Info</h1>
		<p className="">Please provide your name, email address and phone number</p>
		<form action="" className="">
			<div className="flex flex-col">
				<label htmlFor="name" className="my-2">Name</label>
				<input type="text" id="name" placeholder='e.g Emorinken Samuel'  className='h-10 rounded-lg pl-4 border-[1px]' />
			</div>
			<div className=" flex flex-col">
				<label htmlFor="email" className="my-2">Email Address </label>
				<input type="email" id="email" placeholder='e.g emorinkensam@gmail.com'  className='h-10 rounded-lg pl-4 border-[1px]' />
			</div>
			<div className="flex flex-col">
				<label htmlFor="name" className="my-2">Phone Number</label>
				<input type="tel" id="name"  placeholder='e.g +1 234 567 890' className='h-10 rounded-lg pl-4 border-[1px]' />
			</div>
		</form>
		<div className=" flex justify-end items-center py-4"><button className=" border-[1px] bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">Next Step</button></div>
	</section>
  )
}

export default Personal