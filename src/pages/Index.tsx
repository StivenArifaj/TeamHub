import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layout, Zap, Users, BarChart3, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">TeamHub</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-primary leading-tight"
            >
              Manage projects with <br className="hidden sm:block" />
              <span className="text-blue-600">clarity and velocity</span>.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              The all-in-one workspace for agile teams. Kanban boards, real-time collaboration, and powerful analytics to keep your team moving forward.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                  Start for free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                  View Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 rounded-xl border bg-muted/50 p-2 shadow-2xl"
        >
          <div className="rounded-lg bg-background border overflow-hidden aspect-video relative flex items-center justify-center">
            {/* Placeholder for actual dashboard screenshot */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
              <div className="text-center space-y-4 opacity-75">
                <Layout className="w-24 h-24 text-blue-200 mx-auto" />
                <p className="text-blue-300 font-medium tracking-widest text-sm uppercase">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by innovative teams everywhere</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Acme Corp', 'GlobalTech', 'Nebula', 'Velocity', 'FoxRun'].map((brand) => (
              <span key={brand} className="text-xl font-bold flex items-center gap-2">
                <Globe className="h-5 w-5" /> {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to deliver faster</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Streamline your workflow with tools designed for modern software teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layout className="h-6 w-6 text-blue-600" />,
              title: "Kanban Boards",
              desc: "Visualize your workflow. Drag and drop tasks to manage progress effortlessly."
            },
            {
              icon: <Users className="h-6 w-6 text-indigo-600" />,
              title: "Real-time Collaboration",
              desc: "Work together with your team in real-time. Comments, mentions, and updates instant."
            },
            {
              icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
              title: "Insightful Reporting",
              desc: "Track velocity and burndown charts to keep your sprints on track."
            },
            {
              icon: <Zap className="h-6 w-6 text-yellow-500" />,
              title: "Automations",
              desc: "Automate repetitive tasks and focus on what matters most."
            },
            {
              icon: <Shield className="h-6 w-6 text-green-600" />,
              title: "Enterprise Security",
              desc: "Bank-grade encryption and advanced permission controls."
            },
            {
              icon: <Globe className="h-6 w-6 text-cyan-600" />,
              title: "Work Anywhere",
              desc: "Fully responsive design so you can manage projects on the go."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 p-3 bg-muted/50 rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to transform your workflow?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of teams who have switched to TeamHub for better clarity and faster shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-12 px-8 text-primary font-bold">
                Get Started for Free
              </Button>
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/60">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">TeamHub</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Twitter</a>
            <a href="#" className="hover:text-foreground">GitHub</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 TeamHub Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
