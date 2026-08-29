import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Mars,
  Droplet,
  CalendarCheck,
  ClipboardList,
  BadgeCheck,
  School,
  ChevronRight,
  ChevronDown,
  ClipboardCopy,
  ReceiptText,
  CreditCard,
  Mail,
  Phone,
  LogOut,
  Home,
  Bell,
  Wallet,
  BookOpen,
  Maximize2,
  Download,
  FileText,
} from "lucide-react";
import avatar from "@/assets/student-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Profile — Campus ID & Records" },
      {
        name: "description",
        content:
          "View student profile: member ID, attendance, fees status, institution details, documents and payment receipts.",
      },
      { property: "og:title", content: "Student Profile — Campus ID & Records" },
      {
        property: "og:description",
        content:
          "Member ID, attendance, fees status, institution details, documents and payment receipts in one mobile profile.",
      },
    ],
  }),
  component: Index,
});

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/40 px-3 py-2">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="mt-0.5 truncate text-[13.5px] font-semibold text-foreground">{value}</p>
    </div>
  );
}

function DocRow({
  icon,
  iconClass,
  title,
  subtitle,
  highlight,
  children,
}: {
  icon: React.ReactNode;
  iconClass: string;
  title: string;
  subtitle: string;
  highlight?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-colors ${
        highlight
          ? "border-primary/25 bg-primary-soft/60"
          : "border-border bg-card hover:bg-muted/50"
      }`}
    >
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${iconClass}`}>
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={`block text-[15px] font-semibold ${highlight ? "text-primary" : "text-foreground"}`}
        >
          {title}
        </span>
        <span className="block text-[12px] text-muted-foreground">{subtitle}</span>
        {children}
      </span>
      <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
    </button>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background pb-28">
      {/* Header */}
      <header className="relative bg-primary pb-20 pt-4">
        <div className="flex items-center px-4">
          <button
            aria-label="Go back"
            className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/15 text-primary-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="-ml-11 flex-1 text-center text-[19px] font-semibold text-primary-foreground">
            Student Profile
          </h1>
        </div>
      </header>

      <div className="relative z-10 -mt-14 space-y-4 px-4">
        {/* Identity card */}
        <section className="rounded-3xl bg-card p-4 shadow-card">
          <div className="flex items-start gap-4">
            <img
              src={avatar}
              alt="Portrait of Kadali Chetan Kiran"
              width={512}
              height={512}
              className="h-[72px] w-[72px] shrink-0 rounded-full border-4 border-primary-soft object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-primary-soft px-2 py-0.5 text-[9px] font-bold text-primary">
                  MEMBER ID
                </span>
                <span className="text-[13px] font-semibold text-foreground">2601100196</span>
              </div>
              <h2 className="mt-1 text-[17px] font-extrabold leading-tight text-foreground">
                KADALI CHETAN KIRAN
              </h2>
              <p className="mt-1 text-[14px] text-muted-foreground">
                F.Y.B.COM (NEP) &nbsp;•&nbsp; Roll 0021
              </p>
            </div>
            <button className="shrink-0 rounded-2xl border border-border bg-card p-2 text-center">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=2601100196"
                alt="Student QR code"
                loading="lazy"
                width={76}
                height={76}
                className="h-[76px] w-[76px]"
              />
              <span className="mt-1 flex items-center justify-center gap-1 text-[11px] text-muted-foreground">
                Tap to view full QR <Maximize2 className="h-3 w-3" />
              </span>
            </button>
          </div>

          

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { icon: <Calendar className="h-5 w-5 text-primary" />, label: "Date of Birth", value: "28/06/2008" },
              { icon: <Mars className="h-5 w-5 text-primary" />, label: "Gender", value: "Male" },
              { icon: <Droplet className="h-5 w-5 fill-destructive text-destructive" />, label: "Blood Group", value: "A+" },
            ].map((f) => (
              <div key={f.label} className="flex min-w-0 items-center gap-2">
                <span className="shrink-0">{f.icon}</span>
                <span className="min-w-0">
                  <span className="block text-[11px] text-muted-foreground">{f.label}</span>
                  <span className="block truncate text-[14px] font-semibold text-foreground">
                    {f.value}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-2xl border border-border p-3">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary-soft">
                  <CalendarCheck className="h-4 w-4 text-primary" />
                </span>
                <span className="text-[9px] font-semibold text-muted-foreground">
                  ATTENDANCE
                </span>
              </div>
              <p className="mt-2 text-[22px] font-extrabold text-foreground">0%</p>
              <p className="text-[12px] text-muted-foreground">0 Present</p>
            </div>

            <div className="rounded-2xl border border-border p-3">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-destructive">
                  <ClipboardList className="h-4 w-4 text-destructive-foreground" />
                </span>
                <span className="text-[9px] font-semibold text-muted-foreground">
                  FEES STATUS
                </span>
              </div>
              <p className="mt-2 text-[19px] font-extrabold text-destructive">Pending</p>
              <button className="text-[12px] font-medium text-primary underline">
                View Details
              </button>
            </div>

            <div className="rounded-2xl border border-border p-3">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-success">
                  <BadgeCheck className="h-4 w-4 text-success-foreground" />
                </span>
                <span className="text-[9px] font-semibold text-muted-foreground">
                  STATUS
                </span>
              </div>
              <p className="mt-2 text-[19px] font-extrabold text-success">Active</p>
              <p className="text-[12px] text-muted-foreground">Good Standing</p>
            </div>
          </div>
        </section>

        {/* Institution */}
        <section className="rounded-3xl bg-card p-4 shadow-card">
          <h3 className="mb-2 pl-[64px] text-[16px] font-bold text-foreground">
            Current Institution
          </h3>
          <div className="flex items-start gap-3">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-soft">
              <School className="h-7 w-7 text-primary" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold leading-snug text-foreground">
                DADASAHEB BIDKAR ARTS ,SCIENCE &amp; COMMERCE COLLEGE
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">B.Com. &nbsp;•&nbsp; Sec UG</p>
              <p className="mt-1 flex items-center gap-1 text-[13px] font-medium text-primary">
                <Calendar className="h-3.5 w-3.5" /> 2026-27
              </p>
            </div>
            <button className="flex shrink-0 items-center gap-1 self-start rounded-xl bg-primary-soft px-3 py-2 text-[13px] font-semibold text-primary">
              View Details <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Student information */}
        <section className="rounded-3xl bg-card p-4 shadow-card">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-[16px] font-bold text-foreground">Student Information</h3>
            <button className="shrink-0 text-[13px] font-medium text-primary">
              View Full Details
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <InfoField label="Class" value="F.Y.B.COM (NEP)" />
            <InfoField label="Division" value="A" />
            <InfoField label="Roll No" value="0021" />
          </div>
          <div className="mt-2 grid grid-cols-[1fr_2fr] gap-2">
            <InfoField label="Member ID" value="2601100196" />
            <InfoField label="Email" value="chetankadali389@gmail.com" />
          </div>
          <div className="mt-2">
            <InfoField label="Mobile" value="8766088462" />
          </div>
        </section>

        {/* Documents */}
        <section className="rounded-3xl bg-card p-4 shadow-card">
          <h3 className="mb-3 text-[16px] font-bold text-foreground">Documents &amp; Receipts</h3>
          <div className="space-y-2">
            <DocRow
              icon={<ClipboardCopy className="h-4.5 w-4.5 text-violet" />}
              iconClass="bg-violet-soft"
              title="Admission Forms"
              subtitle="Download submitted admission forms for all classes"
            />
            <DocRow
              icon={<ReceiptText className="h-4.5 w-4.5 text-success" />}
              iconClass="bg-success-soft"
              title="Institute Receipts"
              subtitle="Download receipts for admission, fees, fines, exam & more"
            />
            <DocRow
              icon={<CreditCard className="h-4.5 w-4.5 text-primary-foreground" />}
              iconClass="bg-primary"
              title="Payment Acknowledgements"
              subtitle="View and download online payment acknowledgements"
              highlight
            >
              <span className="mt-2 flex flex-wrap gap-1.5">
                <span className="rounded-md bg-success-soft px-2 py-0.5 text-[11px] font-medium text-success">
                  Success
                </span>
                <span className="rounded-md bg-danger-soft px-2 py-0.5 text-[11px] font-medium text-destructive">
                  Failed
                </span>
                <span className="rounded-md bg-primary-soft px-2 py-0.5 text-[11px] font-medium text-primary">
                  Refunded
                </span>
                <span className="rounded-md bg-warning-soft px-2 py-0.5 text-[11px] font-medium text-warning">
                  Pending
                </span>
              </span>
            </DocRow>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-3xl bg-card p-4 shadow-card">
          <h3 className="mb-3 text-[16px] font-bold text-foreground">Contact</h3>
          <div className="grid grid-cols-[1.4fr_1fr] gap-2">
            <div className="flex min-w-0 items-center gap-2 rounded-2xl border border-border px-3 py-2.5">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <span className="min-w-0">
                <span className="block text-[11px] text-muted-foreground">Email</span>
                <span className="block truncate text-[13px] font-medium text-foreground">
                  chetankadali389@gmail.com
                </span>
              </span>
            </div>
            <div className="flex min-w-0 items-center gap-2 rounded-2xl border border-border px-3 py-2.5">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <span className="min-w-0">
                <span className="block text-[11px] text-muted-foreground">Mobile</span>
                <span className="block truncate text-[13px] font-medium text-foreground">
                  8766088462
                </span>
              </span>
            </div>
          </div>
        </section>

        <button className="flex w-full items-center gap-2 rounded-3xl bg-card px-4 py-4 shadow-card">
          <LogOut className="h-5 w-5 text-destructive" />
          <span className="text-[14px] font-semibold text-destructive">Sign Out</span>
        </button>
      </div>

      {/* Bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-10 px-4 pb-3">
        <div className="mx-auto flex max-w-md items-center justify-around rounded-3xl border border-border bg-card py-3 shadow-card">
          {[
            { icon: Home, label: "Home", dot: false },
            { icon: Bell, label: "Notices", dot: true },
            { icon: Wallet, label: "Fees", dot: false },
            { icon: BookOpen, label: "Library", dot: false },
          ].map(({ icon: Icon, label, dot }) => (
            <button key={label} className="relative flex flex-col items-center gap-1">
              <Icon className="h-[22px] w-[22px] text-secondary-foreground" />
              {dot && (
                <span className="absolute right-2 top-0 h-2 w-2 rounded-full bg-destructive" />
              )}
              <span className="text-[11px] text-secondary-foreground">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
