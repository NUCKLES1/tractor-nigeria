"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import * as echarts from "echarts";
import { Slider } from "@/components/ui/slider";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Buy = () => {
  const [rentalDuration, setRentalDuration] = useState([7]);
  const [activeTab, setActiveTab] = useState("buy");

  const chartRef = useRef<HTMLDivElement>(null);

  const tractors = [
    {
      id: 2,
      name: "EcoTrac E750",
      category: "Medium Duty",
      price: 89000,
      rentalPrice: 950,
      image:
        "https://readdy.ai/api/search-image?query=Medium-sized%20eco-friendly%20tractor%20with%20green%20accents%2C%20modern%20design%2C%20electric%20motor%20visible%2C%20on%20a%20simple%20gradient%20background%2C%20photorealistic%2C%20product%20photography%2C%20clean%20minimal%20background%2C%20high-end%20commercial%20product%20shot&width=600&height=400&seq=tractor2&orientation=landscape",
      description:
        "Eco-friendly electric tractor with extended battery life and zero emissions for longer usage.",
      features: [
        "100% Electric",
        "48hr Battery Life",
        "Quick Charge",
        "Noise Reduction",
        "Digital Dashboard",
      ],
    },
    {
      id: 3,
      name: "AgroTrac A500",
      category: "Light Duty",
      price: 65000,
      rentalPrice: 750,
      image:
        "https://readdy.ai/api/search-image?query=Compact%20modern%20tractor%20with%20futuristic%20design%2C%20lightweight%20frame%2C%20smart%20connectivity%20features%20visible%2C%20on%20a%20simple%20gradient%20background%2C%20photorealistic%2C%20product%20photography%2C%20clean%20minimal%20background%2C%20high-end%20commercial%20product%20shot&width=600&height=400&seq=tractor3&orientation=landscape",
      description:
        "Compact and versatile model ideal for small to medium farms with smart connectivity.",
      features: [
        "IoT Integration",
        "Compact Design",
        "Multi-Tool Support",
        "Weather Adaptation",
        "Farm Data Analytics",
      ],
    },
    {
      id: 4,
      name: "HyperTrac H1000",
      category: "Special",
      price: 150000,
      rentalPrice: 1500,
      image:
        "https://readdy.ai/api/search-image?query=High-performance%20specialized%20tractor%20with%20advanced%20robotics%2C%20articulated%20arms%2C%20specialized%20equipment%20attachments%2C%20on%20a%20simple%20gradient%20background%2C%20photorealistic%2C%20product%20photography%2C%20clean%20minimal%20background%2C%20high-end%20commercial%20product%20shot&width=600&height=400&seq=tractor4&orientation=landscape",
      description:
        "Specialized high-performance model for large-scale industrial farming operations.",
      features: [
        "Robotic Attachments",
        "Terrain Adaptation",
        "Climate Control",
        "Night Vision",
        "Drone Syncing",
      ],
    },
  ];

  // Initialize chart
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        animation: false,
        title: {
          text: "Performance Comparison",
          left: "center",
          textStyle: {
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: [
            "NeoTrac X9000",
            "EcoTrac E750",
            "AgroTrac A500",
            "HyperTrac H1000",
          ],
          bottom: 0,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "15%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: [
            "Efficiency",
            "Power",
            "Eco-Friendly",
            "Smart Features",
            "Durability",
          ],
        },
        yAxis: {
          type: "value",
          max: 100,
        },
        series: [
          {
            name: "NeoTrac X9000",
            type: "bar",
            data: [95, 90, 75, 98, 88],
            color: "#3b82f6",
          },
          {
            name: "EcoTrac E750",
            type: "bar",
            data: [80, 70, 98, 85, 75],
            color: "#10b981",
          },
          {
            name: "AgroTrac A500",
            type: "bar",
            data: [75, 65, 85, 80, 90],
            color: "#f59e0b",
          },
          {
            name: "HyperTrac H1000",
            type: "bar",
            data: [90, 95, 70, 90, 95],
            color: "#8b5cf6",
          },
        ],
      };

      chart.setOption(option);

      const handleResize = () => {
        chart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        chart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <section id="buy" className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="h-1/4">
         <Image src="" width={50} height={50} alt=""/>    
        </div>
      <div className="container mx-auto lg:px-4">
        <div className="text-center mb-12 overflow-hidden">
          <Badge className="mb-4 px-4 py-1 border-blue-200 text-blue-700 bg-blue-50">
            Our Fleet
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
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Explore Our Cutting-Edge Tractors
          </motion.h2>
           <motion.p
            initial={{
              opacity: 0,
              y: 50,
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
            From compact models to heavy-duty powerhouses, find the perfect
            tractor for your agricultural needs.
          </motion.p>

        </div>

        <Tabs
          defaultValue="buy"
          className="w-full"
          onValueChange={setActiveTab}
          value={activeTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger
                value="buy"
                className="!rounded-button whitespace-nowrap"
              >
                Buy
              </TabsTrigger>
              <TabsTrigger
                value="rent"
                className="!rounded-button whitespace-nowrap"
              >
                Rent
              </TabsTrigger>
              <TabsTrigger
                value="compare"
                className="!rounded-button whitespace-nowrap"
              >
                Compare
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="buy" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tractors.map((tractor) => (
                <Card
                  key={tractor.id}
                  className="overflow-hidden transition-all hover:shadow-md border-gray-200"
                >
                  <div className="h-48 -mt-6 overflow-hidden">
                    <img
                      src={tractor.image}
                      alt={tractor.name}
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                          {tractor.category}
                        </Badge>
                        <CardTitle className="text-xl">
                          {tractor.name}
                        </CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-blue-600 !rounded-button whitespace-nowrap"
                      >
                        <Heart />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2 -mt-4">
                    <p className="text-gray-600 text-sm mb-4">
                      {tractor.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tractor.features.slice(0, 3).map((feature, i) => (
                        <Badge key={i} className="bg-gray-50 text-gray-600">
                          {feature}
                        </Badge>
                      ))}
                      {tractor.features.length > 3 && (
                        <Badge className="bg-gray-50 text-gray-600">
                          +{tractor.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-blue-700">
                      ${tractor.price.toLocaleString()}
                    </div>
                  </CardContent>
                  <CardFooter className="flex -mt-4 gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                      <i className="fas fa-shopping-cart mr-2"></i> Buy Now
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="!rounded-button whitespace-nowrap"
                        >
                          <i className="fas fa-eye"></i>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px]">
                        <DialogHeader>
                          <DialogTitle>{tractor.name}</DialogTitle>
                          <DialogDescription>
                            {tractor.category} - Advanced Agricultural
                            Technology
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={tractor.image}
                              alt={tractor.name}
                              className="w-full h-auto"
                            />
                            <div className="flex justify-center mt-4 gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="!rounded-button whitespace-nowrap"
                              >
                                <i className="fas fa-cube mr-2"></i> View 3D
                                Model
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="!rounded-button whitespace-nowrap"
                              >
                                <i className="fas fa-vr-cardboard mr-2"></i> VR
                                Tour
                              </Button>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Specifications
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Engine
                                </h4>
                                <p className="text-sm">
                                  Advanced Hybrid PowerTrain with Electric Boost
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Power Output
                                </h4>
                                <p className="text-sm">
                                  450 HP with 30% Energy Recovery
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Smart Features
                                </h4>
                                <p className="text-sm">
                                  AI Crop Analysis, Autonomous Navigation,
                                  Remote Control
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Connectivity
                                </h4>
                                <p className="text-sm">
                                  5G-enabled Farm Management System Integration
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Warranty
                                </h4>
                                <p className="text-sm">
                                  5-Year Comprehensive with 24/7 Tech Support
                                </p>
                              </div>
                            </div>

                            <div className="mt-6">
                              <h3 className="text-lg font-semibold mb-2">
                                Features
                              </h3>
                              <ul className="grid grid-cols-2 gap-2">
                                {tractor.features.map((feature, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center text-sm"
                                  >
                                    <i className="fas fa-check text-green-500 mr-2"></i>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-6">
                              <div className="text-2xl font-bold text-blue-700 mb-4">
                                ${tractor.price.toLocaleString()}
                              </div>
                              <div className="flex gap-2">
                                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                                  <i className="fas fa-shopping-cart mr-2"></i>{" "}
                                  Buy Now
                                </Button>
                                <Button
                                  variant="outline"
                                  className="flex-1 !rounded-button whitespace-nowrap"
                                >
                                  <i className="fas fa-calendar-alt mr-2"></i>{" "}
                                  Rent
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rent" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tractors.map((tractor) => (
                <Card
                  key={tractor.id}
                  className="overflow-hidden transition-all hover:shadow-md border-gray-200"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={tractor.image}
                      alt={tractor.name}
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200 border-none">
                          {tractor.category}
                        </Badge>
                        <CardTitle className="text-xl">
                          {tractor.name}
                        </CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-green-600 !rounded-button whitespace-nowrap"
                      >
                        <i className="fas fa-heart"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-600 text-sm mb-4">
                      {tractor.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">
                          Rental Duration: {rentalDuration[0]} days
                        </span>
                        <span className="text-sm font-medium">
                          {rentalDuration[0]} days
                        </span>
                      </div>
                      <Slider
                        defaultValue={[7]}
                        max={30}
                        min={1}
                        step={1}
                        value={rentalDuration}
                        onValueChange={setRentalDuration}
                        className="mb-2"
                      />
                    </div>
                    <div className="text-2xl font-bold text-green-700">
                      $
                      {(
                        tractor.rentalPrice * rentalDuration[0]
                      ).toLocaleString()}
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        for {rentalDuration[0]} days
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 !rounded-button whitespace-nowrap">
                      <i className="fas fa-calendar-alt mr-2"></i> Rent Now
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="!rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-eye"></i>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compare" className="mt-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Performance Comparison
                </h3>
                <div
                  ref={chartRef}
                  style={{ width: "100%", height: "400px" }}
                ></div>
              </div>

              <div className="border-t border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4">Feature Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                          Features
                        </th>
                        {tractors.map((tractor) => (
                          <th
                            key={tractor.id}
                            className="px-4 py-3 text-left text-sm font-medium text-gray-500"
                          >
                            {tractor.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                          Price
                        </td>
                        {tractors.map((tractor) => (
                          <td
                            key={tractor.id}
                            className="px-4 py-3 text-sm text-gray-700"
                          >
                            ${tractor.price.toLocaleString()}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                          Daily Rental
                        </td>
                        {tractors.map((tractor) => (
                          <td
                            key={tractor.id}
                            className="px-4 py-3 text-sm text-gray-700"
                          >
                            ${tractor.rentalPrice.toLocaleString()}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                          Category
                        </td>
                        {tractors.map((tractor) => (
                          <td
                            key={tractor.id}
                            className="px-4 py-3 text-sm text-gray-700"
                          >
                            {tractor.category}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                          Features
                        </td>
                        {tractors.map((tractor) => (
                          <td
                            key={tractor.id}
                            className="px-4 py-3 text-sm text-gray-700"
                          >
                            <ul className="space-y-1">
                              {tractor.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <i className="fas fa-check text-green-500 mr-2"></i>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
        <TabsContent value="buy" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tractors.map((tractor) => (
                <Card
                  key={tractor.id}
                  className="overflow-hidden transition-all hover:shadow-md border-gray-200"
                >
                  <div className="h-48 -mt-6 overflow-hidden">
                    <img
                      src={tractor.image}
                      alt={tractor.name}
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                          {tractor.category}
                        </Badge>
                        <CardTitle className="text-xl">
                          {tractor.name}
                        </CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-blue-600 !rounded-button whitespace-nowrap"
                      >
                        <Heart />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2 -mt-4">
                    <p className="text-gray-600 text-sm mb-4">
                      {tractor.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tractor.features.slice(0, 3).map((feature, i) => (
                        <Badge key={i} className="bg-gray-50 text-gray-600">
                          {feature}
                        </Badge>
                      ))}
                      {tractor.features.length > 3 && (
                        <Badge className="bg-gray-50 text-gray-600">
                          +{tractor.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-blue-700">
                      ${tractor.price.toLocaleString()}
                    </div>
                  </CardContent>
                  <CardFooter className="flex -mt-4 gap-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                      <i className="fas fa-shopping-cart mr-2"></i> Buy Now
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="!rounded-button whitespace-nowrap"
                        >
                          <i className="fas fa-eye"></i>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px]">
                        <DialogHeader>
                          <DialogTitle>{tractor.name}</DialogTitle>
                          <DialogDescription>
                            {tractor.category} - Advanced Agricultural
                            Technology
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={tractor.image}
                              alt={tractor.name}
                              className="w-full h-auto"
                            />
                            <div className="flex justify-center mt-4 gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="!rounded-button whitespace-nowrap"
                              >
                                <i className="fas fa-cube mr-2"></i> View 3D
                                Model
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="!rounded-button whitespace-nowrap"
                              >
                                <i className="fas fa-vr-cardboard mr-2"></i> VR
                                Tour
                              </Button>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Specifications
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Engine
                                </h4>
                                <p className="text-sm">
                                  Advanced Hybrid PowerTrain with Electric Boost
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Power Output
                                </h4>
                                <p className="text-sm">
                                  450 HP with 30% Energy Recovery
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Smart Features
                                </h4>
                                <p className="text-sm">
                                  AI Crop Analysis, Autonomous Navigation,
                                  Remote Control
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Connectivity
                                </h4>
                                <p className="text-sm">
                                  5G-enabled Farm Management System Integration
                                </p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-500">
                                  Warranty
                                </h4>
                                <p className="text-sm">
                                  5-Year Comprehensive with 24/7 Tech Support
                                </p>
                              </div>
                            </div>

                            <div className="mt-6">
                              <h3 className="text-lg font-semibold mb-2">
                                Features
                              </h3>
                              <ul className="grid grid-cols-2 gap-2">
                                {tractor.features.map((feature, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center text-sm"
                                  >
                                    <i className="fas fa-check text-green-500 mr-2"></i>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-6">
                              <div className="text-2xl font-bold text-blue-700 mb-4">
                                ${tractor.price.toLocaleString()}
                              </div>
                              <div className="flex gap-2">
                                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                                  <i className="fas fa-shopping-cart mr-2"></i>{" "}
                                  Buy Now
                                </Button>
                                <Button
                                  variant="outline"
                                  className="flex-1 !rounded-button whitespace-nowrap"
                                >
                                  <i className="fas fa-calendar-alt mr-2"></i>{" "}
                                  Rent
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
    </section>
  )
}

export default Buy