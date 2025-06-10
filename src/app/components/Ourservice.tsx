import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  CreditCard,
  Headset,
  LibraryBig,
  MessageCircle,
  MessageCircleMore,
  Paperclip,
  Phone,
  Search,
  Video,
} from "lucide-react";

const Ourservice = () => {
  return (
    <section id="support" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 border-teal-200 text-teal-700 bg-teal-50"
          >
            Support
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We are Here To Help
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated support team is available around the clock to assist
            with any questions or issues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-teal-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mb-4">
                <MessageCircle />
              </div>
              <CardTitle>Live Chat Support</CardTitle>
              <CardDescription>
                Connect with our support team instantly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our AI-assisted chat support is available 24/7 to answer your
                questions and resolve issues quickly.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src="https://c.stocksy.com/a/yEz100/z9/473740.jpg" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="bg-white rounded-lg p-2 text-sm text-gray-700 shadow-sm border border-gray-100">
                    Hello! How can I help you with your tractor today?
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 !rounded-button whitespace-nowrap">
                <MessageCircleMore />
                Start Chat
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-teal-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mb-4">
                <LibraryBig />
              </div>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>
                Comprehensive guides and tutorials
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[240px]">
              <ScrollArea className="h-full pr-4">
                <div className="space-y-4">
                  <div className="group cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                      Getting Started with Your New Tractor
                    </h4>
                    <p className="text-xs text-gray-500">
                      Setup guide and initial configuration
                    </p>
                  </div>
                  <Separator />
                  <div className="group cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                      Maintenance Schedule and Best Practices
                    </h4>
                    <p className="text-xs text-gray-500">
                      Keep your tractor in optimal condition
                    </p>
                  </div>
                  <Separator />
                  <div className="group cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                      Troubleshooting Common Issues
                    </h4>
                    <p className="text-xs text-gray-500">
                      Quick fixes for frequent problems
                    </p>
                  </div>
                  <Separator />
                  <div className="group cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                      Software Updates and Features
                    </h4>
                    <p className="text-xs text-gray-500">
                      How to update and use new features
                    </p>
                  </div>
                  <Separator />
                  <div className="group cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                      Attachment Compatibility Guide
                    </h4>
                    <p className="text-xs text-gray-500">
                      Find the right tools for your tractor
                    </p>
                  </div>
                  <Separator />
                  <div className="group cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-700 transition-colors">
                      Advanced AI Features Tutorial
                    </h4>
                    <p className="text-xs text-gray-500">
                      Maximize your tractors smart capabilities
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 !rounded-button whitespace-nowrap"
              >
                <Search /> Browse All Articles
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-teal-100">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mb-4">
                <Phone />
              </div>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Reach our support team directly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
                    <Headset />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Technical Support</h4>
                    <p className="text-xs text-gray-500">
                      24/7 assistance for technical issues
                    </p>
                    <p className="text-sm font-medium text-teal-700">
                      +1 (800) 555-0123
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
                    <CreditCard />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Billing Inquiries</h4>
                    <p className="text-xs text-gray-500">
                      Mon-Fri, 9am-5pm EST
                    </p>
                    <p className="text-sm font-medium text-teal-700">
                      +1 (800) 555-0124
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
                    <Paperclip />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Email Support</h4>
                    <p className="text-xs text-gray-500">
                      Response within 24 hours
                    </p>
                    <p className="text-sm font-medium text-teal-700">
                      support@futuretrac.com
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 !rounded-button whitespace-nowrap">
                <Video /> Schedule Video Call
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Ourservice;
