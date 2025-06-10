"use client"

import { Badge } from '@/components/ui/badge'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'
import { motion } from "framer-motion"
 
const Testimonial = () => {
     const testimonials = [
    {
      name: "Michael Johnson",
      role: "Commercial Farmer",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20male%20farmer%20portrait%2C%20mid%2040s%2C%20confident%20smile%2C%20wearing%20modern%20farming%20attire%2C%20natural%20outdoor%20lighting%2C%20high%20quality%20professional%20headshot&width=100&height=100&seq=avatar1&orientation=squarish",
      content: "The NeoTrac X9000 has revolutionized our farming operations. The autonomous features save us countless hours, and the AI crop analysis has improved our yield by 30%."
    },
    {
      name: "Sarah Williams",
      role: "Organic Farm Owner",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20female%20farmer%20portrait%2C%20early%2030s%2C%20warm%20smile%2C%20wearing%20casual%20modern%20farming%20clothes%2C%20natural%20outdoor%20lighting%2C%20high%20quality%20professional%20headshot&width=100&height=100&seq=avatar2&orientation=squarish",
      content: "As an organic farmer, I appreciate the EcoTrac's zero emissions and quiet operation. It's gentle on the soil and powerful enough for all our needs."
    },
    {
      name: "David Chen",
      role: "Agricultural Technologist",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20portrait%2C%20late%2030s%2C%20thoughtful%20expression%2C%20wearing%20smart%20casual%20attire%20with%20tech%20accessories%2C%20indoor%20studio%20lighting%2C%20high%20quality%20professional%20headshot&width=100&height=100&seq=avatar3&orientation=squarish",
      content: "The data integration capabilities of these tractors are impressive. They seamlessly connect with our farm management software, creating a truly smart farming ecosystem."
    }
  ];

  return (
     <section className="py-16 bg-white">
           <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <Badge variant="outline" className="mb-4 px-4 py-1 border-amber-200 text-amber-700 bg-gradient-to-b from-white to-gray-50">
                 Testimonials
               </Badge>
               <motion.h2
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              //amount: "all",//
              once: true,
            }}
            transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</motion.h2>
               <motion.p
                          initial={{
                            opacity: 0,
                            y: 80,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            //amount: "all",//
                            once: true,
                          }}
                          transition={{ duration: 0.5 }} className="text-lg text-gray-600 max-w-3xl mx-auto">
                 Hear from farmers who have transformed their operations with our next-generation tractors.
               </motion.p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {testimonials.map((testimonial, index) => (
                 <Card key={index} className="bg-gradient-to-b from-white to-gray-50 shadow-sm border border-gray-200">
                    <motion.div
                               initial={{
                                 opacity: 0,
                                 y: 80,
                               }}
                               whileInView={{
                                 opacity: 1,
                                 y: 0,
                               }}
                               viewport={{
                                 //amount: "all",//
                                 once: true,
                               }}
                               transition={{ duration: 0.5 }}>
                   <CardHeader>
                     <div className="flex items-center gap-4">
                       <Avatar>
                         <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                         <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                       </Avatar>
                       <div>
                         <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                         <CardDescription>{testimonial.role}</CardDescription>
                       </div>
                     </div>
                   </CardHeader>
                   <CardContent>
                     <p className="text-gray-700">{testimonial.content}</p>
                   </CardContent>
                   <CardFooter className="border-t border-amber-100 pt-4">
                     <div className="flex text-amber-500">
                       <Star />
                       <Star />
                       <Star />
                       <Star />
                       <Star />
                     </div>
                   </CardFooter>
                   </motion.div>
                 </Card>
               ))}
             </div>
           </div>
         </section>
  )
}

export default Testimonial