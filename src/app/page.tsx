"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import MediaAbout from "@/components/sections/about/MediaAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import PricingCardFive from "@/components/sections/pricing/PricingCardFive";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import {
  Sparkles,
  Crown,
  Home,
  Utensils,
  Dumbbell,
  Wifi,
  CheckCircle,
  Calendar,
  MapPin,
  Hotel,
  Bed,
  Trophy,
  Star,
  Gift,
  Heart,
  Briefcase,
  Users,
  Phone,
} from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLarge"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Luxe Haven"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Offers", id: "offers" },
          ]}
          button={{ text: "Book Now", href: "#booking" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Experience Luxury Hospitality"
          description="Discover your perfect escape at Luxe Haven. Award-winning accommodations, world-class amenities, and personalized service await you."
          tag="Welcome to Luxury"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Book Your Stay", href: "#booking" },
            { text: "Explore Rooms", href: "#rooms" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          dashboard={{
            title: "Your Luxe Haven Experience",            logoIcon: Crown,
            imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-sitting-bed-hotel-stylish-evening-dress-sensual-mood-talking-phone-smiling-flirty-looking-sexy_285396-6176.jpg",            buttons: [
              { text: "Reserve", href: "#booking" },
              { text: "View Gallery", href: "#rooms" },
            ],
            sidebarItems: [
              { icon: Home, active: true },
              { icon: Utensils },
              { icon: Dumbbell },
              { icon: Wifi },
            ],
            stats: [
              {
                title: "Star Rating",                values: [4.8, 4.9, 5.0],
                valueSuffix: "★",                description: "Guest satisfaction"},
              {
                title: "Rooms Available",                values: [45, 52, 48],
                valueSuffix: "",                description: "Premium accommodations"},
              {
                title: "Amenities",                values: [15, 18, 20],
                valueSuffix: "+",                description: "World-class facilities"},
            ],
            chartTitle: "Guest Satisfaction",            chartData: [
              { value: 95 },
              { value: 92 },
              { value: 98 },
              { value: 94 },
              { value: 97 },
            ],
            listTitle: "Recent Bookings",            listItems: [
              { icon: CheckCircle, title: "Deluxe Suite Reserved", status: "Confirmed" },
              { icon: Calendar, title: "Premium Room Booking", status: "Confirmed" },
              { icon: MapPin, title: "Executive Suite Available", status: "Ready" },
            ],
            searchPlaceholder: "Search availability..."}}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Discover Luxe Haven"
          description="Nestled in the heart of the city, Luxe Haven offers an unparalleled blend of modern comfort and timeless elegance. Our hotel has been a destination of choice for discerning travelers seeking exceptional service and stunning accommodations since our opening."
          tag="About Us"
          tagIcon={Hotel}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/young-blonde-lady-outdoors_171337-19434.jpg"
          imageAlt="Luxe Haven Hotel Lobby"
          buttons={[{ text: "Learn More", href: "#amenities" }]}
          useInvertedBackground={false}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Rooms & Accommodations"
          description="Choose from our carefully curated selection of rooms, each designed to provide the ultimate in comfort and luxury."
          tag="Premium Stays"
          tagIcon={Bed}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "deluxe",              name: "Deluxe Room",              price: "$189/night",              imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151118971.jpg",              imageAlt: "Deluxe Room"},
            {
              id: "suite",              name: "Executive Suite",              price: "$349/night",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-comfortable-white-pillow-bed-decoration-bedroom_74190-8672.jpg",              imageAlt: "Executive Suite"},
            {
              id: "standard",              name: "Standard Room",              price: "$129/night",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-hotel-bedroom_74190-3804.jpg",              imageAlt: "Standard Room"},
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardSixteen
          title="Why Choose Luxe Haven"
          description="Experience the difference that exceptional service and premium facilities make."
          tag="Our Strengths"
          tagIcon={Trophy}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Limited amenities",              "Crowded common areas",              "Standard service quality",              "Inconsistent experiences"],
          }}
          positiveCard={{
            items: [
              "20+ world-class amenities",              "Spacious and peaceful venues",              "Award-winning personalized service",              "Consistently exceptional experiences"],
          }}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="Guest Reviews"
          description="Hear from our satisfied guests about their experience at Luxe Haven."
          tag="Guest Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "Travel Journalist",              testimonial: "Luxe Haven exceeded every expectation. The attention to detail, the elegance of the rooms, and the exceptional service made our stay unforgettable. We'll definitely be returning.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598344.jpg",              imageAlt: "Sarah Mitchell"},
            {
              id: "2",              name: "Michael Chen",              role: "Business Executive",              testimonial: "The perfect blend of luxury and convenience. The staff anticipated every need, the facilities are world-class, and the location is ideal for both business and leisure.",              imageSrc: "http://img.b2bpic.net/free-photo/happy-man-filling-hotel-reservation-form-while-registering-reception-desk_637285-7452.jpg",              imageAlt: "Michael Chen"},
            {
              id: "3",              name: "Emily Rodriguez",              role: "Luxury Travel Blogger",              testimonial: "This is what true hospitality looks like. Every moment was carefully curated, from the welcome experience to the farewell. Luxe Haven sets the gold standard.",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-having-coffee-meeting_23-2148817109.jpg",              imageAlt: "Emily Rodriguez"},
            {
              id: "4",              name: "David Thompson",              role: "Corporate CEO",              testimonial: "Outstanding in every way. The elegance, the comfort, the service—it all comes together perfectly. I've already booked my next visit.",              imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-shaking-hands-with-financial-advisor-meeting-office-focus-is-man_637285-2820.jpg",              imageAlt: "David Thompson"},
          ]}
        />
      </div>

      <div id="offers" data-section="offers">
        <PricingCardFive
          title="Special Offers & Packages"
          description="Discover our curated packages designed to enhance your stay and offer exceptional value."
          tag="Limited Time"
          tagIcon={Gift}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "romantic",              tag: "Romantic Getaway",              tagIcon: Heart,
              price: "$549",              period: "/couple/night",              description: "Perfect for couples seeking an intimate escape with premium amenities and private dining.",              button: { text: "Book Romance Package", href: "#booking" },
              featuresTitle: "Package Includes:",              features: [
                "Deluxe suite with city view",                "Complimentary champagne",                "Couples spa treatment",                "Private dinner reservation",                "Late checkout (2 PM)"],
            },
            {
              id: "business",              tag: "Business Excellence",              tagIcon: Briefcase,
              price: "$299",              period: "/night",              description: "Designed for professionals with business centers, high-speed internet, and flexible arrangements.",              button: { text: "Book Business Package", href: "#booking" },
              featuresTitle: "Package Includes:",              features: [
                "Executive suite",                "24-hour business center",                "Premium WiFi access",                "Daily breakfast buffet",                "Airport transfer service"],
            },
            {
              id: "family",              tag: "Family Fun",              tagIcon: Users,
              price: "$399",              period: "/family/night",              description: "Create lasting memories with activities and amenities tailored for families of all sizes.",              button: { text: "Book Family Package", href: "#booking" },
              featuresTitle: "Package Includes:",              features: [
                "Connecting deluxe rooms",                "Kids activities program",                "Family dining credits",                "Pool and recreation access",                "Welcome gift for children"],
            },
          ]}
        />
      </div>

      <div id="booking" data-section="booking">
        <ContactFaq
          ctaTitle="Reserve Your Room"
          ctaDescription="Ready to experience luxury? Contact our reservations team today to secure your ideal room and package."
          ctaButton={{ text: "Make a Reservation", href: "mailto:reservations@luxehaven.com" }}
          ctaIcon={Phone}
          useInvertedBackground={false}
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",              title: "What is your cancellation policy?",              content: "We offer flexible cancellation up to 48 hours before arrival for a full refund. Cancellations made within 48 hours of check-in will be charged one night's stay. Special packages may have different terms."},
            {
              id: "2",              title: "Do you offer airport transfers?",              content: "Yes, we offer complimentary airport transfers for all guests. Please provide your flight details at booking, and our team will arrange a convenient pickup time."},
            {
              id: "3",              title: "Are pets allowed?",              content: "We welcome well-behaved pets for a small additional fee of $50 per night. Please inform us at booking so we can prepare the appropriate accommodations."},
            {
              id: "4",              title: "What dining options are available?",              content: "Our hotel features three award-winning restaurants, a rooftop bar, and in-room dining. Our chefs specialize in international and local cuisine with dietary accommodations available."},
            {
              id: "5",              title: "Do you have conference facilities?",              content: "We offer 5,000 sq. meters of event space with state-of-the-art technology, perfect for conferences, weddings, and private events. Our event team can customize any occasion."},
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Luxe Haven"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
