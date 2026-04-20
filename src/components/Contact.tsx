import { motion } from "motion/react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

function ContactForm({ onReset }: { onReset: () => void; key?: any }) {
  const [state, handleSubmit] = useForm("mjgpdekz");

  if (state.succeeded) {
    return (
      <div className="max-w-xl mx-auto text-center p-12 rounded-3xl border bg-card shadow-xl">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-bold">Message Sent!</h2>
          <p className="text-muted-foreground text-lg">
            Thank you for reaching out, Afaq. I'll get back to you as soon as possible.
          </p>
          <Button 
            variant="outline" 
            className="mt-6 rounded-xl"
            onClick={onReset}
          >
            Send another message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
        <p className="text-muted-foreground text-lg mb-10">
          Have a project in mind? Or just want to say hi? Feel free to reach out. 
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">aafaaqmalik9@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">+92 310 2456312</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">Pakistan</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-3xl border bg-card shadow-xl"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" name="name" placeholder="John Doe" className="rounded-xl" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" name="email" placeholder="john@example.com" type="email" className="rounded-xl" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <Input id="subject" name="subject" placeholder="Project Inquiry" className="rounded-xl" required />
            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" name="message" placeholder="Tell me about your project..." className="min-h-[150px] rounded-xl" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <Button 
            type="submit" 
            disabled={state.submitting}
            className="w-full rounded-xl py-6 group" 
            size="lg"
          >
            {state.submitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
          {state.errors && (
            <p className="text-destructive text-sm mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const [formKey, setFormKey] = useState(0);

  const handleReset = () => {
    setFormKey(prev => prev + 1);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ContactForm key={formKey} onReset={handleReset} />
        </div>
      </div>
    </section>
  );
}


