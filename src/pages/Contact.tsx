import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  company: z.string().trim().min(1, "Required").max(200),
  industry: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Required").max(5000),
});

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast({
        title: "Please review the form",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const v = parsed.data;
    const { error } = await supabase.from("contact_submissions").insert({
      first_name: v.firstName,
      last_name: v.lastName,
      email: v.email,
      phone: v.phone || null,
      company: v.company,
      industry: v.industry || null,
      message: v.message,
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "Could not send message",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    form.reset();
    toast({
      title: "Message received",
      description: "An Oracle NetSuite Industrial specialist will be in touch within one business day.",
    });
  };

  return (
    <PageShell
      eyebrow="Contact"
      title="Talk to an industrial specialist."
      description="Tell us about your operation and we'll connect you with the right expert — typically within one business day."
      showCta={false}
    >
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-8 space-y-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" required placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" required placeholder="Doe" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" required placeholder="Acme Manufacturing" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input id="industry" name="industry" placeholder="Manufacturing, Energy, ..." />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your current systems, plant footprint, and what you'd like to achieve."
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground max-w-md">
                By submitting, you agree to receive communications from Oracle NetSuite Industrial.
                See our privacy policy for details.
              </p>
              <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                {submitting ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <h3 className="font-display text-lg font-bold text-secondary">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-secondary">Sales</p>
                  <p className="text-muted-foreground">+966 54 532 7215</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-secondary">Email</p>
                  <p className="text-muted-foreground">ahmed@t-sab.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium text-secondary">Headquarters</p>
                  <p className="text-muted-foreground">Riyadh, KSA</p>
                </div>
              </li>
        
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-hero text-white p-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Enterprise</p>
              <h3 className="mt-2 font-display text-lg font-bold">
                Need a multi-region rollout?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Our enterprise team plans phased global deployments tailored to your industrial footprint.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
