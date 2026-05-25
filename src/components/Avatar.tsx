import clsx from 'clsx';

type AvatarProps = {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ring?: boolean;
  status?: boolean;
};

const sizeMap: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
  xl: 'w-28 h-28',
};

export default function Avatar({
  src,
  alt = 'Avatar',
  size = 'md',
  className,
  ring = true,
  status = false,
}: AvatarProps) {
  return (
    <span
      className={clsx(
        'relative inline-flex shrink-0 rounded-full overflow-hidden align-middle',
        sizeMap[size],
        ring && 'ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-bg)]',
        className,
      )}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {status && (
        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg)]" />
      )}
    </span>
  );
}
