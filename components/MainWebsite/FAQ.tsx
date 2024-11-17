import React from "react";
import { faq } from "@/lib/data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Title from "./ReusableComponents/Title";

export default function AccordionDemo() {
    return (
        <div className="h-full py-12">
            <Title badge="FAQ" heading="Question? Look Here" />
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
                <div>
                    {faq.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={`item-${item.id}`}
                            className="bg-[#244927] text-gray-400 rounded-2xl mb-4"
                        >
                            <AccordionTrigger className="flex justify-between items-center text-white text-lg py-4 px-8">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent
                                className="py-4 px-8 text-lg max-h-40  bg-yellow-500 text-black rounded-b-2xl"
                            >
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </div>
            </Accordion>
        </div>
    );
}