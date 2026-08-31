import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Menu,
  Bell,
  Copy,
  ExternalLink,
  Calendar,
  User,
  Droplet,
  Receipt,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  FileText,
  ClipboardCopy,
  ReceiptText,
  Download,
  Mail,
  Phone,
  LogOut,
  Home,
  IndianRupee,
  BookOpen,
  GraduationCap,
  LayoutGrid,
  IdCard,
  CalendarDays,
  ArrowLeftRight,
  Loader2,
  Check,
  Landmark,
} from "lucide-react";
import avatar from "@/assets/student-avatar.jpg";
import campus from "@/assets/campus-illustration.jpg";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- small pieces ---------- */

function StatChip({
  icon,
  tint,
  label,
  value,
  valueClass = "text-foreground",
}: {
  icon: React.ReactNode;
  tint: string;
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2.5">
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${tint}`}>
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11.5px] leading-tight text-muted-foreground">{label}</span>
        <span className={`block truncate text-[15px] font-bold leading-tight ${valueClass}`}>
          {value}
        </span>
      </span>
    </div>
  );
}

function InfoRow({
  icon,
  tint,
  label,
  value,
  valueClass = "text-foreground",
}: {
  icon: React.ReactNode;
  tint: string;
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${tint}`}>{icon}</span>
      <span className="min-w-0">
        <span className="block text-[11.5px] leading-tight text-muted-foreground">{label}</span>
        <span className={`block truncate text-[13.5px] font-semibold leading-tight ${valueClass}`}>
          {value}
        </span>
      </span>
    </div>
  );
}

type DocOption = { name: string; meta: string };

function DocOptionRow({ opt }: { opt: DocOption }) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const timers = useRef<number[]>([]);

  const download = () => {
    if (state !== "idle") return;
    setState("loading");
    timers.current.push(
      window.setTimeout(() => {
        setState("done");
        timers.current.push(window.setTimeout(() => setState("idle"), 2600));
      }, 1600),
    );
  };

  return (
    <li
      className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 transition-colors ${
        state === "done" ? "bg-success-soft" : "bg-muted/60"
      }`}
    >
      <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-medium text-foreground">{opt.name}</span>
        <span
          className={`block text-[11px] ${
            state === "done" ? "font-medium text-success" : "text-muted-foreground"
          }`}
        >
          {state === "loading"
            ? "Downloading…"
            : state === "done"
              ? "Downloaded successfully"
              : opt.meta}
        </span>
      </span>
      <button
        onClick={download}
        disabled={state !== "idle"}
        aria-label={`Download ${opt.name}`}
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-primary-foreground transition-transform active:scale-95 ${
          state === "loading" ? "bg-muted-foreground" : state === "done" ? "bg-success" : "bg-primary"
        }`}
      >
        {state === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : state === "done" ? (
          <Check className="h-4 w-4" />
        ) : (
          <Download className="h-4 w-4" />
        )}
      </button>
    </li>
  );
}

