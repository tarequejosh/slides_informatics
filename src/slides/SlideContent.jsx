import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { 
  Factory, Scissors, ShieldCheck, MapPin, 
  TrendingUp, Leaf, CheckCircle, Globe, Droplets, Heart,
  Users, ArrowRightLeft, RefreshCw, Store, Gem
} from 'lucide-react';

// Images
import slide1Img from '../assets/slide1_rajshahi_silk.png';
import slide2Img from '../assets/slide2_factory_vs_traditional.png';
import slide5Img from '../assets/slide5_silkworm_guide.png';
import slide6Img from '../assets/slide6_mulberry_farm.png';
import slide7Img from '../assets/slide7_cocoon.png';
import slide8Img from '../assets/slide8_extraction.png';
import slide9Img from '../assets/slide9_dyeing.png';
import slide10Img from '../assets/slide10_weaving.png';
import slide11Img from '../assets/slide11_products.png';
import slide12Img from '../assets/slide12_aarong.png';
import slide3TextureImg from '../assets/slide3_texture.png';
import slide3LightweightImg from '../assets/slide3_lightweight.png';
import slide3HeritageImg from '../assets/slide3_heritage.png';
import slide14Img from '../assets/slide14_economy_new.png';
import slide16Img from '../assets/slide16_sdgs.png';
import slide20Img from '../assets/slide20_conclusion.png';
import mapDhakaToTokyoImg from '../assets/Map_dhaka_to_tokyo.png';
import modernFashionImg from '../assets/modern.png';
import traditionalSilkImg from '../assets/traditional.png';
import uniqloLogo from '../assets/uniqlo_logo.svg';
import zaraLogo from '../assets/zara_logo.svg';

