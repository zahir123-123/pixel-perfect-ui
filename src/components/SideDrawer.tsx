import {
  X,
  Home,
  User,
  Bell,
  CreditCard,
  BookOpen,
  ArrowLeftRight,
  CalendarDays,
  BarChart3,
  Settings,
  GraduationCap,
  LogOut,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import avatar from "@/assets/student-avatar.jpg";

const items = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: User, label: "My Profile" },
  { icon: Bell, label: "Notifications", badge: "NEW" },
  { icon: CreditCard, label: "Fee Details" },
  { icon: BookOpen, label: "Digital Library" },
  { icon: ArrowLeftRight, label: "Switch Institute" },
  { icon: CalendarDays, label: "Timetable" },
  { icon: BarChart3, label: "Results" },
];

export function SideDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      {/* Scrim */}
      <button
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-foreground/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`absolute inset-y-0 left-0 flex w-[83%] max-w-[330px] flex-col overflow-hidden rounded-r-[2rem] bg-card shadow-card transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="relative shrink-0 overflow-hidden rounded-br-[2rem] bg-primary px-4 pb-5 pt-5">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full bg-primary-foreground/10"
          />
          <div className="relative flex items-start gap-3">
            <img
              src={avatar}
              alt="Portrait of Kadali Chetan Kiran"
              width={512}
              height={512}
              className="h-[62px] w-[62px] shrink-0 rounded-full border-[3px] border-primary-foreground object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[17px] font-extrabold leading-tight text-primary-foreground">
                KADALI CHETAN …
              </p>
              <p className="mt-0.5 truncate text-[13px] font-semibold text-primary-foreground/90">
                F.Y.B.COM (NEP) • ---
              </p>
              <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/20 px-2.5 py-1 text-[12px] font-bold text-primary-foreground">
                <ShieldCheck className="h-3.5 w-3.5" /> Verified Student
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-foreground/20 text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative mt-3 flex items-end justify-between gap-3">
            <p className="font-serif text-[19px] italic text-primary-foreground">
              Good to see you!
            </p>
            <p className="border-b border-primary-foreground/50 pb-1 text-right font-serif text-[11.5px] italic leading-tight text-primary-foreground/90">
              Learn
              <br />
              Grow
              <br />
              Succeed
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4 pt-4">
          <p className="px-2 pb-2 text-[12.5px] font-bold tracking-wide text-muted-foreground">
            MENU
          </p>
          <ul>
            {items.map(({ icon: Icon, label, badge, active }) => (
              <li key={label}>
                <button
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-colors ${
                    active ? "bg-primary-soft" : "hover:bg-muted"
                  }`}
                >
                  <Icon
                    className={`h-[22px] w-[22px] shrink-0 ${
                      active ? "fill-primary/20 text-primary" : "text-foreground"
                    }`}
                  />
                  <span
                    className={`min-w-0 flex-1 truncate text-[15.5px] ${
                      active ? "font-bold text-primary" : "font-medium text-foreground"
                    }`}
                  >
                    {label}
                  </span>
                  {badge && (
                    <span className="shrink-0 rounded-md bg-destructive px-2 py-0.5 text-[11px] font-bold text-destructive-foreground">
                      {badge}
                    </span>
                  )}
                  <ChevronRight
                    className={`h-4.5 w-4.5 shrink-0 ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="my-3 h-px bg-border" />

          <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left hover:bg-muted">
            <Settings className="h-[22px] w-[22px] shrink-0 text-foreground" />
            <span className="flex-1 text-[15.5px] font-medium text-foreground">Settings</span>
            <ChevronRight className="h-4.5 w-4.5 text-muted-foreground" />
          </button>

          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-primary-soft/70 p-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft">
              <GraduationCap className="h-6 w-6 text-primary" />
            </span>
            <span className="h-9 w-px bg-border" />
            <span className="min-w-0 flex-1">
              <span className="block text-[14.5px] font-bold text-foreground">Stay Connected</span>
              <span className="block text-[11.5px] leading-tight text-muted-foreground">
                Get important updates &amp; never miss anything.
              </span>
            </span>
            <ChevronRight className="h-4.5 w-4.5 shrink-0 text-primary" />
          </div>

          <button className="mt-3 flex w-full items-center gap-3 rounded-2xl bg-danger-soft/70 px-3 py-3.5 text-left">
            <LogOut className="h-[22px] w-[22px] shrink-0 text-destructive" />
            <span className="flex-1 text-[15.5px] font-bold text-destructive">Sign Out</span>
            <ChevronRight className="h-4.5 w-4.5 text-destructive" />
          </button>

          <div className="mt-5 flex items-center justify-center gap-2 text-[12.5px] text-muted-foreground">
            <span className="h-px w-5 bg-border" />A Brighter Future Awaits You
            <span className="h-px w-5 bg-border" />
          </div>
        </nav>

        {/* Wave footer */}
        <div aria-hidden className="shrink-0">
          <svg viewBox="0 0 400 90" className="h-[70px] w-full" preserveAspectRatio="none">
            <path d="M0 40 C 80 5, 160 70, 260 35 S 400 20, 400 30 L400 90 L0 90 Z" fill="var(--color-primary-soft)" />
            <path d="M0 60 C 90 30, 180 85, 280 55 S 400 45, 400 55 L400 90 L0 90 Z" fill="var(--color-accent)" opacity="0.8" />
          </svg>
        </div>
      </aside>
    </div>
  );
}
