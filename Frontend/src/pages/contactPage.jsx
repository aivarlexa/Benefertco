import {
  ArrowRight,
  Globe2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const formData = new FormData(e.target);
    formData.append("access_key", "db45bc64-ded6-4c38-b722-9765c497d342");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        alert("Inquiry sent successfully!");
        e.target.reset();
      } else {
        alert("Error sending inquiry: " + data.message);
      }
    } catch {
      alert("Something went wrong. Please check your network and try again.");
    }
  };
  const sectionClass = 'mx-auto w-full max-w-[1180px] px-4 py-16 sm:px-6 sm:py-20'
  const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-full bg-[#123f2a] px-6 py-4 font-bold text-white shadow-[0_12px_28px_rgba(18,63,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b3320]'

  return (
    <section className={`${sectionClass} grid items-stretch gap-8 pt-28 sm:gap-10 sm:pt-32 lg:grid-cols-[0.9fr_1.1fr]`}>
      <div className="rounded-[32px] bg-[#123f2a] p-[clamp(28px,5vw,56px)] text-white">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em]">Contact</p>
        <h1 className="mb-5 text-4xl font-bold leading-none sm:text-5xl md:text-7xl">Start a crop nutrition inquiry.</h1>
        <div className="space-y-3 text-white/80">
          <p className="flex items-start gap-2.5 break-words"><MapPin className="mt-1 shrink-0" size={18} /> Leemansstraat 2, 4251 LD - Werkendam, the Netherlands</p>
          <p className="flex items-start gap-2.5 break-words"><Mail className="mt-1 shrink-0" size={18} /> benefertico@gmail.com</p>
          <p className="flex items-start gap-2.5"><Phone className="mt-1 shrink-0" size={18} /> +31183505268</p>
          <p className="flex items-start gap-2.5"><Globe2 className="mt-1 shrink-0" size={18} /> Benefertico Nutrition</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-[#1f6f4324] bg-white/80 p-[clamp(24px,4vw,42px)] shadow-[0_24px_70px_rgba(22,48,35,0.12)]" aria-label="Inquiry form">
        <label className="grid gap-2 font-bold text-[#123f2a]">
          Name
          <input className="min-w-0 rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5" type="text" name="name" required />
        </label>
        <label className="grid gap-2 font-bold text-[#123f2a]">
          Email
          <input className="min-w-0 rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5" type="email" name="email" required />
        </label>
        <label className="grid gap-2 font-bold text-[#123f2a]">
          Interest
          <select className="min-w-0 rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5" name="interest" defaultValue="product">
            <option value="product">Product inquiry</option>
            <option value="dealer">Dealer partnership</option>
            <option value="research">Research collaboration</option>
          </select>
        </label>
        <label className="grid gap-2 font-bold text-[#123f2a]">
          Message
          <textarea className="min-w-0 resize-y rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5" name="message" rows="5" required />
        </label>
        <button className={buttonClass} type="submit">Send inquiry <ArrowRight size={18} /></button>
      </form>
    </section>
  )
}
