
import { CtaAnchor } from "./CtaAnchor";

export function PlaygroundButton({
  size = "md",
  variant = "primary",
}: {
  size?: "sm" | "md";
  variant?: "primary" | "secondary";
}) {
  const href = "https://zcal.co/t/newmode/discovery";

  return (
    <CtaAnchor
      href={href}
      size={size}
      variant={variant}
      target="_blank"
      rel="noopener noreferrer"
    >
      Book your demo
    </CtaAnchor>
  );
}

