import { motion } from "framer-motion";

export default function DomainHero({
  title,
  subtitle,
  image,
  icon,
}: {
  title: string;
  subtitle: string;
  image: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-8 md:p-12"
      >
        <div className="flex items-center gap-3 text-primary font-semibold">
          {icon}
          <span>{title}</span>
        </div>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>
      </motion.div>
    </div>
  );
}
