"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useState } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { format } from "date-fns";

const Service = () => {
      {/*const [date, setDate] = useState<Date | undefined>(new Date());*/}

  return (
      <section id="service" className="py-16 bg-gradient-to-b from-white to-gray-50">
           <div className="container mx-auto">
             <div className="text-center px-2 mb-12">
               <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-200 text-purple-700 bg-purple-50">
                 Services
               </Badge>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Tractor Service & Repairs</h2>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                 Keep your equipment running at peak performance with our professional maintenance and repair services.
               </p>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div>
                 <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                   <div className="p-6">
                     <h3 className="text-xl font-bold mb-4">Service Appointment</h3>
                     <div className="space-y-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">
                           Select Service Type
                         </label>
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                           <div className="flex items-center">
                             <input type="radio" id="maintenance" name="service-type" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
                             <label htmlFor="maintenance" className="ml-2 block text-sm text-gray-700">
                               Maintenance
                             </label>
                           </div>
                           <div className="flex items-center">
                             <input type="radio" id="repair" name="service-type" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                             <label htmlFor="repair" className="ml-2 block text-sm text-gray-700">
                               Repair
                             </label>
                           </div>
                           <div className="flex items-center">
                             <input type="radio" id="inspection" name="service-type" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                             <label htmlFor="inspection" className="ml-2 block text-sm text-gray-700">
                               Inspection
                             </label>
                           </div>
                         </div>
                       </div>
                       
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">
                           Select Your Tractor Model
                         </label>
                         <div className="relative">
                           <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                             <option>NeoTrac X9000</option>
                             <option>EcoTrac E750</option>
                             <option>AgroTrac A500</option>
                             <option>HyperTrac H1000</option>
                             <option>Other Model</option>
                           </select>
                         </div>
                       </div>
                       
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">
                           Select Date
                         </label>
                         <Popover>
                           <PopoverTrigger asChild>
                             <Button
                               variant="outline"
                               className="w-full justify-start text-left font-normal !rounded-button whitespace-nowrap"
                             >
                               <CalendarIcon className="mr-2 h-4 w-4" />
                               {/*date ? format(date, "PPP") : <span>Pick a date</span>*/}
                             </Button>
                           </PopoverTrigger>
                           <PopoverContent className="w-auto p-0">
                              {/* <Calendar
                              mode="single"
                               selected={date}
                               onSelect={setDate}
                               initialFocus
                             />*/}
                           </PopoverContent>
                         </Popover>
                       </div>
                       
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">
                           Describe the Issue (Optional)
                         </label>
                         <textarea
                           rows={3}
                           className="block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                           placeholder="Please describe any specific issues or service needs..."
                         ></textarea>
                       </div>
                     </div>
                     
                     <div className="mt-6">
                       <Button className="w-full bg-purple-600 hover:bg-purple-700 !rounded-button whitespace-nowrap">
                         <i className="fas fa-calendar-check mr-2"></i> Schedule Appointment
                       </Button>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div>
                 <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-full">
                   <div className="p-6">
                     <h3 className="text-xl font-bold mb-4">Service Benefits</h3>
                     
                     <Accordion type="single" collapsible className="w-full">
                       <AccordionItem value="item-1">
                         <AccordionTrigger>Certified Technicians</AccordionTrigger>
                         <AccordionContent>
                           Our factory-trained technicians are certified experts on all tractor models, ensuring your equipment receives the highest quality service with manufacturer-approved parts and procedures.
                         </AccordionContent>
                       </AccordionItem>
                       <AccordionItem value="item-2">
                         <AccordionTrigger>Comprehensive Diagnostics</AccordionTrigger>
                         <AccordionContent>
                           Advanced diagnostic tools identify issues with pinpoint accuracy, allowing us to resolve problems efficiently and prevent future failures through predictive maintenance.
                         </AccordionContent>
                       </AccordionItem>
                       <AccordionItem value="item-3">
                         <AccordionTrigger>Mobile Service Options</AccordionTrigger>
                         <AccordionContent>
                           Can't bring your tractor to us? Our mobile service units come to your location, equipped with all necessary tools and parts to perform repairs and maintenance on-site.
                         </AccordionContent>
                       </AccordionItem>
                       <AccordionItem value="item-4">
                         <AccordionTrigger>Digital Service Records</AccordionTrigger>
                         <AccordionContent>
                           All maintenance and repairs are documented in our digital system, giving you access to complete service history, maintenance schedules, and warranty information through our mobile app.
                         </AccordionContent>
                       </AccordionItem>
                     </Accordion>
                     
                     <div className="mt-8 bg-purple-50 rounded-xl p-4 border border-purple-100">
                       <h4 className="font-medium text-purple-800 mb-2">Emergency Repairs</h4>
                       <p className="text-sm text-purple-700 mb-4">
                         Unexpected breakdown? Our emergency service team is available 24/7 to get you back up and running with minimal downtime.
                       </p>
                       <Button variant="outline" className="bg-white text-purple-700 border-purple-200 hover:bg-purple-50 hover:text-purple-800 hover:border-purple-300 !rounded-button whitespace-nowrap">
                         <i className="fas fa-phone-alt mr-2"></i> Emergency Service Hotline
                       </Button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
  )
}

export default Service