// scripts/seed.js
require('dotenv').config({ path: '.env.local' });

(async () => {
  try {
    const mongoose = require('mongoose');
    const connectDB = require('../lib/db').default;
    const Product = require('../models/Product').default;
    const User = require('../models/User').default;
    const BlogPost = require('../models/BlogPost').default;
    const bcrypt = require('bcryptjs');
    await connectDB();
    console.log('Connected to DB');
    
    // Seed products
    const products = [
      { 
        title: 'DARK PINK And GREEN BUTTIS SILK SAREE',
        slug: 'dark-pink-green-buttis-silk-saree',
        description: 'Elegant silk saree with traditional buttis pattern, featuring a stunning combination of dark pink body and green border with intricate zari work',
        price: 6800,
        originalPrice: 8000,
        discount: 40,
        stock: 10,
        images: ['/images/sarees/dark-pink-green-silk.jpg'],
        categories: ['Silk', 'Traditional', 'Wedding'],
        attributes: {
          material: 'Pure Silk',
          color: 'Dark Pink and Green',
          blousePiece: 'Included',
          borderType: 'Zari',
          pattern: 'Buttis',
          length: '6.3 meters'
        }
      },
      {
        title: 'NAVY BLUE And RED BUTTIS SILK SAREE',
        slug: 'navy-blue-red-buttis-silk-saree',
        description: 'Traditional silk saree featuring a rich navy blue body adorned with buttis and a striking red border with zari work',
        price: 3400,
        originalPrice: 6800,
        discount: 50,
        stock: 8,
        images: ['/images/sarees/navy-blue-red-silk.jpg'],
        categories: ['Silk', 'Traditional', 'Wedding'],
        attributes: {
          material: 'Pure Silk',
          color: 'Navy Blue and Red',
          blousePiece: 'Included',
          borderType: 'Zari',
          pattern: 'Buttis',
          length: '6.3 meters'
        }
      },
      {
        title: 'DARK ORANGE And DARK PINK BUTTIS SILK SAREE',
        slug: 'dark-orange-pink-buttis-silk-saree',
        description: 'Vibrant silk saree with dark orange body and dark pink border, featuring elegant buttis pattern and zari work',
        price: 4080,
        originalPrice: 6800,
        discount: 40,
        stock: 15,
        images: ['/images/sarees/dark-orange-pink-silk.jpg'],
        categories: ['Silk', 'Traditional', 'Festival'],
        attributes: {
          material: 'Pure Silk',
          color: 'Dark Orange and Dark Pink',
          blousePiece: 'Included',
          borderType: 'Zari',
          pattern: 'Buttis',
          length: '6.3 meters'
        }
      },
      {
        title: 'LIME GREEN And VIOLET BUTTIS SILK SAREE',
        slug: 'lime-green-violet-buttis-silk-saree',
        description: 'Refreshing lime green silk saree with violet border, enhanced with traditional buttis pattern and zari work',
        price: 3400,
        originalPrice: 6800,
        discount: 50,
        stock: 12,
        images: ['/images/sarees/lime-green-violet-silk.jpg'],
        categories: ['Silk', 'Traditional', 'Festival'],
        attributes: {
          material: 'Pure Silk',
          color: 'Lime Green and Violet',
          blousePiece: 'Included',
          borderType: 'Zari',
          pattern: 'Buttis',
          length: '6.3 meters'
        }
      },
      {
        title: 'VIOLET And DARK PINK BUTTIS SILK SAREE',
        slug: 'violet-pink-buttis-silk-saree',
        description: 'Elegant violet silk saree with dark pink border, featuring traditional buttis pattern and intricate zari work',
        price: 3400,
        originalPrice: 6800,
        discount: 50,
        stock: 10,
        images: ['/images/sarees/violet-pink-silk.jpg'],
        categories: ['Silk', 'Traditional', 'Wedding'],
        attributes: {
          material: 'Pure Silk',
          color: 'Violet and Dark Pink',
          blousePiece: 'Included',
          borderType: 'Zari',
          pattern: 'Buttis',
          length: '6.3 meters'
        }
      }
    ];
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Seeded products');
    const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'password123';
    // Create admin user if not exists
    let adminUser = await User.findOne({ email: adminEmail });
    if (!adminUser) {
      const passwordHash = await bcrypt.hash(adminPassword, 10);
      adminUser = await User.create({ name: 'Admin', email: adminEmail, passwordHash, role: 'admin' });
      console.log('Admin user created:', adminEmail, adminPassword);
    } else {
      console.log('Admin already exists');
    }

    // Seed blog posts
    const blogPosts = [
      {
        title: 'Sustainable Fashion Trends 2025',
        slug: 'sustainable-fashion-trends-2025',
        content: `The fashion industry is experiencing a dramatic shift towards sustainability in 2025. Here are the key trends shaping the future of clothing:

        1. Recycled Materials
        - Innovative fabrics made from ocean plastic
        - Upcycled vintage clothing
        - Regenerated textile fibers

        2. Ethical Production
        - Fair labor practices
        - Transparent supply chains
        - Local manufacturing

        3. Smart Fabrics
        - Temperature-regulating materials
        - Self-cleaning textiles
        - Moisture-wicking innovations

        4. Zero-Waste Design
        - Pattern efficiency
        - Made-to-order production
        - Digital sampling

        5. Circular Fashion
        - Clothing rental services
        - Repair programs
        - Recycling initiatives

        The future of fashion is not just about style – it's about making conscious choices that benefit both people and the planet.`,
        excerpt: 'Discover the latest sustainable fashion trends shaping the industry in 2025.',
        author: adminUser._id,
        tags: ['Fashion', 'Sustainability', 'Trends', 'Eco-Friendly'],
        publishedAt: new Date('2025-11-09')
      },
      {
        title: 'Guide to Fabric Care and Maintenance',
        slug: 'fabric-care-maintenance-guide',
        content: `Proper care of your clothing is essential for both sustainability and longevity. Follow these expert tips to make your clothes last longer:

        Washing Tips:
        - Sort by color and fabric type
        - Use appropriate water temperatures
        - Choose gentle, eco-friendly detergents
        - Avoid overloading the washing machine

        Drying Best Practices:
        - Air dry when possible
        - Use appropriate dryer settings
        - Clean lint filters regularly
        - Avoid over-drying

        Storage Guidelines:
        - Use appropriate hangers
        - Store seasonal items properly
        - Protect from sunlight and moisture
        - Use cedar blocks for natural moth prevention

        Stain Removal:
        - Act quickly on fresh stains
        - Use appropriate cleaning methods
        - Test solutions on hidden areas first
        - Know when to seek professional help

        By following these guidelines, you can extend the life of your garments while reducing your environmental impact.`,
        excerpt: 'Learn expert tips for maintaining your clothes and extending their lifespan.',
        author: adminUser._id,
        tags: ['Clothing Care', 'Maintenance', 'Sustainability', 'Tips'],
        publishedAt: new Date('2025-11-10')
      },
      {
        title: 'Winter Fashion Essentials 2025',
        slug: 'winter-fashion-essentials-2025',
        content: `As we approach the winter season, it's time to update your wardrobe with these must-have pieces that combine style, comfort, and functionality:

        1. Smart Thermal Wear
        - Nano-fiber thermal underlayers
        - Heat-retaining technology
        - Moisture-wicking properties
        - Slim profile for layering

        2. Statement Outerwear
        - Recycled down jackets
        - Bio-based waterproof coats
        - Temperature-adaptive materials
        - Modular design elements

        3. Sustainable Knitwear
        - Organic merino wool sweaters
        - Recycled cashmere blends
        - Zero-waste knit patterns
        - Multi-functional styles

        4. Weather-Ready Boots
        - Eco-friendly water resistance
        - Renewable materials
        - Enhanced grip technology
        - Versatile styling options

        5. Smart Accessories
        - Temperature-monitoring scarves
        - Solar-powered heated gloves
        - Moisture-managing hats
        - Sustainable production methods

        This winter's essentials focus on combining innovative technology with sustainable materials, ensuring you stay warm while minimizing environmental impact.`,
        excerpt: 'Discover the must-have winter fashion items that combine sustainability with style.',
        author: adminUser._id,
        tags: ['Fashion', 'Winter', 'Sustainability', 'Style Guide'],
        publishedAt: new Date('2025-11-07')
      },
      {
        title: 'The Rise of Smart Clothing',
        slug: 'rise-of-smart-clothing',
        content: `Smart clothing is revolutionizing the fashion industry in 2025. Here's how technology is being integrated into our everyday wear:

        Smart Fabric Technologies:
        1. Temperature Regulation
           - Active heating elements
           - Cooling mesh systems
           - Weather-responsive materials
           - Automatic adjustment systems

        2. Health Monitoring
           - Heart rate sensors
           - Posture correction
           - Muscle fatigue detection
           - Stress level monitoring

        3. Environmental Adaptation
           - UV protection
           - Air quality sensors
           - Moisture management
           - Antimicrobial properties

        4. Connected Features
           - Smartphone integration
           - Gesture controls
           - LED displays
           - Wireless charging capabilities

        5. Sustainability Features
           - Energy harvesting
           - Biodegradable electronics
           - Recyclable components
           - Low-power systems

        The future of clothing isn't just about looking good – it's about wearing technology that enhances our daily lives while remaining environmentally conscious.`,
        excerpt: 'Explore how smart clothing technology is transforming the fashion industry in 2025.',
        author: adminUser._id,
        tags: ['Smart Clothing', 'Technology', 'Innovation', 'Fashion'],
        publishedAt: new Date('2025-11-09')
      },
      {
        title: 'Sustainable Denim Guide',
        slug: 'sustainable-denim-guide',
        content: `The denim industry is undergoing a major transformation towards sustainability. Here's your complete guide to eco-friendly denim:

        Manufacturing Innovations:
        - Water-saving techniques
        - Natural dye processes
        - Recycled cotton usage
        - Zero-waste production

        Sustainable Materials:
        - Organic cotton
        - Recycled fibers
        - Hemp blends
        - Bio-based stretch materials

        Eco-Friendly Washing:
        - Laser distressing
        - Ozone treatment
        - Enzyme washing
        - Waterless techniques

        Buying Guide:
        1. Check the materials
        2. Look for certification labels
        3. Research brand practices
        4. Consider durability
        5. Evaluate production methods

        Care Instructions:
        - Wash less frequently
        - Use cold water
        - Air dry when possible
        - Spot clean when needed
        - Repair rather than replace

        By choosing sustainable denim and caring for it properly, you can significantly reduce your fashion footprint while staying stylish.`,
        excerpt: 'Learn about sustainable denim practices and how to choose eco-friendly jeans.',
        author: adminUser._id,
        tags: ['Denim', 'Sustainability', 'Fashion', 'Eco-Friendly'],
        publishedAt: new Date('2025-11-06')
      },
      {
        title: 'The Evolution of Refurbished Electronics',
        slug: 'evolution-refurbished-electronics',
        content: `In recent years, the market for refurbished electronics has grown exponentially. This growth isn't just about saving money – it's about sustainability and making smart choices in a world where technology is constantly evolving.

        Refurbished devices undergo rigorous testing and quality control processes to ensure they meet or exceed original specifications. Many come with warranties that rival those of new products, offering peace of mind to buyers.

        Here are some benefits of choosing refurbished electronics:
        - Significant cost savings (usually 30-50% off retail prices)
        - Environmentally friendly choice
        - Same functionality as new devices
        - Professional testing and certification
        - Extended warranty options`,
        excerpt: "Discover why refurbished electronics are becoming increasingly popular and how they're changing the tech marketplace.",
        author: adminUser._id,
        tags: ['Electronics', 'Sustainability', 'Technology'],
        publishedAt: new Date('2025-11-01')
      },
      {
        title: 'Top 5 Business Laptops in 2025',
        slug: 'top-5-business-laptops-2025',
        content: `Choosing the right business laptop is crucial for productivity and efficiency. Here's our top 5 picks for 2025:

        1. HP EliteBook Series
           - Perfect balance of performance and portability
           - Enterprise-grade security features
           - All-day battery life

        2. Dell Latitude Series
           - Robust build quality
           - Excellent keyboard
           - Advanced connectivity options

        3. Lenovo ThinkPad X1 Carbon
           - Legendary reliability
           - Premium build quality
           - Impressive performance

        4. MacBook Pro M3
           - Exceptional performance
           - Beautiful display
           - Best-in-class battery life

        5. Microsoft Surface Laptop
           - Elegant design
           - Versatile touchscreen
           - Perfect for creative professionals`,
        excerpt: 'Find out which business laptops are leading the market in 2025 with our comprehensive guide.',
        author: adminUser._id,
        tags: ['Business', 'Laptops', 'Technology', 'Reviews'],
        publishedAt: new Date('2025-11-05')
      },
      {
        title: 'Why Choose Certified Refurbished Devices',
        slug: 'why-choose-certified-refurbished',
        content: `When it comes to purchasing technology, certified refurbished devices offer an excellent alternative to buying new. These devices undergo comprehensive testing and restoration processes to ensure they meet quality standards.

        The Certification Process:
        1. Initial Assessment
        2. Component Testing
        3. Repairs and Replacements
        4. Software Updates
        5. Quality Control
        6. Final Testing
        7. Certification

        Benefits:
        - Cost Savings
        - Environmental Impact
        - Quality Assurance
        - Warranty Protection
        - Professional Support

        Our certification process ensures that every device meets or exceeds manufacturer specifications while offering significant savings to our customers.`,
        excerpt: 'Learn about the benefits of certified refurbished devices and our rigorous certification process.',
        author: adminUser._id,
        tags: ['Refurbished', 'Quality', 'Certification', 'Value'],
        publishedAt: new Date('2025-11-08')
      }
    ];

    await BlogPost.deleteMany({});
    await BlogPost.insertMany(blogPosts);
    console.log('Seeded blog posts');

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
