// Purpose: Contains data for the website, such as products, faq, and blog posts.

// FAQ data
export const faq: { id: number; question: string; answer: string }[] = [
    {
        id: 1,
        question: "What materials are used in your chunky blankets?",
        answer:
            "Our chunky blankets are made from 100% high-quality chenille yarn, which is soft, durable, and hypoallergenic.",
    },
    {
        id: 2,
        question: "How do I care for my chunky blanket?",
        answer:
            "To maintain the quality of your chunky blanket, hand wash it with cold water and mild detergent. Lay flat to dry and avoid wringing or tumble drying.",
    },
    {
        id: 3,
        question: "Do you offer custom sizes or colors for your chunky blankets?",
        answer:
            "Yes, we offer custom sizes and colors! Contact our support team for personalized orders or to inquire about available options.",
    },
    {
        id: 4,
        question: "What is the estimated shipping time?",
        answer:
            "Shipping typically takes 5-7 business days within the United States. International shipping times may vary depending on your location.",
    },
    {
        id: 5,
        question: "Do you accept returns or exchanges?",
        answer:
            "Yes, we accept returns or exchanges within 30 days of purchase, provided the item is unused and in its original condition. Please check our return policy for details.",
    },
    {
        id: 6,
        question: "Are your chunky blankets suitable for all seasons?",
        answer:
            "Yes, our chunky blankets are versatile and provide warmth in winter while remaining breathable enough for cooler summer nights.",
    },
    {
        id: 7,
        question: "Can I purchase a chunky blanket as a gift?",
        answer:
            "Absolutely! Our chunky blankets make great gifts. You can include a gift message at checkout, and we’ll make sure it’s wrapped beautifully.",
    },
    {
        id: 8,
        question: "Do you offer free shipping?",
        answer:
            "Yes, we offer free standard shipping on orders over $100 within the United States.",
    },
    {
        id: 9,
        question: "What if my blanket arrives damaged or defective?",
        answer:
            "If your blanket arrives damaged or defective, please contact our customer support within 7 days of receiving your order for a replacement or refund.",
    },
    {
        id: 10,
        question: "Do you have a bulk order discount for events or businesses?",
        answer:
            "Yes, we offer bulk order discounts for events or businesses. Contact our team for more details on pricing and customization.",
    },
];


// Shopping Benefits data
import customerServiceIcon from "@/assets/ShoppingBenefits/customer-service.svg";
import flexiblePayment from "@/assets/ShoppingBenefits/flexible-payment.svg";
import freeShipping from "@/assets/ShoppingBenefits/free-shipping.svg";


export const shoppingBenefits = [
    {
        id: 1,
        icon: freeShipping,
        title: "Free Shipping",
        description: "Free standard shipping on orders over $100.",
    },

    {
        id: 2,
        icon: flexiblePayment,
        title: "Flexible Payment",
        description: "Multiple payment options like credit card and PayPal.",
    },
    {
        id: 3,
        icon: customerServiceIcon,
        title: "24/7 Support",
        description: "24/7 customer support for your convenience.",
    },
];



// Deal Of Day data

import deal1 from "@/assets/DealOfDay/deal1.png";
import deal2 from "@/assets/DealOfDay/deal2.png";


export const dealOfDay = [
    {
        id: 1,
        image: deal1,
        tagline: "Deal of the Day",
        title: "Chunky Knit Blanket",
        description: "Stay cozy with our chunky knit blanket, now 20% off!",
        link: "/products/1",
        price: 99.99,
        discount: 20,
    },
    {
        id: 2,
        image: deal2,
        tagline: "Hot Deal",
        title: "Luxury Throw Pillow",
        description: "Add a touch of elegance with our luxury throw pillow, now 30% off!",
        link: "/products/2",
        price: 49.99,
        discount: 30,
    },
];



// Product Collections data
import product1 from "@/assets/ProductCollections/product1.png";
import product2 from "@/assets/ProductCollections/product2.png";
import product3 from "@/assets/ProductCollections/product3.png";
import product4 from "@/assets/ProductCollections/product4.png";


export const productCollections = [
    {
        id: 1,
        image: product1,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Chiefs Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/1",
        flash_timer: "5days",
    },
    {
        id: 2,
        image: product2,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Jaguars Short Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/2",
    },
    {
        id: 3,
        image: product3,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Vikings Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/3",
        flash_timer: "2days",
    },
    {
        id: 4,
        image: product4,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Chiefs Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/4",
    },
    {
        id: 5,
        image: product1,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Chiefs Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/1",
        flash_timer: "5days",
    },
    {
        id: 6,
        image: product2,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Jaguars Short Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/2",
    },
    {
        id: 7,
        image: product3,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Vikings Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/3",
        flash_timer: "2days",
    },
    {
        id: 8,
        image: product4,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Chiefs Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/4",
    },
    {
        id: 9,
        image: product1,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Chiefs Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/1",
        flash_timer: "5days",
    },
    {
        id: 10,
        image: product2,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Jaguars Short Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/2",
    },
    {
        id: 11,
        image: product3,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Vikings Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/3",
        flash_timer: "2days",
    },
    {
        id: 12,
        image: product4,
        discount_badge: 20,
        category: "Chunky Blankets",
        title: "Chiefs Medium Throw Blanket",
        price: 129.99,
        discount_price: 99.99,
        link: "/products/4",
    },
];