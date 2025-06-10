"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Leaf, RectangleGoggles, Tractor } from "lucide-react";
import { motion } from "framer-motion";

const Revolution = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto lg:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionize Your Farming
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our next-generation tractors combine cutting-edge technology with
            sustainable practices to transform agricultural operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              once: true,
            }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm border border-blue-100 transition-all hover:shadow-md "
          >
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6">
              <Tractor />
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Farming</h3>
            <p className="text-gray-600 mb-4">
              Advanced artificial intelligence systems analyze soil conditions,
              crop health, and weather patterns in real-time.
            </p>
            <Button
              variant="link"
              className="text-blue-600 p-0 hover:text-blue-800 !rounded-button whitespace-nowrap"
            >
              Learn more <ArrowRightIcon />
            </Button>
          </motion.div>

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
              once: true,
            }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-sm border border-green-100 transition-all hover:shadow-md"
          >
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-6">
              <Leaf />
            </div>
            <h3 className="text-xl font-bold mb-3">Eco-Sustainable Design</h3>
            <p className="text-gray-600 mb-4">
              Zero-emission electric models and hybrid engines reduce carbon
              footprint while maintaining powerful performance.
            </p>
            <Button
              variant="link"
              className="text-green-600 p-0 hover:text-green-800 !rounded-button whitespace-nowrap"
            >
              Learn more <ArrowRightIcon />
            </Button>
          </motion.div>

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
              once: true,
            }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 shadow-sm border border-purple-100 transition-all hover:shadow-md"
          >
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-6">
              <RectangleGoggles />
            </div>
            <h3 className="text-xl font-bold mb-3">Immersive Experience</h3>
            <p className="text-gray-600 mb-4">
              Virtual reality test drives and augmented reality visualization
              help you experience your tractor before purchase.
            </p>
            <Button
              variant="link"
              className="text-purple-600 p-0 hover:text-purple-800 !rounded-button whitespace-nowrap"
            >
              Learn more <ArrowRightIcon />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Revolution;
