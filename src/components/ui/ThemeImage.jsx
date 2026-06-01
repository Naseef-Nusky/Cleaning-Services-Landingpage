export default function ThemeImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      {...props}
    />
  )
}