function DocRow({
  icon,
  iconClass,
  chevClass,
  title,
  subtitle,
  options,
}: {
  icon: React.ReactNode;
  iconClass: string;
  chevClass: string;
  title: string;
  subtitle: string;
  options: DocOption[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-1 py-3 text-left hover:bg-muted/40"
      >
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${iconClass}`}>
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[14.5px] font-bold leading-tight text-foreground">
            {title}
          </span>
          <span className="mt-0.5 block text-[12px] leading-tight text-muted-foreground">
            {subtitle}
          </span>
        </span>
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${chevClass}`}>
          <ChevronDown
            className={`h-4.5 w-4.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="space-y-1.5 pb-3 pl-1 pr-1">
            {options.map((opt) => (
              <DocOptionRow key={opt.name} opt={opt} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

function Index() {
  return (
    <main className="min-h-screen bg-background pb-28 sm:py-6">
      <div className="mx-auto w-full max-w-md overflow-hidden sm:rounded-[2rem] sm:shadow-card">
        {/* Header */}
        <header className="relative overflow-hidden bg-primary px-4 pb-16 pt-4">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-primary-foreground/10"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -left-16 top-24 h-48 w-48 rounded-full bg-primary-foreground/[0.07]"
          />

          <div className="relative flex items-center justify-between">
            <button aria-label="Open menu" className="text-primary-foreground">
              <Menu className="h-7 w-7" />
            </button>
            <h1 className="text-[19px] font-bold text-primary-foreground">Student Profile</h1>
            <button aria-label="Notifications" className="relative text-primary-foreground">
              <Bell className="h-6 w-6" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-destructive" />
            </button>
          </div>

          {/* Identity */}
          <div className="relative mt-5 flex items-start gap-3">
            <div className="relative shrink-0">
              <img
                src={avatar}
                alt="Portrait of Kadali Chetan Kiran"
                width={512}
                height={512}
                className="h-[76px] w-[76px] rounded-full border-4 border-primary-foreground object-cover"
              />
              <span className="absolute -bottom-0.5 right-0 grid h-6 w-6 place-items-center rounded-full border-2 border-primary-foreground bg-primary">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10.5px] font-semibold tracking-wide text-primary-foreground/75">
                MEMBER ID
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[16px] font-bold text-primary-foreground">
                2601100196
                <Copy className="h-3.5 w-3.5 text-primary-foreground/80" />
              </p>
              <h2 className="mt-1 text-[17px] font-extrabold leading-tight text-primary-foreground">
                KADALI CHETAN KIRAN
              </h2>
              <p className="mt-1 text-[12.5px] font-medium text-primary-foreground/85">
                F.Y.B.COM (NEP) &nbsp;•&nbsp; Roll 0021
              </p>
            </div>

            <div className="shrink-0 rounded-2xl bg-card p-1.5 text-center shadow-card">
              <span className="relative block overflow-hidden rounded-md">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=2601100196"
                  alt="Student QR code"
                  loading="lazy"
                  width={78}
                  height={78}
                  className="h-[78px] w-[78px]"
                />
                <span aria-hidden className="qr-scan-line" />
              </span>
              <span className="mt-1 flex items-center justify-center gap-1 text-[10px] text-muted-foreground">
                View full QR <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          </div>
        </header>

        <div className="relative z-10 -mt-10 space-y-3.5 px-4">
          {/* DOB / Gender / Blood group */}
          <section className="rounded-3xl bg-card p-3.5 shadow-card">
            <div className="flex items-center">
              <StatChip
                icon={<Calendar className="h-5 w-5 text-primary" />}
                tint="bg-primary-soft"
                label="Date of Birth"
                value="28/06/2008"
              />
              <span className="mx-2 h-9 w-px shrink-0 bg-border" />
              <StatChip
                icon={<User className="h-5 w-5 text-violet" />}
                tint="bg-violet-soft"
                label="Gender"
                value="Male"
              />
              <span className="mx-2 h-9 w-px shrink-0 bg-border" />
              <StatChip
                icon={<Droplet className="h-5 w-5 fill-destructive text-destructive" />}
                tint="bg-danger-soft"
                label="Blood Group"
                value="A+"
              />
            </div>
          </section>

          {/* Attendance / Fees / Status */}
          <section className="rounded-3xl bg-card p-3.5 shadow-card">
            <div className="flex items-center">
              <div className="flex min-w-0 flex-1 items-center gap-2.5">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
                  style={{
                    background:
                      "conic-gradient(var(--color-success) 0deg, var(--color-border) 0deg)",
                  }}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-card text-[12px] font-bold text-success">
                    0%
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="block text-[10.5px] font-bold tracking-wide text-success">
                    ATTENDANCE
                  </span>
                  <span className="block truncate text-[13.5px] font-semibold text-foreground">
                    0 Present
                  </span>
                </span>
              </div>

              <span className="mx-2 h-14 w-px shrink-0 bg-border" />

              <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-warning-soft">
                    <Receipt className="h-5 w-5 text-warning" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10.5px] font-bold tracking-wide text-muted-foreground">
                      FEES STATUS
                    </span>
                    <span className="block truncate text-[15px] font-extrabold text-warning">
                      Pending
                    </span>
                  </span>
                </div>
                <button className="mt-1.5 flex w-full items-center justify-center gap-1 rounded-lg bg-warning-soft px-2 py-1 text-[11.5px] font-semibold text-warning">
                  View Details <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <span className="mx-2 h-14 w-px shrink-0 bg-border" />

              <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-success-soft">
                    <ShieldCheck className="h-5 w-5 text-success" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10.5px] font-bold tracking-wide text-muted-foreground">
                      STATUS
                    </span>
                    <span className="block truncate text-[15px] font-extrabold text-success">
                      Active
                    </span>
                  </span>
                </div>
                <p className="mt-1.5 text-center text-[11.5px] text-muted-foreground">
                  Good Standing
                </p>
              </div>
            </div>
          </section>

          {/* Institution */}
          <section className="relative overflow-hidden rounded-3xl shadow-card">
            <img
              src={campus}
              alt="Illustration of the college campus building"
              loading="lazy"
              width={1024}
              height={512}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-violet via-violet/85 to-transparent"
            />
            <div className="relative p-3.5">
              <div className="flex items-start justify-between gap-2">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card">
                  <Landmark className="h-6 w-6 text-primary" />
                </span>
                <button className="flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-2.5 py-1.5 text-[11.5px] font-semibold text-primary-foreground">
                  Switch Institution <ArrowLeftRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <p className="mt-2 text-[12px] font-medium text-primary-foreground/85">
                Current Institution
              </p>
              <p className="mt-0.5 max-w-[80%] text-[15px] font-extrabold leading-snug text-primary-foreground">
                DADASAHEB BIDKAR ARTS ,SCIENCE &amp; COMMERCE COLLEGE
              </p>
              <p className="mt-1 text-[12.5px] font-medium text-primary-foreground/90">
                B.Com. &nbsp;•&nbsp; Sec UG
              </p>

              <div className="mt-3 flex items-end justify-between gap-2">
                <span className="flex items-center gap-1.5 rounded-xl bg-primary-foreground/20 px-3 py-1.5 text-[12.5px] font-semibold text-primary-foreground">
                  <CalendarDays className="h-4 w-4" /> 2026-27
                </span>
                <button className="flex items-center gap-1 rounded-xl bg-card px-3 py-2 text-[12.5px] font-bold text-primary shadow-card">
                  View Details <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Student information */}
          <section className="rounded-3xl bg-card p-4 shadow-card">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-[16px] font-bold text-foreground">Student Information</h3>
              <button className="flex shrink-0 items-center gap-1 text-[12.5px] font-semibold text-primary">
                View Full Details <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative grid grid-cols-2 gap-x-3 gap-y-3">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border"
              />
              <InfoRow
                icon={<GraduationCap className="h-4.5 w-4.5 text-primary" />}
                tint="bg-primary-soft"
                label="Class"
                value="F.Y.B.COM (NEP)"
              />
              <InfoRow
                icon={<LayoutGrid className="h-4.5 w-4.5 text-primary" />}
                tint="bg-primary-soft"
                label="Division"
                value="A"
              />
              <InfoRow
                icon={<CalendarDays className="h-4.5 w-4.5 text-primary" />}
                tint="bg-primary-soft"
                label="Roll No"
                value="0021"
              />
              <InfoRow
                icon={<IdCard className="h-4.5 w-4.5 text-primary" />}
                tint="bg-primary-soft"
                label="Member ID"
                value="2601100196"
              />
              <InfoRow
                icon={<Mail className="h-4.5 w-4.5 text-primary" />}
                tint="bg-primary-soft"
                label="Email"
                value="chetankadali389@gmail.com"
                valueClass="text-primary"
              />
              <InfoRow
                icon={<Phone className="h-4.5 w-4.5 text-primary" />}
                tint="bg-primary-soft"
                label="Mobile"
                value="8766088462"
              />
            </div>
          </section>

          {/* Documents */}
          <section className="rounded-3xl bg-card p-4 shadow-card">
            <h3 className="mb-1 text-[16px] font-bold text-foreground">Documents &amp; Receipts</h3>
            <div>
              <DocRow
                icon={<ClipboardCopy className="h-5 w-5 text-primary-foreground" />}
                iconClass="bg-violet"
                chevClass="bg-violet-soft text-violet"
                title="Admission Forms"
                subtitle="Download submitted admission forms for all classes"
                options={[
                  { name: "F.Y.B.COM Admission Form 2026-27", meta: "PDF • 1.2 MB" },
                  { name: "Eligibility Form", meta: "PDF • 480 KB" },
                  { name: "Anti-Ragging Undertaking", meta: "PDF • 210 KB" },
                ]}
              />
              <DocRow
                icon={<ReceiptText className="h-5 w-5 text-success-foreground" />}
                iconClass="bg-success"
                chevClass="bg-success-soft text-success"
                title="Institute Receipts"
                subtitle="Download receipts for admission, fees, fines, exam &amp; more"
                options={[
                  { name: "Admission Fee Receipt", meta: "Receipt #RC-1042 • PDF" },
                  { name: "Tuition Fee Receipt — Term 1", meta: "Receipt #RC-1187 • PDF" },
                  { name: "Exam Form Fee Receipt", meta: "Receipt #RC-1290 • PDF" },
                ]}
              />
              <DocRow
                icon={<Download className="h-5 w-5 text-primary-foreground" />}
                iconClass="bg-primary"
                chevClass="bg-primary-soft text-primary"
                title="Payment Acknowledgements"
                subtitle="View and download online payment acknowledgements"
                options={[
                  { name: "Online Payment — TXN903412", meta: "Success • 12 Aug 2026" },
                  { name: "Online Payment — TXN903508", meta: "Failed • 12 Aug 2026" },
                  { name: "Refund Acknowledgement — RF102", meta: "Refunded • 15 Aug 2026" },
                ]}
              />
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-3xl bg-card p-4 shadow-card">
            <h3 className="mb-3 text-[16px] font-bold text-foreground">Contact</h3>
            <div className="flex items-center gap-3">
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary">
                  <Mail className="h-4.5 w-4.5 text-primary-foreground" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11.5px] text-muted-foreground">Email</span>
                  <span className="block truncate text-[11.5px] font-medium text-foreground">
                    chetankadali389@gmail.com
                  </span>
                </span>
              </div>
              <div className="flex min-w-0 items-center gap-2">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-success">
                  <Phone className="h-4.5 w-4.5 text-success-foreground" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11.5px] text-muted-foreground">Mobile</span>
                  <span className="block truncate text-[11.5px] font-medium text-foreground">
                    8766088462
                  </span>
                </span>
              </div>
              <button className="flex shrink-0 items-center gap-1.5 rounded-xl border border-destructive/40 bg-danger-soft/50 px-3 py-2.5 text-[13.5px] font-bold text-destructive">
                <LogOut className="h-4.5 w-4.5" /> Sign Out
              </button>
            </div>
          </section>
        </div>

        {/* Bottom nav */}
        <nav className="fixed inset-x-0 bottom-0 z-10 px-3 pb-2">
          <div className="mx-auto flex max-w-md items-center justify-around rounded-3xl border border-border bg-card py-2.5 shadow-card">
            {[
              { icon: Home, label: "Home", active: true, dot: false },
              { icon: Bell, label: "Notices", active: false, dot: false },
              { icon: IndianRupee, label: "Fees", active: false, dot: false },
              { icon: BookOpen, label: "Library", active: false, dot: false },
            ].map(({ icon: Icon, label, active }) => (
              <button key={label} className="relative flex flex-col items-center gap-0.5">
                <Icon
                  className={`h-[22px] w-[22px] ${active ? "fill-primary text-primary" : "text-secondary-foreground"}`}
                />
                <span
                  className={`text-[11px] ${active ? "font-semibold text-primary" : "text-secondary-foreground"}`}
                >
                  {label}
                </span>
                {active && <span className="h-1 w-1 rounded-full bg-primary" />}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
