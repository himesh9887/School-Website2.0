export default function Input({ label, error, icon: Icon, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-extrabold text-dark">{label}</span>
      <span className="relative block">
        {Icon && <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />}
        <input className={`form-field ${Icon ? 'pl-11' : ''} ${error ? 'border-danger focus:border-danger focus:ring-danger/10' : ''}`} {...props} />
      </span>
      {error && <span className="mt-2 block text-sm font-semibold text-danger">{error}</span>}
    </label>
  );
}
