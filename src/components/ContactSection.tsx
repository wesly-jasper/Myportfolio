import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

const recipientEmail = "weslyjasper7@gmail.com";

const contactLinks = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: recipientEmail,
    href: `mailto:${recipientEmail}`,
    color: "bg-primary/10 text-primary",
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "github.com/wesly-jasper",
    href: "https://github.com/wesly-jasper",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "linkedin.com/in/wesly-jasper",
    href: "https://www.linkedin.com/in/wesly-jasper/",
    color: "bg-primary/10 text-primary",
  },
];

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [returnUrl, setReturnUrl] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const contactStatus = url.searchParams.get("contact");

    if (contactStatus === "success") {
      toast.success("Message sent to my inbox.");
      url.searchParams.delete("contact");
      window.history.replaceState({}, "", url.toString());
    }

    url.searchParams.set("contact", "success");
    url.hash = "contact";
    setReturnUrl(url.toString());
  }, []);

  const handleSubmit = () => {
    setSending(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary-foreground mb-6">
              Let's build something intelligent.
            </h2>
            <p className="text-foreground mb-10 text-lg">
              Currently open to research collaborations and full-stack AI opportunities.
            </p>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${link.color}`}>
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">
                      {link.label}
                    </div>
                    <div className="text-secondary-foreground font-medium">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            action={`https://formsubmit.co/${recipientEmail}`}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4 p-8 bg-card/50 rounded-[2rem] border border-border"
          >
            <input type="hidden" name="_next" value={returnUrl} />
            <input type="hidden" name="_subject" value="New portfolio contact form message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-secondary border-none rounded-xl p-4 text-secondary-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-secondary border-none rounded-xl p-4 text-secondary-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full bg-secondary border-none rounded-xl p-4 text-secondary-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary outline-none resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full py-4 bg-secondary-foreground text-background font-bold rounded-xl hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
