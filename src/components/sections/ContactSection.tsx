import { motion } from 'framer-motion';
import { GlowCard } from '@/components/interactive/GlowCard';
import { ParticleButton } from '@/components/interactive/ParticleButton';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "your-email@example.com",
      action: () => window.open("mailto:your-email@example.com", "_blank"),
      color: 'purple' as const
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '@your-username',
      action: () => window.open('https://github.com/your-username', '_blank'),
      color: 'cyan' as const
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: "/in/your-profile",
      action: () => window.open("https://linkedin.com/in/your-profile", "_blank"),
      color: 'pink' as const
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
            Let's <span className="bg-neon-sunset bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking internship opportunities and would love to connect with potential employers 
            and fellow developers to discuss how I can contribute to your team.
          </p>
        </motion.div>
        
        <div className="grid gap-8">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlowCard glowColor="purple">
              <div className="p-8 text-center">
                <motion.div
                  className="w-20 h-20 bg-neon-purple rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MessageSquare className="w-10 h-10 text-black" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start My Career Journey?
                </h3>
                
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  I'm actively seeking internship opportunities where I can contribute, learn, 
                  and grow as a developer. Let's connect and discuss how I can add value to your team.
                </p>
                
                <ParticleButton 
                  variant="purple" 
                  onClick={() => window.open("mailto:your-email@example.com", "_blank")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Let's Connect
                </ParticleButton>
              </div>
            </GlowCard>
          </motion.div>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <GlowCard glowColor={method.color}>
                  <div className="p-6 text-center">
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4
                      ${method.color === 'purple' ? 'bg-retro-purple/20 text-retro-purple' :
                        method.color === 'cyan' ? 'bg-retro-cyan/20 text-retro-cyan' :
                        'bg-retro-pink/20 text-retro-pink'}
                    `}>
                      {method.icon}
                    </div>
                    
                    <h4 className="font-bold text-foreground mb-2">
                      {method.label}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {method.value}
                    </p>
                    
                    <ParticleButton 
                      variant={method.color}
                      onClick={method.action}
                      className="w-full"
                    >
                      Connect
                    </ParticleButton>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};