const SlideContent = ({ slideIndex, direction }) => {
  switch (slideIndex) {
    case 0:
      return (
        <Slide direction={direction}>
          <div className="flex-col" style={{ height: '100%', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <motion.h1 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="title-large text-charcoal"
                style={{ fontSize: '4.5rem', lineHeight: '1.1' }}
              >
                Rajshahi Silk Industry
              </motion.h1>
              <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="subtitle"
                style={{ marginTop: '1rem', fontSize: '2rem' }}
              >
                Bangladesh's Golden Thread of Heritage and Innovation
              </motion.h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', flexGrow: 1, paddingBottom: '2rem' }}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass-panel flex-col flex-center"
                style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(255,255,255,0.7)', justifyContent: 'space-between' }}
              >
                <img 
                  src={slide1Img} 
                  alt="Rajshahi Silk Art" 
                  style={{ width: '100%', height: '35vh', objectFit: 'contain' }}
                />
                <p className="body-text text-center" style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--color-charcoal)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  The Art of Silk Craftsmanship
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="glass-panel flex-col flex-center"
                style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)', background: 'rgba(255,255,255,0.7)', justifyContent: 'space-between' }}
              >
                <img 
                  src={mapDhakaToTokyoImg} 
                  alt="Geographical Context" 
                  style={{ width: '100%', height: '35vh', objectFit: 'contain' }}
                />
                <p className="body-text text-center" style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--color-charcoal)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  Geographical Context: The 4,800km Bridge
                </p>
              </motion.div>
            </div>
          </div>
        </Slide>
      );
    case 1:
      return (
        <Slide direction={direction}>
          <div className="flex-col" style={{ height: '100%', padding: '0 2rem' }}>
            
            {/* Top Text Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 className="title-large">A Proud Heritage From My Hometown</h1>
              <p className="body-text" style={{ marginTop: '1rem', maxWidth: '900px', margin: '1rem auto 0 auto', fontSize: '1.2rem' }}>
                Before we talk about global fashion, I want to share something deeply personal. <strong className="text-gold">Rajshahi</strong> is my hometown. While the world knows Bangladesh for powering global fashion, my hometown quietly preserves a delicate, centuries-old secret.
              </p>
            </div>

            {/* Massive VS Graphic */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', flexGrow: 1, paddingBottom: '2rem', alignItems: 'stretch' }}>
              
              {/* Modern Fast Fashion Side */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{ 
                  background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', 
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  border: '1px solid #334155'
                }}
              >
                <div style={{ height: '40vh', width: '100%', overflow: 'hidden' }}>
                  <img src={modernFashionImg} alt="Modern Fast Fashion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ color: '#f8fafc', fontSize: '1.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Modern Fast Fashion</h3>
                  <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.6' }}>Mass production, global scale, cold efficiency. Powering the world's clothing demands.</p>
                </div>
              </motion.div>

              {/* VS Divider */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '2px', height: '80px', background: 'var(--color-gold)', opacity: 0.5 }}></div>
                <div style={{ padding: '1.5rem 0.5rem', background: 'var(--color-gold)', borderRadius: '20px', color: 'white', fontWeight: 'bold', margin: '1rem 0', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '4px' }}>VS</div>
                <div style={{ width: '2px', height: '80px', background: 'var(--color-gold)', opacity: 0.5 }}></div>
              </div>

              {/* Traditional Heritage Side */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                style={{ 
                  background: 'linear-gradient(135deg, #FFF8EE 0%, #FDE6C8 100%)', 
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 20px 40px rgba(212,160,23,0.15)',
                  border: '1px solid #D4A017'
                }}
              >
                <div style={{ height: '40vh', width: '100%', overflow: 'hidden', borderBottom: '2px solid var(--color-gold)' }}>
                  <img src={traditionalSilkImg} alt="Rajshahi Heritage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ color: 'var(--color-charcoal)', fontSize: '1.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Rajshahi Heritage</h3>
                  <p style={{ color: 'var(--color-charcoal)', opacity: 0.8, fontSize: '1.1rem', lineHeight: '1.6' }}>Centuries-old handloom techniques, warm sunlit workshops, delicate artistry.</p>
                </div>
              </motion.div>

            </div>
          </div>
        </Slide>
      );
    case 2: {
      const timelineData = [
        { period: 'Ancient Trade', desc: 'Early roots in regional sericulture and trade.' },
        { period: 'Mughal Period', desc: 'Royal patronage elevated it to luxury status.' },
        { period: 'British Era', desc: 'Expansion meets colonial industrial pressures.' },
        { period: 'Pakistan Period', desc: 'Rajshahi named the official Silk Capital (1960s).' },
        { period: 'Independence', desc: 'National revival & Sericulture Board formed.' },
        { period: 'Modern Era', desc: 'Focus on global exports & sustainability.' }
      ];
      
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%', padding: '0 2rem' }}>
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="title-large text-center" 
              style={{ marginBottom: '2rem' }}
            >
              History of Rajshahi Silk
            </motion.h1>

            {/* Timeline Container */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '300px', marginTop: '3rem' }}>
              
              {/* The "Drawing" Thread Line */}
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: "linear" }}
                style={{
                  position: 'absolute',
                  top: '50px',
                  left: '0',
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--color-orange), var(--color-gold))',
                  zIndex: 0,
                  boxShadow: '0 0 10px var(--color-gold)'
                }}
              />
              
              {/* Static Background Line for contrast */}
              <div style={{
                  position: 'absolute',
                  top: '50px',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'var(--color-beige)',
                  zIndex: -1
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'absolute', top: '0', left: '0' }}>
                {timelineData.map((item, i) => (
                  <motion.div 
                    key={item.period}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (4 / 5) * i, duration: 0.8, ease: "easeOut" }} // Delays match the line drawing (4s / 5 gaps)
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '16%', textAlign: 'center' }}
                  >
                    {/* Pulsing Node */}
                    <div style={{ position: 'relative', width: '30px', height: '30px', marginTop: '36px' }}>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.5, 1] }}
                        transition={{ delay: (4 / 5) * i, duration: 0.5 }}
                        style={{ 
                          width: '100%', height: '100%', borderRadius: '50%', 
                          backgroundColor: 'var(--color-white)', 
                          border: '4px solid var(--color-gold)', 
                          boxShadow: '0 0 15px rgba(212, 160, 23, 0.5)',
                          position: 'relative', zIndex: 1 
                        }}
                      />
                    </div>
                    
                    {/* Content Box */}
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="glass-panel" 
                      style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.9)' }}
                    >
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--color-orange)', marginBottom: '0.5rem' }}>{item.period}</h3>
                      <p className="body-text" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{item.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1 }}
              className="glass-panel"
              style={{ marginTop: '4rem', maxWidth: '800px', background: 'rgba(255, 248, 238, 0.9)' }}
            >
              <p className="body-text text-center">
                Rajshahi's unique climate and soil made it the perfect geographical hub for mulberry cultivation, eventually earning it the proud title: <strong className="text-gold">The Silk City of Bangladesh</strong>.
              </p>
            </motion.div>
          </div>
        </Slide>
      );
    }
    case 3:
      return (
        <Slide direction={direction}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="title-large text-center">What Makes Rajshahi Silk Special?</h1>
            <p className="body-text text-center mb-10" style={{ maxWidth: '800px', margin: '1rem auto 3rem auto' }}>Beyond just fabric, it represents an intersection of nature, artisanal mastery, and profound cultural identity.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
              <motion.div whileHover={{ y: -10 }} className="glass-panel flex-col flex-center" style={{ padding: '2rem', textAlign: 'center' }}>
                <img src={slide3TextureImg} alt="Texture" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--color-gold)' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Luxurious Texture</h3>
                <p className="body-text" style={{ fontSize: '1rem' }}>Incredibly soft, naturally lustrous, and breathable across climates.</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass-panel flex-col flex-center" style={{ padding: '2rem', textAlign: 'center' }}>
                <img src={slide3LightweightImg} alt="Lightweight" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--color-gold)' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Feather Lightweight</h3>
                <p className="body-text" style={{ fontSize: '1rem' }}>Renowned for feeling almost weightless while maintaining incredible tensile strength.</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass-panel flex-col flex-center" style={{ padding: '2rem', textAlign: 'center' }}>
                <img src={slide3HeritageImg} alt="Heritage" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '4px solid var(--color-gold)' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Authentic Heritage</h3>
                <p className="body-text" style={{ fontSize: '1rem' }}>Handcrafted using techniques passed down for generations since the 13th century.</p>
              </motion.div>
            </div>
          </div>
        </Slide>
      );
    case 4:
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%' }}>
            <h1 className="title-large text-center">How Silk Is Made</h1>
            <h2 className="subtitle text-center" style={{ marginBottom: '2rem' }}>An Overview</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <motion.img 
                src={slide5Img} 
                alt="Silkworm Guide" 
                style={{ height: '60vh', objectFit: 'contain' }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {['1. Silkworm Rearing', '2. Cocoon Formation', '3. Thread Extraction', '4. Dyeing', '5. Weaving', '6. Finished Product'].map((step, i) => (
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={step} 
                    className="glass-panel"
                    style={{ padding: '1rem 2rem', fontSize: '1.5rem', fontWeight: '600' }}
                  >
                    {step}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Slide>
      );
    case 5:
      return (
        <Slide direction={direction}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="subtitle text-orange">Step 1</h2>
              <h1 className="title-large">Raising Silkworms</h1>
              <p className="body-text" style={{ marginTop: '2rem' }}>
                The journey begins with the careful cultivation of mulberry leaves. These leaves are the exclusive diet of the silkworm (Bombyx mori).
              </p>
              <div className="glass-panel" style={{ marginTop: '2rem' }}>
                <ul className="body-text" style={{ marginLeft: '1.5rem' }}>
                  <li>Silkworms eat constantly for 20-30 days.</li>
                  <li>They increase their body weight by 10,000 times!</li>
                  <li>A healthy farm is crucial for high-quality silk.</li>
                </ul>
              </div>
            </div>
            <motion.img 
              src={slide6Img} 
              alt="Mulberry Farm" 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
        </Slide>
      );
    case 6:
      return (
        <Slide direction={direction}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', gap: '4rem', alignItems: 'center' }}>
            <motion.img 
              src={slide7Img} 
              alt="Cocoon" 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
            />
            <div>
              <h2 className="subtitle text-orange">Step 2</h2>
              <h1 className="title-large">Cocoon Formation</h1>
              <p className="body-text" style={{ marginTop: '2rem' }}>
                After 30 days of continuous eating, the silkworm begins to spin a protective cocoon around itself using a single, continuous thread of silk.
              </p>
              <div className="glass-panel" style={{ marginTop: '2rem' }}>
                <p className="body-text">
                  <strong>Did you know?</strong> One cocoon can contain a silk filament ranging from 300 to 900 meters long!
                </p>
              </div>
            </div>
          </div>
        </Slide>
      );
    case 7:
      return (
        <Slide direction={direction}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="subtitle text-orange">Step 3</h2>
              <h1 className="title-large">Thread Extraction</h1>
              <p className="body-text" style={{ marginTop: '2rem' }}>
                The cocoons are gently boiled to soften the sericin (a natural gum). This allows the artisan to find the end of the microscopic thread and carefully reel it out.
              </p>
              <ul className="body-text" style={{ marginTop: '2rem', marginLeft: '2rem' }}>
                <li>Delicate Reeling Process</li>
                <li>Multiple threads are twisted together for strength</li>
                <li>Produces raw silk skeins</li>
              </ul>
            </div>
            <motion.img 
              src={slide8Img} 
              alt="Extraction Process" 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
        </Slide>
      );
    case 8:
      return (
        <Slide direction={direction}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', gap: '4rem', alignItems: 'center' }}>
            <motion.img 
              src={slide9Img} 
              alt="Dyeing Process" 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
            />
            <div>
              <h2 className="subtitle text-orange">Step 4</h2>
              <h1 className="title-large">Dyeing and Coloring</h1>
              <p className="body-text" style={{ marginTop: '2rem' }}>
                The raw silk is washed and then submerged in vibrant dyes. Both traditional natural dyes and modern coloring techniques are used to achieve the stunning colors Rajshahi silk is known for.
              </p>
              <div className="glass-panel" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, rgba(212,160,23,0.2) 0%, rgba(242,140,40,0.2) 100%)' }}>
                <p className="body-text" style={{ fontWeight: '600' }}>Vibrant, colorfast, and radiant.</p>
              </div>
            </div>
          </div>
        </Slide>
      );
    case 9:
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%' }}>
            <h2 className="subtitle text-orange">Step 5</h2>
            <h1 className="title-large">Traditional Weaving</h1>
            <p className="body-text text-center" style={{ marginTop: '1rem', maxWidth: '800px' }}>
              The final magic happens on the handloom. Master artisans weave the dyed silk threads into intricate patterns, a skill passed down through generations.
            </p>
            <motion.img 
              src={slide10Img} 
              alt="Weaving Loom" 
              style={{ width: '80%', maxHeight: '55vh', marginTop: '2rem', objectFit: 'contain' }}
            />
          </div>
        </Slide>
      );
    case 10:
      return (
        <Slide direction={direction}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', height: '100%', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 className="title-large">Final Luxury Products</h1>
              <p className="body-text" style={{ marginTop: '2rem' }}>
                Rajshahi silk transforms into stunning garments worn during festivals, weddings, and cultural events.
              </p>
              <ul className="body-text" style={{ marginTop: '2rem', marginLeft: '1.5rem', lineHeight: '2' }}>
                <li><strong>Silk Saree:</strong> The traditional pride</li>
                <li><strong>Silk Panjabi:</strong> Elegant menswear</li>
                <li><strong>Scarves & Shawls</strong></li>
                <li><strong>Ties & Accessories</strong></li>
                <li><strong>Luxury Home Decor</strong></li>
              </ul>
            </div>
            <motion.img 
              src={slide11Img} 
              alt="Silk Products" 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '20px' }}
            />
          </div>
        </Slide>
      );
    case 11:
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%', padding: '0 2rem' }}>
            <h1 className="title-large text-center" style={{ marginBottom: '1rem' }}>The Global Fashion Ecosystem</h1>
            <p className="body-text text-center mb-10" style={{ maxWidth: '900px', margin: '0 auto 3rem auto' }}>
              Bangladesh isn't just a local player; it is the powerhouse of global fashion.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', width: '100%', maxWidth: '1200px', alignItems: 'center' }}>
              
              {/* Left Column: RMG */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '1rem' }}>
                  <h2 className="title-large" style={{ fontSize: '1.8rem', color: 'var(--color-charcoal)' }}>RMG Powerhouse</h2>
                </div>
                
                <motion.div whileHover={{ scale: 1.05 }} className="glass-panel flex-col flex-center" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--color-charcoal)' }}>
                  <Globe size={40} className="text-charcoal" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-charcoal)' }}>#2</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>Global Exporter ($47B)</p>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} className="glass-panel flex-col flex-center" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--color-charcoal)' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem', height: '40px' }}>
                    <img src={uniqloLogo} alt="Uniqlo Logo" style={{ height: '35px', objectFit: 'contain' }} />
                    <div style={{ width: '1px', height: '30px', background: 'var(--color-charcoal)', opacity: 0.3 }}></div>
                    <img src={zaraLogo} alt="Zara Logo" style={{ height: '20px', objectFit: 'contain', marginTop: '5px' }} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-charcoal)' }}>Global Brands</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>Primary Sourcing Hub</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="glass-panel flex-col flex-center" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--color-charcoal)' }}>
                  <Users size={40} className="text-charcoal" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-charcoal)' }}>4M+</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>Workers (80% Women)</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="glass-panel flex-col flex-center" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--color-charcoal)' }}>
                  <Leaf size={40} className="text-charcoal" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-charcoal)' }}>LEED</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>Greenest Factories</p>
                </motion.div>
              </div>

              {/* Center Divider/Bridge */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <div style={{ width: '2px', height: '100px', background: 'var(--color-gold)', opacity: 0.5 }}></div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ padding: '1rem', background: 'var(--color-white)', borderRadius: '50%', border: '4px solid var(--color-gold)', margin: '1rem 0' }}
                >
                  <ArrowRightLeft size={30} className="text-gold" />
                </motion.div>
                <div style={{ width: '2px', height: '100px', background: 'var(--color-gold)', opacity: 0.5 }}></div>
              </div>

              {/* Right Column: Silk */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '1rem' }}>
                  <h2 className="title-large" style={{ fontSize: '1.8rem', color: 'var(--color-gold)' }}>Silk Ecosystem</h2>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} className="glass-panel flex-col flex-center" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--color-gold)' }}>
                  <RefreshCw size={40} className="text-gold" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-gold)' }}>90%</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>Imports (India/China)</p>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} className="glass-panel flex-col flex-center" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--color-gold)' }}>
                  <Store size={40} className="text-gold" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-gold)' }}>Aarong</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>Fair-Trade Networks</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="glass-panel flex-col flex-center" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--color-gold)' }}>
                  <MapPin size={40} className="text-gold" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-gold)' }}>Japan</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>Target Luxury Export</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="glass-panel flex-col flex-center" style={{ padding: '1.5rem', textAlign: 'center', borderTop: '4px solid var(--color-gold)' }}>
                  <Gem size={40} className="text-gold" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-gold)' }}>Luxury</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>Future Transition</p>
                </motion.div>
              </div>

            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="body-text text-center" 
              style={{ marginTop: '3rem', fontSize: '1.3rem', fontStyle: 'italic', fontWeight: 'bold', color: 'var(--color-orange)' }}
            >
              Leveraging our RMG infrastructure to push silk into global high-end boutiques.
            </motion.p>
          </div>
        </Slide>
      );
    case 12:
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%' }}>
            <h1 className="title-large text-center">Wider Industry Ecosystem</h1>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Fashion Designers', 'Boutique Brands', 'Export Businesses', 'Handicraft Sector', 'Tourism'].map((sector) => (
                <motion.div 
                  key={sector}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--color-gold)', color: 'var(--color-white)' }}
                  className="glass-panel"
                  style={{ padding: '2rem 3rem', fontSize: '1.5rem', fontWeight: '600', transition: 'all 0.3s' }}
                >
                  {sector}
                </motion.div>
              ))}
            </div>
            <p className="body-text text-center" style={{ marginTop: '4rem', maxWidth: '700px' }}>
              Rajshahi silk doesn't just stay in local markets; it fuels a vast network of creative and economic industries across Bangladesh and beyond.
            </p>
          </div>
        </Slide>
      );
    case 13:
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%' }}>
            <h1 className="title-large text-center">Current Challenges</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem', width: '100%', maxWidth: '900px' }}>
              <div className="glass-panel" style={{ borderLeft: '5px solid var(--color-orange)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Synthetic Competition</h3>
                <p className="body-text">Cheap synthetic fabrics heavily compete with the higher cost of natural, handmade silk.</p>
              </div>
              <div className="glass-panel" style={{ borderLeft: '5px solid var(--color-charcoal)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Production Costs</h3>
                <p className="body-text">Labor-intensive processes and rising material costs challenge profit margins.</p>
              </div>
              <div className="glass-panel" style={{ borderLeft: '5px solid var(--color-gold)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Global Awareness</h3>
                <p className="body-text">Rajshahi silk remains a hidden gem, needing better international branding.</p>
              </div>
              <div className="glass-panel" style={{ borderLeft: '5px solid var(--color-beige)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Climate Impacts</h3>
                <p className="body-text">Changes in temperature and rainfall affect mulberry leaf quality and silkworm health.</p>
              </div>
            </div>
          </div>
        </Slide>
      );
    case 14:
      return (
        <Slide direction={direction}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', height: '100%', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 className="title-large">Sustainable Development Goals</h1>
              <p className="body-text" style={{ marginTop: '2rem' }}>
                Rajshahi Silk strongly aligns with the UN SDGs, promoting a sustainable future.
              </p>
              <ul className="body-text" style={{ marginTop: '2rem', marginLeft: '1rem', lineHeight: '1.8' }}>
                <li><strong>SDG 1:</strong> No Poverty</li>
                <li><strong>SDG 5:</strong> Gender Equality</li>
                <li><strong>SDG 8:</strong> Decent Work & Econ. Growth</li>
                <li><strong>SDG 9:</strong> Industry & Innovation</li>
                <li><strong>SDG 12:</strong> Responsible Consumption</li>
                <li><strong>SDG 13:</strong> Climate Action</li>
              </ul>
            </div>
            <motion.img 
              src={slide16Img} 
              alt="SDG Wheel" 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
        </Slide>
      );
    case 15:
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%' }}>
            <h1 className="title-large text-center">Revenue & Impact Profile</h1>
            <p className="subtitle text-center" style={{ marginBottom: '3rem' }}>A Legally Protected Cultural Asset</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', width: '100%', maxWidth: '1100px' }}>
              <motion.div whileHover={{ y: -10 }} className="glass-panel flex-col flex-center" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>600M BDT</h2>
                <h3 style={{ fontSize: '1.3rem' }}>Peak Seasonal Turnover</h3>
                <p className="body-text" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>During major festivals like Eid, local sales soar up to 50-60 crore Taka ($5M+ USD).</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass-panel flex-col flex-center" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--color-orange)', marginBottom: '1rem' }}>100,000+</h2>
                <h3 style={{ fontSize: '1.3rem' }}>Livelihoods Supported</h3>
                <p className="body-text" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>Direct and indirect employment for rural families and master artisans across the region.</p>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass-panel flex-col flex-center" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>2020 GI Tag</h2>
                <h3 style={{ fontSize: '1.3rem' }}>Official Recognition</h3>
                <p className="body-text" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>Granted Geographical Indication (GI) status, legally protecting its authentic regional identity.</p>
              </motion.div>
            </div>
            <p className="body-text text-center mt-10" style={{ marginTop: '4rem', fontSize: '1.1rem', maxWidth: '800px' }}>
              Despite high demand (consuming ~450 tons annually), local production meets only 10%. The government is currently investing heavily to revitalize mulberry cultivation and reduce import dependency.
            </p>
          </div>
        </Slide>
      );
    case 16:
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%' }}>
            <h1 className="title-large text-center" style={{ marginBottom: '4rem' }}>Interesting Facts</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', width: '100%' }}>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <h1 style={{ fontSize: '5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>1</h1>
                <p className="body-text">One cocoon can produce hundreds of meters of continuous silk filament.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <ShieldCheck size={80} className="text-orange" style={{ margin: '0 auto 1rem auto' }} />
                <p className="body-text">Silk is recognized as one of the strongest natural fibers in the world.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <MapPin size={80} className="text-charcoal" style={{ margin: '0 auto 1rem auto' }} />
                <p className="body-text">Rajshahi is proudly known as the <strong>Silk City</strong> of Bangladesh.</p>
              </motion.div>
            </div>
          </div>
        </Slide>
      );
    case 17:
      return (
        <Slide direction={direction}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h1 className="title-large text-gold">The Golden Thread Forward</h1>
              <p className="body-text" style={{ fontSize: '1.5rem', lineHeight: '1.6', marginTop: '2rem' }}>
                As we've seen today, Rajshahi Silk is far more than just a beautiful fabric from my hometown.
              </p>
              <p className="body-text" style={{ fontSize: '1.3rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
                It is a testament to sustainable craftsmanship in an era of fast fashion. While global brands scale mass production, these 100,000 artisans quietly preserve a 13th-century art form.
              </p>
              <p className="body-text" style={{ fontSize: '1.3rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: 'bold' }}>
                By connecting traditional heritage with modern, conscious consumerism—perhaps even through future collaborations here in Japan—we ensure this golden thread never breaks.
              </p>
            </div>
            <motion.img 
              src={slide20Img} 
              alt="Conclusion" 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
            />
          </div>
        </Slide>
      );
    case 18:
      return (
        <Slide direction={direction}>
          <div className="flex-col flex-center" style={{ height: '100%', textAlign: 'center' }}>
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="title-large text-gold"
              style={{ fontSize: '6rem' }}
            >
              Thank You
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="subtitle"
              style={{ marginTop: '2rem', fontSize: '2.5rem' }}
            >
              Any Questions?
            </motion.p>
            <div style={{ marginTop: '5rem', width: '200px', height: '4px', background: 'var(--color-orange)', borderRadius: '2px' }}></div>
          </div>
        </Slide>
      );
    case 19:
      return (
        <Slide direction={direction}>
          <div className="flex-col" style={{ height: '100%', justifyContent: 'center' }}>
            <h1 className="title-large">References</h1>
            <div className="glass-panel" style={{ marginTop: '3rem' }}>
              <ul className="body-text" style={{ lineHeight: '2.5', marginLeft: '1rem', listStyleType: 'none' }}>
                <li>Aarong. (n.d.). <em>Artisans of Bangladesh: The Silk Story</em>. BRAC.</li>
                <li>Bangladesh Sericulture Board. (2023). <em>Annual Report on Silk Production and Export</em>. Rajshahi.</li>
                <li>Government of Bangladesh. (2022). <em>Geographical Indication (GI) Journal</em>. Department of Patents, Designs and Trademarks.</li>
                <li>Hasan, M. (2021). <em>Economic Impact of Sericulture in Rural Bangladesh</em>. Asian Journal of Agricultural Extension.</li>
                <li>Rahman, A. & Islam, S. (2019). <em>Sustainable Practices in the Traditional Silk Handloom Industry</em>. Journal of Textile Science.</li>
              </ul>
            </div>
          </div>
        </Slide>
      );
    default:
      return <Slide direction={direction}>End of Presentation</Slide>;
  }
};

export default SlideContent;
