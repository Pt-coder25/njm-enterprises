import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useVehicles";
import { useSearch } from "@tanstack/react-router";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ADDRESS =
  "LP 66 McSeveny Street, El Dorado, Tunapuna Village, Saint George, Trinidad & Tobago";

const PHONES = [
  "268-NJME (6563)",
  "488-NJME (6563)",
  "487-NJME (6563)",
  "+1 868-656-6268",
];

const HOURS = [
  { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
  { days: "Saturday", time: "9:00 AM – 2:00 PM" },
  { days: "Sunday", time: "Closed" },
];

export function ContactPage() {
  const search = useSearch({ strict: false }) as { vehicle?: string };
  const initialVehicle = search.vehicle ?? "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleOfInterest, setVehicleOfInterest] = useState(initialVehicle);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitInquiry = useSubmitInquiry();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const captured = { name, phone, vehicleOfInterest, message };
    setName("");
    setPhone("");
    setVehicleOfInterest("");
    setMessage("");
    submitInquiry.mutate(captured, {
      onSuccess: () => setSubmitted(true),
      onError: () => {
        setName((current) => (current === "" ? captured.name : current));
        setPhone((current) => (current === "" ? captured.phone : current));
        setVehicleOfInterest((current) =>
          current === "" ? captured.vehicleOfInterest : current,
        );
        setMessage((current) => (current === "" ? captured.message : current));
      },
    });
  };

  const isPending = submitInquiry.isPending;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Get in Touch
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Contact NJM Enterprises
        </h1>
        <p className="mt-4 text-base text-muted-foreground lg:text-lg">
          Our team is ready to help you find the perfect vehicle. Reach out for
          inquiries, test drives, and trade-in questions.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-12">
        {/* Contact details */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Visit Us
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Phone className="size-5" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Call Us
                </h2>
                <ul className="mt-1 space-y-1">
                  {PHONES.map((phoneNumber) => (
                    <li
                      key={phoneNumber}
                      className="text-sm text-muted-foreground"
                    >
                      {phoneNumber}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Clock className="size-5" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Opening Hours
                </h2>
                <ul className="mt-1 space-y-1">
                  {HOURS.map((row) => (
                    <li
                      key={row.days}
                      className="flex items-baseline justify-between gap-6 text-sm"
                    >
                      <span className="text-muted-foreground">{row.days}</span>
                      <span
                        className={
                          row.time === "Closed"
                            ? "font-medium text-accent"
                            : "font-medium text-foreground"
                        }
                      >
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry form */}
        <div className="lg:col-span-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-subtle sm:p-8">
            {submitted ? (
              <div
                className="flex flex-col items-center gap-4 py-10 text-center"
                data-ocid="contact.success_state"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
                  <CheckCircle2 className="size-8" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Inquiry Received
                </h2>
                <p className="max-w-md text-sm text-muted-foreground">
                  Thank you for reaching out to NJM Enterprises. A member of our
                  team will contact you shortly to discuss your inquiry.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 transition-smooth"
                  data-ocid="contact.submit_another_button"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Send an Inquiry
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill in the form and our team will get back to you.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className="transition-smooth focus-visible:ring-ring"
                      data-ocid="contact.name_input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input
                      id="contact-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 268-NJME (6563)"
                      required
                      className="transition-smooth focus-visible:ring-ring"
                      data-ocid="contact.phone_input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-vehicle">Vehicle of Interest</Label>
                  <Input
                    id="contact-vehicle"
                    value={vehicleOfInterest}
                    onChange={(e) => setVehicleOfInterest(e.target.value)}
                    placeholder="e.g. Stock ID or model"
                    className="transition-smooth focus-visible:ring-ring"
                    data-ocid="contact.vehicle_input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you're looking for"
                    rows={5}
                    required
                    className="transition-smooth focus-visible:ring-ring"
                    data-ocid="contact.message_input"
                  />
                </div>

                {submitInquiry.isError && (
                  <p
                    className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                    data-ocid="contact.error_state"
                  >
                    Something went wrong sending your inquiry. Please try again.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full transition-smooth sm:w-auto"
                  data-ocid="contact.submit_button"
                >
                  {isPending ? "Sending…" : "Send Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
