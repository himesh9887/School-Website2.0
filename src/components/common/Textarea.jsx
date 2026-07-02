export default function Textarea({ label, error, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-extrabold text-dark">{label}</span>
      <textarea className={`form-field min-h-32 resize-none py-4 ${error ? 'border-danger focus:border-danger focus:ring-danger/10' : ''}`} {...props} />
      {error && <span className="mt-2 block text-sm font-semibold text-danger">{error}</span>}
    </label>
  );
}
