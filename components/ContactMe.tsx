import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:madivallarino@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message}`
  }
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact Me
        </h3>

        <div className=" flex flex-col space-y-5">
            <h4 className="text-4xl font-semibold text-center">
                I have got just what you need. {" "}
                <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
            </h4>
            <div className="space-y-10">
                <div className="flex items-center justify-center space-x-5">
                  <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                  <p className="text-2xl">+615.310.8866</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                  <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                  <p className="text-2xl">madivallarino@gmail.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                  <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                  <p className="text-2xl">New York, New York</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} 
                    className="contactInput" 
                    placeholder="Name"
                    type="text"/>
                    <input 
                    {...register("email")} 
                    className="contactInput" 
                    placeholder="Email"
                    type="email"/>
                </div>
                <input 
                {...register('subject')} 
                className="contactInput" 
                placeholder="Subject" 
                type="text"/>
                <textarea placeholder="Message"
                className="contactInput"
                {...register('message')}/>
                <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe