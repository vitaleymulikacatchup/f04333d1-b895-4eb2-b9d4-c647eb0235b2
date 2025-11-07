"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Star, Globe } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="wavyBackground"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Artisanal Coffee Experience"
          description="Discover the perfect blend of quality, flavor, and craftsmanship in every cup. From bean to brew, we deliver excellence."
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Order Now", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/g160d62cd5ac6f618c121c9350721969367eabc91a7558e12210592ebeb6b31318c030012fb29b6e78105837091ace4a471d7c5fc12c48ce2f3619f383a20ebdb_1280.jpg"
          imageAlt="Modern coffee shop interior"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Brew & Bean, we believe exceptional coffee starts with exceptional beans. We source directly from sustainable farms, roast in small batches, and craft each cup with passion and precision to deliver an unmatched coffee experience."
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardOne
          title="Signature Coffee Selection"
          description="Explore our carefully curated menu of specialty drinks, each crafted with premium ingredients and expert techniques"
          tag="Menu"
          tagIcon={Coffee}
          features={[
            {
              title: "Classic Espresso",
              description: "Rich, bold shot of perfectly extracted espresso with crema",
              imageSrc: "https://pixabay.com/get/gb389b23f12a981b0f3a4aa6ccc8981ed1f93fbde129a398b34bbc6cbe76ab114031792ad2e2a37876fd0cd6d24ce78150a61c82e15ad001343410131e9c13f9c_1280.jpg",
              imageAlt: "Classic espresso shot"
            },
            {
              title: "Signature Latte",
              description: "Smooth espresso blended with steamed milk and artistic foam",
              imageSrc: "https://pixabay.com/get/gd78174e71a9bdd70ee88173cb8b7b0d812bb06c366560decf607a743a4f1c8cbc83d2bde18cf4799ddeead2f680f38ecdf46074ba897be6624607bacc3c09b03_1280.jpg",
              imageAlt: "Latte with foam art"
            },
            {
              title: "Cappuccino Deluxe",
              description: "Traditional cappuccino with perfect milk-to-foam ratio",
              imageSrc: "https://pixabay.com/get/g5f13acbac5f24ab4f189c6b5a364dd323d28ef4e69d80247dc82c65eacefbf84f84199c06bc3282268a1b9e84e4b90d0db307709837e1e5405c6ea6e6b13d096_1280.jpg",
              imageAlt: "Cappuccino with foam"
            },
            {
              title: "House Americano",
              description: "Bold espresso with hot water for a smooth, clean taste",
              imageSrc: "https://pixabay.com/get/ga22e73d766c062c07047e48edab55ab6ea9bf9aab04b58a5b9ef71c5b6a37b121bb1d22447cafdb81857bc21e6fff8892fbe544e6cadd1372fdfb8fa97bf00e3_1280.jpg",
              imageAlt: "Americano black coffee"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Coffee Products"
          description="Our most popular coffee selections loved by customers"
          tag="Best Sellers"
          products={[
            {
              id: "1",
              brand: "Brew & Bean",
              name: "House Blend Espresso",
              price: "$4.50",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://pixabay.com/get/gb389b23f12a981b0f3a4aa6ccc8981ed1f93fbde129a398b34bbc6cbe76ab114031792ad2e2a37876fd0cd6d24ce78150a61c82e15ad001343410131e9c13f9c_1280.jpg",
              imageAlt: "House blend espresso"
            },
            {
              id: "2",
              brand: "Brew & Bean",
              name: "Signature Latte",
              price: "$5.25",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://pixabay.com/get/gd78174e71a9bdd70ee88173cb8b7b0d812bb06c366560decf607a743a4f1c8cbc83d2bde18cf4799ddeead2f680f38ecdf46074ba897be6624607bacc3c09b03_1280.jpg",
              imageAlt: "Signature latte"
            },
            {
              id: "3",
              brand: "Brew & Bean",
              name: "Artisan Cappuccino",
              price: "$4.95",
              rating: 5,
              reviewCount: "980",
              imageSrc: "https://pixabay.com/get/g5f13acbac5f24ab4f189c6b5a364dd323d28ef4e69d80247dc82c65eacefbf84f84199c06bc3282268a1b9e84e4b90d0db307709837e1e5405c6ea6e6b13d096_1280.jpg",
              imageAlt: "Artisan cappuccino"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Coffee Membership Plans"
          description="Choose the perfect plan for your coffee needs and save on every visit"
          plans={[
            {
              id: "casual",
              price: "$15/month",
              name: "Casual Drinker",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "10% off all drinks",
                "Free wifi access",
                "Monthly newsletter",
                "Birthday drink"
              ]
            },
            {
              id: "regular",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$25/month",
              name: "Regular Coffee Lover",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "20% off all drinks",
                "Free pastry weekly",
                "Priority seating",
                "Exclusive events access"
              ]
            },
            {
              id: "premium",
              price: "$40/month",
              name: "Coffee Connoisseur",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "30% off all drinks",
                "Free bag of beans monthly",
                "Cupping sessions",
                "Personal barista consultation"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Coffee Excellence by Numbers"
          description="Our commitment to quality coffee reflects in these achievements"
          tag="Statistics"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "cups served",
              description: "Satisfied customers every month",
              icon: Coffee
            },
            {
              id: "2",
              value: "15+",
              title: "coffee origins",
              description: "Premium beans from around the world",
              icon: Globe
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Expert Team"
          description="Passionate coffee professionals dedicated to crafting your perfect cup"
          members={[
            {
              id: "1",
              name: "Sarah Martinez",
              role: "Head Barista",
              imageSrc: "https://pixabay.com/get/g1c2343e6e958148024fdfe7908b04138e780be6e1dbd4796b033781ef8d32a23aaa97169e0bc63112905e1dc8be6cbe1accdf716bb011a36684a55e3dcf42dc9_1280.jpg",
              imageAlt: "Sarah Martinez head barista"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Coffee Roaster",
              imageSrc: "https://pixabay.com/get/gf82e61cf15b2b8db91745cbf03a7cf3428b6cb02ec636df657a52ddf647a4724db804809cfde3ab4d7053cb75ab0d1897e54a6e197e3a458c391ed9e0a74522a_1280.jpg",
              imageAlt: "James Chen coffee roaster"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real reviews from coffee lovers who choose Brew & Bean"
          testimonials={[
            {
              id: "1",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              testimonial: "The best coffee in town! The attention to detail and quality of beans is exceptional. I start every morning here.",
              imageSrc: "https://pixabay.com/get/gefc9fb37f35eef8775a1aead341545d6771a7b5c7a3155596f916b49bf697e2c88a28680fdfc8df7af66e1a8516b0f974d8819f988b8ea0f54e25fec859a7c57_1280.jpg",
              imageAlt: "Emily Rodriguez customer"
            },
            {
              id: "2",
              name: "Michael Thompson",
              role: "Software Developer",
              testimonial: "Amazing atmosphere and consistently great coffee. The baristas really know their craft and it shows in every cup.",
              imageSrc: "https://pixabay.com/get/g454e2ceab2b9d97e5802f43706881d3135f76cf89ed52337bece362498d7da9cb8df849b47df6feded97cc3caac20a67cf748c7a9d6985b356b06e5747ba6240_1280.jpg",
              imageAlt: "Michael Thompson customer"
            },
            {
              id: "3",
              name: "Lisa Park",
              role: "Business Owner",
              testimonial: "Brew & Bean has become my daily ritual. The quality is unmatched and the staff makes you feel like family.",
              imageSrc: "https://pixabay.com/get/g4711bb56dc74626b9151b45183bdee930ef176a616f3495f31793faaf9058a6d40d84fa6c66a97c3f6b2a773b0234d9d4278dc1bb4efab89350d16509d145631_1280.jpg",
              imageAlt: "Lisa Park customer"
            },
            {
              id: "4",
              name: "David Wilson",
              role: "Creative Director",
              testimonial: "Perfect place for meetings and creative work. Great coffee, comfortable seating, and excellent service every time.",
              imageSrc: "https://pixabay.com/get/g9606ce12871b960bdff2b84e32aec1850ed17053de6ba141ae18cf51bfd3cec3e02b025f520823f62216284917ec21c9f14e7048c4370d4b6ba965a2deb2cb74_1280.jpg",
              imageAlt: "David Wilson customer"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Certified Excellence"
          description="Trusted certifications that guarantee our commitment to quality and sustainability"
          logos={[
            "https://pixabay.com/get/gf6ac40299aa1c5707876b02f845dc127bd421e0c3e5906779dea525ccbfbed3c092541ed6db80dfb701e95e6d7bdb0b0465df532d9da7c157f428d94c681541c_1280.jpg",
            "https://pixabay.com/get/ga2cbd20fd6d7864df63e881fc09fdd8bb7531c1a78aa09bbb370dcf269fb40d5e0e931809da486129cdf81bfc4bd2f039313d6cfabef709bce126bd9e0140d7c_1280.jpg",
            "https://pixabay.com/get/ga417281ed3f872d41859ea5f05eb8e930914ff7a0403d3b6155ab013e081ad6c53b1479c3d739fca6c6e86594e504e0dcc7cde3dd88239671ab4ad7b93a4b13e_1280.png",
            "https://pixabay.com/get/g41ae011767802fd856b4cab8ba568969b44fd7026dbaebeae9aaaf99ee33ae40a77b1cd5a93e21101347dbaaff53887851f06aa6cfd8b5d13704f702772147e2_1280.png",
            "https://pixabay.com/get/gb53ad01634b15b203555ca8fb78743743fd90f92456e22c6b1d5517454af19e7d4ab65a635eade4fc04a8ad85f3f1e6c2881e3a278625f6cb696565accf8b689_1280.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee, services, and memberships"
          faqs={[
            {
              id: "1",
              title: "What makes your coffee special?",
              content: "We source premium beans directly from sustainable farms, roast in small batches daily, and our expert baristas craft each cup with precision and care."
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Yes! We offer oat milk, almond milk, soy milk, and coconut milk alternatives for all our drinks at no extra charge."
            },
            {
              id: "3",
              title: "How does the membership program work?",
              content: "Choose from three tiers with increasing benefits including discounts, free items, and exclusive access to events. Cancel anytime."
            },
            {
              id: "4",
              title: "Can I order online for pickup?",
              content: "Absolutely! Use our contact form or call ahead to place your order and we'll have it ready for pickup at your preferred time."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Coffee Insights & Tips"
          description="Learn about coffee brewing, bean origins, and industry trends from our experts"
          blogs={[
            {
              id: "1",
              category: "Brewing Guide",
              title: "Perfect Espresso Extraction",
              excerpt: "Master the art of pulling the perfect espresso shot with our expert tips and techniques",
              imageSrc: "https://pixabay.com/get/g255bf4ddd66bc925e551a14e4b1823cf5f315b753200a68652461479ae289b8498d86ebf48c16c052250b5156c4e31d92dee46ba774db8d0fc4a88d8eeeb416d_1280.jpg",
              authorName: "Sarah Martinez",
              authorAvatar: "https://pixabay.com/get/g1c2343e6e958148024fdfe7908b04138e780be6e1dbd4796b033781ef8d32a23aaa97169e0bc63112905e1dc8be6cbe1accdf716bb011a36684a55e3dcf42dc9_1280.jpg",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Coffee Culture",
              title: "The Art of Latte Foam",
              excerpt: "Discover the techniques behind creating beautiful latte art and perfect milk texture",
              imageSrc: "https://pixabay.com/get/gd78174e71a9bdd70ee88173cb8b7b0d812bb06c366560decf607a743a4f1c8cbc83d2bde18cf4799ddeead2f680f38ecdf46074ba897be6624607bacc3c09b03_1280.jpg",
              authorName: "James Chen",
              authorAvatar: "https://pixabay.com/get/gf82e61cf15b2b8db91745cbf03a7cf3428b6cb02ec636df657a52ddf647a4724db804809cfde3ab4d7053cb75ab0d1897e54a6e197e3a458c391ed9e0a74522a_1280.jpg",
              date: "12 Dec 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Order Your Perfect Cup"
          description="Ready to experience exceptional coffee? Place your order or get in touch with us today."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "order",
            placeholder: "Tell us about your coffee preferences or special requests...",
            rows: 4,
            required: true
          }}
          buttonText="Submit Order"
          imageSrc="https://pixabay.com/get/ged378154776d244df5bc50d032c3690c618b928bc377fd82e8ff20e6b34e8d8ae4ebe2006f82f02bafa1cc8ac2f0d645ebabf5bff0ccadd4a9eac3e915270c64_1280.jpg"
          imageAlt="Premium coffee beans"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew & Bean"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Coffee Origins", href: "menu" }
              ]
            },
            {
              items: [
                { label: "Coffee Menu", href: "menu" },
                { label: "Pricing Plans", href: "pricing" },
                { label: "Order Online", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}