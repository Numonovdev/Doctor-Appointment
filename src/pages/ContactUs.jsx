import React from "react";
import imgmain from "../images/contactimg.png";
function ContactUs() {
  return (
    <div className="w-full flex flex-col mt-3">
      <img src={imgmain} className="w-full" alt="" />
      <div className="container flex flex-col items-center py-10 gap-10 text-[#282938]">
        <p className="text-base md:text-xl font-bold">Get In Touch</p>
        <h1 className="font-bold text-5xl md:text-6xl">Contact Us</h1>
        <p className="text-base md:text-xl font-bold text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> 

{/* form qismi */}

        <form class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div class="flex flex-col">
            <label for="first-name" class="text-sm mb-1">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name"
              class="border border-BlueTeal bg-transparent p-2 rounded-md focus:outline-none focus:ring focus:ring-BlueTeal"
            />
          </div>

          <div class="flex flex-col">
            <label for="last-name" class="text-sm  mb-1">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name"
              class="border border-BlueTeal bg-transparent p-2 rounded-md focus:outline-none focus:ring focus:ring-BlueTeal"
            />
          </div>

          <div class="flex flex-col">
            <label for="email" class="text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              class="border border-BlueTeal bg-transparent p-2 rounded-md focus:outline-none focus:ring focus:ring-BlueTeal"
            />
          </div>

          <div class="flex flex-col">
            <label for="phone" class="text-sm mb-1">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              class="border border-BlueTeal bg-transparent p-2 rounded-md focus:outline-none focus:ring focus:ring-BlueTeal"
            />
          </div>

          <div class="flex flex-col md:col-span-2">
            <label for="topic" class="text-sm mb-1">
              Choose a topic
            </label>
            <select
              id="topic"
              class="border border-BlueTeal bg-transparent p-2 rounded-md focus:outline-none focus:ring focus:ring-BlueTeal"
            >
              <option value="" disabled selected>
                Select one...
              </option>
              <option value="topic1">Topic 1</option>
              <option value="topic2">Topic 2</option>
              <option value="topic3">Topic 3</option>
            </select>
          </div>

          <div class="flex flex-col md:col-span-2">
            <label for="message" class="text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message..."
              class="border border-BlueTeal bg-transparent p-2 rounded-md focus:outline-none focus:ring focus:ring-BlueTeal"
            ></textarea>
          </div>

          <div class="flex items-center md:col-span-2">
            <input
              type="checkbox"
              id="terms"
              class="mr-2 border-BlueTeal text-BlueTeal focus:ring focus:ring-BlueTeal"
            />
            <label for="terms" class="text-sm ">
              I accept the terms
            </label>
          </div>

          <div class=" mx-auto w-1/3 md:col-span-2">
            <button
              type="submit"
              class="w-full bg-BlueTeal text-white py-2 px-4 rounded-md hover:bg-BlueTeal transition"
            >
              Submit
            </button>
          </div>
        </form>

{/* email  subc */}
<div className="w-full px-2 flex flex-col items-center gap-5 my-10 ">
    <h1 className="text-base md:text-2xl lg:text-[28px] font-bold">Subscribe to our newsletter</h1>
     <div className="flex flex-col md:flex-row  gap-5 items-center justify-center">
        <input type="text"  placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-full text-sm md:text-xl
              border border-BlueTeal bg-transparent p-2 focus:outline-none focus:ring focus:ring-BlueTeal"
        />
        <button className="bg-BlueTeal flex- items-center text-white font-semibold text-sm md:text-xl px-4 py-2 rounded-full"> Suscribe</button>
     </div>

</div>



      </div>
    </div>
  );
}

export default ContactUs;
